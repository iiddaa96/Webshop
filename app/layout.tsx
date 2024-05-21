import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ProductProvider } from "./context/AdminContext";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import { LayoutProps } from "./types";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

/**
 * Rotlayoutkomponenten som ger grundläggande layout för hela applikationen.
 * Innehåller tillhandahållande av globala kontexter och delar av användargränssnittet som sidhuvud och sidfot.
 * @param {LayoutProps} props Egenskaper för rotlayouten.
 * @returns {JSX.Element} JSX för rotlayouten.
 */

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppRouterCacheProvider>
            <PaymentProvider>
              <ProductProvider>
                <Header />
                {children}
                <Footer />
              </ProductProvider>
            </PaymentProvider>
          </AppRouterCacheProvider>
        </CartProvider>
      </body>
    </html>
  );
}
