/* Healthcare, daily life, family and language guides. */
SPT.addGuides([
  {
    id: "ehic",
    title: "The European Health Insurance Card (the “blue card”)",
    pt: "Cartão Europeu de Seguro de Doença (CESD)",
    category: "health",
    keywords: ["EHIC", "CESD", "blue card", "travel", "healthcare abroad", "EU", "Segurança Social Direta", "S1"],
    summary: "If you are covered by Portuguese Social Security or registered with the SNS, Portugal issues you a free European Health Insurance Card. It gives you necessary public healthcare on the same terms as locals when you travel in the EU, EEA, Switzerland and the UK.",
    who: "Residents covered by Portuguese Social Security or the SNS: employees, freelancers, pensioners and their family members, and SNS users.",
    why: "Many residents, especially those who grew up outside Europe, have no idea it exists. It replaces a chunk of travel insurance for medical care and is accepted at public hospitals across 30 countries.",
    where: "Segurança Social Direta (online), or a Social Security office.",
    cost: "Free.",
    time: "Issued within days and posted to your address, typically within about 7 working days.",
    needs: "A NISS and Segurança Social Direta access (password or Chave Móvel Digital).",
    steps: [
      "Log in to **Segurança Social Direta** and find “Cartão Europeu de Seguro de Doença” (under health or documents).",
      "Request a card for yourself and each family member covered by you. Check the address on file first: the card is posted.",
      "Receive the card. It is valid for **3 years** and renewable the same way.",
      "Carry it whenever you travel in Europe. If you need care, show it at a **public** hospital or doctor; you are treated as a local patient, including any local co-payments.",
      "Forgot it? Social Security can issue a **provisional replacement certificate** by email while you are abroad."
    ],
    documents: ["NISS.", "Segurança Social Direta login."],
    sections: [
      {
        title: "Which country issues yours",
        body: [
          "The EHIC is issued by the country that pays for your healthcare, which is usually where you work. If you are a pensioner registered in Portugal with an **S1** from another country, that country issues your EHIC, not Portugal. Students and posted workers keep the card from their home country."
        ]
      },
      {
        title: "What it does not cover",
        list: [
          "Private clinics and private hospitals.",
          "Planned treatment abroad (that needs prior authorisation, form S2).",
          "Repatriation, lost luggage, cancelled flights: still a job for travel insurance.",
          "Non-EU destinations."
        ]
      },
      {
        title: "Not the EU Blue Card",
        body: [
          "The **EU Blue Card** is a different thing: a residence-and-work permit for highly qualified non-EU workers. The health card is often called “the blue card” because of its colour, which causes confusion."
        ]
      }
    ],
    tips: [
      "Order cards for children too; they are free.",
      "Portuguese-issued EHICs are accepted in the UK under the post-Brexit agreement, and UK-issued GHIC/EHIC cards are accepted in Portugal."
    ],
    pitfalls: [
      "Asking Portugal for an EHIC when your healthcare is actually paid by another country (S1 pensioners): it will be refused, and the right card is at home.",
      "Using it at a private clinic and getting a full bill."
    ],
    related: ["seguranca-social", "sns-healthcare", "niss", "sns-utente"],
    sources: [
      { label: "Segurança Social: request the European Health Insurance Card", url: "https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca" },
      { label: "gov.pt: Requerer o Cartão Europeu de Seguro de Doença", url: "https://www2.gov.pt/pt/servicos/requerer-o-cartao-europeu-de-seguro-de-doenca-da-seguranca-social" },
      { label: "European Commission: European Health Insurance Card", url: "https://ec.europa.eu/social/main.jsp?catId=559" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "sns-healthcare",
    title: "How the public health system works",
    pt: "Serviço Nacional de Saúde, SNS 24, taxas moderadoras",
    category: "health",
    keywords: ["healthcare", "SNS", "SNS 24", "family doctor", "hospital", "emergency", "taxas moderadoras", "user fees", "prescriptions", "pharmacy", "private insurance", "dentist", "vaccination"],
    summary: "The SNS is a tax-funded system: your health centre and family doctor are the front door, hospitals come by referral, and most care is free at the point of use. Calling SNS 24 first is the trick that saves both time and fees.",
    who: "Every resident registered with an SNS number.",
    why: "Knowing the path (health centre, SNS 24, referral) gets you seen faster and avoids the one situation where you still pay: turning up at the emergency room without a referral.",
    where: "Your health centre (centro de saúde / USF), the SNS 24 line (808 24 24 24) and app, public hospitals, pharmacies.",
    cost: "Consultations, tests and prescribed exams in primary care carry no user fee. Hospital care referred through the SNS carries no fee. Emergency visits without referral that do not end in admission carry a taxa moderadora (a modest fee, currently in the tens of euros).",
    time: "Same-day nurse or doctor slots exist for acute problems; routine appointments with a family doctor can take weeks.",
    needs: "An SNS number. See the [SNS number guide](#/guide/sns-utente).",
    steps: [
      "Register at your health centre and ask for a **médico de família**. Until one is assigned you can still book “consultas de recurso” with the centre’s doctors.",
      "Save **808 24 24 24** and install the **SNS 24 app**. Nurses triage you, prescribe for simple problems, renew chronic prescriptions, issue sick-leave certificates for short illnesses and, when needed, **refer you to an emergency room**, which removes the fee. Service is available in English.",
      "Emergencies: call **112**. INEM ambulances take you to the right hospital and the visit is fee-free.",
      "Prescriptions are electronic: you get an SMS code and pick medicines up at any pharmacy with your SNS number. Generics are cheaper; the state co-pays a share depending on the medicine.",
      "Specialists and exams come by **referral** from your family doctor through the SNS network; private specialists can be seen directly at your own cost or through insurance.",
      "Keep an eye on the **Registo de Saúde Eletrónico** in the SNS 24 app: vaccination record, test results, sick-leave certificates and exemptions."
    ],
    documents: ["SNS number.", "ID and, ideally, the SNS 24 app on your phone."],
    sections: [
      {
        title: "Taxas moderadoras in 2026",
        body: [
          "Since 2022 user fees were abolished for primary care and for hospital care referred by the SNS. Only an **unreferred emergency visit that does not lead to admission** is still charged. Exemptions exist for pregnant women, children, people with low income, registered unemployed, and several conditions; low-income exemption is requested on gov.pt or at the health centre."
        ]
      },
      {
        title: "Private care and insurance",
        body: [
          "Private hospitals (CUF, Luz, Lusíadas, Trofa and others) are widely used for faster specialist access. A private health insurance policy (seguro de saúde) costs from a few tens of euros a month and is also required by several visa types until you are in the SNS. Many employers offer one. It complements the SNS; it does not replace registration.",
          "Dental care is mostly private. The SNS offers limited dental cheques (cheque-dentista) for children, pregnant women, the elderly and some patients."
        ]
      }
    ],
    tips: [
      "Ask for the invoice with your NIF at pharmacies, dentists and private clinics: health expenses are IRS deductions.",
      "Pharmacies are excellent first-line advisers, and the “farmácia de serviço” rota keeps one open overnight in each area.",
      "Mental health: SNS 24 runs a psychological counselling line, and your family doctor can refer you."
    ],
    pitfalls: [
      "Going straight to the emergency room for a non-urgent problem: hours of waiting and a fee. Call SNS 24 first.",
      "Not registering because you have insurance: prescriptions, vaccinations and emergencies all run through the SNS."
    ],
    related: ["sns-utente", "ehic", "seguranca-social"],
    sources: [
      { label: "SNS 24", url: "https://www.sns24.gov.pt/" },
      { label: "SNS: Serviço Nacional de Saúde", url: "https://www.sns.gov.pt/" },
      { label: "ERS FAQ: taxas moderadoras", url: "https://www.ers.pt/pt/utentes/perguntas-frequentes/faq/taxas-moderadoras-do-sns/" },
      { label: "gov.pt: exemption from user fees for low income", url: "https://www.gov.pt/servicos/pedir-a-isencao-de-taxas-moderadoras-por-insuficiencia-economica" },
      { label: "gov.pt: health care for migrants", url: "https://www.gov.pt/guias/migrantes-cuidados-de-saude-em-portugal" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "bank-account",
    title: "Opening a bank account",
    pt: "Conta bancária, serviços mínimos bancários, MB Way",
    category: "daily",
    keywords: ["bank", "account", "IBAN", "Multibanco", "MB Way", "basic account", "serviços mínimos", "fees", "IBAN discrimination"],
    summary: "You need a NIF, ID and proof of address. Any bank must offer a basic account capped at about €5 a year, and nobody in Portugal may refuse an IBAN from another SEPA country.",
    who: "Everyone. Salaries, rent, utilities and the MB Way app all run on a Portuguese account.",
    why: "Employers and landlords expect a Portuguese IBAN, direct debits are how bills get paid, and Multibanco references are how you pay the state. Knowing your rights avoids paying €60 a year in fees for nothing.",
    where: "Any bank branch; several banks open accounts online with the Chave Móvel Digital or a video call.",
    cost: "Basic account (serviços mínimos bancários): at most 1% of the IAS per year, €5.37 in 2026. Ordinary accounts charge €4 to €8 a month unless waived.",
    time: "Same day at a branch; a few days online.",
    needs: "NIF, passport or ID, proof of address, and often proof of income or employment.",
    steps: [
      "Get your [NIF](#/guide/nif) first.",
      "Choose a bank. The big retail banks (CGD, Millennium BCP, Santander, BPI, Novo Banco, Crédito Agrícola) have branches everywhere; digital ones (ActivoBank, Bankinter, Moey) are cheaper. Foreign fintech accounts (Wise, Revolut, N26) are legal to use for everything, with a foreign IBAN.",
      "Bring passport or ID, NIF document, proof of address (Portuguese or foreign) and, if asked, an employment contract, payslip or pension proof. Non-residents can open accounts too, with a foreign address.",
      "Ask explicitly for the **conta de serviços mínimos bancários** if you want the capped-fee account, or for the bank’s fee waiver conditions (salary deposit, age, etc.).",
      "Activate home banking and **MB Way**: the app that sends money by phone number, pays in shops and withdraws cash without a card. Almost everyone uses it.",
      "Set up direct debits (débito direto) for rent, utilities and phone. Pay state bills (IUC, fines, tax) with **Multibanco references** at ATMs or in the app."
    ],
    documents: ["Passport or EU ID card.", "NIF.", "Proof of address.", "Proof of income or employment (varies by bank)."],
    sections: [
      {
        title: "The basic account you are entitled to",
        body: [
          "By law, every bank that offers current accounts must offer **serviços mínimos bancários**: a current account, debit card, unlimited domestic withdrawals, direct debits, home banking, and 48 SEPA transfers a year, for a total annual fee of at most 1% of the IAS (€5.37 in 2026). You can open one or **convert an existing account for free**. Banks rarely advertise it; ask by name, and complain to Banco de Portugal if refused."
        ]
      },
      {
        title: "IBAN discrimination",
        body: [
          "Under EU Regulation 260/2012, an employer, landlord, utility or shop cannot refuse a SEPA IBAN because it is not Portuguese. If they do, quote the rule and report it to Banco de Portugal. In practice a Portuguese account is still convenient for MB Way and references."
        ]
      }
    ],
    tips: [
      "Keep the account statement showing your name and address: it doubles as proof of address.",
      "Compare fees on Banco de Portugal’s comparison tool before choosing.",
      "Check that the bank knows your tax residency: as a resident, interest is taxed at 28% at source and reported automatically."
    ],
    pitfalls: [
      "Paying monthly maintenance fees for years when a free or basic account was available.",
      "Opening an account as a non-resident and never updating it once you live here: banks freeze accounts with stale KYC data."
    ],
    related: ["nif", "atestado-residencia", "utilities-telecom"],
    sources: [
      { label: "Banco de Portugal: converting your account to serviços mínimos bancários", url: "https://www.bportugal.pt/page/sabia-que-pode-converter-sua-conta-numa-conta-de-servicos-minimos-bancarios-e-pagar-no-maximo" },
      { label: "Banco de Portugal: Cliente Bancário (rights and complaints)", url: "https://clientebancario.bportugal.pt/" },
      { label: "Todos Contam: serviços mínimos bancários", url: "https://www.todoscontam.pt/pt-pt/servicos-minimos-bancarios" },
      { label: "Your Europe: bank accounts in the EU", url: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-eu/index_en.htm" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "driving-licence",
    title: "Driving licence: register or exchange it with IMT",
    pt: "Registo e troca de carta de condução (IMT)",
    category: "daily",
    keywords: ["driving licence", "IMT", "exchange", "troca de carta", "60 days", "90 days", "EU licence", "UK licence", "medical certificate", "IMT Online"],
    summary: "EU/EEA licences stay valid but must be registered with IMT within 60 days of becoming resident. Non-EU licences must be exchanged within 90 days; after two years an exam is required.",
    who: "Any resident who drives.",
    why: "Driving on an unregistered or expired foreign licence past the deadline means fines, insurance problems and, after two years, having to pass the Portuguese exams from scratch.",
    where: "IMT Online (with Chave Móvel Digital) or an IMT desk, often inside Lojas do Cidadão.",
    cost: "Registering an EU licence is free. Exchange of a non-EU licence carries a fee (a few tens of euros) plus the medical certificate.",
    time: "Registration is immediate. Exchanges take weeks to months; you get a temporary driving document (guia) meanwhile.",
    needs: "Residence document, NIF, your licence, and for exchanges a medical certificate.",
    steps: [
      "Work out your deadline. It starts on the day you become resident (the date of your residence permit or EU registration certificate, or the address registration at Finanças).",
      "**EU/EEA licence:** register it with IMT within **60 days** (free, on IMT Online with the CMD or at a desk). You keep driving on your licence until it expires or you choose to exchange it. Exchange when it expires, if lost, or if IMT requires it for your category.",
      "**Non-EU licence:** request the exchange within **90 days**. During those 90 days you may drive on the foreign licence (with a translation or international permit if it is not in Latin script). After 90 days and up to 2 years you can still request the exchange but may **not** drive until it is done. After 2 years the licence can only be exchanged by passing the exams.",
      "Check IMT’s **country list**: licences from countries with an agreement (including Brazil, the UK and several others) are exchanged without exams; licences from other countries require the practical test, and sometimes the theory test too.",
      "Get the **medical certificate** (atestado médico) for driving: any doctor issues it through the medical portal, and it goes straight to IMT.",
      "Submit on IMT Online or at a desk: licence, residence document, NIF, medical certificate, photo, and for some countries a certificate of authenticity from the issuing authority. Keep the receipt: it serves as your temporary licence."
    ],
    documents: ["Your driving licence (and certificate of authenticity or translation if required).", "Residence document and NIF.", "Medical certificate.", "Passport-style photo (digital, at the desk)."],
    sections: [
      {
        title: "Also",
        list: [
          "Address changes must be communicated to IMT within 60 days (free).",
          "Portugal has a points system: 12 points at the start, lost with offences.",
          "Always carry your licence, ID and the vehicle’s documents; police checks are common."
        ]
      }
    ],
    tips: [
      "Do the EU registration the same week you get your residence certificate: it takes five minutes online and saves the fine.",
      "Ask your home authority for a certificate of authenticity before you leave if your licence is from outside the EU; getting it from Portugal is slow."
    ],
    pitfalls: [
      "Counting the 90 days from your arrival date rather than from your residence permit, or the reverse: use the earlier date to be safe.",
      "Discovering after 2 years that the licence can no longer be exchanged."
    ],
    related: ["vehicle", "cmd", "atestado-residencia"],
    sources: [
      { label: "IMT: Instituto da Mobilidade e dos Transportes", url: "https://www.imt-ip.pt/" },
      { label: "IMT: exchange of EU/EEA driving licences", url: "https://www.imt-ip.pt/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/paises-da-uniao-europeia-e-do-espaco-economico-europeu/" },
      { label: "Your Europe: driving licence recognition and exchange", url: "https://europa.eu/youreurope/citizens/vehicles/driving-licence/driving-licence-recognition-validity/index_en.htm" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "vehicle",
    title: "Bringing or buying a car",
    pt: "ISV, matrícula, IUC, inspeção, seguro",
    category: "daily",
    keywords: ["car", "vehicle", "import", "ISV", "IUC", "road tax", "inspection", "IPO", "insurance", "matrícula", "tolls", "Via Verde"],
    summary: "You can bring your own car tax-free if you owned it for 6 months before moving and apply within 12 months. Whether imported or bought here, budget for yearly road tax (IUC), insurance and inspections.",
    who: "Residents bringing a car from abroad or buying one in Portugal.",
    why: "Portuguese registration tax (ISV) can cost thousands; the residence-transfer exemption saves it but has strict conditions and a deadline. Road tax is never sent by post, so people miss it.",
    where: "Portal das Finanças (ISV exemption, IUC), IMT (registration), registry office (ownership), any insurer, inspection centres.",
    cost: "ISV: exempt if you qualify; otherwise depends on engine and emissions. IUC: yearly, from tens to hundreds of euros. Inspection: around €30 to €40.",
    time: "Importing takes several weeks; buying a used car can be done in a day.",
    steps: [
      "**Bringing your car:** confirm the exemption conditions: you lived abroad for at least 6 months, the car was registered in your name abroad for at least 6 months before you moved, and you apply within **12 months** of transferring residence. One vehicle per person, and you cannot sell or lend it for 12 months after registration.",
      "Submit the customs vehicle declaration (DAV) and the exemption request online on the Portal das Finanças, with proof of residence abroad (for example a consular certificate of cancellation of residence, contracts, bills) and proof of residence in Portugal.",
      "Once cleared, book an inspection for registration (inspeção B), then request the Portuguese plate (matrícula) from IMT and register ownership at a registry office (Conservatória).",
      "**Buying here:** the seller and buyer sign the ownership transfer (registo automóvel), done online or at a registry office; check the car is free of liens and has a valid inspection.",
      "Insure it: third-party liability (responsabilidade civil) is mandatory before it moves.",
      "Pay the **IUC** every year on the Portal das Finanças in the month of the registration anniversary, and do the **periodic inspection** (from the 4th year, then every 2 years, yearly from the 8th)."
    ],
    documents: ["Foreign registration document and proof of ownership date.", "Proof of residence abroad and in Portugal.", "NIF and residence document.", "For purchases: seller’s ID, vehicle document (DUA), inspection certificate."],
    sections: [
      {
        title: "Tolls",
        body: [
          "Many motorways are electronic-only. A **Via Verde** transponder (or the Via Verde app) is the easiest way to pay; foreign-registered cars can use temporary options. Unpaid electronic tolls generate fines quickly."
        ]
      }
    ],
    tips: [
      "Set a calendar reminder for the IUC month; there is no letter.",
      "Used cars are expensive in Portugal; importing a car you already own often pays off even without the exemption."
    ],
    pitfalls: [
      "Missing the 12-month exemption window.",
      "Driving a foreign-plated car for months after becoming resident: it must be regularised, and insurance may refuse claims."
    ],
    related: ["driving-licence", "portal-financas"],
    sources: [
      { label: "gov.pt: ISV exemption when moving to Portugal", url: "https://www.gov.pt/servicos/pedir-a-isencao-do-imposto-sobre-veiculos-quando-se-vem-morar-para-portugal" },
      { label: "Finanças customs FAQ: ISV exemption on transfer of residence", url: "https://info-aduaneiro.portaldasfinancas.gov.pt/pt/informacao_aduaneira/Veiculos/isencao_res/Pages/faq-isv-isen-res.aspx" },
      { label: "IMT", url: "https://www.imt-ip.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "housing-renting",
    title: "Renting a home: contracts, deposits and your rights",
    pt: "Arrendamento, caução, fiador, recibos de renda",
    category: "daily",
    keywords: ["rent", "renting", "lease", "contract", "deposit", "caução", "fiador", "guarantor", "landlord", "tenant rights", "Porta 65", "buying", "IMT", "IMI"],
    summary: "A written contract, a deposit capped at two months, and a landlord who registers the contract with Finanças and issues electronic receipts: those receipts are your proof of address and a tax deduction.",
    who: "Anyone renting (or buying) a home in Portugal.",
    why: "Newcomers are the most exposed to scams, informal contracts and unreturned deposits. Knowing the rules in advance turns you into a tenant landlords take seriously.",
    where: "Listings on the major portals and agencies; disputes go to the Balcão Nacional do Arrendamento or the courts; housing support through Portal da Habitação.",
    cost: "Typically first month plus a deposit of up to two months; agency fees are normally paid by the landlord.",
    time: "Competitive in Lisbon, Porto and the Algarve: be ready with documents.",
    needs: "NIF, ID, proof of income, and often a guarantor or several months in advance.",
    steps: [
      "Prepare a **tenant file**: NIF, passport or residence document, employment contract or income proof, and, if you have one, a Portuguese guarantor (**fiador**). Without a fiador, landlords often ask for extra months upfront; that is legal, the deposit cap is not the same thing.",
      "Never pay before seeing the property or having someone you trust see it. Scams that ask for a transfer to “reserve” are common.",
      "Insist on a **written contract** (contrato de arrendamento) stating rent, duration, renewal terms, what is included, and the deposit. Typical terms are 1 to 5 years with automatic renewal.",
      "The **deposit (caução)** is capped at **two months’ rent** by law and must be returned at the end, minus documented damage.",
      "The landlord must **register the contract with Finanças** by the end of the following month and issue **electronic rent receipts** (recibos de renda eletrónicos). Ask for them every month: they prove your address and give you an IRS deduction for rent on your permanent home.",
      "Set up utilities in your name (or agree the transfer), photograph the property on day one, and keep the inventory."
    ],
    documents: ["NIF and ID.", "Income proof or employment contract.", "Guarantor details, if any.", "The signed contract and receipts (keep everything)."],
    sections: [
      {
        title: "Support schemes",
        list: [
          "**Porta 65 Jovem:** rent subsidy for tenants aged 18 to 35 with a registered contract, applied for on Portal da Habitação in periodic windows.",
          "**Apoio extraordinário à renda:** automatic rent support for lower-income households, based on tax data.",
          "**Municipal programmes:** several cities run affordable-rent schemes with their own lotteries."
        ]
      },
      {
        title: "Buying instead",
        body: [
          "Buying involves a promissory contract (CPCV) with a deposit, a property transfer tax (IMT) and stamp duty at completion, the deed at a notary or through the Casa Pronta service, land registry, and yearly property tax (IMI). Use a lawyer, get an energy certificate and a registry certificate (certidão predial) before signing anything. Mortgages for foreigners are common but require a NIF, a Portuguese account and income proof."
        ]
      }
    ],
    tips: [
      "A registered contract with receipts is what AIMA, banks and schools accept as proof of address.",
      "The landlord pays the condominium, IMI and the agency; you pay utilities unless the contract says otherwise.",
      "Notice periods for leaving are set by law and depend on contract length; read that clause."
    ],
    pitfalls: [
      "Accepting an unregistered contract “to save tax”: no receipts, no deduction, weaker proof of address, and the tax risk is also yours.",
      "Paying a deposit larger than two months without questioning it.",
      "Confusing short-term holiday lets (alojamento local) with a rental: they carry no tenant protections."
    ],
    related: ["atestado-residencia", "utilities-telecom", "irs", "bank-account"],
    sources: [
      { label: "Portal da Habitação", url: "https://www.portaldahabitacao.pt/" },
      { label: "Portal das Finanças (rental contract registration and receipts)", url: "https://www.portaldasfinancas.gov.pt/" },
      { label: "Direção-Geral do Consumidor", url: "https://www.consumidor.gov.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "utilities-telecom",
    title: "Electricity, water, gas, internet and phone",
    pt: "Eletricidade, água, gás, internet, telemóvel, fidelização",
    category: "daily",
    keywords: ["electricity", "water", "gas", "internet", "mobile", "SIM", "fidelização", "loyalty period", "ERSE", "ANACOM", "complaints", "Livro de Reclamações", "social tariff"],
    summary: "Utilities need your NIF and a contract in your name; telecoms lock you in for up to 24 months. The regulators’ comparison tools and the online complaints book are your friends.",
    who: "Anyone setting up a home.",
    why: "Choosing badly costs hundreds a year, and cancelling a locked contract costs the remaining months. The rules also give you free supplier switching and a social tariff if your income is low.",
    where: "Suppliers’ websites and shops; ERSE (energy) and ANACOM (telecoms) for comparisons and complaints; the Câmara or municipal water company for water.",
    cost: "Varies; the contracted electricity power (potência) and the tariff choice make the biggest difference.",
    time: "Electricity and internet activation take a few days to two weeks.",
    steps: [
      "**Electricity:** pick a supplier in the free market (EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy, Plenitude and others) or the regulated tariff. Use ERSE’s official simulator. You need the meter’s CPE code (on any old bill or at the meter), your NIF, IBAN and the property address. Choose the contracted power carefully: it is a large share of the fixed cost.",
      "**Water:** contracted with the municipal company (Câmara, SMAS or a concession) with NIF, ID and proof of tenancy; sometimes in person only.",
      "**Gas:** piped gas is a separate contract (often bundled with electricity); bottled gas (botija) is bought at shops and petrol stations.",
      "**Internet and TV:** MEO, NOS, Vodafone and Digi. Check coverage at your address; fibre is widespread. Contracts carry a **fidelização** (loyalty period) of up to 24 months; leaving early means paying the remaining months. Ask for no-loyalty options.",
      "**Mobile:** prepaid SIMs are cheap and need ID for registration; contract plans also come with loyalty periods.",
      "Set up **direct debits** and paperless billing; check the first two bills carefully."
    ],
    documents: ["NIF.", "ID.", "IBAN.", "Proof of tenancy or ownership.", "For electricity: the CPE code of the meter."],
    sections: [
      {
        title: "Your rights",
        list: [
          "Switching supplier is free and takes a few weeks; the network company (E-Redes) stays the same.",
          "A **social tariff** for electricity and gas is applied automatically to low-income households based on Social Security and tax data.",
          "Every business must have a **Livro de Reclamações**. The online version obliges the company to answer within 15 working days and is monitored by the regulator.",
          "Disputes with telecoms and energy suppliers can go to consumer arbitration centres for free."
        ]
      }
    ],
    tips: [
      "Ask the previous tenant or landlord for the last bills: they have the codes you need.",
      "Bundles (electricity + internet, or internet + mobile) are often cheaper but extend the loyalty period.",
      "Bills carry a Multibanco reference: pay at an ATM or in your banking app."
    ],
    pitfalls: [
      "Signing a 24-month telecom contract for a 12-month rental.",
      "Keeping the contracted power the previous tenant chose for a house full of people when you live alone."
    ],
    related: ["bank-account", "housing-renting", "nif"],
    sources: [
      { label: "ERSE: energy regulator and tariff simulator", url: "https://www.erse.pt/" },
      { label: "ANACOM: telecoms regulator", url: "https://www.anacom.pt/" },
      { label: "Livro de Reclamações (online)", url: "https://www.livroreclamacoes.pt/" },
      { label: "Direção-Geral do Consumidor", url: "https://www.consumidor.gov.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "voting-civic",
    title: "Voting and civic rights for foreign residents",
    pt: "Recenseamento eleitoral, direitos cívicos",
    category: "daily",
    keywords: ["voting", "elections", "recenseamento", "EU citizen", "local elections", "European Parliament", "ombudsman", "Provedor de Justiça", "complaints"],
    summary: "EU citizens can vote and stand in local and European elections once registered; citizens of a few countries with reciprocity agreements can vote locally too. Everyone can use the ombudsman and complaints systems.",
    who: "EU citizens, and citizens of countries with reciprocal voting agreements (including Brazil and Cabo Verde, under conditions).",
    why: "Local councils decide housing, transport and schools. Registering takes ten minutes and is one of the few ways foreigners get a say.",
    where: "The Junta de Freguesia or Câmara Municipal of your address, or the voter registration portal.",
    cost: "Free.",
    time: "Register at least 60 days before an election to be on the roll.",
    steps: [
      "EU citizens: ask the Junta de Freguesia (or Câmara) to be **enrolled in the electoral roll** (recenseamento) with your residence certificate and ID. You choose to vote in Portugal for European Parliament elections (not in both countries).",
      "Citizens of countries with reciprocity (for example Brazilians and Cabo Verdeans with a set period of legal residence): the same enrolment, with your residence permit.",
      "Check your registration status on the recenseamento portal before elections.",
      "On election day, vote at the polling station of your parish with ID."
    ],
    documents: ["Residence document (CRUE, residence permit).", "Passport or ID card."],
    sections: [
      {
        title: "Other civic tools",
        list: [
          "**Provedor de Justiça** (ombudsman): free complaints about any public administration body, including AIMA, Finanças and hospitals.",
          "**Livro de Reclamações**: for businesses and public services alike.",
          "**Participatory budgets**: many municipalities let residents propose and vote on projects, often open to all residents regardless of nationality."
        ]
      }
    ],
    tips: ["Enrolment also means you may be called for jury-like duties in some municipal processes; it is rare."],
    pitfalls: ["Assuming you were registered automatically: foreign residents must ask."],
    related: ["crue", "residence-non-eu", "atestado-residencia"],
    sources: [
      { label: "Recenseamento eleitoral (voter registration portal)", url: "https://www.recenseamento.mai.gov.pt/" },
      { label: "CNE: Comissão Nacional de Eleições", url: "https://www.cne.pt/" },
      { label: "Provedor de Justiça (ombudsman)", url: "https://www.provedor-jus.pt/" },
      { label: "Your Europe: voting rights of EU citizens abroad", url: "https://europa.eu/youreurope/citizens/residence/elections-abroad/index_en.htm" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "schools-children",
    title: "Children: school enrolment, nurseries and child benefit",
    pt: "Matrículas, creche, abono de família, PLNM",
    category: "family",
    keywords: ["school", "children", "enrolment", "matrícula", "Portal das Matrículas", "creche", "nursery", "kindergarten", "child benefit", "abono", "vaccination", "equivalence", "PLNM"],
    summary: "Public school is free and every child of school age has the right to a place, whatever the family’s paperwork. Enrol through the Portal das Matrículas or the local school cluster, bring the vaccination record, and ask about equivalence and Portuguese-language support.",
    who: "Families with children aged 0 to 18.",
    why: "Schooling is compulsory from 6 to 18, places are allocated by address and timing, and there is real support (free meals, language classes, child benefit) that families miss when nobody explains it.",
    where: "Portal das Matrículas online; the head school of your area’s **agrupamento de escolas** in person; Segurança Social Direta for child benefit.",
    cost: "Public schools are free; families pay for some materials and, depending on income, part of meals. Public nurseries are free or income-based; private ones cost several hundred euros a month.",
    time: "Main enrolment window is April to June for September; transfers are accepted any time.",
    needs: "Child’s ID, NIF and SNS number, proof of address, vaccination record, and previous school records.",
    steps: [
      "Find your **agrupamento**: the cluster of public schools serving your address. The Câmara, the Junta or any nearby school will tell you.",
      "Enrol on the **Portal das Matrículas** (with your Chave Móvel Digital) or in person at the head school with: the child’s passport or residence document, NIF, SNS number, your proof of address, the **vaccination record** (boletim de vacinas; the health centre checks it against the Portuguese calendar) and previous school reports.",
      "Ask the school to process **equivalence** of the years studied abroad (equivalência): they handle it for basic and secondary education. Bring apostilled and translated records where possible.",
      "Ask about **PLNM** (Português Língua Não Materna): dedicated Portuguese classes for pupils who do not speak the language yet.",
      "Apply for **school social support** (ASE) if your income is modest: it covers meals, books and transport, and is based on your child-benefit tier.",
      "Apply for **abono de família** (child benefit) on Segurança Social Direta; it is income-tested and paid monthly."
    ],
    documents: ["Child’s passport or residence document, NIF, SNS number.", "Vaccination record.", "Previous school reports or certificates, apostilled and translated if possible.", "Proof of address.", "Parents’ ID and NIF."],
    sections: [
      {
        title: "Under 6",
        body: [
          "**Creches** (0 to 3) are run by private and non-profit (IPSS) providers; the Creche Feliz programme makes places free for many families, and waiting lists are long, so register early. **Pré-escolar** (3 to 5) is free in public kindergartens, with places allocated by priority rules; private options are widely used."
        ]
      },
      {
        title: "Private and international schools",
        body: [
          "International schools (English, French, German curricula) exist in Lisbon, Porto, the Algarve and Madeira, with fees from several thousand to tens of thousands of euros a year. Many families use a public or Portuguese private school with PLNM support instead; younger children usually adapt within a year."
        ]
      }
    ],
    tips: [
      "Enrolment cannot be refused for lack of a residence permit; if it is, ask for the refusal in writing and contact the DGE or the Provedor de Justiça.",
      "Bring the child’s vaccination record from home; missing vaccines are given free at the health centre."
    ],
    pitfalls: [
      "Waiting for “all papers” before enrolling: enrol first, complete later.",
      "Missing the spring window and ending up on waiting lists for the preferred school."
    ],
    related: ["sns-utente", "atestado-residencia", "seguranca-social", "portuguese-language"],
    sources: [
      { label: "Portal das Matrículas", url: "https://portaldasmatriculas.edu.gov.pt/" },
      { label: "DGE: Direção-Geral da Educação", url: "https://www.dge.mec.pt/" },
      { label: "Segurança Social (abono de família)", url: "https://www.seg-social.pt/" },
      { label: "gov.pt (migrants: education)", url: "https://www2.gov.pt/migrantes-viver-e-trabalhar-em-portugal" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "portuguese-language",
    title: "Learning Portuguese, and proving it",
    pt: "Português Língua de Acolhimento (PLA), CIPLE",
    category: "family",
    keywords: ["Portuguese", "language", "course", "PLA", "A2", "B1", "CIPLE", "CAPLE", "exam", "certificate", "citizenship"],
    summary: "Free and low-cost courses exist through IEFP and public schools, leading to A2 and B1 certificates. An A2 certificate is required for citizenship, and everyday admin gets dramatically easier at that level.",
    who: "Every newcomer, and anyone planning to apply for permanent residence or citizenship.",
    why: "Counters, contracts and the SNS run in Portuguese. The A2 certificate is a legal requirement for citizenship, and the 2026 nationality law adds cultural and civic knowledge on top.",
    where: "IEFP centres and partner schools (PLA courses), universities and language schools, CAPLE exam centres for the CIPLE exam.",
    cost: "PLA courses are free; private courses vary. The CIPLE exam costs a fee of around €70 to €80.",
    time: "PLA courses run 150 hours per level; several months of part-time study per level is typical.",
    steps: [
      "Enrol in **Português Língua de Acolhimento (PLA)**: ask at your IEFP job centre, local school cluster or Câmara. Courses run at A1, A2 and B1 and issue a certificate recognised for residence and citizenship purposes.",
      "Alternatively, take the **CIPLE** exam (A2) run by CAPLE at the University of Coimbra and partner centres, including abroad. Register on the CAPLE site for a session near you.",
      "Keep the certificate: IRN asks for it in the nationality process, and AIMA may ask for it for long-term residence.",
      "Children get **PLNM** classes at school; adults can also use municipal courses, libraries and online platforms. Practise at the counter: officials are patient with learners."
    ],
    documents: ["ID and NIF for enrolment.", "For CIPLE: registration and fee."],
    sections: [
      {
        title: "The 2026 nationality law and language",
        body: [
          "Applications from 19 May 2026 require, besides A2 Portuguese, evidence of knowledge of Portuguese culture, history and national symbols, of fundamental rights and duties, and of the political organisation of the State. The detailed tests and exemptions are set by regulation; check IRN before booking an exam that may not be the right one."
        ]
      }
    ],
    tips: [
      "Brazilian Portuguese speakers and citizens of Portuguese-speaking countries are generally exempt from the language proof; confirm with IRN.",
      "PLA course certificates count as language proof, which saves the exam fee."
    ],
    pitfalls: ["Waiting for citizenship time before starting: a level takes months and course places fill up."],
    related: ["citizenship", "schools-children", "work-employment"],
    sources: [
      { label: "IEFP (Português Língua de Acolhimento)", url: "https://www.iefp.pt/" },
      { label: "CAPLE: Portuguese as a foreign language exams", url: "https://caple.uc.pt/" },
      { label: "IRN: nationality", url: "https://irn.justica.gov.pt/" }
    ],
    lastVerified: "2026-09-16"
  }
]);
