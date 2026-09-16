/* Taxes, work and social security guides. */
SPT.addGuides([
  {
    id: "portal-financas",
    title: "Portal das Finanças: password, e-Fatura and notifications",
    pt: "Portal das Finanças, senha de acesso, e-Fatura, notificações eletrónicas",
    category: "tax",
    keywords: ["finanças", "tax portal", "senha", "password", "e-fatura", "receipts", "invoices", "deductions", "electronic notifications", "address"],
    summary: "The tax authority’s website is where you file your IRS, collect deductions from your receipts, pay car tax and manage your address. Get the password early and switch on electronic notifications.",
    who: "Everyone with a NIF.",
    why: "Finanças communicates through the portal and by post to the address on file. Without access you miss assessments, refunds and deadlines, and you lose the deductions that your everyday receipts could give you.",
    where: "portaldasfinancas.gov.pt, or log in with the Chave Móvel Digital.",
    cost: "Free.",
    time: "The posted password takes about 5 working days. With the CMD you are in immediately.",
    needs: "A NIF with a correct address.",
    steps: [
      "On the portal choose “Registar-se”, enter your NIF, phone and email, and request the password. It is posted to your fiscal address. If you already have the [Chave Móvel Digital](#/guide/cmd), skip this and log in with it.",
      "Log in and check your **personal data**: address, residence status (resident or non-resident), household. Fix anything wrong: the address decides where your letters go, and residence status decides how you are taxed.",
      "Switch on **electronic notifications** (Notificações e Citações Eletrónicas). All official letters then land in the portal and you get an email. For non-residents this also removes the obligation to have a fiscal representative.",
      "Open **e-Fatura** and check that receipts with your NIF are appearing. Invoices in unclear categories show as “pending” and must be classified by **25 February** (in 2026 the deadline ran to 2 March) for the previous year’s deductions.",
      "Install the e-Fatura app and the Portal das Finanças app if you like; both work with the CMD.",
      "Use the portal for the rest: IRS in April–June (see the [IRS guide](#/guide/irs)), IUC car tax, certificates, opening a freelance activity, reporting a foreign bank account."
    ],
    documents: ["NIF.", "Access to your postal address for the password letter, or the Chave Móvel Digital."],
    sections: [
      {
        title: "“Com contribuinte”: why to give your NIF at every till",
        body: [
          "Ask for the invoice with your NIF (“fatura com contribuinte”, or just say your NIF when asked). Categories that reduce your IRS include health, education, housing rent, nursing homes, and a share of the VAT on restaurants, hairdressers, car and motorbike repairs, vets, gyms and public transport passes. The amounts are capped, but for a typical household it is worth a few hundred euros a year.",
          "Dependents’ receipts count on your return only if their NIF is used, so register children’s NIFs at the pharmacy and school."
        ]
      },
      {
        title: "Foreign bank accounts",
        body: [
          "Tax residents must report the IBAN of any bank account held abroad in the annual IRS return (Annex J). There is no tax on the account itself; it is a disclosure obligation."
        ]
      }
    ],
    tips: [
      "The portal’s e-balcão lets you ask Finanças questions in writing and keeps the answers on file.",
      "Check “Situação Fiscal” once a year: an unpaid €10 fee can block a certificate you need for a residence renewal.",
      "Most pages are in Portuguese only; browser translation works well."
    ],
    pitfalls: [
      "Requesting the password while your address is still abroad or wrong: the letter never arrives.",
      "Ignoring pending invoices on e-Fatura until March: unclassified ones may not count.",
      "Keeping a fiscal representative you no longer need, and paying for it every year."
    ],
    related: ["irs", "nif", "cmd", "self-employed"],
    sources: [
      { label: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt/" },
      { label: "e-Fatura", url: "https://faturas.portaldasfinancas.gov.pt/" },
      { label: "Portal das Finanças FAQ: fiscal representative and electronic notifications", url: "https://info.portaldasfinancas.gov.pt/pt/destaques/Paginas/FAQs_Representante_Fiscal_do_Nao_Residente_Notif_eletronicas.aspx" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "irs",
    title: "IRS: the yearly income tax return",
    pt: "Imposto sobre o Rendimento das Pessoas Singulares",
    category: "tax",
    keywords: ["income tax", "tax return", "tax residency", "183 days", "IRS jovem", "NHR", "IFICI", "double taxation", "automatic IRS", "refund"],
    summary: "If you live in Portugal you are normally a tax resident and declare your worldwide income once a year, between 1 April and 30 June. Employees with simple income often get an automatic pre-filled return; everyone else needs care, and many need an accountant.",
    who: "Anyone who was a tax resident in Portugal during the year, or a non-resident with Portuguese income (for example rent).",
    why: "The return determines your refund or bill, and it is the document later asked for by AIMA, banks, landlords and the nationality process. Missing it means fines and a non-compliant tax status.",
    where: "Online only, on the Portal das Finanças (with your password or Chave Móvel Digital).",
    cost: "Free to file. An accountant charges from roughly €50 for a simple return to several hundred euros for freelancers.",
    time: "The window is 1 April to 30 June for the previous calendar year. Assessments are issued by 31 July and refunds or payments settled by 31 August for returns filed on time.",
    needs: "Portal das Finanças access, your NIF, income documents and a validated e-Fatura.",
    steps: [
      "Establish your **tax residency**. You are resident for the year if you spent more than 183 days in Portugal in any 12-month period, or if you have a home here that you intend to keep as your habitual residence. Residency can start part-way through a year; make sure Finanças has you as resident from that date.",
      "Before February ends, validate pending invoices on **e-Fatura** and check that health, education and rent expenses are in the right categories.",
      "From 1 April, log in and open the IRS return (Modelo 3). If you qualify for **IRS automático** (mostly employees and pensioners with only Portuguese income), the return is pre-filled: check it and confirm.",
      "Otherwise fill the annexes: A (employment and pensions), B (self-employed), F (rental income), G (capital gains), J (foreign income and foreign bank accounts), H (deductions), E (capital income). Joint filing with a spouse is optional and sometimes better.",
      "Apply any special regime you qualify for: **IRS Jovem** if you are 35 or under, or the **IFICI** regime if you were accepted into it.",
      "Submit before 30 June. Save the receipt (comprovativo). Refunds normally arrive within weeks; payments are due by 31 August."
    ],
    documents: [
      "Annual income statements: employer’s declaration, pension statements, foreign payslips.",
      "Foreign tax paid (for credit under double-taxation treaties).",
      "IBAN of foreign bank accounts (disclosure).",
      "Rent receipts, school and health invoices (they should already be on e-Fatura)."
    ],
    sections: [
      {
        title: "IRS Jovem: 35 or under",
        body: [
          "Since 2025 anyone aged 18 to 35 with employment or freelance income, who is not a dependant on someone else’s return, can use IRS Jovem regardless of education. The exemption runs for up to 10 years: 100% in the first year, 75% in years 2 to 4, 50% in years 5 to 7, 25% in years 8 to 10, on income up to 55 times the IAS (about €29,540 in 2026). You opt in on the return (and can ask your employer to apply it to withholding). Age is checked on 31 December of the tax year."
        ]
      },
      {
        title: "NHR is closed; IFICI is narrow",
        body: [
          "The old non-habitual resident regime (RNH/NHR) closed to new residents on 1 January 2024, with transitional rules for people who had already started moving. Its replacement, **IFICI** (sometimes called “NHR 2.0”), offers a 20% flat rate on Portuguese employment and freelance income and exemptions on most foreign income for 10 years, but only for listed qualified professions, research, certified startups and similar. You must not have been tax resident in Portugal in the previous 5 years, and registration has a deadline in January of the year after you become resident. Assume you do not qualify until an accountant confirms it."
        ]
      },
      {
        title: "Income from abroad",
        body: [
          "As a resident you declare foreign salaries, pensions, dividends, interest and rent in Annex J. Portugal’s **double-taxation treaties** decide which country taxes what, and tax already paid abroad is normally credited. Some public-service pensions are taxed only by the paying country. Remote workers employed abroad often have withholding in the wrong country: sort it out in the first year."
        ]
      }
    ],
    tips: [
      "Filing early in April usually means an earlier refund, but wait a couple of weeks for pre-filled data to settle.",
      "Health expenses without a prescription and gym memberships count for less or nothing; the categories on e-Fatura explain what counts.",
      "A certified accountant (contabilista certificado) is cheap insurance in your first year and essential for freelancers. Check registration on the OCC website."
    ],
    pitfalls: [
      "Staying registered as a non-resident while living here full-time: you may be taxed at flat non-resident rates with no deductions, and it complicates residence renewals.",
      "Forgetting Annex J’s foreign account disclosure.",
      "Assuming income taxed abroad does not need declaring here."
    ],
    related: ["portal-financas", "self-employed", "seguranca-social", "work-employment"],
    sources: [
      { label: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt/" },
      { label: "Portal das Finanças: taxpayer support (IRS)", url: "https://info.portaldasfinancas.gov.pt/" },
      { label: "Ordem dos Contabilistas Certificados (find a certified accountant)", url: "https://www.occ.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "self-employed",
    title: "Freelancing and remote work: opening an activity",
    pt: "Trabalhador independente, recibos verdes, início de atividade",
    category: "work",
    keywords: ["freelancer", "self-employed", "recibos verdes", "abrir atividade", "VAT", "IVA", "remote worker", "digital nomad", "company", "Lda", "empresa na hora", "accountant"],
    summary: "Working for yourself means registering an activity at Finanças, invoicing through the portal, and paying Social Security quarterly after a first year of exemption. Remote employees of foreign companies sit in a grey zone that needs sorting out early.",
    who: "Freelancers, consultants, contractors, remote workers invoicing foreign clients, and anyone thinking about a company.",
    why: "Undeclared work has no protection and creates tax problems; over-engineering (a company on day one) costs money. The sole-trader route is cheap, online and reversible.",
    where: "Portal das Finanças (início de atividade), then Segurança Social Direta.",
    cost: "Opening an activity is free. Budget for an accountant (from about €50 to €150 a month) once you have regular income.",
    time: "The registration is immediate online. Your first invoice can be issued the same day.",
    needs: "NIF as a resident, Portal das Finanças access, NISS, a Portuguese or foreign IBAN.",
    steps: [
      "On the Portal das Finanças open **Início de Atividade**. Choose your activity code (a CIRS code for professionals or a CAE code), your expected annual turnover, and whether you keep **organised accounting** (needs an accountant) or the **simplified regime** (default for most freelancers).",
      "Choose your **VAT (IVA)** position. Below the annual turnover threshold of article 53 (€15,000 in 2025; confirm the current value) you can be VAT-exempt. Above it you charge 23% VAT (mainland) and file quarterly VAT returns. Services to business clients in other EU countries are usually invoiced without VAT under the reverse-charge rule, which requires VAT registration.",
      "Issue invoices as **faturas-recibo** (the “recibos verdes”) on the portal, or through certified invoicing software once you have volume.",
      "Register on **Segurança Social Direta** as a trabalhador independente. First-time freelancers get **12 months without contributions**. After that you file a **quarterly declaration** (January, April, July, October) of the previous quarter’s income and pay **21.4%** on 70% of your services income (a minimum contribution of about €20 a month applies when you declare no income).",
      "Withholding: when you invoice a Portuguese company, it may withhold 25% of your fee as advance income tax, unless you are below the exemption threshold and state it on the invoice.",
      "File the IRS in April–June with Annex B. Under the simplified regime, 75% of services income is taxable (with a mechanism that requires justifying part of your expenses)."
    ],
    documents: ["NIF and Portal das Finanças login.", "NISS.", "IBAN.", "Your activity code (ask an accountant if unsure)."],
    sections: [
      {
        title: "Remote employees of foreign companies",
        body: [
          "If you keep an **employment contract** with a company abroad while living in Portugal, three things need answers: where you pay income tax (Portugal, once resident), where social security is paid, and whether your employer needs to register in Portugal. Inside the EU/EEA, a temporary posting can keep you in the home system with an **A1 certificate** (usually up to 24 months); otherwise the employer should register with Portuguese Social Security or use an employer-of-record. Outside the EU, bilateral agreements or the employer’s willingness decide it.",
          "Many remote workers instead become freelancers here and invoice the former employer. That is clean for tax and Social Security, but changes your employment rights and, for D8 visa holders, must match the visa’s conditions."
        ]
      },
      {
        title: "When to create a company",
        body: [
          "A limited company (**Lda.**, minimum capital €1) makes sense with employees, significant expenses, liability concerns or income high enough that corporate tax plus salary beats personal rates. It requires a certified accountant, monthly obligations and a business bank account. **Empresa na Hora** creates a company in a day at a registry office; **Empresa Online** does it on the web with the CMD. Talk to an accountant before choosing."
        ]
      }
    ],
    tips: [
      "Keep business and personal spending on separate accounts from day one; your accountant will thank you.",
      "The 12-month Social Security exemption is automatic for first-timers but only starts once Finanças tells Social Security about your activity: check Segurança Social Direta after registering.",
      "You can suspend or close an activity online at no cost when work dries up."
    ],
    pitfalls: [
      "Opening an activity “just in case” and forgetting it: after the first year, contributions and declarations are due even with zero income.",
      "Choosing VAT exemption and then invoicing an EU business client: the reverse charge needs a VAT number.",
      "Invoicing a single former employer full-time under freelance rules: Portugal treats this as disguised employment in some cases."
    ],
    related: ["portal-financas", "irs", "seguranca-social", "niss", "work-employment"],
    sources: [
      { label: "Portal das Finanças (início de atividade, faturas-recibo)", url: "https://www.portaldasfinancas.gov.pt/" },
      { label: "gov.pt: exemption from Social Security contributions", url: "https://www2.gov.pt/servicos/requerer-a-isencao-do-pagamento-de-contribuicoes-para-a-seguranca-social" },
      { label: "Segurança Social: self-employed workers", url: "https://www.seg-social.pt/" },
      { label: "IAPMEI: starting a business", url: "https://www.iapmei.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "work-employment",
    title: "Working as an employee: contracts, pay and rights",
    pt: "Contrato de trabalho, recibo de vencimento, direitos laborais",
    category: "work",
    keywords: ["employment", "contract", "minimum wage", "payslip", "holiday", "subsídio", "trial period", "IEFP", "job centre", "unemployment", "ACT"],
    summary: "Portuguese employment comes with a written contract, 14 salary payments a year, 22 days of holiday and a strong labour inspectorate. Check that your employer actually registered you, and know what the payslip says.",
    who: "Anyone employed by a Portuguese company, and job seekers.",
    why: "Your rights (sick pay, unemployment benefit, pension) depend on Social Security contributions your employer must declare. Knowing the basics protects you from the minority of employers who cut corners with foreigners.",
    where: "Your employer, Segurança Social Direta (to check), the ACT labour inspectorate (to complain), the IEFP job centre (to look for work).",
    cost: "None.",
    time: "Registration by the employer must happen before your first day.",
    steps: [
      "Get the **contract in writing**. Fixed-term contracts (a termo certo) must state the reason and end date; permanent ones (sem termo) are the norm after two years or when the reason for a fixed term does not exist. Trial periods are typically 90 days (180 for skilled or trust positions, shorter for short fixed-term contracts).",
      "Give the employer your NIF, NISS, IBAN and address. They must register you with Social Security (comunicação de admissão) and arrange an occupational-health exam.",
      "Read your first **payslip** (recibo de vencimento): gross salary, IRS withholding, 11% Social Security, meal allowance (subsídio de alimentação), and any overtime. In Portugal salaries are paid **14 times** a year: the extra two are the holiday and Christmas subsidies, sometimes paid monthly in twelfths.",
      "After the first month, log in to **Segurança Social Direta** and check that a contribution was declared for you. If not, ask the employer, then ACT.",
      "Know the basics: the minimum wage is **€920 gross per month** in 2026 on the mainland (higher in the Azores and Madeira), the standard week is 40 hours, holiday is 22 working days, and overtime is paid at a premium.",
      "Looking for work: register with the **IEFP** job centre. It gives access to job offers, free training and Portuguese classes, and is required for unemployment benefit (which needs 360 days of contributions in the previous 24 months)."
    ],
    documents: ["NIF, NISS, IBAN.", "Residence document (employers must check your right to work).", "Qualifications, if the job requires a recognised title."],
    sections: [
      {
        title: "Regulated professions",
        body: [
          "Doctors, nurses, engineers, architects, lawyers, teachers, pharmacists and several other professions need their foreign qualification recognised and registration with the Portuguese professional order before they can practise. EU qualifications follow the EU mutual-recognition rules; others go through DGES or the order itself."
        ]
      }
    ],
    tips: [
      "Ask for the collective agreement (CCT/ACT) that covers your sector: it often improves on the legal minimums.",
      "Unemployment benefit is also possible for EU citizens who bring contribution periods from another EU country (U1 form).",
      "Sick leave over 3 days needs a certificate from the SNS (your family doctor or SNS 24), and Social Security pays it from the 4th day."
    ],
    pitfalls: [
      "Working “on trial” without a contract or registration: illegal, and it leaves you with nothing if things go wrong.",
      "Being offered “recibos verdes” for what is really a job: fewer rights and you pay both sides of Social Security.",
      "Not keeping payslips: they are needed for visa renewals, mortgages and benefit claims."
    ],
    related: ["niss", "seguranca-social", "irs", "self-employed"],
    sources: [
      { label: "ACT: Autoridade para as Condições do Trabalho", url: "https://www.act.gov.pt/" },
      { label: "IEFP: employment and training", url: "https://www.iefp.pt/" },
      { label: "EURES: living and working in Portugal", url: "https://eures.europa.eu/" },
      { label: "Segurança Social Direta", url: "https://app.seg-social.pt/sso/login" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "seguranca-social",
    title: "Social Security: what it covers and how to use the portal",
    pt: "Segurança Social e Segurança Social Direta",
    category: "social",
    keywords: ["social security", "benefits", "sick leave", "parental leave", "unemployment", "pension", "child benefit", "abono", "A1", "S1", "U1", "Segurança Social Direta", "IAS"],
    summary: "Segurança Social collects contributions and pays sickness, parental, unemployment, family and pension benefits. Segurança Social Direta is the portal where you see your record, request the EHIC and apply for everything.",
    who: "Everyone who works or receives benefits in Portugal, and families with children.",
    why: "Contributions in Portugal add to contributions made elsewhere in the EU, and the portal is the only way to see whether your employer is actually paying. Many benefits are never claimed by foreigners because nobody told them they exist.",
    where: "Segurança Social Direta online (with password or Chave Móvel Digital), or Social Security offices and Lojas do Cidadão.",
    cost: "Employees pay 11% of gross salary, employers 23.75%. Self-employed pay 21.4% on 70% of income. Access to the portal is free.",
    time: "The portal password arrives by post in about a week; the CMD gives instant access.",
    needs: "A NISS.",
    steps: [
      "Request access to **Segurança Social Direta** (choose “Pedir senha” with your NISS and NIF), or log in with the Chave Móvel Digital.",
      "Check your **career record** (carreira contributiva): every month your employer declared for you, or every quarterly declaration if self-employed.",
      "Update your address, IBAN and household there; benefits are paid to the IBAN on file.",
      "Request the **European Health Insurance Card** from the portal once you are covered (see the [EHIC guide](#/guide/ehic)).",
      "Apply for benefits online when needed: sickness (baixa), parental leave, child benefit (abono de família), unemployment, and later your pension."
    ],
    documents: ["NISS and NIF.", "IBAN.", "For family benefits: children’s NISS and birth certificates."],
    sections: [
      {
        title: "Main benefits, in one breath",
        list: [
          "**Sickness (subsídio de doença):** after 6 months of contributions, paid from the 4th day of a certified sick leave, at a percentage of your salary that rises with duration.",
          "**Parental leave:** 120 or 150 days of initial leave shared between parents, plus a father-only period; paid by Social Security.",
          "**Child benefit (abono de família):** monthly, income-tested, for children up to 16 (longer if studying). Apply on the portal.",
          "**Unemployment:** needs 360 days of contributions in the last 24 months and registration at the IEFP job centre.",
          "**Pension:** contributions here combine with EU periods; each country pays its share.",
          "**Social tariffs:** low-income households get automatic discounts on electricity and other services based on their Social Security data."
        ]
      },
      {
        title: "Moving within the EU: the forms that matter",
        list: [
          "**A1:** proves you stay insured in another EU country while working temporarily in Portugal (posted workers, some remote workers).",
          "**S1:** registers pensioners and some cross-border families with the SNS at the cost of another country.",
          "**U1:** brings unemployment contribution periods from another EU country.",
          "**U2:** lets you keep receiving unemployment benefit from another country for 3 months while job-hunting in Portugal."
        ]
      }
    ],
    tips: [
      "The **IAS** (€537.13 in 2026) is the reference for thresholds and fees: knowing it helps read any benefit rule.",
      "Contributions from countries with a bilateral agreement (for example Brazil, Canada, the US, Australia and many others) can also count towards a Portuguese pension; ask Social Security."
    ],
    pitfalls: [
      "Never checking the portal and discovering years later that an employer under-declared your salary.",
      "Leaving Portugal without exporting or documenting your record: request your career statement before you go."
    ],
    related: ["niss", "ehic", "work-employment", "self-employed"],
    sources: [
      { label: "Segurança Social (official site)", url: "https://www.seg-social.pt/" },
      { label: "Segurança Social Direta (portal)", url: "https://app.seg-social.pt/sso/login" },
      { label: "Your Europe: social security when moving within the EU", url: "https://europa.eu/youreurope/citizens/work/social-security-forms/index_en.htm" }
    ],
    lastVerified: "2026-09-16"
  }
]);
