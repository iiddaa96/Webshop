import SingleProduct from "@/app/ui/SingelProduct";
import { db } from "@/prisma/db";

// Detta är server sidan för att rendera ut singel produkt sidan
export default async function ServerForSingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id, 10);

  if (isNaN(productId)) {
    return <div>Invalid product ID</div>;
  }

  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return <SingleProduct product={product} />;
}
