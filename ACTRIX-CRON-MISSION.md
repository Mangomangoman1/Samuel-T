# Actrix DeepSeek Cron Mission

## North Star
Turn Actrix into the definitive AI implementation firm in Idaho. The site should compete for every serious Idaho query around AI support, AI consulting, AI automation, AI installation, AI agents, AI training, and practical AI help for businesses.

Actrix is no longer framed as a small Wood River Valley side project. It is an Idaho AI firm: serious, useful, technically credible, and grounded in real business operations.

## Brand Position
- Actrix = Idaho AI implementation firm.
- Built in Idaho, serving Idaho statewide.
- Practical systems, custom agents, automation, support, training, and human-approved workflows.
- No fake local offices. Be honest about remote/statewide service.
- No generic AI hype, purple gradients, robots, or vague “transform your business” filler.
- Sell implementation and outcomes: leads rescued, quotes structured, follow-up handled, reports generated, staff trained, tools cleaned up.

## Design Standard
- Marcellus display typography, dark warm-charcoal/slate Actrix palette, crisp operational UI artifacts.
- Every important page needs a proof artifact: quote brief, missed-call rescue log, implementation audit, training plan, owner memo, automation map, support ticket, or AI readiness scorecard.
- Mobile-first verification at 375px, 768px, and 1440px. No horizontal overflow.
- Phone/text CTA must remain easy to find.

## SEO Expansion Priorities
1. Core statewide money pages:
   - /idaho-ai-services
   - /idaho-ai-consulting
   - /ai-automation-idaho
   - /ai-support-idaho
   - /ai-training-idaho
   - /ai-agents-for-business
   - /business-automation-idaho
2. Industry pages:
   - contractors, clinics/wellness, restaurants/cafes, retail, professional services, real estate/property services, repair shops, hospitality, nonprofits, schools/education.
3. City/regional pages with honest positioning:
   - Boise, Meridian/Nampa, Idaho Falls, Twin Falls, Pocatello, Rexburg, Moscow, Coeur d’Alene, Wood River Valley.
4. Educational authority pages:
   - what AI can automate for a small business
   - AI readiness checklist
   - AI implementation plan
   - safe AI policies for staff
   - custom agents vs chatbots
   - how to install AI in an existing business

## Mandatory Per-Run Rules
- Before editing: verify repo is Samuel-T and inspect git status.
- Build one valuable page or one meaningful improvement per run. Do not spray thin pages.
- Update nav/internal links only when it improves discovery.
- Update sitemap.xml for every new canonical page.
- Add unique title, meta description, canonical, OG tags, and appropriate schema.
- Use visible, helpful body content. No keyword stuffing or city-swap garbage.
- Run local verification for changed pages: HTML syntax sanity, one H1, no accidental noindex, sitemap includes page, no horizontal overflow at 375/768/1440 if browser/headless tools are available.
- Commit and push with a clear message.
- Final response must include: page/improvement shipped, URLs, commit hash, QA status, next best target.

## Current Strategic Foundation
Homepage now points to statewide Idaho AI positioning and links to /idaho-ai-services as the hub. Future runs should expand outward from that hub rather than returning to narrow Wood River Valley-only framing.

### Manager Directive — 2026-05-04 18:30

### Manager Review — On Track ✅
DeepSeek is executing well in the quality/depth phase. Last 5 runs:
1. **Hub page rebuilt** (0a70858): /idaho-ai-services expanded from 37-line stub to 482-line comprehensive hub with 36 body links, 6 service cards, 11 industry links, 9 regional links, FAQPage schema.
2. **Homepage polished** (51ced84): Official-company hardening pass on index.html — 55 insertions, 30 deletions.
3. **Nonprofits deepened** (6cba3f3): Added 10 contextual body links, Idaho regional section, richer footer.
4. **Real estate fixed** (d0ff7ed): Repaired broken JSON-LD (double-escaped \\n from prior bad patch), added 8 FAQPage schema questions, added contextual body links.
5. **Education deepened** (4857d1b): Added 8-card Idaho institution grid, 4 contextual link strips, rich footer, body links 0→18.

All 40 pages pass basic quality checks: no redacted phones, valid JSON-LD, one H1 each, titles/canonicals/OG present.

### ALL PAGE CATEGORIES ARE NOW COMPLETE ✅🎉
- Core money pages: 7/7 DONE ✅
- Industry pages: 11/11 DONE ✅
- Regional pages: 9/9 DONE ✅
- Educational authority: 5/5 DONE ✅
- Total pages in sitemap: 40 (no duplicates, no orphans)

### ⚡ PRIORITY: INTERNAL LINKING DEPTH GAP — 17 PAGES HAVE ZERO BODY LINKS

Manager audit found 17 pages with ZERO contextual body links (only nav/footer). This is the single highest-impact action for SEO authority flow and visitor discovery.

**Pages with 0 body links (prioritize in this order):**

Tier 1 — Core money pages (highest SEO value):
1. idaho-ai-consulting.html
2. ai-automation-idaho.html
3. ai-support-idaho.html
4. ai-training-idaho.html
5. ai-agents-for-business.html
6. business-automation-idaho.html

Tier 2 — High-value industry pages:
7. ai-for-contractors.html
8. ai-for-professional-services.html
9. ai-for-restaurants-cafes.html
10. ai-for-wellness-health.html
11. ai-for-repair-shops.html
12. ai-for-retail.html
13. ai-for-hospitality.html

Tier 3 — Solution/educational pages:
14. missed-call-rescue.html
15. ai-quote-intake.html
16. what-ai-can-automate-for-small-business.html
17. ai-readiness-checklist.html

**Already-well-linked pages (DO NOT re-do):**
- idaho-ai-services.html (36 body links) ✅
- ai-for-education.html (18 body links) ✅
- ai-for-nonprofits.html (10 body links) ✅
- ai-for-real-estate.html (10 body links) ✅
- index.html (10 body links) ✅

### INSTRUCTIONS PER RUN:
1. Pick ONE page from the zero-body-links list above (tier 1 first, then tier 2, then tier 3).
2. Read the page content. Find 3–5 natural places to add contextual link strips:
   - After the pain/problem section
   - After the "how it works" / role section
   - After the use-case cards
   - After the FAQ section
3. Add "Related:" or "Explore:" link rows using this exact pattern:
   ```html
   <div style="margin-top:22px;display:flex;flex-wrap:wrap;gap:10px;align-items:center">
     <span style="color:var(--muted);font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em">Related:</span>
     <a href="/target-page" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;border:1px solid var(--line);background:rgba(222,230,238,.04);color:var(--soft);font-size:.82rem;font-weight:800">Anchor text →</a>
   </div>
   ```
4. Link to: hub page, related industry pages, relevant regional pages, related educational pages, and solution pages.
5. If the page has a thin footer, upgrade to the 3-column rich footer pattern (see ai-for-education.html for reference).
6. If there is a good opportunity to add a regional "where we work" section with linked cards, add one (see ai-for-nonprofits.html for reference).
7. Update sitemap lastmod for the touched page.
8. Run standard verification: one H1, no `[truncated]`, phone bytes clean via Python, JSON-LD parses, CSS braces balanced, `git diff --check` clean.

### TARGET: 10+ contextual body links per page (up from 0).
Each run should deep-link ONE page. Do not spread thin across multiple pages.

### CRITICAL DIRECTION — QUALITY AND DEPTH PHASE ONLY
The build phase is OVER. Do NOT create new pages.

### DO NOT:
- Create new pages unless Samuel explicitly asks for one.
- Clone or duplicate existing page structures into new URLs.
- Make cosmetic-only changes that don't improve conversion, SEO, or usefulness.
- Spend runs on palette tweaks unless there is a real visual inconsistency to fix.

### Phone number rule (READ THIS EVERY RUN — ZERO TOLERANCE)
The phone number MUST be the unredacted digits `+12083666111` in ALL tel: and sms: href attributes. Never use any redacted form. Before committing, do a BYTE-LEVEL check:
```python
content = open('your-page.html','rb').read()
assert b'120****' not in content, "REDACTED PHONE FOUND"
assert b'12083666111' in content, "REAL PHONE MISSING"
```
Do NOT rely on grep/terminal output — it can mask real asterisks as `****` even when the file has the correct digits, and vice versa. Use Python byte inspection. This is a zero-tolerance rule.

### Quality reminders:
- Every page needs a proof artifact, not just cards.
- Every page with visible FAQ items needs FAQPage JSON-LD.
- Do NOT duplicate pages that already exist — check filesystem and sitemap first.
- Regional pages must use honest positioning — no fake local storefronts.
- Proof artifacts should show local/city-specific scenarios where possible.
- Make sure internal links from the hub page (/idaho-ai-services) point to each page.
- Batch color/style changes into fewer commits.
- After any edit, verify the page still has exactly ONE sitemap entry (no duplicates).
- Do NOT build new pages. Only deepen, fix, and strengthen existing ones.
