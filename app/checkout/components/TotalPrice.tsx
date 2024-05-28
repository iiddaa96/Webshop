"use client";

import { CartItem } from "@/app/zod-validation/products";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export interface ItemsProps {
  cart: CartItem[];
}

export default function TotalPrice({ cart }: ItemsProps) {
  const [totalPrice, setTotalPrice] = useState(0); // State för den totala summan

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  return (
    <Box>
      <p>{totalPrice}kr</p>
    </Box>
  );
}
