import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import { LayoutProps } from "./types";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppRouterCacheProvider>
            <PaymentProvider>
              <Header />
              {children}
              <Footer />
            </PaymentProvider>
          </AppRouterCacheProvider>
        </CartProvider>
      </body>
    </html>
  );
}
