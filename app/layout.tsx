import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { cn } from "../utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freja AI",
  description:
    "Freja.ai er en risikofri AI-drevet salgstræning der efterligner køber persona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen bg-black"
        )}
      >
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
