import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import Car from "./assets/car.jpg";
import MiddleImage from "./assets/palms.jpg";
import CardsHeader from "./ui/CardsForHomepage/CardsHeader";

export default async function Home() {
  const products = await db.product.findMany({
    // where: { isFeatured: true },
    orderBy: { id: "desc" },
  });

  const cardStyle = { width: 280, height: 310 }; // Fasta dimensioner för kort
  const mediaStyle = { height: 280 }; // Fasta dimensioner för bilder
  return (
    <main>
      <Box></Box>
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Image
          src={MiddleImage}
          layout="fill"
          alt="Stor Bild"
          objectFit="cover"
        />
      </Box>
      {/* Kort för syns skull */}
      <Grid container spacing={2} justifyContent="center">
        <Grid sx={{ marginBottom: "10px" }} item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1487977352961-6c1d15aa87c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1606459881381-2240e5f87bd4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1557434440-d4d48e6578b5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1613519144618-270608d80459?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "82%",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Image src={Car} layout="fill" alt="Stor Bild" objectFit="cover" />
      </Box>
      {/* Kort som leder till kategorierna */}
      <CardsHeader />
    </main>
  );
}
