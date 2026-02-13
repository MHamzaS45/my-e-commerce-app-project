"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Headphones, Shield, Truck } from "lucide-react"

interface ProductPanelProps {
  onBuyNow: () => void
}

const colors = [
  { name: "Charcoal", value: "#1a1a1a" },
  { name: "Slate", value: "#3a3f47" },
  { name: "Snow", value: "#e8e8e8" },
]

const features = [
  {
    icon: Headphones,
    title: "Spatial Audio",
    desc: "Immersive 360-degree sound with head tracking",
  },
  {
    icon: Shield,
    title: "Adaptive ANC",
    desc: "AI-powered noise cancellation for any environment",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Complimentary 2-day express delivery worldwide",
  },
]

export function ProductPanel({ onBuyNow }: ProductPanelProps) {
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: image card */}
        <div className="flex items-center justify-center animate-slide-left">
          <div className="relative border border-border rounded-2xl bg-card p-8 w-full max-w-sm">
            <div className="relative w-full aspect-square max-w-[280px] mx-auto">
              <Image
                src="/images/product-headphones.jpg"
                alt="AURA Pro headphones product view"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Color selector */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === i
                      ? "border-accent scale-110"
                      : "border-transparent hover:border-muted-foreground/30"
                  }`}
                  style={{ backgroundColor: c.value }}
                  aria-label={`Select ${c.name}`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              {colors[selectedColor].name}
            </p>
          </div>
        </div>

        {/* Right: details */}
        <div className="flex flex-col gap-5 animate-slide-right">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">
              Premium Collection
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-1.5 text-foreground">
              AURA Pro
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Wireless Over-Ear Headphones
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">$349</span>
            <span className="text-base text-muted-foreground line-through">$449</span>
            <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
              Save $100
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered with titanium-coated 50mm drivers and adaptive hybrid ANC,
            AURA Pro delivers studio-grade fidelity whether you are on a call,
            in the studio, or on the move. Up to 60 hours of battery life.
          </p>

          {/* Feature rows */}
          <div className="flex flex-col gap-2.5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-secondary group"
              >
                <div className="w-8 h-8 rounded-md bg-secondary group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <f.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buy button */}
          <button
            onClick={onBuyNow}
            className="group mt-1 w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-foreground text-background font-medium text-sm transition-all duration-200 hover:bg-foreground/90 active:scale-[0.99]"
          >
            Buy Now — $349
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
