import { auth } from "@/app/auth";
import { db } from "@/prisma/db";
import { Box, List, ListItem } from "@mui/material";
import ToggleIsSentButton from "./ToggleIsSentButton";

export default async function OrderList() {
  const session = await auth();
  const orders = await db.order.findMany({});

  return (
    <>
      <List sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
        {orders.map((order) => (
          <ul key={order.id}>
            <ListItem>User ID: {order.userId}</ListItem>
            <ListItem>Date: {order.createdAt.toString()}</ListItem>
            <ListItem>Total price: {order.total}kr</ListItem>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItem sx={{ borderBottom: "1px solid black" }}>
                Shipping status: {order.isSent.toString()}
              </ListItem>
              <ToggleIsSentButton orderId={order.id} />
            </Box>
          </ul>
        ))}
      </List>
    </>
  );
}
