"use client";

import { Button, Paper, Typography } from "@mui/material";

interface ConfirmDeleteToastProps {
  selectedItemId: string;
  removeFromCart: (id: string) => void;
  setShowDeleteToast: (show: boolean) => void;
}

export const ConfirmDeleteToast = ({
  selectedItemId,
  removeFromCart,
  setShowDeleteToast,
}: ConfirmDeleteToastProps) => {
  const handleConfirmDelete = () => {
    // Remove the item from the cart
    removeFromCart(selectedItemId);
    setShowDeleteToast(false);
  };

  return (
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
  );
};
