import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default async function CardsForHomepage() {
  const products = await db.product.findMany({
    // where: { isFeatured: true },
    orderBy: { id: "desc" },
  });

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 1
              </Typography>
              <Typography color="textSecondary">
                Temporary content for Card 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 2
              </Typography>
              <Typography color="textSecondary">
                Temporary content for Card 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 3
              </Typography>
              <Typography color="textSecondary">
                Temporary content for Card 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card 4
              </Typography>
              <Typography color="textSecondary">
                Temporary content for Card 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
