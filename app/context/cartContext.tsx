"use client";
import { useEffect, useState } from "react";

import { PropsWithChildren, createContext, useContext } from "react";
import { CartItem, Product } from "../../data/index";

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void; // New function to remove items from cart
}

const CART_LOCAL_STORAGE_KEY = "cart";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}, // Default implementation for the new function
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Hämtar varukorgen från localStorage vid initial rendering
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sparar varukorgen till localStorage varje gång den uppdateras
  useEffect(() => {
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        // Om produkten redan finns, öka kvantiteten
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        setCart(updatedCart);
        // Lägger till en ny produkt i varukorgen
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  // filtrerar cart och uppdaterar med ny array
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
