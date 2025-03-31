"use client"
import "./globals.css";
import { Providers } from "./providers";
import { MainBar } from "@repo/ui/MainBar";
import { NavItems } from "utils/NavItems";
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-200">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <MainBar 
              navItems={NavItems} 
            >
              <div className="max-w-screen-xl mx-auto p-4">
                {children}
              </div>
            </MainBar>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}