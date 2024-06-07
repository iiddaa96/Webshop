import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export default function SubHeader() {
  return (
    <AppBar
      position="static"
      component="nav"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid black",
        boxShadow: "none",
        color: "black",
        borderTop: "1px solid black",
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          "@media (max-width: 600px)": {
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            maxWidth: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              justifyContent: "center",
              gap: "1px",
            },
          }}
        >
          <Button
            component={Link}
            href="/categories/rea"
            color="inherit"
            sx={{
              fontSize: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.75rem",
              },
            }}
          >
            Rea
          </Button>
          <Button
            component={Link}
            href="/categories/handdukar"
            color="inherit"
            sx={{
              fontSize: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.75rem",
              },
            }}
          >
            Handdukar
          </Button>
          <Button
            component={Link}
            href="/categories/badleksaker"
            color="inherit"
            sx={{
              fontSize: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.75rem",
              },
            }}
          >
            Badleksaker
          </Button>
          <Button
            component={Link}
            href="/categories/nyheter"
            color="inherit"
            sx={{
              fontSize: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.75rem",
              },
            }}
          >
            Nyheter
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
