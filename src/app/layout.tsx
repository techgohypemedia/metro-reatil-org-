import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

import SmoothScroll from "../components/SmoothScroll";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import GlobalSpinner from "../components/GlobalSpinner";
import { Suspense } from "react";
import { Spinner } from "../components/ui/spinner";

export const metadata = {
  title: "Metro Retail Solutions | Premium Interior Design & Fit-out",
  description: "Metro Retail Solutions defines the standard for high-performance interiors and retail spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Suspense fallback={
          <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">
            <Spinner className="w-16 h-16 text-brand-gold" />
          </div>
        }>
          <GlobalSpinner />
        </Suspense>
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
