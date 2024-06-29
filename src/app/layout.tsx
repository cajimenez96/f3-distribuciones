import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F3 Distribuciones SAS",
  description: "Empresa líder en la venta y distribución de mercadería en Tucumán, Argentina. Ofrecemos productos al por mayor y menor, asegurando calidad y precios competitivos para satisfacer todas tus necesidades.",
  keywords: [
    "venta de mercadería",
    "distribución de productos",
    "venta al por mayor Tucumán",
    "venta al por menor Tucumán",
    "mercadería Tucumán",
    "productos alimenticios Tucumán",
    "distribución Tucumán",
    "empresa de distribución Tucumán",
    "precios competitivos",
    "calidad en productos",
    "distribución en Argentina",
    "productos de calidad",
    "alimentos mayoristas",
    "alimentos minoristas"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
