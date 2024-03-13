
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

    
        <QuantityButton />
    
        
      </Grid>
    </Grid>
  );
}


