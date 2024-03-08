import { Box, Button, TextField, Typography } from "@mui/material";

export default function InputPayment() {
  return (
    <Box
      data-cy="customer-form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Rubrik för fraktadress */}
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      {/* Inputfälten */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "400px",
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          data-cy="customer-name"
          error
          id="outlined-error"
          label="Name"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          data-cy="customer-address"
          error
          id="filled-error"
          label="Address"
          defaultValue=""
          variant="filled"
        />
        <TextField
          data-cy="customer-zipcode"
          error
          id="outlined-error-helper-text"
          label="Zip"
          defaultValue=""
          helperText="Incorrect entry."
          variant="outlined"
        />
        <TextField
          data-cy="customer-city"
          error
          id="filled-error-helper-text"
          label="City"
          defaultValue=""
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          data-cy="customer-email"
          error
          id="standard-error"
          label="Email"
          defaultValue=""
          variant="standard"
        />
        <TextField
          data-cy="customer-phone"
          error
          id="standard-error-helper-text"
          label="Mobile"
          defaultValue=""
          helperText="Incorrect entry."
          variant="standard"
        />
      </Box>

      {/* Knapp för att fortsätta */}
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Continue
      </Button>
    </Box>
  );
}
