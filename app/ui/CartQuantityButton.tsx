"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, IconButton } from "@mui/material";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartQuantityButton() {
  const { cart } = useCart();

  // Beräkna totala antalet produkter i kundvagnen
  const totalQuantity = cart.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  return (
    <Box>
      <IconButton
        component={Link}
        href="/checkout"
        size="large"
        aria-label="show cart items"
        color="inherit"
        sx={{ p: 0 }}
      >
        <Badge badgeContent={totalQuantity} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}
