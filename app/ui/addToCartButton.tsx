"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import React from "react";
import { Product } from "../../data/index";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <IconButton aria-label="add to cart" onClick={() => addToCart(product)}>
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
