"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Justera importen baserat på din filstruktur

interface QuantityButtonProps {
  productId: string;
  initialQuantity: number;
  showControls?: boolean;
  showTotalPrice?: boolean;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  productId,
  initialQuantity,
  showControls = true,
  showTotalPrice = true,
}) => {
  const { cart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(productId, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
    }
  };

  const selectedProduct = cart.find((item) => item.id === productId);
  const calculateTotalPrice = (): number => {
    return (selectedProduct?.price || 0) * quantity;
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "2px" }}>
        {showControls && (
          <IconButton
            color="inherit"
            aria-label="decrement"
            onClick={decrementQuantity}
          >
            <RemoveIcon />
          </IconButton>
        )}
        <Button variant="contained" color="inherit">
          <Typography component="span">{quantity}</Typography>
        </Button>
        {showControls && (
          <IconButton
            color="inherit"
            aria-label="increment"
            onClick={incrementQuantity}
          >
            <AddIcon />
          </IconButton>
        )}
      </Box>
      {showTotalPrice && (
        <Box>
          <Typography variant="h6">
            Total Price: {calculateTotalPrice()} kr
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default QuantityButton;
