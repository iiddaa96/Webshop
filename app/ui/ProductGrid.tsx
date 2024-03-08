"use client";

import { Box, CardActionArea, Grid, Link, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { products } from "../../data/index";

// styling till alla cards
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link href="/admin/product/updateExistProduct" key={index}>
              <StyledCard>
                <CardActionArea color="red">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "primary.main" }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ color: "secondary.main" }}
                    >
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
