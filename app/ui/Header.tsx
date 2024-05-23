"use server";
import { AppBar } from "@mui/material";
import Navbar from "./Navbar";
export default async function Header() {
  return (
    <header>
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
        {" "}
      </AppBar>
      <Navbar></Navbar>
    </header>
  );
}
