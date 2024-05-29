import { db } from "@/prisma/db";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Address, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { auth } from "../auth";
import { ItemsProps } from "../checkout/components/TotalPrice";
import { BackButton } from "../ui/BackButton";
import { ConfirmationClient } from "./components/ConfirmationClient";

const QuantityButton = dynamic(() => import("../ui/QuantityButton"), {
  ssr: false,
});

interface CartProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  inventory: number;
  quantity: number;
}

export type Props = {
  initialCart: CartProducts[];
  user: User;
  address: Address;
};

async function fetchUserData(email: string) {
  if (!email) {
    throw new Error("User email is missing");
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const address = await db.address.findFirst({
    where: { Order: { some: { userId: user.id } } },
  });

  if (!address) {
    throw new Error("Address not found");
  }

  const order = await db.order.findFirst({
    where: { userId: user.id },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orderDetails: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  const initialCart: CartProducts[] = order.orderDetails.map((item) => ({
    id: item.product.id,
    title: item.product.title,
    image: item.product.image,
    price: parseFloat(item.product.price.toString()),
    description: item.product.description,
    quantity: item.quantity,
    inventory: item.product.inventory,
  }));

  return { user, address, initialCart };
}

export default async function Confirmation({ cart }: ItemsProps) {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return <p>Du måste vara inloggad för att se sidan</p>;
  }

  const loggedInUser = session.user.email as string;
  console.log(`Logged in user's email: ${loggedInUser}`); // Felsökningsrad

  try {
    const { user, address, initialCart } = await fetchUserData(loggedInUser);

    return (
      <Container component="main">
        <ConfirmationClient initialCart={initialCart} />
        <BackButton />
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
            Tack för ditt köp! Hoppas du blir riktigt nöjd över dina nya
            produkter.
          </Typography>
          <Typography>
            Här kommer ditt digitala kvitto från Sand & Sjö. Mer spännande
            produkter finns på vår hemsida Sand & Sjö.se.
          </Typography>
          <Typography>
            Hoppas vi hörs snart igen! Hälsningar från oss på Sand & Sjö.
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
                <Typography>Summa: {item.price} kr</Typography>
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
          <Typography>Namn: {user.name}</Typography>
          <Typography>Address: {address.street}</Typography>
          <Typography>Postnummer: {address.zip}</Typography>
          <Typography>Stad: {address.city}</Typography>
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
