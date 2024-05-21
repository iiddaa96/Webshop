import { db } from "../db";
import { seedCatorgories as seedCatorgoriesWithProducts } from "./categoryWithProducts";
import { order as seedOrder } from "./order";
import { user as seedUser } from "./user";

// Skapar default användare
async function main() {
  await seedCatorgoriesWithProducts();
  await seedUser();
  await seedOrder();
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
