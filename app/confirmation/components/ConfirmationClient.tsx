"use client";

import { useCart } from "@/app/context/CartContext";
import { useEffect } from "react";
import { CartItem } from "../page";

export const ConfirmationClient = ({
  initialCart,
}: {
  initialCart: CartItem[];
}) => {
  const { clearCart, setConfirmedCart } = useCart();

  useEffect(() => {
    if (initialCart.length > 0) {
      setConfirmedCart(initialCart);
      clearCart();
    }
  }, [initialCart, clearCart, setConfirmedCart]);

  return null;
};
