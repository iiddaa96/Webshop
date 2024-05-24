import { db } from "../db";

export async function seedOrders() {
  const user = await db.user.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      email: "Jonatanhelander@hotmail.com",
      name: "Jonatan Helander",
      password: "password",
    },
  });

  const address = await db.address.create({
    data: {
      street: "Sveagatan 74B",
      zip: 12345,
      city: "Skövde",
    },
  });

  await db.order.create({
    data: {
      userId: user.id,
      total: 500,
      deliveryAddressId: address.id,
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
}
