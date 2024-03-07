import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProps } from "./types";
import Footer from "./ui/footer";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <p>© 2024</p>
        <Footer />
      </body>
    </html>
  );
}
