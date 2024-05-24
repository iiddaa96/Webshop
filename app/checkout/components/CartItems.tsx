"use client";

import { useCart } from "@/app/context/CartContext";
import QuantityButton from "@/app/ui/QuantityButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ConfirmDeleteToast } from "./ConfirmDeleteToast";
import { ItemsProps } from "./TotalPrice";

export const CartItems = ({ cart }: ItemsProps) => {
  const { removeFromCart } = useCart();
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

  return (
    <>
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
            <img src={item.image} style={{ width: "100%" }} alt={item.title} />
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
      {showDeleteToast && (
        <ConfirmDeleteToast
          selectedItemId={selectedItemId}
          removeFromCart={handleConfirmDelete}
          setShowDeleteToast={setShowDeleteToast}
        />
      )}
    </>
  );
};
