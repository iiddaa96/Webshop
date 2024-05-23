// "use server";
import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
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

  let category;
  try {
    category = await db.category.findUnique({
      where: { slug },
      include: { products: true },
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    category = null;
  }

  if (!category) {
    return (
      <div>
        <h1>Category not found</h1>
      </div>
    );
  }

  return (
    <main>
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
                <Card
                  sx={{
                    maxWidth: 345,
                    m: "auto",
                    boxShadow: 3,
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    width="auto"
                    height="280"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {product.price}kr
                    </Typography>
                  </CardContent>
                  <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "flex-end" }}
                    ></CardActions>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
