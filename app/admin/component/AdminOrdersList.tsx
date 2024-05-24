"use server";

import { db } from "@/prisma/db";

export default async function AdminOrdersList() {
  const orders = await db.order.findMany({});
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <div>
            <li>{order.id}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
