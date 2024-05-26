import { db } from "../db";

// Skapar default användare
export async function user() {
  await db.user.upsert({
    where: { email: "jonatanhelander@hotmail.com" },
    update: {
      name: "jonatan",
      isAdmin: true,
    },
    create: {
      email: "jonatanhelander@hotmail.com",
      name: "jonatan",
      isAdmin: true,
    },
  });
}
