"use client";
// UpdateExistProduct.js
import { products } from "@/data";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

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
          width: "100%",
          maxWidth: 600,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Uppdatera produkt
        </Typography>
        <TextField
          fullWidth
          label="Titel"
          defaultValue={product.title}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Pris"
          defaultValue={product.price}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Beskrivning"
          multiline
          rows={6}
          defaultValue={product.description}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
      </Box>
    </Container>
  );
}

export default UpdateExistProduct;
