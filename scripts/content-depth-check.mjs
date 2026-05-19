import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const strategicLinks = [
  "/custom-ai-agent-stack-idaho",
  "/ai-workflow-integration-idaho",
  "/operations-intelligence-ai-agents-idaho",
  "/idaho-ai-automation-buyers-guide",
  "/ai-automation-roi-calculator",
  "/ai-automation-pricing",
  "/case-studies"
];

function fail(message) {
  failures.push(message);
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractOne(source, pattern) {
  const match = source.match(pattern);
  return match ? htmlToText(match[1]) : "";
}

const files = fs.readdirSync(root).filter((file) => file.endsWith(".html")).sort();

for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const h1 = extractOne(source, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const lede = extractOne(source, /<p\s+class=["'](?:lede|hero-lede)["'][^>]*>([\s\S]*?)<\/p>/i);
  const text = htmlToText(source);

  if (!/\bActrix\b/.test(lede)) fail(`${file} hero lede should name Actrix`);
  if (!/\bIdaho\b/i.test(`${h1} ${lede}`)) fail(`${file} hero should establish Idaho relevance`);
  if (!/\bAI\b/i.test(`${h1} ${lede}`)) fail(`${file} hero should establish AI relevance`);
  if (!/\bExample\b|\bworkflow\b|\bproof\b|\bcase\b/i.test(lede)) {
    fail(`${file} hero lede should include a concrete workflow/example/proof signal`);
  }
  if (!/\b(agent stacks?|custom AI agents?|AI implementation|workflow integration|operations intelligence|AI agent systems?)\b/i.test(`${h1} ${lede}`)) {
    fail(`${file} hero should establish the broader AI implementation / agent-stack scope`);
  }

  for (const href of strategicLinks) {
    if (!source.includes(href)) fail(`${file} should internally link to ${href}`);
  }

  if (file !== "site-map.html" && !/<details\b/i.test(source)) {
    fail(`${file} should include visible FAQ details`);
  }

  if (text.split(/\s+/).length < 400 && !["about-actrix.html", "ai-automation-pricing.html", "case-studies.html"].includes(file)) {
    fail(`${file} should have at least 400 visible words`);
  }
}

if (failures.length) {
  console.error(`Content depth check failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Content depth check passed.");
