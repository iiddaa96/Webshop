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
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import MiddleImage from "../app/assets/middleImage.png";
import AddToCartButton from "../app/ui/AddToCartButton";
import { Product, products } from "../data/index";

interface User {
  id: Number;
  nickname: String;
  firstName: String;
  lastName: String;
  email: String;
  products: Product[];
}

interface HomeProps {
  initialUsers: User[];
}

const prisma = new PrismaClient();
export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      initialUsers: users,
    },
  };
}
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

/**
 * Komponent för startsidan.
 * Visar produkter och hanterar tillstånd för snackbar för att visa meddelande när en produkt läggs till i kundvagnen.
 * @returns {JSX.Element} JSX för startsidan.
 */

export default function Home({ initialUsers }: HomeProps) {
  // Tillstånd för att visa snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // Tillstånd för meddelandet i snackbar
  const [snackbarMessage, setSnackbarMessage] = useState("");

  /**
   * Funktion för att hantera när en produkt läggs till i kundvagnen.
   * @param {Product} product Den produkt som läggs till i kundvagnen.
   */

  const handleAddToCart = (product: Product) => {
    setSnackbarMessage(`${product.title} har lagts till i kundvagnen`); // Ange meddelandet för snackbar
    setOpenSnackbar(true); // Visa snackbar
  };

  /**
   * Funktion för att hantera stängning av snackbar.
   */
  const handleCloseSnackbar = () => {
    // Funktion för att stänga snackbar
    setOpenSnackbar(false);
  };
  return (
    <main>
      <Box
        sx={{
          width: "95%",
          /* overflow: "hidden", */
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
        <ul>
          {initialUsers.map((user) => (
            <li key={user.id.toString()}>
              {user.nickname} ({user.email})
            </li>
          ))}
        </ul>
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
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              key={product.id}
              data-cy="product"
            >
              <Link href={`/product/${product.id}` as any}>
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
                    data-cy="product-title"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      data-cy="product-title"
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.8rem" }}
                      data-cy="product-price"
                    >
                      {product.price}kr
                    </Typography>
                  </CardContent>
                  <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <AddToCartButton
                        product={product}
                        handleAddToCart={handleAddToCart}
                        title={""}
                        data-cy="product-buy-button"
                      />
                    </CardActions>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Snackbar för att visa meddelande när en produkt läggs till i kundvagnen */}
      <Snackbar
        data-cy="added-to-cart-toast"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </main>
  );
}
