"use client";
import { addNewProduct } from "@/app/endpoints/product-endpoints";
import { productSchema } from "@/app/zod-validation/products";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Prisma.CategoryGetPayload<{}>[];
}

export type ProductWithCategories = Product & { categories: string[] };

export default function AddProductForm({ categories }: Props) {
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
    const { categories, ...newProduct } = data;
    const chosenCategories = selectedCategories.map((c) => Number(c));

    addNewProduct(newProduct, chosenCategories);
    router.push("/admin");

    if (!addNewProduct) {
      console.log("Error");
    }
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
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />

      <TextField
        fullWidth
        label="Image"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />

      <TextField
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />
      {/* Textfält för saldo */}
      <TextField
        fullWidth
        label="inventory"
        helperText={form.formState.errors.inventory?.message}
        error={Boolean(form.formState.errors.inventory)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("inventory")}
      />
      {/* Textfält för kategorierna */}

      <Select
        fullWidth
        multiple
        value={selectedCategories}
        label="Category"
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
        id="outlined-multiline-static"
        label="Description"
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
