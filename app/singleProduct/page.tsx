
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
import { Box,  Grid, Typography } from '@mui/material';
import QuantityButton from "../ui/quantityButton";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function SingleProduct() {

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
              <Typography variant="body2" gutterBottom>{products[0].description}</Typography>
            </div>
          )}
        </Box>
         {/* incrrement decrement button*/}
           <QuantityButton />


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
          }}>Add to cart <ShoppingCart /> </button>
        </Box>

      </Grid>
    </Grid>
  );
}


