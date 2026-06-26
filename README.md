# NexFlow — AI Data Automation Landing Page

Premium SaaS landing page built for FB Round 1 (Next-Gen AI Platform Speed Run).

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Inter** (body) + **JetBrains Mono** (headings) via Google Fonts
- No banned libraries (no Framer Motion, Shadcn, Radix, etc.)

## Features

### Feature 1: Matrix-Driven Pricing
- Multi-dimensional `PRICING_MATRIX` config (base rates, 20% annual discount, regional tariffs)
- Currency switcher: INR (₹), USD ($), EUR (€)
- **State isolation**: `PricingController` updates price text nodes via direct DOM manipulation — no React re-renders on toggle

### Feature 2: Bento → Accordion
- Desktop: Bento grid with hover/focus active state
- Mobile: Touch-optimized accordion
- **Context lock**: Active index transfers on resize past 768px breakpoint
- Session persistence via `sessionStorage`

## Design Tokens (from color palette)

| Token | Hex |
|-------|-----|
| Arctic Powder | `#F1F6F4` |
| Forsythia | `#FFC801` |
| Nocturnal Expedition | `#114C5A` |
| Mystic Mint | `#D9E8E2` |
| Deep Saffron | `#FF9932` |
| Oceanic Noir | `#172836` |

**Typography:** Inter (body/UI) + JetBrains Mono (headings) via Google Fonts.

## Motion

- Micro-interactions: 175ms ease-out
- Structural transitions: 350ms ease-in-out
- Entry loader: ≤500ms total

## Run Locally

```bash
cd landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
