"use client";
import { Product, products as mockedProducts } from "@/data";
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
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof localStorage === "undefined") {
      return mockedProducts; // kan kanske orsaka hydration fel
    }
    const savedProducts = localStorage.getItem(PRODUCTS_LOCAL_STORAGE_KEY);
    return savedProducts ? JSON.parse(savedProducts) : mockedProducts;
  });

  useEffect(() => {
    localStorage.setItem(PRODUCTS_LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // const editProd = (editProduct: Product) => {
  //   setProducts((prevProducts) => [...prevProducts, editProduct]);
  // };

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

  return (
    <ProductContext.Provider value={{ products, addProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
