# Production Readiness Brief — samuel-t.vercel.app

**Generated:** April 25, 2026
**Current state:** Functional prototype, 90% production-ready

---

## ✅ Already Done

- [x] Homepage with hero, agent flow, starter systems, FAQ
- [x] Solutions page (`/solutions`)
- [x] 3 spoke pages (starter systems, OpenClaw, Hermes Agent)
- [x] Missed Call Rescue product mockup hero card
- [x] Marcellus serif headlines + Merom Sans body
- [x] Responsive at 375px / 768px / 1440px
- [x] Phone number visible above fold on mobile
- [x] JSON-LD schema on every page
- [x] Meta title + description on every page
- [x] OG cards + Twitter cards
- [x] `sitemap.xml` with all 5 pages
- [x] `robots.txt` pointing to sitemap
- [x] Vercel `cleanUrls` + security headers
- [x] Self-hosted fonts (no external deps)
- [x] Custom SVG favicon
- [x] Skip-to-content link
- [x] `prefers-reduced-motion` fallbacks
- [x] No JS framework dependency (vanilla)

---

## 🔴 Must-Fix Before Launch (7 items)

### 1. Brand identity inconsistency
**Problem:** Site says "Samuel" in nav/title/footer/schema, but company is "Actrix."
**Fix:** Decide on final name. If Actrix, update ALL pages (nav, title, meta, schema, footer, spoke page headers, og-card). If Samuel, lock it.
**Scope:** 5 HTML files + og-card.svg + favicon.svg

### 2. Domain / canonical URL
**Problem:** Deployed at `samuel-t.vercel.app` — not a professional domain for a business.
**Fix:** Buy a real domain (e.g., `actrix.ai`, `actrixidaho.com`, `samuelai.co`) and point it at Vercel. Update ALL canonical URLs, OG URLs, sitemap, schema, and robots.txt.
**Scope:** 5 HTML files + sitemap.xml + robots.txt + Vercel domain config

### 3. OG card image is stale
**Problem:** `og-card.png` (281KB) was generated for the old hero design. Shows "Samuel" branding, no Marcellus font, no MCR card.
**Fix:** Regenerate OG card matching current hero (Marcellus headline, warm charcoal, amber accent). Make it 1200×630px, under 200KB.
**Scope:** og-card.png + og-card.svg

### 4. Favicon says "Samuel AI systems"
**Problem:** SVG favicon has `aria-label="Samuel AI systems icon"`. If rebranding to Actrix, needs update.
**Fix:** Update favicon text/aria OR create a proper Actrix logo icon.
**Scope:** favicon.svg

### 5. Spoke pages use wrong font stack
**Problem:** Spoke pages (`local-ai-starter-systems`, `openclaw`, `hermes-agent`) load `styles.css` which uses `--font-display: "Merom Sans"` — NOT Marcellus. Their headlines won't match the homepage.
**Fix:** Update `styles.css` `--font-display` to `Marcellus, "Merom Sans", ...` and add the Marcellus `@font-face` to styles.css (or ensure all spoke pages include it).
**Scope:** styles.css

### 6. No privacy policy or terms
**Problem:** Collecting phone numbers (SMS CTA) and email without any privacy disclosure.
**Fix:** Add a simple `/privacy` page or at minimum a footer link to a one-paragraph privacy statement. Required for SMS compliance and basic trust.
**Scope:** New page + footer link on all 5 pages

### 7. No analytics or conversion tracking
**Problem:** Zero way to measure if anyone visits, which pages convert, or if the "Book walkthrough" CTA works.
**Fix:** Add Vercel Analytics (free, one-line script tag) or Plausible/Fathom. At minimum, track page views and CTA clicks.
**Scope:** Add `<script>` to all pages

---

## 🟡 Should-Fix Before Showing to Clients (5 items)

### 8. Nav/footer inconsistency across pages
**Problem:** Homepage has inline nav (different class names). Spoke pages use `styles.css` nav. Links may differ. Footer content may not match.
**Fix:** Audit all 5 pages for matching nav links, footer text, and CTA targets. Normalize.
**Scope:** 5 HTML files

### 9. Email is a personal Gmail
**Problem:** `wpbflsf@gmail.com` visible in hero and schema. Unprofessional for a business.
**Fix:** Use a professional address (e.g., `sam@actrix.ai`, `hello@actrixidaho.com`) or remove the email entirely and rely on phone/SMS only.
**Scope:** 5 HTML files + schema

### 10. No pricing or packaging signal
**Problem:** Visitors have no idea what this costs. The FAQ mentions "starter systems" but gives zero price range.
**Fix:** Add a pricing section or at least a "Starting at $X" signal on the homepage or solutions page. Your known pricing: Starter AI $950+, Custom Systems $2,500+.
**Scope:** Homepage or solutions.html

### 11. No testimonials or social proof
**Problem:** Zero evidence that anyone has used this. No client names, no results, no case studies.
**Fix:** Add 2-3 client results or testimonial quotes. Even placeholder "a Hailey contractor" style is better than nothing.
**Scope:** Homepage (new section)

### 12. Solutions page may need content audit
**Problem:** `solutions.html` was built before the MCR hero and Marcellus font. May reference old branding or layout.
**Fix:** Quick visual + content audit for brand consistency.
**Scope:** solutions.html

---

## 🟢 Nice-to-Have / Post-Launch (6 items)

### 13. Apple touch icon / PWA manifest
**Problem:** No `apple-touch-icon.png` or `manifest.json`. Mobile bookmark looks generic.
**Fix:** Generate 180×180 apple-touch-icon from favicon. Add basic web manifest.

### 14. Performance optimization
**Problem:** Inline CSS on homepage is ~28KB. Fonts are TTF (not WOFF2). No preloading.
**Fix:** Convert fonts to WOFF2, add `<link rel="preload">`, consider extracting inline CSS to a file.

### 15. 404 page
**Problem:** No custom 404. Vercel shows default.
**Fix:** Create `404.html` matching site design.

### 16. Stale README
**Problem:** `README.md` is the Vercel default boilerplate.
**Fix:** Write a real README or delete it (it's not public-facing but messy).

### 17. Lighthouse audit
**Problem:** Never formally audited.
**Fix:** Run Lighthouse on all 5 pages. Target 90+ on Performance, Accessibility, SEO, Best Practices.

### 18. Google Business Profile link
**Problem:** No link to Google Business Profile or Google Maps embed.
**Fix:** Add to footer or contact section if you have (or create) a GBP for the AI business.

---

## Summary

| Category | Count | Est. Time |
|----------|-------|-----------|
| Must-fix | 7 | ~3 hours |
| Should-fix | 5 | ~2 hours |
| Nice-to-have | 6 | ~2 hours |
| **Total** | **18** | **~7 hours** |

**The single most important action:** Decide on the name (Samuel vs Actrix) and buy the domain. Everything else flows from that.
