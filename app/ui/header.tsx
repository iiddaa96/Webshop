"use client";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LogoImage from "../assets/logo.png";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
    <AppBar
      position="static"
      component="header"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid black",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              marginRight: "16px",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "inline-block" },
                borderRadius: "50%",
                overflow: "hidden",
                width: 70,
                height: 70,
                marginRight: "8px",
              }}
            >
              <Image src={LogoImage} width={70} height={70} alt="Logo" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Wall of Art
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
            <Button
              component={Link}
              href="/admin"
              color="inherit"
              data-cy="admin-link"
            >
              Admin
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
              data-cy="cart-link"
            >
              <Badge
                badgeContent={4}
                color="secondary"
                data-cy="cart-items-count-badge"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
