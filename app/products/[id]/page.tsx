/* eslint-disable @next/next/no-img-element */

/* 
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan. 
- `data-cy="product-id"` id på en produkt. ------------------
- `data-cy="product-title"` titeln på en produkt. --------------
- `data-cy="product-price"` priset på en produkt. -----------------
- `data-cy="product-description"` beskrivningen av en produkt. -----------------
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
*/

import AddToCartButton from "@/app/ui/addToCartButton";
import { Box, Grid, Typography } from "@mui/material";
import { products } from "../../../data/index";

type Props = { params: { id: string } };

export default function SingleProduct(props: Props) {
  const product = products.find((product) => product.id === props.params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1 }}>
            <div key={product.id} data-cy="product-id">
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
            <Typography variant="h4" gutterBottom data-cy="product-title">
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              data-cy="product-description"
            >
              {product.description}
            </Typography>
            <Typography variant="body2" gutterBottom data-cy="product-price">
              {product.price} kr
            </Typography>
          </Box>
          <AddToCartButton product={product} />
        </Grid>
      </Grid>
    </main>
  );
}
