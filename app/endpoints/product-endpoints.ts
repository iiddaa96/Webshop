"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { ProductCreate, ProductCreateSchema } from "../zod-validation/products";

export async function getAllProducts(request: NextRequest) {
  const products = await db.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

// Funkar inte just nu !!
export async function createProduct(incomingData: ProductCreate) {
  const productData = ProductCreateSchema.parse(incomingData);
  const product = await db.post.create({
    data: {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      authorId: 1, //hårdkodat
    },
  });
  console.log("product created:", product);

  revalidatePath("/");
}
