# Editorial Design System

A portable specification for building marketing and product sites that read as
deliberate, professional, and human-made, rather than assembled from a template.

Extracted from the Invictus Data frontend rebuild. Nothing here is specific to
that company: the palette is a variable, the layout rules are not. Copy this file
into another project and it should work as-is.

**Reference points:** Bloomberg Terminal, Stripe, Palantir, Linear, Vercel. What
these share is not a colour scheme, it's a posture: information is the interest,
decoration is not.

---

## 1. The core thesis

Most generated-looking sites fail the same way. They decorate weak structure.
A pill badge sits above a centred heading, an icon gets a gradient tile, a card
floats on a coloured shadow, and everything fades up on scroll. Each choice is
individually defensible. Together they read as a template, because they are
applied uniformly regardless of what the content is doing.

This system inverts that. **Structure carries the design; decoration is nearly
absent.** Hierarchy comes from type scale, alignment, and negative space. Grouping
comes from hairline rules and shared borders. Emphasis comes from one accent
colour used sparingly.

The test: strip every colour, shadow, and animation from a page. If the hierarchy
still reads, the structure is doing its job. If it collapses into undifferentiated
grey mush, decoration was load-bearing and the design is weak.

---

## 2. The banned list

These are the specific tells. Avoid them by default. Each has a legitimate use
somewhere, but as a default reflex each one cheapens the page.

| Pattern | Why it fails |
|---|---|
| Pill badge above a heading (`rounded-full` + icon + label) | The single most recognisable generated-site marker. It adds a word the heading already says. |
| Gradient-filled icon tiles | Decoration uncorrelated with meaning. Every icon gets the same treatment, so it signals nothing. |
| Glow halos, blurred colour orbs, radial washes | Depth applied to flat content. Costs paint performance and says nothing. |
| `hover:scale`, `hover:-translate-y` | Physical motion for a non-physical action. Nudging layout on hover is noise. |
| Coloured shadows (`shadow-xl shadow-blue-500/10`) | Shadow implies elevation. Coloured shadow implies nothing that exists. |
| Scroll-triggered stagger animations | Delays content the reader asked for. Actively hostile on re-visits. |
| Animated count-up numbers | Makes data feel like a slot machine. A number is more credible when it just sits there. |
| Everything centred | Centred text has no consistent left edge, so the eye re-finds the start of every line. Fine for one hero, exhausting for a page. |
| `rounded-2xl` / `rounded-3xl` everywhere | Soft corners at every scale read as consumer-app default. |
| Fabricated live indicators ("real-time", pulsing dot) | If the data isn't live, this is a lie in the UI. Cheapest possible trust to lose. |
| Marketing superlatives ("cutting-edge", "Silicon Valley-level") | Claims without content. Replace with a number or delete. |

---

## 3. Typography

**One neutral grotesque for everything.** Inter, Söhne, Suisse, Helvetica Neue,
or the system stack. No display font for body copy, ever.

A display or geometric font applied site-wide is the loudest possible signal that
nobody made a typographic decision. Display faces are designed for one line at
48px; they are not designed for a 60-character paragraph. If you want brand
character in the type, earn it in the headline only, and prove it reads at
paragraph length before committing.

```css
html, body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  letter-spacing: -0.02em;   /* large type needs negative tracking */
  text-wrap: balance;        /* stops orphaned last words in headings */
}
```

### Scale

Hierarchy comes from **decisive jumps**, not incremental ones. If two levels are
close in size, the reader can't tell they're different levels, and the near-miss
looks like a mistake.

| Role | Size | Weight | Notes |
|---|---|---|---|
| Page headline (h1) | `2.5rem` → `4.25rem` | 600 | Tracking `-0.02em` to `-0.03em` |
| Section heading (h2) | `1.875rem` → `2.75rem` | 600 | |
| Card / item title (h3) | `1rem` → `1.25rem` | 600 | Much smaller than h2. The gap is the point. |
| Lead paragraph | `1.125rem` → `1.25rem` | 400 | `leading-relaxed`, capped at `max-w-2xl` |
| Body | `0.9375rem` (15px) | 400 | 15px reads better than 16px in dense UI |
| Small / meta | `0.875rem` | 400 | Muted colour |
| Eyebrow label | `0.6875rem` | 600 | Uppercase, `letter-spacing: 0.12em` |

### Two utilities worth defining globally

```css
/* Section label. Replaces the pill badge. */
.eyebrow {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

/* Figures read as data. Tabular digits stop numbers jittering when they change,
   and keep columns of figures aligned. */
.tnum {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.03em;
}
```

### Measure

Cap body text at `max-w-2xl` (~65 characters). Long lines lose the reader on the
carriage return. This single constraint does more for readability than any font
choice.

---

## 4. Colour

**Three roles, not a palette.**

1. **Ink** - near-black for text. Use `#0B1220` rather than pure `#000`: a slight
   blue-black is less harsh and looks intentional.
2. **Ground** - white, plus one off-white (`slate-50` / `slate-100`) for
   distinguishing surfaces.
3. **Accent** - exactly one hue. Links, primary buttons, focus rings. Nothing else.

Everything else is a grey step. Use a systematic scale (Tailwind's `slate` is a
good default) and stick to a handful of steps: `900` for headings, `600` for body,
`500` for meta, `300` for hairlines and inert marks, `200` for borders.

### The accent discipline

The accent is a **verb**: it marks things you can act on. The moment it becomes
decoration (gradient fills, tinted backgrounds, coloured icon tiles) it stops
marking anything, and the interface loses its only signal for interactivity.

If you catch yourself reaching for a second accent, the answer is almost always a
grey step or more whitespace.

### Contrast on tinted surfaces

Every foreground/background pair needs checking at 4.5:1 for body text and 3:1 for
large text. The common failure is a dark icon left on a newly-darkened tile, or
muted grey text moved onto a tinted panel. Both look fine to the person who made
the change and are unreadable to everyone else.

---

## 5. Layout

### Container

One container width, one horizontal padding, used everywhere:

```
max-w-[1400px] mx-auto px-6 lg:px-10
```

Consistency here is what makes sections feel like one document. Varying container
widths between sections is the fastest way to make a page feel assembled from parts.

### Asymmetric section headers

Do not centre section headings. Use a 12-column split: heading on the left five,
supporting copy on the right seven, offset down to align optically with the
heading's baseline.

```jsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
  <div className="lg:col-span-5">
    <p className="eyebrow mb-5">Section label</p>
    <h2 className="text-3xl lg:text-[2.75rem] leading-[1.1] font-semibold">
      The heading
    </h2>
  </div>
  <div className="lg:col-span-7 lg:pt-11">
    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
      Supporting copy that expands on the heading.
    </p>
  </div>
</div>
```

This creates a strong left edge down the page and gives the eye a consistent
starting point for every section.

### Section rhythm

Sections are separated by a **full-width hairline**, not by whitespace alone and
never by a coloured band per section:

```jsx
<section className="w-full border-b border-slate-200">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
```

Vertical padding `py-20 lg:py-28` throughout. When every section shares the same
rhythm, breaking it deliberately (a full-bleed dark band, say) becomes meaningful.

### Bordered grids instead of cards

This is the highest-leverage structural move in the system.

Instead of detached cards with shadows and gaps, build a grid whose cells **share
borders**, like a table. Put `border-t border-l` on the container and
`border-r border-b` on each cell:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
  {items.map((item) => (
    <div key={item.id} className="border-r border-b border-slate-200 p-8">
      ...
    </div>
  ))}
</div>
```

Why this works: it reads as one considered object rather than N floating things,
it holds up at any column count without gap-tuning, and it produces density
without clutter. Reflowing at a different breakpoint never leaves orphaned edges.

For a hover state, change the cell's **background**, never its position:
`hover:bg-slate-50`.

### Density

Whitespace is not the same as clarity. A page with four sentences and enormous
padding does not read as confident, it reads as having nothing to say. Aim for
enough information that the reader has something to scan, structured so scanning
is easy.

---

## 6. Depth, shape, motion

### Depth

**Prefer a 1px border to a shadow.** Shadows imply a z-axis that a document does
not have. Borders describe regions, which is what is actually happening.

If you need elevation for something genuinely floating (a dropdown, a modal), use
a single restrained shadow and keep it neutral, never tinted.

### Radius

Set one small radius token and use it. `0.25rem` is a good default; `0` is a
legitimate choice. Buttons and inputs get the token. Large panels get the token.

Exception: a panel that is deliberately a *brand object* rather than a document
element (see §8) can take a larger radius, because it is meant to read as a
distinct artefact.

### Motion

**Default to none.**

Permitted:
- Colour and opacity transitions on interactive elements, `duration-150`
- Small directional hints tied to meaning: an arrow moving 2px on link hover
- Instant state changes (accordion open/close)

Not permitted:
- Anything triggered by scroll position
- Anything that moves layout
- Anything that delays content

Every motion exception must survive this question: *what does the reader learn
from this movement?* "It feels premium" is not an answer.

Where motion is the component itself (a marquee, a carousel), it needs:

```css
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

This is not optional. Vestibular disorders are real and the OS-level preference
exists to be honoured.

---

## 7. Components

### Buttons

Primary is a solid accent fill with the radius token. Secondary is not a
grey-filled button, it's a **text link with a bottom border**, which is honestly
lower-emphasis rather than competing with the primary:

```jsx
{/* Primary */}
<button className="inline-flex items-center gap-2 bg-[--accent] hover:bg-[--accent-dark]
                   text-white px-6 py-3 text-[15px] font-medium rounded-sm
                   transition-colors duration-150">
  Primary action <ArrowRight className="w-4 h-4" />
</button>

{/* Secondary */}
<button className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-900
                   border-b border-slate-400 hover:border-slate-900 pb-0.5
                   transition-colors duration-150">
  Secondary action
</button>
```

Two full-weight buttons side by side means neither is primary.

### Lists

Use a muted em-rule or hyphen as the marker rather than a coloured dot or a check
icon. Check icons imply verification; most bulleted lists are not verified claims.

```jsx
<li className="flex gap-3 text-sm text-slate-600">
  <span className="text-slate-300 select-none">-</span>
  {item}
</li>
```

### Statistics

Large figure, `.tnum`, no animation. Label beneath in small muted text. Separate
with rules, not cards. The credibility comes from the number being plainly stated.

### Accordions

Number the items (`01`, `02`) in muted small text. Use `+` / `-` rather than a
rotating chevron. Open the first item by default so the interaction is
self-explanatory.

### Navigation

Solid background with a hairline bottom border. No translucent backdrop blur:
it costs a compositor layer on every scroll frame and makes text legibility depend
on what happens to be behind it. Active state is a colour change, not a pill.

---

## 8. Sanctioned exceptions

A system with no exceptions is a system people route around. Name them explicitly
so they stay deliberate.

**Product brand objects.** When a page showcases products that have their own
established visual identities, each panel should carry *its* branding, not the
host site's. Gradients, glows, and larger radii are correct there, because the
panel is a window into another product. Applying the host system to it would erase
the thing being shown.

**Motion-as-content.** A marquee or carousel is motion by definition. Constrain it:
pause on hover, honour `prefers-reduced-motion`, and keep it to one per page.

Record every exception in writing, next to the code, with the reason. Otherwise
the next person deletes it as a bug, or worse, copies it as precedent.

---

## 9. Copy

Design and copy fail together. A page cannot look considered while claiming to be
"cutting-edge, AI-powered, best-in-class".

- **Delete superlatives.** "Industry-leading" and "world-class" carry no
  information. If the claim is real, there's a number.
- **State the fact.** "Reduced infrastructure costs by 40% for a fintech client"
  beats "dramatically optimised cloud spend".
- **Never fabricate specificity.** Invented client names, fake live indicators, and
  made-up metrics are the worst failure mode here, because getting caught costs
  more than the copy was ever worth.
- **Sentence case for headings.** Title Case On Every Heading reads as a brochure.
- **Punctuation.** Prefer commas and full stops. Em dashes in every other sentence
  is itself a recognisable tell of machine-written copy.

Placeholder content is fine, but label it honestly. A placeholder that asserts
something false ("Trusted by" over logos of companies that aren't clients) is a
claim, not a placeholder, and it will ship if nobody flags it.

---

## 10. Applying this to an existing site

Order matters. Do the high-leverage structural work first, because it changes what
the smaller decisions should be.

1. **Typography.** Replace any display font used for body copy with a neutral
   grotesque. Biggest single visual improvement, usually one file.
2. **Strip the chrome.** Remove badges, gradient tiles, glows, hover transforms,
   scroll animations, count-ups. Purely subtractive, and the page improves
   immediately.
3. **Re-align.** Move centred sections to the asymmetric 12-column header.
4. **Re-structure.** Convert floating cards to shared-border grids.
5. **Restrain colour.** Reduce to ink, ground, one accent.
6. **Tighten radius and remove shadows.** Replace with hairlines.
7. **Edit the copy.** Delete superlatives, verify every claim.

### A note on legacy CSS

On a site with accumulated per-element font classes, a global `!important` font
rule is a legitimate way to enforce one typeface without editing every file. It is
a deliberate trade, not sloppiness, and it must be documented where someone will
find it, or a future cleanup will remove it and silently fragment the typography
across the whole site.

---

## Quick checklist

- [ ] One typeface, neutral, no display font in body copy
- [ ] Body text capped at ~65 characters
- [ ] One accent colour, used only for interactive elements
- [ ] Every section shares one container width and vertical rhythm
- [ ] Section headings left-aligned and asymmetric, not centred
- [ ] Grids share borders; no detached shadowed cards
- [ ] Radius token small and applied consistently
- [ ] No scroll-triggered motion, no hover transforms
- [ ] `prefers-reduced-motion` honoured wherever motion exists
- [ ] Contrast checked on every tinted surface
- [ ] No superlatives, no fabricated claims or metrics
- [ ] Exceptions documented next to the code, with reasons
