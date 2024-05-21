import { db } from "../db";
import { admin as seedAdmin } from "./admin";
import { seedCatorgories as seedCatorgoriesWithProducts } from "./categoryWithProducts";
import { user as seedUser } from "./user";
// Skapar default användare
async function main() {
  await seedCatorgoriesWithProducts();
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
