"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import React from "react";
import { Product } from "../../data/index";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  product: Product;
  title: string;
  // Lägg till funktion för att hantera "Lägg till i kundvagnen"
  handleAddToCart: (products: Product) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  handleAddToCart,
}) => {
  const { addToCart } = useCart();

  return (
    <IconButton
      aria-label="add to cart"
      // Anropa handleAddToCart-funktionen med produkttiteln
      // onClick={() => handleAddToCart(product)}
      // onClick={() => addToCart(product)}
      onClick={() => {
        handleAddToCart(product);
        addToCart(product);
      }}
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;

// "use client";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { IconButton } from "@mui/material";
// import React from "react";
// import { Product } from "../../data/index";

// interface AddToCartButtonProps {
//   product: Product;
//   title: string;
//   // Lägg till funktion för att hantera "Lägg till i kundvagnen"
//   handleAddToCart: (products: Product) => void;
// }

// const AddToCartButton: React.FC<AddToCartButtonProps> = ({
//   product,
//   handleAddToCart,
// }) => {
//   return (
//     <IconButton
//       aria-label="add to cart"
//       // Anropa handleAddToCart-funktionen med produkttiteln
//       onClick={() => handleAddToCart(product)}
//     >
//       <AddShoppingCartIcon />
//     </IconButton>
//   );
// };

// export default AddToCartButton;
