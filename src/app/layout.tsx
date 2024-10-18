import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sansSerif = localFont({
  src: './fonts/circularStd.ttf',
  variable: '--font-sans-serif',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sansSerif.className} antialiased bg-secondary`}>{children}</body>
    </html>
  );
}
