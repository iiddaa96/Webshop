import ProductForm from "@/app/ui/ProductForm";
import { db } from "@/prisma/db";
import { Container } from "@mui/material";

interface adminSlugPageProps {
  params: {
    slug: string;
  };
}

async function UpdateExistProduct({ params }: adminSlugPageProps) {
  const { slug } = params;

  const product = await db.product.findFirst({
    where: {
      id: slug,
    },
  });

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
