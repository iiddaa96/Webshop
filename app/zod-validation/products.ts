import { z } from "zod";

export const ProductCreateSchema = z.object({
  title: z.string().min(3).max(170),
  description: z.string().min(5).max(500),
  price: z.number().int().positive(),
});

export type ProductCreate = z.infer<typeof ProductCreateSchema>;
