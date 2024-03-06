import Link from "next/link";

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
