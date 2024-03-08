import Link from "next/link";

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

function AddNewProduct() {
  return (
    <div>
      <h1>AddNewProduct Page</h1>
      <Link href="/admin/product">
        <button>Spara/Tillbaka</button>
      </Link>
    </div>
  );
}

export default AddNewProduct;
