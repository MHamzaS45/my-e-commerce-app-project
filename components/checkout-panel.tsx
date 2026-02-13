"use client"

import { useState } from "react"
import Image from "next/image"
import { Lock, CreditCard, CheckCircle2, ArrowLeft } from "lucide-react"

interface CheckoutPanelProps {
  onBack: () => void
}

export function CheckoutPanel({ onBack }: CheckoutPanelProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleCheckout = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="h-full flex items-center justify-center px-6">
        <div className="glass rounded-3xl p-12 max-w-md w-full text-center animate-fade-up">
          <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-prussian-deep" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-2 text-foreground">
            Order Confirmed
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Your AURA Pro headphones are on their way. Check your email for tracking details.
          </p>
          <button
            onClick={() => {
              setIsComplete(false)
              onBack()
            }}
            className="px-8 py-3 rounded-xl glass text-foreground font-semibold text-sm transition-all duration-300 hover:border-gold/30 hover:text-gold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex items-center justify-center relative px-6">
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl w-full grid lg:grid-cols-5 gap-8 items-start">
        {/* Left - Checkout form */}
        <div className="lg:col-span-3 flex flex-col gap-5 animate-slide-in-left">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-lg glass hover:border-gold/30 transition-all duration-300 group"
              aria-label="Go back to product"
            >
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
            </button>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
              Checkout
            </h2>
          </div>

          {/* Contact info */}
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium mb-4">
              Contact Information
            </p>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                className="col-span-1 px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                className="col-span-1 px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="col-span-2 px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium">
                Payment Details
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span className="text-[10px] uppercase tracking-wider">Secured by Stripe</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
                />
                <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="group w-full py-4 rounded-xl gradient-gold text-prussian-deep font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(43,56%,54%,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Pay $349.00
              </span>
            )}
          </button>
        </div>

        {/* Right - Order summary */}
        <div className="lg:col-span-2 animate-slide-in-right">
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium mb-4">
              Order Summary
            </p>

            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
              <div className="relative w-20 h-20 rounded-xl bg-secondary flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/product-headphones.jpg"
                  alt="AURA Pro headphones in cart"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">AURA Pro</p>
                <p className="text-xs text-muted-foreground">Midnight Black</p>
                <p className="text-xs text-muted-foreground">Qty: 1</p>
              </div>
              <p className="text-sm font-semibold text-foreground">$349</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$349.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-gold text-xs font-medium">FREE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$28.67</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-lg font-bold text-gold-gradient">$377.67</span>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-4">
            {["Secure Checkout", "Free Returns", "2-Year Warranty"].map((badge) => (
              <div key={badge} className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-gold" />
                <span className="text-[10px] text-muted-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
