import type { Metadata } from "next";
import "./globals.css";

import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<GoogleTagManager gtmId="GTM-M4KF5DNS" />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900  text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
