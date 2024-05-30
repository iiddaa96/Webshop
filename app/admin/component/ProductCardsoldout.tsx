import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
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

const StyledCard = styled(Card)<{ inventory: number }>(
  ({ theme, inventory }) => ({
    margin: theme.spacing(2),
    border: inventory <= 0 ? "2px solid grey" : "1px solid #ccc",
    opacity: inventory <= 0 ? 0.5 : 1,
  })
);

const SoldOutText = styled(Typography)({
  color: "grey",
  fontWeight: "bold",
});

const Boxgrayout: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledCard inventory={product.inventory}>
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
        {product.inventory <= 0 && <SoldOutText>Sold Out</SoldOutText>}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled={product.inventory <= 0}>
          Add to Cart
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default Boxgrayout;
