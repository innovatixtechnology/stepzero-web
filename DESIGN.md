# Step Zero with Palasha — Design System

> A living document of the visual language, tokens, and conventions used across the Step Zero website. Last updated: May 2026.

---

## Brand Essence

**Tone:** Warm, grounded, authoritative yet approachable. The design should feel like a quiet confidence — never loud, never cold. Think of a well-lit consultation room: calm, intentional, and professional.

**Look & Feel:**
- Soft, warm, cream-dominant canvases with charcoal typography
- Gold accents used sparingly for emphasis and CTAs
- Sage green as a calming secondary for dividers, backgrounds, and secondary actions
- Terracotta for pull quotes and sub-labels
- Generous whitespace with 1400px max content width
- Playful serif headlines paired with clean, readable sans-serif body text

---

## Color Palette

| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| `cream` | `#FAF7F2` | Primary page background, card backgrounds on dark sections |
| `charcoal` | `#2C2C2C` | All body copy, headings, footer background |
| `gold` | `#F0B429` | Primary CTAs, accent links, pull quote highlights, selection background, decorative rules |
| `sage` | `#7A9E7E` | Secondary buttons, dividers, form focus rings, success states, calm background tints |
| `terracotta` | `#C17B5C` | Pull quotes, sub-labels, italic secondary text, gradient endpoints |

### Opacity Modifiers
- `charcoal/80` — secondary body text on cream backgrounds
- `charcoal/70` — tertiary text, captions, placeholders
- `charcoal/60` — muted labels, disabled states
- `charcoal/50` — footer legal links
- `charcoal/10` — subtle borders (`border-charcoal/10`)
- `cream/10` — footer top border on dark footer
- `cream/60` — footer column labels (uppercase)
- `cream/80` — footer body text
- `cream/50` — footer copyright text
- `gold/20` — subtle gold tints for hover backgrounds, icon circles

---

## Typography

### Font Families

| Purpose | Font | Weights | Style |
|---------|------|---------|-------|
| Display / Headlines | `Playfair Display` (serif) | 400, 600, 700 | normal, italic |
| Body / UI | `DM Sans` (sans-serif) | 400, 500, 600, 700 | normal |

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Notes |
|---------|---------------|---------------|--------|-------------|-------|
| H1 (Page Hero) | 44px / 2.75rem | 30px / 1.875rem | 700 (bold) | 1.1 | Playfair Display |
| H2 (Section Title) | 36px / 2.25rem | 24px / 1.5rem | 700 (bold) | 1.15 | Playfair Display |
| H3 (Card Title) | 18px / 1.125rem | 16px / 1rem | 600 (semibold) | 1.3 | Playfair Display |
| H4 (Footer Column) | 14px / 0.875rem | 14px | 700 (bold) | 1.4 | DM Sans, uppercase, tracking 0.08em |
| Body | 16px / 1rem | 15px / 0.9375rem | 400 | 1.7 | DM Sans |
| Body Large | 18px / 1.125rem | 16px / 1rem | 400 | 1.7 | DM Sans |
| Small / Label | 14px / 0.875rem | 13px / 0.8125rem | 500 | 1.5 | DM Sans |
| Caption | 12px / 0.75rem | 11px / 0.6875rem | 400 | 1.4 | DM Sans |
| Button | 16px / 1rem | 15px / 0.9375rem | 700 (bold) | 1 | DM Sans |

### Special Typography Patterns
- **Uppercase Labels:** All-caps with `letter-spacing: 0.08em` (tracking-[0.08em]) for section labels, category tags, and footer column headers.
- **Pull Quotes:** Playfair Display, italic, 18–22px, terracotta or gold color, often centered.
- **Italic Sub-labels:** DM Sans italic, 18px, terracotta — used beneath primary headings.

---

## Spacing System

### Layout Grid
- **Max Content Width:** 1400px
- **Horizontal Padding:**
  - Mobile: `24px` (px-6)
  - Tablet (md): `48px` (md:px-12)
  - Desktop (lg): `64px` (lg:px-16)
  - Wide (xl): `96px` (xl:px-24)
- **Container Class:** `w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto`

### Section Spacing
- **Desktop:** `128px` top padding (pt-32), `80px` bottom padding (pb-20)
- **Tablet/Mobile:** `96px` top padding (pt-24), `64px` bottom padding (pb-16)
- **Hero Offset:** Navbar is sticky, so first section gets extra top padding to clear the nav

### Component Spacing
- **Card Padding:** 24–32px (p-6 to p-8)
- **Card Gap (Grid):** 24px (gap-6) to 32px (gap-8)
- **Button Padding:** 16px vertical, 32px horizontal (py-4 px-8)
- **Form Input Padding:** 12px vertical, 16px horizontal (py-3 px-4)
- **Stack Gap (Vertical Rhythm):** 16px (space-y-4) to 24px (space-y-6)

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small inline elements |
| `rounded-lg` | 8px | **Default** — buttons, cards, inputs, form fields |
| `rounded-xl` | 12px | Medium cards, image containers |
| `rounded-2xl` | 16px | Hero images, large visual blocks, mockup containers |
| `rounded-full` | 9999px | Pills, category tags, avatars, icon circles |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 2px 12px rgba(0,0,0,0.04)` | Default card elevation, form containers |
| `shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | Card hover state, quick-link blocks |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.1)` | Blog card hover, elevated components |
| `shadow-xl` | `0 8px 30px rgba(0,0,0,0.08)` | Hero mockup images, large visual blocks |

---

## Buttons

### Primary Button (Gold)
```
Background: #F0B429
Text: #FFFFFF
Font: DM Sans, 16px, bold
Padding: 16px 32px (py-4 px-8)
Border Radius: 8px (rounded-lg)
Hover: #D9A123 (slightly darker gold)
Transition: colors
```

### Secondary Button (Sage Outline)
```
Background: transparent
Border: 1px solid #7A9E7E
Text: #7A9E7E
Font: DM Sans, 16px, bold
Padding: 16px 32px
Border Radius: 8px
Hover: Background fills with #7A9E7E, text becomes white
Transition: colors
```

### Text Link
```
Color: Inherit (contextual)
Hover: #F0B429
Transition: colors
Underline on hover (optional, context-dependent)
```

---

## Form Elements

### Text Input / Email / Select
```
Background: #FFFFFF
Border: 1px solid rgba(122, 158, 126, 0.3)
Border Radius: 8px (rounded-lg)
Padding: 12px 16px (py-3 px-4)
Font: DM Sans, 14px
Focus State: Border #F0B429 + ring-1 ring-[#F0B429]
Transition: colors
```

### Textarea
```
Same as input, but:
Rows: 5 (min-height)
Resize: none
```

### Label
```
Font: DM Sans, 14px, medium (500)
Color: #2C2C2C
Margin Bottom: 8px (mb-2)
```

---

## Cards

### Standard Card
```
Background: #FFFFFF
Border Radius: 8px (rounded-lg)
Padding: 24–32px (p-6 to p-8)
Shadow: 0 2px 12px rgba(0,0,0,0.04)
Hover Shadow: 0 4px 16px rgba(0,0,0,0.08)
```

### Blog Card
```
Same as standard card, but:
Overflow: hidden (for image)
Hover Shadow: 0 8px 24px rgba(0,0,0,0.1)
Image Aspect Ratio: 16:9
```

---

## Dividers & Decorative Elements

| Element | Value |
|---------|-------|
| Gold Horizontal Rule | `w-12 h-px bg-[#F0B429] mb-6` — used as a small accent above section headings |
| Footer Top Border | `border-t border-[#FAF7F2]/10` |
| Section Separator | Gold rule (w-12) between major page sections |
| Gradient Background | `bg-gradient-to-br from-[#C17B5C]/15 to-[#7A9E7E]/15` — used for image placeholders and mockup blocks |

---

## Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| `sm` | 640px | Minor adjustments |
| `md` | 768px | **Primary mobile breakpoint** — hamburger nav, single-to-multi-column layouts |
| `lg` | 1024px | Three-column grids appear, wider padding |
| `xl` | 1280px | Maximum padding, full desktop layout |
| `2xl` | 1536px | Ultra-wide adjustments |

---

## Z-Index Hierarchy

| Layer | Z-Index | Element |
|-------|---------|---------|
| Modal / Overlay | 50+ | (Reserved for future use) |
| Sticky Navbar | 50 | `z-50` — always on top |
| Dropdown / Mobile Menu | 40 | Navbar dropdown |
| Content | 1–10 | Standard page content |

---

## Selection Styling

```css
::selection {
  background: #F0B429;
  color: #FFFFFF;
}
```

---

## Accessibility Notes

- All body text uses `charcoal` (#2C2C2C) on `cream` (#FAF7F2) for a contrast ratio well above WCAG AA (4.5:1).
- Gold (#F0B429) on white does **not** meet WCAG AA for small text — only use gold for large buttons (18px+ bold) or decorative elements.
- Sage (#7A9E7E) on cream meets AA for large text but use cautiously for small body copy.
- All interactive elements have visible focus states (gold ring).
- Smooth scroll is enabled globally (`scroll-behavior: smooth`).

---

## Asset Conventions

### Images
- All real photography should be optimized WebP, 80% quality.
- Placeholder images use the terracotta-to-sage gradient (`bg-gradient-to-br from-[#C17B5C]/15 to-[#7A9E7E]/15`).
- Aspect ratios: 16:9 for blog cards, 4:5 for portrait photos, 3:4 for book mockups.

### Icons
- Inline SVG only — no icon library dependency.
- Icon style: Simple, single-color (gold or charcoal), stroke-based where possible.
- Common sizes: 20×20px (UI), 24×24px (social), 48×48px (feature icons).

---

## Component Quick Reference

### Navbar
- Sticky top, full width
- Background: cream with backdrop blur on scroll
- Shadow on scroll: `shadow-sm`
- CTA Button: "Book a Clarity Call" (gold)
- Mobile: Hamburger menu, slide-down panel

### Footer
- Background: charcoal (#2C2C2C)
- Text: cream variants
- 3-column grid on desktop, single column on mobile
- Bottom strip with copyright + legal links
- Instagram link in brand column

### Page Hero
- Two-column layout: 55% text / 45% image (desktop)
- Single column, stacked (mobile)
- Gold horizontal rule above headline
- Italic terracotta sub-label beneath headline

---

## File Location

Design tokens are defined in `src/app/globals.css` using Tailwind CSS v4 `@theme inline` syntax and applied globally in `src/app/layout.tsx`.
