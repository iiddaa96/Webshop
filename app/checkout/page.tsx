import { products } from "@/data";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
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

function CartSection() {
  return (
    <Container maxWidth="md">
      {/* Spaceing mellan boxarna och css styleing */}
      <Grid container spacing={1}>
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
            {/* Mappar ut bilderna/tavlorna, plus styleing på boxen dom är i */}
            <Box sx={{ width: "20%" }}>
              <img src={item.image} style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                width: "70%",
              }}
              data-cy="cart-item"
            >
              {/* Mappar ut titel av tavlorna */}
              <Typography variant="h6">{item.title}</Typography>
              {/* Mappar ut beskrivning av tavlorna, (kommer nog tas bort senare) */}
              <Typography variant="body1">{item.description}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                {/* Icon buttons för att lägga till eller ta bort antal valda posters */}
                <IconButton color="inherit" aria-label="remove from cart">
                  <RemoveIcon />
                </IconButton>
                <Button variant="contained" color="inherit">
                  <Typography component="span">1</Typography>
                </Button>
                <IconButton color="inherit" aria-label="add to cart">
                  <AddIcon />
                </IconButton>
                {/* DeleteIcon som en knapp längst till höger */}
                <IconButton
                  color="inherit"
                  aria-label="delete"
                  sx={{ marginLeft: "auto" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Totalpris grid */}
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">Total:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              1000:-
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <PaymentSection />
    </Container>
  );
}

export default CartSection;

// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";
// import RemoveIcon from "@mui/icons-material/Remove";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import PaymentSection from "../checkoutComponents/paymentSection";
// import { useCart } from "../context/cartContext";

// function CartSection() {
//   const { cart } = useCart();

//   return (
//     <Container maxWidth="md">
//       <Grid container spacing={1}>
//         {/* Kontrollera om varukorgen är tom */}
//         {cart.length === 0 ? (
//           <Typography variant="body1">Varukorgen är tom.</Typography>
//         ) : (
//           cart.map((item) => (
//             <Grid
//               item
//               xs={12}
//               key={item.id}
//               sx={{
//                 display: "flex",
//                 border: "1px solid black",
//                 marginTop: "35px",
//               }}
//             >
//               <Box sx={{ width: "20%" }}>
//                 <img src={item.image} style={{ width: "100%" }} />
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   padding: "20px",
//                   width: "70%",
//                 }}
//                 data-cy="cart-item"
//               >
//                 <Typography variant="h6">{item.title}</Typography>
//                 <Typography variant="body1">{item.description}</Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <IconButton color="inherit" aria-label="remove from cart">
//                     <RemoveIcon />
//                   </IconButton>
//                   <Button variant="contained" color="inherit">
//                     <Typography component="span">{item.quantity}</Typography>
//                   </Button>
//                   <IconButton color="inherit" aria-label="add to cart">
//                     <AddIcon />
//                   </IconButton>
//                   <IconButton
//                     color="inherit"
//                     aria-label="delete"
//                     sx={{ marginLeft: "auto" }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </Box>
//             </Grid>
//           ))
//         )}
//       </Grid>
//       <PaymentSection />
//     </Container>
//   );
// }

// export default CartSection;

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
