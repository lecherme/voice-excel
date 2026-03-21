import {  Output, generateText }  from 'ai';
import { deepseek } from "@ai-sdk/deepseek";
import { ExtractionResultSchema } from '@/validation/score-item-schema';


export async function parseText(text: string) {
  const now = new Date();
  const today = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    }).format(new Date()).replace(/\//g, "-");
//   if(!!texts && texts.length !== 0){
//     text = texts[0].content[0].text
//     console.log(texts[0].content[0].text, 'texts[0].content[0].text')
//   }
  const { output } = await generateText({
    model: deepseek("deepseek-chat"),
    // 定义严格的输出 Schema
    output: Output.object({
      schema: ExtractionResultSchema
    }),
    prompt: `
        你是一个教育数据分类助手。

        任务：请从用户输入中提取：
            1. 日期（支持 today / yesterday / 具体日期），必须返回合法 date（YYYY-MM-DD），不能为空。
            2. 科目和分数
        【规则】
        1. 日期（支持 today / yesterday / 具体日期）
        2. 科目和分数
        3. 只要出现“科目 + 数字”，必须提取到 scores
        4. 不允许忽略任何分数信息
        5. 即使有日期，也必须提取 score
        6. 今天的日期（北京时间）：${today}
        7. 如果有 today → 使用今天日期
        8. 如果有明确日期 → 直接使用
        9. 即使没有分数，也要尽量提取日期

        【科目映射】
        阅读 / 编程 / 语法 / raz / 数学 / 其他

        【输出格式】
        {
        "date": "",
        "scores": [
            { "subject": "阅读", "score": 2 }
        ]
        }

        【示例】
        输入：昨天阅读2分
        输出：
        {
        "date": "",
        "scores": [
            { "subject": "阅读", "score": 2 }
        ]
        }

        输入：阅读2分
        输出：
        {
        "date": "",
        "scores": [
            { "subject": "阅读", "score": 2 }
        ]
        }

        用户输入：
        ${text}
    `

  });
  return output
}