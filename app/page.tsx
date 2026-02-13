"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { HeroPanel } from "@/components/hero-panel"
import { ProductPanel } from "@/components/product-panel"
import { CheckoutPanel } from "@/components/checkout-panel"

type View = "hero" | "product" | "checkout"

const viewIndex: Record<View, number> = { hero: 0, product: 1, checkout: 2 }

export default function Page() {
  const [currentView, setCurrentView] = useState<View>("hero")
  const [animatingOut, setAnimatingOut] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const navigateTo = useCallback(
    (view: View) => {
      if (view === currentView) return
      setDirection(viewIndex[view] > viewIndex[currentView] ? "right" : "left")
      setAnimatingOut(true)
      setTimeout(() => {
        setCurrentView(view)
        setAnimatingOut(false)
      }, 350)
    },
    [currentView]
  )

  const getAnimationClass = () => {
    if (animatingOut) {
      return direction === "right"
        ? "opacity-0 -translate-x-12"
        : "opacity-0 translate-x-12"
    }
    return "opacity-100 translate-x-0"
  }

  return (
    <main className="h-screen w-screen overflow-hidden relative">
      {/* Deep background gradient */}
      <div className="fixed inset-0 bg-background" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsla(222,47%,15%,0.5)_0%,transparent_70%)]" />
      <div className="fixed bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,hsla(43,56%,54%,0.03)_0%,transparent_60%)]" />

      {/* Grid lines decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(43,56%,54%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(43,56%,54%,0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Panel container */}
      <div className="relative h-full pt-16">
        <div
          className={`h-full transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${getAnimationClass()}`}
          style={{ transitionDuration: "350ms" }}
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

      {/* Bottom progress indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {(["hero", "product", "checkout"] as View[]).map((view) => (
          <button
            key={view}
            onClick={() => navigateTo(view)}
            className={`transition-all duration-500 rounded-full ${
              currentView === view
                ? "w-8 h-2 gradient-gold"
                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to ${view}`}
          />
        ))}
      </div>
    </main>
  )
}
