"use client";
import { AppBar } from "@mui/material";
import Navbar from "./Navbar";

export default function AdminHeader() {
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
      <Navbar></Navbar>
    </AppBar>
  );
}
