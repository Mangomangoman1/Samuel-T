import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const domain = "https://www.actrix.me";
const strategicPages = [
  "custom-ai-agent-stack-idaho",
  "ai-workflow-integration-idaho",
  "operations-intelligence-ai-agents-idaho",
  "about-actrix",
  "ai-automation-pricing",
  "case-studies",
  "idaho-ai-automation-buyers-guide",
  "ai-automation-roi-calculator"
];
const homepageRequiredLinks = [
  "custom-ai-agent-stack-idaho",
  "ai-workflow-integration-idaho",
  "operations-intelligence-ai-agents-idaho",
  "about-actrix",
  "ai-automation-pricing",
  "case-studies",
  "idaho-ai-automation-buyers-guide",
  "ai-automation-roi-calculator"
];
const hubRequiredLinks = [
  "custom-ai-agent-stack-idaho",
  "ai-workflow-integration-idaho",
  "operations-intelligence-ai-agents-idaho",
  "idaho-ai-automation-buyers-guide",
  "ai-automation-roi-calculator",
  "about-actrix",
  "ai-automation-pricing",
  "case-studies"
];
const crawlAssetAllowList = new Set([
  "/favicon.svg",
  "/og-card.png",
  "/styles.css",
  "/script.js"
]);

const failures = [];

function fail(message) {
  failures.push(message);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function htmlFiles() {
  return fs.readdirSync(root).filter((file) => file.endsWith(".html")).sort();
}

function localSlugForFile(file) {
  return file === "index.html" ? "" : file.replace(/\.html$/, "");
}

function canonicalForFile(file) {
  const slug = localSlugForFile(file);
  return `${domain}/${slug}`;
}

function extractOne(source, pattern) {
  const match = source.match(pattern);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseJsonLd(source, file) {
  const blocks = [...source.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  if (!blocks.length) fail(`${file} needs at least one JSON-LD block`);

  return blocks.flatMap((match, index) => {
    try {
      const parsed = JSON.parse(match[1].trim());
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (error) {
      fail(`${file} has invalid JSON-LD block ${index + 1}: ${error.message}`);
      return [];
    }
  });
}

function flattenSchemaTypes(schema) {
  const nodes = [];
  for (const item of schema) {
    if (item && Array.isArray(item["@graph"])) {
      nodes.push(...item["@graph"]);
    } else if (item) {
      nodes.push(item);
    }
  }
  return nodes;
}

function sitemapLocations(source) {
  return new Set([...source.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map((match) => match[1].trim()));
}

function assertLength(file, label, value, min, max) {
  if (!value || value.length < min || value.length > max) {
    fail(`${file} ${label} should be ${min}-${max} characters; found ${value.length}`);
  }
}

const files = htmlFiles();
const fileSlugs = new Set(files.map(localSlugForFile));
const sitemap = read("sitemap.xml");
const sitemapLocs = sitemapLocations(sitemap);
const titles = new Map();
const descriptions = new Map();

for (const slug of strategicPages) {
  const file = `${slug}.html`;
  if (!exists(file)) fail(`Missing strategic SEO page: ${file}`);
}

for (const file of files) {
  const source = read(file);
  const title = extractOne(source, /<title>([\s\S]*?)<\/title>/i);
  const description = extractOne(source, /<meta\s+name=["']description["']\s+content="([^"]*)"/i);
  const canonical = extractOne(source, /<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i);
  const h1s = [...source.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => htmlToText(match[1]));
  const expectedCanonical = canonicalForFile(file);

  assertLength(file, "title", title, 20, 70);
  assertLength(file, "meta description", description, 90, 180);
  if (canonical !== expectedCanonical) fail(`${file} canonical should be ${expectedCanonical}`);
  if (h1s.length !== 1) fail(`${file} should have exactly one H1`);
  if (!sitemapLocs.has(expectedCanonical)) fail(`sitemap.xml is missing ${expectedCanonical}`);

  if (titles.has(title)) fail(`${file} duplicates the title from ${titles.get(title)}`);
  else titles.set(title, file);

  if (descriptions.has(description)) fail(`${file} duplicates the meta description from ${descriptions.get(description)}`);
  else descriptions.set(description, file);

  parseJsonLd(source, file);

  for (const match of source.matchAll(/href=["']([^"']+)["']/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const cleanPath = href.split("#")[0].split("?")[0];
    if (
      cleanPath === "/" ||
      cleanPath === "" ||
      cleanPath.startsWith("/assets/") ||
      crawlAssetAllowList.has(cleanPath)
    ) {
      continue;
    }
    const slug = cleanPath.replace(/^\//, "");
    if (!fileSlugs.has(slug)) fail(`${file} links to missing page: ${href}`);
  }
}

for (const loc of sitemapLocs) {
  if (!loc.startsWith(`${domain}/`)) {
    fail(`sitemap.xml includes an off-domain URL: ${loc}`);
    continue;
  }
  const slug = loc.replace(`${domain}/`, "");
  if (!fileSlugs.has(slug)) fail(`sitemap.xml includes a URL without a local HTML file: ${loc}`);
}

const homepage = read("index.html");
const homepageText = htmlToText(homepage);
if (!/custom AI agent stacks?/i.test(homepageText) || !/AI implementation/i.test(homepageText)) {
  fail("index.html should visibly position Actrix around custom AI agent stacks and AI implementation");
}

for (const slug of homepageRequiredLinks) {
  if (!homepage.includes(`/${slug}`)) fail(`index.html should link to /${slug}`);
}

const idahoHub = read("idaho-ai-services.html");
for (const slug of hubRequiredLinks) {
  if (!idahoHub.includes(`/${slug}`)) fail(`idaho-ai-services.html should link to /${slug}`);
}

const homepageNodes = flattenSchemaTypes(parseJsonLd(homepage, "index.html"));
const businessNode = homepageNodes.find((node) => {
  const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
  return types.includes("ProfessionalService") || types.includes("LocalBusiness");
});

if (!businessNode) {
  fail("index.html should include ProfessionalService or LocalBusiness schema");
} else {
  for (const key of ["url", "telephone", "email", "logo", "image", "areaServed", "contactPoint", "hasOfferCatalog", "knowsAbout"]) {
    if (!businessNode[key]) fail(`homepage business schema is missing ${key}`);
  }
}

const robots = read("robots.txt");
if (!robots.includes("Sitemap: https://www.actrix.me/sitemap.xml")) {
  fail("robots.txt should point crawlers to the sitemap");
}

for (const crawlerFile of ["llms.txt", "humans.txt"]) {
  if (!exists(crawlerFile)) fail(`Missing crawler/entity file: ${crawlerFile}`);
}

if (failures.length) {
  console.error(`SEO check failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SEO check passed.");
