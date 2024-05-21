import { db } from "../db";

// Här kommer våra mockade produkter finnas, som är för kodade utan url bilderna
async function product() {
  await db.product.upsert({
    where: { id: 3 },
    update: {},
    create: {
      image:
        "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
      title: "Badring2",
      price: 259,
      description: "Badringar är jätte kul",
    },
  });
}

product()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
