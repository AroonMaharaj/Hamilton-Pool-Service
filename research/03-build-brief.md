# Website Build Brief — Hamilton Pool Service

## Design Direction

### Color Palette
Keep the client's mint/teal identity but refine it for premium feel:

| Role | Hex | Rationale |
|------|-----|-----------|
| Primary | #00DAAF | Client's existing teal — keep for brand continuity |
| Primary Dark | #00B894 | Deeper teal for hover states, dark sections |
| Accent | #0D2137 | Dark navy for text, headers, dark sections (borrowed from top competitor pattern) |
| CTA | #61FFC8 | Client's existing mint green — high contrast on dark backgrounds |
| Background Light | #F8FAFB | Soft off-white (not pure white) for premium feel |
| Background Dark | #0D2137 | Navy for alternating dark sections |
| Text Primary | #1A1A2E | Near-black for body text readability |
| Text Muted | #6B7280 | Secondary text, captions |
| Success | #10B981 | Form confirmations |
| White | #FFFFFF | Cards, overlays |

### Typography Pairing
- **Headings:** Inter (700, 800 weight) — clean, modern, professional. Used by top tech/service companies.
- **Body:** Inter (400, 500 weight) — same family for consistency, excellent readability at all sizes.
- **Accent/CTA:** Inter (600 weight, uppercase, letter-spacing: 0.05em) for buttons and labels.
- **Rationale:** Single font family reduces load time. Inter is the most readable screen font available and signals "modern professional" — exactly where Hamilton Pool Service needs to position.

### Photography/Asset Style Guide
- **Hero:** Nano Banana 2 generated 3D pool/water asset (placeholder left in code)
- **Service sections:** Use real pool photography with teal color overlay or duotone treatment
- **Testimonial section:** Placeholder for real customer photos
- **Style:** Bright, airy, summer feeling. Blue water tones. No stock photos of generic smiling families.
- **Icons:** Lucide or Phosphor icon set — line style, teal colored

### Animation Recommendations
- **Hero:** Parallax water effect, text fade-up on load
- **Sections:** ScrollTrigger fade-up + slide-in on each section entry
- **Service cards:** Staggered reveal (0.15s delay between each)
- **Numbers/stats:** Counter animation on scroll into view
- **CTA buttons:** Subtle scale + glow on hover
- **Navigation:** Blur backdrop + shrink on scroll
- **Testimonials:** Auto-sliding carousel with drag support
- **Map section:** Fade in with slight zoom

### What to AVOID
- Repetitive, SEO-stuffed copy (current site's biggest weakness)
- Partner link exchanges (looks spammy, hurts trust)
- Generic GHL template aesthetic
- Stock photography of people
- Multiple competing font families
- Oversized text blocks without visual breaks
- "Aquatic feature" and other awkward synonym substitutions

---

## Site Architecture

### Pages to Build

| Page | Purpose | Primary CTA | Secondary CTA |
|------|---------|-------------|---------------|
| `index.html` | Homepage — hero, services overview, social proof, lead capture | "Get a Free Quote" (form) | "Call (289) 768-5713" |
| `services.html` | All services overview with links to each | "Get a Free Quote" | Service-specific links |
| `pool-opening.html` | Pool opening service detail | "Book Pool Opening" | "Call Now" |
| `pool-closing.html` | Pool closing service detail | "Book Pool Closing" | "Call Now" |
| `pool-cleaning.html` | Pool cleaning/maintenance detail | "Get a Free Quote" | "Call Now" |
| `hot-tub.html` | Hot tub service detail | "Get a Free Quote" | "Call Now" |
| `about.html` | About the company, team, mission | "Contact Us" | "View Services" |
| `contact.html` | Contact form, phone, map, service areas | "Send Message" (form) | "Call Now" |
| `404.html` | Custom 404 page | "Go Home" | — |

### Navigation Structure
```
[Logo] Hamilton Pool Service
├── Home
├── Services ▾
│   ├── Pool Opening
│   ├── Pool Closing
│   ├── Pool Cleaning
│   └── Hot Tub
├── About Us
├── Contact Us
└── [CTA Button] Get a Free Quote
```

### Content Hierarchy (Homepage)

1. **Hero** — Headline + sub + CTA + Nano Banana 3D asset placeholder
2. **Trust Bar** — "5-Star Rated | Licensed & Insured | Hamilton's Pool Experts"
3. **Services Overview** — 4 service cards with icons (Opening, Closing, Cleaning, Hot Tub)
4. **Why Choose Us** — 3 pillars: Expertise, Saves Time & Money, Safe & Healthy Pools
5. **Service Areas** — Map + list of cities served
6. **Testimonials** — Carousel of 3 customer reviews
7. **About Preview** — Short company intro + "Learn More" link
8. **Lead Capture Form** — Name, phone, email, service dropdown, message
9. **FAQ** — 5 common questions (accordion)
10. **Footer** — Company info, quick links, CTA, phone, copyright

---

## Content Framework

### Homepage Headlines (3 Options)

1. **"Hamilton's Most Trusted Pool Service — Crystal Clear, Every Time."**
   - Pattern: [Location] + [Trust Signal] + [Outcome Promise]
   - Inspired by: Puddle Pools' outcome-focused messaging

2. **"Your Pool, Our Expertise. Open, Clean, Maintained — All Season Long."**
   - Pattern: [Ownership] + [Expertise] + [Service List] + [Duration]
   - Inspired by: PoolZenia's "full-season approach"

3. **"Stop Worrying About Your Pool. Start Enjoying It."**
   - Pattern: [Pain] → [Pleasure] transformation
   - Inspired by: Toni's emotional, family-focused messaging

**Recommended:** Option 1 for the primary H1. Option 3 as a subheadline.

### Value Proposition Structure
- **Line 1 (H1):** "Hamilton's Most Trusted Pool Service"
- **Line 2 (sub):** "Stop worrying about your pool. Start enjoying it."
- **Line 3 (supporting):** "Professional pool opening, closing, cleaning, and maintenance for Hamilton and surrounding areas. Licensed, insured, and 5-star rated."

### Section-by-Section Copy Direction

| Section | Tone | Key Message | Word Count |
|---------|------|-------------|------------|
| Hero | Confident, direct | Best in Hamilton, call to action | 30-50 |
| Trust Bar | Factual | Credentials at a glance | 10-15 |
| Services | Helpful, clear | What we do, briefly | 150-200 |
| Why Choose Us | Authoritative | Expertise, value, safety | 200-250 |
| Service Areas | Geographic | Where we serve | 50-75 |
| Testimonials | Authentic | Real customer words | 150-200 |
| About Preview | Warm, personal | Small team, big care | 75-100 |
| Lead Capture | Urgent, friendly | Get started today | 25-50 |
| FAQ | Helpful | Answer objections | 200-300 |

### SEO Keyword Targets

| Keyword | Monthly Search Volume (est.) | Difficulty |
|---------|------------------------------|------------|
| pool service hamilton | High | Medium |
| pool opening hamilton on | Medium | Low |
| pool closing hamilton | Medium | Low |
| pool cleaning hamilton ontario | Medium | Low |
| hot tub service hamilton | Low-Medium | Low |
| pool maintenance hamilton | Medium | Medium |
| pool company hamilton on | Medium | Medium |
| pool service near me hamilton | Medium | Low |

---

## Conversion Playbook

### Primary Conversion Goal
**Phone call or form submission for a free quote.**

### Lead Capture Strategy
1. **Sticky header CTA** — "Get a Free Quote" button always visible
2. **Hero form** — Inline on desktop, button-triggered on mobile
3. **Phone number** — Click-to-call in header and repeated in every section CTA
4. **Bottom-of-page form** — Full contact form before footer
5. **Service page CTAs** — Each service page has its own contextual CTA

### Social Proof Plan

| Element | Placement | Source |
|---------|-----------|--------|
| Star rating + review count | Trust bar (below hero) | Google Reviews |
| Customer testimonials (3) | Dedicated section | Existing testimonials (Mike S., Lisa T., Jennifer B.) |
| Google Reviews badge | Testimonial section | Google Places embed |
| "Licensed & Insured" badge | Trust bar | Company credentials |
| Service area count | Trust bar | "Serving 8+ communities" |

### Trust Signal Checklist
- [ ] Google Reviews badge with star rating
- [ ] "Licensed & Insured" text/badge
- [ ] Years of experience mentioned
- [ ] Service area list (shows local expertise)
- [ ] Real customer testimonials with names
- [ ] Phone number prominently displayed (signals legitimacy)
- [ ] Professional photography (when available)
- [ ] Clear pricing or "Free Quote" messaging
- [ ] SSL certificate (https)
- [ ] Professional email (not gmail)
