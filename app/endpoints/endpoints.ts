"use server";

import { db } from "@/prisma/db";
import { auth } from "../auth";

export async function createOrder() {
  const session = await auth();

  const order = await db.order.create({
    data: {
      total: 500,
      user: {
        connect: {
          id: "1",
        },
      },
      deliveryAddress: {
        create: {
          street: "test",
          city: "Example City",
          zip: 5050,
        },
      },
      orderDetails: {
        create: [
          {
            productId: 1,
            quantity: 2,
            subTotal: 200,
          },
          {
            productId: 2,
            quantity: 1,
            subTotal: 300,
          },
        ],
      },
    },
  });

  return order;
}
