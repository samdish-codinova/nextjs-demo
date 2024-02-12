import { z } from "zod";

export const ArticleInputSchema = z.object({
  title: z.string().min(2).max(255).trim(),
  content: z.string().min(2).max(2048),
  authorId: z.string().uuid(),
});

export type ArticleInput = z.infer<typeof ArticleInputSchema>;

export const ArticleUpdateSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(2).max(255).trim(),
  content: z.string().min(2).max(2048),
});

export type ArticleUpdate = z.infer<typeof ArticleUpdateSchema>;
