"use client";

import { AppProvider } from "./data/context/AppContext";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
      <body
        className={`antialiased overflow-auto`}
      >
        {children}
      </body>
    </html>
    </AppProvider>
  );
}
