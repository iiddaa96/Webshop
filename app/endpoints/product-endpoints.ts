"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";

export async function getAllProducts() {
  await db.product.findMany();
}

export async function editProduct(updatedProduct: Product) {
  await db.product.update({
    where: { id: updatedProduct.id },
    data: {
      title: updatedProduct.title,
      image: updatedProduct.image,
      price: updatedProduct.price,
      description: updatedProduct.description,
    },
  });
}

export async function addNewProduct(
  newProduct: Product,
  chosenCategory: string
) {
  // Check if the category exists
  const category = await db.category.findUnique({
    where: {
      name: chosenCategory,
    },
  });

  if (!category) {
    // If the category doesn't exist, create it
    await db.category.create({
      data: {
        name: chosenCategory,
      },
    });
  }

  // Create the new product and connect it to the category
  await db.product.create({
    data: {
      title: newProduct.title,
      image: newProduct.image,
      price: newProduct.price,
      description: newProduct.description,
      categories: {
        connect: {
          name: chosenCategory,
        },
      },
    },
  });
}
