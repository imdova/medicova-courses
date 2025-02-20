"use client";
import { DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/NextAuthProvider";
import DynamicHeader from "@/components/Layout/Header/Header";
import DynamicLayout from "@/components/Layout/layout";
import Footer from "@/components/Layout/Footer/footer";
import StoreProvider from "@/store/StoreProvider";
import { useState } from "react";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmSerif",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false); // Sidebar state moved here

  return (
    <html lang="en">
      <title>Medicova</title>
      <body
        className={`${dmSerifDisplay.variable} ${poppins.variable} font-poppins`}>
        <StoreProvider>
          <NextAuthProvider>
            <DynamicHeader isActive={isActive} setIsActive={setIsActive} />
            <DynamicLayout isActive={isActive} setIsActive={setIsActive}>
              {children}
            </DynamicLayout>
            <Footer />
          </NextAuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
