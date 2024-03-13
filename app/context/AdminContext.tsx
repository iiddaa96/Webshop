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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, selectProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
