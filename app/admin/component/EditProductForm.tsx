"use client";
import { deleteProduct, editProduct } from "@/app/endpoints/product-endpoints";
import { productSchema } from "@/app/zod-validation/products";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Prisma.CategoryGetPayload<{}>[];
  product: Product;
}

export type ProductWithCategories = Product & { categories: string[] };

export default function EditProductForm({ categories, product }: Props) {
  function handleSubmit() {
    deleteProduct(Number(id));
    console.log(id);
  }

  const { id } = useParams();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const form = useForm<ProductWithCategories>({
    mode: "onChange",
    resolver: zodResolver(productSchema),
  });
  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  const save = (data: ProductWithCategories) => {
    const { categories, ...updatedProduct } = data;
    const chosenCategories = selectedCategories.map((c) => Number(c));

    editProduct(updatedProduct, chosenCategories, Number(id));
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
      <TextField
        fullWidth
        label={product.title}
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />

      <TextField
        fullWidth
        label={product.image}
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />

      <TextField
        fullWidth
        label={product.price.toString()}
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />

      <Select
        fullWidth
        multiple
        value={selectedCategories}
        label="kategorier"
        placeholder="Välj en kategori"
        {...form.register("categories")}
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={handleCategoryChange}
      >
        {categories.map((c) => (
          <MenuItem key={c.id} value={c.id.toString()}>
            {c.name}
          </MenuItem>
        ))}
      </Select>

      <TextField
        fullWidth
        label={product.inventory}
        helperText={form.formState.errors.inventory?.message}
        error={Boolean(form.formState.errors.inventory)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("inventory")}
      />

      <TextField
        id="outlined-multiline-static"
        label={product.description}
        helperText={form.formState.errors.description?.message}
        error={Boolean(form.formState.errors.description)}
        rows={6}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("description")}
      />

      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "150px" }}
          /*  Knappen är grå om formuläret inte 
          är godkänt*/
        >
          <SaveIcon fontSize="large" />
          Spara
        </Button>

        <Link href="/admin">
          <Button
            sx={{ color: "red", border: "1px red solid", width: "150px" }}
            onClick={() => handleSubmit()}
          >
            <DeleteIcon fontSize="large" sx={{ cursor: "pointer" }} />
            Ta bort
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
