import { db } from "@/prisma/db";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Address, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { auth } from "../auth";
import { ItemsProps } from "../checkout/components/TotalPrice";
import { ConfirmationClient } from "./components/ConfirmationClient";

const QuantityButton = dynamic(() => import("../ui/QuantityButton"), {
  ssr: false,
});

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
};

export type Props = {
  initialCart: CartItem[];
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

  const initialCart: CartItem[] = order.orderDetails.map((item) => ({
    id: item.product.id,
    title: item.product.title,
    image: item.product.image,
    price: parseFloat(item.product.price.toString()),
    description: item.product.description,
    quantity: item.quantity,
  }));

  return { user, address, initialCart };
}

export default async function Confirmation({ cart }: ItemsProps) {
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
