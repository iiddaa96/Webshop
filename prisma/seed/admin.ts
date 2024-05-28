import { db } from "../db";

export default async function admin() {
  await db.user.upsert({
    where: {
      email: "ida_casperson@hotmail.com",
    },
    update: {},
    create: {
      name: "Ida",
      email: "ida_casperson@hotmail.com",

      isAdmin: true,
    },
  });

  await db.user.upsert({
    where: {
      email: "jonatanhelander@hotmail.com",
    },
    update: {},
    create: {
      name: "Jonatan",
      email: "jonatanhelander@hotmail.com",

      isAdmin: true,
    },
  });

  await db.user.upsert({
    where: {
      email: "philipbendiksen@gmail.com",
    },
    update: {},
    create: {
      name: "Philip",
      email: "philipbendiksen@gmail.com",

      isAdmin: true,
    },
  });

  await db.user.upsert({
    where: {
      email: "sallymaria@live.se",
    },
    update: {},
    create: {
      name: "Sally",
      email: "sallymaria@live.se",

      isAdmin: true,
    },
  });

  await db.user.upsert({
    where: {
      email: "angelique@prisma.io",
    },
    update: {},
    create: {
      name: "Rico",
      email: "angelique@prisma.io",

      isAdmin: true,
    },
  });
}
