import type { Metadata } from "next";
import "./globals.css";

//👇 Import Open Sans font
import { Rethink_Sans } from 'next/font/google'

//👇 Configure our font object
const Rethink = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Operación Cochea",
  description: "JuventudAgro & WonderPma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={Rethink.className}>{children}</body>
    </html>
  );
}
