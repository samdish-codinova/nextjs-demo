import { z } from "zod";

export const AuthorInputSchema = z.object({
  name: z.string().min(2).trim(),
  avatar: z.string().url(),
});

export type AuthorInputSchema = z.infer<typeof AuthorInputSchema>;
