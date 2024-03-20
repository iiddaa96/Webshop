import { zodResolver } from "@hookform/resolvers/zod";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  Box,
  Button,
  FormHelperTextProps,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCustomer } from "../context/PaymentContext";

// Skapar schema för inputfälten
const stringSchema = z.string();
const numberSchema = z.number();

// Error meddelande för inputfälten om man skriver fel
const customerSchema = z.object({
  name: z.string(),

  lastname: z.string(),

  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" }),

  zip: z.coerce
    .number()
    .min(5, { message: "Zipcode must be at least 5 digits long" }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" }),

  email: z.string().email({ message: "Invalid email format" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" }),
});

export type CustomerInfo = z.infer<typeof customerSchema>;

// Hantering av inputfält och formulärdata
export default function InputPayment() {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: "",
    lastname: "",
    address: "",
    zip: "" as any,
    city: "",
    email: "",
    phone: "",
  });

  const router = useRouter();
  const { setCustomer } = useCustomer();

  const form = useForm<CustomerInfo>({ resolver: zodResolver(customerSchema) });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(true);

  // Hantera ändringar i inmatningsfälten
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (customer: CustomerInfo) => {
    setCustomer(formData);
    setIsFormValid(true);
    console.log("Form submitted successfully!");
    router.push("/confirmation");
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
      {/* Rubrik och icon för inputfälten */}
      <Typography variant="h6" gutterBottom>
        <LocalShippingIcon sx={{ marginRight: "8px" }} />
        Shipping Address
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-name-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-name" }}
              id="outlined-error"
              label="Name"
              {...form.register("name")}
              error={Boolean(form.formState.errors.name)}
              helperText={form.formState.errors.name?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-lastname-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-lastname" }}
              error={!!formErrors["lastname"]}
              id="outlined-error"
              name="lastname"
              label="Lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              helperText={formErrors["lastname"] || ""}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              inputProps={{ "data-cy": "customer-address" }}
              FormHelperTextProps={
                { "data-cy": "customer-address-error" } as FormHelperTextProps
              }
              error={!!formErrors["address"]}
              id="filled-error"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
              helperText={formErrors["address"] || ""}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-zipcode-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-zipcode" }}
              error={!!formErrors["zipcode"]}
              id="outlined-error-helper-text"
              name="zip"
              label="Zip"
              value={formData.zip}
              onChange={handleInputChange}
              helperText={formErrors["zipcode"] || ""}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-city-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-city" }}
              error={!!formErrors["city"]}
              id="filled-error-helper-text"
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
              helperText={formErrors["city"] || ""}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-email-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-email" }}
              error={!!formErrors["email"]}
              id="standard-error"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              helperText={formErrors["email"] || ""}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-phone-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-phone" }}
              error={!!formErrors["phone"]}
              id="standard-error-helper-text"
              name="phone"
              label="Mobile"
              value={formData.phone}
              onChange={handleInputChange}
              helperText={formErrors["phone"] || ""}
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Knapparna cancel och continue */}
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
            // component={Link}
            // href="/confirmation"
            // onClick={() => router.push("/confirmation")}
            type="submit"
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
      </form>
    </Box>
  );
}
