"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";
import { Item } from "../checkout/components/TotalPrice";

export async function getAllProducts() {
  await db.product.findMany();
}

export async function editProduct(
  updatedProduct: Product,
  oldProduct: Product
) {
  await db.product.update({
    where: { id: updatedProduct.id },
    data: {
      title: oldProduct.title,
      image: oldProduct.image,
      price: oldProduct.price,
      inventory: oldProduct.inventory,
      description: oldProduct.description,
      categories: {
        connect: {
          name: "",
        },
      },
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
      inventory: newProduct.inventory,
      description: newProduct.description,
      categories: {
        connect: {
          name: chosenCategory,
        },
      },
    },
  });
}

export async function updateProductInventory(cartData: Item[]) {
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
