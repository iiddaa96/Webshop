"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";
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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UpdateExistProduct() {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box
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
        <Typography>Här kommer en bild</Typography>
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
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
        <TextField
          fullWidth
          label="Title"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Price"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={6}
          variant="outlined"
          sx={{ width: "100%", marginBottom: "20px" }}
        />
        <Box sx={{ display: "flex", gap: "5vh" }}>
          <Link href="/admin/product">
            <Box component={"button"} sx={{ width: "150px" }}>
              <SaveIcon fontSize="large" />
            </Box>
          </Link>
          <Box component={"button"} sx={{ width: "150px" }}>
            <DeleteIcon fontSize="large" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default UpdateExistProduct;
