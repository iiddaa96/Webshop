"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { useState } from "react";

function Footer() {
  const [selected, setSelected] = useState("contact"); 

  return (
    <Box
      component="footer"
      sx={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-around", 
        alignItems: "center",
        padding: "10px 0", 
        backgroundColor: "#f0f0f0", 
      }}
    >
      <IconButton
        component={Link}
        href="/confirmation"
        onClick={() => setSelected("contact")}
        color={selected === "contact" ? "primary" : "default"}
      >
        <ContactPhoneIcon />
        <Typography>Contact</Typography>
      </IconButton>
      <IconButton
        onClick={() => setSelected("favorites")}
        color={selected === "favorites" ? "primary" : "default"}
      >
        <FavoriteIcon />
        <Typography>Favorites</Typography>
      </IconButton>
      <IconButton
        onClick={() => setSelected("search")}
        color={selected === "search" ? "primary" : "default"}
      >
        <SearchIcon />
        <Typography>Nearby</Typography>
      </IconButton>
    </Box>
  );
}

export default Footer;
