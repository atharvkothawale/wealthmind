import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WealthMind Finserve | Mutual Fund Distributor",
  description: "NISM Certified Mutual Fund Distributor. Start your SIP journey with expert guidance. Serving investors across Maharashtra and India.",
  keywords: "mutual fund distributor, SIP, investment advisor, NISM certified, Maharashtra, ARN holder",
  openGraph: {
    title: "WealthMind Finserve | Mutual Fund Distributor",
    description: "Start your SIP journey with expert guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ overflowX: 'hidden' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ overflowX: 'hidden' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}