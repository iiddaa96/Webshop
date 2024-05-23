"use server";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { auth } from "../auth";
import AuthButtons from "./auth/AuthButtons";

export default async function Navbar() {
  const session = await auth();
  return (
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
      >
        {/* Flex container for center alignment */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            {/* Centered "Sand & Sjö" för mobil */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Sand & Sjö
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {/* Centered "Sand & Sjö" för desktop */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                fontSize: "2.5rem",
                marginRight: "-6.5rem",
                textShadow: "2px 2px 2px rgba(234, 246, 129, 0.8)",
              }}
            >
              Sand & Sjö
            </Typography>
          </Box>

          {/* Right-aligned AuthButtons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <AuthButtons />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
}
