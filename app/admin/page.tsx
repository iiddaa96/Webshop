import Link from "next/link";

function Admin() {
  return (
    <div>
      <h1>Admin sidan</h1>

      <Link href="/admin/updateExistProduct">
        <button>Uppdatera produkt</button>
      </Link>
      <Link href="/admin/AddNewProduct">
        <button>Lägg till ny</button>
      </Link>
    </div>
  );
}

export default Admin;
