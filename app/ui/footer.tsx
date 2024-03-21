"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
function Footer() {
  const [selected, setSelected] = useState("contact");

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid black",
        justifyContent: "space-around",
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        backgroundColor: "white",
        flexDirection: "row", // För desktop-läge
        "@media (max-width: 600px)": {
          flexDirection: "column", // För mobilläge
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Kontakta oss här:
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>Wall of Art </Typography>
        <Typography sx={{ fontSize: "14px" }}>Hittepå gatan 01</Typography>
        <Typography sx={{ fontSize: "14px" }}>442 11 Göteborg</Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          ©️ Copyright by
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>Wall of art company</Typography>
        <Typography sx={{ fontSize: "14px" }}>Team JIMM 2024</Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", fontWeight: "bold" }}
        >
          Följ oss
        </Typography>
        <FacebookIcon sx={{ fontSize: "2rem" }}></FacebookIcon>
        <InstagramIcon sx={{ fontSize: "2rem" }}></InstagramIcon>
        <YouTubeIcon sx={{ fontSize: "2rem" }}></YouTubeIcon>
      </Box>
    </Box>
  );
}

export default Footer;
