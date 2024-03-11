import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function InputPayment() {
  return (
    <Box
      data-cy="customer-form"
      sx={{
        border: "1px solid #ccc",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        marginBottom: "20px",
      }}
    >
      {/* Rubrik för fraktadress */}
      <Typography variant="h6" gutterBottom>
        <LocalShippingIcon sx={{ marginRight: "8px" }} />
        Shipping Address
      </Typography>

      {/* Grid för att ordna inputfälten i två kolumner */}
      <Grid container spacing={2}>
        {/* Inputfält för namn */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-name"
            error
            id="outlined-error"
            label="Name"
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        {/* Inputfält för adress */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-address"
            error
            id="filled-error"
            label="Address"
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        {/* Inputfält för postnummer */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-zipcode"
            error
            id="outlined-error-helper-text"
            label="Zip"
            defaultValue=""
            helperText="Incorrect entry."
            variant="outlined"
            fullWidth
          />
        </Grid>
        {/* Inputfält för stad */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-city"
            error
            id="filled-error-helper-text"
            label="City"
            defaultValue=""
            helperText="Incorrect entry."
            variant="filled"
            fullWidth
          />
        </Grid>
        {/* Inputfält för e-post */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-email"
            error
            id="standard-error"
            label="Email"
            defaultValue=""
            variant="standard"
            fullWidth
          />
        </Grid>
        {/* Inputfält för mobilnummer */}
        <Grid item xs={6}>
          <TextField
            data-cy="customer-phone"
            error
            id="standard-error-helper-text"
            label="Mobile"
            defaultValue=""
            helperText="Incorrect entry."
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Knapp för att fortsätta till bekräftelse sidan */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "right" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "30%",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
