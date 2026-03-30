# Hamilton Pool Service — Brand Extraction

## Brand Snapshot
- **Company:** Hamilton Pool Service
- **Primary Color:** #61FFC8 (mint green)
- **Secondary Color:** #00DAAF (teal green)
- **Accent Color:** #000000 (black — used on primary CTA text)
- **Background:** #FFFFFF (white)
- **Fonts:** Poppins (headings) / Times New Roman, Inter, Roboto (body — inconsistent)
- **Tone:** Professional-friendly
- **Core Message:** "Best Pool Company in Hamilton ON" — full-service pool maintenance, cleaning, and repair

---

## Logo
- **Type:** No logo image found on site — text-based brand name only
- **Favicon:** Generic GoHighLevel default (`stcdn.leadconnectorhq.com/funnel/icon/favicon.ico`)
- **OG Image:** None set
- **Note:** No SVG/PNG logo detected in header, nav, or OG tags. The brand lacks a visual logo asset.

---

## Color Palette (extracted from CSS)

| Role | Hex | Usage |
|------|-----|-------|
| Primary | #61FFC8 | Primary CTA buttons, highlights |
| Secondary/Accent | #00DAAF | Secondary buttons, links, text accents |
| Background | #FFFFFF | Page background |
| Text Primary | #00DAAF | Headings, branded text |
| Body Text | #2C3345 | Input text, body paragraphs |
| Input Border | #ACACAC | Form field borders |
| CTA Text (Primary) | #000000 | Button text on mint green |
| CTA Text (Secondary) | #FFFFFF | Button text on teal |

**Color scheme:** Light mode only. Mint green + teal is the brand palette. No dark mode.

---

## Typography

- **Headings:** Poppins (700 weight implied by bold usage)
- **Body:** Mixed — Times New Roman, Inter, Roboto, Helvetica Neue all detected
- **Paragraph:** Poppins (used in some paragraph sections too)
- **Font Sizes:**
  - H1: 40px
  - H2: 60px
  - Body: 18px
- **Source:** Google Fonts (Poppins, Inter, Roboto) + system fonts (Times New Roman, Helvetica Neue)
- **Note:** Typography is inconsistent — multiple body fonts competing. Needs consolidation.

---

## Tone of Voice

**Professional-friendly with casual undertones.** Uses conversational language, puns ("dive in, pun intended"), and direct CTAs ("Contact Us Today!"). The copy is benefit-driven and reassurance-heavy — emphasizing trust, reliability, and stress-free service. Slightly repetitive and SEO-stuffed in places (synonyms like "aquatic feature" used awkwardly to avoid keyword repetition).

---

## Key Messaging

- **Primary Headline:** "Hamilton Pool Services — Best Pool Company in Hamilton ON"
- **Phone CTA:** (289) 768-5713 (prominently repeated throughout)
- **Value Proposition:** One-stop shop for all pool maintenance needs — cleaning, opening, closing, repair, hot tub service
- **Key Differentiators Claimed:**
  - Experienced, professional technicians
  - Personalized service plans
  - Affordable without compromising quality
  - Eco-friendly practices
  - Comprehensive services (not just cleaning)
- **Testimonials:** 3 customer quotes (Mike S., Lisa T., Jennifer B.)
- **Google Reviews:** 5.0 stars (2 reviews only)

---

## Existing Content (Main Pages)

### Homepage (~2,500 words)
- Hero: "Hamilton Pool Services — Best Pool Company in Hamilton ON"
- Sections: What We Offer, Where We Serve, Lead capture form, Why Go With Us (Expertise / Saves Time & Money / Safe & Healthy Pool), About blurb, Perks of Hiring, Service cards (Pool Service, Pool Cleaning, Pool Opening, Pool Closing, Hot Tub), Testimonials, Google Map embed, Goals & Mission (Professionalism, Quality & Consistency, Environmental Conservation), Footer
- **Issues:** Very long single-page scroll. Repetitive copy. Multiple sections say essentially the same thing. SEO-keyword-stuffed with synonyms ("aquatic feature", "water feature" instead of "pool").

### Other Pages (from sitemap):
- `/services` — Pool Renovation | Pool Repair Services
- `/pool-service` — Pool Service | Pool Cleaning And Maintenance
- `/pool-cleaning` — Pool Cleaning Service | Pool Care
- `/pool-opening` — Pool opening service
- `/pool-closing` — Pool closing service (title incorrectly says "opening")
- `/hot-tub` — Hot tub services (title is "Untitled")
- `/about-us` — Professional Local Pool Service
- `/contact-us` — Expert Local Pool Service

---

## Site Architecture (from Firecrawl /map)

| URL | Title | Purpose |
|-----|-------|---------|
| `/` | Pool Company \| Pool Installation \| Hamilton, ON | Homepage |
| `/home` | Pool Company \| Pool Installation \| Hamilton, ON | Duplicate of homepage |
| `/services` | Pool Renovation \| Pool Repair Services | Services overview |
| `/pool-service` | Pool Service \| Pool Cleaning And Maintenance | Service detail |
| `/pool-cleaning` | Pool Cleaning Service \| Pool Care | Service detail |
| `/pool-opening` | Pool opening service in Hamilton ON | Service detail |
| `/pool-closing` | Pool opening service in Hamilton ON | Service detail (wrong title) |
| `/hot-tub` | Untitled | Service detail (missing title) |
| `/about-us` | Professional Local Pool Service | About page |
| `/contact-us` | Expert Local Pool Service | Contact page |

- **Total pages:** 10 (including `/home` duplicate)
- **Depth:** Max 2 clicks from homepage
- **Platform:** GoHighLevel (GHL) funnel/website builder
- **Lead Capture:** Form on homepage (name, phone, email, preferred service dropdown)
- **Primary CTA:** Phone call `tel:` links throughout

---

## Technical Notes

- **Platform:** GoHighLevel (leadconnectorhq.com assets, GHL funnel builder)
- **Images:** Hosted on `assets.cdn.filesafe.space` and `images.leadconnectorhq.com` (WebP format, quality 80-85)
- **Google Map:** Embedded with Places API
- **Form:** GHL form with reCAPTCHA
- **SEO Issues Found:**
  - `/pool-closing` has wrong title (says "pool opening")
  - `/hot-tub` has no title ("Untitled")
  - `/home` is a duplicate of `/`
  - No XML sitemap detected
  - No robots.txt detected
  - Generic GHL favicon
  - No OG image set
- **Partner Links:** Links to external pool service companies in other cities (likely link exchange network)
