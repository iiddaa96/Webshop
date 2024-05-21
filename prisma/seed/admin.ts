import argon2 from "argon2";
import { db } from "../db";

export async function admin() {
  const hashedPassword = await argon2.hash("göteborg123");
  const test = await db.user.upsert({
    where: { email: "jonatanhelander@hotmail.com" },
    update: {
      name: "jonatan",
      password: hashedPassword,
      isAdmin: true,
    },
    create: {
      email: "jonatanhelander@hotmail.com",
      name: "jonatan",
      password: hashedPassword,
      isAdmin: true,
    },
  });
}
