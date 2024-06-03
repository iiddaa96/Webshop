import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 3,
        border: isSoldOut ? "2px solid grey" : "none",
        opacity: isSoldOut ? 0.8 : 1,
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={product.image}
        alt={product.title}
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
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {/* Additional Card Actions if any */}
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
