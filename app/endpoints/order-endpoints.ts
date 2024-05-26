"use server";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { CustomerInfo } from "../ui/PaymentSection";

export async function isSentEndpoint(orderId: number) {
  const order = await db.order.findFirst({
    where: {
      id: orderId,
    },
  });

  let updatedOrder;
  if (order?.isSent === false) {
    updatedOrder = await db.order.update({
      where: { id: orderId },
      data: {
        isSent: true,
      },
    });
  } else {
    updatedOrder = await db.order.update({
      where: { id: orderId },
      data: {
        isSent: false,
      },
    });
  }

  await revalidatePath("/");
  return updatedOrder;
}

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
