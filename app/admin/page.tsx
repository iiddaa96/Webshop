"use server";
import { db } from "@/prisma/db";
import { Decimal } from "@prisma/client/runtime/library";
import AdminClient from "./component/AdminClient";

/**
 * Renderar administrationsgränssnittet.
 * @returns {JSX.Element} JSX-elementet som representerar administrationsgränssnittet.
 */
export default async function Admin() {
  let products: {
    id: number;
    title: string;
    image: string;
    price: Decimal;
    description: string;
  }[] = [];

  try {
    products = await db.product.findMany();
  } catch (error) {
    console.error("error fetching products:", error);
  }

  /* const productsWithStringPrice = products.map((product) => ({
    ...product,
    price: product.price.toString(),
  })); */

  return <AdminClient products={products} />;
}
