"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, Product } from "../../data/index";

/**
 * Typ för kontexten som innehåller varukorgsrelaterade funktioner och data.
 */
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

/**
 * Skapar en React-kontext för varukorgen.
 */
export const CartContext = createContext<CartContextType>({
  cart: [],
  confirmedCart: [], // Lägg till denna rad
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => [], // cart to empty array on clear
  setConfirmedCart: () => {}, // Lägg till denna rad
});

/**
 * Hook för att använda varukorgsrelaterad kontext.
 *
 * @returns {CartContextType} Varukorgsrelaterad kontext
 */
export const useCart = () => useContext(CartContext);

/**
 * Providerkomponent för varukorgen.
 *
 * @param {PropsWithChildren<{}>} children Barnkomponenter som ska ha tillgång till varukorgskontexten
 * @returns {JSX.Element} JSX-element som representerar varukorgskontexten
 */
export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [confirmedCart, setConfirmedCart] = useState<CartItem[]>([]); // Ny state

  // Funktion för att hantera inställning av bekräftade varor i varukorgen
  const handleSetConfirmedCart = (items: CartItem[]) => {
    setConfirmedCart(items);
  };

  // Effekt för att ladda varukorgen från lokal lagring när komponenten monteras
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  // Effekt för att spara varukorgen till lokal lagring när den uppdateras
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  // Funktion för att lägga till en produkt i varukorgen
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

  // Funktion för att ta bort en produkt från varukorgen
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

  /**
   * Renderar provider-komponenten för CartContext.
   *
   * @param {Object} props - Objektet med props.
   * @param {Array} props.cart - Nuvarande varor i kundvagnen.
   * @param {Function} props.addToCart - Funktionen för att lägga till en vara i kundvagnen.
   * @param {Function} props.removeFromCart - Funktionen för att ta bort en vara från kundvagnen.
   * @param {Function} props.updateQuantity - Funktionen för att uppdatera antalet av en vara i kundvagnen.
   * @param {Function} props.clearCart - Funktionen för att rensa kundvagnen.
   * @param {Function} props.handleSetConfirmedCart - Funktionen för att sätta den bekräftade kundvagnen.
   * @param {Array} props.confirmedCart - De bekräftade varorna i kundvagnen.
   * @param {ReactNode} props.children - Barnkomponenterna.
   * @returns {JSX.Element} Provider-komponenten för CartContext.
   */
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
