import { db } from "./db";

// Här kommer våra mockade produkter finnas, som är för kodade utan url bilderna
async function product() {
  await db.products.upsert({
    where: {},
    update: {},
    create: {
      products: {
        create: [
          {
            image:
              "https://static.partyking.org/fit-in/1300x0/products/original/uppblasbar-strandboll-86181-1.jpg",
            title: "Badboll1",
            description: "Badbollar är kul",
          },
          {
            image:
              "https://homeofess.com/pub_images/original/calile13.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
            title: "Badring",
            description: "Badringen för dig som vill vara coolast på stranden",
          },
          {
            image:
              "https://homeofess.com/pub_images/original/SCBPSCBLny(1).png?extend=copy&width=800&method=crop&height=800&type=webp",
            title: "Paddel set",
            description:
              "Vem vill vara inne i en padelhall när det är sommar? Ta med matchen ut istället och fortsätt spela!",
          },
          {
            image:
              "https://homeofess.com/pub_images/original/coolerny.png?extend=copy&width=800&method=crop&height=800&type=webp",
            title: "Kylväska",
            description:
              "Look! En picknickkorg. Nej, ett bord. Kylväska? Yup, den är allt det. Fyll den med öl, bubblor eller vad du vill. Vi har precis räddat din sommar. You’re welcome.",
          },
          {
            image:
              "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
            title: "Badring2",
            description: "Badringar är jätte kul",
          },
          {
            image: "https://www.livedeco.com/img/p/1/0/8/0/9/10809.jpg",
            title: "Gigantisk XXL Puff",
            description: "En puff som är gigantisk",
          },
        ],
      },
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
