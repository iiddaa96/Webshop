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

  /**
   * Function for add product to card and if product exist increment with 1
   */
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Kontrollerar om produkten redan finns i varukorgen
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      let updatedCart = [...prevCart]; // Skapar en kopia av den nuvarande varukorgen

      if (existingProductIndex >= 0) {
        // Om produkten finns, öka dess kvantitet med 1
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
      } else {
        // Om produkten inte finns, lägg till den i varukorgen med kvantitet satt till 1
        updatedCart = updatedCart.concat([{ ...product, quantity: 1 }]);
      }

      return updatedCart; // Uppdaterar varukorgen med den nya kopian
    });
  };

  // filtrerar cart och uppdaterar med ny array
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
