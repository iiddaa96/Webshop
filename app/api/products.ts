import { PrismaClient } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const prisma = new PrismaClient();

export const getProducts = async () => {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error("Method not allowed");
  }
  return response.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
