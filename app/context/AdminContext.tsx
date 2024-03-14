"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  selectedProduct: Product | null;
  selectProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const SELECTED_PRODUCT_LOCAL_STORAGE_KEY = "selectedProduct";

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem(PRODUCTS_LOCAL_STORAGE_KEY);
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => {
    const savedSelectedProduct = localStorage.getItem(
      SELECTED_PRODUCT_LOCAL_STORAGE_KEY
    );
    return savedSelectedProduct ? JSON.parse(savedSelectedProduct) : null;
  });

  useEffect(() => {
    localStorage.setItem(PRODUCTS_LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      SELECTED_PRODUCT_LOCAL_STORAGE_KEY,
      JSON.stringify(selectedProduct)
    );
  }, [selectedProduct]);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, selectedProduct, selectProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
