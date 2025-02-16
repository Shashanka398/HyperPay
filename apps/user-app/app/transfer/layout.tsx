"use client"
import "../globals.css";

import { MainBar } from "@repo/ui/MainBar";
import Transfer from "components/transfer/Transfer";
import { NavItems } from "utils/NavItems";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Transfer>
            {children}
        </Transfer>
    );
}
