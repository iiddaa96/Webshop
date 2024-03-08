"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import { useState } from "react";

function Footer() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      component={"footer"}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BottomNavigationAction
        component={Link}
        href="/confirmation"
        label="Contact"
        icon={<ContactPhoneIcon />}
      />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}

export default Footer;
