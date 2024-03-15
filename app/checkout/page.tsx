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
import { useState } from "react";
import PaymentSection from "../checkoutComponents/paymentSection";
import { useCart } from "../context/cartContext";
import QuantityButton from "../ui/quantityButton";

function CartSection() {
  const { cart, removeFromCart } = useCart(); //hämtar från cartContext
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");

  const handleDelete = (itemId: string) => {
    setShowDeleteToast(true);
    setSelectedItemId(itemId);
  };

  const handleConfirmDelete = () => {
    // Remove the item from the cart
    removeFromCart(selectedItemId);
    setShowDeleteToast(false);
  };

  // Funktion för att beräkna den totala summan av varukorgen
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Container maxWidth="md">
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
              data-cy="cart-item"
            >
              {/* Mappar ut titel av tavlorna */}
              <Typography
                sx={{
                  fontSize: "16px",
                  marginTop: "40px",
                  textAlign: "left",
                }}
                variant="h6"
              >
                {item.title}
              </Typography>
              {/* Icon buttons för att lägga till eller ta bort antal valda posters */}
              {/* Använd QuantityButton-komponenten här */}
              <QuantityButton />
              {/* Mappar ut priset per tavla */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingBottom: "5px",
                }}
              >
                <Typography variant="body1">Price:</Typography>
                <Typography sx={{ marginLeft: "8px" }} variant="body1">
                  {item.price} :-
                </Typography>
              </Box>
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
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              {calculateTotal()}:- {/* Visa den beräknade totalen */}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {showDeleteToast && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: "50%",
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

// CYPRESS TESTER SOM SKA IN

/* /* 
- `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.

- `data-cy="customer-form"` formulär för att fylla i kunduppgifter på checkout-sidan.
- `data-cy="customer-name"` kundens namn (som fylls i på checkout-sidan).
- `data-cy="customer-address"` kundens gatuadress (som fylls i på checkout-sidan).
- `data-cy="customer-zipcode"` kundens postnummer (som fylls i på checkout-sidan).
- `data-cy="customer-city"` kundens stad (som fylls i på checkout-sidan).
- `data-cy="customer-email"` kundens emailadress (som fylls i på checkout-sidan).


- `data-cy="customer-phone"` kundens telefonnummer (som fylls i på checkout-sidan).
- `data-cy="customer-name-error"` felmeddelande vid felaktigt angivet namn.
- `data-cy="customer-address-error"` felmeddelande vid felaktigt angiven adress.
- `data-cy="customer-zipcode-error"` felmeddelande vid felaktigt angivet postnummer.
- `data-cy="customer-city-error"` felmeddelande vid felaktigt angiven stad.
- `data-cy="customer-email-error"` felmeddelande vid felaktigt angiven emailadress.
- `data-cy="customer-phone-error"` felmeddelande vid felaktigt angivet telefonnummer.


- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.
*/
