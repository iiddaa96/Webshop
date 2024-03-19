/* eslint-disable @next/next/no-img-element */

/*
- `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
- `data-cy="product-id"` id på en produkt. ------------------
- `data-cy="product-title"` titeln på en produkt. --------------
- `data-cy="product-price"` priset på en produkt. -----------------
- `data-cy="product-description"` beskrivningen av en produkt. -----------------
- `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
- `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
*/

"use client";

import AddToCartButton from "@/app/ui/addToCartButton";
import { Box, Grid, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { Product, products } from "../../../data/index";

type Props = { params: { id: string } };

export default function SingleProduct(props: Props) {
  const product = products.find((product) => product.id === props.params.id);

  // Tillstånd för att visa snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // Tillstånd för meddelandet i snackbar
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToCart = (product: Product) => {
    setSnackbarMessage(`${product.title} har lagts till i kundvagnen`); // Ange meddelandet för snackbar
    setOpenSnackbar(true); // Visa snackbar
  };

  const handleCloseSnackbar = () => {
    // Funktion för att stänga snackbar
    setOpenSnackbar(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1 }}>
            <div key={product.id} data-cy="product-id">
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
            <Typography variant="h4" gutterBottom data-cy="product-title">
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              data-cy="product-description"
            >
              {product.description}
            </Typography>
            <Typography variant="body2" gutterBottom data-cy="product-price">
              {product.price} kr
            </Typography>
          </Box>
          <AddToCartButton
            product={product}
            handleAddToCart={handleAddToCart}
            title={""}
          />
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

// /* eslint-disable @next/next/no-img-element */

// /*
// - `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
// - `data-cy="product-id"` id på en produkt. ------------------
// - `data-cy="product-title"` titeln på en produkt. --------------
// - `data-cy="product-price"` priset på en produkt. -----------------
// - `data-cy="product-description"` beskrivningen av en produkt. -----------------
// - `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
// - `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
// */

// import { Box, Grid, Typography } from "@mui/material";
// import { products } from "../../../data/index";
// import QuantityButton from "../../ui/quantityButton";

// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

// export default function SingleProduct() {
//   const product = products.find((product) => product.id === product.id);

//   if (!product) {
//     // If product not found, you can render a loading state or a message
//     return <div>Product not found</div>;
//   }
//   return (
//     <main>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           {/* Render single product poster */}
//           <Box sx={{ flexGrow: 1 }}>
//             {/* Render only the first product */}
//             {products.length > 0 && (
//               <div key={products[0].id} data-cy="product-id">
//                 <img
//                   src={products[0].image}
//                   alt="testProduct"
//                   style={{ maxWidth: "100%" }}
//                 />
//               </div>
//             )}
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           {/* Render single product details */}
//           <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
//             {/* Render only the first product */}
//             {products.length > 0 && (
//               <div key={products[0].id}>
//                 {/* gutterbottom lägger till bottom margin*/}
//                 <Typography variant="h4" gutterBottom data-cy="product-title">
//                   {products[0].title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   gutterBottom
//                   data-cy="product-description"
//                 >
//                   {products[0].description}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   gutterBottom
//                   data-cy="product-price"
//                 >
//                   {products[0].price}
//                 </Typography>
//               </div>
//             )}
//           </Box>
//           {/* increment decrement button*/}
//           <QuantityButton productId={""} initialQuantity={0} />

//           {/* Add to cart button */}
//           <AddShoppingCart data-cy="product-buy-button" />
//         </Grid>
//       </Grid>
//     </main>
//   );
// }
