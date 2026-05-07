# 2026-05-07 — Actrix site-map mobile routing critique

## Target
Actrix production repo (`git@github.com:Mangomangoman1/Samuel-T.git`), `site-map.html` first mobile screen / buyer-routing flow.

## Finding
The page had the right structural idea — a customer-facing route map instead of a dumb link dump — but the first screen still leaned too internal and clever:

- **Hero label:** “Actrix route map” reads like internal IA, not customer value.
- **H1:** “Find the Actrix path for the work that is leaking” was ownable but too abstract for a cold Idaho owner in the first 4 seconds.
- **Support copy:** explained the page mechanic more than the business outcome.
- **Trust:** no quick reassurance that Actrix is for Idaho owner-led businesses or human-approved workflows.
- **Directory section:** “Pick the leak first. The directory comes second.” was better than generic sitemap copy, but still used metaphor before plain business stakes.

A serious local owner should immediately see: missed calls, messy quotes, slow follow-up, safe AI use, Idaho-local path.

## Fix shipped
Small scoped copy/metadata pass:

- Retargeted title/meta/OG/schema description from “browse every page” to “choose the right AI workflow fix.”
- Rewrote the hero eyebrow to “Start here.”
- Replaced the abstract H1 with: “Choose the problem costing your business calls, quotes, or follow-up.”
- Rewrote the hero lede to explain Actrix plainly as practical AI workflow help for Idaho owner-led teams.
- Added a compact hero trust/proof line: Idaho service businesses, human-approved systems, no generic AI agency funnel.
- Tuned the buyer-routing H2/copy toward business leakage rather than page-directory mechanics.
- Updated `sitemap.xml` lastmod for `/site-map` to `2026-05-07` because body content changed.

## QA
Completed after edit:

- Byte-check phone hrefs: no literal `****`; six real `12083666111` byte matches.
- JSON-LD parses.
- One H1, no `[truncated]`, CSS brace delta `0`.
- 375px same-origin iframe probe: `scrollWidth === clientWidth`, no protruding elements, phone href real, menu and call targets visible above fold.
- `git diff --check` passed.

## Next
The next taste pass should inspect whether `/site-map` is linked from enough high-intent pages as “Start here” / “Choose your problem,” not just “Site map.” If users only find it through footer/nav sitemap language, the buyer-routing value is underused.
