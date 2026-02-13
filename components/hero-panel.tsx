"use client"

import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

interface HeroPanelProps {
  onExplore: () => void
  onBuyNow: () => void
}

export function HeroPanel({ onExplore, onBuyNow }: HeroPanelProps) {
  return (
    <div className="h-full flex items-center justify-center relative px-6">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-prussian/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side content */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <div className="flex items-center gap-2 glass rounded-full px-4 py-2 w-fit">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              Over 12,000 reviews
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-balance">
            Sound Beyond{" "}
            <span className="text-gold-gradient">Imagination</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            AURA Pro delivers immersive spatial audio with adaptive noise cancellation. 
            Crafted for those who refuse to compromise.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onBuyNow}
              className="group relative px-8 py-3.5 rounded-xl gradient-gold text-prussian-deep font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(43,56%,54%,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                Buy Now - $349
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <button
              onClick={onExplore}
              className="px-8 py-3.5 rounded-xl glass text-foreground font-semibold text-sm transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            {[
              { label: "Battery", value: "60h" },
              { label: "Drivers", value: "50mm" },
              { label: "ANC", value: "Adaptive" },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col">
                <span className="text-2xl font-bold text-gold">{spec.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side product image */}
        <div className="flex items-center justify-center animate-slide-in-right">
          <div className="relative">
            {/* Glow ring behind product */}
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-[80px] scale-75" />
            
            <div className="relative animate-float" style={{ perspective: "1000px" }}>
              <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/images/product-headphones.jpg"
                  alt="AURA Pro wireless headphones in matte black with gold accents"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_hsla(43,56%,54%,0.15)]"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 glass rounded-xl px-3 py-2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <span className="text-xs font-semibold text-gold">Hi-Res Audio</span>
            </div>
            <div className="absolute -right-4 bottom-1/3 glass rounded-xl px-3 py-2 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <span className="text-xs font-semibold text-gold">Spatial Sound</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
