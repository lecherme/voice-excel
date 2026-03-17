🎤 Voice → Excel AI App

一个基于语音输入的智能数据录入系统（AI-powered voice data entry system），实现：

「语音 → 结构化数据 → Excel 自动更新」

⸻

✨ Features 功能亮点
	•	🎤 Speech-to-Text（语音转文本）
基于讯飞 API，实现高精度语音识别
	•	🧠 Semantic Parsing（语义解析）
使用 DeepSeek 将自然语言转换为结构化 JSON
	•	📊 Auto Excel Writing（自动写入 Excel）
通过 WPS / 金山文档 API 自动更新表格
	•	⚡ End-to-End Automation（全流程自动化）
无需手动录入，提高数据录入效率

⸻

🧩 Tech Stack 技术栈
	•	Frontend / Backend: Next.js (App Router)
	•	Language: TypeScript
	•	Database & Auth: Supabase
	•	LLM: DeepSeek API
	•	Speech Recognition: 科大讯飞 API
	•	Excel Integration: 金山文档 API（WPS AirScript）

⸻

🔄 AI Workflow 工作流程：
🎤 Voice Input
   ↓
📝 Speech-to-Text (讯飞)
   ↓
🧠 AI Parsing (DeepSeek → JSON)
   ↓
📊 Write to Excel (WPS API)
   ↓
✅ Done

🚀 Getting Started 快速开始：
git clone https://github.com/lecherme/voice-excel.git
cd your-repo
npm install
npm run dev

🔐 Environment Variables 环境变量配置

在 .env.local 中填写：
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

DEEPSEEK_API_KEY=

XUNFEI_API_KEY=
XUNFEI_API_SECRET=

KDOCS_ACCESS_TOKEN=