// "use client";

// import { Box, Grid, Typography } from "@mui/material";
// import { Product } from "@prisma/client";

// type Props = {
//   product: Product;
// };

// // Importerar product från prisma och skapar en komponent som renderar ut en produkt
// export default function SingleProduct({ product }: Props) {
//   return (
//     <main>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
//             <div key={product.id}>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 style={{ maxWidth: "100%" }}
//               />
//             </div>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
//             <Typography variant="h4" gutterBottom data-cy="product-title">
//               {product.title}
//             </Typography>
//             <Typography
//               variant="body2"
//               gutterBottom
//               data-cy="product-description"
//             >
//               {product.description}
//             </Typography>
//             <Typography variant="body2" gutterBottom data-cy="product-price">
//               {product.price} kr
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </main>
//   );
// }

"use client";

import { Box, Grid, Snackbar, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false); // Tillstånd för att visa snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Tillstånd för meddelandet i snackbar

  const handleAddToCart = () => {
    setSnackbarMessage(`${product.title} har lagts till i kundvagnen`); // Ange meddelandet för snackbar
    setOpenSnackbar(true); // Visa snackbar
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Stäng snackbar
  };

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.price} kr
            </Typography>
            <AddToCartButton
              product={product}
              handleAddToCart={handleAddToCart}
              title={""}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Snackbar för att visa meddelande när en produkt läggs till i kundvagnen */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </main>
  );
}
