import { Box, Grid, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  const isOutOfStock = product.inventory <= 0;

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
          <Box
            sx={{
              flexGrow: 1,
              padding: "80px 30px",
              border: isOutOfStock ? "2px solid gray" : "none",
              borderRadius: isOutOfStock ? "4px" : "none", // Optional: Add some border radius for better appearance
            }}
          >
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.price} kr
            </Typography>
            <Typography variant="body2" gutterBottom>
              Saldo i lager: {product.inventory}
            </Typography>
            <AddToCartButton product={product} />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
