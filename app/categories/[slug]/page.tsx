import AddToCartButton from "@/app/ui/AddToCartButton";
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
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <div
          style={{
            width: "90vw",
            height: "60vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={MiddleImage}
            alt="Stor Bild"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Box>

      <Box>
        <Grid container spacing={4}>
          {category.products.map((product) => {
            const isOutOfStock = product.inventory <= 0;

            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
                <Link href={`/product/${product.id}`} passHref>
                  <Card
                    sx={{
                      maxWidth: 345,
                      m: "auto",
                      boxShadow: 3,
                      position: "relative",
                      filter: isOutOfStock ? "grayscale(100%)" : "none",
                      marginBottom: "24px",
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
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
                            {`${product.price}`}kr
                          </Typography>
                        </Box>
                        <AddToCartButton product={product} />
                      </Box>
                    </CardContent>
                    {isOutOfStock && (
                      <Typography
                        variant="body2"
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          color: "red",
                          backgroundColor: "white",
                          padding: "5px",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          fontSize: { xs: "10px", sm: "12px", md: "14px" },
                        }}
                      >
                        Sold Out
                      </Typography>
                    )}
                    <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                      <CardActions
                        disableSpacing
                        sx={{ justifyContent: "flex-end" }}
                      ></CardActions>
                    </Box>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
}
