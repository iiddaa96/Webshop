import { db } from "./db";

// Skapar default användare
async function user() {
  const test = await db.user.upsert({
    where: { email: "test@testsson.se" },
    update: {},
    create: {
      email: "test@testsson.se",
      name: "Tess",
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
