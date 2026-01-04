import type { Metadata } from "next";
import { Tangerine, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/site/SiteChrome";

const fontHeading = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const fontUi = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willow Lodge | Murrells Inlet, SC",
  description:
    "Willow Lodge in Murrells Inlet, South Carolina — sophisticated coastal accommodations on the Hammock Coast.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontUi.variable}`}
    >
      <body className="wl-body antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

