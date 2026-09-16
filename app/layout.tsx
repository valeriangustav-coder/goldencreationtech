import { Nav } from "@/components/layout/nav";
import { Providers } from "@/components/layout/providers";
import { Footer } from "@/components/template/shared";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="tech-template">
        <Providers>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
