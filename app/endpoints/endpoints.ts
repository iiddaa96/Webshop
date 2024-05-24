"use server";
import { db } from "@/prisma/db";
import { auth } from "../auth";
import { CustomerInfo } from "../ui/PaymentSection";
export async function createOrder(customer: CustomerInfo) {
  const session = await auth();

  const order = await db.order.create({
    data: {
      total: 500,
      user: {
        connect: {
          email: session?.user?.email?.toString(),
        },
      },
      deliveryAddress: {
        create: {
          street: customer.street,
          city: customer.city,
          zip: customer.zip,
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
