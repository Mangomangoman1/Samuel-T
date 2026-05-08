# Codex Critic — Actrix site map mobile routing

Date: 2026-05-07 20:40 MDT  
Property: Actrix production repo (`/Users/Samuel/.hermes/webagent/Samuel-T`)  
Page: `site-map.html` / `/site-map`  
Mode: critique-only, no production page edit

## Repo identity

- Remote verified: `git@github.com:Mangomangoman1/Samuel-T.git`
- Branch: `main`
- Latest commit at inspection: `a7b130f Update Actrix mission after Wood River Valley depth pass`

## What I inspected

- Source: `site-map.html`
- Local preview: `http://127.0.0.1:4177/site-map.html`
- Mobile viewport: 375 × 812 via Playwright/Chrome
- Browser QA: no console errors, no horizontal overflow, one H1
- Byte-level phone audit: source contains real `+12083666111` / `12083666111`; terminal masking made it appear as `****` in some output, but bytes are clean.

## Brutal useful finding

The page is **not generic** anymore — it correctly avoids the usual sitemap trap of dumping a tree first. The buyer-routing block is the right move: calls leaking, messy quotes, staff guardrails, repeated admin, local Idaho route. That makes the page feel like a utility for a real business owner instead of a designer proving the IA.

The remaining weakness is subtler: **the first-screen metaphor is doing a little too much work.**

Hero headline:

> Find the Actrix page for your business leak.

That is memorable and owned, but on a cold 375px phone screen a serious Wood River Valley owner may need half a beat to decode “business leak.” The lede explains it well, but the fastest comprehension path would pair the metaphor with one literal clause immediately above or below the CTA.

Suggested microcopy patch when someone next touches this page:

> Calls, quotes, follow-up, staff AI use, or repeated admin — choose the leak and jump to the right fix.

Or add a small risk-reversal line directly under the primary CTA:

> No pitch deck. Start with one messy workflow and a human-approved first system.

Why this matters: the CTA “Choose your problem” is strong, but the page’s proprietary language should never make a first-time owner wonder whether “leak” means leads, money, time, or all of it. Literal examples tighten the 4-second test without making the copy generic.

## What is already working

- **Mobile CTA hierarchy:** `Choose your problem` is the dominant gold button above the fold.
- **Conversion path:** header `Call` button is visible on 375px without stealing focus from the routing CTA.
- **Directory-as-product:** buyer routing appears before the full directory. Good.
- **Local specificity:** Idaho service businesses / Wood River Valley context appears early enough.
- **Anti-generic:** no SaaS stock hero, no fake dashboard, no centered gradient blob as personality.
- **Technical basics:** title/meta/canonical/AIDI tags/JSON-LD present; one H1; 46 body links excluding header/nav/footer.

## Taste pass recommendation

Do **not** redesign this page. It has the right job and the right shape. The next pass should be a tiny clarity/proof pass only:

1. Add literal example microcopy under the hero CTA or inside the lede.
2. Add one concrete trust/proof phrase above the fold if Actrix has a safe one: e.g. “for Idaho owner-run service teams” is honest; avoid fake metrics.
3. Keep the full directory secondary. Do not add a proof card or dashboard artifact here — the directory itself is the artifact.

## QA notes

- 375px `scrollWidth`: `375`, `clientWidth`: `375` — pass.
- Protruding elements at 375px: none.
- Console messages: none.
- H1 count: 1.
- Contextual body links excluding header/nav/footer: 46.
- Phone bytes: real digits present; no literal masked phone in source.

## Critic verdict

**Recommended, not urgent:** sharpen the “business leak” metaphor with literal examples and risk-reversal microcopy. No broad restyle needed. The page is already one of the cleaner Actrix utility pages because it makes the visitor choose a problem before reading the site tree.
