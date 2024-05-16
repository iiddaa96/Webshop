"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { ProductCreate, ProductCreateSchema } from "../zod-validation/products";

// Funkar inte just nu !!
export async function saveProduct(incomingData: ProductCreate) {
  const postData = ProductCreateSchema.parse(incomingData);
  const post = await db.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      authorId: 1,
    },
  });
  console.log("Post created:", post);

  revalidatePath("/");
}
