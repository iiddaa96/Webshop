"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useProductContext } from "../context/AdminContext";

const productSchema = z.object({
  id: z.string(),
  title: z.string().min(5, { message: "Titel måste innehålla minst 5 tecken" }),
  price: z.number().positive({ message: "Skriv in ett nummer" }),
  description: z
    .string()
    .max(400, { message: "Inlägget får vara 400 tecken långt" }),
});

type SingleProduct = z.infer<typeof productSchema>;

function NewProductForm() {
  const { selectProduct } = useProductContext();

  const [product, setProduct] = useState<SingleProduct[]>([]);

  const form = useForm<SingleProduct>({
    resolver: zodResolver(productSchema),
  });

  const save = (data: SingleProduct) => {
    const updateProducts = [...product, data];
    setProduct(updateProducts);
    selectProduct(data);
    console.log("Produkter", updateProducts);
  };

  return (
    <Box
      component={"form"}
      onSubmit={form.handleSubmit(save)}
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
      <Typography data-cy="product-image-error">Här kommer en bild</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          // startIcon={<CloudUploadIcon />}
        >
          Upload file
          {/* <VisuallyHiddenInput type="file" /> */}
        </Button>
      </Box>
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
        data-cy="product-price-error"
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
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
      />
      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Box component={Link} href="/admin" sx={{ width: "150px" }}>
          <SaveIcon fontSize="large" />
          <button onClick={() => save(form.getValues())}>Skicka</button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewProductForm;
