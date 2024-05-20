import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "../auth";
import { UserCreate, UserCreateSchema } from "../zod-validation/users";

export async function getAllUsers(req: NextRequest) {
  const users = await db.product.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function createUser(incomingData: UserCreate) {
  const userData = UserCreateSchema.parse(incomingData);
  const user = await db.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      password: userData.password,
    },
  });
  console.log("user created:", user);
}

export async function signInUser() {
  await signIn();
}
