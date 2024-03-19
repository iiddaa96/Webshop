"use client";

import ProductForm from "@/app/ui/ProductForm";
import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

const AddNewProduct: React.FC = () => {
  return (
    <Link href="/admin/product/new">
      <Container
        data-cy="admin-add-product"
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
    </Link>
  );
};

export default AddNewProduct;
