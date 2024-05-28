"use client";
/* eslint-disable react/jsx-key */
import DeleteIcon from "@mui/icons-material/Delete";
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
  SnackbarOrigin,
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

interface State extends SnackbarOrigin {
  open: boolean;
}

export interface ProductGridProps {
  products: Product[]; // Use the Product type for the products prop
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [productToDelete, setProductToDelete] = React.useState<string | null>(
    null
  );

  const handleDialogOpen = (productId: string) => {
    setProductToDelete(productId);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {products.map((product: Product, index: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Set fixed height
                    width="100%" // Set fixed width
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
                      {`${product.price.toString()}Kr`}{" "}
                      {/* Konverterat till en string */}
                    </Typography>
                    <Typography>{product.id}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link href={"/admin/product/" + product.id}>
                        <EditNoteIcon fontSize="large" />
                      </Link>
                      <DeleteIcon
                        fontSize="large"
                        onClick={() => handleDialogOpen(product.id.toString())}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
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
