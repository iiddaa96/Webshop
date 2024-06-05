import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import Image from "next/image";
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
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: { xs: "1rem", sm: "8rem" },
              position: "relative",
            }}
          >
            <div key={product.id}>
              <CardMedia
                component="img"
              <Image
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  // Om produkten är slutsåld så blir den utgråad och får en skugga
                  filter: isOutOfStock ? "grayscale(100%)" : "none",
                  boxShadow: isOutOfStock ? "0 0 10px gray" : "none",
                  position: "relative",
                }}
              />
              {isOutOfStock && (
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "black",
                    backgroundColor: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "12px", md: "14px" },
                  }}
                >
                  Sold Out
                </Typography>
              )}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ flexGrow: 1, padding: { xs: "40px 15px", sm: "80px 30px" } }}
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
