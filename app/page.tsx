import Link from "next/link";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { products } from "../data/index";
import MiddleImage from "./assets/middleImage.png";

export default function Home() {
  return (
    <main>
      {/*Tillfälling länk till singleProduct page */}
      <Link href="/singleProduct">
      <Box
        sx={{
          width: "95%",
          overflow: "hidden",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%", // Minskat från '56.25%' till en lägre procent för att minska höjden
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px", // Mellanrum mellan bilden och griden
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  m: "auto",
                  boxShadow: 3,
                  position: "relative",
                }}
              >
                {" "}
                {/* Lägg till position: 'relative' för att placera ikonerna korrekt */}
                <CardMedia
                  component="img"
                  height="280"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                  {" "}
                  {/* Positionerar ikonerna i nedre högra hörnet */}
                  <CardActions
                    disableSpacing
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="add to cart">
                      <AddShoppingCartIcon />
                    </IconButton>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Link>
    </main>
  );
}
