import { db } from "@/prisma/db";
import AdminClient from "./component/AdminClient";

export default async function Admin() {
  let products: {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
  }[] = [];

  products = await db.product.findMany();

  return <AdminClient products={products} />;
}
