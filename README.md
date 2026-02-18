# AURA | Premium Audio

A modern, single-page e-commerce experience for **AURA Pro** wireless headphones. Built with Next.js and a polished UI featuring hero, product, and checkout flows with smooth view transitions.

<img width="1280" height="614" alt="image" src="https://github.com/user-attachments/assets/93c36da4-3f05-44f2-9b72-82d27f30837b" />


---

## Overview

This project is a front-end e-commerce demo that showcases:

- **Hero Landing** — Landing with value proposition, specs, and primary CTAs
- **Product** — Product details, color selection, and feature highlights
- **Checkout** — Contact form, payment section (Stripe branding), order summary, and a simulated order confirmation

Navigation is handled via a top navbar, bottom pill indicators, and animated panel transitions (slide/scale) between views.

---

## Tech Stack

| Category      | Technologies |
|---------------|--------------|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack for dev) |
| **UI**        | [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) 3, [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| **Language**  | [TypeScript](https://www.typescriptlang.org/) 5.7 |
| **Icons**     | [Lucide React](https://lucide.dev/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics), [Vercel Speed Insights](https://vercel.com/docs/speed-insights) |

Additional libraries include: `react-hook-form`, `zod`, `@hookform/resolvers`, `next-themes`, `sonner` (toasts), `recharts`, `embla-carousel-react`, `date-fns`, `cmdk`, and others used by shadcn components.

---

## Prerequisites

- **Node.js** 18.x or later (LTS recommended)
- **pnpm** (recommended; lockfile is `pnpm-lock.yaml`) — or npm / yarn

---

## Getting Started

### 1. Clone and install

```bash
git clone <repository-url>
cd my-e-commerce-app-project
pnpm install
```

With npm:

```bash
npm install
```

### 2. Run development server

```bash
pnpm dev
```

Uses Next.js with Turbopack. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
pnpm build
pnpm start
```

---

## Available Scripts

| Command       | Description                          |
|---------------|--------------------------------------|
| `pnpm dev`    | Start dev server with Turbopack      |
| `pnpm build`  | Create production build              |
| `pnpm start`  | Run production server                |
| `pnpm lint`   | Run Next.js ESLint                   |

---

## Project Structure

```
my-e-commerce-app-project/
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts, Vercel Analytics/Speed Insights
│   ├── page.tsx         # Main page: view state, Navbar, Hero/Product/Checkout panels, pill nav
│   └── globals.css      # Global styles (Tailwind + CSS variables for light/dark)
├── components/
│   ├── navbar.tsx       # Top bar: logo, Home / Product / Checkout, cart icon
│   ├── hero-panel.tsx   # Hero section: headline, CTAs, specs, product image
│   ├── product-panel.tsx# Product details, color picker, features, Buy Now
│   ├── checkout-panel.tsx # Checkout form, payment block, order summary, confirmation state
│   ├── theme-provider.tsx
│   └── ui/              # shadcn/ui components (button, card, dialog, etc.)
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts         # cn() and helpers
├── styles/
│   └── globals.css      # Tailwind layers, :root/.dark CSS variables
├── public/
│   └── images/          # Product assets (e.g. product-headphones.jpg)
├── components.json      # shadcn config
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

---

## Features

- **Single-page flow**: Hero → Product → Checkout with animated transitions (opacity, translate, scale).
- **Responsive layout**: Grid and typography adapt for mobile and desktop.
- **Theme support**: CSS variables for light/dark (see `styles/globals.css` and `app/globals.css`).
- **Accessibility**: Semantic HTML, `aria-label` / `aria-current` on nav and controls.
- **Product UX**: Color selector (Charcoal, Slate, Snow), feature list (Spatial Audio, Adaptive ANC, Free Shipping).
- **Checkout UX**: Contact fields, payment section (Stripe-style), order summary, and a 2s simulated “Order Confirmed” state with “Continue Shopping”.

---

## Configuration

- **Next.js**: `next.config.mjs` — TypeScript build errors are currently ignored (`ignoreBuildErrors: true`). Consider turning this off and fixing type errors for production.
- **shadcn**: `components.json` — default style, Tailwind with CSS variables, `@/` path aliases, Lucide icons.
- **Metadata**: App title and description are set in `app/layout.tsx` (“AURA | Premium Audio”, “Experience sound like never before…”).

---

## Deployment

The app is set up for [Vercel](https://vercel.com/): it uses `@vercel/analytics` and `@vercel/speed-insights`. Deploy with:

```bash
vercel
```

Or connect your Git repository in the Vercel dashboard for automatic deployments.

---

## License

Private project. All rights reserved.
