import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import AdminClient from "./component/AdminClient";

export default async function Admin() {
  let products: Prisma.ProductGetPayload<{}>[] = [];

  products = await db.product.findMany();

  return <AdminClient products={products} />;
}
