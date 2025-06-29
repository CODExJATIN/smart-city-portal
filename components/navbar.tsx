"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          SmartCity<span className="text-primary">Portal</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary/80">
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link href="/login">Sign&nbsp;In</Link>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className={cn("md:hidden bg-background border-t", "animate-in fade-in slide-in-from-top-2")}>
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild onClick={() => setOpen(false)}>
              <Link href="/login">Sign&nbsp;In</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
