/* "use client";

import { Product } from "@prisma/client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (editProduct: Product) => void;
  removeProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);


export const useProduct = () => useContext(ProductContext);

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const SELECTED_PRODUCT_LOCAL_STORAGE_KEY = "selectedProduct";


export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>();
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


  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [newProduct]);
  };

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
 */
