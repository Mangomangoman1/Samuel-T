# 2026-05-07 — Actrix site-map mobile hero critique

Target: `site-map.html` — first 5 seconds on a 375px phone.

## Finding
The page is doing the right *strategic* thing: it no longer opens like a dead directory, it routes a buyer by problem before showing the full page list. That is the correct conversion move for a sitemap page.

The weak spot was the mobile hero copy. The old H1 — “Choose the problem costing your business calls, quotes, or follow-up.” — was visually heavy and semantically clumsy on a narrow phone. At 375px it stacked into too many lines and made “calls, quotes, or follow-up” feel like a phrase collision instead of a buyer route. A serious owner would understand the gist, but it still asked them to parse designer language before acting.

## Why it matters
This page is a utility page. It should not feel like another abstract Actrix concept page. The job is: “I’m not sure where to start — point me to the right page.” The first screen has to say that faster than the brand mood does.

## Fix shipped
- Shortened the H1 to: `Find the Actrix page for your business leak.`
- Rewrote the lede to name the routes plainly: calls, quotes, follow-up, staff, admin, service/guide/local route.
- Added missing AIDI AI-readability meta tags.
- Added missing Twitter title/description/image metadata to match the OG card.

## Still recommended
- The mobile header phone action currently collapses to `Call`, which is usable but underpowered. If Actrix wants phone calls from this page, test `Call Actrix` or a small phone icon + `Call`; do not show the full number if it crowds the menu.
- The proof chips are adequate, but `Human-approved systems` is still a little abstract. Stronger utility-page proof would be `Owner stays in control` or `Routes to a real starter system`.

## QA notes
- 375px same-origin probe: `scrollWidth === clientWidth`; no protruding elements.
- H1 count: 1.
- JSON-LD parses.
- Body link count is high enough for a directory page.
- Byte-level phone audit confirmed no literal masked `****` was written; `tel:` / `sms:` contain the real digits.
