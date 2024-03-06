import { products } from "../data/index";

export default function Home() {
  return (
    <main>
      <p>Det här är startsidan. Här ska alla produkterna visas.</p>

      {/* Här mappas en produkt ut. Detta blir ett produkt kort sen. */}
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="testProduct" />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </main>
  );
}
