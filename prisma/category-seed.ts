import { db } from "./db";

// Skapar default kategorier
async function categories() {
  const categories = [
    { name: "Nyheter" },
    { name: "Badleksaker" },
    { name: "Handdukar" },
    { name: "Rea" },
  ];

  for (const category of categories) {
    await db.category.upsert({
      where: { name: category.name },
      update: {},
      create: {
        name: category.name,
      },
    });
  }
}

categories()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

  