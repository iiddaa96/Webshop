import { Button, CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function ActionAreaCard() {
  const cardStyle = { width: 280, height: 310 }; // Fasta dimensioner för kort
  const mediaStyle = { height: 280 }; // Fasta dimensioner för bilder

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid sx={{ marginBottom: "10px" }} item>
        <Card sx={{ ...cardStyle, margin: 1 }}>
          <CardActionArea>
            <Link href="/categories/nyheter">
              <CardMedia
                sx={mediaStyle}
                component="img"
                image="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
          <Button component={Link} href="/categories/nyheter" color="inherit">
            Nyheter
          </Button>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ ...cardStyle, margin: 1 }}>
          <CardActionArea>
            <Link href="/categories/rea">
              <CardMedia
                sx={mediaStyle}
                component="img"
                image="https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
          <Button component={Link} href="/categories/rea" color="inherit">
            Rea
          </Button>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ ...cardStyle, margin: 1 }}>
          <CardActionArea>
            <Link href="/categories/badleksaker">
              <CardMedia
                sx={mediaStyle}
                component="img"
                image="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
          <Button
            component={Link}
            href="/categories/badleksaker"
            color="inherit"
          >
            Badleksaker
          </Button>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ ...cardStyle, margin: 1 }}>
          <CardActionArea>
            <Link href="/categories/handdukar">
              <CardMedia
                sx={mediaStyle}
                component="img"
                image="https://plus.unsplash.com/premium_photo-1692439058306-c172c696d299?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
          <Button component={Link} href="/categories/handdukar" color="inherit">
            Handdukar
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
