import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ['latin', 'latin-ext'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Pega Letras",
  description: "Desenvolvido por Mateus Capitanio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
