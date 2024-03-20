import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ProductProvider } from "./context/AdminContext";
import { PaymentProvider } from "./context/PaymentContext";
import { CartProvider } from "./context/cartContext";
import { LayoutProps } from "./types";
import Footer from "./ui/footer";
import ResponsiveAppBar from "./ui/header";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppRouterCacheProvider>
            <PaymentProvider>
            <ProductProvider>
              <ResponsiveAppBar />
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
