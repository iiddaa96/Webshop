import Link from "next/link";

/* - `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="admin-link"` den länk/knapp som går till admin.
*/

function header() {
  return (
    <div>
      <h1>Här ska headern layouten vara</h1>
      <header>
        <Link href="/">
          <h1>Wall Of Art</h1>
        </Link>
        <nav>
          <Link href="/admin/product">admin</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>
    </div>
  );
}

export default header;
