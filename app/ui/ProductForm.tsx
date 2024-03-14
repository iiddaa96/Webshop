"use client";

import { Product, productSchema } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useProduct } from "../context/AdminContext";

interface Props {
  product?: Product;
}

function ProductForm(props: Props) {
  const isEdit = Boolean(props.product);
  const { addProduct } = useProduct();

  const form = useForm<Product>({
    defaultValues: props.product,
    resolver: zodResolver(productSchema),
  });

  const save = (data: Product) => {
    const newData = { ...data, id: nanoid() };
    if (isEdit) {
      // update
    } else {
      addProduct(newData);
    }
    // navigera...
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(save)}
      data-cy="product-form"
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
      <Typography variant="h4">
        {isEdit ? "Uppdatera produkt" : "Skapa ny produkt"}
      </Typography>
      <TextField
        data-cy="product-title-error"
        fullWidth
        label="Title"
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />
      <TextField
        data-cy="product-image-error"
        fullWidth
        label="Image"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />
      <TextField
        data-cy="product-price-error"
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />

      <TextField
        data-cy="product-description-error"
        id="outlined-multiline-static"
        label="Description"
        multiline
        helperText={form.formState.errors.description?.message}
        error={Boolean(form.formState.errors.description)}
        rows={6}
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

export default ProductForm;
