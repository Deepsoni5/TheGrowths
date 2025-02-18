import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartProvider } from "./contexts/CartContext";
import CartButton from "./components/CartButton";
import HamburgerMenu from "./components/HamburgerMenu";
import LoadingAnimation from "./components/LoadingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheGrowths - Business Growth Solutions",
  description:
    "Transform your business with expert consulting services and innovative solutions",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <CartProvider>
          <LoadingAnimation />
          <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                  <span className="font-open_sans">thegrowths</span>
                  <span className="font-dm_sans text-gray-500">.com</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                  <Link
                    href="/#services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>

                  <Link
                    href="/store"
                    className="hover:text-primary transition-colors"
                  >
                    Store
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <CartButton />
                </div>
                <HamburgerMenu />
              </div>
            </div>
          </nav>
          <main className="pt-20">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Image from "next/image";
