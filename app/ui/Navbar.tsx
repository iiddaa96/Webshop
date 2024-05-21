"use server";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { auth } from "../auth";
import HamburgerMenu from "./HamburgerMenu";
import HomeButton from "./HomeButton";
import AuthButtons from "./auth/AuthButtons";

export default async function Navbar() {
  const session = await auth();
  return (
    <Container maxWidth="xl">
      <p>Welcome {session?.user?.email}</p>

      <Toolbar
        disableGutters
        sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
      >
        <HomeButton></HomeButton>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <AuthButtons></AuthButtons>
          <Box
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
            }}
          >
            {/* logo namn mobil vy */}
            <HamburgerMenu></HamburgerMenu>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "monospace",
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
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <AuthButtons></AuthButtons>
          <Button component={Link} href="/posters" color="inherit">
            Posters
          </Button>
          <Button component={Link} href="/frames" color="inherit">
            Frames
          </Button>
          <Button component={Link} href="/home" color="inherit">
            Home
          </Button>
          <Button component={Link} href="/favorite" color="inherit">
            Favorite
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
}
