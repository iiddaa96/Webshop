"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useCustomer } from "../context/PaymentContext";
import QuantityButton from "../ui/quantityButton";

function Confirmation() {
  const { cart } = useCart();
  const { clearCart, setConfirmedCart, confirmedCart } = useCart();
  const { customer } = useCustomer();

  useEffect(() => {
    if (cart.length > 0) {
      setConfirmedCart(cart);
      clearCart();
    }
  }, [cart, clearCart, setConfirmedCart]);

  const totalPrice = confirmedCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: "20px",
          padding: "20px",
          minHeight: "300px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
          Orderbekräftelse
        </Typography>
        <Typography>
          Tack för ditt köp! Hoppas du blir riktigt nöjd över dina nya tavlor.
        </Typography>
        <Typography>
          Här kommer ditt digitala kvitto från Wall of Art. Mer inspiration
          finns på vår hemsida Wall of Art.se där du kan se olika tavlor för
          olika stylingar.
        </Typography>
        <Typography>
          Hoppas vi hörs snart igen! Hälsningar från oss på Wall of Art.
        </Typography>

        <Grid container spacing={2}>
          {confirmedCart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Typography variant="h6">{item.title}</Typography>
              <QuantityButton
                productId={item.id}
                initialQuantity={item.quantity}
                showControls={false}
              />
              <Typography>Price: {item.price} kr</Typography>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Totalt: {totalPrice} kr
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography>Name: {customer.fullname}</Typography>
        <Typography>Address: {customer.address}</Typography>
        <Typography>Zip: {customer.zip}</Typography>
        <Typography>City: {customer.city}</Typography>
        <Typography>Email: {customer.email}</Typography>
        <Typography>Phone: {customer.phone}</Typography>
      </Box>
    </Container>
  );
}

export default Confirmation;
