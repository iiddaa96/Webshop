"use client";
import { useProduct } from "@/app/context/AdminContext";
import ProductForm from "@/app/ui/ProductForm";
import { Container } from "@mui/material";

type Props = { params: { id: string } };

function UpdateExistProduct(props: Props) {
  const { products } = useProduct();
  const product = products.find((p) => p.id === props.params.id);

  if (!product) {
    <div>404</div>;
  }
// removed link

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
      <ProductForm product={product} />
    </Container>
  );
}

export default UpdateExistProduct;
