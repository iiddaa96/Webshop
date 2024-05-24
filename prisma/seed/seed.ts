import { db } from "../db";
import admin from "./admin";
import { seedCategories as seedCategoriesWithProducts } from "./categoryWithProducts";
import { seedOrders } from "./order";
import { product as seedProducts } from "./product";
import { user as seedUser } from "./user";

async function main() {
  await seedCategoriesWithProducts();
  await seedUser();
  await admin();
  await seedProducts();
  await seedOrders();
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
