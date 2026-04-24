const examples = {
  contractor: {
    label: 'Contractor system',
    risk: 'Approval required',
    title: 'Estimate intake that turns vague jobs into quote-ready details.',
    summary: 'A lead asks for a repair or remodel quote. The system replies quickly, asks for dimensions, photos, location, urgency, and rough budget, then drafts a clean estimate note for owner review.',
    steps: [
      'Lead comes in from text, email, or form.',
      'AI asks for missing photos, measurements, and timeline.',
      'Job details are summarized into a quote-ready brief.',
      'Owner approves the reply and sends next steps.'
    ],
    output: '“Deck repair lead — Bellevue. Needs stair tread replacement, two photos received, flexible timeline, wants rough range before site visit.”'
  },
  restaurant: {
    label: 'Restaurant system',
    risk: 'Staff handoff',
    title: 'Event and catering inquiries routed before the dinner rush.',
    summary: 'The system answers basic menu and private event questions, gathers date, headcount, dietary needs, budget range, and preferred contact method, then hands a clean inquiry to the manager.',
    steps: [
      'Inquiry arrives from the website or email.',
      'AI collects date, party size, menu needs, and timing.',
      'Manager gets a clean summary instead of a messy thread.',
      'Follow-up draft is ready when service slows down.'
    ],
    output: '“Private dinner inquiry — Ketchum. 22 guests, gluten-free options needed, Saturday evening, wants family-style menu ideas.”'
  },
  property: {
    label: 'Property manager system',
    risk: 'Triage first',
    title: 'Maintenance requests sorted before they become inbox chaos.',
    summary: 'Tenant messages can be classified by urgency, missing information can be requested, photos can be collected, and the right vendor or internal task can be suggested.',
    steps: [
      'Tenant reports a maintenance issue.',
      'AI asks location, photos, severity, and access details.',
      'Urgency is flagged without making unsafe decisions alone.',
      'Manager receives a vendor-ready maintenance brief.'
    ],
    output: '“Unit 4B — leaking under kitchen sink. Photo received, water shutoff unknown, tenant home after 4 PM. Suggested priority: same-day review.”'
  },
  clinic: {
    label: 'Clinic / wellness system',
    risk: 'Privacy cautious',
    title: 'Admin help without pretending AI is a provider.',
    summary: 'AI can route non-clinical questions, draft appointment follow-ups, organize intake paperwork, and answer visible policy questions while leaving medical or sensitive decisions to people.',
    steps: [
      'Patient asks a non-urgent admin question.',
      'AI checks visible policies or approved scripts.',
      'Sensitive topics are routed to staff instead of answered.',
      'Staff gets a concise handoff and draft response.'
    ],
    output: '“New client inquiry — wants availability, insurance/payment policy, and first-visit paperwork. Clinical advice not requested.”'
  },
  retail: {
    label: 'Retail / service system',
    risk: 'Inventory aware',
    title: 'Product and service questions answered without burying the counter.',
    summary: 'The system can answer common product questions, draft follow-up messages, summarize requests, and help staff find policies or product details faster.',
    steps: [
      'Customer asks about availability, service, or fit.',
      'AI checks approved info or asks for missing details.',
      'A helpful reply is drafted for staff review.',
      'Follow-up task is created if the customer needs a callback.'
    ],
    output: '“Customer looking for winter boot sizing help. Needs women’s 8.5, waterproof, under stated budget, can come in Friday.”'
  }
};

function updateExample(key) {
  const data = examples[key] || examples.contractor;
  const label = document.querySelector('[data-example-label]');
  const risk = document.querySelector('[data-example-risk]');
  const title = document.querySelector('[data-example-title]');
  const summary = document.querySelector('[data-example-summary]');
  const steps = document.querySelector('[data-example-steps]');
  const output = document.querySelector('[data-example-output]');

  if (!label || !risk || !title || !summary || !steps || !output) return;

  label.textContent = data.label;
  risk.textContent = data.risk;
  title.textContent = data.title;
  summary.textContent = data.summary;
  output.textContent = data.output;
  steps.innerHTML = data.steps.map((step, index) => `<li><span>${index + 1}</span><p>${step}</p></li>`).join('');
}

function setupExampleTabs() {
  const buttons = Array.from(document.querySelectorAll('[data-example]'));
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      updateExample(button.dataset.example);
    });
  });
}

function buildBriefMessage() {
  const form = document.querySelector('[data-brief-form]');
  if (!form) return '';
  const data = new FormData(form);
  const businessType = data.get('businessType') || 'local business';
  const task = String(data.get('task') || '').trim() || '[add the repeated task]';
  const tools = String(data.get('tools') || '').trim() || '[add current tools]';
  const win = String(data.get('win') || '').trim() || '[add what success looks like]';
  return `Hi Samuel — I run a ${String(businessType).toLowerCase()} business. The repeated task I want help with is: ${task}. Current tools: ${tools}. A win would be: ${win}.`;
}

function updateBriefPreview() {
  const output = document.querySelector('[data-brief-output]');
  const mailLink = document.querySelector('[data-mail-brief]');
  const message = buildBriefMessage();
  if (output) output.textContent = message;
  if (mailLink) {
    const subject = encodeURIComponent('AI systems fit check');
    const body = encodeURIComponent(message);
    mailLink.href = `mailto:wpbfls@gmail.com?subject=${subject}&body=${body}`;
  }
}

function setupBriefBuilder() {
  const inputs = Array.from(document.querySelectorAll('[data-brief-input]'));
  inputs.forEach((input) => input.addEventListener('input', updateBriefPreview));
  inputs.forEach((input) => input.addEventListener('change', updateBriefPreview));
  updateBriefPreview();

  const copyButton = document.querySelector('[data-copy-brief]');
  const copyStatus = document.querySelector('[data-copy-status]');
  if (!copyButton) return;

  copyButton.addEventListener('click', async () => {
    const message = buildBriefMessage();
    try {
      await navigator.clipboard.writeText(message);
      if (copyStatus) copyStatus.textContent = 'Copied. Paste it into a text or email to Samuel.';
    } catch (error) {
      if (copyStatus) copyStatus.textContent = 'Copy failed. Select the generated message and copy it manually.';
    }
  });
}

function setupNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    }
  });
}

function setupYear() {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  setupExampleTabs();
  setupBriefBuilder();
  setupNav();
  setupYear();
});
