"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { Product } from "@prisma/client";
import React from "react";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: Product;
  title: string;
  // Lägg till funktion för att hantera "Lägg till i kundvagnen"
  handleAddToCart: (products: Product) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  handleAddToCart,
}) => {
  const { addToCart } = useCart();

  return (
    <IconButton
      aria-label="add to cart"
      // Anropa handleAddToCart-funktionen med produkttiteln
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart(product);
        addToCart(product);
      }}
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
