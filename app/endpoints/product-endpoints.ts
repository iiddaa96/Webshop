"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";

export async function getAllProducts() {
  await db.product.findMany();
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

export async function addProduct();
