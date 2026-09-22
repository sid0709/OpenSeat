import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Providers } from "@/components/Providers";
import { DocsChrome } from "@/components/DocsChrome";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astryx",
  description: "Accessible, themeable React components from Meta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={figtree.className}>
      <body>
        <Providers>
          <DocsChrome>{children}</DocsChrome>
        </Providers>
      </body>
    </html>
  );
}
