import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/** Page metadata for browser titles and search previews. */
export const metadata: Metadata = {
  title: "OpenSeat",
  description: "A permissioned help marketplace — sealed job rooms, invited bidders.",
};

/** Shared document shell and theme for every route. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
