import { Box, Button, Container, Grid, Typography } from "@mui/material";
import InputPayment from "../checkoutComponents/paymentLayout";

function Checkout() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* Styleing för box 1 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "20px",
            }}
          >
            {/* Styling för img box i box 1 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929"
                alt="Tillfällig bild"
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 1 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 1</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium maxime consequatur corrupti rerum expedita sint non
                consectetur quae! Unde, blanditiis. Quasi amet id similique
                saepe deserunt eligendi, minus iusto architecto!
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* Styleing för box 2 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
            }}
          >
            {/* Styleing för bild box i box 2 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929"
                alt="Tillfällig bild"
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 2 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 2</Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit id
                quisquam, error tempore eum mollitia veritatis eos, laudantium
                quis voluptate repudiandae similique ipsam porro expedita odio
                placeat, saepe est culpa.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* Styleing för box 3 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
              marginBottom: "20px",
            }}
          >
            {/* styleing för bild box i box 3 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/224px-Picture_icon_BLACK.svg.png?20180309172929"
                alt="Tillfällig bild"
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 3 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 3</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus inventore cum eaque tenetur ullam non natus magni
                dolor, harum aliquid. Reprehenderit beatae perferendis at itaque
                accusamus maxime eligendi nesciunt corporis.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* -------Checkout knappen med styleing--------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            justifyContent: "center",
            width: "70%",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
        >
          Checkout
        </Button>
      </Box>
      <InputPayment />
    </Container>
  );
}

export default Checkout;

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
