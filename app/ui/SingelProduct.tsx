"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Product } from "@prisma/client";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
            <div key={product.id}>
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
        </Grid>
      </Grid>
    </main>
  );
}
