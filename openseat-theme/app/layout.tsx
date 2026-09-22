import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { DocsChrome } from "@/components/DocsChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astryx",
  description: "Accessible, themeable React components from Meta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <Providers>
          <DocsChrome>{children}</DocsChrome>
        </Providers>
      </body>
    </html>
  );
}
