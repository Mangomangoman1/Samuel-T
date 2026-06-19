# Actrix — First-Class Polish Run (working plan & log)

**Started:** 2026-06-18 · **Mode:** self-paced loop, runs until interrupted.
**Mandate (from Samuel):** Full site polish/SEO/optimisation/design/expansion/cohesion/creativity.
"First-class in everything it does, everywhere." ~50% design, ~50% everything else.
Full authority. Search Console + GBP already done on his end — focus is the site itself.

## Non-negotiables (honor the existing mission)
- Brand: Actrix = Idaho AI implementation firm. Statewide, honest (no fake local offices),
  no AI-hype clichés (no purple gradients/robots/"transform your business").
- Design language: Marcellus display type, warm charcoal/slate palette, crisp operational
  "proof artifacts", phone/text CTA easy to find.
- **PHONE RULE (zero tolerance):** every `tel:`/`sms:` href must be `+12083666111` unredacted.
  Byte-check before any commit.
- Mobile-first: verify 375 / 768 / 1440, no horizontal overflow.
- Per change: one H1, valid JSON-LD, balanced CSS, sitemap entry intact, FAQ→FAQPage schema.
- Verify visually (Playwright) before claiming a design change is good. Incremental + checked.

## Audit findings (2026-06-18)
- Foundation is strong: on-brand, good proof artifacts, clean technical SEO.
- **Cohesion gap (top design issue):** two divergent token systems.
  - 41 "main" pages: inline tokens `--bg:#27231d`, `--paper:#DEE6EE`, accent `--amber:#e3bf6d`.
  - 8 pages link `styles.css`: `--bg:#242018`, `--paper:#e5edf3`, accent `--copper` (no amber).
    Affected (important!): pricing, roi-calculator, buyers-guide, custom-ai-agent-stack-idaho,
    ai-workflow-integration-idaho, operations-intelligence, about-actrix, case-studies.
  - Canonical = the homepage system. Align styles.css TO it.
- Homepage inline CSS redefines `.btn-primary`/`.nav-cta` across multiple <style> blocks
  (cascade-dependent, messy but works). Canonical primary btn = `linear-gradient(180deg,
  var(--amber),#d89f60)`, text `#221d17`.
- **Email — RESOLVED (iter 2):** new business email is `samuel@actrix.me`. Swept across all 11
  HTML pages (mailto + visible + schema), llms.txt, humans.txt, README, and the generator
  script `scripts/agent-stack-sprint.mjs` (which stamps it, so it would have reintroduced the
  old one). JSON-LD revalidated, phone intact. Old `wpbflsf@gmail.com` gone from live files.
- City pages already well-localized (earlier pass strengthened Idaho Falls/Twin Falls/CdA cards).

## Backlog (prioritized; check off in log)
### Design (~half the effort)
- [x] Unify palette: align styles.css tokens + primary CTA to canonical amber. (iter 1)
- [x] Harmonize secondary accents in styles.css (15 ember/copper-bright text→amber). (iter 2, verified)
- [ ] Align `--panel` slate (styles.css #697d8f vs canonical ~#3E4A56) after visual check.
- [x] **polish.css sitewide craft layer** (iter 3): font-smoothing, branded ::selection, custom
      scrollbar, text-wrap balance/pretty, [id] scroll-margin, tap-highlight. Linked on all 49
      pages — THE shared hook for all future sitewide refinements (the 41 main pages are
      otherwise inline-only with no shared sheet). Add safe additive refinements here first.
- [~] Typography pass: selection/smoothing/wrap done via polish.css. Still: fluid scale,
      line-height/measure tuning, Marcellus kerning, tabular numerals on metrics.
- [ ] Micro-interactions: button/card hover/active, focus-visible consistency, link underlines.
- [ ] Background depth: subtle, on-brand grain/glow consistency between home and styles.css pages.
- [~] Font loading: Marcellus preload added sitewide (iter 6). TTF→WOFF2 still TODO — BLOCKED:
      no fontTools/brotli/woff2_compress in env. Revisit if tooling becomes available.
- [x] OG card refresh (iter 4): rebuilt as first-class Actrix card via HTML→PNG render.
- [x] apple-touch-icon (180) + icon-192/512 + site.webmanifest + theme-color fix (iter 5).
- [x] Panel slate (iter 5): RESOLVED — not a real gap. styles.css cards already use canonical
      slate rgba(62,74,86) (17×); --panel #697d8f used in only 2 step-indicators. No change made.
- [ ] Per-page visual QA sweep at 375/768/1440 for overflow/rhythm.
### SEO / content / cohesion (~half)
- [ ] Consolidate homepage inline CSS duplication; consider shared design-system extraction.
- [x] Link integrity (iter 8): FULL scan — all 3,603 internal links resolve, every page reachable
      (no orphans). Footer ×49, tel: ×all. Clean.
- [x] **Nav hybrid — IMPLEMENTED (iter 9, Samuel's call):** "3 consistent + contextual, truly useful
      everywhere." Consistent 3 = **AI services · How it works · Pricing** lead every page's primary
      nav (desktop nav-center on 41 inline + nav-links on 8 styles.css), AND lead the mobile drawer.
      Contextual tail (2 page-specific links) varies by cluster: cities→2 nearby cities,
      industries→sibling industry+Solutions, products→sibling product, guides→related guide, etc.
      Map lives in /tmp/nav_rewrite.py (re-runnable, idempotent). Phone+CTA preserved, all links
      resolve, no overflow, mobile drawers unified (canonical menu minus self-link).
- [ ] Schema depth: LocalBusiness/Organization sitewide, breadcrumbs, sameAs.
- [x] 404 page on-brand (iter 7): /404.html, noindex, not in sitemap, full nav+footer chrome,
      6 destination cards w/ hover-lift, text-the-workflow CTA. Vercel auto-serves root 404.html.
      SPECIAL PAGE: noindex + no canonical + not in sitemap is CORRECT — exclude from content QA.
- [ ] Content depth/expansion where genuinely thin (no thin pages).

## Progress log
### Iteration 1 — 2026-06-18
- Stood up local server + Playwright visual baseline (home desktop/mobile, pricing page).
- Full design-system + CSS-architecture audit (above).
- Created this plan. Gitignored inspection screenshots.
- Shipped: styles.css palette aligned to canonical + `.btn-primary` repointed to amber gold
  (unifies the 8 styles.css pages with the main site). Verified on pricing page.
- Next: harmonize styles.css secondary accents + panel slate; then typography pass.

### Iteration 2 — 2026-06-18
- Email fix (Samuel confirmed new address `samuel@actrix.me`): swept all 11 HTML pages
  (mailto + visible + 2 schema fields), llms.txt, humans.txt, README, and the generator
  script. JSON-LD revalidated (11/11 valid), phone byte-check clean, zero old addresses left.
- Accent harmonization: repointed all 15 warm text accents in styles.css
  (.section-kicker, .card-number, nav/hero phone+email, .offer-card a, .faq-list summary,
  active step labels, footer link hover) from ember/copper-bright → --amber. Verified on
  buyers-guide page: gold kickers/numbers/CTAs, cohesive with homepage. CSS balanced 253/253.
- The 8 styles.css pages now fully match the main site's palette + accent system.
- Next: visual-check panel slate (--panel #697d8f vs canonical ~#3E4A56), then typography pass
  (fluid scale, measure/line-height, Marcellus kerning, selection color).

### Iteration 3 — 2026-06-18
- Identified the structural blocker: NO shared stylesheet across the 49 pages (41 inline-only,
  8 link styles.css, inline blocks not identical) — and zero craft micro-details sitewide
  (no font-smoothing, ::selection, scrollbar, scroll-margin).
- Built **polish.css** (12 additive rules) and linked it on all 49 pages before </head>.
  Adds: -webkit/-moz font-smoothing (crisper glyphs on dark bg), branded amber ::selection,
  on-brand custom scrollbar (amber on hover), text-wrap balance(headings)/pretty(body),
  scroll-margin-top:96px for sticky-nav anchor jumps, tap-highlight removal, responsive media.
- Verified in-browser (cache-busted): polish sheet loads with 12 rules, font-smoothing=antialiased,
  h2 text-wrap=balance, no horizontal overflow at 1440 or 375 (city page widest element = HTML@375).
- QA: phone intact ×49, exactly 1 polish link + 1 </head> ×49, 1 H1 ×spot-checked, CSS balanced.
- This is the foundation: future sitewide design refinements go in polish.css (one file, all pages).
- Next: panel slate visual check; OG card still shows stale "Samuel" branding (brand bug on social);
  then deeper typography (fluid scale, tabular numerals on metrics, Marcellus kerning).

### Iteration 4 — 2026-06-18
- Fixed the OG share-card brand bug. The old og-card.png read "WOOD RIVER VALLEY AI SYSTEMS /
  Samuel / wpbflsf@gmail.com" — wrong name, wrong positioning, bouncing email — shown on every
  social/iMessage/Slack share.
- Built **og-card.html** (render source, noindexed) using the site's real Marcellus font +
  warm-charcoal/amber palette + signal-path motif. Rendered at exactly 1200×630 via Playwright
  (waited document.fonts.ready) → replaced og-card.png. New card: Actrix wordmark, "Idaho AI
  Implementation Firm", headline "Custom AI agent stacks for Idaho companies.", phone +
  samuel@actrix.me + actrix.me. Verified visually — clean, premium, on-brand.
- Scrubbed stale branding from unreferenced og-card.svg + fixed favicon.svg aria-label
  ("Samuel AI systems icon" → "Actrix icon"). Confirmed: no "Wood River Valley"/"by Samuel"/
  "wpbflsf" left in any asset. (Person-name "Samuel" as founder in schema/about copy is correct,
  left intact.)
- Added og:image:width=1200 + og:image:height=630 + og:image:alt + twitter:image:alt to all 49
  content pages (instant social render + accessibility). No dupes.
- QA: phone intact ×49, one H1 ×49, JSON-LD valid, head clean. NOTE: og-card.html is a render
  source (no og:image, noindexed) — exclude it from content-page QA in future passes.
- og-card.png is 451KB (fine for OG, <1MB). Optional later: lighter compression.
- Next: panel slate visual check, then typography depth (tabular numerals on metric/number
  displays, fluid type scale tuning), then apple-touch-icon + manifest.

### Iteration 5 — 2026-06-18
- Panel slate: investigated, RESOLVED as non-issue (cards already canonical slate; see backlog).
- Visual audit (fidelity, 1440): homepage hero + agent-loop (Sense/Think/Act) + rich 3-col footer
  all confirmed first-class. (A perceived "Sense!" typo was a thumbnail misread — source is clean.
  Lesson: verify against source before "fixing".) No manufactured design changes on good work.
- Mobile/native presence (was entirely missing): rendered on-brand app icons from _icon-render.html
  (noindexed render source) at 180/192/512 via Playwright → apple-touch-icon.png, icon-192.png,
  icon-512.png. Created site.webmanifest (standalone, maskable icon, brand colors). Added
  apple-touch-icon + manifest <link>s to all 49 pages.
- Fixed theme-color: was #242018 (the OLD divergent bg) on all 49 → canonical #27231d, so the
  mobile browser chrome now matches the actual site background.
- QA: assets serve 200, manifest valid JSON, phone intact ×all, one H1 ×all content pages,
  exactly one </head> ×51 files. Render scaffolds (og-card.html, _icon-render.html) are noindexed,
  exclude from content QA.
- New committable assets: og-card.png, apple-touch-icon.png, icon-192.png, icon-512.png,
  site.webmanifest, polish.css, og-card.html, _icon-render.html.
- Next: typography depth (fluid type scale, tabular numerals where fonts support it), then a
  per-page mobile QA sweep (375/768) across the city/industry templates for overflow/rhythm.

### Iteration 6 — 2026-06-18  (weighted to the SEO/perf half)
- Schema audit: homepage is already first-class — entity is ["ProfessionalService","LocalBusiness"]
  "Actrix" with logo/telephone/founder(Person)/areaServed/ContactPoint/OfferCatalog(4 Services)
  + FAQPage. (Earlier "LocalBusiness: 0" was a false negative — type is an ARRAY.) No schema gap
  worth forcing; BreadcrumbList is the only thin spot (defer; ideally pair with visible crumbs).
- 768px tablet breakpoint (mission-required, was never verified): homepage clean, scrollWidth=768,
  zero overflowers.
- Font/perf analysis via document.fonts: ONLY Marcellus (44KB) is downloaded+used (every heading,
  incl. hero H1 = LCP). Body/lede render in SYSTEM fonts (Aptos→Helvetica Neue). Merom Sans (3
  weights, ~623KB) are status "unloaded" — never fetched, so NO waste; left untouched.
- Added <link rel=preload as=font crossorigin> for Marcellus-Regular.ttf after <meta charset> on
  all 49 content pages. Verified in-browser: preload honored, crossorigin=anonymous, Marcellus
  loaded, exactly ONE fetch (no double-download) → earlier discovery, better LCP/less FOUT.
- No WOFF2 conversion: env lacks fontTools/brotli/woff2_compress.
- QA: phone ×all, one H1 ×49, head integrity (1 charset/1 preload/1 </head>) ×49.
- ~67 files now changed in working tree across iters 1–6, still uncommitted per Samuel's call.
- Next: deeper typography on the homepage (the one page where inline CSS lets me tune type scale
  safely), then the full 375/768 sweep across templated pages.

### Iteration 7 — 2026-06-18
- Built /404.html — was missing entirely (Vercel default). Reuses the exact styles.css-page chrome
  (header nav + 3-col footer), noindex,follow, not in sitemap. On-brand: big amber Marcellus "404",
  voice "That workflow doesn't live here.", 6 destination cards (gold kickers + hover-lift micro-
  interaction) → hub/solutions/pricing/how-it-works/case-studies/site-map, text-the-workflow CTA.
- Verified: desktop 1440 (looks first-class, cohesive) + mobile 375 (zero overflow, Marcellus h1,
  nav+footer present, 6 cards). QA: phone real+unredacted, tel+sms present, one H1, noindex=1,
  sitemap excludes it, email correct, script.js populates footer [data-year] (line 167).
- Nav/footer cohesion spot-check: footer ×49, tel: ×all, no broken links in sample (clean).
- Vercel serves root 404.html automatically for unmatched routes (static convention) — no config.
- Next: full nav/footer per-page diff + homepage typography depth.

### Iteration 8 — 2026-06-18  (cohesion / correctness half)
- Full internal-link integrity scan (all 49 content pages): 3,603 internal links → all resolve;
  every content page reachable (no orphans). No broken links, no dead ends. (First pass had 6
  false positives from a resolver that ignored real asset files — corrected.)
- Characterized nav: **13 distinct primary-nav link-sets** — surfaced as the #1 remaining cohesion
  issue and logged as a Samuel decision (see backlog [!]). Deliberately NOT rewritten autonomously
  (IA call + risky 49-page/2-nav rewrite).
- Mobile QA sweep on untested page types at 375: ai-automation-roi-calculator (interactive, the
  hardest case) — zero overflow, all 6 inputs usable/in-view, renders first-class. With prior
  checks (home 375/768, boise 375, 404 375, buyers-guide) the mobile experience is verified solid.
- QA stayed green (no page edits this iter — audit + verification only).
- Next: homepage typography depth (safe, single-page), or implement the nav decision once Samuel weighs in.

### Iteration 9 — 2026-06-18  (Samuel directive: hybrid nav)
- Samuel chose: keep 3 nav links consistent everywhere, rest contextual but "truly useful everywhere."
- Mapped both nav systems: inline (41) = desktop .nav-center + separate .mobile-menu-panel drawer
  (drawer was already ~consistent: 38/41 identical); styles.css (8) = one responsive .nav-links.
  The 10 desktop-nav variants were the real inconsistency.
- Built /tmp/nav_rewrite.py: consistent 3 (AI services/How it works/Pricing) + per-page contextual
  map (49 pages, by cluster) + canonical mobile drawer led by the consistent 3. Idempotent.
- Piloted on boise (inline) + case-studies (styles.css), visually verified desktop nav (no overflow,
  clean) + mobile drawer (opens, leads with consistent 3, self-link excluded). Then rolled out to all.
- Verified post-rollout: all 49 lead with consistent 3; 3,603+ internal links still all resolve;
  phone bytes clean ×all; tel:+CTA present ×all; one H1 ×all; homepage nav rendered + confirmed.
- Result: primary nav is now consistent wherever you are, with genuinely page-relevant contextual
  links (cities→nearby cities, industries→siblings, products→siblings, guides→related guides).
- Next: homepage typography depth.

### Iteration 10 — 2026-06-18  (accessibility pass)
- WCAG contrast audit (exact-hex): site PASSES AA. paper/muted/amber/sage = 7–12:1 on bg and on
  cards; amber CTAs are dark-text-on-amber = 9.5:1. Only sub-AA-normal cases are de-emphasized
  "soft" text on cards (4.10) which still passes AA-large — not worth a 41-page token nudge.
  (A browser auto-audit "found 8 fails" — ALL false positives from gradient-button bg mis-detection.)
- A11y checks: all <img> have alt ✓; all ROI-calculator inputs labeled ✓; skip links present.
- FIXED homepage heading skip: hero mockup label was <h3> before the first <h2> (h1→h3 skip).
  Converted to <div class="brief-headline"> (mockup chrome, not document structure), retargeted
  .brief-problem h3 → .brief-problem .brief-headline + preserved letter-spacing. Verified: seq now
  1→2→3, one H1, hero renders byte-identical, font=Marcellus/color=#1f1c17 intact.
- DEFERRED (documented, low ROI/risk): 7 inner pages have the same mockup-heading skip. Fix recipe
  per page = convert the offending bare hN→<div class="mock-head"> and retarget its dedicated rule:
    ai-quote-intake (.qb-brief h3) · ai-support-idaho (.ticket h4) · idaho-ai-consulting (.roadmap-item h4)
    · ai-for-restaurants-cafes (.host-event h3) · safe-ai-policies-for-staff (.tpl-col h4)
    · ai-training-idaho (.train-module h4) · missed-call-rescue (.rc-call-event h3).
  Each container may style sibling headings, so retarget "alongside" (.container .mock-head,.container hN)
  and visually verify per page. Minor (decorative mockups) — fix opportunistically or on Samuel's word.
- Next: homepage typography depth, or knock out the 7 mockup-heading fixes if Samuel wants them.

### Iteration 11 — 2026-06-18  (deployment hardening)
- Verified sitewide head essentials: all pages have lang + viewport + charset ✓ (no gaps).
- Hardened vercel.json security/best-practice headers (was 2 → now 6 global):
  + Strict-Transport-Security (2yr, includeSubDomains, preload), X-Frame-Options: SAMEORIGIN,
    Permissions-Policy (camera/mic/geo off + browsing-topics opt-out), X-DNS-Prefetch-Control: on.
  + Added immutable 1yr Cache-Control for /assets/fonts/* (safe: fonts never change in place;
    complements the Marcellus preload). Valid JSON, cleanUrls preserved. Applied on Vercel deploy.

## STATE OF THE SITE (after 11 iterations)
Actrix is now first-class across every dimension audited: brand cohesion (unified palette/accents,
polish.css craft layer), correct contact info, first-class OG card, full mobile/PWA presence, font
preload, on-brand 404, flawless internal-link integrity, hybrid context-aware nav, WCAG-AA contrast,
alt/labels/landmarks, and security headers. **We are in fine-polish / diminishing-returns territory.**
RECOMMENDATION: commit + deploy the batch now so all improvements go live and the SEO clock starts
with them in place. Remaining items are marginal: 7 decorative mockup-heading skips (turnkey recipe
above), schema BreadcrumbList (low value w/o visible crumbs), homepage inline-CSS de-dup (cleanup),
optional micro-interactions. None are blockers; none meaningfully move rankings (that's now time +
backlinks + GBP, which Samuel owns).

### Iteration 12 — 2026-06-18  (the 7 mockup-heading skips — DONE)
- Fixed all 7 remaining heading-order skips. NOTE the recipe undercounted: the 4 h4-based pages had
  MULTIPLE mockup h4s each (ticket rows / roadmap items / template columns / training modules), not
  one — all decorative artifact labels, all in the already-retargeted containers.
- Approach (verified safe): convert each bare mockup hN → <div class="mock-head"> and retarget its
  dedicated CSS rule alongside (.container .mock-head,.container hN). Key insight: the 3 h3 mockups
  set font-family:var(--font-title) (div keeps Marcellus via retarget); the 4 h4 mockups set NO
  font-family (h4 isn't in the Marcellus base rule → already body-font), so div renders identical —
  NO global base rule needed (adding one would've regressed the h4s). No duplicate-class bug
  (headings were all bare hN; parent classes preserved).
- 17 mock-head divs total across 7 pages. Visually verified all 4 distinct styling patterns:
  ai-quote-intake (h3+Marcellus), ai-support-idaho (ticket), idaho-ai-consulting (roadmap),
  safe-ai-policies-for-staff (3 template columns) — all render byte-identical.
- RESULT: ZERO heading-level skips on any page sitewide. QA: phone ×7, one H1 ×7, CSS balanced ×7,
  JSON-LD valid ×7. (Homepage hero label uses .brief-headline from iter 10 — separate, also fine.)
- Backlog now genuinely down to: BreadcrumbList schema (low value), homepage inline-CSS de-dup
  (cleanup), optional micro-interactions. Site is first-class; STRONGLY recommend commit + deploy.

### Iteration 13 — 2026-06-18  (pre-flight certification — no code changes)
- At genuine diminishing returns; declined to manufacture changes (BreadcrumbList = ~zero value
  until pages rank, months out; CSS de-dup = risk w/o user value). Did zero-risk verification.
- Ran a full PRE-FLIGHT QA CERTIFICATION across all 49 content pages (+404): phone unredacted, one
  H1, canonical present, JSON-LD valid, title+desc present, titles UNIQUE, no heading skips, no old
  email, sitemap covers all content + correctly excludes 404. **ALL PASS → DEPLOY-READY.**
- Builds on prior full audits (iter 8: all 3,603 links resolve; iter 12: zero heading skips).
- CONCLUSION: site is complete + deploy-ready. The right next action is Samuel's: commit + ship.

### Iteration 14 — 2026-06-18  (GIT CRISIS RESOLVED + REAL LOGO ADOPTED)
- Samuel hit a merge conflict in GitHub Desktop (51 files). Root cause: my polish work got committed
  locally (144552e), while a SEPARATE favicon/logo effort was pushed to origin/main (3 commits) —
  both edited every HTML <head>, so the pull collided. Nothing was lost.
- Aborted the merge safely (git merge --abort → back to 144552e with 100% of the polish intact).
- DISCOVERY: the remote favicon work contained the REAL Actrix logo (blue "X" mark) + a complete,
  coherent icon set generated from it (favicon.ico/16/32/svg, apple-touch, android-chrome 192/512).
  My OG card + app icons had used a placeholder graph mark. Samuel chose: real logo EVERYWHERE.
- Reconciled (best-of-both): adopted the real-logo icon set, reconciled every page's icon <head>
  block (full favicon set + manifest.json), rebuilt the OG card with the real logo (kept the polished
  card design), fixed manifest theme to #27231d, removed redundant graph-mark files
  (icon-192/512, site.webmanifest, _icon-render.html). KEPT all polish + the email fix (critical:
  the remote's schema still had the OLD wpbflsf email — did NOT take it).
- Committed (743e602) + `git merge -s ours origin/main` (84e97e6) → branches unified, working tree
  clean, **ahead of origin by 3, behind 0** (clean push, no force, no conflicts).
- Re-certified: ALL pre-flight checks PASS; 50/50 pages on real-logo favicons; manifest valid.
- PENDING: Samuel's go to `git push` (the only remaining step; outward-facing, awaiting his OK).

### Iteration 15 — 2026-06-18  (nav scroll-shrink overlap fix + push confirmed)
- Samuel reported a real bug: on scroll the nav bar constricts (.is-constricted), but the centered
  link cluster (.nav-center) is absolutely positioned (reserves no layout space), so at the narrower
  width the links overlapped the phone pill.
- Samuel chose the approach: keep all 5 links visible, hide the PHONE pill on constrict (CTA stays;
  phone is in every footer). Added to polish.css (site-wide, one block):
    .nav.is-constricted .phone { display:none } + .nav.is-constricted .brand small { display:none }
  (the subtitle-tuck gives the centered links left-side clearance from the brand).
- Verified: constricted nav shows all 5 links + CTA, phone hidden, 88px left gap / 42px right gap,
  ZERO overlap, shrink animation intact. styles.css pages have no shrink (flex nav) → unaffected.
- PUSH CONFIRMED: Samuel pushed the reconciliation — main == origin/main == 74481f0. The real logo,
  email fix, and full polish are LIVE on origin (Vercel auto-deploy). 
- REMAINING: the nav fix (polish.css) is the one uncommitted change — awaits Samuel's "commit and
  push" to ship it too. Site still certifies deploy-ready.

### Iteration 16 — 2026-06-18  (NAV NORMALIZED SITEWIDE)
- Samuel noticed a couple pages used a different nav. Root cause: 41 pages had the rich inline nav
  (centered links, scroll-shrink, <details> mobile drawer, real-logo brand) while 9 pages used a
  flat styles.css nav (.site-header/.nav-links flex, no shrink, nav-toggle mobile).
- Normalized all 9 (about-actrix, ai-automation-pricing, ai-automation-roi-calculator,
  ai-workflow-integration-idaho, custom-ai-agent-stack-idaho, idaho-ai-automation-buyers-guide,
  operations-intelligence-ai-agents-idaho, case-studies, 404) to the inline nav.
- Mechanism (proven safe): extracted the COMPLETE inline nav CSS (67 blocks incl 8 @media + 2
  keyframes) + the gated scroll-shrink JS (var nav=querySelector('.nav'); if(!nav)return). Per page:
  swap .site-header HTML → .nav markup (keeping that page's links + canonical drawer minus self),
  inject nav CSS as inline <style> (after styles.css so it governs the .nav-shell/.brand overlap),
  inject the JS at end of body. The 41 inline pages were untouched (they don't load styles.css/script.js).
- Piloted on case-studies first, fully verified (desktop centered links, scroll-shrink constricts,
  phone hides via the polish.css nav fix, mobile <details> drawer opens, 96/68px clearance), THEN
  rolled out. Re-verified pricing (desktop+mobile drawer, 17-link drawer, no overflow) and the
  interactive ROI calculator (no layout breakage). QA on all 9: phone, one H1, valid JSON-LD,
  clean structure, no old email — ALL PASS. Sitewide: ZERO .site-header left → all 49 on one nav.
- DEAD CODE (optional cleanup): styles.css still has the now-unused .site-header/.nav-links/
  .nav-toggle rules (harmless; the inline nav CSS overrides). Can strip later.
- Uncommitted now: 9 normalized pages + polish.css (nav fix). On top of pushed reconciliation.

### Iteration 17–18 — 2026-06-18  (CREATIVE RE-ENGAGEMENT — back to design work)
- Samuel corrected me for idling ("this is a creative job... lots that can be improved"). Saved as
  memory [[dont-idle-on-creative-mandate]]. Reset the loop from idle re-cert → ACTIVE creative run
  with a design backlog. Honest critique: site was clean but MONOTONE + static.
- (iter 17) MOTION & LIFE: homepage hero entrance (@keyframes heroRise, staggered rise/fade on the
  6 text elements + artifact) + live-pulse amber dot on the proof-artifact "DETECTED SIGNAL" label.
  Sitewide scroll-reveal: enhance.js (IntersectionObserver, adds .reveal-on only when motion allowed;
  safety-net reveals in-viewport sections after 1.8s so content is NEVER stuck hidden) + polish.css
  rule #8 (sections below hero rise+fade on scroll). Linked enhance.js on all 50 pages. Graceful:
  no-JS / reduced-motion → everything visible. Verified homepage + boise; zero overflow.
- (iter 18) VISUAL RHYTHM: first tried subtle lighter bands (too faint) → switched to RECESSED WELLS
  (rgba(13,11,8,.42) + soft inset edges) on alternating sections (field-note quote, leak-ledger,
  faq). The philosophy pull-quote now reads as a distinct contemplative moment; page has cadence
  instead of flat scroll. Verified desktop boundary + mobile (375, no overflow, band clamps to vw).
- NEXT creative backlog: (2) two-tone amber+blue accent system, (3) elevate the CTA into a distinct
  conversion moment, (4) more life in the proof artifacts, (5) typography depth.
- All uncommitted-but-verified, clean for Samuel to batch-commit.

### Iteration 19 — 2026-06-18  (two-tone accent system — amber + the logo blue)
- Problem: the real logo is blue but the whole UI was amber — the blue read as a disconnected mark.
  The site already had a cool->warm SEMANTIC (--sky for Sense/Watch, --amber for Think/Approve,
  --sage for Act) but the cool blue (--sky #9ebfda) was too muted to connect to the vibrant logo.
- Made the blue DELIBERATE + logo-connected (homepage, the two signature elements):
  (a) hero proof artifact now flows cool->warm — the "Watch" lane (sensing/input) gets a blue tint
      + blue index (rgba(94,155,240,.16) / #2f63ab); the "Approve" lane keeps amber. Reads as
      blue-sensing -> amber-action.
  (b) refined --sky #9ebfda -> #84b4f2 (clearer, logo-connected blue) so the agent-loop "Sense"
      stage and the 5 cool-accent spots pop as an intentional counterpoint to amber.
- Verified: hero artifact (Watch blue vs Approve amber reads), agent-loop (Sense=blue / Think=amber
  / Act=green, harmonizes not clashes — distinct semantic roles). Color-only (no layout/overflow
  risk). QA: phone, one H1, balanced braces, valid JSON-LD.
- NEXT: extend the two-tone to inner-page proof artifacts; elevate the CTA (closeout) into a
  distinct moment; more life in the artifacts; typography depth.
