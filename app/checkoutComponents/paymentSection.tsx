import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function InputPayment() {
  // State som kollar alla values
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
  });

  // funktion för att uppdatera form data
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 
  const isFormValid = () => {
    const { name, address, zip, city, email, phone } = formData;

    // kollar om valideringen är rätt
    return (
      name.trim() !== "" &&
      address.trim() !== "" &&
      zip.trim() !== "" &&
      city.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      isValidEmail(email) &&
      isValidPhone(phone)
    );
  };

  //funktion för att kolla om email är rätt
  const isValidEmail = (email: string) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //kolla mobil nummer
  const isValidPhone = (phone: string) => {
    // Regular expression to match phone number format (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Function to handle click on the "Continue" button
  const handleContinueClick = () => {
    // If form is valid, navigate to confirmation page
    if (isFormValid()) {
      window.location.href = "/confirmation"; 
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
            id="outlined-error-helper-text"
            label="Zip"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            id="filled-error-helper-text"
            label="City"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
            id="standard-error-helper-text"
            label="Mobile"
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

        {/* Conditional rendering for the "Continue" button */}
        {isFormValid() ? (
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
            onClick={handleContinueClick}
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "30%",
              backgroundColor: "grey",
              color: "white",
              pointerEvents: "none", // Disable button click
            }}
            disabled // Disable the button
          >
            Continue
          </Button>
        )}
      </Box>
    </Box>
  );
}
