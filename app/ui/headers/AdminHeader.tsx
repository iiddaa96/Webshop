"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../assets/logo.png";
import SignInButton from "../auth/SigninButton";

export default function AdminHeader() {
  /*   const { cart } = useCart();

  // Beräkna totala antalet produkter i kundvagnen
  const totalQuantity = cart.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  ); */

  // Tillstånd för att hantera öppnande och stängning av navigeringsmenyn och användarmenyn
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
              display: { xs: "none", md: "inline-block" },
              borderRadius: "50%",
              overflow: "hidden",
              width: 70,
              height: 70,
              marginRight: "30rem",
            }}
          >
            {" "}
            <Image src={LogoImage} height={75} width={75} alt="Logo" />
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
              <Button
                component={Link}
                href="/admin"
                color="inherit"
                data-cy="admin-link"
              >
                Admin
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
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                component={Link}
                href="/checkout"
                size="large"
                aria-label="show cart items"
                color="inherit"
                sx={{ p: 0 }}
                data-cy="cart-link"
              >
                {/*         <Badge
                  badgeContent={totalQuantity}
                  color="secondary"
                  data-cy="cart-items-count-badge"
                >
                  <ShoppingCartIcon />
                </Badge> */}
              </IconButton>
            </Box>
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
            ></Menu>
            <SignInButton></SignInButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
