import argon2 from "argon2";
import { db } from "../db";

// Skapar default användare
async function user() {
  const hashedPassword = await argon2.hash("malmö123");
  const test = await db.user.upsert({
    where: { email: "test@testsson.se" },
    update: {
      name: "kent",
      password: hashedPassword,
      isAdmin: false,
    },
    create: {
      email: "test@testsson.se",
      name: "kent",
      password: hashedPassword,
      isAdmin: false,
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
