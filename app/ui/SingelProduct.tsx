import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";
import React from "react";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: Product;
};

const SingleProduct: React.FC<Props> = ({ product }) => {
  const isSoldOut = product.inventory <= 0;

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                boxShadow: 3,
                backgroundColor: isSoldOut ? "grey.300" : "white",
                opacity: isSoldOut ? 0.5 : 1,
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={product.image}
                alt={product.title}
                sx={{ filter: isSoldOut ? "grayscale(100%)" : "none" }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {product.price} kr
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Saldo i lager: {product.inventory}
                </Typography>
                {isSoldOut ? (
                  <Typography
                    variant="subtitle1"
                    color="error"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  >
                    Sold Out
                  </Typography>
                ) : (
                  <AddToCartButton product={product} />
                )}
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
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
            {isSoldOut ? (
              <Typography variant="subtitle1" color="error" gutterBottom>
                Sold Out
              </Typography>
            ) : (
              <AddToCartButton product={product} />
            )}
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default SingleProduct;
