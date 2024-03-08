import { Box, TextField } from "@mui/material";

export default function InputPayment() {
  return (
    // Styling för formuläret så att det blir centrerat.
    <div data-cy="customer-form">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Här börjar input fälten, tillsvidare */}
        <div>
          <TextField
            data-cy="customer-name"
            error
            id="outlined-error"
            label="Error"
            defaultValue="Name"
          />
          <TextField
            data-cy="customer-address"
            error
            id="filled-error"
            label="Error"
            defaultValue="Adress"
            variant="filled"
          />
          <TextField
            data-cy="customer-zipcode"
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Zip"
            helperText="Incorrect entry."
          />
          <TextField
            data-cy="customer-city"
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="City"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>

        <div>
          <TextField
            data-cy="customer-email"
            error
            id="standard-error"
            label="Error"
            defaultValue="Mail"
            variant="standard"
          />
          <TextField
            data-cy="customer-phone"
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Mobil"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}
