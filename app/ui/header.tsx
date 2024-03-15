"use client";

// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Menu } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import Badge from "@mui/material/Badge";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Image from "next/image";
// import Link from "next/link";
// import * as React from "react";
// import LogoImage from "../assets/logo.png";
// import { useCart } from "../context/cartContext";

// function ResponsiveAppBar() {
//   const { cart } = useCart();
//   const totalQuantity = cart.reduce(
//     (total, currentItem) => total + currentItem.quantity,
//     0
//   );

//   // Tillstånd för att hantera öppnande och stängning av navigeringsmenyn och användarmenyn
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   // Funktioner för att öppna och stänga navigeringsmenyn och användarmenyn
//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       component="header"
//       sx={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid black",
//         boxShadow: "none",
//         color: "black",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{ paddingY: "8px", paddingX: { xs: "10px", sm: "20px" } }}
//         >
//           {/* Styleing för loggans namn samt länk */}
//           <Box
//             component={Link}
//             href="/"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               textDecoration: "none",
//               color: "inherit",
//               cursor: "pointer",
//               marginRight: "16px",
//             }}
//           >
// <Box
//   sx={{
//     display: { xs: "none", md: "inline-block" },
//     borderRadius: "50%",
//     overflow: "hidden",
//     width: 70,
//     height: 70,
//     marginRight: "24rem", //Sätter länkarna i mitten
//   }}
// >
//   <Image src={LogoImage} width={75} height={75} alt="Logo" />
// </Box>
// <Typography
//   variant="h6"
//   noWrap
//   component="div"
//   sx={{
//     fontFamily: "monospace",
//     fontWeight: 700,
//     letterSpacing: ".3rem",
//     color: "inherit",
//     textDecoration: "none",
//   }}
// >
//   Wall of Art
// </Typography>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="open navigation menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {/* Tillfälliga länkar till andra sidor desktop */}
//             <Button component={Link} href="/posters" color="inherit">
//               Posters
//             </Button>
//             <Button component={Link} href="/frames" color="inherit">
//               Frames
//             </Button>
//             <Button component={Link} href="/home" color="inherit">
//               Home
//             </Button>
//             <Button component={Link} href="/favorite" color="inherit">
//               Favorite
//             </Button>
//             <Button
//               component={Link}
//               href="/admin"
//               color="inherit"
//               data-cy="admin-link"
//             >
//               Admin
//             </Button>
//           </Box>
//           {/* Varukorgen */}
// <Box sx={{ flexGrow: 0 }}>
//   <IconButton
//     // Länk till kassan
//     component={Link}
//     href="/checkout"
//     size="large"
//     aria-label="show cart items"
//     color="inherit"
//     onClick={handleOpenUserMenu}
//     sx={{ p: 0 }}
//     data-cy="cart-link"
//   >
//     <Badge
//       badgeContent={totalQuantity}
//       color="secondary"
//       data-cy="cart-items-count-badge"
//     >
//       <ShoppingCartIcon />
//     </Badge>
//   </IconButton>
// </Box>
//           <Menu
//             sx={{ mt: "45px" }}
//             id="menu-appbar"
//             anchorEl={anchorElUser}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             {/* -----Länk till admin sida mobil----- */}
//             <Button
//               component={Link}
//               href="/admin"
//               color="inherit"
//               data-cy="admin-link"
//             >
//               Admin
//             </Button>
//           </Menu>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LogoImage from "../assets/logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
            sx={{
              display: { xs: "none", md: "inline-block" },
              borderRadius: "50%",
              overflow: "hidden",
              width: 70,
              height: 70,
              marginRight: "24rem", //Sätter länkarna i mitten
            }}
          >
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
              <Box>
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
                  }}
                >
                  Wall of Art
                </Typography>
              </Box>
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
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
                <Badge
                  // badgeContent={totalQuantity}
                  color="secondary"
                  data-cy="cart-items-count-badge"
                >
                  <ShoppingCartIcon />
                </Badge>
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
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
