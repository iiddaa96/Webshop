"use client";

import AddToCartButton from "@/app/ui/AddToCartButton";
import { Box, Grid, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { Product, products } from "../../../data/index";

type Props = { params: { id: string } };

export default function SingleProduct(props: Props) {
  const product = products.find((product) => product.id === props.params.id);

  // Tillstånd för att visa snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // Tillstånd för meddelandet i snackbar
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToCart = (product: Product) => {
    setSnackbarMessage(`${product.title} har lagts till i kundvagnen`); // Ange meddelandet för snackbar
    setOpenSnackbar(true); // Visa snackbar
  };

  /**
   * Funktion för att stänga snackbar.
   */
  const handleCloseSnackbar = () => {
    // Funktion för att stänga snackbar
    setOpenSnackbar(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
            <div key={product.id} data-cy="product-id">
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
            <Typography variant="h4" gutterBottom data-cy="product-title">
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              data-cy="product-description"
            >
              {product.description}
            </Typography>
            <Typography variant="body2" gutterBottom data-cy="product-price">
              {product.price} kr
            </Typography>

            <AddToCartButton
              data-cy="added-to-cart-toast"
              product={product}
              handleAddToCart={handleAddToCart}
              title={""}
            />
          </Box>
        </Grid>
      </Grid>
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
