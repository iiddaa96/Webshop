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
      const updatedCart = [...prevCart]; // Skapar en kopia av den nuvarande varukorgen
      let isProductFound = false;

      // Kontrollerar om produkten redan finns i varukorgen
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].id === product.id) {
          // Om produkten finns, öka dess kvantitet med 1
          updatedCart[i] = {
            ...updatedCart[i],
            quantity: updatedCart[i].quantity + 1,
          };
          isProductFound = true;
          break;
        }
      }

      // Om produkten inte finns, lägg till den i varukorgen med kvantitet satt till 1
      if (!isProductFound) {
        updatedCart.push({ ...product, quantity: 1 });
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
