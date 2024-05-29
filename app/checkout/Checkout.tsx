"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { BackButton } from "../ui/BackButton";
import PaymentSection from "../ui/PaymentSection";
import { CartItems } from "./components/CartItems";
import TotalPrice from "./components/TotalPrice";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <Container maxWidth="md" component="main">
      <BackButton />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Kassa
      </Typography>
      <Grid container spacing={1}>
        <CartItems cart={cart} />
      </Grid>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">Totalt:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <TotalPrice cart={cart} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <PaymentSection />
    </Container>
  );
};

export default Checkout;
