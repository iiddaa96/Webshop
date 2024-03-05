import Link from "next/link";

function header() {
  return (
    <div>
      <h1>Här ska headern layouten vara</h1>
      <header>
        <Link href="/">
          <h1>Wall Of Art</h1>
        </Link>
        <nav>
          <Link href="/admin">admin</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>
    </div>
  );
}

export default header;
