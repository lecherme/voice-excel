import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const tokenRes = await fetch("http://localhost:3000/api/token");
  const { token } = await tokenRes.json();
  console.log(token, '测试token')
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return Response.json({ error: "no file" }, { status: 400 });
  }
  console.log(file.type, 'fileType')
  console.log(file.size,'fileSize')
  // 👉 转成 buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  // 👉 调阿里云
const url = `https://nls-gateway-cn-shanghai.aliyuncs.com/stream/v1/asr` +
    `?appkey=${process.env.ALI_NLS_APP_KEY}` +
    `&format=pcm` +
    `&sample_rate=16000` +
    `&enable_punctuation_prediction=true` +
    `&enable_inverse_text_normalization=true`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-NLS-Token": token,
      "Content-Type": "application/octet-stream",
      "Content-Length": buffer.length.toString(), // 👉 有些环境必须加
    },
    body: buffer,
  });

  const data = await res.json();

  console.log("阿里云返回:", data);

  return Response.json({
    text: data.result || "",
    raw: data,
  });
}