import { Box, CardMedia, Grid, Typography } from "@mui/material";
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
        <Grid
          item
          xs={10}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "5.3rem",
              marginBottom: { xs: "-4rem", sm: "-4rem", md: "4rem" },
              marginTop: "10px",
            }}
            style={{ filter: isOutOfStock ? "grayscale(100%)" : "none" }}
          >
            <div key={product.id}>
              <CardMedia
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: {
                    xs: "auto",
                    sm: "300px",
                    md: "400px",
                    lg: "500px",
                    xl: "600px",
                  },
                  objectFit: "contain",
                }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ flexGrow: 1, padding: "70px 10px" }}
            style={{ color: isOutOfStock ? "gray" : "inherit" }}
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
