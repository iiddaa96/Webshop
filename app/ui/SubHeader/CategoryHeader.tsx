"use client";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export default function SubHeader() {
  return (
    <AppBar
      position="static"
      component="nav"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid black",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button component={Link} href="/rea" color="inherit">
            Rea
          </Button>
          <Button component={Link} href="/categories" color="inherit">
            Handdukar
          </Button>
          <Button component={Link} href="/categories" color="inherit">
            Badleksaker
          </Button>
          <Button component={Link} href="/categories" color="inherit">
            Nyheter
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
