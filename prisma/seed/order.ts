import { number } from "zod";
import { db } from "../db";

// Skapar default användare
export async function order() {
  const test = await db.order.upsert({
    where: { id: 2 },
    update: {},
    create: {
      total: 500,
      Order: [
        {
          title: "sås",
          image: "link",
          price: 5,
          description: "test",
        },
        {
          title: "sås 2",
          image: "link",
          price: 5,
          description: "test",
        },
      ],
    },
  });
}
