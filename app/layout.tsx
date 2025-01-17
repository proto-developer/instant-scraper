import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'], // Add the subsets you need, here we use 'latin'
  variable: "--font-inter", // Continue using the variable if you need it
});

export const metadata: Metadata = {
  title: "Instant Scraper",
  description: "Instant Scraper for scraping websites!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
