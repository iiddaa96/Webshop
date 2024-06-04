import { db } from "@/prisma/db";
import { Product } from "@prisma/client";

export async function addNewProduct(newProductData: Product) {
  try {
    const newProduct = await db.product.create({
      data: {
        title: newProductData.title,
        image: newProductData.image,
        price: newProductData.price,
        description: newProductData.description,
      },
    });

    return newProduct;
  } catch (error) {
    console.error("Failed to add new product:", error);
    throw new Error("Failed to add new product"); // Kasta ett fel om det misslyckades
  }
}
