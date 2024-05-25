"use server";
import { db } from "@/prisma/db";
import { auth } from "../auth";
import { CustomerInfo } from "../ui/PaymentSection";
export async function createOrder(customer: CustomerInfo, cart: any[]) {
  const session = await auth();

  const orderDetails = cart.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
    subTotal: item.price * item.quantity,
  }));

  const order = await db.order.create({
    data: {
      total: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
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
        create: orderDetails,
      },
    },
  });
  return order;
}
