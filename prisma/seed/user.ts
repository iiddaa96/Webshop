import argon2 from "argon2";
import { db } from "../db";

// Skapar default användare
export async function user() {
  const hashedPassword = await argon2.hash("malmö123");
  const test = await db.user.upsert({
    where: { email: "test@testsson.se" },
    update: {
      name: "kent",
      password: hashedPassword,
    },
    create: {
      email: "test@testsson.se",
      name: "kent",
      password: hashedPassword,
    },
  });
}
