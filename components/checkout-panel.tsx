"use client"

import { useState } from "react"
import Image from "next/image"
import { Lock, CreditCard, CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react"

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
        <div className="border border-border rounded-2xl bg-card p-10 max-w-sm w-full text-center animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            Order Confirmed
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Your AURA Pro headphones are on their way. Check your email for tracking details.
          </p>
          <button
            onClick={() => {
              setIsComplete(false)
              onBack()
            }}
            className="px-6 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium transition-colors duration-200 hover:bg-secondary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid lg:grid-cols-5 gap-8 items-start">
        {/* Left: form */}
        <div className="lg:col-span-3 flex flex-col gap-4 animate-slide-left">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
              aria-label="Go back to product"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Checkout</h2>
          </div>

          {/* Contact */}
          <fieldset className="border border-border rounded-xl bg-card p-5">
            <legend className="sr-only">Contact Information</legend>
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
              Contact
            </p>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                className="col-span-1 px-3.5 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
              />
              <input
                type="text"
                placeholder="Last name"
                className="col-span-1 px-3.5 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
              />
              <input
                type="email"
                placeholder="Email address"
                className="col-span-2 px-3.5 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
              />
            </div>
          </fieldset>

          {/* Payment */}
          <fieldset className="border border-border rounded-xl bg-card p-5">
            <legend className="sr-only">Payment Details</legend>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-widest text-accent font-medium">
                Payment
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
                  className="w-full px-3.5 py-2.5 pr-10 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
                />
                <CreditCard className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="px-3.5 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="px-3.5 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
          </fieldset>

          {/* Pay button */}
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-foreground text-background font-medium text-sm transition-all duration-200 hover:bg-foreground/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-foreground"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                Pay $349.00
              </>
            )}
          </button>
        </div>

        {/* Right: summary */}
        <div className="lg:col-span-2 animate-slide-right">
          <div className="border border-border rounded-xl bg-card p-5">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-4">
              Summary
            </p>

            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
              <div className="relative w-16 h-16 rounded-lg bg-secondary flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/product-headphones.jpg"
                  alt="AURA Pro headphones in cart"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">AURA Pro</p>
                <p className="text-xs text-muted-foreground">Charcoal / Qty: 1</p>
              </div>
              <p className="text-sm font-medium text-foreground">$349</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$349.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-accent text-xs font-medium">FREE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$28.67</span>
              </div>
              <div className="h-px bg-border my-1.5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-lg font-bold text-foreground">$377.67</span>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-between mt-4 px-1">
            {["Secure Checkout", "Free Returns", "2-Year Warranty"].map((badge) => (
              <div key={badge} className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-accent" />
                <span className="text-[10px] text-muted-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
