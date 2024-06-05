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
  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const handleDelete = (itemId: string) => {
    setShowDeleteToast(true);
    setSelectedItemId(itemId);
  };

  const handleConfirmDelete = () => {
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
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            position: "relative",
            alignItems: "center", // Align items vertically center
          }}
        >
          {/* Product Image */}
          <Box sx={{ width: "15%", marginRight: "2rem" }}>
            <img
              src={item.image}
              style={{ width: "100%", borderRadius: "8px" }}
              alt={item.title}
            />
          </Box>

          {/* Product Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "55%",
              alignItems: "center", // Center items vertically
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                marginBottom: "8px",
                textAlign: "center",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              {item.title}
            </Typography>
            <QuantityButton
              productId={item.id.toString()}
              initialQuantity={item.quantity}
              showTotalPrice
            />
          </Box>

          {/* Price */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "15%",
              textAlign: "right",
              alignItems: "center", // Center items vertically
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {item.price} kr
            </Typography>
          </Box>

          {/* Delete Button */}
          <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
            <IconButton
              color="inherit"
              aria-label="delete"
              onClick={() => handleDelete(item.id.toString())}
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
