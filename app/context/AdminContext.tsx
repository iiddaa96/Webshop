"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

interface ProductContextType {
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

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  // Initialize state with LocalStorage value if it exists
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
    // Save to LocalStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, selectProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
