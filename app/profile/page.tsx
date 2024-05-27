import { db } from "@/prisma/db";
import { Box, List, ListItem, Typography } from "@mui/material";
import { auth } from "../auth";
import RenderUser from "../ui/RenderUser";

export default async function ProfilePage() {
  const session = await auth();

  const orders = await db.order.findMany({
    where: {
      userId: session?.user?.id,
    },
    include: {
      orderDetails: {
        include: {
          product: true,
        },
      },
    },
  });

  if (orders.length === 0) {
    return <p>Ingen order finns för denna användare</p>;
  }

  return (
    <div>
      <RenderUser />
      <List>
        {orders.map((order) => (
          <Box key={order.id}>
            <ListItem>Total Price: {order.total}kr</ListItem>
            <ListItem>
              Date: {new Date(order.createdAt).toLocaleString()}
            </ListItem>
            <ListItem>
              {order.orderDetails.map((item) => (
                <Typography key={item.orderId}>
                  {item.product.title} - {item.quantity} x {item.product.price}
                  kr
                </Typography>
              ))}
            </ListItem>
            <Box>
              <Typography>Status: {order.isSent.toString()}</Typography>
            </Box>
          </Box>
        ))}
      </List>
    </div>
  );
}
