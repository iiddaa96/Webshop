"use client";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { editProduct } from "../endpoints/product-endpoints";

export interface Props {
  product?: Product;
  chosenCategory: string;
}

function EditProductForm(props: Props) {
  const router = useRouter();

  const form = useForm<Product>({
    defaultValues: props.product,
    mode: "onChange",
  });

  const save = (data: Product) => {
    const updatedProduct = { ...data };

    console.error(updatedProduct);

    editProduct(updatedProduct);

    router.push("/admin");
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
      <Typography variant="h4">
        {props.product ? "Uppdatera produkt" : "Skapa ny produkt"}
      </Typography>

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

export default EditProductForm;
