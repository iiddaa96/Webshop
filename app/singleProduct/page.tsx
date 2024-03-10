/* 
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
- `data-cy="product-id"` id på en produkt.
- `data-cy="product-title"` titeln på en produkt.
- `data-cy="product-price"` priset på en produkt.
- `data-cy="product-description"` beskrivningen av en produkt.
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
*/





import Link from "next/link";
import { products } from "../../data/index";
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function singleProduct() {
  // Check if products array is not empty
 
    return (
      <div>
      <h2>Single product page</h2>
  {/* renderar single product card */}
  <Box sx={{ flexGrow: 1 }}>
  {/* Render only the first product */}
  {products.length > 0 && (
    <div key={products[0].id}>
      <img src={products[0].image} alt="testProduct" />
      <p>{products[0].title}</p>
      <p>{products[0].price}</p>
      <p>{products[0].description}</p>
    </div>
  )}
</Box>

   {/* knapp till checkout sidan 
        <Button component={Link} href="/checkout" color="inherit">
          Posters
        </Button>*/}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color="primary" aria-label="remove from cart">
        <RemoveIcon />
      </IconButton>
      <Button variant="contained" color="primary">
        <Typography  component="span">1</Typography>
      </Button>
      <IconButton color="primary" aria-label="add to cart">
        <AddIcon />
      </IconButton>
    </Box>
  
  </div>
    )
      
     
  }


export default singleProduct;
