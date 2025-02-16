"use client"
import "./globals.css";
import { Providers } from "./providers";
import { MainBar } from "@repo/ui/MainBar";
import { NavItems } from "utils/NavItems";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className="w-full h-full">
        <MainBar navItems={NavItems}>
             {children}
        </MainBar>
     
      </body>
      </Providers>
    </html>
  );
}
