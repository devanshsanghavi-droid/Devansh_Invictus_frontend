# Invictus Frontend

Vite + React 18 + TypeScript + Tailwind + shadcn/ui. Marketing site for Invictus Data & AI.

## Design language

The site follows a **Bloomberg-terminal editorial** style: restrained, dense, and
typographic. The owner's standing objection is work that "looks AI-esque" - the
generated-looking template that pairs a pill badge with a centered heading, a
gradient icon tile, and a card floating on a colored shadow. Don't build that here.

Reference: <https://professional.bloomberg.com/products/bloomberg-terminal/>

### Do not use

These were deliberately removed from the homepage in Aug 2026. Reintroducing any of
them is a regression, not a new idea:

- Pill/rounded-full badges above headings (`bg-[#EFF6FF] rounded-full px-6 py-2` + icon)
- Gradient-filled icon tiles (`bg-gradient-to-br from-[#3B82F6] to-[#2563EB]` squares)
- Glow halos - `blur-lg` / `blur-3xl` behind cards, radial color washes, floating orbs
- Hover lift or grow: `hover:-translate-y-1`, `hover:scale-105`, `group-hover:scale-110`
- Colored shadows (`shadow-xl shadow-[#2563EB]/10`) - use a 1px border instead
- Scroll-triggered stagger: IntersectionObserver + `animate-slide-up` + `transitionDelay`
- Full-page decorative backgrounds (Lottie, gradient body washes)
- Centered-everything layouts; centered card text
- Fabricated live-data claims ("Real-time metrics updated from active client projects")
- `rounded-2xl` / `rounded-3xl`. Radius token is `0.25rem`; use `rounded-sm` or none.

### Do use

- **Left-aligned** headings and copy. Asymmetric 12-column section headers
  (`lg:col-span-5` heading / `lg:col-span-7` supporting text).
- **Hairline rules** as the structural device: `border-b border-slate-200` between
  sections; bordered grid cells sharing 1px borders (`border-t border-l` on the grid,
  `border-r border-b` on each cell) instead of detached cards.
- `.eyebrow` (small uppercase tracked label) where a pill badge would have gone.
- `.tnum` on figures so numbers read as data, not marketing.
- Blue `#2563EB` as an **accent only** - CTAs, links, focus rings. Never as a fill or
  gradient. Near-black `#0B1220` for inverted sections and the footer.
- Near-zero motion. Colour/opacity transitions at `duration-150` are fine; movement
  is not. Exception in use: a 2px arrow nudge on link hover.
- Section container: `max-w-[1400px] mx-auto px-6 lg:px-10`, vertical `py-20 lg:py-28`.

### Sanctioned exceptions

Two places intentionally break the rules above. Both were requested directly.
Don't "fix" them:

- **`pages/Products.tsx`** - the Trivas and Nexus panels carry their own product
  branding (Trivas: starfield navy + indigo; Nexus: teal gradient + orange), including
  gradients, a nebula glow, and `rounded-2xl`. The point is that each panel looks like
  its product's real site. Spectra is deliberately plain white. If a fourth product is
  added, follow the same principle: match that product's brand, not this site's.
- **`sections/ClientMarquee.tsx`** - a continuously scrolling client strip. Motion is
  the component. It pauses on hover and is disabled under `prefers-reduced-motion`.
- **`ui/CountUp.tsx` in the Statistics band** - animated count-up figures. These were
  originally removed as a generated-site tell, then explicitly asked for on 2026-08-17,
  so the ban is reversed. Use the `CountUp` component, never a hook inside `.map()`
  (the original implementation did exactly that and broke the rules of hooks). Revenue
  starts at `from={1}` (=$1M) rather than 0 so it reads as growth.

## Contrast

Text colour must be chosen against the surface it actually lands on. A sweep on
2026-08-17 fixed **69** places where dark text sat on a dark background, mostly:

- `text-black` / `text-slate-900` icons inside `bg-gradient-to-br from-[#2563EB]` tiles
- `text-slate-800` on `bg-[#181515]/90` panels (`solutions/Finance.tsx`, `Retail.tsx`)
- the `/industries` page metric panels, which had `text-slate-900` on a blue gradient

Two things to know when working here:

1. **`group-hover:text-slate-900` on a light card is correct** - it pairs with a
   background that also changes on hover. Don't "fix" those.
2. When darkening a surface, re-check every descendant's text colour. The common
   regression is darkening a card fill and leaving the icon dark.

## Typography

One neutral grotesque - **Inter** - across the entire site.

Two things in `src/index.css` are deliberate and load-bearing:

1. **The `!important` on `html, body` and `h1-h6`.** ~70 files still carry legacy
   `font-['Lexend']` / `font-['DM_Sans']` utility classes. The `!important` keeps type
   consistent without editing all of them. Removing it makes those legacy classes take
   effect site-wide and fragments the typography. Don't remove it as "cleanup."
2. **`.unbounded` no longer means the Unbounded font.** It's now an Inter display
   treatment (tight `-0.03em` tracking). ~20 pages apply the class, so it stays the
   single point that retypes them. Don't rename or delete it without updating them all.

When adding markup, use the default inherited font - don't add new `font-['...']`
classes.

## Checks

```bash
npm run dev      # port 8081
npm run build    # primary check
npx tsc --noEmit -p tsconfig.app.json
```

- **`npx eslint` crashes repo-wide** (eslint 9 vs pinned @typescript-eslint). Use
  `npm run build` + `tsc` instead.
- `tsc` reports ~18 **pre-existing** errors in `sanity.*`, `BlogDetail.tsx`, and some
  `components/ui/*` files. Don't treat them as caused by your change; do confirm your
  own touched files are absent from the list.

## Deployment

Deployed as a **Cloudflare Worker with static assets** (not Cloudflare Pages), via
Workers Builds on push to `main`. Worker name: `devansh-invictus-frontend`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |
| Output | `dist/` (gitignored; built in CI) |

### npm only - never commit a second lockfile

The first deploy failed at the install step:

```
bun install --frozen-lockfile
error: lockfile had changes, but lockfile is frozen
```

The repo carried **both** `bun.lockb` and `package-lock.json`. Cloudflare detects the
package manager from whichever lockfile it finds, picked bun, and bun 1.2 wants to
migrate the legacy binary `bun.lockb` to the newer text `bun.lock` format. That
migration counts as a lockfile change, which `--frozen-lockfile` refuses.

`bun.lockb` was deleted. **This project is npm-managed.** Do not run `bun install` or
`yarn` here, and do not commit `bun.lockb` / `bun.lock` / `yarn.lock`. If a build ever
fails at install again, check for a stray lockfile first. Verify locally with:

```bash
npm ci --dry-run     # must succeed; proves package-lock.json matches package.json
```

### wrangler.jsonc

Two fields are load-bearing:

- **`name`** must match the Worker in the dashboard. A mismatch silently creates a
  *second* Worker rather than updating the existing one, and the live URL stays stale.
- **`assets.not_found_handling: "single-page-application"`** is required. Routing is
  client-side React Router, so deep links (`/products`, `/solutions/ecommerce`) arrive
  at the edge as paths with no matching file. Without this they 404 on direct load and
  on refresh, while still working when navigated to in-app - which makes it easy to
  miss in casual testing.

Validate config changes without deploying:

```bash
npm run build && npx wrangler deploy --dry-run
```

## Known state

- `SCHEDULE_WORKSHOP_URL` is a `#` placeholder in **both** `layout/Navbar.tsx` and
  `layout/MobileMenu.tsx` - update both together.
- Logo variants `invictuslogo-light.png` / `invictuslogo-dark.png` were generated by
  recolouring the red original; official blue art is still outstanding.
- **Dead, unrendered code** - don't restyle it before confirming it's routed:
  `sections/ClientShowcase.tsx` (still carries the old glow/gradient treatment),
  `*Replica.tsx`, `BlogDetail.tsx`, `GraduateProgram.tsx`.
- `react-countup` and `lottie-react` are unused dependencies.
- **The client marquee currently shows FAANG logos as a placeholder**, under a "Trusted
  by" label. Those are not clients. Accepted only because this deploys privately - before
  any public launch, swap in the real client list or change the label. The only clients
  the site has ever named publicly are Votorantim Group, PwC Brazil and Tegma Logística
  (see the legacy `ClientShowcase.tsx`). Never pad that list with invented names.
- **The hero console is placeholder art.** `sections/HeroConsole.tsx` is a stylised
  analytics panel drawn in CSS/SVG, not a screenshot. Bars and percentages are
  illustrative; the only sourced number is $74M. If you replace it with a real product
  screenshot, confirm it contains no live client data.
- **Solution page imagery is placeholder.** All 21 AI-generated `channeliq.ai` images were
  replaced with four real photographs in `public/placeholders/`, cycled across pages, so
  the same photo repeats on several pages until real art arrives.
- **No em dashes anywhere.** Site copy, comments and docs use commas or ` - ` instead.
  This is a standing preference; keep new copy consistent with it.
- Expected console noise, all pre-existing: aplo-evnt pixel 400s, blocked GA, forms
  POSTing to staging.trilio.ai.
