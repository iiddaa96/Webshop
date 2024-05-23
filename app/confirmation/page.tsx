import { db } from "@/prisma/db";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Address, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { ConfirmationClient } from "./components/ConfirmationClient";

const QuantityButton = dynamic(() => import("../ui/QuantityButton"), {
  ssr: false,
});

export type CartItem = {
  id: string;
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

async function fetchUserData(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const address = await db.address.findFirst({
    where: { Order: { some: { userId } } },
  });

  if (!address) {
    throw new Error("Address not found");
  }

  const order = await db.order.findFirst({
    where: { userId },
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
    id: item.product.id.toString(),
    title: item.product.title,
    image: item.product.image,
    price: parseFloat(item.product.price.toString()),
    description: item.product.description,
    quantity: item.quantity,
  }));

  return { user, address, initialCart };
}

export default async function Confirmation() {
  const { user, address, initialCart } = await fetchUserData();
  /* const session = (await getServerSession(authOptions)) as CustomSession; */

  /* if (!session?.user?.id) {
    return <p>You must be logged in to view this page.</p>;
  }

  const userId = session.user.id;
  const { user, address, initialCart } = await fetchUserData(userId);
 */
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
        <Typography component="h1" variant="h5" style={{ textAlign: "center" }}>
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
                productId={item.id}
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
}
