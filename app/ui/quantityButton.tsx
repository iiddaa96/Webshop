"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { products } from "../../data/index";

export default function QuantityButton() {
  const [productIndex, setProductIndex] = useState(0); 
  const [quantity, setQuantity] = useState(1);
  // function för increment
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  // function för decrement
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const selectedProduct = products[productIndex];

  const calculateTotalPrice = (): number => {
    return selectedProduct.price * quantity;
  };

  // Function to calculate the total price based on quantity
  // const calculateTotalPrice = (): number => {
  //   return productIndex * quantity;
  // };
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "2px" }}>
        <IconButton
          color="inherit"
          aria-label="decrement"
          onClick={decrementQuantity}
        >
          <RemoveIcon />
        </IconButton>
        <Button variant="contained" color="inherit">
          <Typography component="span">{quantity}</Typography>
        </Button>
        <IconButton
          color="inherit"
          aria-label="increment"
          onClick={incrementQuantity}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* Displays total price på sidan */}
      <Box data-cy="total-price">
        <Typography variant="h6" >
        Total Price: {calculateTotalPrice()}kr
        </Typography>
      </Box>
    </Box>
  );
}
