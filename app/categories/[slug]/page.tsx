import Boxgrayout from "@/app/admin/component/ProductCardsoldout";
import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MiddleImage from "../../assets/palms.jpg";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  const category = await db.category.findFirst({
    where: { name: slug },
    include: {
      products: {
        where: {
          isArchived: false,
        },
      },
    },
  });

  if (!category) {
    return (
      <div>
        <h1>Kategori hittades inte</h1>
      </div>
    );
  }

  return (
    <main>
      <Box></Box>
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

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={4}>
          {category.products.map((product) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
              <Link href={`/product/${product.id}`} passHref>
                <Boxgrayout product={product}></Boxgrayout>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
