"use client";

import { Product, productSchema } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  FormHelperTextProps,
  TextField,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useProduct } from "../context/AdminContext";

interface Props {
  product?: Product;
}

function ProductForm(props: Props) {
  const isEdit = Boolean(props.product);
  const { addProduct, editProduct } = useProduct();
  const router = useRouter();

  const form = useForm<Product>({
    defaultValues: props.product,
    resolver: zodResolver(productSchema),
    mode: "onChange",
  });

  const save = (data: Product) => {
    const newData = { ...data, id: nanoid() };
    if (isEdit) {
      editProduct(data);
    } else {
      addProduct(newData);
    }
    //länka tillbaka till admin efter
    router.push("/admin");
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

      {/* Textfält för titel */}
      <TextField
        fullWidth
        label="Title"
        inputProps={{ "data-cy": "product-title" }}
        FormHelperTextProps={
          { "data-cy": "product-title-error" } as FormHelperTextProps
        }
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />
      {/* Textfält för image */}
      <TextField
        inputProps={{ "data-cy": "product-image" }}
        FormHelperTextProps={
          { "data-cy": "product-image-error" } as FormHelperTextProps
        }
        fullWidth
        label="Image"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />
      {/* Textfält för pris */}
      <TextField
        inputProps={{ "data-cy": "product-price" }}
        FormHelperTextProps={
          { "data-cy": "product-price-error" } as FormHelperTextProps
        }
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />
      {/* Textfält för beskrivning */}
      <TextField
        inputProps={{ "data-cy": "product-description" }}
        FormHelperTextProps={
          { "data-cy": "product-description-error" } as FormHelperTextProps
        }
        id="outlined-multiline-static"
        label="Description"
        // multiline // Fråga David om denna ska vara med eller inte (admin-2) ???
        helperText={form.formState.errors.description?.message}
        error={Boolean(form.formState.errors.description)}
        rows={6}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("description")}
      />
      {/* Box med spara knappen */}
      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "150px" }}
          /*  Knappen är grå om formuläret inte 
          är godkänt*/
          disabled={!form.formState.isValid} // Fråga David hur man löser denna (admin-2)!!!!!!!
        >
          <SaveIcon fontSize="large" />
          Spara
        </Button>
      </Box>
    </Box>
  );
}

export default ProductForm;
