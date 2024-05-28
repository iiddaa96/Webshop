"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      variant="contained"
      onClick={handleBack}
      sx={{
        marginTop: "10px",
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#c8c8c8",
        },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: 35 }} />
    </Button>
  );
}
