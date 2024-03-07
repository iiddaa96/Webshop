"use client";

import { Box, CardActionArea, Grid, Link, Paper, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { products } from "../../data/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ActionAreaCard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
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
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
