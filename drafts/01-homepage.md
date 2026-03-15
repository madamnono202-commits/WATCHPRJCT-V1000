# DRAFT: Homepage — WristNerd.xyz

> **Page:** Homepage
> **URL:** `/`
> **Template:** Homepage
> **Status:** DRAFT — Awaiting approval
> **Word Count Target:** 800-1,200

---

## META INFORMATION

```
Meta Title: Gift Watches for Men — Curated Watch Gift Guides | WristNerd
Meta Description: Find the perfect watch gift for him. Expert-curated guides by occasion, budget, and recipient. Trusted reviews of Seiko, Citizen, Tissot & more. Free gift finder quiz.
Canonical URL: https://wristnerd.xyz/
Robots: index, follow
OG Title: Gift Watches for Men — Curated Watch Gift Guides | WristNerd
OG Description: Find the perfect watch gift for him. Expert-curated guides by occasion, budget, and recipient.
OG Image: {{OG_IMAGE: WristNerd homepage social share — elegant watch on gift box}}
```

## SCHEMA PLACEHOLDERS

```json
// Schema 1: WebSite
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "WristNerd",
  "url": "https://wristnerd.xyz/",
  "description": "Expert-curated watch gift guides for men. Find the perfect watch by occasion, budget, or recipient.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wristnerd.xyz/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

// Schema 2: Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WristNerd",
  "url": "https://wristnerd.xyz/",
  "logo": "https://wristnerd.xyz/images/logo.png",
  "sameAs": []
}

// Schema 3: ItemList (Editor's Picks)
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Editor's Picks — Favorite Gift Watches",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://wristnerd.xyz/reviews/seiko-presage-srpb41/" },
    { "@type": "ListItem", "position": 2, "url": "https://wristnerd.xyz/reviews/tissot-prx/" },
    { "@type": "ListItem", "position": 3, "url": "https://wristnerd.xyz/reviews/orient-bambino-v2/" }
  ]
}
```

## LAYOUT NOTES

```
Desktop: Max-width 1280px centered. Two-column hero (55% text / 45% image).
         Occasion cards in 3-per-row grid. Budget pills in horizontal row.
         Editor's Picks in 3-column grid. Blog cards in 3-column grid.

Mobile:  Full-width stacked. Hero image above text. Occasion cards 2-per-row.
         Budget pills horizontal scroll. Editor's Picks horizontal scroll.
         Blog cards stacked. All CTAs full-width tappable (min 48px height).

Sticky header: 64px desktop / 56px mobile.
```

---

## PAGE CONTENT

---

### HERO SECTION

**H1: Find the Perfect Watch Gift for Him**

{{HERO_IMAGE: Elegant men's watch resting on an open gift box with navy ribbon, warm ambient lighting, lifestyle photography — NOT a product-on-white shot. Conveys gifting, warmth, and premium quality.}}

Curated guides to help you choose a watch he'll love — for every occasion and budget.

Whether you're shopping for Father's Day, Christmas, a birthday, or "just because," we've tested and reviewed 50+ watches so you don't have to guess. Every pick on WristNerd is hand-selected for gift-worthiness — because a great watch isn't just a gift, it's a daily reminder of you.

[Take the Gift Finder Quiz →](#) *(Gold button, primary CTA)*
[Browse Gift Guides →](/gift-guides/fathers-day/) *(Navy outline button, secondary CTA)*

---

### TRUST BAR

| Icon | Text |
|---|---|
| (expert icon) | **50+ Expert Reviews** — Every watch tested and scored |
| (shield icon) | **Trusted Brands Only** — Seiko, Citizen, Tissot & more |
| (wallet icon) | **Budget-Friendly Picks** — Great watches from $75 to $2,000 |
| (heart icon) | **Free & Unbiased Always** — No paid placements, ever |

*Layout: 4 equal columns on desktop, 2x2 grid on mobile. Inter 14px, Navy text, light gray background.*

---

### SHOP BY OCCASION

**H2: Shop by Occasion**

Not sure where to start? Pick his occasion — we'll handle the rest.

| Card | Link |
|---|---|
| {{OCCASION_IMAGE: Father opening gift, warm tones}} **Father's Day** | [/gift-guides/fathers-day/](/gift-guides/fathers-day/) |
| {{OCCASION_IMAGE: Christmas tree with watch box underneath}} **Christmas** | [/gift-guides/christmas/](/gift-guides/christmas/) |
| {{OCCASION_IMAGE: Birthday celebration with elegant gift}} **Birthday** | [/gift-guides/birthday/](/gift-guides/birthday/) |
| {{OCCASION_IMAGE: Romantic dinner setting with gift box}} **Valentine's Day** | [/gift-guides/valentines-day/](/gift-guides/valentines-day/) |
| {{OCCASION_IMAGE: Couple celebrating milestone}} **Anniversary** | [/gift-guides/anniversary/](/gift-guides/anniversary/) |
| {{OCCASION_IMAGE: Graduate in cap and gown receiving gift}} **Graduation** | [/gift-guides/graduation/](/gift-guides/graduation/) |

*Layout: 3-per-row desktop, 2-per-row tablet, horizontal scroll mobile. Cards have rounded corners (12px), subtle shadow, image background with occasion name overlaid in white text.*

---

### SHOP BY BUDGET

**H2: Shop by Budget**

Set your budget. We'll find the watch.

[Under $100](/best-watches-under-100/) | [Under $200](/best-watches-under-200/) | [Under $300](/best-watches-under-300/) | [Under $500](/best-watches-under-500/) | [Luxury $500+](/best-luxury-gift-watches/)

*Layout: Horizontal pill buttons, gold (#C5A55A) outline on hover/active state. Horizontal scroll on mobile. Each pill 40px height, Inter 16px.*

---

### EDITOR'S PICKS

**H2: Our Favorite Gift Watches Right Now**

These are the watches we'd personally gift this season — tested, scored, and approved by the WristNerd team.

---

#### Pick #1: Seiko Presage SRPB41

{{PRODUCT_IMAGE: Seiko Presage SRPB41 — front-facing, white background, high-resolution}}

**Seiko Presage SRPB41 "Cocktail Time"**
Rating: 4.8/5 stars | Gift-Worthiness Score: 9.2/10

Great for: Birthdays, Anniversary, Valentine's Day

The Seiko Presage SRPB41 is the kind of watch that makes someone's jaw drop — and then drop again when they hear the price. The sunburst "cocktail time" dial is genuinely stunning, the 4R35 automatic movement is reliable, and it comes in a presentation box that feels like a luxury experience. If you're looking for a watch that punches well above its weight as a gift, this is it.

- Automatic movement (no battery needed)
- Stunning cocktail-inspired dial
- Excellent value under $350

[Check Price on Amazon →](#) | [Read Full Review →](/reviews/seiko-presage-srpb41/)

---

#### Pick #2: Tissot PRX Powermatic 80

{{PRODUCT_IMAGE: Tissot PRX — front-facing, white background, high-resolution}}

**Tissot PRX Powermatic 80**
Rating: 4.7/5 stars | Gift-Worthiness Score: 9.3/10

Great for: Father's Day, Graduation, Self-Gift

The Tissot PRX is the watch that everyone in the watch world has been talking about — and for good reason. Swiss-made with an 80-hour power reserve, an integrated bracelet that's incredibly comfortable, and retro-modern styling that works with everything from a suit to a t-shirt. It's the ultimate "one watch for every occasion" gift.

- Swiss-made with 80-hour power reserve
- Integrated bracelet, retro-modern design
- One of the best Swiss watches under $700

[Check Price on Amazon →](#) | [Read Full Review →](/reviews/tissot-prx/)

---

#### Pick #3: Orient Bambino V2

{{PRODUCT_IMAGE: Orient Bambino V2 — front-facing, white background, high-resolution}}

**Orient Bambino V2**
Rating: 4.9/5 stars | Gift-Worthiness Score: 9.0/10

Great for: Anniversary, Valentine's Day, Graduation

The Orient Bambino is the internet's favorite affordable dress watch — and it earns that title. The domed crystal catches light beautifully, the in-house automatic movement is impressive at this price, and it looks like it costs three times what it does. For a classy, elegant gift under $200, nothing beats it.

- In-house automatic movement
- Domed mineral crystal, beautiful dial
- Incredible value under $200

[Check Price on Amazon →](#) | [Read Full Review →](/reviews/orient-bambino-v2/)

---

*Layout: 3-column grid on desktop, horizontal scroll on mobile. Each card: max-width 360px, white background, shadow (0 2px 12px rgba(0,0,0,0.08)), rounded 12px. Gold CTA button full card width, 40px height.*

---

### GIFT FINDER CTA BLOCK

*Full-width section, Navy (#0D1F3C) background, white text, centered, 80px vertical padding.*

**Not sure what to get?**

Answer 4 quick questions and we'll recommend the perfect watch gift for him. No watch knowledge required — we'll match you based on who he is, the occasion, your budget, and his style.

Takes about 60 seconds. Zero pressure.

[Start the Gift Finder Quiz →](/gift-finder/) *(Gold button, full-width, centered)*

---

### LATEST FROM THE BLOG

**H2: Latest from the Blog**

Helpful guides, honest advice, and everything you need to buy the perfect watch gift with confidence.

---

#### Blog Card #1

{{BLOG_IMAGE: Wrist measurement with tape measure, instructional style}}

**[How to Choose the Right Watch Size for a Gift](/blog/how-to-choose-watch-size/)**
Don't guess — use our sizing guide to pick the perfect fit without him knowing.
[Read the Guide →](/blog/how-to-choose-watch-size/)

---

#### Blog Card #2

{{BLOG_IMAGE: Automatic watch movement visible through caseback, macro photography}}

**[Automatic vs Quartz: Which Is Better for a Gift?](/blog/automatic-vs-quartz-gift/)**
The great movement debate, settled — with gift-giving context.
[Read the Guide →](/blog/automatic-vs-quartz-gift/)

---

#### Blog Card #3

{{BLOG_IMAGE: Person looking at phone confused while shopping, relatable lifestyle}}

**[Watch Brands to Avoid (And What to Buy Instead)](/blog/watch-brands-to-avoid/)**
Before you buy, make sure you're not wasting money on an overpriced fashion watch.
[Read the Guide →](/blog/watch-brands-to-avoid/)

---

*Layout: 3-column grid desktop, stacked on mobile. Cards: image on top, title + excerpt below, "Read →" link.*

---

### EMAIL SIGNUP SECTION

*Light gray (#F5F5F5) background, centered, 60px vertical padding.*

**H2: Get Gift Watch Picks Before Everyone Else**

Join 1,000+ smart shoppers who get our seasonal watch picks, exclusive deals, and gift guides delivered straight to their inbox. No spam, no fluff — just the good stuff.

[Your email address] [Subscribe →]

*We respect your privacy. Unsubscribe anytime. See our [Privacy Policy](/privacy-policy/).*

---

### FOOTER

*Navy (#0D1F3C) background, white text. See wireframe spec for full layout.*

**Affiliate Disclosure (always visible in footer):**
WristNerd is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. This never influences our recommendations. [Learn more →](/affiliate-disclosure/)

---

## INTERNAL LINKS SUMMARY

| Destination | Anchor Text | Location on Page |
|---|---|---|
| `/gift-guides/fathers-day/` | "Father's Day" | Occasion card |
| `/gift-guides/christmas/` | "Christmas" | Occasion card |
| `/gift-guides/birthday/` | "Birthday" | Occasion card |
| `/gift-guides/valentines-day/` | "Valentine's Day" | Occasion card |
| `/gift-guides/anniversary/` | "Anniversary" | Occasion card |
| `/gift-guides/graduation/` | "Graduation" | Occasion card |
| `/best-watches-under-100/` | "Under $100" | Budget pill |
| `/best-watches-under-200/` | "Under $200" | Budget pill |
| `/best-watches-under-300/` | "Under $300" | Budget pill |
| `/best-watches-under-500/` | "Under $500" | Budget pill |
| `/best-luxury-gift-watches/` | "Luxury $500+" | Budget pill |
| `/reviews/seiko-presage-srpb41/` | "Read Full Review →" | Editor's Pick #1 |
| `/reviews/tissot-prx/` | "Read Full Review →" | Editor's Pick #2 |
| `/reviews/orient-bambino-v2/` | "Read Full Review →" | Editor's Pick #3 |
| `/gift-finder/` | "Take the Gift Finder Quiz →" | Hero CTA + mid-page block |
| `/blog/how-to-choose-watch-size/` | "How to Choose the Right Watch Size for a Gift" | Blog card |
| `/blog/automatic-vs-quartz-gift/` | "Automatic vs Quartz: Which Is Better for a Gift?" | Blog card |
| `/blog/watch-brands-to-avoid/` | "Watch Brands to Avoid" | Blog card |
| `/privacy-policy/` | "Privacy Policy" | Email signup, footer |
| `/affiliate-disclosure/` | "Learn more →" | Footer disclosure |

---

*End of Homepage Draft*
