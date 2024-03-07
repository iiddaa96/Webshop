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
      <h1>Admin sidan</h1>

      <Link href="/admin/product/updateExistProduct">
        <button>Uppdatera produkt</button>
      </Link>
      <Link href="/admin/product/new">
        <button>Lägg till ny</button>
      </Link>
    </div>
  );
}

export default Admin;
