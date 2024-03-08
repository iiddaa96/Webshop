import { Box, TextField } from "@mui/material";

export default function InputPayment() {
  return (
    // Styling för formuläret så att det blir centrerat.
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
          error
          id="outlined-error"
          label="Error"
          defaultValue="Name"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Lastname"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Adress"
          variant="filled"
        />
        <TextField
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
          error
          id="standard-error"
          label="Error"
          defaultValue="Mail"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Id number:"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}
