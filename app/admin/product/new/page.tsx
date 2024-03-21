"use client";

import ProductForm from "@/app/ui/ProductForm";
import { Container } from "@mui/material";
import React from "react";

/**
 * Renderar sidan för att lägga till en ny produkt.
 * @returns {JSX.Element} JSX-elementet som representerar sidan för att lägga till en ny produkt.
 */
const AddNewProduct: React.FC = () => {
  return (
    <Container
      fixed
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <ProductForm product={undefined} />
    </Container>
  );
};

export default AddNewProduct;
