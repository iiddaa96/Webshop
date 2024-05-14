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
import console from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { saveUser } from "../api/users";
import { useCustomer } from "../context/PaymentContext";

// Skapar schema för inputfälten
const stringSchema = z.string();
const numberSchema = z.number();

// Error meddelande för inputfälten om man skriver fel
const customerSchema = z.object({
  fullname: z.string().min(1, { message: "Please write your name." }),

  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" }),

  zip: z.coerce
    .number()
    .min(10000, { message: "Please enter a valid zip code" })
    .max(99999, { message: "Please enter a valid zip code" }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" }),

  email: z.string().email({ message: "Invalid email format" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" }),
});

export type CustomerInfo = z.infer<typeof customerSchema>;

/**
 * Hantering av inputfält och formulärdata i betalningsprocessen.
 *
 * @returns {JSX.Element} Inputfält och hantering av formulärdata.
 */
export default function InputPayment() {
  const [formData, setFormData] = useState<CustomerInfo>({
    fullname: "",
    address: "",
    zip: "" as any,
    city: "",
    email: "",
    phone: "",
  });

  const router = useRouter();
  const { setCustomer } = useCustomer();

  const form = useForm<CustomerInfo>({ resolver: zodResolver(customerSchema) });

  /**
   * Funktion som hanterar formulärinskick.
   *
   * @param {CustomerInfo} customer - Kundinformationen från formuläret.
   */
  const handleSubmit = (customer: CustomerInfo) => {
    console.log(customer);
    setCustomer(customer);
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

      <form
        data-cy="customer-form"
        onSubmit={async (event) => {
          event.preventDefault();
          const user = {
            id: 1,
            nickname: "abc",
            firstName: "123",
            lastName: "123",
            email: "123",
            products: [],
          };
          try {
            await saveUser(user);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Textfält för namn och efternamn */}
            <TextField
              inputProps={{ "data-cy": "customer-name" }}
              FormHelperTextProps={
                { "data-cy": "customer-name-error" } as FormHelperTextProps
              }
              id="outlined-error"
              label="FullName"
              {...form.register("fullname")}
              error={Boolean(form.formState.errors.fullname)}
              helperText={form.formState.errors.fullname?.message}
              variant="outlined"
              fullWidth
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för adress */}
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-address-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-address" }}
              id="filled-error"
              label="Address"
              {...form.register("address")}
              error={Boolean(form.formState.errors.address)}
              helperText={form.formState.errors.address?.message}
              variant="filled"
              fullWidth
              autoComplete="street-address"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för zip */}
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-zipcode-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-zipcode" }}
              id="outlined-error-helper-text"
              label="Zip"
              {...form.register("zip")}
              error={Boolean(form.formState.errors.zip)}
              helperText={form.formState.errors.zip?.message}
              variant="outlined"
              fullWidth
              autoComplete="postal-code"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för stad */}
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-city-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-city" }}
              id="filled-error-helper-text"
              label="City"
              {...form.register("city")}
              error={Boolean(form.formState.errors.city)}
              helperText={form.formState.errors.city?.message}
              variant="filled"
              fullWidth
              autoComplete="address-level2"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för email */}
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-email-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-email" }}
              id="standard-error"
              label="Email"
              {...form.register("email")}
              error={Boolean(form.formState.errors.email)}
              helperText={form.formState.errors.email?.message}
              variant="standard"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för mobil */}
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-phone-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-phone" }}
              id="standard-error-helper-text"
              label="Mobile"
              {...form.register("phone")}
              error={Boolean(form.formState.errors.phone)}
              helperText={form.formState.errors.phone?.message}
              variant="standard"
              fullWidth
              autoComplete="tel"
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
