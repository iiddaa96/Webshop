import { db } from "@/prisma/db";
import { Container } from "@mui/material";
import React from "react";
import AddProductForm from "../../component/AddProductForm";

const AddNewProduct: React.FC = async () => {
  const categories = await db.category.findMany();
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
      <AddProductForm categories={categories} />
    </Container>
  );
};

export default AddNewProduct;
