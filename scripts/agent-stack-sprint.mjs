import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const domain = "https://www.actrix.me";

const authorityPages = [
  {
    slug: "custom-ai-agent-stack-idaho",
    title: "Custom AI Agent Stack Implementation Idaho | Actrix",
    description:
      "Actrix builds custom AI agent stacks for Idaho companies: workflow integration, internal knowledge agents, approval rules, reporting, and operational intelligence.",
    h1: "Custom AI agent stack implementation for Idaho companies.",
    lede:
      "Actrix is a statewide Idaho technical implementation firm building custom AI agent stacks for company-specific workflows. Example build: agents connect inboxes, documents, CRMs, calendars, and daily operating data into one approved workflow system that helps teams decide what to do next.",
    kicker: "Technical AI implementation",
    pageType: "Service",
    serviceType: "Custom AI agent stack implementation",
    primaryCta: "Map an agent stack",
    secondaryCta: "See pricing scope"
  },
  {
    slug: "ai-workflow-integration-idaho",
    title: "AI Workflow Integration Idaho | Agent Systems | Actrix",
    description:
      "AI workflow integration for Idaho companies that need agents connected to existing tools, records, approvals, staff handoffs, and legacy operating processes.",
    h1: "AI workflow integration for Idaho companies with real systems.",
    lede:
      "Actrix integrates AI agents into the workflows Idaho companies already run instead of forcing the team into another disconnected tool. Example workflow: an agent reads a request, checks business rules, asks for missing context, updates the right handoff, and stops for approval before money, promises, or records change.",
    kicker: "Workflow integration",
    pageType: "Service",
    serviceType: "AI workflow integration",
    primaryCta: "Map the integration",
    secondaryCta: "View agent stacks"
  },
  {
    slug: "operations-intelligence-ai-agents-idaho",
    title: "Operations Intelligence AI Agents Idaho | Actrix",
    description:
      "Operations intelligence AI agents for Idaho companies that need daily briefs, weak-spot detection, reporting, and practical recommendations from business data.",
    h1: "Operations intelligence agents for Idaho businesses.",
    lede:
      "Actrix builds AI agents that read the business as it operates each day, not just when someone opens a chatbot. Example workflow: the agent reviews messages, jobs, reports, and customer signals, then produces a decision brief with weak spots, risks, and operational changes worth considering.",
    kicker: "Operational intelligence",
    pageType: "Service",
    serviceType: "Operations intelligence AI agents",
    primaryCta: "Map an insight agent",
    secondaryCta: "See workflow integration"
  }
];

const authorityLinks = [
  ["/custom-ai-agent-stack-idaho", "Agent stack implementation"],
  ["/ai-workflow-integration-idaho", "Workflow integration"],
  ["/operations-intelligence-ai-agents-idaho", "Operations intelligence"]
];

const sharedTrustLinks = [
  ["/about-actrix", "About"],
  ["/ai-automation-pricing", "Pricing"],
  ["/case-studies", "Proof patterns"],
  ["/idaho-ai-automation-buyers-guide", "Buyer guide"],
  ["/ai-automation-roi-calculator", "ROI calculator"]
];

const heroCopy = {
  "index.html": {
    h1: "Custom AI agent stacks for Idaho companies with real workflows.",
    lede:
      "Actrix is a statewide Idaho technical implementation firm building custom AI agent stacks that integrate into company-specific workflows. Example build: agents catch daily business signals, ask for missing context, prepare work, flag weak spots, and keep human approval visible where judgment matters."
  },
  "about-actrix.html": {
    h1: "About Actrix, an Idaho AI implementation firm.",
    lede:
      "Actrix is run by Samuel in Idaho and builds custom AI agent stacks for local and statewide companies. Example first engagement: one company-specific workflow is mapped, integrated, tested, and turned into an owner-approved agent system before the stack expands."
  },
  "ai-automation-pricing.html": {
    h1: "AI agent stack pricing and scope for Idaho businesses.",
    lede:
      "Actrix prices Idaho AI implementation by workflow complexity, integration depth, and approval risk. Example first scope: a starter agent can prove one workflow, while a department agent stack connects tools, records, reporting, and operational intelligence."
  },
  "case-studies.html": {
    h1: "Actrix proof patterns for Idaho AI agent stacks.",
    lede:
      "Actrix documents practical proof patterns for Idaho AI implementation without inventing customer wins. Example proof: each stack pattern shows the workflow, integrations, approval line, operating brief, and measurable result that should be validated."
  },
  "idaho-ai-automation-buyers-guide.html": {
    h1: "How Idaho companies should choose an AI implementation firm.",
    lede:
      "Actrix wrote this buyer guide for Idaho owners comparing AI consultants, chatbot tools, automation agencies, and custom agent stack implementers. Example buying test: can the vendor explain the workflow, integrations, approval points, operating data, and first measurable win?"
  },
  "ai-automation-roi-calculator.html": {
    h1: "AI agent stack ROI calculator for Idaho businesses.",
    lede:
      "Actrix built this calculator so Idaho companies can estimate the value of custom AI agents before buying a build. Example first pass: compare recovered leads, saved owner time, faster handoffs, better reporting, and operational weak spots found by the agent stack."
  },
  "idaho-ai-services.html": {
    h1: "AI implementation services for Idaho companies that need real systems.",
    lede:
      "Actrix helps Idaho companies install custom AI agent stacks, workflow integration, automation, support, team training, reporting, and human-approved operations. Example first workflow: a costly bottleneck is mapped, connected to existing tools, tested, and turned into a system the team can actually use."
  },
  "ai-automation-idaho.html": {
    h1: "AI automation for Idaho companies with complex workflows.",
    lede:
      "Actrix builds AI automation for Idaho companies as one layer of a custom AI agent stack: intake, follow-up, internal handoffs, reporting, and daily operating signals. Example workflow: an agent gathers missing details, checks business rules, prepares the next step, and flags weak spots for review."
  },
  "ai-agents-for-business.html": {
    h1: "Custom AI agents and agent stacks for Idaho businesses.",
    lede:
      "Actrix builds custom AI agents for Idaho businesses that need judgment-aware work handled, not just questions answered. Example stack: specialized agents monitor channels, collect context, draft outputs, update handoffs, and feed an owner insight agent that summarizes what changed."
  },
  "business-automation-idaho.html": {
    h1: "Business automation for Idaho companies ready for agent stacks.",
    lede:
      "Actrix installs AI business automation for Idaho companies where repeated work, legacy handoffs, and daily data are slowing the team down. Example workflow: agents turn calls, forms, inbox messages, records, and reports into visible tasks with approval and operating insight."
  },
  "idaho-ai-consulting.html": {
    h1: "AI consulting for Idaho companies ready to implement.",
    lede:
      "Actrix provides practical AI consulting for Idaho companies that need technical workflow clarity before buying tools. Example first workflow: audit current systems, select one agent stack pilot, define integrations and approvals, then build only what should actually run."
  },
  "ai-support-idaho.html": {
    h1: "AI support for Idaho businesses with scattered tools.",
    lede:
      "Actrix helps Idaho teams clean up scattered AI tools, broken prompts, half-built automations, confusing workflows, and underused data so a reliable AI agent stack can be supported. Example support workflow: turn staff AI use into shared instructions, approved prompts, tool connections, and an escalation path people can follow."
  },
  "ai-training-idaho.html": {
    h1: "AI training for Idaho teams using custom agent systems.",
    lede:
      "Actrix trains Idaho business teams to use custom AI agent systems safely inside their real workflows, not just in a classroom. Example training workflow: staff learn what agents can draft, what data stays out, when approval is required, and how to improve the system from daily feedback."
  },
  "ai-quote-intake.html": {
    h1: "AI quote intake for Idaho service teams and agent stacks.",
    lede:
      "Actrix builds AI quote intake for Idaho businesses that lose time chasing project context. Example workflow: the agent asks for photos, dimensions, location, urgency, budget, and constraints, then updates the right brief inside the larger agent stack."
  },
  "missed-call-rescue.html": {
    h1: "Missed-call rescue as the first agent in an Idaho business stack.",
    lede:
      "Actrix installs AI missed-call rescue as the first agent in an Idaho AI agent stack for businesses that cannot answer every call during jobs, service, appointments, or after hours. Example workflow: the agent texts back, gathers context, hands the owner a lead brief, and can feed a broader sales or operations stack."
  },
  "local-ai-starter-systems.html": {
    h1: "AI starter systems that can grow into Idaho agent stacks.",
    lede:
      "Actrix offers local AI starter systems for Idaho owners who want one useful workflow before a larger agent stack. Example first workflow: missed-call rescue, quote intake, or an AI front desk with approval rules and a clear path into deeper implementation."
  },
  "how-it-works.html": {
    h1: "How Actrix AI agent stacks work inside Idaho companies.",
    lede:
      "Actrix agents are technical workflow systems for Idaho businesses, not generic chat widgets. Example stack: the agent senses an event, reads context, checks rules, prepares work, asks for approval, and feeds daily operating insight back to leadership."
  },
  "solutions.html": {
    h1: "Custom AI agent stack solutions for Idaho business workflows.",
    lede:
      "Actrix maps custom AI agent stack solutions around the work Idaho companies repeat every week: reception, sales, operations, strategy, bookkeeping support, customer experience, reporting, and owner insight. Example system: specialized agents coordinate into one decision-ready operating layer."
  },
  "what-ai-can-automate-for-small-business.html": {
    h1: "What AI agent stacks can automate for Idaho small businesses.",
    lede:
      "Actrix explains what AI automation can realistically handle for Idaho small businesses before anyone buys a tool. Example workflow: automate context collection, drafts, routing, summaries, reminders, and reporting while humans keep judgment calls."
  },
  "ai-readiness-checklist.html": {
    h1: "AI readiness checklist for Idaho agent stack implementation.",
    lede:
      "Actrix uses this checklist to help Idaho businesses decide whether an AI agent stack is ready to install or whether workflow cleanup should come first. Example first workflow: score data, repeated tasks, tools, team habits, approvals, and operational risk."
  },
  "ai-implementation-plan.html": {
    h1: "AI implementation plan for Idaho companies.",
    lede:
      "Actrix turns AI interest into a practical implementation plan for Idaho businesses. Example rollout: audit repeated work, choose one agent stack pilot, connect existing tools, set approval rules, train staff, review results, and scale when useful."
  },
  "safe-ai-policies-for-staff.html": {
    h1: "Safe AI policies for Idaho teams using agent stacks.",
    lede:
      "Actrix writes safe AI policies for Idaho businesses whose staff are already experimenting with tools or preparing for custom agents. Example workflow: define what can be drafted, what data is off-limits, and which customer or operational decisions need human approval."
  },
  "custom-agents-vs-chatbots.html": {
    h1: "Custom AI agents vs chatbots for Idaho businesses.",
    lede:
      "Actrix helps Idaho businesses understand when a chatbot is enough and when a custom AI agent stack is the better fit. Example difference: a chatbot answers a question; an agent collects context, prepares work, integrates with systems, and routes decisions."
  },
  "hermes-agent-automation.html": {
    h1: "Hermes Agent automation for Idaho business workflows.",
    lede:
      "Actrix frames Hermes AI Agent for Idaho businesses that need repeatable workflows with memory, skills, scheduled follow-up, and approval inside a broader AI agent stack. Example workflow: the agent learns the pattern, improves the handoff, and contributes to operational intelligence."
  },
  "openclaw-ai-assistant.html": {
    h1: "OpenClaw AI assistant for Idaho business channels.",
    lede:
      "Actrix explains OpenClaw for Idaho businesses that want one assistant doorway across everyday channels inside a broader AI agent stack. Example workflow: connect common messages, approved answers, owner handoffs, and internal context without forcing staff into a new dashboard."
  },
  "ai-for-contractors.html": {
    h1: "AI for Idaho contractors: custom agents for bids and operations.",
    lede:
      "Actrix builds AI agent stacks for Idaho contractors who are on job sites when leads, change orders, and updates arrive. Example workflow: the agent rescues missed calls, asks for project photos and details, prepares a quote-ready brief, and flags recurring bottlenecks."
  },
  "ai-for-education.html": {
    h1: "AI for Idaho schools and education teams.",
    lede:
      "Actrix builds AI agent systems for Idaho schools, colleges, training programs, and education teams with repeated admin work. Example workflow: an agent handles approved inquiry replies, gathers missing enrollment context, summarizes trends, and routes sensitive issues to staff."
  },
  "ai-for-hospitality.html": {
    h1: "AI for Idaho hospitality, hotels, and rentals.",
    lede:
      "Actrix builds AI agent stacks for Idaho hospitality teams that juggle guests, seasonal volume, and front-desk gaps. Example workflow: the agent answers approved booking questions, collects guest context, identifies recurring service friction, and hands off anything sensitive."
  },
  "ai-for-manufacturing.html": {
    h1: "AI for Idaho manufacturers and plant workflows.",
    lede:
      "Actrix builds AI agent stacks for Idaho manufacturers with repeated RFQs, shift notes, maintenance messages, and production reporting. Example workflow: an agent turns scattered updates into a structured handoff and surfaces weak spots in daily operations."
  },
  "ai-for-nonprofits.html": {
    h1: "AI for Idaho nonprofits and mission teams.",
    lede:
      "Actrix builds AI agent systems for Idaho nonprofits that need more capacity without losing human judgment. Example workflow: the agent tracks grant deadlines, drafts donor follow-up, organizes volunteer messages, and highlights capacity risks."
  },
  "ai-for-professional-services.html": {
    h1: "AI for Idaho professional service firms.",
    lede:
      "Actrix builds AI agent stacks for Idaho law, accounting, real estate, insurance, consulting, and financial service teams. Example workflow: an agent organizes client intake, drafts safe follow-up, checks rules, and keeps trust-sensitive decisions human."
  },
  "ai-for-real-estate.html": {
    h1: "AI for Idaho real estate agents and brokerages.",
    lede:
      "Actrix builds AI agent systems for Idaho real estate teams that lose momentum after hours or between showings. Example workflow: the agent catches property inquiries, qualifies buyer context, drafts the next follow-up, and reports weak spots in lead handling."
  },
  "ai-for-repair-shops.html": {
    h1: "AI for Idaho repair shops and service counters.",
    lede:
      "Actrix builds AI agent systems for Idaho repair shops that need cleaner intake, status updates, and customer follow-up. Example workflow: the agent gathers device, vehicle, or equipment details, prepares a service-ready ticket, and spots recurring service delays."
  },
  "ai-for-restaurants-cafes.html": {
    h1: "AI for Idaho restaurants and cafes.",
    lede:
      "Actrix builds AI agent systems for Idaho restaurants, cafes, bars, and catering teams that miss calls during service. Example workflow: the agent captures reservation or catering details, prepares a manager-approved response, and flags repeated demand patterns."
  },
  "ai-for-retail.html": {
    h1: "AI for Idaho retail stores and staff teams.",
    lede:
      "Actrix builds AI agent systems for Idaho retail stores that answer repeated product, order, return, and staff questions. Example workflow: the agent collects customer context, drafts an approved reply, routes unusual cases, and surfaces common product questions."
  },
  "ai-for-wellness-health.html": {
    h1: "AI for Idaho wellness and health businesses.",
    lede:
      "Actrix builds AI agent systems for Idaho wellness and health businesses where the front desk cannot catch every message. Example workflow: the agent handles approved admin questions, collects intake context, routes sensitive requests to staff, and summarizes patterns."
  },
  "ai-services-boise.html": {
    h1: "AI implementation services in Boise for agent-driven operations.",
    lede:
      "Actrix serves Boise, Idaho, and Treasure Valley businesses with custom AI agent stacks, workflow integration, support, and training. Example workflow: a lead, quote, reporting, or internal handoff agent connects existing tools without adding another admin role."
  },
  "ai-services-coeur-d-alene.html": {
    h1: "AI implementation services in Coeur d'Alene and North Idaho.",
    lede:
      "Actrix serves Coeur d'Alene and North Idaho businesses with practical AI agent stacks and workflow integration. Example workflow: capture leads, quote details, customer questions, staff handoffs, and daily operating signals while the owner keeps approval."
  },
  "ai-services-idaho-falls.html": {
    h1: "AI implementation services in Idaho Falls for business workflows.",
    lede:
      "Actrix serves Idaho Falls, Ammon, Rigby, and Blackfoot businesses with custom AI agents, support, training, and workflow integration. Example workflow: an agent catches calls, organizes quote context, updates handoffs, and prepares next steps."
  },
  "ai-services-meridian-nampa.html": {
    h1: "AI implementation services in Meridian and Nampa.",
    lede:
      "Actrix serves Meridian, Nampa, Caldwell, Eagle, and Kuna, Idaho businesses that have outgrown manual follow-up. Example workflow: an agent stack turns higher lead volume into cleaner intake, routing, reporting, and owner-approved replies."
  },
  "ai-services-moscow.html": {
    h1: "AI implementation services in Moscow and the Palouse.",
    lede:
      "Actrix serves Moscow, Idaho, Pullman, Lewiston, and Palouse businesses with custom AI agents for education, agriculture, research, manufacturing, and service work. Example workflow: organize inquiries, reports, daily data, and handoffs during busy seasons."
  },
  "ai-services-pocatello.html": {
    h1: "AI implementation services in Pocatello and Southeast Idaho.",
    lede:
      "Actrix serves Pocatello, Chubbuck, Blackfoot, and Southeast Idaho businesses with custom AI agents and workflow integration. Example workflow: capture service requests, quote details, staff questions, owner reports, and operations signals before work slips."
  },
  "ai-services-rexburg.html": {
    h1: "AI implementation services in Rexburg for seasonal workflows.",
    lede:
      "Actrix serves Rexburg, Sugar City, St. Anthony, and Madison County Idaho businesses with custom AI agents for seasonal surges and student-town operations. Example workflow: catch inquiries, route handoffs, summarize repeated admin, and flag capacity issues."
  },
  "ai-services-twin-falls.html": {
    h1: "AI implementation services in Twin Falls and Magic Valley.",
    lede:
      "Actrix serves Twin Falls, Jerome, Burley, Rupert, Kimberly, and Magic Valley Idaho businesses with custom AI agents and workflow integration. Example workflow: missed-call rescue, quote intake, follow-up, reporting, staff training, or daily operating briefs."
  },
  "ai-services-wood-river-valley.html": {
    h1: "AI implementation services in the Wood River Valley.",
    lede:
      "Actrix serves Hailey, Ketchum, Sun Valley, Bellevue, and the Wood River Valley in Idaho with custom AI agent stacks for service, hospitality, real estate, retail, and seasonal teams. Example workflow: catch the customer while the owner is busy and summarize what the business should notice."
  },
  "site-map.html": {
    h1: "Find the Actrix page for your Idaho AI implementation need.",
    lede:
      "Actrix uses this site map to route Idaho business owners to the right AI implementation page. Example route: custom agent stacks, workflow integration, operations intelligence, missed calls, quote intake, buyer questions, ROI, pricing, or local service areas."
  }
};

const meta = {
  "index.html": {
    title: "AI Agent Stacks for Idaho Companies | Actrix",
    description:
      "Actrix is an Idaho technical AI implementation firm building custom agent stacks, workflow integrations, reporting agents, and practical automation systems."
  },
  "idaho-ai-services.html": {
    title: "Idaho AI Implementation Services | Agent Stacks | Actrix",
    description:
      "Custom AI agent stacks, workflow integration, AI automation, support, and training for Idaho companies that need practical implementation."
  },
  "about-actrix.html": {
    title: "About Actrix | Idaho AI Implementation Firm",
    description:
      "Meet Actrix, an Idaho technical AI implementation firm building custom agent stacks, workflow integration, staff training, and owner-approved systems."
  },
  "ai-automation-pricing.html": {
    title: "AI Agent Stack Pricing Idaho | Implementation Scope | Actrix",
    description:
      "Clear AI implementation pricing for Idaho businesses: starter agents, installed workflows, department agent stacks, custom integrations, and support."
  },
  "case-studies.html": {
    title: "AI Agent Stack Proof Patterns Idaho | Actrix",
    description:
      "Actrix proof patterns for Idaho AI implementation: agent stacks, workflow integration, missed-call rescue, quote intake, reporting, and approval rules."
  },
  "idaho-ai-automation-buyers-guide.html": {
    title: "Idaho AI Implementation Buyers Guide | Actrix",
    description:
      "A practical buyer guide for Idaho companies comparing AI consultants, chatbot vendors, automation agencies, and custom agent stack implementers."
  },
  "ai-automation-roi-calculator.html": {
    title: "AI Agent Stack ROI Calculator Idaho | Actrix",
    description:
      "Estimate ROI for Idaho AI implementation: recovered leads, saved admin time, faster handoffs, reporting value, and custom agent stack savings."
  },
  "ai-automation-idaho.html": {
    title: "AI Automation Idaho | Custom Agent Implementation | Actrix",
    description:
      "AI automation for Idaho companies with complex workflows: custom agents for intake, follow-up, reporting, approvals, and workflow integration."
  },
  "ai-agents-for-business.html": {
    title: "AI Agents for Business Idaho | Custom Agent Stacks | Actrix",
    description:
      "Custom AI agents and agent stacks for Idaho businesses: workflow monitoring, approvals, reporting, owner briefs, and multi-agent orchestration."
  },
  "business-automation-idaho.html": {
    title: "Business Automation Idaho | AI Agent Systems | Actrix",
    description:
      "Business automation for Idaho companies using custom AI agents, workflow integration, reporting, handoff automation, and owner approval rules."
  },
  "idaho-ai-consulting.html": {
    title: "AI Consulting Idaho | Technical Implementation | Actrix",
    description:
      "Practical AI consulting for Idaho companies ready to implement custom agent stacks, workflow integration, tool audits, safety rules, and pilots."
  },
  "solutions.html": {
    title: "Custom AI Agent Stack Solutions Idaho | Actrix",
    description:
      "Custom AI agent stack solutions for Idaho businesses: reception, sales, operations, reporting, strategy, bookkeeping support, and owner insight."
  },
  "how-it-works.html": {
    title: "How AI Agent Stacks Work in Idaho Businesses | Actrix",
    description:
      "See how Actrix implements AI agent stacks: workflow mapping, integrations, approval rules, testing, staff handoff, and operational intelligence."
  },
  "site-map.html": {
    title: "Actrix Site Map | Idaho AI Implementation Pages",
    description:
      "Find Actrix pages for Idaho AI implementation, custom agent stacks, workflow integration, operations intelligence, pricing, proof, and local services."
  }
};

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, source) {
  fs.writeFileSync(path.join(root, file), source);
}

function htmlFiles() {
  return fs.readdirSync(root).filter((file) => file.endsWith(".html")).sort();
}

function replaceTitleDescription(source, file) {
  const values = meta[file];
  if (!values) return source;
  const title = values.title;
  const description = escapeAttribute(values.description);
  let next = source.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  next = next.replace(
    /<meta\s+name=["']description["']\s+content="[^"]*">/i,
    `<meta name="description" content="${description}">`
  );
  next = next.replace(
    /<meta\s+property=["']og:title["']\s+content="[^"]*">/i,
    `<meta property="og:title" content="${escapeAttribute(title)}">`
  );
  next = next.replace(
    /<meta\s+property=["']og:description["']\s+content="[^"]*">/i,
    `<meta property="og:description" content="${description}">`
  );
  next = next.replace(
    /<meta\s+name=["']twitter:title["']\s+content="[^"]*">/i,
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`
  );
  next = next.replace(
    /<meta\s+name=["']twitter:description["']\s+content="[^"]*">/i,
    `<meta name="twitter:description" content="${description}">`
  );
  return next;
}

function replaceHero(source, file) {
  const copy = heroCopy[file];
  if (!copy) return source;
  let next = source.replace(/<h1\b([^>]*)>[\s\S]*?<\/h1>/i, `<h1$1>${copy.h1}</h1>`);
  next = next.replace(/<p\s+class=["'](?:lede|hero-lede)["'][^>]*>[\s\S]*?<\/p>/i, (match) => {
    const className = match.match(/class=["']([^"']+)["']/i)?.[1] || "lede";
    return `<p class="${className}">${copy.lede}</p>`;
  });
  return next;
}

function replaceGenericFaq(source) {
  return source
    .replace(
      /Start with one measurable workflow: missed-call rescue, quote intake, follow-up, reporting, staff AI guardrails, or support cleanup\./g,
      "Start with one measurable workflow or a scoped agent stack: intake, quoting, reporting, internal knowledge, staff guardrails, workflow integration, or daily operating briefs."
    )
    .replace(
      /AI can collect, draft, summarize, and route; people keep decisions that affect money, reputation, customer trust, privacy, or safety\./g,
      "AI can collect, draft, summarize, route, compare, and recommend; people keep decisions that affect money, reputation, customer trust, privacy, safety, or company policy."
    )
    .replace(
      /Send the repeated workflow that is leaking time, leads, follow-up, or staff attention\./g,
      "Send the repeated workflow, system handoff, report, data source, or daily decision that is costing time, leads, follow-up, or staff attention."
    );
}

function richFooter() {
  return `<footer class="footer actrix-footer actrix-footer-rich"><div class="footer-brand"><span>Actrix. Custom AI agent stack implementation for Idaho companies.</span><small>Built in Idaho for businesses that need technical AI implementation, workflow integration, operational intelligence, safer staff AI use, and systems that fit the way the company already works.</small><a href="tel:+12083666111" class="footer-phone">(208) 366-6111</a></div><nav aria-label="Footer links"><div><span class="ft-label">Implementation</span><a href="/custom-ai-agent-stack-idaho">Agent stack implementation</a><a href="/ai-workflow-integration-idaho">Workflow integration</a><a href="/operations-intelligence-ai-agents-idaho">Operations intelligence</a><a href="/idaho-ai-services">Idaho AI services</a><a href="/ai-automation-idaho">AI automation</a><a href="/business-automation-idaho">Business automation</a></div><div><span class="ft-label">Trust</span><a href="/about-actrix">About Actrix</a><a href="/ai-automation-pricing">Pricing & scope</a><a href="/case-studies">Proof patterns</a><a href="/idaho-ai-automation-buyers-guide">Buyer's guide</a><a href="/ai-automation-roi-calculator">ROI calculator</a><a href="/safe-ai-policies-for-staff">Safe AI policies</a></div><div><span class="ft-label">Learn</span><a href="/ai-agents-for-business">AI agents for business</a><a href="/idaho-ai-consulting">AI consulting</a><a href="/how-it-works">How it works</a><a href="/solutions">Solutions</a><a href="/ai-readiness-checklist">Readiness checklist</a><a href="/ai-implementation-plan">Implementation plan</a><a href="/custom-agents-vs-chatbots">Agents vs chatbots</a><a href="/what-ai-can-automate-for-small-business">What AI can automate</a><a href="/site-map">Full site map</a></div></nav></footer>`;
}

function siteFooter() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div><strong>Actrix</strong><p>Custom AI agent stack implementation for Idaho companies.</p></div>
      <div><strong>Implement</strong><a href="/custom-ai-agent-stack-idaho">Agent stacks</a><a href="/ai-workflow-integration-idaho">Workflow integration</a><a href="/operations-intelligence-ai-agents-idaho">Operations intelligence</a><a href="/idaho-ai-services">Idaho AI services</a></div>
      <div><strong>Trust</strong><a href="/about-actrix">About</a><a href="/ai-automation-pricing">Pricing</a><a href="/case-studies">Proof patterns</a><a href="/idaho-ai-automation-buyers-guide">Buyer's guide</a><a href="/ai-automation-roi-calculator">ROI calculator</a></div>
      <div><strong>Contact</strong><a href="tel:+12083666111">(208) 366-6111</a><a href="mailto:samuel@actrix.me">samuel@actrix.me</a></div>
    </div>
    <div class="container footer-bottom"><span>&copy; <span data-year></span> Actrix</span><a href="/site-map">Full site map</a></div>
  </footer>`;
}

function replaceFooters(source) {
  let next = source.replace(/<footer class="footer actrix-footer actrix-footer-rich">[\s\S]*?<\/footer>/g, richFooter());
  next = next.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/g, siteFooter());
  return next;
}

function addAuthorityNavLinks(source) {
  let next = source;
  next = next.replace(/<a href="\/idaho-ai-services">Idaho AI(?: Services)?<\/a>/g, (match) => {
    if (next.includes('<a href="/custom-ai-agent-stack-idaho">Agent stacks</a>')) return match;
    return `${match}<a href="/custom-ai-agent-stack-idaho">Agent stacks</a><a href="/ai-workflow-integration-idaho">Workflow integration</a>`;
  });
  next = next.replace(/<a href="\/about-actrix">About(?: Actrix)?<\/a>/g, (match) => {
    if (next.includes('<a href="/case-studies">Proof patterns</a>')) return match;
    return `${match}<a href="/case-studies">Proof patterns</a>`;
  });
  return next;
}

function normalizeMicrocopy(source) {
  return source
    .replace(/Text the leak/g, "Text the workflow")
    .replace(/Text the messy workflow/g, "Text the workflow")
    .replace(/Text a workflow/g, "Text the workflow")
    .replace(/Practical AI systems for Idaho businesses\./g, "Custom AI agent stacks for Idaho businesses.")
    .replace(/Practical AI automation for Idaho businesses\./g, "Custom AI agent stack implementation for Idaho businesses.")
    .replace(/Practical AI systems powered by custom agents\./g, "Custom AI agent stack implementation for Idaho companies.")
    .replace(/Built in Idaho for owner-run businesses that need cleaner follow-up, safer AI use, and practical systems\./g, "Built in Idaho for companies that need technical AI implementation, workflow integration, and operational intelligence.");
}

function contextualLinkRail() {
  return `<section class="section agent-stack-crosslinks"><div class="container" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center"><span style="color:var(--muted);font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em">Agent stack paths:</span><a href="/custom-ai-agent-stack-idaho" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;border:1px solid var(--line);background:rgba(222,230,238,.04);color:var(--soft);font-size:.82rem;font-weight:800">Agent stack implementation -></a><a href="/ai-workflow-integration-idaho" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;border:1px solid var(--line);background:rgba(222,230,238,.04);color:var(--soft);font-size:.82rem;font-weight:800">Workflow integration -></a><a href="/operations-intelligence-ai-agents-idaho" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;border:1px solid var(--line);background:rgba(222,230,238,.04);color:var(--soft);font-size:.82rem;font-weight:800">Operations intelligence -></a></div></section>`;
}

function cleanupContextualRail(source) {
  return source.replace(
    /\s*<div style="margin-top:22px;display:flex;flex-wrap:wrap;gap:10px;align-items:center"><span style="color:var\(--muted\);font-size:\.78rem;font-weight:900;text-transform:uppercase;letter-spacing:\.06em">Agent stack paths:<\/span>[\s\S]*?Operations intelligence -><\/a><\/div>\s*/g,
    "\n    "
  );
}

function addContextualRail(source, file) {
  if (file === "site-map.html" || source.includes("Agent stack paths:")) return source;
  return source.replace(/(<section class="context-route section"|<section class="contact-section">)/, `${contextualLinkRail()}\n    $1`);
}

function pageTemplate(page) {
  const canonical = `${domain}/${page.slug}`;
  const faq = [
    {
      q: "What is a custom AI agent stack?",
      a: "It is a group of specialized agents connected to the company's real workflow: inputs, records, approvals, reports, and staff handoffs. Each agent has a defined job, and the stack shares context so the business does not create another pile of disconnected tools."
    },
    {
      q: "Is this only for simple missed-call or quote workflows?",
      a: "No. Those can be good starter workflows, but Actrix also scopes department-level and company-specific agent systems for intake, internal knowledge, reporting, operations, support, staff enablement, and daily decision briefs."
    },
    {
      q: "How does Actrix keep the system safe?",
      a: "Actrix defines approval rules, data boundaries, fallback paths, and escalation points before launch. Agents can draft, summarize, compare, route, and recommend, but humans keep decisions involving money, promises, safety, privacy, or policy."
    }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.h1,
        description: page.description,
        url: canonical,
        isPartOf: { "@type": "WebSite", name: "Actrix", url: `${domain}/` },
        about: ["AI implementation Idaho", "custom AI agents", "workflow integration", "agent stack implementation"]
      },
      {
        "@type": page.pageType,
        name: page.serviceType,
        provider: { "@type": "ProfessionalService", name: "Actrix", url: `${domain}/`, telephone: "+12083666111" },
        areaServed: ["Idaho", "Boise", "Meridian", "Nampa", "Idaho Falls", "Twin Falls", "Pocatello", "Rexburg", "Moscow", "Coeur d'Alene", "Hailey", "Ketchum", "Sun Valley"],
        serviceType: page.serviceType,
        description: page.description
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    ]
  };

  const relatedCards = authorityPages
    .filter((item) => item.slug !== page.slug)
    .map((item) => `<a class="context-card" href="/${item.slug}"><span>${item.kicker}</span><small>${item.h1}</small></a>`)
    .join("");

  const secondaryHref =
    page.slug === "custom-ai-agent-stack-idaho"
      ? "/ai-automation-pricing"
      : page.slug === "ai-workflow-integration-idaho"
        ? "/custom-ai-agent-stack-idaho"
        : "/ai-workflow-integration-idaho";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${escapeAttribute(page.description)}">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#242018">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeAttribute(page.title)}">
  <meta property="og:description" content="${escapeAttribute(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${domain}/og-card.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/styles.css">
  <style>
    .stack-page .hero{min-height:auto;padding:78px 0 66px}.stack-page .hero-grid{grid-template-columns:minmax(0,1fr) minmax(320px,.74fr);gap:42px}.stack-card,.stack-panel{border:1px solid var(--line);border-radius:22px;background:linear-gradient(180deg,rgba(191,210,225,.075),rgba(58,69,80,.82));box-shadow:var(--shadow);padding:24px}.stack-card span,.stack-panel span{display:block;color:var(--copper-bright);font-size:.72rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.stack-panel strong,.stack-card h3{display:block;margin-top:10px;font-family:var(--font-display);font-size:clamp(1.55rem,2.8vw,2.45rem);line-height:1.04}.stack-panel p,.stack-card p,.stack-card li{color:var(--paper-muted)}.stack-page .stack-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.stack-card ul{padding:0;margin:18px 0 0;list-style:none;display:grid;gap:8px}.stack-card li:before{content:"";display:inline-block;width:6px;height:6px;margin-right:8px;border-radius:999px;background:var(--sage)}.image-mark::before,.image-mark span{display:none}.image-mark img{width:40px;height:40px;object-fit:contain}.signal-board{display:grid;gap:10px}.signal-row{display:grid;grid-template-columns:.72fr 1fr 1fr;gap:12px;border:1px solid rgba(229,237,243,.13);border-radius:16px;background:rgba(58,69,80,.68);padding:16px}.signal-row strong{font-size:1rem}.signal-row span{color:var(--paper-muted)}@media(max-width:980px){.stack-page .hero-grid,.stack-page .stack-cards{grid-template-columns:1fr}.signal-row{grid-template-columns:1fr}}
  </style>
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body class="trust-page stack-page">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="/" aria-label="Actrix home"><span class="brand-mark image-mark" aria-hidden="true"><img src="/favicon.svg" alt="" width="40" height="40"></span><span class="brand-copy"><strong>Actrix</strong><small>Idaho AI implementation</small></span></a>
      <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button>
      <nav class="nav-links" data-nav-menu aria-label="Primary navigation"><a href="/idaho-ai-services">Idaho AI</a><a href="/custom-ai-agent-stack-idaho">Agent stacks</a><a href="/ai-workflow-integration-idaho">Workflow integration</a><a href="/operations-intelligence-ai-agents-idaho">Ops intelligence</a><a href="/ai-automation-pricing">Pricing</a><a class="nav-phone" href="tel:+12083666111">(208) 366-6111</a><a class="nav-cta" href="sms:+12083666111?&body=Hi%20Actrix%2C%20the%20workflow%20I%20want%20to%20map%20is%3A%20">Map a workflow</a></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow"><span></span>${page.kicker}</p>
          <h1>${page.h1}</h1>
          <p class="hero-lede">${page.lede}</p>
          <div class="hero-actions"><a class="btn btn-primary" href="sms:+12083666111?&body=Hi%20Actrix%2C%20I%20want%20to%20map%20this%20AI%20workflow%3A%20">${page.primaryCta}</a><a class="btn btn-secondary" href="${secondaryHref}">${page.secondaryCta}</a></div>
        </div>
        <aside class="stack-panel">
          <span>Implementation standard</span>
          <strong>Built around the business, not around a demo.</strong>
          <p>Actrix starts with the workflow, the tools already in use, the approval rules, and the operating signal the team needs. The agent stack should feel like a cleaner version of the company, not a disconnected AI toy.</p>
        </aside>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-heading split-heading">
          <div><p class="section-kicker">What gets implemented</p><h2>Agents that understand the workflow before they act.</h2></div>
          <p>The goal is not to automate for the sake of automation. The goal is to give the company a reliable layer that can read context, make bounded judgments, suggest useful changes, and keep people in control.</p>
        </div>
        <div class="stack-cards">
          <article class="stack-card"><span>01</span><h3>Workflow model</h3><p>Actrix maps triggers, inputs, tools, records, edge cases, staff roles, and approval points before building.</p><ul><li>Current-state workflow</li><li>Failure points</li><li>Human review rules</li></ul></article>
          <article class="stack-card"><span>02</span><h3>Integrated agents</h3><p>Agents connect to the places work already appears: inboxes, forms, calendars, docs, CRMs, spreadsheets, support queues, and reporting.</p><ul><li>Context collection</li><li>Drafted outputs</li><li>Handoff updates</li></ul></article>
          <article class="stack-card"><span>03</span><h3>Operating intelligence</h3><p>The system should show the business what is changing, what keeps breaking, and what decisions deserve attention.</p><ul><li>Daily or weekly briefs</li><li>Weak-spot detection</li><li>Recommended next actions</li></ul></article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-heading split-heading">
          <div><p class="section-kicker">Architecture</p><h2>The stack has layers, not random automations.</h2></div>
          <p>Complex companies need a system that can start small and grow without turning into a brittle web of one-off automations.</p>
        </div>
        <div class="signal-board">
          <div class="signal-row"><strong>Input layer</strong><span>Calls, texts, forms, inboxes, documents, existing tools, daily reports.</span><span>The agent watches real work, not a separate prompt box.</span></div>
          <div class="signal-row"><strong>Judgment layer</strong><span>Business rules, policies, examples, preferences, constraints, and approval paths.</span><span>The agent can make bounded recommendations without taking reckless action.</span></div>
          <div class="signal-row"><strong>Action layer</strong><span>Drafts, summaries, tasks, records, reminders, reports, routing, and owner briefs.</span><span>Low-risk work moves; high-risk decisions stop for people.</span></div>
        </div>
      </div>
    </section>
    <section class="section context-route" aria-labelledby="related-agent-pages">
      <div class="container context-shell">
        <div><p class="section-kicker">Related pages</p><h2 id="related-agent-pages">Follow the implementation path.</h2><p>These pages explain the three parts of Actrix's on-site authority: technical implementation, integration into current workflows, and intelligence from daily operations.</p></div>
        <div class="context-grid">${relatedCards}<a class="context-card" href="/idaho-ai-services"><span>Idaho AI services</span><small>The main statewide hub for AI implementation.</small></a><a class="context-card" href="/ai-automation-pricing"><span>Pricing and scope</span><small>How starter agents differ from custom implementations.</small></a><a class="context-card" href="/case-studies"><span>Proof patterns</span><small>Reference architectures without fake client claims.</small></a></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-heading split-heading">
          <div><p class="section-kicker">FAQ</p><h2>Questions before implementation.</h2></div>
          <p>Short answers for Idaho companies deciding whether they need a simple automation, a chatbot, or a serious agent implementation.</p>
        </div>
        <div class="faq-wrap">
          ${faq.map((item) => `<details><summary>${item.q}</summary><div class="faq-answer"><p>${item.a}</p></div></details>`).join("\n          ")}
        </div>
      </div>
    </section>
    <section class="contact-section">
      <div class="container note-card">
        <p class="section-kicker">Start with the workflow</p>
        <h2>Text the system you wish already existed.</h2>
        <p>Send the workflow, tools, data sources, and decisions your team handles repeatedly. Actrix will map the smallest useful implementation before recommending a bigger stack.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="sms:+12083666111?&body=Hi%20Actrix%2C%20the%20AI%20system%20I%20want%20to%20map%20is%3A%20">Text the workflow</a><a class="btn btn-secondary" href="/site-map">Browse the site map</a></div>
      </div>
    </section>
  </main>
  ${siteFooter()}
  <script src="/script.js"></script>
</body>
</html>
`;
}

function ensureAuthorityPages() {
  for (const page of authorityPages) {
    write(`${page.slug}.html`, pageTemplate(page));
  }
}

function updateHomepageSchema() {
  const file = "index.html";
  let source = read(file);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Actrix",
        url: `${domain}/`,
        description: "Custom AI agent stack implementation for Idaho companies."
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        name: "Actrix",
        alternateName: "Actrix AI Implementation",
        description:
          "Actrix is an Idaho technical AI implementation firm building custom AI agent stacks, workflow integrations, operational intelligence agents, AI automation, staff training, and owner-approved systems for businesses across Idaho.",
        url: `${domain}/`,
        telephone: "+12083666111",
        email: "samuel@actrix.me",
        logo: `${domain}/favicon.svg`,
        image: `${domain}/og-card.png`,
        priceRange: "Starter agents, installed workflows, and custom agent stacks are scoped by workflow complexity and integration depth.",
        founder: { "@type": "Person", name: "Samuel" },
        areaServed: [
          "Idaho",
          "Boise",
          "Meridian",
          "Nampa",
          "Idaho Falls",
          "Twin Falls",
          "Pocatello",
          "Coeur d'Alene",
          "Rexburg",
          "Moscow",
          "Hailey",
          "Ketchum",
          "Sun Valley",
          "Bellevue"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+12083666111",
          contactType: "sales and implementation support",
          areaServed: "Idaho",
          availableLanguage: "English"
        },
        knowsAbout: [
          "custom AI agent stack implementation",
          "AI implementation for Idaho businesses",
          "workflow integration",
          "operations intelligence agents",
          "custom AI agents",
          "business automation",
          "internal knowledge agents",
          "reporting agents",
          "AI training",
          "safe AI policies",
          "missed-call rescue",
          "quote intake automation"
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Actrix AI implementation services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom AI Agent Stack Implementation",
                description:
                  "Company-specific AI agent stacks that connect workflows, tools, approvals, reports, and operational intelligence."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Workflow Integration",
                description:
                  "Agents integrated into existing inboxes, forms, CRMs, calendars, documents, reports, and staff handoffs."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Operations Intelligence AI Agents",
                description:
                  "Agents that review daily operating signals, create decision briefs, flag weak spots, and suggest practical changes."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Starter Workflow Agents",
                description:
                  "Focused starter agents such as missed-call rescue, quote intake, follow-up, reporting, and staff AI guardrails."
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        name: "Custom AI Agent Stack Implementation Idaho | Actrix",
        url: `${domain}/`,
        about: { "@type": "Thing", name: "custom AI agent stack implementation for Idaho companies" },
        isPartOf: { "@type": "WebSite", name: "Actrix", url: `${domain}/` }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does Actrix implement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Actrix implements custom AI agent stacks, workflow integrations, reporting agents, operations intelligence agents, staff AI guardrails, and starter workflow agents for Idaho companies."
            }
          },
          {
            "@type": "Question",
            name: "Is Actrix only a missed-call rescue company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Missed-call rescue is one starter workflow. Actrix is a technical AI implementation firm for custom company-specific agent stacks, integrations, operating briefs, and workflow systems."
            }
          },
          {
            "@type": "Question",
            name: "Where does Actrix serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Actrix serves Idaho statewide, including Boise, Meridian, Nampa, Idaho Falls, Twin Falls, Pocatello, Rexburg, Moscow, Coeur d'Alene, Hailey, Ketchum, Sun Valley, Bellevue, and nearby communities."
            }
          }
        ]
      }
    ]
  };
  source = source.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n  ${JSON.stringify(schema)}\n  </script>`
  );
  write(file, source);
}

function updateIdahoServicesProofCard() {
  const file = "idaho-ai-services.html";
  let source = read(file);
  source = source
    .replace(/<div class="bc-title">Statewide AI services, one Idaho firm\.<\/div>/, `<div class="bc-title">Statewide AI implementation, one Idaho firm.</div>`)
    .replace(/<span class="bc-s-label">Consulting<\/span>\s*<span class="bc-s-val">\$0<\/span>\s*<span class="bc-s-tag active">First call free<\/span>/, `<span class="bc-s-label">Discovery</span>\n              <span class="bc-s-val">Map</span>\n              <span class="bc-s-tag active">Workflow first</span>`)
    .replace(/<span class="bc-s-label">Installations<\/span>\s*<span class="bc-s-val">39\+<\/span>\s*<span class="bc-s-tag active">Shipments<\/span>/, `<span class="bc-s-label">Stack layers</span>\n              <span class="bc-s-val">3</span>\n              <span class="bc-s-tag active">Input · rules · action</span>`)
    .replace(/<span class="bc-s-label">Industries<\/span>\s*<span class="bc-s-val">11<\/span>\s*<span class="bc-s-tag active">Covered<\/span>/, `<span class="bc-s-label">Industries</span>\n              <span class="bc-s-val">11</span>\n              <span class="bc-s-tag active">Mapped</span>`)
    .replace(/<span class="bc-s-label">Regions<\/span>\s*<span class="bc-s-val">9<\/span>\s*<span class="bc-s-tag soon">Served<\/span>/, `<span class="bc-s-label">Regions</span>\n              <span class="bc-s-val">ID</span>\n              <span class="bc-s-tag soon">Statewide</span>`)
    .replace(
      /<strong>The goal is not "use AI\."<\/strong> The goal is to remove a business bottleneck, make the workflow repeatable, and keep a person in control where money, reputation, customers, or safety are involved\. Actrix builds systems sized to your volume — from a solo operator to a multi-location team\./,
      `<strong>The goal is not "use AI."</strong> The goal is to install a technical agent layer that understands the workflow, connects existing tools, keeps approval visible, and turns daily operating data into cleaner decisions. Actrix can start with one workflow and grow into a department or company-specific stack.`
    );
  write(file, source);
}

function updatePricingPage() {
  const file = "ai-automation-pricing.html";
  let source = read(file);
  source = source
    .replace(/Starter AI automation packages/g, "AI agent stack pricing")
    .replace(/Starter packages/g, "Implementation scopes")
    .replace(/starter package pricing/g, "AI implementation pricing")
    .replace(/First workflow map<\/span><strong>Free<\/strong>/, "Workflow discovery</span><strong>Free first map</strong>")
    .replace(/Starter agent<\/span><strong>\$750-\$1,500<\/strong>/, "Starter agent</span><strong>$750-$1,500</strong>")
    .replace(/Installed workflow<\/span><strong>\$1,500-\$3,000<\/strong>/, "Installed workflow</span><strong>$1,500-$3,000</strong>")
    .replace(/Complex systems<\/span><strong>Scoped quote<\/strong>/, "Department agent stack</span><strong>Scoped quote</strong>")
    .replace(/<h2>Buy one useful system before buying an AI program\.<\/h2>/, "<h2>Buy the smallest useful system, then scope the stack honestly.</h2>")
    .replace(
      /These ranges are meant to remove mystery\. They are not a substitute for scoping, but they help you know whether Actrix is in the right ballpark\./,
      "These ranges separate starter workflow agents from deeper implementations. A serious custom stack needs scoping because integrations, records, approval rules, and reporting can change the build more than the AI model itself."
    )
    .replace(/<h3>Workflow Map<\/h3>/, "<h3>Workflow Discovery</h3>")
    .replace(/<h3>Installed Workflow<\/h3>/, "<h3>Installed Workflow</h3>")
    .replace(
      /<article class="price-card"><span>Install<\/span><h3>Installed Workflow<\/h3><p>A deeper setup when the agent needs multiple steps, intake rules, tool connections, and staff handoff design\.<\/p><ul><li>Workflow build<\/li><li>Light integration support<\/li><li>Training and documentation<\/li><\/ul><\/article>/,
      `<article class="price-card"><span>Stack</span><h3>Department Agent Stack</h3><p>A scoped implementation when agents need multiple workflows, existing tools, internal knowledge, reports, and approval rules.</p><ul><li>Workflow architecture</li><li>Integration support</li><li>Training and operating briefs</li></ul></article>`
    );
  write(file, source);
}

function updateCaseStudies() {
  const file = "case-studies.html";
  let source = read(file);
  source = source
    .replace(/Workflow proofs/g, "Stack proof patterns")
    .replace(/The first systems worth proving\./, "The implementation patterns worth proving.")
    .replace(
      /Each proof is a narrow, measurable agent workflow\. The point is not to automate a whole business\. The point is to fix one leak clearly enough that the owner can trust the next step\./,
      "Each proof pattern is a reference architecture Actrix can adapt without pretending a fake client result exists. The point is to show the workflow, integration, approval line, operating signal, and measurement standard before making broad claims."
    )
    .replace(
      /<article class="story-card"><span>Lead capture<\/span><h3>Missed Call Rescue<\/h3><p>For businesses losing leads after hours or during field work\.<\/p><ul><li>Detect missed call or voicemail<\/li><li>Send quick owner-approved text<\/li><li>Collect job type, urgency, address, and photos<\/li><li>Measure recovered conversations and booked follow-ups<\/li><\/ul><\/article>/,
      `<article class="story-card"><span>Sales operations</span><h3>Lead-to-quote agent stack</h3><p>For Idaho service teams losing context between calls, texts, forms, and estimates.</p><ul><li>Catch lead signals across channels</li><li>Collect job type, urgency, address, photos, and constraints</li><li>Prepare quote-ready briefs and owner approvals</li><li>Measure recovered conversations, response speed, and quote completeness</li></ul></article>`
    )
    .replace(
      /<article class="story-card"><span>Sales intake<\/span><h3>AI Quote Intake<\/h3><p>For contractors and service teams getting vague "how much\?" messages\.<\/p><ul><li>Ask for missing scope details<\/li><li>Structure notes into a quote-ready brief<\/li><li>Flag complex or risky requests<\/li><li>Measure faster estimates and fewer back-and-forth messages<\/li><\/ul><\/article>/,
      `<article class="story-card"><span>Internal knowledge</span><h3>Company knowledge agent</h3><p>For teams that lose answers inside documents, policies, job notes, and scattered staff memory.</p><ul><li>Connect approved internal knowledge sources</li><li>Answer staff questions with citations or source notes</li><li>Flag missing policy or unclear ownership</li><li>Measure time saved and fewer repeated internal questions</li></ul></article>`
    )
    .replace(
      /<article class="story-card"><span>Team safety<\/span><h3>Staff AI Guardrails<\/h3><p>For teams using AI already, but without shared rules or repeatable workflows\.<\/p><ul><li>Audit current AI use<\/li><li>Define what staff can and cannot paste into tools<\/li><li>Create approved prompt and review patterns<\/li><li>Measure safer adoption and fewer one-off habits<\/li><\/ul><\/article>/,
      `<article class="story-card"><span>Operations intelligence</span><h3>Daily weak-spot brief</h3><p>For owners who need the business to surface repeated friction before it becomes a larger problem.</p><ul><li>Review messages, jobs, reports, and customer signals</li><li>Summarize delays, repeated questions, and risk patterns</li><li>Recommend operational changes for review</li><li>Measure decisions made from the weekly operating brief</li></ul></article>`
    );
  write(file, source);
}

function updateBuyerGuide() {
  const file = "idaho-ai-automation-buyers-guide.html";
  let source = read(file);
  source = source
    .replace(/AI automation partner/g, "AI implementation partner")
    .replace(/AI automation vendors/g, "AI implementation vendors")
    .replace(/A good AI automation partner should be able to explain/g, "A good AI implementation partner should be able to explain")
    .replace(/AI consulting, automation, agents, chatbots, implementation, training/g, "AI consulting, automation, agent stacks, workflow integration, chatbots, implementation, training")
    .replace(
      /<div class="decision-row"><strong>Custom AI agents<\/strong><span>Best when the system needs to read messy messages, ask for missing context, draft output, and prepare work\.<\/span><span>Ask where human approval sits before the agent sends, books, quotes, or changes records\.<\/span><\/div>/,
      `<div class="decision-row"><strong>Custom AI agent stacks</strong><span>Best when the system needs to read messy messages, connect existing tools, ask for missing context, draft output, update handoffs, and create operating briefs.</span><span>Ask where integrations, human approval, data boundaries, and weak-spot reporting sit before the agent sends, books, quotes, or changes records.</span></div>`
    )
    .replace(
      /<article class="guide-card"><span>01<\/span><h3>Missed-call rescue<\/h3><p>When calls are missed after hours or during jobs, an agent can text back, collect details, and hand the owner a lead brief\.<\/p><a class="text-link" href="\/missed-call-rescue">See missed-call rescue<\/a><\/article>/,
      `<article class="guide-card"><span>01</span><h3>Agent stack implementation</h3><p>When the business has multiple recurring workflows, a custom stack can connect intake, records, approvals, reporting, and daily operating signals.</p><a class="text-link" href="/custom-ai-agent-stack-idaho">See agent stack implementation</a></article>`
    )
    .replace(
      /<article class="guide-card"><span>02<\/span><h3>Quote intake<\/h3><p>When customers send vague requests, an agent can ask for photos, location, timeline, and budget before the owner prepares the quote\.<\/p><a class="text-link" href="\/ai-quote-intake">See AI quote intake<\/a><\/article>/,
      `<article class="guide-card"><span>02</span><h3>Workflow integration</h3><p>When teams already live inside email, forms, calendars, CRMs, spreadsheets, and documents, the agent needs to fit those systems instead of replacing them blindly.</p><a class="text-link" href="/ai-workflow-integration-idaho">See workflow integration</a></article>`
    )
    .replace(
      /<article class="guide-card"><span>03<\/span><h3>Safe staff AI use<\/h3><p>When a team is experimenting with AI, written rules prevent sensitive data mistakes and keep approvals clear\.<\/p><a class="text-link" href="\/safe-ai-policies-for-staff">Read safe AI policies<\/a><\/article>/,
      `<article class="guide-card"><span>03</span><h3>Operations intelligence</h3><p>When the business needs better judgment from daily data, agents can surface repeated friction, slow handoffs, customer themes, and decisions worth reviewing.</p><a class="text-link" href="/operations-intelligence-ai-agents-idaho">See operations intelligence</a></article>`
    );
  write(file, source);
}

function updateSitemap() {
  const fileSlugs = htmlFiles().map((file) => (file === "index.html" ? "" : file.replace(/\.html$/, ""))).sort((a, b) => {
    const priority = ["", "idaho-ai-services", "custom-ai-agent-stack-idaho", "ai-workflow-integration-idaho", "operations-intelligence-ai-agents-idaho"];
    const ai = priority.indexOf(a);
    const bi = priority.indexOf(b);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return a.localeCompare(b);
  });
  const urls = fileSlugs.map((slug) => {
    const loc = `${domain}/${slug}`;
    const priority =
      slug === "" ? "1.0" :
        ["idaho-ai-services", "custom-ai-agent-stack-idaho", "ai-workflow-integration-idaho", "operations-intelligence-ai-agents-idaho"].includes(slug) ? "0.95" :
          ["idaho-ai-automation-buyers-guide", "ai-automation-roi-calculator", "ai-agents-for-business", "business-automation-idaho", "idaho-ai-consulting"].includes(slug) ? "0.9" :
            slug.startsWith("ai-services-") ? "0.8" : "0.75";
    const changefreq = slug === "" || slug === "idaho-ai-services" || slug.startsWith("ai-services-") ? "weekly" : "monthly";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
}

function updateEntityFiles() {
  write("llms.txt", `# Actrix

Actrix is a statewide Idaho technical AI implementation firm for companies that need custom AI agent stacks, workflow integration, operations intelligence, AI automation, AI support, staff training, and human-approved systems.

Primary site: https://www.actrix.me/
Contact: samuel@actrix.me
Phone: +1-208-366-6111
Service area: Idaho, including Boise, Meridian, Nampa, Idaho Falls, Twin Falls, Pocatello, Rexburg, Moscow, Coeur d'Alene, Hailey, Ketchum, Sun Valley, Bellevue, and nearby communities.

## Best Pages For Understanding Actrix

- https://www.actrix.me/custom-ai-agent-stack-idaho - custom AI agent stack implementation.
- https://www.actrix.me/ai-workflow-integration-idaho - AI workflow integration into existing company systems.
- https://www.actrix.me/operations-intelligence-ai-agents-idaho - operations intelligence agents and daily business briefs.
- https://www.actrix.me/idaho-ai-services - main Idaho AI services hub.
- https://www.actrix.me/about-actrix - operator, service area, and trust positioning.
- https://www.actrix.me/ai-automation-pricing - pricing, scope, and implementation ranges.
- https://www.actrix.me/case-studies - proof patterns and reference architectures.
- https://www.actrix.me/idaho-ai-automation-buyers-guide - guide to choosing AI implementation in Idaho.
- https://www.actrix.me/ai-automation-roi-calculator - calculator for leads, saved time, reporting, and operational drag.
- https://www.actrix.me/ai-agents-for-business - custom AI agent explanation.

## What Actrix Builds

- Custom AI agent stacks for company-specific workflows.
- AI workflow integration into inboxes, forms, CRMs, documents, calendars, reports, and staff handoffs.
- Operations intelligence agents that review daily business data, surface weak spots, and prepare decision briefs.
- Starter workflow agents such as missed-call rescue, quote intake, follow-up, reporting, and staff AI guardrails.
- AI support, cleanup, tool setup, staff training, and safe AI policies.

## Positioning Notes

Actrix is not just a chatbot vendor or missed-call rescue service. Missed-call rescue is a starter wedge; the broader business is technical AI implementation for custom agent stacks across Idaho.
Preferred wording: "custom AI agent stack implementation," "AI implementation for Idaho companies," "workflow integration," "operations intelligence agents," "custom AI agents," and "human-approved AI systems."
`);

  write("humans.txt", `/* TEAM */

Business: Actrix
Operator: Samuel
Location: Idaho, United States
Site: https://www.actrix.me/
Email: samuel@actrix.me
Phone: +1-208-366-6111

/* SITE */

Purpose: Technical AI implementation, custom AI agent stacks, workflow integration, operations intelligence, AI automation, support, and training for Idaho companies.
Primary audience: Idaho businesses with company-specific workflows, scattered tools, legacy handoffs, repeated admin, missed leads, reporting gaps, staff AI questions, or operational weak spots.
Service area: Idaho statewide, including Boise, Meridian, Nampa, Idaho Falls, Twin Falls, Pocatello, Rexburg, Moscow, Coeur d'Alene, Hailey, Ketchum, Sun Valley, and Bellevue.
Canonical domain: https://www.actrix.me/
Sitemap: https://www.actrix.me/sitemap.xml

/* PRINCIPLES */

No fake local offices.
Technical implementation before hype.
One useful workflow first when that is the right scope.
Custom agent stacks for companies with more complex needs.
Human approval for money, reputation, safety, sensitive customer data, and company policy.
Agents should fit existing workflows before replacing them.
Daily operating data should help the business see weak spots and practical next actions.
`);
}

function updateSiteMapDirectory() {
  let source = read("site-map.html");
  const implementationLinks = `<section class="directory-group"><h2>Agent stack implementation</h2><div class="directory-grid"><a href="/custom-ai-agent-stack-idaho"><strong>Agent stack implementation</strong><small>Custom AI agent stacks for Idaho companies with real workflows.</small></a><a href="/ai-workflow-integration-idaho"><strong>Workflow integration</strong><small>Agents connected to existing tools, records, reports, and approvals.</small></a><a href="/operations-intelligence-ai-agents-idaho"><strong>Operations intelligence</strong><small>Daily briefs, weak-spot detection, and practical recommendations.</small></a></div></section>`;
  if (!source.includes("<h2>Agent stack implementation</h2>")) {
    source = source.replace(/<section class="directory-group"><h2>Full directory<\/h2>/, `${implementationLinks}<section class="directory-group"><h2>Full directory</h2>`);
  }
  write("site-map.html", source);
}

function updateGrowthPlaybook() {
  const file = "growth/local-seo-sprint-playbook.md";
  if (!fs.existsSync(path.join(root, file))) return;
  let source = read(file);
  if (!source.includes("custom AI agent stack implementation")) {
    source += `\n\n## 2026-05-19 Agent Stack Sprint Notes\n\n- Primary on-site entity should be: custom AI agent stack implementation for Idaho companies.\n- Starter workflows such as missed-call rescue and quote intake are entry points, not the ceiling of the business.\n- New internal authority pages: /custom-ai-agent-stack-idaho, /ai-workflow-integration-idaho, /operations-intelligence-ai-agents-idaho.\n- Every major page should connect back to implementation, integration, operations intelligence, pricing, proof patterns, and buyer education.\n- Off-site prominence still needs free local proof: LinkedIn posts, partner mentions, vendor profiles, client quotes, local event notes, and approved screenshots.\n`;
    write(file, source);
  }
}

function updateAllPages() {
  for (const file of htmlFiles()) {
    let source = read(file);
    source = cleanupContextualRail(source);
    source = replaceTitleDescription(source, file);
    source = replaceHero(source, file);
    source = replaceGenericFaq(source);
    source = replaceFooters(source);
    source = addAuthorityNavLinks(source);
    source = normalizeMicrocopy(source);
    source = addContextualRail(source, file);
    write(file, source);
  }
}

ensureAuthorityPages();
updateAllPages();
updateHomepageSchema();
updateIdahoServicesProofCard();
updatePricingPage();
updateCaseStudies();
updateBuyerGuide();
updateSiteMapDirectory();
updateEntityFiles();
updateSitemap();
updateGrowthPlaybook();

console.log("Agent stack sprint applied.");
