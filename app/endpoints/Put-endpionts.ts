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
