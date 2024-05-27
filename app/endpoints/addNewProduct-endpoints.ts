import { db } from "@/prisma/db";
import { Product } from "@prisma/client";

// Funktion för att lägga till en ny produkt
export async function addNewProduct(newProductData: Product) {
  try {
    // Använd Prisma's create-metod för att lägga till en ny produkt i databasen
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
