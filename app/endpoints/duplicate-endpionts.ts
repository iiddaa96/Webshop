"use server";

import { db } from "@/prisma/db";

export async function duplicateProduct(productId: number) {
  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  const duplicatedProduct = await db.product.create({
    data: {
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    },
  });

  return duplicatedProduct;
}
