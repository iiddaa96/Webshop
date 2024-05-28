"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, Snackbar } from "@mui/material";
import { Product } from "@prisma/client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {

  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setSnackbarMessage(`${product.title} har lagts till i kundvagnen`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <IconButton
        aria-label="add to cart"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart();
        }}
        style={{
          zIndex: 1000,
          position: "relative",
        }}
      >
        <AddShoppingCartIcon style={{ color: "black" }} />{" "}

      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
};

export default AddToCartButton;
