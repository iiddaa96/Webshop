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
import React from "react";
import { useProduct } from "../context/AdminContext"; // Adjust the path accordingly

// Your existing StyledCard component
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
}));

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function ProductGrid() {
  // Using the context to select a product
  const { products, removeProduct } = useProduct();
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

  const handleDeleteProduct = () => {
    if (productToDelete) {
      removeProduct(productToDelete);
      setDialogOpen(false);
    }
  };

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {products.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              data-cy="product"
            >
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="auto"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: "primary.main" }}
                      data-cy="product-title"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: "secondary.main" }}
                      data-cy="product-price"
                    >
                      {product.price}Kr
                    </Typography>
                    <Typography data-cy="product-id">{product.id}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link href={"/admin/product/" + product.id}>
                        <EditNoteIcon
                          fontSize="large"
                          data-cy="admin-edit-product"
                        />
                      </Link>
                      <DeleteIcon
                        fontSize="large"
                        data-cy="admin-remove-product"
                        onClick={() => handleDialogOpen(product.id)}
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
          <Button
            onClick={handleDeleteProduct}
            data-cy="confirm-delete-button"
            autoFocus
          >
            Radera
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
