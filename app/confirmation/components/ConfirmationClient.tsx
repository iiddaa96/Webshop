"use client";

import { useCart } from "@/app/context/CartContext";
import { useCallback, useEffect } from "react";
import { CartItem } from "../page";

export const ConfirmationClient = ({
  initialCart,
}: {
  initialCart: CartItem[];
}) => {
  const { clearCart, setConfirmedCart } = useCart();
  const clearCartCallback = useCallback(() => {
    clearCart();
  }, [clearCart]);

  const setConfirmedCartCallback = useCallback(
    (items: CartItem[]) => {
      setConfirmedCart(items);
    },
    [setConfirmedCart]
  );
  useEffect(() => {
    if (initialCart.length > 0) {
      setConfirmedCartCallback(initialCart);
      clearCartCallback();
    }
  }, [initialCart, setConfirmedCartCallback, clearCartCallback]);

  return null;
};
