import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DocsChrome } from "@/components/DocsChrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenSeat Theme",
  description: "OpenSeat design system — Meta blue tokens and components, shared across the product.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <DocsChrome>{children}</DocsChrome>
      </body>
    </html>
  );
}
