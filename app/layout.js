import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "design4theplanet",
  description:
    "We value our planet and are dedicated to contributing to its well-being by upcycling waste materials and turning them into one of a kind gadgets, utensils and art objects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal"></div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

