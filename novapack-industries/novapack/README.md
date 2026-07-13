# NovaPack Industries — B2B Ordering Portal

Frontend-only B2B ordering portal for NovaPack Industries, a fictional
industrial packaging & supply company. This is the customer-facing catalog
and ordering surface for a future AI Order Management & Operations Platform.
No backend, database, or third-party integrations are wired up yet — this
repo is the frontend only, built to be dropped in front of that platform
later.

## Tech Stack

- Next.js 15 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style components (Radix UI primitives)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
src/
  app/                    Route segments (App Router)
    products/             Catalog + [slug] product detail
    cart/ checkout/ order-success/
    track-order/ request-quote/
    about/ contact/ login/ register/
    not-found.tsx
  components/
    ui/                   Base primitives (button, input, card, etc.)
    layout/               Header, footer
    home/                 Homepage sections
    products/             Product card, gallery, actions, related products
    cart/                 Cart line item, order summary
    shared/                Logo, section heading, availability badge, image placeholder
  lib/
    data/                 Mock product/category/industry data
    cart-context.tsx      Client-side cart state (localStorage-backed)
    types.ts               Shared TypeScript types
    utils.ts                cn() + currency formatting
```

## Pages

Home, Products, Product Details, Cart, Checkout, Order Success, Track Order,
Request Quote, About, Contact, Login, Register, and a custom 404. No admin
dashboard, customer dashboard, CRM, ERP, or reporting surfaces are included
by design — this is strictly the ordering frontend.

## Notes on Data

All products, categories, industries, and order statuses are static mock
data in `src/lib/data`. Cart state persists to `localStorage` client-side
only. Checkout, quote, and contact forms currently simulate submission and
do not call any backend.

## Future Integration Points

This frontend is structured to be connected later to:

- **FastAPI** — order, product, and account APIs (see `.env.example` for `NEXT_PUBLIC_API_BASE_URL`)
- **Supabase** — auth, database, storage
- **n8n** — order workflow automation
- **Google Gemini** — AI-assisted order/quote processing
- **Slack** — internal order notifications
- **Gmail** — transactional email
- Invoice automation and inventory automation systems

None of these are implemented here. Swap the mock data functions in
`src/lib/data` and the simulated form submissions in `checkout`,
`request-quote`, and `contact` for real API calls when the platform is
ready.

## Deployment

Ready to deploy on Vercel as-is:

```bash
npm run build
```
