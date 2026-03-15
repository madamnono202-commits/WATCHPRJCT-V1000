# WristNerd.xyz — Homepage Template

> **URL:** `/`
> **Priority:** P0 — Launch Critical
> **Primary Keyword:** gift watches for men
> **Schema:** `WebSite`, `Organization`, `BreadcrumbList`, `SiteNavigationElement`
> **Target Word Count:** 800–1,200 (section-driven, not article-driven)

---

## Layout & Technical Notes

- **Mobile-first** responsive design
- Hero: Split layout on desktop (text 55% / image 45%), stacked on mobile (image top, text below)
- All product cards: horizontal scroll on mobile, 3-per-row on desktop
- Budget pills: horizontal scroll on mobile
- Email signup: single-row on desktop, stacked on mobile
- No sidebar on homepage
- Lazy-load all images; WebP with JPG fallback
- Open Graph image: Custom branded OG image (1200x630) — "WristNerd — Find the Perfect Watch Gift for Him"

---

## Page Content

### Announcement Bar (Optional — Seasonal)

> **Layout:** Full-width bar, 36px height, Gold (#C5A55A) background, Navy text
> **Behavior:** Dismissable with ✕, sets cookie, hidden for 7 days after dismissal
> **Copy rotates seasonally:**

**[Current seasonal version]:**

🎁 Father's Day Gift Guide is Live — Shop Our Top Picks → `[Link: /gift-guides/fathers-day/]`

> **Image notes:** None — text only
> **Mobile:** Same, slightly smaller text (13px)

---

### Header / Navigation

> **See global component spec in site-architecture.md §2.1.1**
> **Desktop:** Sticky, 64px, horizontal nav with mega-menu on hover
> **Mobile:** Sticky, 56px, hamburger menu, full-screen overlay

---

### SECTION 1: Hero
*(~100 words)*

> **Layout:** Split — text left (55%), lifestyle image right (45%)
> **Image:** Hero image — elegant watch on a gift box or on a man's wrist, warm tones, editorial quality. Alt text: "Elegant men's watch gift on display — WristNerd.xyz"
> **Desktop headline:** Playfair Display, 48px, Navy (#0D1F3C)
> **Mobile headline:** 32px, stacked above image

**H1: Find the Perfect Watch Gift for Him**

Curated guides to help you choose a watch he'll love — for every occasion and budget. No fluff, no fakes, just honest picks from people who actually know watches.

**Primary CTA:** `[Take the Gift Finder Quiz →]` — Gold (#C5A55A) button, Navy text, 48px height, rounded 8px
*Links to: `/gift-finder/`*

**Secondary CTA:** `[Browse Gift Guides →]` — Navy outline button, same size
*Links to: `/gift-guides/fathers-day/` (or current seasonal occasion)*

> **CTA placement:** Both buttons side-by-side on desktop, stacked full-width on mobile

---

### SECTION 2: Trust Bar
*(~40 words)*

> **Layout:** 4 equal columns on desktop, 2x2 grid on mobile
> **Style:** Icon + short text, Inter 14px, light gray background
> **No links — informational only**

| Icon | Text |
|---|---|
| ✅ | **50+ Expert Reviews** — Tested and scored by watch nerds |
| 🏆 | **Trusted Brands Only** — No junk, no knockoffs |
| 💰 | **Budget-Friendly Picks** — Great watches from $75 to $2,000 |
| 📝 | **Free & Unbiased** — Honest pros and cons on every pick |

---

### SECTION 3: Shop by Occasion
*(~60 words)*

> **Layout:** 6 cards, 3-per-row desktop, horizontal scroll mobile
> **Card style:** 200px height, rounded 12px, lifestyle image background with dark overlay, occasion name overlaid in white Playfair Display
> **Each card links to its occasion landing page**

**H2: Shop by Occasion**

Not sure where to start? Pick his occasion.

| Card | Image Description | Link |
|---|---|---|
| 🎁 Father's Day | Dad receiving a watch gift | `/gift-guides/fathers-day/` |
| 🎄 Christmas | Watch under Christmas tree | `/gift-guides/christmas/` |
| 🎂 Birthday | Watch in a birthday gift box | `/gift-guides/birthday/` |
| ❤️ Valentine's Day | Couple with watch gift | `/gift-guides/valentines-day/` |
| 🎓 Graduation | Graduate with watch | `/gift-guides/graduation/` |
| 💍 Anniversary | Elegant watch on velvet | `/gift-guides/anniversary/` |

> **Image notes:** Each card needs a lifestyle photo (not a product shot). Warm, emotional, gift-giving context. WebP format, lazy-loaded.
> **Mobile:** Horizontal scroll with snap points, partial next card visible to indicate scrollability

---

### SECTION 4: Shop by Budget
*(~30 words)*

> **Layout:** 5 horizontal pills/tabs, centered
> **Style:** 40px height, 16px Inter, gold (#C5A55A) outline, gold fill on active/hover
> **Each pill links to its budget landing page**

**H2: Shop by Budget**

Set your budget. We'll find the watch.

| Pill | Link |
|---|---|
| Under $100 | `/best-watches-under-100/` |
| Under $200 | `/best-watches-under-200/` |
| Under $300 | `/best-watches-under-300/` |
| Under $500 | `/best-watches-under-500/` |
| Luxury $500+ | `/best-luxury-gift-watches/` |

> **Mobile:** Horizontal scroll with scroll indicator dots

---

### SECTION 5: Editor's Picks
*(~200 words)*

> **Layout:** 3 product cards, max-width 360px each, white background, shadow (0 2px 12px rgba(0,0,0,0.08)), rounded 12px
> **Desktop:** 3-per-row
> **Mobile:** Horizontal scroll with snap points

**H2: Editor's Picks — Our Favorite Gift Watches Right Now**

These are the watches we'd personally gift this season. Expert-reviewed, gift-tested, and genuinely worth the money.

#### Card 1: Seiko Presage SRPD37

> **Image:** Product photo on white background, 360x360, alt text: "Seiko Presage SRPD37 — WristNerd Editor's Pick"

- ★★★★★ (4.8/5)
- **Great for:** Birthdays, Anniversary
- **Price range:** $$$

`[Check Price on Amazon →]` — Gold button, full card width, 40px height
*Affiliate link: Amazon Associates link for Seiko Presage SRPD37*
*rel="nofollow sponsored"*

`[Read Review →]` — Text link below button
*Links to: `/reviews/seiko-presage-srpd37/`*

#### Card 2: Tissot PRX

> **Image:** Product photo, same specs. Alt: "Tissot PRX — WristNerd Editor's Pick"

- ★★★★½ (4.6/5)
- **Great for:** Father's Day, Graduation
- **Price range:** $$$$

`[Check Price on Amazon →]`
`[Read Review →]` → `/reviews/tissot-prx/`

#### Card 3: Orient Bambino V2

> **Image:** Product photo, same specs. Alt: "Orient Bambino V2 — WristNerd Editor's Pick"

- ★★★★★ (4.9/5)
- **Great for:** Anniversary, Valentine's Day
- **Price range:** $$

`[Check Price on Amazon →]`
`[Read Review →]` → `/reviews/orient-bambino-v2/`

> **CTA notes:** Gold buttons are the primary conversion element. Use Amazon Associates tagged links. All affiliate links must have `rel="nofollow sponsored"`.

---

### SECTION 6: Gift Finder CTA Block
*(~40 words)*

> **Layout:** Full-width block, Navy (#0D1F3C) background, white text, centered, 80px vertical padding
> **CTA:** Full-width Gold button

**H2: Not Sure What to Get?**

Answer 4 quick questions and we'll recommend the perfect watch gift for him. It takes less than 60 seconds.

`[Start the Gift Finder Quiz →]` — Full-width gold button
*Links to: `/gift-finder/`*

> **Mobile:** Same layout, full-width button with 48px min-height for touch targets

---

### SECTION 7: Latest from the Blog
*(~60 words)*

> **Layout:** 3 blog post cards, same style as Editor's Picks cards but with featured image + title + "Read →" link
> **Desktop:** 3-per-row
> **Mobile:** Horizontal scroll

**H2: Latest from the Blog**

| Card | Title | Link |
|---|---|---|
| 1 | How to Choose the Right Watch Size for a Gift | `/blog/how-to-choose-watch-size/` |
| 2 | Automatic vs Quartz: Which Is Better for a Gift? | `/blog/automatic-vs-quartz-gift/` |
| 3 | 7 Signs He's a Watch Guy (And What to Get Him) | `/blog/signs-hes-a-watch-guy/` |

> **Image notes:** Each blog card needs a featured image (lifestyle/editorial). 360x200 aspect ratio, lazy-loaded.

---

### SECTION 8: Email Signup
*(~40 words)*

> **Layout:** Light gray (#F5F5F5) background, centered, 60px vertical padding
> **Form:** Single-row on desktop (email input + button), stacked on mobile
> **Button:** Gold (#C5A55A), "Subscribe →"
> **Integration:** ConvertKit or Mailchimp

**H2: Get Gift Watch Picks Before Everyone Else**

Join 1,000+ smart shoppers who get our seasonal picks, exclusive deals, and gift guides straight to their inbox. No spam, ever.

`[        Your email address        ]` `[Subscribe →]`

> **Micro-copy below form:** "We send 2–4 emails per month. Unsubscribe anytime."
> **No pop-up on this page** — the inline form is the email capture mechanism for homepage

---

### Footer

> **See global component spec in site-architecture.md §2.1.3**
> **Dark Navy (#0D1F3C) background, white text, 4-column layout**
> **Includes:** Logo, tagline, link columns (Gift Guides, Resources, Company), email signup, affiliate disclosure mini-text, copyright

---

## SEO / Meta

```html
<title>Best Gift Watches for Men 2026 — Curated Guides | WristNerd</title>
<meta name="description" content="Find the perfect watch gift for him. Expert-curated guides by occasion, budget & recipient. Trusted reviews, Gift-Worthiness Scores & a free Gift Finder Quiz.">
<link rel="canonical" href="https://wristnerd.xyz/">

<!-- Open Graph -->
<meta property="og:title" content="Best Gift Watches for Men 2026 — Curated Guides | WristNerd">
<meta property="og:description" content="Find the perfect watch gift for him. Expert-curated guides by occasion, budget & recipient.">
<meta property="og:image" content="[URL to OG image — 1200x630, branded]">
<meta property="og:url" content="https://wristnerd.xyz/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Best Gift Watches for Men 2026 | WristNerd">
<meta name="twitter:description" content="Expert-curated watch gift guides for every occasion & budget.">
<meta name="twitter:image" content="[URL to OG image]">
```

## Schema Markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "WristNerd",
  "url": "https://wristnerd.xyz/",
  "description": "Expert-curated watch gift guides for men — by occasion, budget & recipient.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wristnerd.xyz/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WristNerd",
  "url": "https://wristnerd.xyz/",
  "logo": "https://wristnerd.xyz/logo.png",
  "sameAs": []
}
```

---

## Internal Link Summary

| From Section | Links To | Anchor Context |
|---|---|---|
| Hero CTA (primary) | `/gift-finder/` | "Take the Gift Finder Quiz →" |
| Hero CTA (secondary) | `/gift-guides/fathers-day/` | "Browse Gift Guides →" |
| Occasion Cards (6) | `/gift-guides/{occasion}/` | Card click |
| Budget Pills (5) | `/best-watches-under-{x}/` | Pill click |
| Editor's Picks (3) | `/reviews/{watch}/` | "Read Review →" |
| Gift Finder CTA | `/gift-finder/` | "Start the Gift Finder Quiz →" |
| Blog Cards (3) | `/blog/{slug}/` | Card click / "Read →" |

---

## Pinterest Pin Angle

**Pin title:** "The Ultimate Men's Watch Gift Guide 2026 — Picks for Every Budget"
**Pin image:** Vertical (1000x1500), 3 watch photos arranged vertically, WristNerd logo, gold/navy brand colors
**Pin description:** "Find the perfect watch gift for him — curated guides for Father's Day, birthdays, Christmas & more. Budget-friendly picks from $75 to $2,000. Free Gift Finder Quiz included. #WatchGift #GiftGuide #MensWatches"
**Links to:** `/`

---

*Template complete. Ready for content writer or AI to fill with final polished copy.*
