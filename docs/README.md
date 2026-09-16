# Settle in Portugal

A free, plain-language web app for foreigners moving to Portugal or already living there: what to do, in which order, and where the official page is.

It answers the questions nobody answers in one place: NIF, NISS, SNS user number, Chave Móvel Digital, residency (EU registration, AIMA permits, the UK Withdrawal Agreement), Portal das Finanças and the yearly IRS, Social Security, public healthcare, the European Health Insurance Card, driving licences, renting, utilities, schools, language and the path to citizenship.

## How it works

1. **Questionnaire** (9 questions): where you are in the move, your passport, what you will do, who comes with you, what you already have, driving, language, goals.
2. **Plan**: a phased checklist (before you move, first 30 days, get set up online, every year) built by a small rules engine, with the deadlines that are real and a "things nobody tells you" section (CMD, EHIC, e-Fatura, basic bank account, SNS 24…).
3. **Guides**: 25 guides, each with who it is for, step by step, documents, cost, tips, common mistakes, related guides, **official sources** and a **last-checked date**.
4. **Resources** and a **Glossary** of the acronyms you meet at every counter.

Everything runs in the browser. No build step, no framework, no backend, no cookies, no analytics. Answers and progress are kept in `localStorage` on the user's device only.

## Run it locally

Any static server works:

```bash
cd docs
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly from the file system also works in most browsers.

## Deploy (GitHub Pages)

The site lives in `docs/` on purpose: GitHub Pages can serve it without any build.

1. Merge this branch (or deploy from it).
2. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Choose the branch and the folder **`/docs`**, save.
4. The site appears at `https://<user>.github.io/<repo>/` within a minute or two.

The `.nojekyll` file tells Pages to publish the files as they are.

## Project layout

```
docs/
  index.html               page shell, loads the scripts below
  css/style.css            mobile-first styles, light and dark mode, print styles
  js/app.js                hash router, views, events, localStorage
  js/questionnaire.js      the 9 questions (ids, options, conditional display)
  js/plan.js               rules engine: answers → phased checklist + bonus tips; text export
  js/data/guides.js        guide registry + categories (schema documented at the top)
  js/data/guides-identity.js       NIF, NISS, SNS number, CMD, proof of address, documents/apostilles
  js/data/guides-residency.js      EU registration (CRUE), non-EU visas & AIMA, UK Withdrawal Agreement, citizenship
  js/data/guides-tax-work.js       Portal das Finanças, IRS, freelancing/remote work, employment, Social Security
  js/data/guides-health-daily.js   EHIC, SNS healthcare, bank, driving licence, vehicle, renting, utilities, voting, schools, language
  js/data/resources.js     resource directory (official / EU / non-profit)
  js/data/glossary.js      glossary
```

## Editing content

- A guide is a plain JavaScript object; the schema is documented at the top of `js/data/guides.js`. Text fields accept `**bold**`, `` `code` `` and `[links](https://…)` or `[links](#/guide/id)`.
- Every guide must end with `sources` (official pages) and `lastVerified` (ISO date). Update the date whenever you re-check a guide.
- To add a task to the plan, add a guide (or reuse one) and reference it in `js/plan.js`.
- Sanity check after editing (syntax, broken cross-references, plan builder across all answer combinations):

```bash
cd docs && node -e '
const fs=require("fs"),vm=require("vm");const ctx=vm.createContext({window:{},console});
for(const f of ["js/data/glossary.js","js/data/resources.js","js/data/guides.js","js/data/guides-identity.js","js/data/guides-residency.js","js/data/guides-tax-work.js","js/data/guides-health-daily.js","js/questionnaire.js","js/plan.js"]){vm.runInContext(fs.readFileSync(f,"utf8"),ctx,{filename:f});if(ctx.window.SPT&&!ctx.SPT)ctx.SPT=ctx.window.SPT;}
const S=ctx.window.SPT,ids=new Set(S.guides.map(g=>g.id));let bad=[];
for(const g of S.guides){for(const r of g.related||[])if(!ids.has(r))bad.push(g.id+" -> "+r);for(const m of JSON.stringify(g).matchAll(/#\/guide\/([a-z0-9-]+)/g))if(!ids.has(m[1]))bad.push(g.id+" link "+m[1]);}
console.log(S.guides.length+" guides", bad.length?bad:"OK");'
```

## Content principles (keep these when contributing)

- **Information, not advice.** Describe procedures and cite the official page; do not promise outcomes.
- **Official sources only** for facts: gov.pt, Portal das Finanças, Segurança Social, SNS, AIMA, IMT, regulators, EU portals. Reputable non-official sites may be listed in Resources but must be labelled.
- **Date everything.** Rules changed a lot in 2024–2026 (AIMA, nationality law, NHR → IFICI, minimum wage, IAS). Numbers in the text carry the year they apply to.
- **Plain language.** Portuguese term in italics next to the English, once. Short sentences.

## Roadmap

- Portuguese (and other) translations of guides and UI.
- Deadline reminders (IRS window, e-Fatura, permit renewals, IUC) via calendar export.
- Per-step document checklist.
- Possible premium tier later (deadline calendar, vetted professionals directory, human review). The basics stay free.

## Disclaimer

This project summarises public information and is not legal, tax or immigration advice. It is not affiliated with any government body. Verify on the official pages linked in each guide before acting. See the Disclaimer page in the app.
