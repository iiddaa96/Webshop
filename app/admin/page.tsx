import { db } from "@/prisma/db";
import { Decimal } from "@prisma/client/runtime/library";
import AdminClient from "./component/AdminClient";

export default async function Admin() {
  let products: {
    id: number;
    title: string;
    image: string;
    price: Decimal;
    description: string;
  }[] = [];

  products = await db.product.findMany();

  return <AdminClient products={products} />;
}
