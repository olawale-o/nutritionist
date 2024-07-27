import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutritionist",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
