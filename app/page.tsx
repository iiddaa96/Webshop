import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import Image from "next/image";
import MiddleImage from "./assets/palms.jpg";
import CardsHeader from "./ui/CardsForHomepage/CardsHeader";
import CategoryHeader from "./ui/SubHeader/CategoryHeader";

export default async function Home() {
  const products = await db.product.findMany({
    // where: { isFeatured: true },
    orderBy: { id: "desc" },
  });

  return (
    <main>
      <Box>
        <CategoryHeader />
      </Box>
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <CardsHeader />
    </main>
  );
}
