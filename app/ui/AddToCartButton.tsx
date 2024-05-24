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

/**
 * Komponent för en knapp som lägger till en produkt i kundvagnen. dddd
 * Använder en ikon för att representera "Lägg till i kundvagnen".
 *
 * @component
 * @param {Object} props - Egenskaper för komponenten.
 * @param {Product} props.product - Produktobjektet som ska läggas till i kundvagnen.
 * @param {string} props.title - Titeln för produkten (ej använd).
 * @param {Function} props.handleAddToCart - Funktion för att hantera "Lägg till i kundvagnen".
 * @returns {JSX.Element} En ikonknapp för att lägga till produkten i kundvagnen.
 */

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  handleAddToCart,
}) => {
  const { addToCart } = useCart();

  return (
    <IconButton
      aria-label="add to cart"
      // Anropa handleAddToCart-funktionen med produkttiteln
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart(product);
        addToCart(product);
      }}
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
