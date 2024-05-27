"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await db.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const { id } = request.nextUrl.searchParams;
  const updatedProduct: Product = await request.json();

  try {
    const product = await db.product.update({
      where: { id: parseInt(id) },
      data: {
        title: updatedProduct.title,
        image: updatedProduct.image,
        price: updatedProduct.price,
        description: updatedProduct.description,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
