# WristNerd.xyz — Gift Finder Quiz Results Page Template

> **URL:** `/gift-finder/results/` (dynamic — `/gift-finder/results/?r=husband&o=birthday&b=200&s=classic`)
> **Priority:** P0 — Launch Critical
> **Primary Keyword:** watch gift finder quiz results
> **Secondary Keywords:** best watch gift recommendation, personalized watch gift, watch gift quiz
> **Schema:** `Product` (top 3 results), `BreadcrumbList`
> **Target Word Count:** 400–600 (lean — results-focused, not editorial)

---

## Layout & Technical Notes

- **Single-column centered layout** — no sidebar, max-width 720px
- **Mobile-first** — this page will get heavy mobile traffic from quiz completions
- **Dynamic content:** Results are generated based on quiz answers (Recipient, Occasion, Budget, Style)
- **Shareable URL:** Query params encode quiz answers so results can be bookmarked/shared
- **No heavy editorial copy** — this is a conversion page, not a reading page
- **Email capture:** Prominent between results and related content
- **Page speed critical:** Results must load instantly — no heavy images above the fold, product images lazy-loaded
- **All affiliate links:** `rel="nofollow sponsored"`
- **localStorage:** Save quiz answers to recall if user returns later

---

## Page Content

### Breadcrumbs

```
Home > Gift Finder Quiz > Your Results
```

> **Schema:** `BreadcrumbList` JSON-LD

---

### SECTION 1: Results Header
*(~40 words)*

> **Layout:** Centered, white background, generous padding (40px top)
> **Confetti animation (optional):** Subtle CSS confetti or sparkle effect on first load — fun but not distracting, plays once, no loop
> **Headline:** Playfair Display, 36px desktop / 26px mobile, Navy

**H1: We Found Your Perfect Watch Gift 🎯**

Based on your answers, here are our top 3 picks — hand-matched to your recipient, occasion, and budget.

> **Dynamic subline (personalized):**

*Showing results for: **[Husband]** · **[Birthday]** · **[Under $200]** · **[Classic style]***

> **Note:** The bracketed values are dynamically populated from quiz answers. If any answer is missing, omit that tag.

---

### SECTION 2: Quiz Answer Summary
*(~20 words — UI component)*

> **Layout:** 4 horizontal pills/badges showing the user's quiz selections
> **Style:** Gold (#C5A55A) outline pills, 32px height, Inter 14px
> **Mobile:** 2x2 grid

| Badge | Value |
|---|---|
| 👤 Recipient | Husband |
| 🎁 Occasion | Birthday |
| 💰 Budget | Under $200 |
| ⌚ Style | Classic |

`[Retake Quiz →]` — Small text link, Navy, below badges
*Links to: `/gift-finder/`*

---

### SECTION 3: Top 3 Results
*(~250 words total across 3 cards)*

> **Layout:** 3 stacked product cards, full-width (max 720px), white background, shadow, rounded 12px, 24px padding
> **Ranking:** Numbered #1, #2, #3 with gold badge on #1
> **Each card is self-contained — image + key info + CTAs**

---

#### RESULT CARD #1 (Best Match)

> **Layout:** Horizontal on desktop (image left 35% + content right 65%), stacked on mobile
> **Gold badge:** "🏆 #1 Best Match" — top-left corner of card, gold background, white text, 24px font

**🏆 #1 Best Match**

**H2: Orient Bambino V2**

> **Image:** Product photo, 280x280, lazy-loaded. Alt: "Orient Bambino V2 — Your #1 Match"

**★★★★★ (4.9/5) · Gift Score: 9.1/10**

**Why it's your match:**
*(50–80 words — dynamically composed based on quiz answers)*

The Orient Bambino V2 is the perfect birthday gift for your husband. Its classic dress watch design fits his style preferences, and at ~$150, it's well within your budget while looking like it costs twice the price. The in-house automatic movement adds a "special" factor that makes this more than just a watch — it's a statement.

**Quick Specs:**

| Movement | Case | WR | Crystal |
|---|---|---|---|
| Automatic | 40.5mm | 30m | Mineral (AR) |

**Best for:** Birthday, Anniversary · **Great with:** Dress shirts, smart casual

`[Check Price on Amazon →]` — Gold button, full-width, 44px height
*Affiliate link: Amazon Associates tagged URL*

`[Read Full Review →]` — Text link, Inter 14px
*Links to: `/reviews/orient-bambino-v2/`*

---

#### RESULT CARD #2 (Strong Alternative)

> **Layout:** Same as Card #1 but no gold badge — silver/gray "#2" badge instead

**#2 Strong Alternative**

**H2: Seiko 5 Sports SRPD55**

> **Image:** Product photo, 280x280. Alt: "Seiko 5 SRPD55 — Alternative Match"

**★★★★☆ (4.3/5) · Gift Score: 7.8/10**

**Why it matched:**
*(50–80 words — dynamic)*

If your husband leans more casual or active, the Seiko 5 SRPD55 is a fantastic alternative. It's sportier than the Bambino, with 100m water resistance and a stainless steel bracelet. At ~$175, it's still under budget and offers more ruggedness for everyday wear.

**Quick Specs:**

| Movement | Case | WR | Crystal |
|---|---|---|---|
| Automatic | 42.5mm | 100m | Hardlex |

`[Check Price on Amazon →]`
`[Read Full Review →]` → `/reviews/seiko-5-srpd55/`

---

#### RESULT CARD #3 (Budget-Friendly Pick)

> **Layout:** Same as Card #2 — bronze/copper "#3" badge

**#3 Budget-Friendly Pick**

**H2: Citizen Eco-Drive BM8180-03E**

> **Image:** Product photo, 280x280. Alt: "Citizen Eco-Drive BM8180 — Budget Pick"

**★★★★☆ (4.3/5) · Gift Score: 8.0/10**

**Why it matched:**
*(50–80 words — dynamic)*

Want to save even more? The Citizen Eco-Drive BM8180 is solar-powered — meaning no battery changes, ever. At under $100, it's the most affordable option that still feels like a "real" watch. The field-watch design is understated and versatile.

**Quick Specs:**

| Movement | Case | WR | Crystal |
|---|---|---|---|
| Solar (Eco-Drive) | 37mm | 100m | Mineral |

`[Check Price on Amazon →]`
`[Read Full Review →]` → `/reviews/citizen-eco-drive-bm8180/`

---

### SECTION 4: Compare Your Matches
*(~20 words — structured data)*

> **Layout:** Compact comparison table, full-width, collapsible on mobile (default collapsed)

**H2: Compare Your Matches**

| | #1 Orient Bambino | #2 Seiko 5 | #3 Citizen Eco-Drive |
|---|---|---|---|
| Price | ~$150 | ~$175 | ~$90 |
| Movement | Automatic | Automatic | Solar |
| Case Size | 40.5mm | 42.5mm | 37mm |
| Water Resist | 30m | 100m | 100m |
| Gift Score | 9.1/10 | 7.8/10 | 8.0/10 |
| Best For | Elegant gifting | Active lifestyle | Zero maintenance |

---

### SECTION 5: Email Capture
*(~50 words)*

> **Layout:** Full-width callout block, Navy (#0D1F3C) background, white text, centered
> **Placement:** Immediately after results — this is the primary email conversion point
> **Incentive:** Save results + get deal alerts

**H2: Save Your Results & Get Deal Alerts**

We'll email you these results plus notify you if any of your matches go on sale. No spam — just deals on the watches you actually want.

`[        Your email address        ]` `[Save My Results →]`

> **Micro-copy:** "We'll send your results and notify you of price drops. Unsubscribe anytime."
> **Behavior:** On submit, email is added to ConvertKit/Mailchimp with tags matching quiz answers (recipient: husband, occasion: birthday, budget: 200, style: classic). This enables targeted email campaigns.
> **Post-submit:** Show confirmation message: "✓ Results saved! Check your inbox."

---

### SECTION 6: Share Results
*(~15 words — UI component)*

> **Layout:** Centered row of share buttons + copy link button
> **Below email capture**

**Share your results:**

`[📋 Copy Link]` `[📧 Email]` `[📌 Pinterest]` `[💬 Text/iMessage]`

> **Copy Link:** Copies the current URL (with query params) to clipboard. Toast notification: "Link copied!"
> **Email:** Opens mailto: with pre-filled subject "Check out my watch quiz results from WristNerd" and body with the results URL
> **Pinterest:** Opens Pinterest share dialog with results page OG image
> **Text/iMessage:** Opens SMS share on mobile (sms: URI scheme)

---

### SECTION 7: Not Quite Right?
*(~40 words)*

> **Layout:** Centered text block, light background

**H2: Not Quite What You're Looking For?**

No worries — here are some other ways to find the perfect watch:

- `[Retake the Quiz →]` → `/gift-finder/`
- `[Browse by Budget →]` → `/best-watches-under-200/` (matched to user's budget selection)
- `[Browse by Occasion →]` → `/gift-guides/birthday/` (matched to user's occasion selection)
- `[See All Reviews →]` → `/reviews/` (if review index exists) or homepage

> **Note:** The links here are dynamically matched to the user's quiz answers. "Browse by Budget" links to the budget page matching their selection; "Browse by Occasion" links to the occasion they chose.

---

### SECTION 8: Related Guides
*(~20 words)*

> **Layout:** 3 compact cards
> **Dynamically selected based on quiz answers**

**H2: Recommended Reading**

| Card | Link | Why Shown |
|---|---|---|
| Best Watches Under $200 | `/best-watches-under-200/` | Matches budget answer |
| Watch Gifts for Husbands | `/watches-for-husbands/` | Matches recipient answer |
| Birthday Watch Gift Guide | `/gift-guides/birthday/` | Matches occasion answer |

---

### Footer

> **Standard global footer**

---

## Dynamic Matching Logic

> **This section documents how quiz answers map to watch recommendations. It's for developers/content architects, not displayed on the page.**

### Quiz Inputs (from 4-step quiz):

1. **Recipient:** Husband, Dad, Boyfriend, Son, Friend
2. **Occasion:** Father's Day, Christmas, Birthday, Valentine's, Anniversary, Graduation
3. **Budget:** Under $100, Under $200, Under $300, Under $500, Luxury ($500+)
4. **Style:** Classic/Dress, Sporty/Active, Minimalist/Modern, Rugged/Outdoor, Luxury/Statement

### Watch Database Tags (each watch is tagged with):

```
{
  "name": "Orient Bambino V2",
  "price": 150,
  "budget_tier": ["under-200", "under-300", "under-500"],
  "style": ["classic", "dress"],
  "recipient_fit": ["husband", "dad", "boyfriend", "son"],
  "occasion_fit": ["birthday", "anniversary", "valentines", "graduation", "christmas"],
  "gift_score": 9.1,
  "movement": "automatic",
  "water_resistance": 30,
  "review_url": "/reviews/orient-bambino-v2/"
}
```

### Matching Algorithm (simplified):

1. Filter watches by **budget** (must be within selected budget tier)
2. Filter by **style** (must match selected style tag)
3. Score remaining watches:
   - +2 points if `recipient_fit` includes selected recipient
   - +2 points if `occasion_fit` includes selected occasion
   - +1 point per 1.0 of `gift_score` (e.g., 9.1 = +9.1 points)
4. Sort by score descending
5. Return top 3

### "Why it matched" Copy Generation:

For each result, dynamically compose a 50–80 word explanation using templates:

**Template:** "The [Watch Name] is [a perfect/an excellent/a great] [occasion] gift for your [recipient]. Its [key feature 1] fits [his/their] [style] preferences, and at ~$[price], it's [well within/right at] your budget [while looking like it costs twice the price / with room to spare / and represents exceptional value]. [Unique selling point sentence.]"

> **For MVP:** These can be pre-written per watch and stored in the watch database object. True dynamic generation can come later.

---

## No Sidebar

> This page does NOT have a sidebar — it's a focused conversion page. Single-column, centered, max-width 720px.

---

## SEO / Meta

```html
<title>Your Watch Gift Quiz Results | WristNerd</title>
<meta name="description" content="Your personalized watch gift recommendations based on recipient, occasion, budget & style. Expert-matched picks with Gift-Worthiness Scores.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://wristnerd.xyz/gift-finder/results/">
```

> **IMPORTANT:** `noindex` — results pages should NOT be indexed by Google (they're personalized, thin content pages). The quiz landing page (`/gift-finder/`) is the indexable page.

---

## Schema Markup (JSON-LD)

**Product (for each of the top 3 results):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Orient Bambino V2",
  "image": "[product-image-url]",
  "description": "Automatic dress watch with dome crystal and classic Bauhaus-inspired design.",
  "brand": { "@type": "Brand", "name": "Orient" },
  "review": {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "WristNerd" }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "150",
    "availability": "https://schema.org/InStock"
  }
}
```

**BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wristnerd.xyz/" },
    { "@type": "ListItem", "position": 2, "name": "Gift Finder Quiz", "item": "https://wristnerd.xyz/gift-finder/" },
    { "@type": "ListItem", "position": 3, "name": "Your Results", "item": "https://wristnerd.xyz/gift-finder/results/" }
  ]
}
```

---

## Internal Link Summary

| From | To | Anchor |
|---|---|---|
| Result Card #1 | `/reviews/orient-bambino-v2/` | "Read Full Review →" |
| Result Card #2 | `/reviews/seiko-5-srpd55/` | "Read Full Review →" |
| Result Card #3 | `/reviews/citizen-eco-drive-bm8180/` | "Read Full Review →" |
| "Not Quite Right" | `/gift-finder/` | "Retake the Quiz" |
| "Not Quite Right" | Budget page (dynamic) | "Browse by Budget" |
| "Not Quite Right" | Occasion page (dynamic) | "Browse by Occasion" |
| Related Guide 1 | Budget page (dynamic) | Card |
| Related Guide 2 | Recipient page (dynamic) | Card |
| Related Guide 3 | Occasion page (dynamic) | Card |
| All Result CTAs | Amazon affiliate links | "Check Price on Amazon →" |

---

## Analytics & Conversion Tracking

> **Events to track (GA4 custom events):**

| Event Name | Trigger | Parameters |
|---|---|---|
| `quiz_results_view` | Page load | recipient, occasion, budget, style |
| `quiz_result_click_amazon` | Click "Check Price on Amazon →" | watch_name, position (1/2/3) |
| `quiz_result_click_review` | Click "Read Full Review →" | watch_name, position |
| `quiz_results_email_signup` | Email form submission | recipient, occasion, budget |
| `quiz_results_share` | Click any share button | share_method (copy/email/pinterest/text) |
| `quiz_retake` | Click "Retake Quiz →" | — |

> **Conversion goal:** `quiz_result_click_amazon` is the primary conversion event. Track click-through rate by position (does #1 always win, or do users explore?).

---

## Mobile-Specific Notes

- Result cards: Full-width stacked, image above content
- Touch targets: All buttons minimum 44px height
- Email input: Full-width, large font (16px min to prevent iOS zoom)
- Share buttons: Large tap targets (48px), spaced 16px apart
- Confetti animation: Reduced or disabled on low-power devices (respect `prefers-reduced-motion`)
- Quiz answer pills: 2x2 grid, not horizontal scroll
- Comparison table: Collapsed by default, expand on tap

---

*Template complete. The quiz landing page (`/gift-finder/`) is a separate interactive component (4-step SPA) documented in the site architecture. This template covers only the results page.*
