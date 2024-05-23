import { db } from "../db";
import { admin as seedAdmin } from "./admin";
import { seedCategories as seedCategoriesWithProducts } from "./categoryWithProducts";
import { user as seedUser } from "./user";
// Skapar default användare
async function main() {
  await seedCategoriesWithProducts();
  await seedUser();
  await seedAdmin();
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
