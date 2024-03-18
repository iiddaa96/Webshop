"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, Product } from "../../data/index";

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

const CART_LOCAL_STORAGE_KEY = "cart";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof localStorage === "undefined") return [];
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      let updatedCart = [...prevCart];

      if (existingProductIndex >= 0) {
        const updatedItem = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        updatedCart[existingProductIndex] = updatedItem;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
