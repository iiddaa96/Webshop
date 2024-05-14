import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const userData = JSON.parse(req.body);

  const savedUsers = await prisma.user.create({
    data: userData,
  });
  res.json(savedUsers);
};

export default handler;
