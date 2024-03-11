import { Box, Button, Container, Grid, Typography } from "@mui/material";
import InputPayment from "../checkoutComponents/paymentLayout";

function CartLayout() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* Styleing för box 1 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
              marginTop: "20px",
            }}
          >
            {/* Styling för img box i box 1 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://images.desenio.com/zoom/15801_1.jpg?_gl=1*1lb5ytk*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNTYzNy4wLjAuMA.."
                alt="Tillfällig bild"
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 1 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 1</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium maxime consequatur corrupti rerum expedita sint non
                consectetur quae! Unde, blanditiis. Quasi amet id similique
                saepe deserunt eligendi, minus iusto architecto!
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* Styleing för box 2 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
            }}
          >
            {/* Styleing för bild box i box 2 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://images.desenio.com/zoom/can2562_4.jpg?_gl=1*1uadpyj*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNjE0NS4wLjAuMA.."
                alt="Tillfällig bild"
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 2 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 2</Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit id
                quisquam, error tempore eum mollitia veritatis eos, laudantium
                quis voluptate repudiandae similique ipsam porro expedita odio
                placeat, saepe est culpa.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* Styleing för box 3 */}
          <Box
            sx={{
              display: "flex",
              border: "1px solid black",
              marginBottom: "20px",
            }}
          >
            {/* styleing för bild box i box 3 */}
            <Box sx={{ width: "20%" }}>
              <img
                src="https://images.desenio.com/zoom/15550_1.jpg?_gl=1*i42h3e*_ga*MTQ0NzY2NTM1MC4xNzA5NjMwNzY3*_ga_GH3FS7X5TH*MTcwOTkwNTYzNy40LjEuMTcwOTkwNzc5Ny4wLjAuMA.."
                style={{ width: "100%" }}
              />
            </Box>
            {/* styleing och innehåll i box 3 */}
            <Box sx={{ padding: "20px", width: "70%" }} data-cy="cart-item">
              <Typography variant="h6">Tavla 3</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus inventore cum eaque tenetur ullam non natus magni
                dolor, harum aliquid. Reprehenderit beatae perferendis at itaque
                accusamus maxime eligendi nesciunt corporis.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* -------Checkout knappen med styleing--------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            justifyContent: "center",
            width: "70%",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
        >
          Checkout
        </Button>
      </Box>
      <InputPayment />
    </Container>
  );
}

export default CartLayout;
