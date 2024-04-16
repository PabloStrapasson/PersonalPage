import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer/footer";
import Menu from "@/components/Menu/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Strapasson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
