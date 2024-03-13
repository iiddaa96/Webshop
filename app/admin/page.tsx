import ProductGrid from "@/app/ui/ProductGrid";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Link from "next/link";
/* CYPRESS TESTER SOM SKA FINNAS MED  */
/* - `data-cy="product"` produkt-korten/raden på startsidan & adminsidan. 
- `data-cy="admin-link"` den länk/knapp som går till admin.
- `data-cy="admin-add-product"` edit-knappen för admin som ska editera en produkt.
- `data-cy="admin-edit-product"` edit-knappen för admin som ska editera en produkt.
- `data-cy="admin-remove-product"` den knapp som ska kunna radera en produkt.
- `data-cy="confirm-delete-button"` konfirmera att man vill radera en produkt.*/

function Admin() {
  return (
    <>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "30px",
          marginRight: "30px",
        }}
      >
        <Link href="/admin/new">
          <AddIcon
            data-cy="admin-add-product"
            sx={{
              color: "black",
              padding: "20px",
              fontSize: "52px",
              borderRadius: "999px",
              transition: "background-color 0.3s",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          />
        </Link>
      </Box>
      <ProductGrid />
    </>
  );
}

export default Admin;
