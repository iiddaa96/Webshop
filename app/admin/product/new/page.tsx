"use client";

import ProductForm from "@/app/ui/ProductForm";
import { Container } from "@mui/material";
import React from "react";

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
