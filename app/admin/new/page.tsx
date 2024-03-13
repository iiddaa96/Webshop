import { zodResolver } from "@hookform/resolvers/zod";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* CYPRESS TESTER SOM SKA FINNAS MED  */
/* - `data-cy="product"` produkt-korten/raden på startsidan & adminsidan. 
- `data-cy="admin-link"` den länk/knapp som går till admin.
- `data-cy="admin-add-product"` edit-knappen för admin som ska editera en produkt.
- `data-cy="admin-edit-product"` edit-knappen för admin som ska editera en produkt.
- `data-cy="admin-remove-product"` den knapp som ska kunna radera en produkt.
- `data-cy="confirm-delete-button"` konfirmera att man vill radera en produkt.
- `data-cy="product-form"` formuläret för att lägga till eller editera en produkt.
- `data-cy="product-title-error"` felmeddelande vid felaktigt angiven titel.
- `data-cy="product-description-error"` felmeddelande vid felaktigt angiven beskrivning.
- `data-cy="product-price-error"` felmeddelande vid felaktigt angivet pris.
- `data-cy="product-image-error"` felmeddelande vid felaktigt angiven bild.
*/

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const productSchema = z.object({
  id: z.string(),
  title: z.string().min(5, { message: "Titel måste innehålla minst 5 tecken" }),
  price: z.number().positive({ message: "Skriv in ett nummer" }),
  description: z
    .string()
    .max(400, { message: "Inlägget får vara 400 tecken långt" }),
});

type SingleProduct = z.infer<typeof productSchema>;

const form = useForm<SingleProduct>({
  resolver: zodResolver(productSchema),
});

function AddNewProduct() {
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
        <Typography data-cy="product-image-error">
          Här kommer en bild
        </Typography>
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
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            {/* <VisuallyHiddenInput type="file" /> */}
          </Button>
        </Box>
        <TextField
          data-cy="product-title-error"
          fullWidth
          label="Title"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          sx={{ width: "100%", marginBottom: "20px" }}
          {...form.register("title")}
          {...(form.formState.errors.title && (
            <Typography sx={{ color: "red" }}>
              {form.formState.errors.title.message}
            </Typography>
          ))}
        />
        <TextField
          data-cy="product-price-error"
          fullWidth
          label="Price"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          data-cy="product-description-error"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={6}
          variant="outlined"
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <Box sx={{ display: "flex", gap: "5vh" }}>
          <Box component={Link} href="/admin" sx={{ width: "150px" }}>
            <SaveIcon fontSize="large" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default AddNewProduct;
