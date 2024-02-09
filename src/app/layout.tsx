import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import RootProvider from "./RootProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "A blog app made for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <RootProvider>{children}</RootProvider>
        <Toaster position="bottom-left" reverseOrder={false} />
      </body>
    </html>
  );
}
