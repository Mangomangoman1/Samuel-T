# 2026-05-07 14:44 MDT — Actrix site-map buyer-routing critique

## Target
Actrix production repo `/Users/Samuel/.hermes/webagent/Samuel-T`, page `site-map.html` (`/site-map`).

## Finding
The page had already moved away from the worst “designer-meta route map” trap, but the first visible decision path still behaved like a dressed-up sitemap: hero copy talked about page organization, CTA said “Start with services,” and the first card was “Home.” For a serious Idaho owner, that asks them to understand Actrix’s IA before they see their own problem.

## Brutal read
- The directory concept is useful, but the first screen was still company/site-centered: “Every Actrix page…”
- “Start with services” is a web-navigation CTA, not a buyer action.
- “Home” as the first directory card sends a visitor backward instead of helping them choose a next step.
- The page needed a buyer-routing interrupt before the full link directory: calls leaking, quotes messy, staff guardrails, repeated admin, local Idaho path, unsure/text us.

## Fix shipped
Patched `site-map.html` only:
- Rewrote hero H1 and lede around the buyer’s workflow leak.
- Changed primary CTA to `Choose your problem` targeting a new in-page buyer-routing module.
- Added a six-card `Buyer routing` section before the full directory:
  - Calls are leaking → `/missed-call-rescue`
  - Quotes are messy → `/ai-quote-intake`
  - Staff need guardrails → `/safe-ai-policies-for-staff`
  - Admin keeps repeating → `/business-automation-idaho`
  - Need a local Idaho path → `/ai-services-wood-river-valley`
  - Not sure yet → SMS workflow leak CTA
- Renamed the old “Start here” directory group to “Full directory” so the page stops pretending the directory is the primary decision tool.
- Added a mobile-only site-map phone label treatment so the nav contact action renders as compact “Call” while preserving the real `tel:+12083666111` href.

## QA
- Repo verified: `origin git@github.com:Mangomangoman1/Samuel-T.git`, branch `main`.
- Byte check: no literal `+120****6111`; correct `+12083666111` present.
- One H1.
- JSON-LD parses.
- Inline CSS brace count balanced: 683 / 683.
- No literal `[truncated]` marker.
- `git diff --check` passed.
- Same-origin 375px iframe probe passed: `scrollWidth 360`, `clientWidth 360`, `overflow false`, no protruding elements; phone box within viewport.
- Browser snapshot confirms new hero and buyer-routing links render.

## Next
The remaining taste opportunity is deeper: make the full directory less repetitive by grouping card copy around owner situations instead of page taxonomy. But the high-leverage conversion fix is now shipped: buyers see problem routes before the sitemap.