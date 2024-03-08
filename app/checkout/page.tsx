import { Box, Button, Container } from "@mui/material";

/* 
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

function Checkout() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          border: "1px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        Innehåll i ruta 1
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        Innehåll i ruta 2
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        Innehåll i ruta 3
      </Box>
      {/* Checkout knappen med styleing */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "100%", // Gör knappen 100% i bredd
          backgroundColor: "black", // Bakgrundsfärg svart
          color: "white", // Textfärg vit
          "&:hover": {
            backgroundColor: "darkgrey", // Bakgrundsfärg ändras vid hover
          },
        }}
      >
        Checkout
      </Button>
    </Container>
  );
}

export default Checkout;
