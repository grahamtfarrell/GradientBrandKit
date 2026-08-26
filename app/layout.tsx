import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gradient MGMT Brand Guidelines",
  description:
    "Official brand guidelines for Gradient MGMT — logo, color, typography, applications, and visual direction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <Script
          id="reset-scroll"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              'history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search);scrollTo(0,0);',
          }}
        />
        {children}
      </body>
    </html>
  );
}
