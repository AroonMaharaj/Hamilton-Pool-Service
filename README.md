# Hamilton Pool Service — Premium Website

A scroll-animated, premium website for Hamilton Pool Service built with vanilla HTML, CSS, and JavaScript + GSAP ScrollTrigger.

## Tech Stack

- **HTML5** — Semantic markup with schema.org structured data
- **CSS3** — Custom properties, Grid, Flexbox, mobile-first responsive
- **JavaScript** — Vanilla JS, no frameworks
- **GSAP 3.12** — ScrollTrigger animations loaded from CDN
- **Fonts** — Inter (Google Fonts)

## Project Structure

```
Hamilton Pool Service/
├── research/
│   ├── 01-client-brand.md          # Brand extraction from existing site
│   ├── 02-competitor-analysis.md   # Niche competitive analysis
│   ├── 03-build-brief.md           # Master build document
│   ├── niche-analysis-report.md    # Client-facing lead magnet report
│   └── 04-quality-audit.md         # Final quality audit
├── site/
│   ├── index.html                  # Homepage
│   ├── services.html               # Services overview
│   ├── pool-opening.html           # Pool opening detail
│   ├── pool-closing.html           # Pool closing detail
│   ├── pool-cleaning.html          # Pool cleaning detail
│   ├── hot-tub.html                # Hot tub service detail
│   ├── about.html                  # About page
│   ├── contact.html                # Contact page
│   ├── 404.html                    # Custom 404
│   ├── robots.txt                  # Search engine directives
│   ├── sitemap.xml                 # XML sitemap
│   ├── css/
│   │   └── style.css               # All styles
│   ├── js/
│   │   └── main.js                 # All JavaScript
│   └── assets/                     # Images, favicon, OG image
└── README.md
```

## Deployment

### Netlify (Recommended)

1. Push the `site/` directory to a Git repo
2. Connect to Netlify
3. Set publish directory to `site/`
4. Deploy

### Vercel

1. Push the `site/` directory to a Git repo
2. Import project in Vercel
3. Set root directory to `site/`
4. Deploy

### Manual / FTP

Upload the contents of the `site/` directory to your web server root.

## Before Launch Checklist

- [ ] Replace all placeholder images with real photography
- [ ] Replace Nano Banana placeholder with 3D asset (500x500px PNG/WebP)
- [ ] Create and add `assets/favicon.png`
- [ ] Create and add `assets/og-image.jpg` (1200x630px)
- [ ] Connect quote form to backend (options below)
- [ ] Update Google Reviews count in schema markup as reviews grow
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target: 90+ all categories)

## Form Backend Options

The quote forms currently show a client-side success message. To receive actual submissions:

1. **Netlify Forms** — Add `netlify` attribute to `<form>` tag (free tier: 100/month)
2. **Formspree** — Set form action to `https://formspree.io/f/YOUR_ID`
3. **GoHighLevel** — Embed GHL form or post to GHL webhook
4. **Custom** — POST to your own API endpoint

## Cost Breakdown

| Item | Cost |
|------|------|
| Design & Development | $12,000 |
| Competitive Research & Analysis | Included |
| SEO Optimization | Included |
| GSAP Scroll Animations | Included |
| Schema Markup & Structured Data | Included |
| Responsive Mobile Design | Included |
| 9 Pages (Home + 8 sub-pages) | Included |
| Sitemap, Robots.txt, 404 | Included |
| **Total** | **$12,000** |

## Support

Phone: (289) 768-5713
Location: Hamilton, ON
