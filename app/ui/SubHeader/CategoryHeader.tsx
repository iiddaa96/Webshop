"use client";
import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";
import AdminButton from "../AdminButton";

interface HideOnScrollProps {
  children: ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 100, // Justera tröskeln vid behov
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

export default function SubHeader() {
  return (
    <HideOnScroll>
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
            <Button component={Link} href="/categories/rea" color="inherit">
              Rea
            </Button>
            <Button
              component={Link}
              href="/categories/handdukar"
              color="inherit"
            >
              Handdukar
            </Button>
            <Button
              component={Link}
              href="/categories/badleksaker"
              color="inherit"
            >
              Badleksaker
            </Button>
            <Button component={Link} href="/categories/nyheter" color="inherit">
              Nyheter
            </Button>
            <AdminButton />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
