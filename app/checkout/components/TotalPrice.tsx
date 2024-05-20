"use client";

import { useEffect, useState } from "react";

export const TotalPrice = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0); // State för den totala summan

  useEffect(() => {
    // Uppdatera den totala summan när kundvagnen ändras
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  return <>{totalPrice} kr</>;
};
