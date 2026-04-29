# fenwaymarketing

Marketing website starter built with Next.js + TypeScript.

## Live website link
- Uses `NEXT_PUBLIC_SITE_URL` from your environment.
- Local default: `http://localhost:3000`.
- If you want a production link, set `NEXT_PUBLIC_SITE_URL` to your deployed domain (for example, `https://www.yourdomain.com`).

## Tech stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS (configured)

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` — start local development server
- `npm run lint` — run lint checks
- `npm run build` — run production build
- `npm run start` — run production server

## Environment variables
Copy `.env.example` to `.env.local` and update values.

## Structure
- `app/` route handlers and pages
- `components/` UI and section components
- `lib/` shared helpers (SEO, analytics, CMS placeholder)
- `content/` MDX content placeholders
- `styles/` global CSS
