🎤 Voice → Excel AI App

一个基于语音输入的智能数据录入系统（AI-powered voice data entry system），实现：

🎯 语音 → 结构化数据 → Excel 自动更新

⸻

✨ Features 功能亮点
	•	🎤 Speech-to-Text（语音转文本）
支持高精度语音识别（讯飞 / 阿里云），实时获取用户语音内容
	•	🧠 Semantic Parsing（语义解析）
使用 DeepSeek 将自然语言（如“昨天阅读2分”）解析为结构化 JSON
	•	📊 Auto Excel Writing（自动写入 Excel）
通过金山文档（WPS）API 自动更新表格数据
	•	⚡ End-to-End Automation（全流程自动化）
从语音输入到数据落库，全流程无需手动干预

⸻

🧩 Tech Stack 技术栈
	•	Framework: Next.js (App Router)
	•	Language: TypeScript
	•	Database & Auth: Supabase
	•	LLM: DeepSeek API
	•	Speech Recognition:
	•	科大讯飞（流式）
	•	或 阿里云一句话识别（推荐）
	•	Excel Integration: 金山文档 API（WPS AirScript）

⸻

🔄 AI Workflow 工作流程
🎤 Voice Input
   ↓
📝 Speech-to-Text (ASR)
   ↓
🧠 AI Parsing (DeepSeek → JSON)
   ↓
📊 Write to Excel (WPS API)
   ↓
✅ Done

🧪 Example 示例

输入（语音）：
昨天阅读2分
AI 输出（JSON）：
{
  "date": "2026-03-16",
  "scores": [
    { "subject": "阅读", "score": 2 }
  ]
}

🚀 Getting Started 快速开始
git clone https://github.com/lecherme/voice-excel.git
cd voice-excel
npm install
npm run dev

🔐 Environment Variables 环境变量配置

在 .env.local 中填写：
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# LLM
DEEPSEEK_API_KEY=

# 或阿里云语音识别api
ALI_ACCESS_KEY_ID=
ALI_ACCESS_KEY_SEC=
ALI_NLS_APP_KEY=

# WPS / 金山文档
KDOCS_ACCESS_TOKEN=