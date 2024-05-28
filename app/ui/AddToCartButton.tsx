"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import React from "react";

import { Product } from "@prisma/client";

interface AddToCartButtonProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  addToCart,
}) => {
  return (
    <IconButton
      aria-label="add to cart"
      onClick={(e) => {
        e.preventDefault();
        addToCart(product);
      }}
      style={{ backgroundColor: "white", zIndex: 10 }} // Temporär stil för att säkerställa synlighet
    >
      <AddShoppingCartIcon style={{ color: "black" }} />
    </IconButton>
  );
};

export default AddToCartButton;
