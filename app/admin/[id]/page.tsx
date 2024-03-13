"use client";
import { products } from "@/data";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useProductContext } from "../../context/AdminContext";

type Props = { params: { id: string } };

function UpdateExistProduct(props: Props) {
  const { selectedProduct, selectProduct } = useProductContext();
  const product =
    selectedProduct || products.find((p) => p.id === props.params.id);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [formData, setFormData] = useState({
    title: product?.title || "",
    price: product?.price || "",
    description: product?.description || "",
    image: "", // Lägg till fältet för bildens URL
  });

  const handleDelete = (productId: string) => {
    setShowDeleteToast(true);
  };

  const handleConfirmDelete = () => {
    console.log("Delete product with ID:", product?.id);
    setFormData({
      title: "",
      price: "",
      description: "",
      image: "", // Rensa bildens URL
    });
    const imageElement = document.getElementById("product-image");
    if (imageElement) {
      imageElement.style.display = "none";
    }
    setShowDeleteToast(false);
  };

  const handleSave = () => {
    console.log("Save changes");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedImageUrl = reader.result as string;
        setFormData({
          ...formData,
          [name]: uploadedImageUrl,
        });
        const imageElement = document.getElementById("product-image");
        if (imageElement) {
          imageElement.setAttribute("src", uploadedImageUrl);
          imageElement.style.display = "block";
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectProduct = () => {
    if (product) {
      selectProduct(product);
    }
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
          maxWidth: 400,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          height: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Uppdatera produkt
        </Typography>
        <CardMedia
          component="img"
          height="auto"
          image={formData.image || product?.image || ""}
          alt={formData.title || product?.title || ""}
          id="product-image"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Titel"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Pris"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Beskrivning"
          multiline
          rows={6}
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={handleInputChange} />
          </Button>
          <IconButton onClick={() => handleDelete(product?.id || "")}>
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
      {showDeleteToast && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="body1">
            Är du säker på att du vill radera produkten?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmDelete}
            sx={{ marginRight: "10px", marginTop: "10px" }}
          >
            Ja
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowDeleteToast(false)}
            sx={{ marginTop: "10px" }}
          >
            Nej
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default UpdateExistProduct;
