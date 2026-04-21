import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500","600","700", "800"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.rextonedigital.com"),

  title: "The Network",
  description:
    "We are building the world’s most intelligent learning and collaboration ecosystem",

  openGraph: {
    title: "The Network",
    description:
      "We are building the world’s most intelligent learning and collaboration ecosystem",
    url: "https://www.rextonedigital.com",
    siteName: "We Operate the Networks",
    images: [
      {
        url: "https://www.rextonedigital.com/images/og-meta.webp",
        width: 1200,
        height: 630,
        alt: "The Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Network",
    description:
      "We are building the world’s most intelligent learning and collaboration ecosystem",
    images: [
      "https://www.rextonedigital.com/images/og-image.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <body>
        <div className="remove-mobile-screen main-container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
        <main className="mobile-screen flex-1 w-[100%] items-center text-[20px] text-center justify-center">
          Mobile Screen
          Under Development
        </main>
      </body>
    </html>
  );
}