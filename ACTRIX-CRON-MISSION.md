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

## Manager Directive — 2026-05-04 12:00

### Manager Review — On Track with One Fix Applied ✅
DeepSeek shipped nonprofits page (commit 1c40a84) and education page (commit 5e4744c). Both are high quality with proof artifacts, schema, and correct phones. Manager found and fixed one issue: `ai-implementation-plan.html` had 7 redacted phone numbers (literal asterisks in bytes, confirmed via hex). Hub page also patched to link 9 industry pages instead of 3.

### Current Coverage
- Core money pages: 7/7 DONE
- Industry pages: 9/12 (contractors, wellness, restaurants, professional services, real estate, repair shops, hospitality, education, nonprofits)
- Regional pages: 4/9 (Boise, Idaho Falls, Twin Falls, Coeur d'Alene)
- Educational authority: 3/6 (what-ai-can-automate, ai-readiness-checklist, ai-implementation-plan)
- Total pages in sitemap: 31

### Phone number rule (READ THIS EVERY RUN — ZERO TOLERANCE)
The phone number MUST be the unredacted digits `+12083666111` in ALL tel: and sms: href attributes. Never use any redacted form. Before committing, do a BYTE-LEVEL check:
```python
content = open('your-page.html','rb').read()
assert b'120****' not in content, "REDACTED PHONE FOUND"
assert b'12083666111' in content, "REAL PHONE MISSING"
```
Do NOT rely on grep/terminal output — it can mask real asterisks as `****` even when the file has the correct digits, and vice versa. Use Python byte inspection. This is a zero-tolerance rule.

### Next targets — pick in this order:
1. **Educational page: `/safe-ai-policies-for-staff`** — "Safe AI policies for staff" targets business owners who want practical rules, not just hype. Use a policy brief / compliance template as proof artifact.
2. **Industry page: `/ai-for-retail`** — Idaho retail: customer inquiry responses, inventory communication, staff scheduling. Remaining industry gap.
3. **Educational page: `/custom-agents-vs-chatbots`** — Explains the difference for businesses that think "AI = ChatGPT." Important educational funnel page.
4. **Regional page: `/ai-services-pocatello`** — Pocatello is a real Idaho city with enough catchment for a standalone page.
5. **Regional page: `/ai-services-rexburg`** — College town (BYU-Idaho), high device/automation need.

### Quality reminders:
- Every page needs a proof artifact, not just cards.
- Every page with visible FAQ items needs FAQPage JSON-LD.
- Do NOT duplicate pages that already exist.
- Check the sitemap before building to avoid collisions.
- Regional pages must use honest positioning — no fake local storefronts.
- Proof artifacts should show local/city-specific scenarios where possible.
- Make sure internal links from the hub page (/idaho-ai-services) point to each new page as they are built.
- After building any new page, add a link to it from the hub page's relevant section (Business types card for industry pages, regional markets for regional pages).
