import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ego-agency-challenge-ep.vercel.app"),
  title: {
    default: "EGO · Challenge Frontend",
    template: "EGO · %s",
  },
  description:
    "Explorá todos los modelos: autos, SUVs, pickups y comerciales. Compará precios, año y características en un catálogo moderno.",
  keywords: [
    "autos",
    "modelos de autos",
    "SUV",
    "pickups",
    "vehículos",
    "catálogo de autos",
  ],
  authors: [{ name: "EGO Agency" }],
  creator: "EGO Agency",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ego-agency-challenge-ep.vercel.app",
    siteName: "EGO",
    title: "Catálogo de modelos de auto",
    description:
      "Descubrí todos los modelos. Autos, SUVs y pickups con información detallada, precios y diseño moderno.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
