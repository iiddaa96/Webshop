import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  try {
    const { image, title, price, description } = req.body;

    const product = await prisma.product.update({
      where: { id: parseInt(id, 10) },
      data: {
        image,
        title,
        price,
        description,
      },
    });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
