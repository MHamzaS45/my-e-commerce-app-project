"use client"

import { ShoppingBag } from "lucide-react"

type View = "hero" | "product" | "checkout"

interface NavbarProps {
  currentView: View
  onNavigate: (view: View) => void
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
            <span className="text-sm font-bold text-prussian-deep">A</span>
          </div>
          <span className="text-lg font-bold tracking-wider text-foreground group-hover:text-gold transition-colors duration-300">
            AURA
          </span>
        </button>

        <div className="flex items-center gap-1">
          {(["hero", "product", "checkout"] as View[]).map((view) => (
            <button
              key={view}
              onClick={() => onNavigate(view)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                currentView === view
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {view === "hero" ? "Home" : view === "product" ? "Product" : "Checkout"}
              {currentView === view && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full gradient-gold" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate("checkout")}
          className="relative p-2.5 rounded-xl glass hover:border-gold/30 transition-all duration-300 group"
          aria-label="Open cart"
        >
          <ShoppingBag className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gradient-gold flex items-center justify-center">
            <span className="text-[10px] font-bold text-prussian-deep">1</span>
          </span>
        </button>
      </div>
    </nav>
  )
}
