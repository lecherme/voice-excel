"use client";

import { useRef, useState } from "react";
import Recorder from "recorder-core";
import "recorder-core/src/engine/pcm";

export default function VoiceRecorder() {
  const recorderRef = useRef<any>(null);
  const isStartedRef = useRef(false);

  const [recording, setRecording] = useState(false);
  const [cancel, setCancel] = useState(false);

  const startY = useRef(0);

  // 初始化
  const initRecorder = async () => {
    recorderRef.current = Recorder({
      type: "pcm",
      sampleRate: 16000,
      bitRate: 16,
    });
  };

  // 开始录音
  const start = async (e: any) => {
    if (!recorderRef.current) {
      await initRecorder();
    }

    startY.current = e.touches ? e.touches[0].clientY : e.clientY;

    recorderRef.current.open(
      () => {
        recorderRef.current.start();
        isStartedRef.current = true;
        setRecording(true);
        setCancel(false);
        console.log("开始录音");
      },
      (err: any) => {
        console.error("录音失败:", err);
      }
    );
  };

  // 移动（判断是否取消）
  const move = (e: any) => {
    if (!recording) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;

    // 上滑超过 50px → 取消
    if (startY.current - currentY > 50) {
      setCancel(true);
    } else {
      setCancel(false);
    }
  };

  // 停止录音
  const stop = async () => {
    if (!isStartedRef.current) return;

    recorderRef.current.stop(
      async (blob: Blob, duration: number) => {
        isStartedRef.current = false;
        setRecording(false);

        console.log("录音完成", blob, duration);

        // ❌ 如果取消
        if (cancel) {
          console.log("用户取消发送");
          return;
        }

        // ❌ 太短不发送
        if (duration < 500) {
          console.log("录音太短");
          return;
        }

        const formData = new FormData();
        formData.append("file", blob, "audio.pcm");

        const res = await fetch("/api/speech", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log("识别结果:", data.text);
      },
      (err: any) => {
        console.error("停止失败:", err);
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={stop}
        onMouseLeave={stop}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={stop}
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: recording
            ? cancel
              ? "#ef4444" // 红色：取消
              : "#22c55e" // 绿色：录音
            : "#6b7280", // 灰色：默认
          color: "#fff",
          fontSize: 16,
          border: "none",
        }}
      >
        {recording ? (cancel ? "松开取消" : "松开发送") : "按住说话"}
      </button>

      {/* 状态提示 */}
      {recording && !cancel && <div>🎤 正在录音...</div>}
      {recording && cancel && <div>❌ 松开取消发送</div>}
    </div>
  );
}