"use client";
import { useProduct } from "@/app/context/AdminContext";
import ProductForm from "@/app/ui/ProductForm";
import { Container } from "@mui/material";

type Props = { params: { id: string } };

/**
 * Uppdaterar en befintlig produkt.
 *
 * @param {object} props - Egenskaper för komponenten.
 * @param {object} props.params - Parametrar för produkten.
 * @param {string} props.params.id - Id för produkten som ska uppdateras.
 * @returns {JSX.Element} JSX-elementet som representerar sidan för att uppdatera en befintlig produkt.
 */
function UpdateExistProduct(props: Props) {
  const { products } = useProduct();
  const product = products.find((p) => p.id === props.params.id);

  // Om produkten inte finns, rendera 404-sidan
  if (!product) {
    <div>404</div>;
  }

  // Renderar formuläret för att uppdatera produkten
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
