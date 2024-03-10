/* 
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
- `data-cy="product-id"` id på en produkt.
- `data-cy="product-title"` titeln på en produkt.
- `data-cy="product-price"` priset på en produkt.
- `data-cy="product-description"` beskrivningen av en produkt.
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
*/

import { products } from "../../data/index";
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function SingleProduct() {
 
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
              <Typography variant="body1" gutterBottom>{products[0].price}</Typography>
              <Typography variant="body2" gutterBottom>{products[0].description}</Typography>
            </div>
          )}
        </Box>

        {/* Add to Cart functionality */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2px' }}>
          <IconButton color="primary" aria-label="remove from cart">
            <RemoveIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            <Typography component="span">1</Typography>
          </Button>
          <IconButton color="primary" aria-label="add to cart">
            <AddIcon />
          </IconButton>
        </Box>

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
      </Grid>
    </Grid>
  );
}

export default SingleProduct;