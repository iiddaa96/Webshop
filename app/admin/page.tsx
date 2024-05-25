import { db } from "@/prisma/db";
import AdminClient from "./component/AdminClient";

// 3. Client Component - CSR + SSR (request)
// 1. Server Component - SSG (build)
// 2. Server Component + cookies - SSR (request) ALT: läs in cookies i middleware.ts

/**
 * Renderar administrationsgränssnittet.
 * @returns {JSX.Element} JSX-elementet som representerar administrationsgränssnittet.
 */
export default async function Admin() {
  let products: {
    id: string;
    title: string;
    image: string;
    price: number;
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
