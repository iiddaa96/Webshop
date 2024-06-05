"use server";
import { db } from "@/prisma/db";
import { signIn } from "../auth";
import { UserCreate, UserCreateSchema } from "../zod-validation/users";

export async function createUser(incomingData: UserCreate) {
  try {
    const userData = UserCreateSchema.parse(incomingData);
    await db.user.create({
      data: {
        email: userData.email,
        name: userData.name,
      },
    });
  } catch (error) {
    console.error("Failed to create user");
    throw new Error("Failed to create user");
  }
}

export async function signInUser() {
  try {
    await signIn();
  } catch (error) {
    console.error("Failed to sign in user");
    throw new Error("Failed to sign in user");
  }
}
