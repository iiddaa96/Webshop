"use client";

import { Container } from "@mui/material";
import React from "react";
import AddProductForm from "../../component/AddProductForm";

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
      <AddProductForm />
    </Container>
  );
};

export default AddNewProduct;
