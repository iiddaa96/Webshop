import { Container } from "@mui/material";
import AddNewProductForm from "../../component/AddNewProductForm";

export default async function addNewProductPage() {
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
      <AddNewProductForm />
    </Container>
  );
}
