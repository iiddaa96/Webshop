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
  Typography,
  styled,
} from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    maxWidth: 300,
    margin: "auto",
  },
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
      <Typography
        sx={{
          marginTop: "-1rem",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        ADMIN
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {products.map((product: Product, index: number) => {
            const isOutOfStock = product.inventory <= 0;

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: 200, sm: 300 },
                        filter: isOutOfStock ? "grayscale(100%)" : "none",
                      }}
                      width="100%"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          color: "secondary.main",
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {`${product.price.toString()}Kr`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Saldo i lager: {product.inventory}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link href={`/admin/product/${product.id}`} passHref>
                          <EditNoteIcon fontSize="large" />
                        </Link>
                      </Box>
                    </CardContent>
                    {isOutOfStock && (
                      <Typography
                        variant="body2"
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          color: "red",
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
