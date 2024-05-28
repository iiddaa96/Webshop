import { db } from "@/prisma/db";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { auth } from "../auth";
import CartQuantityButton from "./CartQuantityButton";
import AuthButtons from "./auth/AuthButtons";

export default async function Navbar() {
  const session = await auth();

  const loggedInUser = session?.user?.email as string | undefined;

  const foundUser = await db.user.findFirst({
    where: { email: loggedInUser },
  });

  return (
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
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
                textShadow: "4px 4px 4px rgba(240, 232, 213, 1.0)",
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
                marginRight: "-13rem",
                textShadow: "4px 4px 4px rgba(240, 232, 213, 1.0)",
              }}
            >
              Sand & Sjö
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                backgroundColor: "#F0E8D5",
                fontSize: "13px",
                marginRight: "2rem",
              }}
            >
              Welcome: {session?.user?.name}
            </Typography>
          </Box>

          {/* Right-aligned AuthButtons and Cart */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "16px", // Justera detta värde för att få önskat mellanrum
              }}
            >
              <AuthButtons />
            </Box>
            <CartQuantityButton />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
}
