"use client"

import { ShoppingBag } from "lucide-react"

type View = "hero" | "product" | "checkout"

interface NavbarProps {
  currentView: View
  onNavigate: (view: View) => void
}

const links: { view: View; label: string }[] = [
  { view: "hero", label: "Home" },
  { view: "product", label: "Product" },
  { view: "checkout", label: "Checkout" },
]

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 h-14 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2.5 group"
          aria-label="Go to home"
        >
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">A</span>
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            AURA
          </span>
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5" aria-label="Main navigation">
          {links.map(({ view, label }) => (
            <button
              key={view}
              onClick={() => onNavigate(view)}
              className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-md transition-colors duration-200 ${currentView === view
                ? "text-foreground bg-secondary"
                : "text-muted-foreground hover:text-foreground"
                }`}
              aria-current={currentView === view ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Cart */}
        <button
          onClick={() => onNavigate("checkout")}
          className="relative flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-colors duration-200"
          aria-label="Open cart"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-[10px] font-semibold text-accent-foreground flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </header>
  )
}
