import { db } from "../db";

export async function seedOrders() {
  // Check if the user with the given email already exists
  const existingUser = await db.user.findUnique({
    where: {
      email: "Jonatanhelander@hotmail.com",
    },
  });

  let user;
  if (existingUser) {
    // Update the existing user
    user = await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        name: "Jonatan Helander",
        password: "password",
      },
    });
  } else {
    // Create a new user
    user = await db.user.create({
      data: {
        email: "Jonatanhelander@hotmail.com",
        name: "Jonatan Helander",
        password: "password",
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
