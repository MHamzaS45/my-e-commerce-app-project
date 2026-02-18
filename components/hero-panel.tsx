"use client"

import { ArrowRight, Star, Zap, Wifi, Battery } from "lucide-react"
import Image from "next/image"

interface HeroPanelProps {
  onExplore: () => void
  onBuyNow: () => void
}

export function HeroPanel({ onExplore, onBuyNow }: HeroPanelProps) {
  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6 animate-fade-in">
          {/* Badge */}
          <div className="flex items-center gap-2 border border-border rounded-full px-3.5 py-1.5 w-fit">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">12,400+ reviews</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground text-balance">
            Sound, <br />
            <span className="text-accent bg-transparent">reimagined.</span>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            AURA Pro delivers immersive spatial audio with adaptive
            noise cancellation. Engineered for those who refuse to compromise.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={onBuyNow}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-sm font-medium transition-all duration-200 hover:bg-foreground/90 active:scale-[0.97]"
            >
              Buy Now — $349
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium transition-all duration-200 hover:bg-secondary active:scale-[0.97]"
            >
              Explore
            </button>
          </div>

          {/* Specs row */}
          <div className="flex items-center gap-6 pt-3">
            {[
              { icon: Battery, label: "Battery", value: "60h" },
              { icon: Zap, label: "Drivers", value: "50mm" },
              { icon: Wifi, label: "ANC", value: "Adaptive" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground leading-tight">{s.value}</span>
                  <span className="text-[11px] text-muted-foreground">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: product image */}
        <div className="flex items-center justify-center animate-slide-right" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-accent/8 blur-[100px] scale-90 pointer-events-none" />

            <div className="relative animate-float">
              <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px]">
                <Image
                  src="/images/product-headphones.jpg"
                  alt="AURA Pro wireless headphones"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating pills */}
            <div
              className="absolute -left-2 top-1/4 flex items-center gap-1.5 border border-border bg-card rounded-full px-3 py-1.5 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Zap className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-medium text-foreground">Hi-Res Audio</span>
            </div>
            <div
              className="absolute -right-2 bottom-1/3 flex items-center gap-1.5 border border-border bg-card rounded-full px-3 py-1.5 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <Wifi className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-medium text-foreground">Spatial Sound</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
