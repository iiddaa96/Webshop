"use client";
import { addNewProduct } from "@/app/endpoints/product-endpoints";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Product } from "@prisma/client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddNewProductForm() {
  const [chosenCategory, setChosenCategory] = useState("");
  const form = useForm<Product>({
    mode: "onChange",
  });

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    control.setValue("category", event.target.value);
  };

  const save = (data: Product) => {
    const updatedProduct = { ...data };

    addNewProduct(updatedProduct, chosenCategory);
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(save)}
      sx={{
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
        fullWidth
        label="Title"
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />
      <TextField
        fullWidth
        label="Image"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />
      <TextField
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />

      <Select
        fullWidth
        label="Category"
        value={chosenCategory}
        sx={{ width: "100%", marginBottom: "20px" }}
      >
        <MenuItem value="">Välj en kategori</MenuItem>
        <MenuItem value="Rea">Rea</MenuItem>
        <MenuItem value="Nyheter">Nyheter</MenuItem>
        <MenuItem value="Badleksaker">Badleksaker</MenuItem>
        <MenuItem value="Handdukar">Handdukar</MenuItem>
      </Select>

      <TextField
        id="outlined-multiline-static"
        label="Description"
        helperText={form.formState.errors.description?.message}
        error={Boolean(form.formState.errors.description)}
        rows={9}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("description")}
      />
      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button type="submit" variant="contained" sx={{ width: "150px" }}>
          <SaveIcon fontSize="large" />
          Spara
        </Button>
      </Box>
    </Box>
  );
}
