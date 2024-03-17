import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function InputPayment() {
  // State to track form values
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
  });

  // State to track form validation status
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to update form data
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to validate form
  const validateForm = () => {
    // Perform validation logic here
    const isValid =
      formData.name.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.zip.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "";
    setIsFormValid(isValid);
    return isValid;
  };

  // Function to handle click on the "Continue" button
  const handleContinueClick = () => {
    // Validate the form
    const isValid = validateForm();
    // If form is valid, navigate to confirmation page
    if (isValid) {
      window.location.href = "/confirmation"; // Replace this with your actual confirmation page URL
    }
  };

  return (
    <Box
      data-cy="customer-form"
      sx={{
        border: "1px solid #ccc",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        <LocalShippingIcon sx={{ marginRight: "8px" }} />
        Shipping Address
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={formData.name.trim() === ""}
            id="outlined-error"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            error={formData.address.trim() === ""}
            id="filled-error"
            label="Address"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            error={formData.zip.trim() === ""}
            id="outlined-error-helper-text"
            label="Zip"
            helperText={formData.zip.trim() === "" ? "Incorrect entry." : ""}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            error={formData.city.trim() === ""}
            id="filled-error-helper-text"
            label="City"
            helperText={formData.city.trim() === "" ? "Incorrect entry." : ""}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={formData.email.trim() === ""}
            id="standard-error"
            label="Email"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={formData.phone.trim() === ""}
            id="standard-error-helper-text"
            label="Mobile"
            helperText={formData.phone.trim() === "" ? "Incorrect entry." : ""}
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          sx={{
            width: "30%",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "30%",
            backgroundColor: isFormValid ? "black" : "grey",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
          onClick={handleContinueClick}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
