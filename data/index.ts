import { z } from "zod";

/**
 * Beskriver en produkt som ska säljas på sidan.
 **/
export const productSchema = z.object({
  id: z.number(),
  title: z.string().min(5, { message: "Titel måste innehålla minst 5 tecken" }),
  image: z.string().url(),
  price: z.coerce.number().positive({ message: "Skriv in ett nummer" }),
  description: z
    .string()
    .min(1)
    .max(400, { message: "Inlägget får vara 400 tecken långt" }),
});

export type Product = z.infer<typeof productSchema>;

export interface CartItem extends Product {
  quantity: number;
}
