import { db } from "../db";

export async function seedOrders() {
  // Check if the user already exists
  let user = await db.user.findUnique({
    where: { email: "jonatanhelander@hotmail.com" },
  });

  if (!user) {
    // If the user doesn't exist, create a new one
    user = await db.user.upsert({
      where: {
        id: "clwmg9krv0002w02p266vu1hb",
      },
      update: {},
      create: {
        email: "jonatanhelander@hotmail.com",
        name: "Jonatan Helander",
      },
    });
  }

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
