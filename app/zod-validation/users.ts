import { z } from "zod";

export const UserCreateSchema = z.object({
  email: z.string().email().min(5),
  name: z.string().min(5).max(25),
  password: z.string().min(5).max(25),
});

export type UserCreate = z.infer<typeof UserCreateSchema>;

export const customerSchema = z.object({
  fullname: z.string().min(1, { message: "Please write your name." }),

  street: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" }),

  zip: z.coerce
    .number()
    .min(10000, { message: "Please enter a valid zip code" })
    .max(99999, { message: "Please enter a valid zip code" }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" }),

  email: z.string().email({ message: "Invalid email format" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" }),
});
