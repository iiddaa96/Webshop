import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";
import AdminButton from "../AdminButton";

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
          <Button component={Link} href="/categories/rea" color="inherit">
            Rea
          </Button>
          <Button component={Link} href="/categories/handdukar" color="inherit">
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
  );
}
