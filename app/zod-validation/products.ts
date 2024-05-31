import { z } from "zod";

export const ProductCreateSchema = z.object({
  title: z.string().min(3).max(170),
  description: z.string().min(5).max(500),
  price: z.number().int().positive(),
});

export type ProductCreate = z.infer<typeof ProductCreateSchema>;

export const productSchema = z.object({
  id: z.number(),
  image: z.string().url().optional(),
  title: z
    .string()
    .min(5, { message: "Titel måste innehålla minst 5 tecken" })
    .optional(),
  price: z.coerce.number().positive({ message: "Skriv in ett nummer" }),
  inventory: z.coerce
    .number()
    .positive({ message: "Skriv in ett nummer" })
    .optional(),
  description: z
    .string()
    .min(1)
    .max(1200, { message: "Inlägget får vara 400 tecken långt" })
    .optional(),
});

export type Product = z.infer<typeof productSchema>;

export interface CartItem extends Product {
  quantity: number;
}
