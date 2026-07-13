# NovaPack Industries — Order Frontend

A lightweight Next.js 15 (App Router) + TypeScript + Tailwind CSS frontend
for NovaPack Industries, a B2B packaging & industrial supply company.

This app is **order-generation UI only**. It is not an eCommerce platform,
ERP, CRM, or admin panel — it exists to let business customers browse the
catalog, build a cart, and submit an order through Checkout, which is built
to be wired directly into a FastAPI order-intake endpoint later.

## Flow

Home → Products → Product Details → Cart → Checkout → Order Success → Track Order

Static "About" and "Contact" pages, plus a 404, round out the required pages.

## Tech Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Lucide React icons
- No Redux, no UI kit dependency — small hand-rolled primitives in `components/ui`
- Cart state lives in React Context (`lib/cart-context.tsx`) persisted to
  `localStorage` so a session survives a refresh

## Project Structure

```
app/                     Routes (App Router)
  page.tsx                 Home
  products/                Product listing + [slug] detail page
  cart/                    Cart page
  checkout/                Checkout page (the FastAPI integration point)
  order-success/           Order confirmation page
  track-order/             Demo order tracking page
  about/, contact/         Static pages
  not-found.tsx            Custom 404
components/
  ui/                      Reusable primitives: Button, Input, Select, etc.
  layout/                  Header, Footer
  home/                    Homepage sections
  product/                 Product card, gallery, spec table, add-to-cart
  cart/                    Cart line item row
  checkout/                Order summary, order-success + track-order content
lib/
  types.ts                 Shared TypeScript types
  products.ts              Demo product catalog (10 SKUs, 5 categories)
  cart-context.tsx         Cart state provider
  utils.ts                 cn() class helper + currency formatter
```

## Connecting Checkout to FastAPI

`app/checkout/page.tsx` builds a fully-typed `OrderPayload` object on submit
(company info, contact info, delivery address, PO number, line items, and
subtotal). Right now it simulates the order desk and generates a demo
reference number. To go live:

1. Replace the commented `fetch("/api/orders", ...)` block in `handleSubmit`
   with a real call to your FastAPI endpoint.
2. Use the `referenceNumber` returned by the API instead of the client-generated one.
3. Everything else (cart, validation, summary) stays the same.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

This is a standard Next.js App Router project — push to a Git repo and
import it in Vercel with no additional configuration. `npm run build` has
been verified to compile and prerender all routes successfully.
