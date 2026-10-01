const CASES = {
  voc: {
    kind: "Product case study · Market brief · PRD · Live tool",
    title: "Voice of Customer Copilot",
    steps: [
      ["Problem", "<p>Feedback tools like Enterpret and Unwrap cluster customer themes well, but stop short of the prioritization decision a PM is actually judged on.</p>"],
      ["Users", "<p>Product managers who have to decide what to fix next from thousands of reviews and tickets.</p>"],
      ["What I did", "<ul><li>Ran competitor teardowns of the customer-feedback category.</li><li>Wrote the market brief and the PRD to fill that gap.</li><li>Cleaned multi-channel feedback, mining app-store reviews into a tagged theme taxonomy.</li><li>Ranked themes by volume, sentiment and week-over-week trend.</li></ul>"],
      ["Outcome", "<p>A working tool with sortable issue tables and sentiment-trend charts, where every insight drills through to the source verbatims in one click.</p>"]
    ],
    stack: ["Competitor research", "PRD", "Sentiment analysis", "Data viz"],
    links: [["Open live tool", "https://voc-copilot-six.vercel.app"]]
  },
  zomato: {
    kind: "Product case study · Self-driven",
    title: "Food Delivery Onboarding Teardown",
    steps: [
      ["Problem", "<p>Where do new users of a food delivery app (Zomato as the reference) drop off between registering and placing their first order?</p>"],
      ["What I did", "<ul><li>Mapped the end-to-end onboarding and conversion funnel, touchpoint by touchpoint.</li><li>Looked for friction at each step from registration to first order.</li></ul>"],
      ["Finding", "<p>The biggest drop-off is at checkout, caused by cluttered interface components, redundant address-selection steps and unclear delivery-fee information.</p>"],
      ["Outcome", "<p>Packaged the teardown into an 8-slide deck that turns the funnel findings into prioritized recommendations for a non-technical audience.</p>"]
    ],
    stack: ["Funnel analysis", "UX teardown", "Prioritization", "Storytelling"],
    links: []
  },
  health: {
    kind: "Product build · AI-powered",
    title: "Rural Health Check Platform",
    steps: [
      ["Problem", "<p>People in rural areas often can't see a doctor quickly, so early warning signs of disease get missed.</p>"],
      ["Users", "<p>Rural patients who need an early signal, and a clear next step once they have one.</p>"],
      ["What I did", "<ul><li>Shipped two live versions (Streamlit and Next.js) that give a health prediction from a few inputs.</li><li>Added location-aware doctor mapping, so a prediction leads to an action instead of just a number.</li><li>Fixed imbalanced medical data and tuned the models so predictions could be trusted.</li></ul>"],
      ["Outcome", "<p>Up to 94% prediction accuracy, delivered as a usable product rather than a research notebook.</p>"]
    ],
    stack: ["User problem framing", "AI feature design", "Streamlit", "Next.js"],
    links: [["View source code", "https://github.com/freelansprateek-tech/diseaseprediction"]]
  },
  churn: {
    kind: "Retention analysis",
    title: "Churn Early-Warning System",
    steps: [
      ["Problem", "<p>Product teams usually learn why users left after they're gone. The goal was to spot at-risk users early enough to act.</p>"],
      ["What I did", "<ul><li>Audited the product's event data in SQL and flagged inconsistencies before trusting any numbers.</li><li>Built a model that surfaces the behaviours that come before a user churns.</li></ul>"],
      ["PM takeaway", "<p>Bad event tracking produces confident but wrong answers. Getting the data right first is what makes a retention strategy worth following.</p>"]
    ],
    stack: ["Retention", "Event data audit", "SQL", "Predictive modeling"],
    links: []
  }
};

const dlg = document.getElementById("dlg");
const el = id => document.getElementById(id);
const arrow = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

function openCase(key){
  const c = CASES[key]; if(!c) return;
  el("dlgKind").textContent = c.kind;
  el("dlgTitle").textContent = c.title;
  el("dlgSteps").innerHTML = c.steps.map(([h,b]) => `<div class="step"><div class="caps">${h}</div><div>${b}</div></div>`).join("");
  el("dlgStack").innerHTML = c.stack.map(s => `<span>${s}</span>`).join("");
  el("dlgLinks").innerHTML = c.links.map(([t,u],i) => `<a class="btn${i? ' ghost':''}" href="${u}" target="_blank" rel="noopener">${t} ${arrow}</a>`).join("");
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open","");
}
document.querySelectorAll(".card").forEach(b => b.addEventListener("click", () => openCase(b.dataset.case)));
el("dlgClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

el("copyEmail").addEventListener("click", async () => {
  const btn = el("copyEmail");
  try { await navigator.clipboard.writeText(el("email").textContent); btn.textContent = "Copied"; }
  catch { const r = document.createRange(); r.selectNodeContents(el("email")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Selected"; }
  setTimeout(() => btn.textContent = "Copy", 1600);
});

/* highlight the dock item for the section in view */
const links = [...document.querySelectorAll('.dock a[href^="#"]')];
const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
if ("IntersectionObserver" in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (location.hash === "#all-skills") return; if (e.isIntersecting){ links.forEach(a => a.classList.remove("on")); map.get(e.target.id)?.classList.add("on"); } });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home","about","skills","work","experience","contact"].forEach(id => { const s = el(id); if (s) io.observe(s); });
}

/* all-skills page routing */
const panel = el("all-skills");
const skillsLink = document.querySelector('.dock a[href="#all-skills"]');
function route(){
  const open = location.hash === "#all-skills";
  panel.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
  if (open){ panel.scrollTop = 0; links.forEach(a => a.classList.remove("on")); skillsLink?.classList.add("on"); }
  else if (location.hash){ const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
}
window.addEventListener("hashchange", route);
route();
