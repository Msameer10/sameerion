import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sameerion",
  description: "An immersive portfolio journey through the worlds of Sameer Mohammad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          manrope.variable,
          cormorant.variable,
          "bg-[#05070c] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
