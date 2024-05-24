import { db } from "../db";

export default async function admin() {
  const createMany = await db.user.createMany({
    data: [
      {
        name: "Ida",
        email: "ida_casperson@hotmail.com",
        password: "2",
        isAdmin: true,
      },
      {
        name: "Jonatan",
        email: "Jonatanhelander@hotmail.com",
        password: "3",
        isAdmin: true,
      },
      {
        name: "Philip",
        email: "philipbendiksen@gmail.com",
        password: "4",
        isAdmin: true,
      },
      {
        name: "Sally",
        email: "angelique@prisma.io",
        password: "5",
        isAdmin: true,
      },
      {
        name: "Rico",
        email: "angelique@prisma.io",
        password: "6",
        isAdmin: true,
      },
    ],
    skipDuplicates: true,
  });
}
