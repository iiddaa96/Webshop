/* "use client"; */

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { db } from "@/prisma/db";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function Home() {
  // Tillstånd för att visa snackbar
  /*   const [openSnackbar, setOpenSnackbar] = useState(false);
  // Tillstånd för meddelandet i snackbar
  const [snackbarMessage, setSnackbarMessage] = useState("");
 */
  // const handleAddToCart = (product) => {
  //   setSnackbarMessage(`${product.title} har lagts till i kundvagnen`); // Ange meddelandet för snackbar
  //   setOpenSnackbar(true); // Visa snackbar
  // };

  /*   const handleCloseSnackbar = () => {
    // Funktion för att stänga snackbar
    setOpenSnackbar(false);
  }; */

  const users = await db.user.findMany({
    orderBy: { id: "desc" },
  });

  const products = await db.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      {/* <Box
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
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </Box> */}

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
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
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
                      {" "}
                      {product.price}kr{" "}
                    </Typography>
                  </CardContent>
                  <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "flex-end" }}
                    >
                      {/*         <AddToCartButton
                        product={product}
                        handleAddToCart={handleAddToCart}
                        title={""}
                      /> */}
                    </CardActions>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/*  Snackbar för att visa meddelande när en produkt läggs till i kundvagnen */}
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      /> */}
    </main>
  );
}
