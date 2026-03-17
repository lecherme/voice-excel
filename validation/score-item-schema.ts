import { z } from "zod";

export const SubjectEnum = z.enum([
  "阅读",
  "编程",
  "语法",
  "raz",
  "数学",
  "其他",
]);

export const ScoreItemSchema = z.object({
//   original_text: z.string(),
  subject: SubjectEnum,
  score: z.number().int().positive(),
});

export const ExtractionResultSchema = z.object({
  date: z.string().min(1),
  scores: z.array(ScoreItemSchema),
});