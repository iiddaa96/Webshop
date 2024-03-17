"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import QuantityButton from "../ui/quantityButton";

function Confirmation() {
  const { cart } = useCart();

  // Beräkna det totala priset för alla varor i kundvagnen
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      {/* Box för orderbekräftelse */}
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
        <h1 style={{ textAlign: "center" }}>Orderbekräftelse</h1>
        {/* Spaceing mellan boxarna och css styleing */}
        <Grid container spacing={1}>
          {cart.map((item) => (
            <Grid
              item
              xs={12}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column", // Gör så att innehållet staplas vertikalt
                marginTop: "30px",
              }}
            >
              {/* Titel */}
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginBottom: "8px", // Lägger till lite marginal mellan titel och pris
                }}
                variant="h6"
              >
                {item.title}
              </Typography>

              {/* QuantityButton, med visningskontroller beroende på sidan */}
              <Box sx={{ alignSelf: "flex-start" }}>
                {/* <QuantityButton showControls={false}  /> */}
                <QuantityButton
                  productId={item.id}
                  initialQuantity={item.quantity}
                  showTotalPrice
                  showControls={false}
                  // showTotalPrice={false}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography>
          Tack för ditt köp! Hoppas du blir riktigt nöjd över dina nya tavlor.
        </Typography>
        <Typography>
          Här kommer ditt digitala kvitto från Wall of Art. Mer inspiration
          finns på vår hemsida Wall of Art.se där du kan se olika tavlor för
          olika stylingar.
        </Typography>
        <Typography>
          Hoppas vi hörs snart igen! Hälsningar från oss på Wall of Art
        </Typography>

        {/* Totalpris för hela beställningen */}
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Totalt: {totalPrice} kr
        </Typography>
      </Box>

      {/* Box för adressinformation */}
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          {`Ida Casperson
Åby allé 69
431 45 Mölndal

Wall of Art
Hittepå gatan 01
442 11 Göteborg`}
        </Typography>
      </Box>
    </Container>
  );
}

export default Confirmation;
