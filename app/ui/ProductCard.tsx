"use client";

import { CardActionArea, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { products } from "../../data/index";

export default function ActionAreaCard() {
  return (
    <main>
      {products.map((product) => (
        <Link href="/admin/product/updateExistProduct">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea color="red">
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </main>
  );
}
