"use server";
import { AppBar, Box } from "@mui/material";
import Navbar from "./Navbar";

export default async function Header() {
  return (
    <Box position="sticky" top={0} zIndex={1000}>
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
        <Navbar />
      </AppBar>
    </Box>
  );
}
