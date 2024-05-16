import { db } from "./db";

// Skapar default användare
async function user() {
  const test = await db.user.upsert({
    where: { email: "test@testsson.se" },
    update: {},
    create: {
      email: "test@testsson.se",
      name: "Tess",
      password: "fisonofensn9oie",
    },
  });
}

user()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

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
