/* Guide registry. Content lives in guides-*.js (one file per topic area) and registers itself here.
   Guide schema:
   { id, title, pt, category, keywords[], summary, who, why, where, cost, time, needs,
     steps[], documents[], sections[{title, body[], list[]}], tips[], pitfalls[], related[], sources[{label,url}], lastVerified }
   Text fields accept **bold**, `code` and [links](https://...) or [links](#/guide/id). */
window.SPT = window.SPT || {};

SPT.categories = {
  identity: "Identity & registration",
  residency: "Residency & immigration",
  tax: "Taxes",
  social: "Social security",
  work: "Work & business",
  health: "Healthcare",
  daily: "Daily life",
  family: "Family, school & language"
};

SPT.guides = SPT.guides || [];
SPT.addGuides = function (arr) {
  arr.forEach(g => { if (!SPT.guides.some(x => x.id === g.id)) SPT.guides.push(g); });
};
