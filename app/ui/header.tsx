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
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "inline-block" },
                borderRadius: "50%",
                overflow: "hidden",
                width: 70,
                height: 70,
              }}
            >
              <Image
                src={LogoImage}
                width={70}
                height={70}
                alt="Picture of the author"
              />
            </Box>
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
              <Button
                component={Link}
                href="/admin/product"
                color="inherit"
                data-cy="admin-link"
              >
                Admin
              </Button>
              {/* --------Tillfälliga länkar till andra sidor desktop----------- */}
              <Button component={Link} href="/checkout" color="inherit">
                Posters
              </Button>
              <Button component={Link} href="/checkout" color="inherit">
                Frames
              </Button>
              <Button component={Link} href="/checkout" color="inherit">
                Home
              </Button>
              <Button component={Link} href="/checkout" color="inherit">
                Favorite
              </Button>
              <Button component={Link} href="/checkout" color="inherit">
                Posters
              </Button>
            </Menu>
          </Box>
          {/*---- Loggan för mobile----- */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box
            sx={{
              display: { md: "none", xs: "inline-block" },
              borderRadius: "50%",
              overflow: "hidden",
              width: 70,
              height: 70,
            }}
          >
            <Image
              src={LogoImage}
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/*------ Länk till admin sidan desktop----------- */}
            <Button
              component={Link}
              href="/admin/product"
              color="inherit"
              data-cy="admin-link"
            >
              Admin
            </Button>
            {/* --------Tillfälliga länkar till andra sidor desktop----------- */}
            <Button component={Link} href="/checkout" color="inherit">
              Posters
            </Button>
            <Button component={Link} href="/checkout" color="inherit">
              Frames
            </Button>
            <Button component={Link} href="/checkout" color="inherit">
              Home
            </Button>
            <Button component={Link} href="/checkout" color="inherit">
              Favorite
            </Button>
            <Button component={Link} href="/checkout" color="inherit">
              Posters
            </Button>
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
              <Button
                component={Link}
                href="/admin/product"
                color="inherit"
                data-cy="admin-link"
              >
                Admin
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
