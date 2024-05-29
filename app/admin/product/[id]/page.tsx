import { db } from "@/prisma/db";
import { Container } from "@mui/material";
import EditProductForm from "../../component/EditProductForm";

type Props = { params: { id: number } };

export default async function UpdateExistProduct({ params }: Props) {
  const { id } = params;

  // Fetch the product with the specified ID from the database
  const product = await db.product.findFirst({ where: { id: Number(id) } });

  const categories = await db.category.findMany();

  if (!product) {
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
        <p>Product not found</p>
      </Container>
    );
  }

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
      <EditProductForm categories={categories} product={product} />
    </Container>
  );
}
