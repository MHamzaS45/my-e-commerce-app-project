"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Shield, Truck, Headphones } from "lucide-react"

interface ProductPanelProps {
  onBuyNow: () => void
}

const colors = [
  { name: "Midnight Black", value: "#0a0a0a", ring: "ring-foreground/30" },
  { name: "Prussian Navy", value: "#1a2744", ring: "ring-prussian" },
  { name: "Royal Gold", value: "#c9a84c", ring: "ring-gold" },
]

const features = [
  {
    icon: Headphones,
    title: "Spatial Audio",
    description: "Immersive 360-degree sound stage with head tracking",
  },
  {
    icon: Shield,
    title: "Adaptive ANC",
    description: "AI-powered noise cancellation adjusts to your environment",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary 2-day express delivery worldwide",
  },
]

export function ProductPanel({ onBuyNow }: ProductPanelProps) {
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="h-full flex items-center justify-center relative px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left - Product image with glassmorphism card */}
        <div className="flex items-center justify-center animate-slide-in-left">
          <div className="relative glass rounded-3xl p-8 animate-pulse-glow">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              <Image
                src="/images/product-headphones.jpg"
                alt="AURA Pro headphones detail view"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Color dots indicator */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-6 h-6 rounded-full transition-all duration-300 ring-2 ring-offset-2 ring-offset-background ${
                    selectedColor === i ? color.ring : "ring-transparent"
                  } hover:scale-110`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              {colors[selectedColor].name}
            </p>
          </div>
        </div>

        {/* Right - Product details */}
        <div className="flex flex-col gap-5 animate-slide-in-right">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-2">
              Premium Collection
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight text-balance">
              AURA Pro
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Wireless Over-Ear Headphones
            </p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gold-gradient">$349</span>
            <span className="text-lg text-muted-foreground line-through">$449</span>
            <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-gold">
              Save $100
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered with titanium-coated 50mm drivers and adaptive hybrid ANC, 
            AURA Pro delivers studio-grade fidelity whether you are on a call, 
            in the studio, or on the move. Up to 60 hours of battery life.
          </p>

          <div className="flex flex-col gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 glass rounded-xl px-4 py-3 transition-all duration-300 hover:border-gold/20 group"
              >
                <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <feature.icon className="w-4 h-4 text-prussian-deep" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onBuyNow}
            className="group mt-2 w-full py-4 rounded-xl gradient-gold text-prussian-deep font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(43,56%,54%,0.3)] hover:scale-[1.01] active:scale-[0.99]"
          >
            <span className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              Buy Now - $349
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
