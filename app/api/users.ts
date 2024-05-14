import { PrismaClient, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient();
const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const userData = JSON.parse(req.body);

  const savedUsers = await prisma.user.create({
    data: userData,
  });
  res.json(savedUsers);
};

export default getUsers;

export async function saveUser(user: User) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      initialUsers: users,
    },
  };
}
