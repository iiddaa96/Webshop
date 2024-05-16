import { z } from "zod";

export const UserCreateSchema = z.object({
  email: z.string().email().min(5),
  name: z.string().min(5).max(25),
  password: z.string().min(5).max(25),
});

export type UserCreate = z.infer<typeof UserCreateSchema>;
