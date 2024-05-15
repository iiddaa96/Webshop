import { db } from "./db";

// Här kommer våra mockade produkter finnas, som är för kodade utan url bilderna
async function main() {
  await db.products.upsert({
    where: {},
    update: {},
    create: {
      products: {
        create: [
          {
            image:
              "https://static.partyking.org/fit-in/1300x0/products/original/uppblasbar-strandboll-86181-1.jpg",
            title: "Produkt1",
            description: "Badbollar är kul",
          },
          {
            image:
              "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNGDX8QSAwY5qM_gmSAcbTHd38VHGwU0BkRKz1yzm02sVauMFi9GHLixQRlRmhVt0Sbk3zBC9HVuIR9OE9cNu9ofqiwstdvZRc2JpkaLz0kdlRVts9AyYg",
            title: "Produkt2",
            description: "Badringar är jätte kul",
          },
        ],
      },
    },
  });
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
