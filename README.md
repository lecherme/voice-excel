🎤 Voice → Excel AI App

一个基于语音输入的智能数据录入系统（AI-powered voice data entry system），实现：

🎯 语音 → 结构化数据 → Excel 自动更新

⸻

✨ Features 功能亮点<br />
	•	🎤 Speech-to-Text（语音转文本）<br />
支持高精度语音识别（讯飞 / 阿里云），实时获取用户语音内容<br />
	•	🧠 Semantic Parsing（语义解析）<br />
使用 DeepSeek 将自然语言（如“昨天阅读2分”）解析为结构化 JSON<br />
	•	📊 Auto Excel Writing（自动写入 Excel）<br />
通过金山文档（WPS）API 自动更新表格数据<br />
	•	⚡ End-to-End Automation（全流程自动化）<br />
从语音输入到数据落库，全流程无需手动干预<br />

⸻

🧩 Tech Stack 技术栈<br />
	•	Framework: Next.js (App Router)<br />
	•	Language: TypeScript<br />
	•	Database & Auth: Supabase<br />
	•	LLM: DeepSeek API<br />
	•	Speech Recognition:<br />
	•	阿里云一句话识别（推荐）<br />
	•	Excel Integration: 金山文档 API（WPS AirScript）<br />

⸻

🔄 AI Workflow 工作流程
🎤 Voice Input<br />
   ↓<br />
📝 Speech-to-Text (ASR)<br />
   ↓<br />
🧠 AI Parsing (DeepSeek → JSON)<br />
   ↓<br />
📊 Write to Excel (WPS API)<br />
   ↓<br />
✅ Done<br />

🧪 Example 示例

输入（语音）：
昨天阅读2分
AI 输出（JSON）：
{<br />
  "date": "2026-03-16",<br />
  "scores": [<br />
    { "subject": "阅读", "score": 2 }<br />
  ]<br />
}<br />

🚀 Getting Started 快速开始<br />
git clone https://github.com/lecherme/voice-excel.git<br />
cd voice-excel<br />
npm install<br />
npm run dev<br />

🔐 Environment Variables 环境变量配置

在 .env.local 中填写：
# Supabase
NEXT_PUBLIC_SUPABASE_URL=<br />
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# LLM
DEEPSEEK_API_KEY=

# 或阿里云语音识别api
ALI_ACCESS_KEY_ID=<br />
ALI_ACCESS_KEY_SEC=<br />
ALI_NLS_APP_KEY=

# WPS / 金山文档
KDOCS_ACCESS_TOKEN=