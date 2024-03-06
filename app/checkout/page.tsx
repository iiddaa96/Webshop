import Link from "next/link";

function Checkout() {
  return (
    <div>
      <h1> Varukorg sidan</h1>
      <Link href="/confirmation">Slutför köp</Link>
    </div>
  );
}

export default Checkout;
