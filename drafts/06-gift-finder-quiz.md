# DRAFT: Gift Finder Quiz Page — WristNerd.xyz

> **Page:** Gift Finder Quiz — Find the Perfect Watch Gift
> **URL:** `/gift-finder/`
> **Template:** Quiz
> **Status:** DRAFT — Awaiting approval
> **Word Count Target:** 800-1,200 (quiz page) + 600-800 (results page)

---

## META INFORMATION

```
Meta Title: Gift Finder Quiz — Find the Perfect Watch Gift for Him | WristNerd
Meta Description: Answer 4 quick questions and get a personalized watch gift recommendation. No watch knowledge needed — takes 60 seconds. Free, fun, and helpful.
Canonical URL: https://wristnerd.xyz/gift-finder/
Robots: index, follow
OG Title: Gift Finder Quiz — What Watch Should You Gift Him?
OG Description: 4 questions. 60 seconds. One perfect watch recommendation. No watch expertise required.
OG Image: {{OG_IMAGE: Clean quiz interface mockup showing question cards on WristNerd branded background — navy + gold}}
```

## SCHEMA PLACEHOLDERS

```json
// Schema 1: WebPage
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Gift Finder Quiz",
  "description": "Interactive quiz to find the perfect watch gift for him based on occasion, budget, recipient style, and preferences.",
  "url": "https://wristnerd.xyz/gift-finder/"
}

// Schema 2: BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wristnerd.xyz/" },
    { "@type": "ListItem", "position": 2, "name": "Gift Finder", "item": "https://wristnerd.xyz/gift-finder/" }
  ]
}

// Schema 3: ItemList (on results page — dynamic based on recommendations)
```

## LAYOUT NOTES

```
Desktop: Max-width 900px centered. Clean, focused layout — no sidebar distractions.
         Progress bar at top (4 steps). One question visible at a time.
         Answer options as large clickable cards (not radio buttons).
         Navy (#0D1F3C) background with white card overlays.
         Gold (#C5A55A) progress bar and active states.
         Smooth slide/fade transitions between questions.

Mobile:  Full-width. Same card-based layout, stacked vertically.
         Answer cards full-width, min 56px height for tappability.
         Progress bar simplified to dots or fraction (Step 2 of 4).
         No horizontal scroll. All content within viewport.

General: No page reload between questions — JavaScript-powered transitions.
         Results page loads as new page OR as final card in sequence.
         Email capture optional on results page (not gated — they see results first).
```

---

## PAGE CONTENT

---

### BREADCRUMBS

[Home](/) > Gift Finder Quiz

---

### HERO / INTRO SECTION

*Above the quiz. Clean, minimal, sets expectations.*

{{HERO_IMAGE: Minimal illustration or styled photo — a gift box with a question mark, or a collection of watches fanning out from a central "?" icon. Clean, on-brand, navy/gold palette. NOT a stock photo.}}

# Find the Perfect Watch Gift for Him

Answer 4 quick questions — we'll recommend the ideal watch based on who he is, the occasion, your budget, and his style. No watch knowledge required.

**⏱️ Takes about 60 seconds** · Free · No signup required

[Start the Quiz ↓](#quiz-start) *(Gold button, large, centered)*

---

### TRUST ELEMENTS

*Small, subtle text below the CTA. Builds confidence.*

- 🎁 10,000+ gift-givers helped
- ⭐ Based on 50+ expert-tested watches
- 🔒 No email required (optional at the end)

---

## THE QUIZ {#quiz-start}

*Each question appears one at a time with smooth transitions. Progress bar updates with each step.*

---

### PROGRESS BAR

```
[■■□□] Step 1 of 4 — Who Are You Shopping For?
```

*Visual: Horizontal bar, 25% filled gold. Step label below. Navy background, white text.*

---

### QUESTION 1: WHO IS THE WATCH FOR?

**Who are you shopping for?**

*Select one. Cards are large, clickable tiles with an icon and label.*

| Card | Label | Description | Icon |
|---|---|---|---|
| A | **My Husband / Partner** | The man who has everything (except the right watch) | 💍 |
| B | **My Dad / Father Figure** | Make this Father's Day (or birthday) unforgettable | 👨‍👧 |
| C | **My Boyfriend** | Something he'll wear every day and think of you | ❤️ |
| D | **A Friend / Colleague** | A thoughtful, impressive gift that's not too personal | 🤝 |
| E | **My Son / Brother** | A milestone gift for someone growing up | 🎓 |
| F | **Myself** | Treat yourself — you've earned it | 😎 |

*Layout: 2x3 grid on desktop, 2x3 or stacked on mobile. Each card: white background, rounded 12px, hover: gold border + slight scale. Selected: gold border solid, checkmark icon.*

*When user selects → animate to Question 2*

---

### QUESTION 2: WHAT'S THE OCCASION?

```
[■■■□] Step 2 of 4 — What's the Occasion?
```

**What's the occasion?**

| Card | Label | Icon |
|---|---|---|
| A | **Father's Day** | 🎉 |
| B | **Birthday** | 🎂 |
| C | **Christmas / Holidays** | 🎄 |
| D | **Valentine's Day / Anniversary** | 💝 |
| E | **Graduation** | 🎓 |
| F | **Just Because / No Occasion** | 🎁 |

*Same card layout as Q1. When selected → animate to Question 3*

---

### QUESTION 3: WHAT'S YOUR BUDGET?

```
[■■■■□] Step 3 of 4 — What's Your Budget?
```

**What's your budget?**

*Cards with price ranges. Each includes a "what you can expect" tagline.*

| Card | Budget Range | Tagline |
|---|---|---|
| A | **Under $100** | Reliable everyday watches from trusted brands |
| B | **$100-$200** | The sweet spot — automatics, solar, and great divers |
| C | **$200-$500** | Premium territory — Swiss-made and top Japanese |
| D | **$500-$1,000** | Luxury craftsmanship — sapphire crystals, in-house movements |
| E | **$1,000+** | The best of the best — statement timepieces |

*Layout: 5 cards, 3+2 on desktop, stacked on mobile. When selected → animate to Question 4*

---

### QUESTION 4: WHAT'S HIS STYLE?

```
[■■■■■] Step 4 of 4 — What's His Style?
```

**How would you describe his everyday style?**

*Cards with style descriptions and example images.*

| Card | Style | Description | Image Description |
|---|---|---|---|
| A | **Classic / Dressy** | Suits, button-downs, polished shoes. He cleans up well. | {{STYLE_IMAGE: Man in suit, professional, clean-cut}} |
| B | **Casual / Relaxed** | Jeans and t-shirts, sneakers, laid-back vibes. | {{STYLE_IMAGE: Man in casual outfit, relaxed, weekend look}} |
| C | **Sporty / Active** | Athletic wear, outdoors, always on the move. | {{STYLE_IMAGE: Man in athletic/outdoor clothing, active}} |
| D | **Trendy / Fashion-Forward** | Always on trend, cares about accessories and aesthetics. | {{STYLE_IMAGE: Man in stylish, modern outfit}} |
| E | **Rugged / Outdoorsy** | Flannel, boots, gets his hands dirty. Practical over fancy. | {{STYLE_IMAGE: Man in rugged outdoor clothing}} |
| F | **I'm Not Sure** | No worries — we'll recommend something versatile. | {{STYLE_IMAGE: Versatile outfit, smart-casual}} |

*When selected → show loading animation (1.5s) → reveal results*

---

### LOADING / PROCESSING ANIMATION

*Appears for 1.5-2 seconds between final answer and results. Builds anticipation.*

```
🔍 Finding your perfect match...

Analyzing 50+ watches across your criteria...

[animated spinner or progress animation]
```

*Visual: Navy background, gold spinner, white text. Brief enough to build anticipation, short enough to not annoy.*

---

## RESULTS PAGE

*Either loads as a new page at `/gift-finder/results/` or renders inline below the quiz.*

---

### RESULTS HERO

**Your Perfect Watch Gift Match:**

Based on your answers, we recommend these 3 watches — ranked by gift-worthiness for your specific occasion, budget, and recipient.

---

### RESULT SCENARIO EXAMPLE

*Below is a sample results page for the scenario: Boyfriend + Birthday + $100-$200 + Casual/Relaxed*

---

### TOP RECOMMENDATION — #1 MATCH

*Highlighted card with gold border. Prominent "Best Match" badge.*

**🏆 #1 Match — Best Gift for Your Boyfriend's Birthday Under $200**

{{PRODUCT_IMAGE: Seiko 5 Sports SRPD55 — front-facing, white background, blue dial}}

#### Seiko 5 Sports SRPD55

**Gift-Worthiness Score: 8.7/10** · Rating: 4.6/5

**Price Range:** $175-$250

**Why it's your #1 match:**
The Seiko 5 SRPD55 is the perfect watch for a casual, relaxed guy — it's sporty enough for everyday wear but refined enough to dress up for date nights. The automatic movement means it winds itself from his wrist (a cool story to tell when he opens it), and the 100m water resistance means he can wear it everywhere — pool, beach, shower, no problem.

The blue sunburst dial is stunning in person and the Seiko brand carries genuine respect without being pretentious. For a birthday gift, it strikes the ideal balance between thoughtful and cool.

**Why we picked it for you:**
- ✅ Casual style = sport watch (not too dressy)
- ✅ Under $200 budget = perfect fit
- ✅ Birthday occasion = "cool" factor over formality
- ✅ Boyfriend = something he'll wear daily and think of you

**Pros:**
- Incredibly versatile — works with his casual wardrobe
- 100m water resistance — no worries near water
- Automatic movement — no batteries, cool talking point
- Available in 12+ color options (blue is our recommendation)

**Cons:**
- 42.5mm may be large for very slim wrists
- Hardlex crystal (not sapphire)
- Bezel action is stiff initially

[Check Price on Amazon →](#) *(Gold CTA button, full-width)*
{{AFFILIATE_LINK_AMAZON: Seiko 5 Sports SRPD55}}

[Read Full Review →](/reviews/seiko-5-srpd55/)

---

### RUNNER-UP — #2 MATCH

**#2 Match — Strong Alternative**

{{PRODUCT_IMAGE: Orient Bambino V2}}

#### Orient Bambino V2

**Gift-Worthiness Score: 9.0/10** · Rating: 4.7/5

**Price Range:** $120-$180

**Why it's a great alternative:**
If your boyfriend has a slightly dressier side — or you want a gift that creates a bigger "wow" moment at the unboxing — the Orient Bambino is hard to beat. The domed crystal and vintage character make it look like a $500 watch, and the in-house automatic movement adds genuine craftsmanship at an incredible price.

**Best if:** He sometimes dresses up, you want maximum wow-per-dollar, or you prefer a more classic/elegant aesthetic.

**Trade-off vs. #1:** Less water resistance (30m vs 100m), dressier (less casual-friendly).

[Check Price on Amazon →](#) *(Gold outline button)*
{{AFFILIATE_LINK_AMAZON: Orient Bambino V2}}

[Read Full Review →](/reviews/orient-bambino-v2/)

---

### BUDGET OPTION — #3 MATCH

**#3 Match — Budget-Friendly Pick**

{{PRODUCT_IMAGE: Casio G-Shock GA2100}}

#### Casio G-Shock GA2100 "CasiOak"

**Gift-Worthiness Score: 8.4/10** · Rating: 4.5/5

**Price Range:** $80-$130

**Why it's worth considering:**
If you want to save some cash (or add a card, wrapping, or experience to the gift), the G-Shock GA2100 is a phenomenal value under $130. The "CasiOak" design is stylish and modern, it's virtually indestructible, and 200m water resistance means he literally cannot damage it with water. It's the ultimate "wear it everywhere, worry about nothing" watch.

**Best if:** He's rough on things, very active, or you want room in the budget for extras.

**Trade-off vs. #1:** Less refined/dressy, quartz (not automatic), plastic/resin feel.

[Check Price on Amazon →](#) *(Navy outline button)*
{{AFFILIATE_LINK_AMAZON: Casio G-Shock GA2100}}

[Read Full Review →](/reviews/casio-g-shock-ga2100/)

---

### COMPARISON SUMMARY

**Your 3 Matches at a Glance:**

| | #1 Seiko 5 SRPD55 | #2 Orient Bambino V2 | #3 G-Shock GA2100 |
|---|---|---|---|
| **Price** | $175-$250 | $120-$180 | $80-$130 |
| **Style** | Sport/Casual | Dress/Classic | Rugged/Modern |
| **Movement** | Automatic | Automatic | Quartz |
| **WR** | 100m | 30m | 200m |
| **Gift Score** | 8.7/10 | 9.0/10 | 8.4/10 |
| **Best For** | Daily casual wear | Wow-factor unboxing | Indestructible beater |
| | [Check Price →](#) | [Check Price →](#) | [Check Price →](#) |

---

### GIFTING TIPS FOR THIS MATCH

**H2: Tips to Make Your Gift Extra Special**

Based on your quiz answers (Boyfriend + Birthday + $100-$200 + Casual), here are some bonus tips:

**1. Add a personal touch:**
Include a handwritten card with a note about why you chose this specific watch for him. Something like: *"I noticed you always check the time on your phone — so I thought it was time you had a reason to check your wrist instead. Happy birthday."*

**2. Get the size right (without spoiling the surprise):**
Sneak a look at a bracelet or bangle he already wears, or casually bring it up. For the full guide: [How to Choose the Right Watch Size for a Gift](/blog/how-to-choose-watch-size/)

**3. Presentation matters:**
If the watch doesn't come in a premium box, add a separate watch case ($10-$15 on Amazon). It elevates the entire gifting experience.

**4. Include a backup plan:**
Buy from Amazon or a retailer with easy returns (30 days). Let him try it on for a few days before deciding. No pressure.

---

### RETAKE / EXPLORE MORE

*Below the tips section.*

**Want to explore more options?**

[Retake the Quiz →](/gift-finder/) — Change your answers and see different recommendations
[Browse All Watches Under $200 →](/best-watches-under-200/) — See the full list
[Read Birthday Gift Guide →](/gift-guides/birthday/) — Our complete birthday picks

---

### EMAIL CAPTURE (OPTIONAL — NOT GATED)

*The recipient has already seen their results. This is a soft, non-intrusive ask.*

**Want us to send you these picks (plus a price drop alert)?**

We'll email you a link to your results so you can come back later — and we'll alert you if any of your top 3 picks drop in price before his birthday.

[Your email address] [Send My Results →]

*We'll also send you seasonal gift guides and deals. Unsubscribe anytime. See our [Privacy Policy](/privacy-policy/).*

---

### SOCIAL SHARING

**Share your results:**

[Share on Pinterest] [Share on Facebook] [Copy Link]

*"I just found the perfect watch gift on WristNerd! Take the quiz → wristnerd.xyz/gift-finder/"*

---

## QUIZ LOGIC — RECOMMENDATION ENGINE

*This section documents the recommendation logic for the developer implementing the quiz.*

### Decision Matrix

The quiz uses a weighted scoring system across all tested watches. Each answer adjusts the scores:

**Q1 — Recipient Type → Adjusts formality and price expectations**
| Recipient | Effect |
|---|---|
| Husband/Partner | +weight to premium, versatile watches |
| Dad | +weight to classic, practical watches |
| Boyfriend | +weight to trendy, cool-factor watches |
| Friend/Colleague | +weight to safe, universally appealing watches |
| Son/Brother | +weight to youthful, sporty watches |
| Self | No adjustment — uses raw scores |

**Q2 — Occasion → Adjusts gift-worthiness weight**
| Occasion | Effect |
|---|---|
| Father's Day | +weight to classic, dad-appropriate picks |
| Birthday | +weight to cool factor and wow factor |
| Christmas | +weight to value and versatility |
| Valentine's/Anniversary | +weight to romantic, dressy, premium |
| Graduation | +weight to milestone, first "real" watch feel |
| Just Because | +weight to practical, everyday watches |

**Q3 — Budget → Hard filter**
| Budget | Watch Pool |
|---|---|
| Under $100 | Citizen BM8180, Casio G-Shock GA2100, Seiko SNK809, Casio Edifice, Timex Waterbury |
| $100-$200 | Orient Bambino, Seiko 5, Citizen Promaster, Orient Ray II, + all under $100 |
| $200-$500 | Seiko Presage SRPB41, Hamilton Khaki, Fossil Neutra, Timex Marlin, Bulova Lunar Pilot, + all under $200 |
| $500-$1,000 | Tissot PRX, Seiko SPB167, + all under $500 |
| $1,000+ | Full catalog (future expansion) |

**Q4 — Style → Adjusts style weight**
| Style | Effect |
|---|---|
| Classic/Dressy | +weight to dress watches (Bambino, Presage, Marlin) |
| Casual/Relaxed | +weight to sport/field watches (Seiko 5, BM8180) |
| Sporty/Active | +weight to divers and G-Shocks (Promaster, GA2100, Ray II) |
| Trendy/Fashion-Forward | +weight to design-forward watches (Tissot PRX, G-Shock, Edifice) |
| Rugged/Outdoorsy | +weight to tough watches (G-Shock, Promaster, Hamilton Khaki) |
| Not Sure | No adjustment — uses versatility as tiebreaker |

### Output

Top 3 watches by final weighted score. Always show:
1. **#1 Match** — Highest score (detailed card with full copy)
2. **#2 Match** — Runner-up (medium detail card)
3. **#3 Match** — Budget-friendly alternative (condensed card)

If scores are tied, break ties by:
1. Higher Gift-Worthiness Score
2. Lower price (better value)
3. More reviews on Amazon (social proof)

---

## QUIZ PAGE — ADDITIONAL CONTENT BELOW QUIZ

*This content appears below the quiz for SEO purposes and for users who scroll past the quiz.*

---

### SEO CONTENT SECTION

**H2: Why Use Our Gift Finder Quiz?**

Shopping for a watch gift can be overwhelming — there are hundreds of brands, thousands of models, and if you're not a watch person yourself, it's hard to know where to start. That's exactly why we built the WristNerd Gift Finder.

Our quiz uses insights from 50+ expert-tested watches, cross-referenced against occasion, budget, recipient type, and personal style to give you a personalized recommendation in under 60 seconds. Every watch in our recommendation engine has been worn, tested, and scored using our proprietary Gift-Worthiness system.

No signup required. No email gate. Just honest, helpful recommendations.

**H3: What Our Gift-Worthiness Score Measures**

Every watch in our quiz is scored on five criteria:

1. **Presentation & Packaging (20%)** — Does the box look gift-worthy?
2. **Unboxing Experience (20%)** — What's the "wow" moment when he opens it?
3. **Wow Factor (25%)** — Does the watch itself make an impression?
4. **Versatility (15%)** — Can he wear it daily with different outfits?
5. **Price-to-Value (20%)** — Does it feel like more than what you paid?

The combined score gives you a single number (out of 10) that tells you how good a watch is *as a gift* — not just as a timepiece.

**H3: Brands in Our Quiz**

Our quiz recommends watches from the following trusted brands:

- **Seiko** — Japanese watchmaking legend since 1881
- **Orient** — In-house automatic movements at incredible prices (owned by Seiko Group)
- **Citizen** — Pioneers of Eco-Drive solar technology
- **Casio** — Makers of the indestructible G-Shock
- **Tissot** — Swiss-made excellence with 170+ years of history
- **Hamilton** — American heritage, Swiss precision
- **Timex** — American icon, accessible and reliable
- **Bulova** — The watch that went to the moon
- **Fossil** — Modern, fashion-forward, widely recognized

We do **not** recommend watches from brands we consider low-quality or overpriced for their segment. For our full list: [Watch Brands to Avoid](/blog/watch-brands-to-avoid/).

---

### FAQ SECTION

**H2: Gift Finder Quiz — FAQ**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": []
}
```

**Q: Is the Gift Finder Quiz really free?**

A: Yes — 100% free. No email required to see your results. We offer an optional email capture at the end so we can send you price drop alerts, but it's entirely optional.

**Q: How does the quiz decide which watch to recommend?**

A: Our quiz uses a weighted scoring system based on four factors: who the watch is for, the occasion, your budget, and the recipient's style. Each answer adjusts the scores of 50+ watches in our database, and we surface the top 3 matches based on our Gift-Worthiness Score.

**Q: Can I retake the quiz with different answers?**

A: Absolutely! Just click "Retake the Quiz" on the results page. Try different combinations of budget and style to explore different options.

**Q: Are the quiz recommendations biased?**

A: No. We don't accept paid placements or sponsored recommendations. Every watch in the quiz earned its spot through our independent testing and scoring. We do earn affiliate commissions if you purchase through our links, but this never influences which watches we recommend or how we rank them.

**Q: What if none of the quiz results feel right?**

A: No problem! Browse our full collection of guides:
- [Best Watches Under $100](/best-watches-under-100/)
- [Best Watches Under $200](/best-watches-under-200/)
- [Best Watches Under $500](/best-watches-under-500/)
- [Father's Day Gift Guide](/gift-guides/fathers-day/)
- [Birthday Gift Guide](/gift-guides/birthday/)

You can also [contact us](/contact/) and we'll personally help you find the right watch.

**Q: Do I need to know anything about watches to take the quiz?**

A: Not at all! The quiz is specifically designed for people who don't know much about watches. We ask about the *recipient* and the *occasion* — not about movements, complications, or case sizes. We handle the watch expertise; you just tell us about him.

---

## INTERNAL LINKS SUMMARY

| Destination | Anchor Text | Location |
|---|---|---|
| `/reviews/seiko-5-srpd55/` | "Read Full Review →" | Result #1 |
| `/reviews/orient-bambino-v2/` | "Read Full Review →" | Result #2 |
| `/reviews/casio-g-shock-ga2100/` | "Read Full Review →" | Result #3 |
| `/best-watches-under-200/` | "Browse All Watches Under $200 →" | Explore more |
| `/gift-guides/birthday/` | "Birthday Gift Guide" | Explore more |
| `/gift-guides/fathers-day/` | "Father's Day Gift Guide" | SEO content, FAQ |
| `/best-watches-under-100/` | "Best Watches Under $100" | FAQ |
| `/best-watches-under-500/` | "Best Watches Under $500" | FAQ |
| `/blog/watch-brands-to-avoid/` | "Watch Brands to Avoid" | Brands section |
| `/blog/how-to-choose-watch-size/` | "How to Choose the Right Watch Size" | Gifting tips |
| `/contact/` | "contact us" | FAQ |
| `/privacy-policy/` | "Privacy Policy" | Email capture |

---

## TECHNICAL NOTES FOR DEVELOPER

1. **No page reloads** — Quiz should be a single-page JavaScript application. Use fade/slide transitions between questions.
2. **State management** — Store answers in memory (no server calls until results). Calculate results client-side.
3. **URL structure** — Quiz lives at `/gift-finder/`. Results can be at `/gift-finder/results/?r=boyfriend&o=birthday&b=200&s=casual` (query parameters for sharing/bookmarking).
4. **Analytics events** — Fire events for: quiz_start, q1_answered, q2_answered, q3_answered, q4_answered, results_viewed, cta_clicked, email_submitted, quiz_retaken.
5. **Performance** — Preload result images during Q3/Q4 so results appear instantly.
6. **Mobile-first** — Design for 375px width first, then scale up.
7. **Accessibility** — All cards keyboard-navigable (Tab + Enter). ARIA labels on progress bar. Color contrast meets WCAG 2.1 AA.
8. **Email integration** — Connect to email service provider (Mailchimp, ConvertKit, etc.) for the optional capture on results page.

---

*End of Gift Finder Quiz Page Draft*
