("use server");

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function update(request: NextRequest) {
  const products = await db.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function editProduct(updatedProduct: Product) {
  return await db.product.update({
    where: { id: updatedProduct.id },
    data: {
      title: updatedProduct.title,
      image: updatedProduct.image,
      price: updatedProduct.price,
      description: updatedProduct.description,
    },
  });
}

export async function duplicateProduct(productId: number) {
  // Find the product to duplicate
  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  // Create a new product with the same data
  const duplicatedProduct = await db.product.create({
    data: {
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      // Any other fields you need to duplicate
    },
  });

  return duplicatedProduct;
}
