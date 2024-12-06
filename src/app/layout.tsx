import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Deux gouttes d'eau",
  description: "Site qui sensibilise sur les océans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full w-full font-roboto">
        <div className="bg-center h-[8vh] w-full ">
          <Header />
        </div>
        <div className="overflow-y-auto h-[92vh]">
          {children}
        </div>
      </body>
    </html >
  );
}
