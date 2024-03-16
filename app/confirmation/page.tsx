/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { useCart } from "../context/cartContext";

function Confirmation() {
  const { cart } = useCart();

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
                border: "1px solid black",
                marginTop: "30px",
              }}
            >
              {/* Mappar ut bilderna/tavlorna, plus styleing på boxen dom är i */}
              <Box sx={{ width: "10%" }}>
                <img
                  src={item.image}
                  style={{ width: "100%" }}
                  alt={item.title}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
                data-cy="cart-item"
              >
                {/* Mappar ut titel av tavlorna */}
                <Typography
                  sx={{
                    fontSize: "16px",
                    marginTop: "40px",
                    textAlign: "left",
                  }}
                  variant="h6"
                >
                  {item.title}
                </Typography>

                {/* Mappar ut priset per tavla */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingBottom: "5px",
                  }}
                >
                  <Typography variant="body1">Price:</Typography>
                  <Typography sx={{ marginLeft: "8px" }} variant="body1">
                    {item.price} :-
                  </Typography>
                </Box>
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
