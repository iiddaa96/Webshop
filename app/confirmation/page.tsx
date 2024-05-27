import { db } from "@/prisma/db";
import { Box, Container, Grid, Typography } from "@mui/material";

import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useCustomer } from "../context/PaymentContext";
import QuantityButton from "../ui/QuantityButton";

/**
 * Komponent som representerar bekräftelsesidan för en genomförd beställning.
 * @returns {JSX.Element} JSX-element som representerar bekräftelsesidan för en genomförd beställning.
 */
function Confirmation() {
  // Hämtar kundvagnens innehåll, bekräftar och tömmer kundvagnen samt hämtar kundinformation från kontexten
  const { cart } = useCart();
  const { clearCart, setConfirmedCart, confirmedCart } = useCart();
  // (auth) hämtar order och kolla om du äger ordern, lägg till här
  const { customer } = useCustomer();

  // Hanterar bekräftelse av kundvagn och tömning efter bekräftelse
  useEffect(() => {
    if (cart.length > 0) {
      setConfirmedCart(cart);
      clearCart();
    }
  }, [cart, clearCart, setConfirmedCart]);

  // Beräknar den totala kostnaden för bekräftade varor
  const totalPrice = confirmedCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: "20px",
          padding: "20px",
          minHeight: "300px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
          Orderbekräftelse
        </Typography>
        <Typography>
          Tack för ditt köp! Hoppas du blir riktigt nöjd över dina nya varor.
        </Typography>
        <Typography>
          Här kommer ditt digitala kvitto från Sand & Sjö. Mer inspiration finns
          på vår hemsida Sand & Sjö.se
        </Typography>
        <Typography>
          Hoppas vi hörs snart igen! Hälsningar från oss på Sand & Sjö.
        </Typography>

        <Grid container spacing={2}>
          {confirmedCart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Typography variant="h6">{item.title}</Typography>
              <QuantityButton
                productId={item.id.toString()}
                initialQuantity={item.quantity}
                showTotalPrice={false}
                showControls={false}
              />
              <Typography>Price: {item.price} kr</Typography>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Totalt: {totalPrice} kr
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography>Name: {customer.fullname}</Typography>
        <Typography>Address: {customer.street}</Typography>
        <Typography>Zip: {customer.zip}</Typography>
        <Typography>City: {customer.city}</Typography>
        <Typography>Email: {customer.email}</Typography>
        <Typography>Phone: {customer.phone}</Typography>
      </Box>
    </Container>
  );
}

export default async function Confirmation() {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return <p>You must be logged in to view this page</p>;
  }

  const loggedInUser = session.user.email as string;
  console.log(`Logged in user's email: ${loggedInUser}`); // Felsökningsrad

  try {
    const { user, address, initialCart } = await fetchUserData(loggedInUser);

    return (
      <Container component="main">
        <ConfirmationClient initialCart={initialCart} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginTop: "20px",
            padding: "20px",
            minHeight: "300px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center" }}
          >
            Orderbekräftelse
          </Typography>
          <Typography>
            Tack för ditt köp! Hoppas du blir riktigt nöjd över dina nya tavlor.
          </Typography>
          <Typography>
            Här kommer ditt digitala kvitto från Wall of Art. Mer inspiration
            finns på vår hemsida Wall of Art.se där du kan se olika tavlor för
            olika stylingar.
          </Typography>
          <Typography>
            Hoppas vi hörs snart igen! Hälsningar från oss på Wall of Art.
          </Typography>

          <Grid container spacing={2}>
            {initialCart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Typography variant="h6">{item.title}</Typography>
                <QuantityButton
                  productId={item.id.toString()}
                  initialQuantity={item.quantity}
                  showTotalPrice={false}
                  showControls={false}
                />
                <Typography>Price: {item.price} kr</Typography>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Totalt:{" "}
            {initialCart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}{" "}
            kr
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            padding: "20px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography>Name: {user.name}</Typography>
          <Typography>Address: {address.street}</Typography>
          <Typography>Zip: {address.zip}</Typography>
          <Typography>City: {address.city}</Typography>
          <Typography>Email: {user.email}</Typography>
        </Box>
      </Container>
    );
  } catch (error) {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return <p>An error occurred: {errorMessage}</p>;
  }
}
