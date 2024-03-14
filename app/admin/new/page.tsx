"use client";
// AddNewProduct.tsx
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../../ui/ProductTypes"; // Importera Product typen
import { useProductContext } from "../../context/AdminContext"; // Justera sökvägen till din ProductContext

const AddNewProduct: React.FC = () => {
  const { addProduct } = useProductContext();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now().toString(), // Enkel unik identifierare
      title,
      price: Number(price), // Omvandla sträng till nummer
      description,
      image,
    };

    addProduct(newProduct);
    console.log("Product added:", newProduct);
    // Rensa formulärfält
    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          height: "auto",
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
        <Typography variant="h6">Lägg till en ny produkt</Typography>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Ladda upp bild
          <input type="file" hidden onChange={handleImageUpload} />
        </Button>
        <TextField
          fullWidth
          label="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Pris"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Beskrivning"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Lägg till Produkt
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewProduct;
