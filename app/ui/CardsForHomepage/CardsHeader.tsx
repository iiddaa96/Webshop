import { Button, CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Card>
          <CardActionArea>
            <Link href="/categories/nyheter">
              <CardMedia
                sx={{ maxWidth: 250 }}
                component="img"
                image="https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <Card>
          <CardActionArea>
            <Link href="/categories/rea">
              <CardMedia
                sx={{ maxWidth: 250 }}
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
        <Card>
          <CardActionArea>
            <Link href="/categories/badleksaker">
              <CardMedia
                sx={{ maxWidth: 250 }}
                component="img"
                image="https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <Card>
          <CardActionArea>
            <Link href="/categories/handdukar">
              <CardMedia
                sx={{ maxWidth: 250 }}
                component="img"
                image="https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
