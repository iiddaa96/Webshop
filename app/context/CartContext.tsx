"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, Product } from "../../data/index";

export interface CartContextType {
  cart: CartItem[];
  confirmedCart: CartItem[]; // Lägg till denna rad
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void; //lägger till clearCart
  setConfirmedCart: (items: CartItem[]) => void; // Lägg till denna rad
}

const CART_LOCAL_STORAGE_KEY = "cart";

export const CartContext = createContext<CartContextType>({
  cart: [],
  confirmedCart: [], // Lägg till denna rad
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => [], // cart to empty array on clear
  setConfirmedCart: () => {}, // Lägg till denna rad
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [confirmedCart, setConfirmedCart] = useState<CartItem[]>([]); // Ny state

  const handleSetConfirmedCart = (items: CartItem[]) => {
    setConfirmedCart(items);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

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

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setConfirmedCart: handleSetConfirmedCart,
        confirmedCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
