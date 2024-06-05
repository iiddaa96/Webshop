"use client";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { Product } from "@prisma/client";
import React from "react";

// Your existing StyledCard component
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
}));

export interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {products.map((product: Product, index: number) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      width="100%"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "primary.main" }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "secondary.main" }}
                      >
                        {`${product.price.toString()}Kr`}
                      </Typography>
                      <Typography>{product.id}</Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link href={"/admin/product/" + product.id}>
                          <EditNoteIcon fontSize="large" />
                        </Link>{" "}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>
          {"Är du säker på att du vill radera denna produkt?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Denna åtgärd kan inte ångras.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Avbryt</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
