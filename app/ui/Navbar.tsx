"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeButton from "./HomeButton";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // Funktioner för att öppna och stänga navigeringsmenyn och användarmenyn
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
      >
        <HomeButton></HomeButton>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
            }}
          >
            {/* logo namn mobil vy */}
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
              Wall of Art
            </Typography>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
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
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {/* Tillfälliga länkar till andra sidor desktop */}
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
