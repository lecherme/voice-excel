# 🎤 Voice → Excel AI App

一个基于语音输入的智能数据录入系统，实现「语音 → 结构化数据 → Excel 自动更新」。

---

## ✨ Features

- 🎤 语音输入转文本（讯飞 API）
- 🧠 基于 DeepSeek 的语义解析（文本 → JSON）
- 📊 自动写入 WPS Excel（AirScript）
- ⚡ 全流程自动化，无需手动录入

---

## 🧩 Tech Stack

- Next.js (App Router)
- TypeScript  
- Supabase  
- DeepSeek API  
- 科大讯飞 API  
- 金山文档 API  

---

## 🔄 AI Workflow


---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev

.env.local configuration:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

DEEPSEEK_API_KEY=

XUNFEI_API_KEY=
XUNFEI_API_SECRET=

KDOCS_ACCESS_TOKEN=