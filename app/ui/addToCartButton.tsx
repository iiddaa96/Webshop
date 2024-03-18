"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import React from "react";
import { Product } from "../../data/index";

interface AddToCartButtonProps {
  product: Product;
  title: string;
  handleAddToCart: (products: Product) => void; // Lägg till funktion för att hantera "Lägg till i kundvagnen"
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  handleAddToCart,
}) => {
  return (
    <IconButton
      aria-label="add to cart"
      onClick={() => handleAddToCart(product)} // Anropa handleAddToCart-funktionen med produkttiteln
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
