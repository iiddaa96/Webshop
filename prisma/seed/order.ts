import { db } from "../db";

// Skapar default användare
export async function order() {
  const test = await db.order.upsert({
    where: { id: 5 },
    update: {},
    create: {
      total: 500,

      orderDetails: {
        create: [
          {
            productId: 5,
            quantity: 1,
            subTotal: 7686,
          },
          {
            productId: 5,
            quantity: 1,
            subTotal: 7686,
          },
        ],
      },
    },
  });
}
