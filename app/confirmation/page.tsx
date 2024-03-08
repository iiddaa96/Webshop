import { Box, Paper, Typography } from "@mui/material";

function Confirmation() {
  // Antag att dessa är de varor som har köpts
  const purchasedItems = [
    { name: "Abstrakt Konst", quantity: 1 },
    { name: "Landskapsmålning", quantity: 1 },
    { name: "Porträtt Illustration", quantity: 1 },
  ];

  return (
    <>
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

      {/* Box för kontaktinformation */}
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
        }}
      ></Box>

      {/* Box för presentation av köpta varor */}
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Dina köpta varor
        </Typography>
        {purchasedItems.map((item) => (
          <Paper
            key={item.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "10px",
              width: "100%",
              maxWidth: "500px", // Justera denna bredd efter behov
              marginBottom: "10px", // Lägg till lite utrymme mellan varje Paper
            }}
          >
            <Typography sx={{ marginBottom: "10px" }}>{item.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography sx={{ color: "lightgray" }}>Wall of Art</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  border: "1px solid black",
                }}
              >
                {item.quantity}
              </Box>
            </Box>
          </Paper>
        ))}
        <Typography>
          Om du har några frågor om din beställning, tveka inte att kontakta oss
          på support@wallofart.se.
        </Typography>
      </Box>
    </>
  );
}

export default Confirmation;
