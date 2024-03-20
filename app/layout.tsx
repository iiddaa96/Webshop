import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ProductProvider } from "./context/AdminContext";
import { CartProvider } from "./context/CartContext";
import { LayoutProps } from "./types";
import Footer from "./ui/Footer";
import ResponsiveAppBar from "./ui/header";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppRouterCacheProvider>
            <ProductProvider>
              <ResponsiveAppBar />
              {children}
              <Footer />
            </ProductProvider>
          </AppRouterCacheProvider>
        </CartProvider>
      </body>
    </html>
  );
}
