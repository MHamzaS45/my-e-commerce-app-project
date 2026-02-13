"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { HeroPanel } from "@/components/hero-panel"
import { ProductPanel } from "@/components/product-panel"
import { CheckoutPanel } from "@/components/checkout-panel"

type View = "hero" | "product" | "checkout"

const viewOrder: Record<View, number> = { hero: 0, product: 1, checkout: 2 }

export default function Page() {
  const [currentView, setCurrentView] = useState<View>("hero")
  const [leaving, setLeaving] = useState(false)
  const [dir, setDir] = useState<"left" | "right">("right")

  const navigateTo = useCallback(
    (view: View) => {
      if (view === currentView || leaving) return
      setDir(viewOrder[view] > viewOrder[currentView] ? "right" : "left")
      setLeaving(true)
      setTimeout(() => {
        setCurrentView(view)
        setLeaving(false)
      }, 300)
    },
    [currentView, leaving]
  )

  const panelCls = leaving
    ? dir === "right"
      ? "opacity-0 -translate-x-8 scale-[0.98]"
      : "opacity-0 translate-x-8 scale-[0.98]"
    : "opacity-100 translate-x-0 scale-100"

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-background">
      {/* Subtle radial glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsla(210,100%,60%,0.08),transparent_60%)]" />

      <Navbar currentView={currentView} onNavigate={navigateTo} />

      <div className="relative h-full pt-14">
        <div
          className={`h-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${panelCls}`}
        >
          {currentView === "hero" && (
            <HeroPanel
              onExplore={() => navigateTo("product")}
              onBuyNow={() => navigateTo("checkout")}
            />
          )}
          {currentView === "product" && (
            <ProductPanel onBuyNow={() => navigateTo("checkout")} />
          )}
          {currentView === "checkout" && (
            <CheckoutPanel onBack={() => navigateTo("product")} />
          )}
        </div>
      </div>

      {/* Pill navigation */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md px-2 py-1.5 z-50" aria-label="Page navigation">
        {(["hero", "product", "checkout"] as View[]).map((view) => (
          <button
            key={view}
            onClick={() => navigateTo(view)}
            className={`transition-all duration-300 rounded-full ${
              currentView === view
                ? "w-7 h-2 bg-accent"
                : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Navigate to ${view}`}
            aria-current={currentView === view ? "page" : undefined}
          />
        ))}
      </nav>
    </main>
  )
}
