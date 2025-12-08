import { z } from "zod";

export const registerUserSchema = z.object({
  id: z.string().min(3),
  email: z.string().min(3),
  name: z.string().optional(),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  coverImage: z.string().optional(),
  skills: z.array(z.number()).optional(),
});
