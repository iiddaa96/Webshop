import { Box, Typography } from "@mui/material";

function Confirmation() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: "20px",
          padding: "20px",
          minHeight: "300px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Orderbekräftelse</h1>
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
      {/* Ny Box för adressen, som visas under den första Box-komponenten */}
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
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
    </>
  );
}

export default Confirmation;
