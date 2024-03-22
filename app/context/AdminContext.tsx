"use client";
import { Product, products as mockedProducts } from "@/data";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * Typ för kontexten som innehåller produktrelaterade funktioner och data.
 */
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (editProduct: Product) => void;
  removeProduct: (productId: string) => void;
}
/**
 * Skapar en React-kontext för produkter.
 */
const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

/**
 * Hook för att använda produktrelaterad kontext.
 * @returns {ProductContextType} Produktrelaterad kontext
 */
export const useProduct = () => useContext(ProductContext);

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const SELECTED_PRODUCT_LOCAL_STORAGE_KEY = "selectedProduct";

/**
 * Providerkomponent för produkter.
 *
 * @param {ReactNode} children Barnkomponenter som ska ha tillgång till produktkontexten
 * @returns {JSX.Element} JSX-element som representerar produktkontexten
 */
export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(mockedProducts);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem(PRODUCTS_LOCAL_STORAGE_KEY);
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(PRODUCTS_LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [isLoaded, products]);

  /**
   * Lägger till en ny produkt.
   *
   * @param {Product} newProduct Den nya produkten som ska läggas till
   */
  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  /**
   * Redigerar en befintlig produkt.
   *
   * @param {Product} editProduct Produkten som ska redigeras
   */
  const editProduct = (editProduct: Product) => {
    setProducts((prevProducts) => {
      const index = prevProducts.findIndex(
        (product) => product.id === editProduct.id
      );
      if (index !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = editProduct;
        return updatedProducts;
      }
      return prevProducts;
    });
  };

  /**
   * Tar bort en produkt.
   *
   * @param {string} productId ID:t för produkten som ska tas bort
   */
  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, editProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
