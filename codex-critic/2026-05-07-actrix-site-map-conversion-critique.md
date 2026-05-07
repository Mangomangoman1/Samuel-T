# 2026-05-07 — Actrix site-map conversion critique

## Target
- Property: Actrix production repo (`/Users/Samuel/.hermes/webagent/Samuel-T`)
- Page/flow: `site-map.html` / `/site-map`
- Inspection mode: repo identity check, source review, local browser preview, visual critique

## What is working
- The prior sitemap correction mostly succeeded: this now reads like a customer-facing directory, not like a designer explaining the IA pass.
- The page is crawlable and useful. The directory gives Actrix breadth without hiding important pages behind JS/dropdowns.
- The visual system is consistent with the current Actrix language: dark operational surface, Merom/Marcellus pairing, amber accents, rounded directory cards, rich footer.
- Header keeps the phone and text path visible on desktop, and the directory body has healthy internal-link depth.

## Main finding
The page is polished, but the first screen is still **site-centric instead of buyer-centric**.

The hero headline — “Every Actrix page, organized by the work it helps with.” — accurately describes the page, but it sells the *website structure*, not the owner’s problem. For a cold Idaho business owner, the immediate question is not “where is every Actrix page?” It is “which of these AI things fixes the thing costing me calls, quotes, staff time, or follow-up?”

This matters because a sitemap/directory page can accidentally become a dead-end browsing surface: many equal-weight options, low urgency, and no human trust interrupt. The page helps visitors choose a page, but it does not strongly help them choose Actrix.

## Specific weak spots cheaper models may miss

### 1. “Text the leak” is memorable but under-explained
It is the strongest proprietary phrase on the page, but it can read as data leak/plumbing leak/workflow leak depending on context. The hero lede explains it partially, but the header CTA is visible before the explanation.

**Recommended copy direction:** keep the phrase, add a nearby clarifier:
- `Text the leak — calls, quotes, follow-up, or admin busywork`
- `Text what is leaking time`
- `Tell us the workflow leak`

### 2. The hero CTAs are navigational, not diagnostic
`Start with services` and `Browse solutions` are clear but passive. They sound like catalog browsing. The page should behave like a route map that recommends a first step.

**Recommended CTA direction:**
- Primary: `Find my first AI system`
- Secondary: `See starter systems`
- Or pain-led: `Start with missed calls` / `Start with quote intake`

### 3. Everything in the directory has nearly equal weight
“Home,” “AI consulting Idaho,” “Missed Call Rescue,” “AI for retail,” and “Safe AI policies” all get the same card treatment. That is good for a sitemap, but weak for conversion. A serious owner wants the obvious first fork.

**Recommended structure:** insert a short “Not sure where to start?” diagnostic panel before the directory grid:
- If calls are leaking → Missed Call Rescue
- If quotes are vague → AI Quote Intake
- If staff are using AI unsafely → Safe AI Policies
- If the owner is unsure → Text the bottleneck

This preserves the directory while giving the visitor a guided path.

### 4. Local trust is present in branding but not proven above the fold
The nav says Idaho AI implementation, but there is no above-fold trust interrupt: no “Built in Idaho,” “owner-run businesses,” “human-approved rollout,” privacy/safety note, or concrete implementation promise. AI services need more caution-proof than normal service pages.

**Recommended trust chips near hero:**
- `Built in Idaho`
- `Human-approved workflows`
- `For owner-run service businesses`
- `No black-box rollout`

### 5. High-intent pages should be surfaced before generic SEO pages
The strongest buyer-language pages are the named systems: Missed Call Rescue and AI Quote Intake. They currently sit below generic “Start here” and service-card links. That is safe for IA, but not ideal for conversion.

**Recommended move:** in the hero or first directory group, feature the two named starter systems before generic service hubs.

## Brutal read
The page is not broken. It is useful. But it feels like a beautifully styled table of contents. For a production AI implementation brand, that is not enough by itself. It needs one small buyer-routing artifact so it becomes: “I know what my problem is, and Actrix is giving me a sane first step.”

## Recommended safe patch for next build run
Add a compact diagnostic panel immediately after the hero and before the directory:

```html
<section class="section route-helper" aria-labelledby="route-helper-title">
  <div class="context-shell">
    <div>
      <p class="eyebrow">Not sure where to start?</p>
      <h2 id="route-helper-title">Pick the leak you recognize first.</h2>
      <p>Most owners do not need an AI strategy deck. They need one workflow fixed: calls, quotes, follow-up, staff AI use, or admin busywork.</p>
    </div>
    <div class="context-grid">
      <a class="context-card" href="/missed-call-rescue"><span>Calls are leaking</span><small>Start with Missed Call Rescue.</small></a>
      <a class="context-card" href="/ai-quote-intake"><span>Quotes are messy</span><small>Start with quote intake.</small></a>
      <a class="context-card" href="/safe-ai-policies-for-staff"><span>Staff need guardrails</span><small>Start with safe AI policies.</small></a>
    </div>
  </div>
</section>
```

This is low-risk because the page already has `.context-shell`, `.context-grid`, and `.context-card` styling in the inline CSS.

## QA notes from this run
- Repo identity verified: `origin git@github.com:Mangomangoman1/Samuel-T.git`, branch `main`, clean at start.
- Latest commit at inspection: `fef3ba6 mission: mark Boise depth pass complete`.
- Local preview loaded at `http://127.0.0.1:4173/site-map.html`.
- Browser snapshot confirmed title, H1, phone, top CTAs, directory links, and footer links render.
- Byte-level phone check confirmed the apparent masked number is display masking; file contains the real `+12083666111` bytes, not literal asterisks.
- No code patch shipped in this run; critique note only.
