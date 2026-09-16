/* Residency & immigration guides: EU registration, non-EU residence, UK Withdrawal Agreement, citizenship. */
SPT.addGuides([
  {
    id: "crue",
    title: "EU citizens: registering your residence (CRUE)",
    pt: "Certificado de Registo de Cidadão da União Europeia",
    category: "residency",
    keywords: ["EU citizen", "EEA", "Swiss", "registration certificate", "câmara municipal", "permanent residence", "family member"],
    summary: "Citizens of the EU, EEA, Switzerland and Andorra do not need a visa, but must register at the Câmara Municipal once they have been in Portugal for 3 months. The certificate is your residence document for the next 5 years.",
    who: "EU, EEA (Iceland, Liechtenstein, Norway), Swiss and Andorran citizens who stay in Portugal for more than 3 months.",
    why: "The certificate is what every service accepts as your residence document: the health centre, the Chave Móvel Digital, banks, IMT, employers. Not registering is an offence with a fine, and the five years towards permanent residence and citizenship are counted from it.",
    where: "The Câmara Municipal (town hall) of the municipality where you live. Check its website for the desk, opening hours and whether you need an appointment.",
    cost: "A small fee, currently around €15. Confirm with your Câmara.",
    time: "Usually issued on the spot.",
    needs: "ID or passport, and a declaration matching your situation (work, means, or study).",
    steps: [
      "Count your 3 months from the date you entered Portugal. You must apply **within 30 days after those 3 months**. Keep a boarding pass or similar in case anyone asks.",
      "Find the right desk at your Câmara Municipal (often called “Registo de Cidadão da União Europeia” or the municipal police desk in some cities) and book if required.",
      "Bring your **ID card or passport** and the declaration that applies: that you work (employed or self-employed) in Portugal; or that you have **sufficient resources** for yourself and your family and **health insurance**; or that you are enrolled in a course, with insurance and means. The declaration is usually a form you sign under honour; some Câmaras ask for a work contract, pay slip or bank proof.",
      "Give your NIF and your Portuguese address (a rental contract or the Junta’s atestado helps).",
      "Receive the certificate (a paper document). It is valid for **5 years**. Photograph it: it is what you show as your residence document.",
      "Next: with the certificate and your NIF, activate the [Chave Móvel Digital](#/guide/cmd) and register at the health centre."
    ],
    documents: [
      "Passport or national ID card.",
      "Declaration of professional activity, or of sufficient means plus health insurance, or of enrolment in studies.",
      "NIF.",
      "Address in Portugal (contract, atestado or utility bill), if asked."
    ],
    sections: [
      {
        title: "After 5 years: permanent residence",
        body: [
          "After 5 years of continuous legal residence you have a **permanent right of residence**. The permanent residence certificate (certificado de residência permanente) is requested from **AIMA**, not the Câmara, and is valid for 10 years. Absences of up to 6 months a year, or one absence of up to 12 months for a serious reason, do not break continuity."
        ]
      },
      {
        title: "Family members who are not EU citizens",
        body: [
          "A non-EU spouse, partner, child or dependent parent of an EU citizen applies to AIMA for a **residence card of a family member of an EU citizen**, based on your registration certificate and proof of the family link (apostilled marriage or birth certificate). They should apply within 3 months of arrival; the card is normally valid for 5 years and lets them work."
        ]
      }
    ],
    tips: [
      "Register even if you are between jobs: “sufficient means” is judged case by case, and a registered address history is what later applications ask for.",
      "Update your address at the Câmara if you move within the municipality, and register again if you move to another municipality: the certificate is tied to the address."
    ],
    pitfalls: [
      "Living here for years on a tourist footing. Without the certificate you cannot prove residence for permanent residence, citizenship or many services, and you risk a fine.",
      "Confusing the Câmara’s certificate with the tax residence at Finanças: they are separate registrations, and you need both."
    ],
    related: ["cmd", "sns-utente", "nif", "citizenship", "voting-civic"],
    sources: [
      { label: "gov.pt: Pedir o certificado de registo para cidadão da UE/EEE/Suíça", url: "https://www2.gov.pt/servicos/pedir-o-certificado-de-registo-para-cidadao-da-ue/eee/suica" },
      { label: "AIMA: Registration certificate for EU nationals", url: "https://aima.gov.pt/pt/nacionais-ue-e-familiares/nacionais-ue/certificado-de-registo-para-nacionais-ue" },
      { label: "gov.pt: certificate for family members of EU citizens", url: "https://www2.gov.pt/servicos/pedir-o-certificado-de-registo-para-cidadao-da-ue/eee/suica-familiar-de-nacional-da-ue/eee/suica" },
      { label: "Your Europe: registering your residence abroad", url: "https://europa.eu/youreurope/citizens/residence/documents-formalities/registering-residence/index_en.htm" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "residence-non-eu",
    title: "Non-EU citizens: visas and residence permits",
    pt: "Vistos de residência e autorização de residência (AIMA)",
    category: "residency",
    keywords: ["visa", "D7", "D8", "digital nomad", "D2", "work visa", "residence permit", "AIMA", "CPLP", "renewal", "family reunification", "manifestação de interesse"],
    summary: "Since 2024 the only reliable route is: get the right residence visa at a Portuguese consulate, enter, and collect your residence permit from AIMA. Renew before it expires, and keep proof of every step.",
    who: "Citizens of countries outside the EU/EEA/Switzerland, including UK nationals who were not resident in Portugal before 2021, and CPLP citizens.",
    why: "Your residence permit is the basis for everything: work, healthcare, the Chave Móvel Digital, and, in time, permanent residence and citizenship. Gaps and expired permits count against you for years.",
    where: "Visa: the Portuguese consulate or visa centre (often VFS Global) for your country of residence. Permit: AIMA (Agência para a Integração, Migrações e Asilo), which replaced SEF in October 2023.",
    cost: "Visa fees around €90, plus the residence permit fee at AIMA. Costs change; check the Portal dos Vistos.",
    time: "Visa decisions typically take weeks to a few months. AIMA appointments and card issuance have had long backlogs; plan for months.",
    needs: "A valid visa purpose (work, business, passive income, remote work, study, family) with proof of income, accommodation, clean record and health insurance.",
    steps: [
      "Pick the visa that matches your situation on the [Portal dos Vistos](https://vistos.mne.gov.pt/). Common ones: **D1** (employment contract in Portugal), **D2** (entrepreneur or independent professional), **D3** (highly qualified), **D4/D5** (study, research), **D7** (retirees and passive income), **D8** (remote workers with foreign employer or clients), and family reunification. The D8 requires roughly 4 times the Portuguese minimum wage in monthly income (about €3,680 in 2026).",
      "Gather the documents: passport, criminal-record certificate with apostille, proof of income or contract, proof of accommodation in Portugal, health insurance, NIF (recommended) and, for some visas, a Portuguese bank account. See [documents to prepare](#/guide/documents-prep).",
      "Apply at the consulate or visa centre. The residence visa is usually valid for 4 months and two entries; the consulate often books your **AIMA appointment** at the same time.",
      "After entering Portugal, attend the AIMA appointment with the same documents plus your address here, NIF and NISS (if you work). You receive the **residence permit** (a card, autorização de residência). The first one is typically valid 2 years, renewals 3 years.",
      "Register everything else with the permit: health centre, Chave Móvel Digital, Social Security, IMT for your driving licence.",
      "**Renew** before expiry through the AIMA portal. Download the proof of pending renewal: it keeps you legal while you wait."
    ],
    documents: [
      "Passport valid at least 3 months beyond the visa.",
      "Criminal-record certificate(s) with apostille and translation.",
      "Proof of means: contract, payslips, pension, bank statements, or business plan.",
      "Proof of accommodation: rental contract, property deed, or invitation letter.",
      "Health insurance covering Portugal (until you are in the SNS).",
      "NIF, and a Portuguese bank account for several visa types."
    ],
    sections: [
      {
        title: "CPLP citizens",
        body: [
          "Citizens of Portuguese-speaking countries (Angola, Brazil, Cabo Verde, Guinea-Bissau, Equatorial Guinea, Mozambique, São Tomé and Príncipe, Timor-Leste) have a special **CPLP residence permit**. Since Law 9/2025 it is issued as a standard card valid 2 years, and it now requires a **consular visa obtained for that purpose** before arrival. The old practice of entering as a tourist and applying afterwards no longer works."
        ]
      },
      {
        title: "What changed recently",
        list: [
          "**Manifestação de interesse** (regularising after arriving without a visa) closed to new applications in June 2024.",
          "**SEF** was replaced by **AIMA** in October 2023; border control moved to the police. Old SEF documents remain valid.",
          "The 2026 nationality law counts residence from the date your first permit was issued, not from the application date, and requires 10 years (7 for CPLP and EU citizens). See the [citizenship guide](#/guide/citizenship).",
          "AIMA issues digital certificates confirming that a renewal or application is pending, which you can use as proof of legal status."
        ]
      },
      {
        title: "Students and researchers",
        body: [
          "Study visas (D4 for courses over a year, D5 for mobility) lead to a residence permit for study, which allows part-time work. Recognition of foreign degrees for university admission goes through [DGES](https://www.dges.gov.pt/)."
        ]
      }
    ],
    tips: [
      "Free, multilingual help exists: the **Linha de Apoio a Migrantes** (808 257 257, or 21 810 61 91 from a mobile) and the **CNAIM** centres in Lisbon, Porto and Faro, where AIMA, Finanças, Social Security and legal desks sit together.",
      "Keep a folder with every visa, permit, receipt and appointment confirmation. Applications years later (permanent residence, citizenship) ask for all of it.",
      "After 5 years of legal residence you can apply for a **permanent residence permit** or **EU long-term resident status**, which removes the renewal cycle."
    ],
    pitfalls: [
      "Paying an “agent” to get you an appointment or to submit an expression of interest that no longer exists. Only AIMA and the consulates issue permits.",
      "Letting a permit expire before starting the renewal. Start early and keep the proof of the pending request.",
      "Not communicating an address change to AIMA and Finanças: notifications are sent to the old address."
    ],
    related: ["documents-prep", "nif", "niss", "cmd", "citizenship"],
    sources: [
      { label: "Portal dos Vistos (Ministry of Foreign Affairs)", url: "https://vistos.mne.gov.pt/" },
      { label: "AIMA (official site)", url: "https://aima.gov.pt/" },
      { label: "gov.pt: CPLP residence permit", url: "https://www.gov.pt/servicos/obter-autorizacao-de-residencia-cplp" },
      { label: "AIMA: rules for granting the CPLP residence permit", url: "https://aima.gov.pt/pt/noticias/kgljg" },
      { label: "gov.pt: Linha de Apoio a Migrantes", url: "https://www2.gov.pt/pt/servicos/contactar-a-linha-de-apoio-a-migrantes" },
      { label: "gov.pt: CNAIM migrant support centres", url: "https://www.gov.pt/servicos/centros-nacionais-de-apoio-a-integracao-de-migrantes-cnaim-" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "uk-withdrawal",
    title: "UK nationals: residence under the Withdrawal Agreement",
    pt: "Acordo de Saída: cidadãos britânicos residentes antes de 2021",
    category: "residency",
    keywords: ["Brexit", "British", "UK", "Withdrawal Agreement", "article 50", "residence card", "permanent residence", "renewal"],
    summary: "UK nationals who were legally living in Portugal before 1 January 2021 keep protected EU-style rights, documented by a biometric residence card. The first cards are now expiring, and AIMA has a dedicated process for renewals and permanent residence.",
    who: "British citizens (and their family members) who were resident in Portugal before 1 January 2021. Anyone who arrived later follows the [non-EU rules](#/guide/residence-non-eu).",
    why: "The Withdrawal Agreement card is your proof of the right to live, work and access healthcare here on the same footing as before Brexit. Letting it lapse creates avoidable problems with employers, banks and travel.",
    where: "AIMA, through its Brexit-specific online form and appointment system.",
    cost: "Card fees apply; check AIMA’s Brexit pages.",
    time: "Appointment waits vary; start months before your card expires.",
    steps: [
      "Check the expiry date of your card. AIMA’s portal lets you verify it with your card number and NIF.",
      "If you have completed **5 years of residence**, use AIMA’s **Brexit form** (launched in January 2026) to request the transition to a **permanent residence card** under the Withdrawal Agreement.",
      "If you are under 5 years, request the renewal of the temporary card through the same channel before expiry.",
      "Bring or upload: passport, current card, proof of continued residence (tax returns, rental contract, employment or pension proof), NIF.",
      "Keep the appointment confirmation and any AIMA certificate of a pending request as proof while you wait."
    ],
    documents: [
      "Passport.",
      "Current Withdrawal Agreement residence card (or old SEF/Câmara document if you never exchanged it).",
      "Proof of residence over the period: IRS returns, contracts, utility bills, Social Security records.",
      "NIF."
    ],
    sections: [
      {
        title: "Never exchanged your old document?",
        body: [
          "If you were resident before 2021 but still hold only the old Câmara registration certificate, you can still regularise under the Withdrawal Agreement through AIMA. Do it now: the old document is increasingly rejected by employers and airlines."
        ]
      },
      {
        title: "Healthcare and travel",
        body: [
          "As a resident registered with the SNS, Portugal issues your [European Health Insurance Card](#/guide/ehic), which is also accepted in the UK. UK state pensioners with an **S1** registered in Portugal get their EHIC from the UK instead.",
          "Your card exempts you from the 90-days-in-180 Schengen limit in Portugal, but not in other Schengen countries."
        ]
      }
    ],
    tips: [
      "Family members who join you later can still qualify under the Withdrawal Agreement if the relationship existed before 2021. Check AIMA’s Brexit FAQ.",
      "Driving: UK licences can be exchanged for Portuguese ones; check the current IMT rules in the [driving licence guide](#/guide/driving-licence)."
    ],
    pitfalls: [
      "Assuming the card renews automatically. It does not.",
      "Long absences: more than 6 months a year (or 12 months for serious reasons) can break the continuity needed for permanent residence."
    ],
    related: ["residence-non-eu", "ehic", "driving-licence", "citizenship"],
    sources: [
      { label: "AIMA: How do I regularise my residence under the Withdrawal Agreement?", url: "https://aima.gov.pt/pt/viver/brexit/how-do-i-regularise-my-residence-in-portugal-under-the-withdrawal-agreement" },
      { label: "AIMA: transition from temporary to permanent residence under the Withdrawal Agreement", url: "https://aima.gov.pt/pt/viver/brexit/how-to-apply-for-the-transition-from-temporary-to-permanent-residence-under-the-withdrawal-agreement" },
      { label: "UK Government: Living in Portugal", url: "https://www.gov.uk/guidance/living-in-portugal" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "citizenship",
    title: "The path to Portuguese citizenship",
    pt: "Nacionalidade portuguesa por naturalização",
    category: "residency",
    keywords: ["citizenship", "nationality", "naturalisation", "passport", "7 years", "10 years", "A2", "CIPLE", "IRN"],
    summary: "Naturalisation after long legal residence, with proof of Portuguese language and, under the 2026 law, of civic and cultural knowledge. The residence requirement is now 7 years for EU and CPLP citizens and 10 years for everyone else.",
    who: "Long-term residents who want a Portuguese (and therefore EU) passport. Portugal allows dual citizenship.",
    why: "Citizenship ends residence permits and renewals, gives full EU free movement and voting rights, and protects your family’s status.",
    where: "IRN (Instituto dos Registos e do Notariado): nationality desks at civil registry offices, some Lojas do Cidadão, and Portuguese consulates. Lawyers can submit online.",
    cost: "A fee of a few hundred euros (currently around €250), plus certificates and translations.",
    time: "Historically 1 to 3 years for a decision. The 2026 law is expected to change processing.",
    needs: "Legal residence for the required years, an A2 Portuguese certificate, a clean criminal record, and the new civic-knowledge requirements once regulated.",
    steps: [
      "Know which rules apply. Applications filed **from 19 May 2026** fall under the new nationality law (signed 3 May 2026); applications filed before that date continue under the previous 5-year rule.",
      "Count your years correctly. Under the new law only periods of **legal residence with a valid permit** count, and the clock starts on the **date your first residence permit was issued** (for EU citizens: your registration certificate), not on the application date. Required: **7 years** for EU and CPLP citizens, **10 years** for others, 4 for stateless persons.",
      "Prove Portuguese at **A2** level: the CIPLE exam from CAPLE (University of Coimbra), a certificate from a PLA course, or Portuguese schooling. See the [language guide](#/guide/portuguese-language).",
      "Prepare for the new integration requirements: knowledge of Portuguese culture, history and symbols, fundamental rights and duties, and the political organisation of the State, plus a declaration of adherence to democratic principles. The government must publish the detailed rules (tests, exemptions) by regulation; check IRN for the current procedure.",
      "Gather: apostilled birth certificate, criminal-record certificates from Portugal and from every country you lived in, residence history, language certificate.",
      "Submit at an IRN desk or through a lawyer, pay the fee, and keep the receipt with your process number."
    ],
    documents: [
      "Birth certificate with apostille and translation.",
      "Criminal-record certificates: Portuguese (requested online with CMD) and from your country of nationality and countries of previous residence, apostilled.",
      "Proof of legal residence for the whole period: residence permits, CRUE certificate, AIMA declarations.",
      "A2 Portuguese certificate.",
      "Passport and residence document."
    ],
    sections: [
      {
        title: "Other routes",
        list: [
          "**Marriage or civil partnership** with a Portuguese citizen: a separate route with its own minimum duration and connection requirements; the 2026 law tightened the conditions. Check IRN.",
          "**Children born in Portugal** to foreign parents: conditions depend on the parents’ length of residence at the time of birth; the 2026 law raised them.",
          "**Descendants** of Portuguese citizens: grandchildren now also need to show language and cultural integration.",
          "The 2026 law was only recently signed and some provisions await regulation. Treat any summary, including this one, as provisional and confirm with IRN or a lawyer."
        ]
      }
    ],
    tips: [
      "Never let a residence permit lapse: a gap can reset the count.",
      "Keep every permit, certificate and renewal receipt in one folder from day one.",
      "Portugal allows dual nationality; check whether your own country does."
    ],
    pitfalls: [
      "Counting time on a tourist or visa-pending footing. Under the 2026 rules it does not count.",
      "Relying on blog posts written before May 2026. The rules changed substantially."
    ],
    related: ["portuguese-language", "residence-non-eu", "crue", "documents-prep"],
    sources: [
      { label: "IRN: Instituto dos Registos e do Notariado (nationality)", url: "https://irn.justica.gov.pt/" },
      { label: "Justiça.gov.pt (nationality services)", url: "https://justica.gov.pt/" },
      { label: "CAPLE: CIPLE exam (A2)", url: "https://caple.uc.pt/" }
    ],
    lastVerified: "2026-09-16"
  }
]);
