"use client";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LogoImage from "../assets/logo.png";

// Cypress tester som ska in i header
/* - `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="admin-link"` den länk/knapp som går till admin.
*/

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Image
                src={LogoImage}
                width={70}
                height={70}
                alt="Picture of the author"
              />
              <Typography
                variant="h6"
                noWrap
                component="div" // Changed to 'div' to avoid nesting links
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit", // Inherits the AppBar color
                  textDecoration: "none",
                }}
              >
                Wall of Art
              </Typography>
            </Box>
          </Link>
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

            {/* -------HÄR ÄR MENY FÖR DESKTOP------------ */}
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
              {/*------ Länk till admin sidan desktop----------- */}
              <Link href="/admin/product" passHref>
                <Button color="inherit" data-cy="admin-link">
                  Admin
                </Button>
              </Link>
              {/* --------Tillfälliga länkar till andra sidor desktop----------- */}
              <Link href="/checkout" passHref>
                <Button color="inherit">Posters</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Frames</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Favorite</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Posters</Button>
              </Link>
            </Menu>
          </Box>
          {/*---- Loggan för mobile----- */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WALL OF ART
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* ----------Länk till admin sida här mobile---------- */}
            <Link href="/admin/product" passHref>
              <Button color="inherit" data-cy="admin-link">
                Admin
              </Button>
            </Link>
            {/* --------Tillfälliga länkar till andra sidor----------- */}
            <Link href="/checkout" passHref>
              <Button color="inherit">Posters</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Frames</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Favorite</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Posters</Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* ----Här är länk och icon för varukorgen----- */}
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>

            <Link data-cy="cart-link" data- href="/checkout" passHref>
              <ShoppingCartIcon />
            </Link>
            {/* -----MOBILE---HÄR BÖRJAR HAMBURGE MENY----- */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* -----Länk till admin sida mobil----- */}
              <Link href="/admin/product" passHref>
                <Button color="inherit" data-cy="admin-link">
                  Admin
                </Button>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
