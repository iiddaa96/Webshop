"use client";
// UpdateExistProduct.js
import { products } from "@/data";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";

type Props = { params: { id: string } };

function UpdateExistProduct(props: Props) {
  const product = products.find((p) => p.id === props.params.id);

  if (!product) {
    return <Box>404</Box>;
  }

  const handleDelete = (productId: string) => {
    // Implementera logik för att ta bort produkten med det angivna productId
    console.log("Delete product with ID:", productId);
  };

  const handleSave = () => {
    // Implementera logik för att spara ändringar i produkten
    console.log("Save changes");
  };

  return (
    <Container
      fixed
      component={"main"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box
        component={"form"}
        data-cy="product-form"
        sx={{
          height: 700,
          borderRadius: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <TextField
          data-cy="product-title-error"
          fullWidth
          label="Title"
          defaultValue={product.title}
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          data-cy="product-price-error"
          fullWidth
          label="Price"
          defaultValue={product.price}
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          data-cy="product-description-error"
          label="Description"
          multiline
          rows={6}
          defaultValue={product.description}
          variant="outlined"
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <IconButton onClick={() => handleDelete(product.id)}>
          <DeleteIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          startIcon={<SaveIcon />}
        >
          Spara
        </Button>
      </Box>
    </Container>
  );
}

export default UpdateExistProduct;
