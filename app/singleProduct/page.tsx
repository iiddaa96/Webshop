"use client"
/* 
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
- `data-cy="product-id"` id på en produkt.
- `data-cy="product-title"` titeln på en produkt.
- `data-cy="product-price"` priset på en produkt.
- `data-cy="product-description"` beskrivningen av en produkt.
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
*/
import React, { useState } from 'react';
import { products } from "../../data/index";
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function SingleProduct() {
  // Definerar en base price
  const basePrice = products.length > 0 ? products[0].price : 0;
  const [quantity, setQuantity] = useState(1);
// function för increment
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
// function för decrement
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Function to calculate the total price based on quantity
  const calculateTotalPrice = () => {
    return basePrice * quantity;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        {/* Render single product poster */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Render only the first product */}
          {products.length > 0 && (
            <div key={products[0].id}>
              <img src={products[0].image} alt="testProduct" style={{ maxWidth: "100%" }} />
            </div>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Render single product details */}
        <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
          {/* Render only the first product */}
          {products.length > 0 && (
            <div key={products[0].id}>
              {/* gutterbottom lägger till bottom margin*/}
              <Typography variant="h4" gutterBottom>{products[0].title}</Typography>
              <Typography variant="body1" gutterBottom>Price: {basePrice}kr</Typography>
              <Typography variant="body2" gutterBottom>{products[0].description}</Typography>
            </div>
          )}
        </Box>

        {/* Add to Cart functionality */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2px' }}>
            <IconButton color="primary" aria-label="decrement" onClick={decrementQuantity}>
              <RemoveIcon />
            </IconButton>
            <Button variant="contained" color="primary">
              <Typography component="span">{quantity}</Typography>
            </Button>
            <IconButton color="primary" aria-label="increment" onClick={incrementQuantity}>
              <AddIcon />
            </IconButton>
          </Box>

          {/* Displays total price på sidan */}
          <Box>
            <Typography variant="h6">Total Price: {calculateTotalPrice()}kr</Typography>
          </Box>

          {/* Add to cart button */}
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100px' }}>
            <button style={{
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s',
              margin: '25px',
              height: '50%',
              width: '100%',
            }}>Add to cart <ShoppingCartIcon /> </button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}


