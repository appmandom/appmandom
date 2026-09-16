/* Rules engine: turns questionnaire answers into an ordered, phased checklist.
   Every task points at a guide (js/data/guides.js), which carries the official sources. */
window.SPT = window.SPT || {};

(function () {
  'use strict';

  function guide(id) { return (SPT.guides || []).find(g => g.id === id); }

  function makeTask(guideId, opts) {
    const g = guide(guideId);
    if (!g) return null;
    return Object.assign({
      id: guideId,
      guide: guideId,
      title: g.title,
      why: g.summary,
      note: '',
      badges: []
    }, opts || {});
  }

  const STAGE_LABEL = { planning: 'Planning the move', arrived: 'Just arrived', settled: 'Living in Portugal', longterm: '5+ years in Portugal' };
  const ACTIVITY_LABEL = { employee: 'Employee', self: 'Self-employed', remote: 'Remote worker', retired: 'Retired / passive income', student: 'Student', seeking: 'Job seeker', other: '' };
  const HAVE_LABEL = { nif: 'NIF', niss: 'NISS', sns: 'SNS number', residence: 'residence document', atestado: 'proof of address', bank: 'bank account', financas: 'Finanças login', ssdireta: 'Segurança Social Direta login', cmd: 'Chave Móvel Digital', driving: 'driving licence sorted', ehic: 'EHIC' };

  SPT.buildPlan = function (a) {
    a = a || {};
    const have = a.have || [];
    const goals = a.goals || [];
    const household = a.household || [];
    const has = v => have.includes(v);
    const goal = v => goals.includes(v);
    const hh = v => household.includes(v);

    const isEU = a.citizenship === 'eu';
    const isUKWA = a.citizenship === 'uk' && a.ukBefore2021 === 'yes';
    const isCPLP = a.citizenship === 'cplp';
    const isThird = !isEU && !isUKWA;
    const planning = a.stage === 'planning';
    const settled = a.stage === 'settled' || a.stage === 'longterm';
    const residenceGuide = isEU ? 'crue' : (isUKWA ? 'uk-withdrawal' : 'residence-non-eu');

    const phases = [];
    const used = new Set();
    function phase(id, title, intro) { const p = { id, title, intro, tasks: [] }; phases.push(p); return p; }
    function add(p, guideId, opts) {
      const t = makeTask(guideId, opts);
      if (!t || used.has(t.id)) return;
      used.add(t.id);
      p.tasks.push(t);
    }

    /* ---------- Profile chips ---------- */
    const profile = [];
    profile.push(STAGE_LABEL[a.stage] || '');
    if (isEU) profile.push('EU / EEA / Swiss citizen');
    else if (isUKWA) profile.push('UK citizen (Withdrawal Agreement)');
    else if (a.citizenship === 'uk') profile.push('UK citizen');
    else if (isCPLP) profile.push('CPLP citizen');
    else if (a.citizenship === 'other') profile.push('Non-EU citizen');
    if (ACTIVITY_LABEL[a.activity]) profile.push(ACTIVITY_LABEL[a.activity]);
    if (hh('partner')) profile.push('With partner');
    if (hh('children')) profile.push('With children');
    if (hh('nonEuFamily')) profile.push('Non-EU family member');
    const already = have.map(v => HAVE_LABEL[v]).filter(Boolean);

    /* ---------- Phase 0: before you move ---------- */
    if (planning) {
      const p0 = phase('before', 'Before you move', 'Things that are much easier to sort out from abroad.');
      let note = '';
      if (isEU) note = 'You do not need a visa. Enter with your ID card or passport; you register with the Câmara Municipal once you have been in Portugal for 3 months.';
      else if (isUKWA) note = 'If you already hold a Withdrawal Agreement residence card, check its expiry date and the rules on absences from Portugal before you travel.';
      else if (isCPLP) note = 'Apply for the right visa at the Portuguese consulate before travelling. Since 2025 the CPLP residence permit requires a consular visa obtained specifically for that purpose.';
      else note = 'Apply for a residence visa (for example D1 work, D2 entrepreneur, D7 passive income, D8 remote work, D4 study) at the Portuguese consulate or visa centre for your country before travelling. Arriving as a tourist and regularising later stopped being an option when the “manifestação de interesse” route closed in 2024.';
      add(p0, residenceGuide, { note, badges: isThird ? ['deadline'] : [] });
      add(p0, 'documents-prep', { note: 'Apostilles and certified translations are far easier to get in your current country than from Portugal.' });
      if (!has('nif')) add(p0, 'nif', { note: 'You can get a NIF before you arrive through a representative (a lawyer, solicitor or trusted person with Portal das Finanças access). Landlords, banks and employers will ask for it.', badges: ['free'] });
      if (!has('bank')) add(p0, 'bank-account', { note: 'Some banks open accounts remotely once you have a NIF; otherwise plan to open one in your first week.' });
      if (goal('home')) add(p0, 'housing-renting', { note: 'Read this before paying a deposit from abroad. Never pay for a place you have not seen or had someone verify.' });
      add(p0, 'sns-healthcare', { note: isEU
        ? 'Bring a European Health Insurance Card from your current country: it covers necessary care in Portugal until you are registered with the SNS.'
        : 'Most visas require private health insurance for the first period. Keep it until you are registered with the SNS.' });
      if (hh('children')) add(p0, 'schools-children', { note: 'Enrolment windows are in spring for the school year starting in September, but a child can be enrolled at any time once you live here.' });
      if (a.driving && a.driving !== 'none' && !has('driving')) add(p0, 'driving-licence', { note: 'Deadlines start counting from the day you become resident, so read this now.' });
      if (goal('car')) add(p0, 'vehicle', { note: 'The tax exemption for bringing your own car only works if you owned it for at least 6 months before moving, and you apply within 12 months.', badges: ['deadline'] });
    }

    /* ---------- Phase 1: the essentials ---------- */
    const p1 = phase('essentials',
      planning ? 'Your first 30 days in Portugal' : (settled ? 'Catch up on the essentials' : 'Do these first'),
      settled ? 'Common gaps for people who have lived here a while. Anything you already have is skipped.' : 'Roughly in order: each one unlocks the next.');

    if (!has('nif')) add(p1, 'nif', { note: 'Everything else needs it: renting, banking, working, healthcare, phone contracts.', badges: ['free'] });
    if (!has('atestado')) add(p1, 'atestado-residencia', { note: 'Ask at the Junta de Freguesia for your address. It proves where you live for the health centre, schools and other services.' });
    if (!has('bank')) add(p1, 'bank-account', { note: 'Needed for salary, rent, utilities and the MB Way app everyone uses.' });

    if (!has('residence')) {
      if (isEU) add(p1, 'crue', { note: 'Apply at your Câmara Municipal within 30 days after your first 3 months in Portugal. Bring your ID and, depending on your case, a declaration about work, sufficient means or study.', badges: ['deadline'] });
      else if (isUKWA) add(p1, 'uk-withdrawal', { note: 'Check the expiry of your card. Renewals and the move to permanent residence go through AIMA’s dedicated Brexit form.', badges: ['deadline'] });
      else add(p1, 'residence-non-eu', { note: 'If you entered with a residence visa, confirm your AIMA appointment to collect the residence permit. Keep proof of every application: it protects your legal status while you wait.', badges: ['deadline'] });
    }
    if (hh('nonEuFamily')) add(p1, isEU ? 'crue' : 'residence-non-eu', {
      id: 'family-residence',
      title: 'Residence card for your non-EU family member',
      why: isEU ? 'Family members of EU citizens get a residence card through AIMA, based on your registration.' : 'Family reunification is a separate application through AIMA.',
      note: isEU ? 'Do your own registration certificate first: their card is issued on the strength of it.' : 'Check the family reunification rules on AIMA’s site; it can be started from Portugal or from the consulate.'
    });

    if (!has('niss')) {
      const nissNotes = {
        employee: 'Your employer must register you with Social Security before you start. If you do not have a NISS yet they can request it for you, or you request it online with your contract.',
        self: 'Request it when you open your activity; you need it for your quarterly declarations.',
        remote: 'If you stay employed by a company in another EU/EEA country, ask them about an A1 certificate. If you will invoice from Portugal as a freelancer, follow the self-employed route.',
        retired: 'You need a NISS for the Portuguese European Health Insurance Card and to register a foreign pension (EU pensioners: ask your home country for an S1 form).',
        student: 'Only needed if you work or want the Portuguese EHIC; otherwise it can wait.',
        seeking: 'Needed to register with the IEFP job centre.',
        other: 'Needed for any work, benefits and the Portuguese European Health Insurance Card.'
      };
      add(p1, 'niss', { note: nissNotes[a.activity] || nissNotes.other, badges: ['free'] });
    }
    if (!has('sns')) add(p1, 'sns-utente', { note: 'Go to the health centre (centro de saúde) of your area with your NIF and residence document, or with the Junta’s proof of address if you do not have a residence document yet.', badges: ['free'] });

    if (a.activity === 'employee') add(p1, 'work-employment', { note: 'Check your contract, your first payslip, and on Segurança Social Direta that your employer actually declared you.' });
    else if (a.activity === 'self') add(p1, 'self-employed', { note: 'Open your activity on the Portal das Finanças (free) and communicate it to Social Security. First-time freelancers get 12 months without contributions.' });
    else if (a.activity === 'remote') add(p1, 'self-employed', { note: 'Read the remote-worker section: whether you need to open an activity depends on your contract and where your employer is.' });
    else if (a.activity === 'seeking') add(p1, 'work-employment', { note: 'Register with the IEFP job centre: it unlocks free courses, Portuguese classes and, once you have contributions, unemployment support.' });

    if (a.driving === 'eu' && !has('driving')) add(p1, 'driving-licence', { note: 'Register your EU licence with IMT within 60 days of becoming resident. Free, and it can be done on IMT Online.', badges: ['deadline', 'free'] });
    if (a.driving === 'noneu' && !has('driving')) add(p1, 'driving-licence', { note: 'Apply to exchange within 90 days of your residence permit. After 90 days you may no longer drive on the foreign licence, and after 2 years you have to sit exams.', badges: ['deadline'] });

    if (hh('children')) add(p1, 'schools-children', { note: 'Children of compulsory school age have the right to a place regardless of paperwork. Contact the local school cluster (agrupamento) and request equivalence for previous school years.' });
    if (a.activity === 'student' || goal('study')) add(p1, 'documents-prep', { id: 'recognition', title: 'Get your degree or diploma recognised', why: 'Recognition of foreign qualifications goes through DGES (higher education) or the school network (secondary).', note: 'Bring apostilled originals and certified translations. Some professions also need registration with a professional order.' });

    /* ---------- Phase 2: get set up online ---------- */
    const p2 = phase('online', 'Next: get set up online', 'Once you have a NIF and an address, these save you hours of queueing.');
    if (!has('financas')) add(p2, 'portal-financas', { note: 'Request your password on the portal; it arrives by post, so your address at Finanças must be your Portuguese address. Then switch on electronic notifications.', badges: ['free'] });
    if (!has('ssdireta')) add(p2, 'seguranca-social', { note: 'Request your Segurança Social Direta password online. It also arrives by post.', badges: ['free'] });
    if (!has('cmd')) add(p2, 'cmd', { note: 'Activate it in person at a Loja do Cidadão with your residence document and NIF, or online with your Portal das Finanças login. It unlocks almost every public service without queueing.', badges: ['free'] });
    add(p2, 'sns-healthcare', { note: 'Ask your health centre to assign you a family doctor (médico de família), install the SNS 24 app and save the number 808 24 24 24.' });
    if (!has('ehic')) add(p2, 'ehic', { note: 'Once you have a NISS and are registered with the SNS, request the Portuguese EHIC on Segurança Social Direta. Free, valid 3 years, covers necessary care when you travel in the EU/EEA, Switzerland and the UK.', badges: ['free'] });
    add(p2, 'utilities-telecom', { note: 'When you sign for electricity, gas, water, phone or internet, watch the loyalty period (fidelização): leaving early costs money.' });
    if (goal('home')) add(p2, 'housing-renting', { note: 'Make sure the landlord registers the contract with Finanças and issues electronic rent receipts. You need them for the IRS rent deduction and as proof of address.' });
    if (goal('car')) add(p2, 'vehicle', { note: 'Bringing your own car: apply for the ISV exemption within 12 months of moving. Buying here: budget for IUC, insurance and the yearly inspection.', badges: ['deadline'] });
    if (goal('business')) add(p2, 'self-employed', { id: 'business', title: 'Start a business', why: 'Freelancing (recibos verdes) and a limited company (Lda.) are very different in cost and paperwork.', note: 'Start with the self-employed guide, then talk to a certified accountant before creating a company. Empresa na Hora lets you create one in a day.' });

    /* ---------- Phase 3: every year and ongoing ---------- */
    const p3 = phase('ongoing', 'Every year, and ongoing', 'The recurring obligations that catch people out.');
    const irsNotes = {
      employee: 'File between 1 April and 30 June each year for the previous year. If you only have Portuguese salary income, the automatic IRS may pre-fill everything for you.',
      self: 'Quarterly Social Security declarations plus the annual IRS by 30 June. A certified accountant (contabilista certificado) is worth it in the first year.',
      remote: 'If you spend 183+ days a year here you are tax resident and declare worldwide income. Check the double-taxation treaty with your employer’s country.',
      retired: 'Foreign pensions are declared in Portugal once you are tax resident. Check the treaty with your country: some pensions are taxed only at source.',
      student: 'You only file if you had income. Keep the deadline in mind for future years: 1 April to 30 June.',
      seeking: 'File between 1 April and 30 June, even for a partial year with little income: refunds are common.',
      other: 'File between 1 April and 30 June each year for the previous year.'
    };
    let irsNote = irsNotes[a.activity] || irsNotes.other;
    if (goal('under35')) irsNote += ' You are 35 or under: check IRS Jovem, which can wipe out most of your tax for up to 10 years.';
    add(p3, 'irs', { note: irsNote, badges: ['deadline'] });
    add(p3, 'portal-financas', { id: 'efatura', title: 'Validate your invoices on e-Fatura by late February', why: 'Invoices with your NIF become tax deductions: health, education, rent, restaurants and more.', note: 'Say “com contribuinte” (with tax number) when you pay. Pending invoices must be classified on e-Fatura, usually by 25 February.', badges: ['deadline'] });
    if (isEU) add(p3, 'crue', { id: 'permanent-residence', title: 'After 5 years: permanent residence certificate', why: 'Five years of legal residence gives you a permanent right of residence in Portugal.', note: 'The permanent residence certificate is requested from AIMA, not the Câmara.' });
    if (isThird) add(p3, 'residence-non-eu', { id: 'renewals', title: 'Renew your residence permit before it expires', why: 'Late renewals create gaps in legal residence that count against you for permanent residence and citizenship.', note: 'Start the renewal well before expiry; the AIMA portal shows your options and lets you download proof of a pending renewal.', badges: ['deadline'] });
    if (goal('car') || a.driving !== 'none') add(p3, 'vehicle', { id: 'iuc', title: 'Pay the yearly IUC and pass the inspection (IPO)', why: 'The road tax (IUC) is due every year in the month of the registration date, and older cars need a periodic inspection.', note: 'IUC is paid on the Portal das Finanças. No reminder is sent by post.', badges: ['deadline'] });
    add(p3, 'atestado-residencia', { id: 'address', title: 'Keep your address updated everywhere', why: 'Finanças, Social Security, SNS, AIMA, IMT and your bank each keep their own address record.', note: 'A wrong address at Finanças means missed letters and fines. When you move, update Finanças first, then the rest.' });
    if (a.portuguese !== 'good') add(p3, 'portuguese-language', { note: 'Free or low-cost courses (Português Língua de Acolhimento) run through IEFP and schools. An A2 certificate is required for citizenship.' });
    if (goal('citizenship')) add(p3, 'citizenship', { note: 'Since May 2026 the residence requirement is 7 years for EU and CPLP citizens and 10 years for everyone else, counted from the date your residence permit was issued. Keep every permit and renewal safely.' });
    if (isEU) add(p3, 'voting-civic', { note: 'EU citizens can vote in local and European elections here once registered. Registration is at your Câmara Municipal or Junta.' });

    /* ---------- Bonus: things nobody tells you ---------- */
    const bonus = [];
    function b(guideId, title, why, id) { const g = guide(guideId); if (!g) return; bonus.push({ id: id || guideId, guide: guideId, title, why }); }
    if (!has('cmd')) b('cmd', 'Chave Móvel Digital exists, and it changes everything', 'One login (phone + PIN) for Finanças, Social Security, SNS, AIMA, IMT, the courts and more. Most residents find out years too late.');
    if (!has('ehic')) b('ehic', 'The “blue card”: a free EU health card from Portugal', 'If you are registered here, Portugal issues you a European Health Insurance Card for travel across the EU, EEA, Switzerland and the UK. Free, 3 years, requested online.');
    b('sns-healthcare', 'Call SNS 24 before going to the emergency room', 'Visits referred by SNS 24 (808 24 24 24), your health centre or INEM carry no fee. Walking in without a referral and without admission is the one case where you still pay.', 'bonus-sns24');
    b('bank-account', 'Every bank must offer a basic account for at most €5.37 a year', 'The “serviços mínimos bancários” account includes a debit card, transfers and online banking. Banks rarely advertise it.', 'bonus-smb');
    b('bank-account', 'Nobody can refuse your foreign SEPA IBAN', 'Employers, landlords and utilities must accept an IBAN from any SEPA country. Refusing is illegal (IBAN discrimination), though a Portuguese account still makes life easier.', 'bonus-iban');
    b('portal-financas', 'Say “com contribuinte” every time you pay', 'Your NIF on the receipt turns everyday spending into IRS deductions. Restaurants, hairdressers, vets, mechanics and pharmacies count.', 'bonus-nif');
    if (goal('under35')) b('irs', 'IRS Jovem: up to 10 years of reduced tax', 'If you are 35 or under, a large part of your employment or freelance income is exempt for up to 10 years, with no degree required.', 'bonus-jovem');
    if (isThird || planning) b('portal-financas', 'You may not need to pay for a fiscal representative', 'Non-residents who switch on electronic notifications on the Portal das Finanças are exempt from appointing one (unless they run a business here).', 'bonus-fiscal-rep');
    b('residence-non-eu', 'Free multilingual help: CNAIM centres and the migrant helpline', 'The Linha de Apoio a Migrantes (808 257 257) answers in 14 languages, and CNAIM/CLAIM centres bring Finanças, Social Security, AIMA and more under one roof.', 'bonus-cnaim');
    b('utilities-telecom', 'The complaints book is a real weapon', 'Every business must have a Livro de Reclamações, and the online version (livroreclamacoes.pt) obliges the company to answer within 15 working days.', 'bonus-livro');
    b('documents-prep', 'Get apostilles before you need them', 'Birth and marriage certificates, degrees and criminal-record certificates from abroad usually need a Hague apostille plus a certified translation. Doing it from Portugal is slow and expensive.', 'bonus-apostille');
    b('cmd', 'Your documents live in an app', 'The id.gov.pt app (from the same team as the CMD) carries digital versions of your Portuguese documents, and the Portal das Finanças and SNS 24 apps cover most everyday tasks.', 'bonus-app');

    return { profile: profile.filter(Boolean), already, phases: phases.filter(p => p.tasks.length), bonus };
  };

  /* Plain-text export of a plan (for copy/paste or notes apps). */
  SPT.planToText = function (plan, doneSet) {
    const base = location.href.split('#')[0];
    const lines = ['Settle in Portugal: my plan', 'Profile: ' + plan.profile.join(' · '), ''];
    plan.phases.forEach(p => {
      lines.push('== ' + p.title + ' ==');
      p.tasks.forEach(t => {
        lines.push((doneSet.has(t.id) ? '[x] ' : '[ ] ') + t.title);
        if (t.note) lines.push('    ' + t.note);
        lines.push('    ' + base + '#/guide/' + t.guide);
      });
      lines.push('');
    });
    lines.push('== Things nobody tells you ==');
    plan.bonus.forEach(t => { lines.push('- ' + t.title + ': ' + t.why); lines.push('  ' + base + '#/guide/' + t.guide); });
    lines.push('', 'Information only, not legal advice. Check the official sources linked in each guide.');
    return lines.join('\n');
  };
})();
