# ldvyyc.com

Personal homepage — Cyberpunk-Quant aesthetic.

Built with Next.js 15 + TypeScript + Tailwind CSS.

## Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS + CSS custom properties
- **Animation**: Canvas API (CyberpunkGrid), Framer Motion
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- **Deploy**: Cloudflare Pages (static export)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All content lives in component files — no CMS needed:

| What                  | File                               |
|-----------------------|------------------------------------|
| Name / Tagline        | `components/Hero.tsx`              |
| Space cards           | `components/SpaceSection.tsx`      |
| Blog section          | `components/BlogSection.tsx`       |
| About bio & skills    | `components/AboutSection.tsx`      |
| Social links          | `components/ConnectSection.tsx`    |
| Grid bg colors/speed  | `components/CyberpunkGrid.tsx`     |
| Global color tokens   | `app/globals.css` (`:root`)        |

## Deploy to Cloudflare Pages

1. Push repo to GitHub
2. Cloudflare Pages → New project → Connect GitHub repo
3. Build command: `npm run build`
4. Output directory: `out`
5. Done.

## Resume subdomain

Host your PDF at Cloudflare R2 → bind `resume.ldvyyc.com` as a custom domain on the R2 bucket.
