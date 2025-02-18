"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import CartButton from "./CartButton"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white">
        <nav className="flex flex-col gap-4">
          <Link href="/#services" className="text-lg hover:text-primary transition-colors" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/about" className="text-lg hover:text-primary transition-colors" onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" className="text-lg hover:text-primary transition-colors" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/store" className="text-lg hover:text-primary transition-colors" onClick={closeMenu}>
            Store
          </Link>
          <div className="flex items-center gap-4">
            <CartButton />
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

