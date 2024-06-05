"use server";

import { db } from "@/prisma/db";
import { Product } from "@prisma/client";
import { CartItem } from "../zod-validation/products";

export async function getAllProducts() {
  try {
    await db.product.findMany();
  } catch (error) {
    console.error("Failed to retrieve all products");
    throw new Error("Failed to retrieve all products");
  }
}

export async function editProduct(
  updatedProduct: Product,
  chosenCategories: number[],
  id: number
) {
  try {
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
  } catch (error) {
    console.error("Failed to edit product");
    throw new Error("Failed to edit product");
  }
}

export async function addNewProduct(
  newProduct: Product,
  chosenCategories: number[]
) {
  try {
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
  } catch (error) {
    console.error("Failed to add new product", error);
    throw new Error("Failed to add new product");
  }
}

export async function updateProductInventory(cartData: CartItem[]) {
  try {
    for (const item of cartData) {
      const product = await db.product.findUnique({
        where: {
          id: item.id,
        },
      });

      if (product) {
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
  } catch (error) {
    console.error("Failed to update product inventory");
    throw new Error("Failed to update product inventory");
  }
}
export async function deleteProduct(id: number) {
  try {
    await db.product.update({
      where: { id: id },
      data: {
        isArchived: true,
      },
    });
  } catch (error) {
    console.error("Failed to delete product");
    throw new Error("Failed to delete product");
  }
}
