/** @format */

import type { Metadata } from "next";
import { Urbanist, Yantramanav } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const textFont = Yantramanav({
  subsets: ["latin"],
  variable: "--text-font",
  weight: ["400", "500"],
});
const titleFont = Urbanist({
  subsets: ["latin"],
  variable: "--title-font",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Montreal Moodboard",
  description: "a love letter to my favourite Canadian city <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-text items-center justify-center w-screen h-screen flex flex-col overflow-hidden",
          titleFont.variable,
          textFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
