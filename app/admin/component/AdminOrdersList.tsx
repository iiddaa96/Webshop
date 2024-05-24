"use server";

import { db } from "@/prisma/db";

export default async function AdminOrdersList() {
  const orders = await db.order.findMany({});
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <div key={order.id}>
            <li>Order ID:{order.id}</li>
            <li>{order.userId}</li>
            <li>{order.total.toString()}kr</li>
            <li>{order.createdAt.toISOString()}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
