"use client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { products } from "../../data/index";

export default function QuantityButton({
  showControls = true, // Kontrollerar visningen av plus- och minusknapparna
  showTotalPrice = true, // Kontrollerar visningen av totalpriset
}) {
  const [productIndex, setProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const selectedProduct = products[productIndex];

  const calculateTotalPrice = (): number => {
    return selectedProduct.price * quantity;
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

      {/* Villkorligt renderar totalpriset baserat på showTotalPrice propen */}
      {showTotalPrice && (
        <Box data-cy="total-price">
          <Typography variant="h6">
            Total Price: {calculateTotalPrice()}kr
          </Typography>
        </Box>
      )}
    </Box>
  );
}
