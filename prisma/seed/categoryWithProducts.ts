import { Prisma } from "@prisma/client";
import { db } from "../db";

export async function seedCatorgories() {
  for (const categoryData of categoriesData) {
    await db.category.upsert({
      where: { name: categoryData.name },
      update: {},
      create: {
        name: categoryData.name,
        products: {
          create: categoryData.products,
        },
      },
    });
  }
}

type CategoriesData = { name: string; products?: Prisma.ProductCreateInput[] };

const categoriesData: CategoriesData[] = [
  {
    name: "Nyheter",
    products: [
      {
        title: "Handduk Saga",
        description:
          "Handduk i mjuk och skön bomullsfrotté med garnfärgade ränder. Badhanddukar är 70x140 cm.",
        image:
          "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1700979-09_Fm_M0087987&mw=468&fmt=webp",
        price: 299,
      },
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        title: "Badring",
        price: 259,
        description: "Badringar är jätte kul",
      },
    ],
  },
  { name: "Badleksaker" },
  { name: "Handdukar" },
  { name: "Rea" },
];
