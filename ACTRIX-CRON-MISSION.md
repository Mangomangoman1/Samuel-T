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

### Manager Directive — 2026-05-04 16:20

### Manager Review — On Track ✅
DeepSeek had another strong run: shipped 4 new pages (manufacturing AI, Wood River Valley, Moscow, Meridian/Nampa) plus cross-linked the mobile menus and footers on the 4 earliest regional pages to reference all 9 regions. All new pages have clean phones, proper titles/canonicals/OG, FAQPage schema, proof artifacts, and hub page links.

**Manager fix applied:** Manufacturing page title was scoped to "Pocatello, ID" when it should be a statewide industry page. Fixed title, meta description, and OG tags to reference Idaho statewide instead of Pocatello-only.

### ALL PAGE CATEGORIES ARE NOW COMPLETE ✅🎉
- Core money pages: 7/7 DONE ✅
- Industry pages: 11/11 DONE ✅ (including manufacturing)
- Regional pages: 9/9 DONE ✅ (Boise, Idaho Falls, Twin Falls, Coeur d'Alene, Pocatello, Rexburg, Meridian/Nampa, Moscow, Wood River Valley)
- Educational authority: 5/5 DONE ✅
- Total pages in sitemap: 40 (no duplicates, no orphans)

### CRITICAL DIRECTION CHANGE — QUALITY AND DEPTH PHASE ONLY
The build phase is OVER. There are no more pages to create unless Samuel explicitly requests one. All future runs should focus exclusively on:

1. **Deepen thin pages.** Read every page and identify sections that are generic or shallow. Add real Idaho business scenarios, concrete automation examples, and industry-specific proof.
2. **Strengthen internal linking.** Check that industry pages link to relevant regional pages and vice versa. Add contextual body links, not just nav/footer links.
3. **Proof artifact quality pass.** Verify every page's proof artifact is specific and meaningful — not just a rehash of the same dispatch-card template with city names swapped.
4. **Title/meta optimization.** Some pages may have titles that are too similar. Differentiate them where the SERP opportunity warrants it.
5. **Mobile quality audit.** Check a few pages at 375px for overflow, cramped CTAs, or broken layouts.
6. **Cross-page consistency.** Verify phone digits, schema validity, and consistent footer/nav across all pages.
7. **Homepage hub authority.** Make sure /idaho-ai-services remains the strongest hub page with links to every sub-page.

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

### Recommended next run focus:
1. **Read 3–4 pages deeply** and identify the weakest sections (thin content, generic proof artifacts, missing local specificity).
2. **Pick the weakest page** and do a substantive depth pass — add real Idaho business scenarios, strengthen the proof artifact, deepen FAQ answers.
3. **One page per run.** Quality over quantity from here.

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
