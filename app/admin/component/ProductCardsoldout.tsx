import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/styles";
import React from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  inventory: number;
  isArchived: boolean;
}

interface ProductCardProps {
  product: Product;
}

const useStyles = makeStyles<Theme, Product>(
  (theme: { spacing: (arg0: number) => any }) =>
    createStyles({
      card: {
        margin: theme.spacing(2),
        border: (props: { inventory: number }) =>
          props.inventory <= 0 ? "2px solid grey" : "1px solid #ccc",
        opacity: (props: { inventory: number }) =>
          props.inventory <= 0 ? 0.5 : 1,
      },
      soldOut: {
        color: "grey",
        fontWeight: "bold",
      },
    })
);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const classes = useStyles(product);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        {product.inventory <= 0 && (
          <Typography className={classes.soldOut}>Sold Out</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled={product.inventory <= 0}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
