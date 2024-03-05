import { mockedProduct } from "./lib/mockedProduct";

export default function Home() {
  return (
    <main>
      <p>Det här är startsidan. Här ska alla produkterna visas.</p>

      {/* Här mappas en produkt ut. Detta blir ett produkt kort sen. */}
      {mockedProduct.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="testProduct" />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.content}</p>
        </div>
      ))}
    </main>
  );
}
