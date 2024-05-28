"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { Product } from "@prisma/client";
import React from "react";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <IconButton
      aria-label="add to cart"
      onClick={(e) => {
        e.preventDefault();
        addToCart(product);
      }}
      style={{
        backgroundColor: "yellow", // Gör knappen synlig
        zIndex: 1000, // Hög z-index för att säkerställa att den inte är dold
        position: "relative",
      }}
    >
      <AddShoppingCartIcon style={{ color: "red" }} /> {/* Gör ikonen synlig */}
    </IconButton>
  );
};

export default AddToCartButton;
