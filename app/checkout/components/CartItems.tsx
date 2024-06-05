"use client";

import { useCart } from "@/app/context/CartContext";
import QuantityButton from "@/app/ui/QuantityButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
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
          }}
        >
          {item.image && (
            <Box
              sx={{
                width: { xs: "100%", sm: "15%" },
                marginRight: { xs: "0", sm: "2rem" },
              }}
            >
              <Image
                src={item.image}
                alt="Produktbild"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: { xs: "100%", sm: "70%" },
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                marginBottom: "6px",
                textAlign: "left",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              {item.title}
            </Typography>

            <QuantityButton
              productId={item.id!.toString()}
              initialQuantity={item.quantity}
              showTotalPrice
            />
          </Box>

          <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
            <IconButton
              color="inherit"
              aria-label="delete"
              onClick={() => handleDelete(item.id?.toString() || "")}
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
