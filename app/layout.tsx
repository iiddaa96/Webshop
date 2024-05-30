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
              <main
                style={{
                  paddingTop: "140px", // Lägger till en padding för att undvika att headern täcker page
                }}
              >
                {children}
              </main>
              <Footer />
            </PaymentProvider>
          </AppRouterCacheProvider>
        </CartProvider>
      </body>
    </html>
  );
}
