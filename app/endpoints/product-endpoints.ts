"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";
import { CartItem } from "../zod-validation/products";

export async function getAllProducts() {
  await db.product.findMany();
}

export async function editProduct(
  updatedProduct: Product,
  chosenCategories: number[],
  id: number
) {
  await db.product.update({
    where: { id: id },
    data: {
      isArchived: true,
    },
  });

  await db.product.create({
    data: {
      ...updatedProduct,
      categories: {
        connect: chosenCategories.map((id) => ({
          id,
        })),
      },
    },
  });
}

export async function addNewProduct(
  newProduct: Product,
  chosenCategories: number[]
) {
  // Create the new product and connect it to the category
  await db.product.create({
    data: {
      title: newProduct.title,
      image: newProduct.image,
      price: newProduct.price,
      inventory: newProduct.inventory,
      description: newProduct.description,
      categories: {
        connect: chosenCategories.map((id) => ({
          id,
        })),
      },
    },
  });
}

export async function updateProductInventory(cartData: CartItem[]) {
  // Iterate through the cartData array
  for (const item of cartData) {
    // Find the product with the corresponding id
    const product = await db.product.findUnique({
      where: {
        id: item.id,
      },
    });

    if (product) {
      // Update the product's inventory by subtracting the quantity in the cartData
      await db.product.update({
        where: {
          id: item.id,
        },
        data: {
          inventory: product.inventory - item.quantity,
        },
      });
    }
  }
}
