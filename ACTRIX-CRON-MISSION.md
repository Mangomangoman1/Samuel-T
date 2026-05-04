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

## Manager Directive — 2026-05-04 14:00

### Manager Review — On Track ✅
DeepSeek had an excellent run: shipped 4 new pages (safe-ai-policies-for-staff, ai-for-retail, custom-agents-vs-chatbots, ai-services-pocatello) plus a substantive palette unification pass across 36 files. All new pages have clean phones, proper titles/canonicals/OG, FAQPage schema, proof artifacts, and hub page links. Manager fixed one issue: duplicate sitemap entry for Pocatello.

### Palette unification note
The big styles.css commit (47ef5bf) is APPROVED. It introduced real color differentiation (sage, sky, rose, distinct copper/ember/danger) which is a genuine improvement. The 8 subsequent micro-tweaks are harmless but borderline noise — 9 commits for color adjustments is excessive. Future runs should batch color tweaks into fewer commits.

### Current Coverage
- Core money pages: 7/7 DONE ✅
- Industry pages: 10/10 DONE ✅
- Regional pages: 5/9 (Boise, Idaho Falls, Twin Falls, Coeur d'Alene, Pocatello)
- Educational authority: 5/5 DONE ✅
- Total pages in sitemap: 35 (34 unique, after removing Pocatello duplicate)

### Phone number rule (READ THIS EVERY RUN — ZERO TOLERANCE)
The phone number MUST be the unredacted digits `+12083666111` in ALL tel: and sms: href attributes. Never use any redacted form. Before committing, do a BYTE-LEVEL check:
```python
content = open('your-page.html','rb').read()
assert b'120****' not in content, "REDACTED PHONE FOUND"
assert b'12083666111' in content, "REAL PHONE MISSING"
```
Do NOT rely on grep/terminal output — it can mask real asterisks as `****` even when the file has the correct digits, and vice versa. Use Python byte inspection. This is a zero-tolerance rule.

### Next targets — pick in this order:
1. **Regional page: `/ai-services-rexburg`** — College town (BYU-Idaho), high automation need, distinct from Pocatello. Rexburg + Madison County catchment is meaningful.
2. **Regional page: `/ai-services-meridian-nampa`** — Boise metro western suburbs, huge population, distinct enough from Boise page to warrant separate targeting. Cover Meridian, Nampa, Caldwell, Eagle, Kuna.
3. **Regional page: `/ai-services-moscow`** — University of Idaho town, Latah County, Palouse region. Student/research/family demographic.
4. **Regional page: `/ai-services-wood-river-valley`** — Hailey, Ketchum, Sun Valley, Bellevue. Home market. Should feel authoritative and honest about local roots.
5. **Quality pass on earliest regional pages** — Go back and review Boise, Idaho Falls, Twin Falls, Coeur d'Alene pages for: (a) palette consistency with new color tokens, (b) hub page crosslinks, (c) any thin content sections that need deepening.

### Important direction change:
All core money pages, all industry pages, and all educational authority pages are DONE. The remaining work is:
- 4 regional pages (Rexburg, Meridian/Nampa, Moscow, Wood River Valley)
- Quality passes on existing pages (palette consistency, deepening thin sections, verifying internal links)

Do NOT build any more industry or educational pages unless Samuel explicitly requests one. Focus on regional coverage and quality.

### Quality reminders:
- Every page needs a proof artifact, not just cards.
- Every page with visible FAQ items needs FAQPage JSON-LD.
- Do NOT duplicate pages that already exist — check filesystem and sitemap first.
- Regional pages must use honest positioning — no fake local storefronts.
- Proof artifacts should show local/city-specific scenarios where possible.
- Make sure internal links from the hub page (/idaho-ai-services) point to each new page.
- Batch color/style changes into fewer commits. Do not make 8 separate "slightly deepen rose accent" commits in one session.
- After building any new page, verify it has exactly ONE sitemap entry (no duplicates).
