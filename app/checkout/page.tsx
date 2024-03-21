"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import PaymentSection from "../ui/PaymentSection";
import QuantityButton from "../ui/quantityButton1";

/**
 * Komponent som representerar kundvagnen.
 * @returns {JSX.Element} JSX-element som representerar kundvagnen.
 */

function CartSection() {
  const { cart, removeFromCart } = useCart(); //hämtar från cartContext
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0); // State för den totala summan

  useEffect(() => {
    // Uppdatera den totala summan när kundvagnen ändras
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  const handleDelete = (itemId: string) => {
    setShowDeleteToast(true);
    setSelectedItemId(itemId);
  };

  const handleConfirmDelete = () => {
    // Remove the item from the cart
    removeFromCart(selectedItemId);
    setShowDeleteToast(false);
  };

  return (
    <Container maxWidth="md" component="main">
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        CART
      </Typography>
      {/* Spaceing mellan boxarna och css styleing */}
      <Grid container spacing={1}>
        {cart.map((item) => (
          <Grid
            data-cy="cart-item"
            item
            xs={12}
            key={item.id}
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "30px",
            }}
          >
            {/* Mappar ut bilderna/tavlorna, plus styleing på boxen dom är i */}
            <Box sx={{ width: "10%" }}>
              <img
                src={item.image}
                style={{ width: "100%" }}
                alt={item.title}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
              }}
            >
              {/* Mappar ut titel av tavlorna */}
              <Typography
                sx={{
                  fontSize: "16px",
                  marginTop: "40px",
                  textAlign: "left",
                }}
                variant="h6"
                data-cy="product-title"
              >
                {item.title}
              </Typography>
              {/* Icon buttons för att lägga till eller ta bort antal valda posters */}
              <QuantityButton
                productId={item.id}
                initialQuantity={item.quantity}
                showTotalPrice
              />
              {/* Mappar ut priset per tavla */}
            </Box>
            {/* DeleteIcon som en knapp längst till höger */}
            <Box sx={{ alignSelf: "flex-start" }}>
              <IconButton
                color="inherit"
                aria-label="delete"
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Totalpris grid */}
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">Total:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              data-cy="total-price"
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              {totalPrice} kr
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {showDeleteToast && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="body1">
            Are you sure you want to delete the item?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmDelete}
            sx={{ marginRight: "10px", marginTop: "10px" }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowDeleteToast(false)}
            sx={{ marginTop: "10px" }}
          >
            No
          </Button>
        </Paper>
      )}
      <PaymentSection />
    </Container>
  );
}

export default CartSection;
