"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { CartItem } from "../page";

export const ConfirmationClient = ({
  initialCart,
}: {
  initialCart: CartItem[];
}) => {
  const { clearCart, setConfirmedCart } = useCart();
  const router = useRouter();
  const userId = router.query.userId;

  useEffect(() => {
    if (initialCart.length > 0) {
      setConfirmedCart(initialCart);
      clearCart();
    }
  }, [initialCart, clearCart, setConfirmedCart]);

  if (!userId) {
    return <p>Invalid request. User ID is missing.</p>;
  }

  return null;
};
