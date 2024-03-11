import { products } from "@/data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import PaymentSection from "../checkoutComponents/paymentSection";

function cartSection() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        {/* Detta är tillfälligt ska vara cart sedan */}
        {/* Mappar upp data (produkterna) */}
        {products.map((item) => (
          <Grid
            item
            xs={12}
            key={item.id}
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "35px",
            }}
          >
            {/* Styling för img box i box 1 */}
            <Box sx={{ width: "20%" }}>
              <img src={item.image} style={{ width: "100%" }} />
            </Box>
            {/* styleing och innehåll i box 1. */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              {/* Titel från data */}
              <Typography variant="h6">{item.title}</Typography>
              {/* Beskrivning från data, kommer nog inte finnas sedan */}
              <Typography variant="body1">{item.description}</Typography>
            </Box>
            {/* Kunna välja antal posters med + & - knapp */}
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "2px" }}
            >
              <IconButton color="inherit" aria-label="remove from cart">
                <RemoveIcon />
              </IconButton>
              <Button variant="contained" color="inherit">
                <Typography component="span">1</Typography>
              </Button>
              <IconButton color="inherit" aria-label="add to cart">
                <AddIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Payment input fälten är i filen nedan (PaymentSection) */}
      <PaymentSection />
    </Container>
  );
}

export default cartSection;

// CYPRESS TESTER SOM SKA IN
{
  /* /* 
- `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.

- `data-cy="customer-form"` formulär för att fylla i kunduppgifter på checkout-sidan.
- `data-cy="customer-name"` kundens namn (som fylls i på checkout-sidan).
- `data-cy="customer-address"` kundens gatuadress (som fylls i på checkout-sidan).
- `data-cy="customer-zipcode"` kundens postnummer (som fylls i på checkout-sidan).
- `data-cy="customer-city"` kundens stad (som fylls i på checkout-sidan).
- `data-cy="customer-email"` kundens emailadress (som fylls i på checkout-sidan).


- `data-cy="customer-phone"` kundens telefonnummer (som fylls i på checkout-sidan).
- `data-cy="customer-name-error"` felmeddelande vid felaktigt angivet namn.
- `data-cy="customer-address-error"` felmeddelande vid felaktigt angiven adress.
- `data-cy="customer-zipcode-error"` felmeddelande vid felaktigt angivet postnummer.
- `data-cy="customer-city-error"` felmeddelande vid felaktigt angiven stad.
- `data-cy="customer-email-error"` felmeddelande vid felaktigt angiven emailadress.
- `data-cy="customer-phone-error"` felmeddelande vid felaktigt angivet telefonnummer.


- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.
*/
}
