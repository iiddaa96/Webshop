"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Link, TextField, styled } from "@mui/material";
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
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Title"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
        />
        <TextField
          fullWidth
          label="Price"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
        />
        <TextField
          fullWidth
          label="Description"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
        />
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
      <Link href="/admin/product">Spara/Tillbaka till admin</Link>
    </div>
  );
}

export default UpdateExistProduct;
