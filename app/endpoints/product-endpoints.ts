"use server";

import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function getAllProducts(request: NextRequest) {
  const products = await db.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function editProduct() {
  const products = await db.product.findMany();
}
