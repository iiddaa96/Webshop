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
        <p
          style={{
            fontWeight: "bold",
            marginLeft: "30px",
            fontSize: "20px",
            marginTop: "-10px",
            fontFamily: "monospace",
          }}
        >
          {" "}
          ORDERS:
        </p>
        {orders.map((order) => (
          <Box
            sx={{ fontSize: "15px", fontWeight: "bold", marginLeft: "15px" }}
            key={order.id}
          >
            {/* <ListItem>Total Price: {order.total}kr</ListItem> */}
            <ListItem sx={{ fontFamily: "monospace" }}>
              Date: {new Date(order.createdAt).toLocaleString()}
            </ListItem>
            <ListItem>
              {order.orderDetails.map((item) => (
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                  key={item.orderId}
                >
                  {item.product.title} - {item.quantity} x {item.product.price}
                  kr
                </Typography>
              ))}
            </ListItem>

            <Box>
              <Typography
                sx={{
                  marginLeft: "15px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                Status shipping: {order.isSent.toString()}
              </Typography>
            </Box>
            <ListItem
              style={{
                borderBottom: "1px solid black",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Total Price: {order.total}kr
            </ListItem>
          </Box>
        ))}
      </List>
    </div>
  );
}
