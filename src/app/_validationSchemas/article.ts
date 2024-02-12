import { z } from "zod";

export const ArticleInputSchema = z.object({
  title: z.string().min(2).max(255).trim(),
  content: z.string().min(2).max(2048),
  authorId: z.string().uuid(),
});

export type ArticleInput = z.infer<typeof ArticleInputSchema>;
