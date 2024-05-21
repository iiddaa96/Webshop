import { db } from "../db";
import { seedCatorgories as seedCatorgoriesWithProducts } from "./categoryWithProducts";
import { user as seedUser } from "./user";
import { products } from "../products";
import { PrismaClient } from "@prisma/client";

//lägga Produckter I databas

const prisma = new PrismaClient();
async function add() {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

add()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// Skapar default användare
async function main() {
  await seedCatorgoriesWithProducts();
  await seedUser();
  // await seed other stuff
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
