import ProductGrid from "@/app/ui/ProductGrid";
import AddIcon from "@mui/icons-material/Add";
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
    <div>
      <Link href="/admin/product/new">
        <AddIcon />
      </Link>
      <h1>Admin sidan</h1>
      <ProductGrid />
    </div>
  );
}

export default Admin;
