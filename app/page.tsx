import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { products } from "../data/index";
import MiddleImage from "./assets/middleImage.png";

export default function Home() {
  return (
    <main>
      <Typography
        variant="h4"
        component="p"
        sx={{ margin: 4, textAlign: "center" }}
      >
        Det här är startsidan. Här ska alla produkterna visas.
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%", // Minskat från '56.25%' till en lägre procent för att minska höjden
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px", // Mellanrum mellan bilden och griden
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {" "}
        {/* Centrerar och lägger till padding för grid */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
              <Card sx={{ maxWidth: 345, m: "auto", boxShadow: 3 }}>
                {" "}
                {/* Centrerar korten och tillämpar maxbredd */}
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}

// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
// } from "@mui/material";
// import Image from "next/image";
// import { products } from "../data/index";
// import MiddleImage from "./assets/middleImage.png";

// /*
// - `data-cy="product"` produkt-korten/raden på startsidan & adminsidan.
// - `data-cy="product-id"` id på en produkt.
// - `data-cy="product-title"` titeln på en produkt.
// - `data-cy="product-price"` priset på en produkt.
// - `data-cy="product-buy-button"` lägg till i kundvagnen knappen.
// - `data-cy="added-to-cart-toast"` toast som visas när en produkt läggs till i kundvagnen.
//   */

// export default function Home() {
//   return (
//     <main>
//       <p>Det här är startsidan. Här ska alla produkterna visas.</p>
//       <Box
//         sx={{
//           width: "90%",
//           overflow: "hidden",
//           justifyContent: "center",
//           position: "relative",
//           paddingTop: "25%", // Kontrollerar höjden baserat på breddens procentandel
//           margin: "auto", // Centrerar containern horisontellt i dess förälder
//           display: "flex", // Använder flexbox för att hantera innehållets placering
//           alignItems: "center", // Centrerar innehållet vertikalt i containern
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Image
//             src={MiddleImage}
//             alt="Stor Bild"
//             layout="fill"
//             objectFit="cover"
//           />
//         </Box>
//       </Box>

//       <Grid container spacing={3}>
//         {" "}
//         {/* Skapar en grid-container med lite utrymme mellan korten */}
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={3} key={product.id}>
//             {" "}
//             {/* Varje kort tar upp 3/12 av bredden på medium och större skärmar, vilket innebär 4 kort per rad */}
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={product.image}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {product.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.price}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </main>
//   );
// }
