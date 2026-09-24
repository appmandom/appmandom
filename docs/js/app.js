/* Settle in Portugal: a dependency-free single-page app with hash routing.
   Data lives in js/data/*.js; the questionnaire in js/questionnaire.js; the rules in js/plan.js. */
(function () {
  'use strict';
  const SPT = window.SPT = window.SPT || {};
  const $app = document.getElementById('app');
  const SITE = 'Settle in Portugal';
  // Where "Report an error" / "Send feedback" links point. While the repo is private, visitors cannot open GitHub issues,
// so this can be swapped for a public form (e.g. a Google Form) during the feedback phase.
const ISSUES_URL = 'https://github.com/appmandom/settle-in-portugal/issues';
// Embedded preview (claude.ai artifact) sets window.SPT_EMBED: printing is unavailable there, comments are.
const EMBED = !!window.SPT_EMBED;

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function md(s) {
    let t = esc(s);
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|#[^\s)]*)\)/g, (m, txt, url) =>
      url.charAt(0) === '#' ? `<a href="${url}">${txt}</a>` : `<a href="${url}" target="_blank" rel="noopener noreferrer">${txt}</a>`);
    return t;
  }
  SPT.md = md; SPT.esc = esc;

  const store = {
    get(k, d) { try { const v = localStorage.getItem('spt.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('spt.' + k, JSON.stringify(v)); } catch (e) { /* private mode etc. */ } },
    del(k) { try { localStorage.removeItem('spt.' + k); } catch (e) { /* ignore */ } }
  };

  const OFFICIAL_HOSTS = ['gov.pt', 'europa.eu', 'seg-social.pt', 'imt-ip.pt', 'iefp.pt', 'bportugal.pt', 'anacom.pt', 'erse.pt', 'livroreclamacoes.pt', 'portaldahabitacao.pt', 'todoscontam.pt', 'uc.pt', 'cne.pt', 'min-saude.pt', 'ers.pt', 'provedor-jus.pt', 'hcch.net', 'occ.pt', 'consumidor.pt', 'iapmei.pt', 'ine.pt', 'cm-lisboa.pt', 'cm-porto.pt'];
  function isOfficial(url) {
    try { const h = new URL(url).hostname; return OFFICIAL_HOSTS.some(d => h === d || h.endsWith('.' + d)); } catch (e) { return false; }
  }

  const guides = () => SPT.guides || [];
  const guideById = id => guides().find(g => g.id === id);
  const catLabel = c => (SPT.categories && SPT.categories[c]) || c;

  function getAnswers() { return store.get('answers', {}); }
  function setAnswers(a) { store.set('answers', a); }
  function visibleQuestions(a) { return SPT.questions.filter(q => !q.showIf || q.showIf(a)); }
  function isComplete(a) { return visibleQuestions(a).every(q => Object.prototype.hasOwnProperty.call(a, q.id)); }
  function doneSet() { return new Set(store.get('done', [])); }
  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  function badge(b) {
    const map = { free: ['badge-free', 'Free'], deadline: ['badge-deadline', 'Deadline'], official: ['badge-official', 'Official'] };
    const m = map[b] || ['badge', b];
    return `<span class="badge ${m[0]}">${esc(m[1])}</span>`;
  }

  function disclaimerBox() {
    return `<div class="callout callout-info small"><p><strong>Information, not advice.</strong> Summarised from public government sources; rules and fees change. Confirm on the official pages listed under “Sources” before acting, and ask a lawyer, accountant or the service itself about your own case.</p></div>`;
  }

  /* ---------- views ---------- */
  function viewHome() {
    const a = getAnswers();
    const complete = isComplete(a) && Object.keys(a).length;
    let continueBox = '';
    if (complete) {
      const plan = SPT.buildPlan(a);
      const all = plan.phases.reduce((n, p) => n + p.tasks.length, 0);
      const done = plan.phases.reduce((n, p) => n + p.tasks.filter(t => doneSet().has(t.id)).length, 0);
      continueBox = `<div class="callout callout-soft"><p><strong>Welcome back.</strong> Your plan has ${all} steps and you have ticked off ${done}. <a href="#/plan">Continue your plan →</a></p></div>`;
    }
    const teasers = ['cmd', 'ehic', 'portal-financas', 'sns-healthcare'].map(guideById).filter(Boolean);
    const teaserTitles = { cmd: 'Chave Móvel Digital: one login for every public service', ehic: 'The free EU “blue card” for healthcare while travelling', 'portal-financas': 'Say “com contribuinte”: receipts become tax deductions', 'sns-healthcare': 'Call SNS 24 before the ER and pay nothing' };
    return `
      <section class="hero">
        <h1>Moving to Portugal, minus the guesswork.</h1>
        <p class="lead">A free, plain-language guide to the paperwork nobody explains: NIF, NISS, SNS number, Chave Móvel Digital, taxes, social security, healthcare and residency. Every step links to the official source.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="#/start">Build my plan</a>
          <a class="btn" href="#/guides">Browse the guides</a>
        </div>
        ${continueBox}
      </section>

      <section class="grid grid-2" style="margin-top:8px">
        <div class="card feature"><span class="icon">📝</span><div><h3>9 quick questions</h3><p>Your passport, your situation, what you already have. Answers stay on your phone.</p></div></div>
        <div class="card feature"><span class="icon">🗺️</span><div><h3>An ordered checklist</h3><p>What to do first, what unlocks what, and which deadlines are real.</p></div></div>
        <div class="card feature"><span class="icon">🏛️</span><div><h3>Official sources only</h3><p>Each step cites gov.pt, Finanças, Segurança Social, SNS, AIMA, IMT or EU pages, with the date it was last checked.</p></div></div>
        <div class="card feature"><span class="icon">💡</span><div><h3>Things nobody tells you</h3><p>The benefits and shortcuts residents discover years too late.</p></div></div>
      </section>

      <h2>Things people find out too late</h2>
      <div class="grid">
        ${teasers.map(g => `<a class="card card-link" href="#/guide/${g.id}"><h3>${esc(teaserTitles[g.id] || g.title)}</h3><p class="muted">${esc(g.summary)}</p></a>`).join('')}
      </div>

      <h2>Browse by topic</h2>
      <div class="chip-row">
        ${Object.keys(SPT.categories || {}).map(c => `<a class="chip" href="#/guides?cat=${c}">${esc(catLabel(c))}</a>`).join('')}
      </div>

      <h2>How this stays trustworthy</h2>
      <ul>
        <li><strong>Sourced.</strong> Every guide ends with links to the official page it was written from.</li>
        <li><strong>Dated.</strong> Each guide shows when it was last checked. Older than a year? Treat it with care.</li>
        <li><strong>Private.</strong> No account, no cookies, no analytics. Your answers live only in your browser.</li>
        <li><strong>Correctable.</strong> Spotted a mistake? <a href="${ISSUES_URL}" target="_blank" rel="noopener noreferrer">Report it</a> and it gets fixed.</li>
      </ul>
      ${disclaimerBox()}
    `;
  }

  function viewStart(idx) {
    const a = getAnswers();
    const qs = visibleQuestions(a);
    idx = Math.max(0, Math.min(idx, qs.length - 1));
    const q = qs[idx];
    const isMulti = q.type === 'multi';
    const current = a[q.id];
    const selected = v => isMulti ? (Array.isArray(current) && current.includes(v)) : current === v;
    const isLast = idx === qs.length - 1;
    const pct = Math.round(((idx) / qs.length) * 100);
    return `
      <p class="muted small" style="margin-bottom:4px">Question ${idx + 1} of ${qs.length}</p>
      <div class="progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
      <h1 class="q-title">${esc(q.title)}</h1>
      ${q.help ? `<p class="q-help">${md(q.help)}</p>` : ''}
      <div class="opts" role="${isMulti ? 'group' : 'radiogroup'}" aria-label="${esc(q.title)}">
        ${q.options.map(o => `
          <button type="button" class="opt ${isMulti ? 'multi' : ''} ${selected(o.value) ? 'selected' : ''}" data-action="${isMulti ? 'toggle' : 'answer'}" data-q="${q.id}" data-v="${o.value}" data-idx="${idx}" role="${isMulti ? 'checkbox' : 'radio'}" aria-checked="${selected(o.value)}">
            <span class="box" aria-hidden="true">${selected(o.value) ? '✓' : ''}</span>
            <span><span class="lbl">${esc(o.label)}</span>${o.desc ? `<span class="desc">${esc(o.desc)}</span>` : ''}</span>
          </button>`).join('')}
      </div>
      <div class="q-nav">
        ${idx > 0 ? `<button type="button" class="btn" data-action="back" data-idx="${idx}">← Back</button>` : `<a class="btn" href="#/">← Home</a>`}
        ${isMulti ? `<button type="button" class="btn btn-primary" data-action="next" data-q="${q.id}" data-idx="${idx}">${isLast ? 'See my plan' : 'Continue'} →</button>` : ''}
      </div>
      <p class="muted small" style="margin-top:20px">Your answers are saved only on this device. You can change them any time.</p>
    `;
  }

  function taskCard(t, done) {
    const g = guideById(t.guide);
    return `
      <div class="task ${done ? 'done' : ''}" id="task-${esc(t.id)}">
        <input class="task-check" type="checkbox" data-task="${esc(t.id)}" ${done ? 'checked' : ''} aria-label="Mark “${esc(t.title)}” as done">
        <div>
          <p class="task-title">${esc(t.title)}</p>
          <p class="task-why">${md(t.why)}</p>
          ${t.note ? `<div class="task-note">${md(t.note)}</div>` : ''}
          <div class="task-meta">
            ${(t.badges || []).map(badge).join('')}
            ${g ? `<a href="#/guide/${g.id}">Read the guide →</a>` : ''}
          </div>
        </div>
      </div>`;
  }

  function viewPlan() {
    const a = getAnswers();
    if (!isComplete(a) || !Object.keys(a).length) {
      return `<div class="empty"><h1>No plan yet</h1><p>Answer nine quick questions and get an ordered checklist for your situation.</p><a class="btn btn-primary" href="#/start">Start the questionnaire</a></div>`;
    }
    const plan = SPT.buildPlan(a);
    const done = doneSet();
    const all = plan.phases.reduce((n, p) => n + p.tasks.length, 0);
    const nDone = plan.phases.reduce((n, p) => n + p.tasks.filter(t => done.has(t.id)).length, 0);
    return `
      <h1>Your plan</h1>
      <div class="profile">${plan.profile.map(p => `<span class="chip">${esc(p)}</span>`).join('')}</div>
      ${plan.already.length ? `<p class="muted small">Already done, so skipped: ${esc(plan.already.join(', '))}.</p>` : ''}
      <div class="progress" aria-label="Progress"><span style="width:${all ? Math.round(nDone / all * 100) : 0}%"></span></div>
      <p class="muted small">${nDone} of ${all} steps ticked off.</p>
      <div class="btn-row no-print">
        <a class="btn btn-sm" href="#/start">Edit answers</a>
        <button type="button" class="btn btn-sm" data-action="copy-plan">Copy as text</button>
        ${EMBED ? '' : '<button type="button" class="btn btn-sm" data-action="print">Print / save PDF</button>'}
        <button type="button" class="btn btn-sm btn-ghost" data-action="reset">Start over</button>
      </div>
      <div class="confirm-box" id="reset-confirm" hidden>
        <p>Delete your answers and ticked steps from this device?</p>
        <div class="btn-row"><button type="button" class="btn btn-sm btn-primary" data-action="reset-yes">Yes, start over</button><button type="button" class="btn btn-sm" data-action="reset-no">Keep my plan</button></div>
      </div>
      ${plan.phases.map(p => `
        <section class="phase" id="phase-${p.id}">
          <div class="phase-head"><h2>${esc(p.title)}</h2><span class="muted small">${p.tasks.filter(t => done.has(t.id)).length}/${p.tasks.length}</span></div>
          <p class="phase-intro">${esc(p.intro)}</p>
          ${p.tasks.map(t => taskCard(t, done.has(t.id))).join('')}
        </section>`).join('')}
      <section class="phase">
        <h2>Things nobody tells you</h2>
        <p class="phase-intro">Not obligations, just the shortcuts and benefits people discover years too late.</p>
        ${plan.bonus.map(t => `<a class="card card-link" href="#/guide/${t.guide}" style="margin-bottom:10px"><h3>💡 ${esc(t.title)}</h3><p class="muted">${esc(t.why)}</p></a>`).join('')}
      </section>
      ${disclaimerBox()}
    `;
  }

  function guideCard(g) {
    return `<a class="card card-link" href="#/guide/${g.id}"><span class="badge badge-cat">${esc(catLabel(g.category))}</span><h3 style="margin-top:8px">${esc(g.title)}</h3><p class="muted" style="margin:0">${esc(g.summary)}</p></a>`;
  }

  function filterGuides(cat, q) {
    q = (q || '').trim().toLowerCase();
    return guides().filter(g => (!cat || g.category === cat) && (!q || [g.title, g.pt, g.summary, (g.keywords || []).join(' ')].join(' ').toLowerCase().includes(q)));
  }

  function viewGuides(cat, q) {
    const list = filterGuides(cat, q);
    return `
      <h1>Guides</h1>
      <p class="muted">Plain-language explanations of each piece of Portuguese admin, with the official sources.</p>
      <input class="search" type="search" placeholder="Search: NIF, healthcare, driving…" value="${esc(q || '')}" data-search="guides" data-cat="${esc(cat || '')}" aria-label="Search guides">
      <div class="chip-row">
        <a class="chip ${!cat ? 'active' : ''}" href="#/guides">All</a>
        ${Object.keys(SPT.categories || {}).map(c => `<a class="chip ${cat === c ? 'active' : ''}" href="#/guides?cat=${c}">${esc(catLabel(c))}</a>`).join('')}
      </div>
      <div class="grid" id="guide-results">${list.length ? list.map(guideCard).join('') : '<p class="empty">Nothing matches. Try another word, or check the glossary.</p>'}</div>
    `;
  }

  function viewGuide(id) {
    const g = guideById(id);
    if (!g) return view404();
    const related = (g.related || []).map(guideById).filter(Boolean);
    const list = (arr, cls) => arr && arr.length ? `<ul class="${cls || ''}">${arr.map(x => `<li>${md(x)}</li>`).join('')}</ul>` : '';
    return `
      <p class="no-print"><a href="#/guides?cat=${g.category}">← ${esc(catLabel(g.category))}</a></p>
      <header class="guide-head">
        <h1>${esc(g.title)}</h1>
        ${g.pt ? `<p class="pt">${esc(g.pt)}</p>` : ''}
        <p class="lead">${md(g.summary)}</p>
      </header>
      ${g.who ? `<div class="callout callout-soft"><p><strong>Who this is for:</strong> ${md(g.who)}</p></div>` : ''}
      ${g.why ? `<h2>Why it matters</h2><p>${md(g.why)}</p>` : ''}
      <dl class="kv">
        ${g.where ? `<div><dt>Where</dt><dd>${md(g.where)}</dd></div>` : ''}
        ${g.cost ? `<div><dt>Cost</dt><dd>${md(g.cost)}</dd></div>` : ''}
        ${g.time ? `<div><dt>How long</dt><dd>${md(g.time)}</dd></div>` : ''}
        ${g.needs ? `<div><dt>You need first</dt><dd>${md(g.needs)}</dd></div>` : ''}
      </dl>
      ${g.steps && g.steps.length ? `<h2>Step by step</h2><ol class="steps">${g.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : ''}
      ${g.documents && g.documents.length ? `<h2>Documents to bring</h2>${list(g.documents)}` : ''}
      ${g.sections ? g.sections.map(s => `<h2>${esc(s.title)}</h2>${(s.body || []).map(p => `<p>${md(p)}</p>`).join('')}${list(s.list)}`).join('') : ''}
      ${g.tips && g.tips.length ? `<h2>Tips</h2>${list(g.tips)}` : ''}
      ${g.pitfalls && g.pitfalls.length ? `<h2>Common mistakes</h2>${list(g.pitfalls)}` : ''}
      ${related.length ? `<h2>Related guides</h2><div class="related">${related.map(r => `<a class="chip" href="#/guide/${r.id}">${esc(r.title)}</a>`).join('')}</div>` : ''}
      <h2>Sources</h2>
      <ul class="sources">
        ${(g.sources || []).map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> ${isOfficial(s.url) ? badge('official') : ''}</li>`).join('')}
      </ul>
      <p class="verified">Last checked: ${esc(g.lastVerified || 'unknown')}. Links open the official pages, which may be in Portuguese; most browsers can translate them. <a href="${ISSUES_URL}" target="_blank" rel="noopener noreferrer">Report an error</a>.</p>
      ${disclaimerBox()}
    `;
  }

  function viewResources(q) {
    q = (q || '').trim().toLowerCase();
    const groups = (SPT.resources || []).map(gr => ({
      group: gr.group,
      items: gr.items.filter(it => !q || [it.name, it.desc, it.url].join(' ').toLowerCase().includes(q))
    })).filter(gr => gr.items.length);
    const typeBadge = t => t === 'official' ? badge('official') : t === 'eu' ? `<span class="badge badge-eu">EU</span>` : t ? `<span class="badge">${esc(t)}</span>` : '';
    return `
      <h1>Resources</h1>
      <p class="muted">The websites, helplines and offices that actually matter, grouped by need. Official sources are marked.</p>
      <input class="search" type="search" placeholder="Search resources…" value="${esc(q)}" data-search="resources" aria-label="Search resources">
      <div id="resource-results">
      ${groups.length ? groups.map(gr => `
        <h2>${esc(gr.group)}</h2>
        ${gr.items.map(it => `
          <div class="res">
            <div class="res-title">${it.url ? `<a href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">${esc(it.name)}</a>` : esc(it.name)} ${typeBadge(it.type)}</div>
            <div class="small">${md(it.desc)}</div>
            ${it.url ? `<div class="url muted">${esc(it.url.replace(/^https?:\/\//, ''))}</div>` : ''}
          </div>`).join('')}`).join('') : '<p class="empty">Nothing matches.</p>'}
      </div>
    `;
  }

  function viewGlossary() {
    const items = (SPT.glossary || []).slice().sort((x, y) => x.term.localeCompare(y.term));
    return `
      <h1>Glossary</h1>
      <p class="muted">The acronyms and words you will meet at every counter.</p>
      <dl class="gloss">
        ${items.map(i => `<dt>${esc(i.term)}${i.full ? ` <span class="muted" style="font-weight:400">· ${esc(i.full)}</span>` : ''}</dt><dd>${md(i.desc)}</dd>`).join('')}
      </dl>
    `;
  }

  function viewAbout() {
    return `
      <h1>About</h1>
      <p>This site exists because settling in Portugal involves a dozen numbers, portals and offices that nobody explains in one place. People live here for years without knowing that the Chave Móvel Digital exists, that Portugal will issue them a free EU health card, or that their receipts could have been lowering their tax bill.</p>
      <h2>Principles</h2>
      <ul>
        <li><strong>Free to use.</strong> The core guides and the personal plan stay free.</li>
        <li><strong>Backed by official sources.</strong> Every guide is written from public government pages and links to them. Where rules are in flux, the guide says so.</li>
        <li><strong>Dated and correctable.</strong> Guides show when they were last checked. Errors can be reported on GitHub.</li>
        <li><strong>Private by design.</strong> No accounts, cookies or analytics. Questionnaire answers and progress live only in your browser.</li>
      </ul>
      <h2>What this is not</h2>
      <p>It is not legal, tax or immigration advice, and it is not affiliated with the Portuguese government, the EU or any public body. Immigration rules, tax rules and fees change frequently. For decisions with real consequences, talk to a lawyer, a certified accountant, the service itself, or the free CNAIM migrant support centres.</p>
      <h2>Roadmap</h2>
      <ul>
        <li>Portuguese and other language versions of the guides.</li>
        <li>Reminders for yearly deadlines (IRS, e-Fatura, permit renewals, IUC).</li>
        <li>A document checklist you can tick off per step.</li>
        <li>Possibly a premium tier later (deadline calendar, vetted professionals, human review). The basics will remain free.</li>
      </ul>
      <h2>Contribute</h2>
      <p>The site is a static project on GitHub. Content lives in plain JavaScript files, so a guide can be corrected with a small pull request. Every change to a guide should update its “last checked” date and cite an official source.</p>
      <p><a class="btn" href="${ISSUES_URL}" target="_blank" rel="noopener noreferrer">Report an error or suggest a guide</a></p>
    `;
  }

  function viewDisclaimer() {
    return `
      <h1>Disclaimer and privacy</h1>
      <h2>Information, not advice</h2>
      <p>The content on this site is general information compiled from publicly available sources, mainly official Portuguese government and European Union websites. It is provided for orientation only and does not constitute legal, tax, financial, medical or immigration advice, and no professional relationship is created by using it.</p>
      <p>Rules, deadlines, fees and procedures change, sometimes without notice, and your personal situation may differ from the general case described. Always verify the current requirements on the official page linked in each guide and, where the stakes are high, consult a qualified professional or the responsible public service.</p>
      <h2>No affiliation</h2>
      <p>This site is an independent project. It is not affiliated with, endorsed by or acting on behalf of the Portuguese Government, AIMA, the Autoridade Tributária, Segurança Social, the SNS, IMT, any municipality or the European Union. Names of public services are used only to describe them.</p>
      <h2>No warranty</h2>
      <p>The content is provided “as is”, without warranties of any kind. To the fullest extent permitted by law, the authors accept no liability for loss or damage arising from reliance on it. External links are provided for convenience; the authors are not responsible for the content of external sites.</p>
      <h2>Privacy</h2>
      <p>This site does not use accounts, cookies, trackers or analytics. Your questionnaire answers and progress are stored only in your browser’s local storage, on your device, and are never sent anywhere. Clearing your browser data, or pressing “Start over”, deletes them. Links to third-party sites are subject to those sites’ own privacy policies.</p>
      <h2>Corrections</h2>
      <p>If something is wrong or out of date, please <a href="${ISSUES_URL}" target="_blank" rel="noopener noreferrer">report it</a>. Each guide shows the date it was last checked.</p>
    `;
  }

  function view404() {
    return `<div class="empty"><h1>Page not found</h1><p>That link does not exist (yet).</p><a class="btn" href="#/">Go home</a></div>`;
  }

  /* ---------- router ---------- */
  function route() {
    const path = (location.hash || '#/').slice(1);
    const [p, qs] = path.split('?');
    const parts = p.split('/').filter(Boolean);
    const query = new URLSearchParams(qs || '');
    let html, title = SITE, nav = '';
    const p0 = parts[0], p1 = parts[1];
    if (!p0) { html = viewHome(); }
    else if (p0 === 'start') { html = viewStart(parseInt(query.get('q') || '0', 10) || 0); title = 'Questionnaire · ' + SITE; nav = 'start'; }
    else if (p0 === 'plan') { html = viewPlan(); title = 'My plan · ' + SITE; nav = 'plan'; }
    else if (p0 === 'guides') { html = viewGuides(query.get('cat') || '', query.get('q') || ''); title = 'Guides · ' + SITE; nav = 'guides'; }
    else if (p0 === 'guide' && p1) { const g = guideById(p1); html = viewGuide(p1); title = (g ? g.title : 'Not found') + ' · ' + SITE; nav = 'guides'; }
    else if (p0 === 'resources') { html = viewResources(query.get('q') || ''); title = 'Resources · ' + SITE; nav = 'resources'; }
    else if (p0 === 'glossary') { html = viewGlossary(); title = 'Glossary · ' + SITE; nav = 'glossary'; }
    else if (p0 === 'about') { html = viewAbout(); title = 'About · ' + SITE; }
    else if (p0 === 'disclaimer') { html = viewDisclaimer(); title = 'Disclaimer · ' + SITE; }
    else { html = view404(); title = 'Not found · ' + SITE; }
    $app.innerHTML = html;
    document.title = title;
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === nav));
    window.scrollTo(0, 0);
  }

  /* ---------- events (delegated once) ---------- */
  $app.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const act = el.dataset.action;
    const a = getAnswers();
    if (act === 'answer') {
      a[el.dataset.q] = el.dataset.v;
      // Answers below a changed question may no longer be visible; keep them, they are harmless.
      setAnswers(a);
      advance(parseInt(el.dataset.idx, 10));
    } else if (act === 'toggle') {
      const cur = Array.isArray(a[el.dataset.q]) ? a[el.dataset.q].slice() : [];
      const v = el.dataset.v;
      const i = cur.indexOf(v);
      if (i >= 0) cur.splice(i, 1); else cur.push(v);
      a[el.dataset.q] = cur;
      setAnswers(a);
      el.classList.toggle('selected', i < 0);
      el.setAttribute('aria-checked', String(i < 0));
      el.querySelector('.box').textContent = i < 0 ? '✓' : '';
    } else if (act === 'next') {
      if (!Array.isArray(a[el.dataset.q])) { a[el.dataset.q] = []; setAnswers(a); }
      advance(parseInt(el.dataset.idx, 10));
    } else if (act === 'back') {
      location.hash = '#/start?q=' + Math.max(0, parseInt(el.dataset.idx, 10) - 1);
    } else if (act === 'copy-plan') {
      const text = SPT.planToText(SPT.buildPlan(a), doneSet());
      copyText(text).then(() => toast('Plan copied to clipboard'), () => toast('Could not copy on this browser'));
    } else if (act === 'print') {
      window.print();
    } else if (act === 'reset') {
      const box = document.getElementById('reset-confirm'); if (box) box.hidden = false;
    } else if (act === 'reset-no') {
      const box = document.getElementById('reset-confirm'); if (box) box.hidden = true;
    } else if (act === 'reset-yes') {
      store.del('answers'); store.del('done');
      location.hash = '#/start';
    }
  });

  $app.addEventListener('change', e => {
    const cb = e.target.closest('[data-task]');
    if (!cb) return;
    const done = doneSet();
    if (cb.checked) done.add(cb.dataset.task); else done.delete(cb.dataset.task);
    store.set('done', Array.from(done));
    const card = cb.closest('.task');
    if (card) card.classList.toggle('done', cb.checked);
    // Refresh counters without losing scroll position.
    const y = window.scrollY; route(); window.scrollTo(0, y);
  });

  $app.addEventListener('input', e => {
    const inp = e.target.closest('[data-search]');
    if (!inp) return;
    if (inp.dataset.search === 'guides') {
      const list = filterGuides(inp.dataset.cat || '', inp.value);
      document.getElementById('guide-results').innerHTML = list.length ? list.map(guideCard).join('') : '<p class="empty">Nothing matches. Try another word, or check the glossary.</p>';
    } else if (inp.dataset.search === 'resources') {
      const tmp = document.createElement('div');
      tmp.innerHTML = viewResources(inp.value);
      document.getElementById('resource-results').innerHTML = tmp.querySelector('#resource-results').innerHTML;
    }
  });

  function advance(idx) {
    const a = getAnswers();
    const qs = visibleQuestions(a);
    if (idx + 1 >= qs.length) {
      // Fill any multi question left untouched with an empty list so the plan can be built.
      qs.forEach(q => { if (q.type === 'multi' && !Array.isArray(a[q.id])) a[q.id] = []; });
      setAnswers(a);
      location.hash = '#/plan';
    } else {
      location.hash = '#/start?q=' + (idx + 1);
    }
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((res, rej) => {
      const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(); } catch (e) { rej(e); } finally { ta.remove(); }
    });
  }

  /* Footer feedback: comment box on the embedded preview, issues link elsewhere. */
  const fbLink = document.getElementById('feedback-link');
  if (fbLink) { fbLink.href = ISSUES_URL; fbLink.target = '_blank'; fbLink.rel = 'noopener noreferrer'; }
  if (window.claude && typeof window.claude.use === 'function') {
    window.claude.use('comments').then(comments => {
      const btn = document.getElementById('feedback-btn');
      if (!comments || !btn) return;
      btn.hidden = false;
      btn.addEventListener('click', () => {
        const target = document.querySelector('main h1') || document.getElementById('app');
        Promise.resolve(comments.openComposer({ element: target })).catch(() => toast('Tap the comment icon at the top of the page to leave feedback'));
      });
    }).catch(() => {});
  }

  window.addEventListener('hashchange', route);
  route();
})();
