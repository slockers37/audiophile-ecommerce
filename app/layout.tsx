import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Best Audio Accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
