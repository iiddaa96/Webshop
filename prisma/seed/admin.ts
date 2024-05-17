import argon2 from "argon2";
import { db } from "../db";

async function admin() {
  const hashedPassword = await argon2.hash("göteborg123");
  const test = await db.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {
      name: "göran",
      password: hashedPassword,
      isAdmin: true,
    },
    create: {
      email: "admin@gmail.com",
      name: "göran",
      password: hashedPassword,
      isAdmin: true,
    },
  });
}

admin()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
