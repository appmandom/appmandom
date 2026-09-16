/* Resource directory. type: 'official' (Portuguese public body), 'eu' (European Union), 'nonprofit', or 'regulated' (professional order). */
window.SPT = window.SPT || {};

SPT.resources = [
  {
    group: "Start here: the official portals",
    items: [
      { name: "gov.pt (formerly ePortugal)", desc: "The central government services portal: how-to pages for every public service, online requests, appointment booking. Many pages are available in English.", url: "https://www.gov.pt/", type: "official" },
      { name: "gov.pt: Migrants, living and working in Portugal", desc: "The government’s own guide for migrants, covering NIF, NISS, health, work and residence.", url: "https://www2.gov.pt/migrantes-viver-e-trabalhar-em-portugal", type: "official" },
      { name: "Portal das Finanças", desc: "The tax authority’s portal: your NIF profile, address, IRS returns, e-Fatura, IUC, opening a freelance activity.", url: "https://www.portaldasfinancas.gov.pt/", type: "official" },
      { name: "Segurança Social Direta", desc: "Social Security online: contributions, the EHIC, declarations for freelancers, benefits.", url: "https://app.seg-social.pt/sso/login", type: "official" },
      { name: "SNS 24", desc: "Health service portal and app: appointments, prescriptions, vaccination record, your SNS number, the 808 24 24 24 line.", url: "https://www.sns24.gov.pt/", type: "official" },
      { name: "AIMA", desc: "Agência para a Integração, Migrações e Asilo: residence permits, renewals, family reunification, EU permanent residence, Brexit cases.", url: "https://aima.gov.pt/", type: "official" },
      { name: "Autenticação.gov (Chave Móvel Digital)", desc: "Activate and manage the Chave Móvel Digital, and download the id.gov.pt app.", url: "https://www.autenticacao.gov.pt/", type: "official" },
      { name: "IMT", desc: "Instituto da Mobilidade e dos Transportes: driving licences, foreign licence exchange, vehicle matters. IMT Online for requests.", url: "https://www.imt-ip.pt/", type: "official" }
    ]
  },
  {
    group: "Help in person or by phone",
    items: [
      { name: "Linha de Apoio a Migrantes (migrant helpline)", desc: "808 257 257 (landline) or 21 810 61 91 (mobile), Monday to Friday 09:00–19:00. Information in 14 languages and appointment booking for CNAIM centres.", url: "https://www2.gov.pt/pt/servicos/contactar-a-linha-de-apoio-a-migrantes", type: "official" },
      { name: "CNAIM: national migrant support centres", desc: "One-stop centres in Lisbon, Porto, Faro and elsewhere with Finanças, Social Security, AIMA, health and legal desks. Free. Municipal CLAIM centres offer a smaller version.", url: "https://www.gov.pt/servicos/centros-nacionais-de-apoio-a-integracao-de-migrantes-cnaim-", type: "official" },
      { name: "Loja do Cidadão / Espaço Cidadão", desc: "Citizen shops with many services under one roof. Find the nearest one and book an appointment on gov.pt.", url: "https://www.gov.pt/", type: "official" },
      { name: "SNS 24 health line", desc: "808 24 24 24, 24 hours. Medical advice, referrals to the emergency room (which makes the visit free), provisional SNS numbers.", url: "https://www.sns24.gov.pt/", type: "official" },
      { name: "112", desc: "The European emergency number for police, fire and ambulance. Works from any phone, free.", url: "", type: "official" },
      { name: "Your country’s embassy or consulate", desc: "Register your residence abroad with your own country: consular protection, voting from abroad, passport renewals and documents like criminal-record certificates.", url: "", type: "" }
    ]
  },
  {
    group: "Money and tax",
    items: [
      { name: "e-Fatura", desc: "See the invoices issued with your NIF, classify pending ones and check your IRS deductions.", url: "https://faturas.portaldasfinancas.gov.pt/", type: "official" },
      { name: "Portal das Finanças: FAQs and support", desc: "Official answers on NIF, residency status, fiscal representatives and IRS.", url: "https://info.portaldasfinancas.gov.pt/", type: "official" },
      { name: "Banco de Portugal: Cliente Bancário", desc: "The central bank’s consumer site: your rights, basic bank accounts, fee comparisons, complaints against banks.", url: "https://clientebancario.bportugal.pt/", type: "official" },
      { name: "Todos Contam", desc: "Financial-education portal of the Portuguese financial supervisors, including the basic bank account (serviços mínimos bancários).", url: "https://www.todoscontam.pt/", type: "official" },
      { name: "Ordem dos Contabilistas Certificados", desc: "The accountants’ professional order. Use it to check that an accountant is actually certified.", url: "https://www.occ.pt/", type: "regulated" }
    ]
  },
  {
    group: "Residency and visas",
    items: [
      { name: "Portal dos Vistos (MNE)", desc: "The Foreign Ministry’s visa portal: visa types, requirements and where to apply from your country.", url: "https://vistos.mne.gov.pt/", type: "official" },
      { name: "AIMA: EU citizens and family members", desc: "The registration certificate, permanent residence and residence cards for non-EU family members of EU citizens.", url: "https://aima.gov.pt/pt/nacionais-ue-e-familiares/nacionais-ue/certificado-de-registo-para-nacionais-ue", type: "official" },
      { name: "AIMA: Brexit / Withdrawal Agreement", desc: "How UK nationals resident before 2021 regularise, renew and move to permanent residence.", url: "https://aima.gov.pt/pt/viver/brexit/how-do-i-regularise-my-residence-in-portugal-under-the-withdrawal-agreement", type: "official" },
      { name: "gov.pt: CPLP residence permit", desc: "The special residence permit for citizens of Portuguese-speaking countries.", url: "https://www.gov.pt/servicos/obter-autorizacao-de-residencia-cplp", type: "official" },
      { name: "Your Europe (EU)", desc: "EU-wide rights explained: residence, work, healthcare, driving, family, in every EU language.", url: "https://europa.eu/youreurope/citizens/index_en.htm", type: "eu" },
      { name: "SOLVIT (EU)", desc: "Free EU service that helps when a public authority in another EU country misapplies your EU rights.", url: "https://ec.europa.eu/solvit/", type: "eu" }
    ]
  },
  {
    group: "Work and business",
    items: [
      { name: "IEFP", desc: "Public employment service: job-centre registration, job offers, free training, Portuguese courses for migrants.", url: "https://www.iefp.pt/", type: "official" },
      { name: "ACT: labour inspectorate", desc: "Employment rights, contracts, working hours; where to report an employer.", url: "https://www.act.gov.pt/", type: "official" },
      { name: "EURES (EU)", desc: "The European job-mobility network: jobs across the EU and country guides on living and working conditions.", url: "https://eures.europa.eu/", type: "eu" },
      { name: "IAPMEI", desc: "The agency for small and medium businesses: startup support, incentives, certified startups (relevant for the IFICI tax regime).", url: "https://www.iapmei.pt/", type: "official" },
      { name: "gov.pt: exemption from Social Security contributions", desc: "How the first-year exemption and other exemptions for freelancers work.", url: "https://www2.gov.pt/servicos/requerer-a-isencao-do-pagamento-de-contribuicoes-para-a-seguranca-social", type: "official" }
    ]
  },
  {
    group: "Health",
    items: [
      { name: "SNS: the national health service", desc: "News, how the SNS works, finding your health centre and hospital.", url: "https://www.sns.gov.pt/", type: "official" },
      { name: "gov.pt: health care for migrants", desc: "The official guide to accessing the SNS as a migrant, including without a residence permit.", url: "https://www.gov.pt/guias/migrantes-cuidados-de-saude-em-portugal", type: "official" },
      { name: "ERS: health regulator FAQ on user fees", desc: "Who pays taxas moderadoras, who is exempt, and how to complain about a provider.", url: "https://www.ers.pt/pt/utentes/perguntas-frequentes/faq/taxas-moderadoras-do-sns/", type: "official" },
      { name: "European Health Insurance Card (EU)", desc: "What the EHIC covers, country by country, and how to request it in each country.", url: "https://ec.europa.eu/social/main.jsp?catId=559", type: "eu" },
      { name: "Segurança Social: request the EHIC", desc: "The Portuguese EHIC (CESD), free, requested on Segurança Social Direta.", url: "https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca", type: "official" }
    ]
  },
  {
    group: "Home, utilities and consumer rights",
    items: [
      { name: "Portal da Habitação", desc: "Housing programmes and support, including rent support schemes and Porta 65 Jovem for under-35s.", url: "https://www.portaldahabitacao.pt/", type: "official" },
      { name: "ERSE: energy regulator", desc: "Compare electricity and gas offers with the official simulator; know your rights as a consumer.", url: "https://www.erse.pt/", type: "official" },
      { name: "ANACOM: telecoms regulator", desc: "Phone, internet and TV: comparison tools, loyalty-period rules, complaints.", url: "https://www.anacom.pt/", type: "official" },
      { name: "Livro de Reclamações (online complaints book)", desc: "File a formal complaint against any business; they must answer within 15 working days.", url: "https://www.livroreclamacoes.pt/", type: "official" },
      { name: "Direção-Geral do Consumidor", desc: "Consumer rights and dispute-resolution centres.", url: "https://www.consumidor.gov.pt/", type: "official" },
      { name: "DECO PROteste", desc: "Portugal’s consumer association: guides, comparisons and legal support for members. Not a government body.", url: "https://www.deco.proteste.pt/", type: "nonprofit" }
    ]
  },
  {
    group: "Family and education",
    items: [
      { name: "Portal das Matrículas", desc: "Enrol children in pre-school through secondary school, public and private.", url: "https://portaldasmatriculas.edu.gov.pt/", type: "official" },
      { name: "DGES: higher education", desc: "Recognition of foreign degrees, university access, scholarships.", url: "https://www.dges.gov.pt/", type: "official" },
      { name: "DGE: Direção-Geral da Educação", desc: "The school system explained, including support for students who do not yet speak Portuguese (PLNM).", url: "https://www.dge.mec.pt/", type: "official" },
      { name: "Segurança Social: family benefits", desc: "Child benefit (abono de família), parental leave and other family support, applied for on Segurança Social Direta.", url: "https://www.seg-social.pt/", type: "official" }
    ]
  },
  {
    group: "Language and citizenship",
    items: [
      { name: "IEFP: Português Língua de Acolhimento", desc: "Free Portuguese courses for migrants (A1 to B1), run through IEFP centres and schools.", url: "https://www.iefp.pt/", type: "official" },
      { name: "CAPLE: Portuguese language exams", desc: "The University of Coimbra centre that runs the CIPLE (A2) exam accepted for citizenship and residence.", url: "https://caple.uc.pt/", type: "official" },
      { name: "IRN: Instituto dos Registos e do Notariado", desc: "Nationality applications, civil registry, criminal-record certificates.", url: "https://irn.justica.gov.pt/", type: "official" },
      { name: "Recenseamento eleitoral (voter registration)", desc: "Check and manage your voter registration; EU citizens can vote in local and European elections.", url: "https://www.recenseamento.mai.gov.pt/", type: "official" }
    ]
  },
  {
    group: "Driving and vehicles",
    items: [
      { name: "IMT: exchanging a foreign licence", desc: "Rules and country lists for exchanging EU/EEA and non-EU driving licences.", url: "https://www.imt-ip.pt/", type: "official" },
      { name: "gov.pt: ISV exemption when moving to Portugal", desc: "How to bring your own car tax-free when transferring your residence.", url: "https://www.gov.pt/servicos/pedir-a-isencao-do-imposto-sobre-veiculos-quando-se-vem-morar-para-portugal", type: "official" },
      { name: "Finanças customs FAQ: ISV exemption", desc: "Detailed conditions for the residence-transfer exemption.", url: "https://info-aduaneiro.portaldasfinancas.gov.pt/pt/informacao_aduaneira/Veiculos/isencao_res/Pages/faq-isv-isen-res.aspx", type: "official" }
    ]
  }
];
