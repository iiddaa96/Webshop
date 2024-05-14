import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Typography } from "@mui/material";
import { PrismaClient, Product } from "@prisma/client";
import Image from "next/image";
import MiddleImage from "../app/assets/middleImage.png";
import { useProducts } from "./api/products";

export interface User {
  id: Number;
  nickname: String;
  firstName: String;
  lastName: String;
  email: String;
  products: Product[];
}

export interface HomeProps {
  initialUsers: User[];
}

const prisma = new PrismaClient();

export default function Home() {
  const { isLoading, error, data: products = [] } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <Box>
        <Typography variant="h2">Products</Typography>
        <ul>
          {products?.map((product: Product) => (
            <li key={product.id}>
              {product.title} ({product.userId})
            </li>
          ))}
        </ul>
      </Box>
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%", // Minskat från '56.25%' till en lägre procent för att minska höjden
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px", // Mellanrum mellan bilden och griden
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box>
        <Typography variant="h2">Users</Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      ></Box>
    </main>
  );
}
