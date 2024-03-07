import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { products } from "../data/index";

/*
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
- `data-cy="product-id"` id på en produkt.
- `data-cy="product-title"` titeln på en produkt.
- `data-cy="product-price"` priset på en produkt.
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
  */

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
