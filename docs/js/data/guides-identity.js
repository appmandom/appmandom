/* Identity & registration guides: NIF, NISS, SNS number, Chave Móvel Digital, proof of address, documents to prepare. */
SPT.addGuides([
  {
    id: "nif",
    title: "NIF: your tax number",
    pt: "Número de Identificação Fiscal (número de contribuinte)",
    category: "identity",
    keywords: ["tax number", "contribuinte", "finanças", "fiscal representative", "representante fiscal"],
    summary: "The nine-digit tax number you need for almost everything: renting, opening a bank account, signing a work contract, buying a SIM card, registering for healthcare.",
    who: "Everyone who lives in Portugal, and anyone abroad who needs to rent, buy, invest or open a bank account here.",
    why: "Nothing official works without it. Landlords, banks, employers and the health centre will all ask for it first, and it is the key to your Portal das Finanças account and to Chave Móvel Digital.",
    where: "Any tax office (Serviço de Finanças) or Loja do Cidadão, in person. From abroad, through a representative using the Portal das Finanças e-balcão.",
    cost: "Free.",
    time: "Issued on the spot in person, usually within the hour. A few days through a representative.",
    needs: "Your passport or EU ID card and a proof of address.",
    steps: [
      "Decide how you will register. If you already live in Portugal, register with your **Portuguese address**: this makes you a tax resident, which is what the law expects once you live here. If you are still abroad, you register as a non-resident with your foreign address and update it when you move.",
      "Go to a Serviço de Finanças or a Loja do Cidadão. Take a ticket for “NIF / registo de contribuinte”. Some offices let you book on [gov.pt](https://www.gov.pt/) to skip the queue.",
      "Show your passport (or EU ID card) and proof of address: a rental contract, a utility bill, a bank statement, or the Junta de Freguesia’s [proof of address](#/guide/atestado-residencia). For a foreign address, a document from your country showing it is enough.",
      "You receive a printed document with your NIF immediately. There is no card any more: keep the paper, and photograph it.",
      "Before you leave, ask for the **Portal das Finanças password** (senha de acesso). It is posted to the address on file, so this only works once your address is correct. See the [Portal das Finanças guide](#/guide/portal-financas).",
      "If you registered as a non-resident and later move here, go back (or use the portal) and change your status and address to resident. This matters for tax and for every letter Finanças sends you."
    ],
    documents: [
      "Passport, or an EU/EEA national ID card.",
      "Proof of address (Portuguese or foreign): rental contract, utility bill, bank statement, atestado de residência.",
      "If applying through a representative: a power of attorney with a certified signature (not needed when the representative is a lawyer or solicitor), plus copies of your passport and address proof."
    ],
    sections: [
      {
        title: "Fiscal representative: do you need one?",
        body: [
          "Residents of Portugal and residents of other EU/EEA countries never need a fiscal representative.",
          "Non-residents from outside the EU/EEA traditionally had to appoint one, which is why lawyers and online services charge for “NIF packages”. Since Decree-Law 44/2022 you are exempt from appointing a representative if you sign up to **electronic notifications** on the Portal das Finanças (or the ViaCTT electronic mailbox). The exception is running a business here, which still requires a VAT representative.",
          "Practical reality: many tax offices still ask third-country non-residents for a representative at the moment of issuing the NIF. Getting the NIF through a representative and then switching on electronic notifications, and removing the representative, is a common path."
        ]
      },
      {
        title: "Getting a NIF from abroad",
        body: [
          "Since 2023 a representative with Portal das Finanças access can request a NIF for a foreign citizen through the portal’s e-balcão, uploading your passport, proof of foreign address and the power of attorney. This is how lawyers, solicitors and online services do it; you can also ask a trusted friend who has portal access."
        ]
      }
    ],
    tips: [
      "Give your NIF whenever you pay for anything (“com contribuinte”): those receipts become tax deductions. See the [Portal das Finanças guide](#/guide/portal-financas).",
      "Children and dependants need their own NIF for school, healthcare and your tax return. Parents can request it with the child’s birth certificate or passport.",
      "The NIF is permanent. Losing the paper is not a problem: your NIF shows in the Portal das Finanças and on any Finanças document."
    ],
    pitfalls: [
      "Registering with a foreign address and forgetting to update it. Letters, tax assessments and fines go to the old address, and you stay a non-resident for tax purposes.",
      "Paying a “representative” who then disappears: the representative receives your tax mail. Remove them on the portal once you no longer need them.",
      "Using an accommodation address you will leave in a month. Update it as soon as you move: Finanças first, everything else after."
    ],
    related: ["portal-financas", "atestado-residencia", "bank-account", "cmd"],
    sources: [
      { label: "gov.pt: Pedir o Número de Identificação Fiscal (NIF)", url: "https://www2.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-para-pessoa-singular" },
      { label: "gov.pt: How to request the NIF and NISS for foreign citizens", url: "https://www2.gov.pt/migrantes-viver-e-trabalhar-em-portugal/migrantes-impostos-e-seguranca-social-em-portugal/como-pedir-o-nif-e-o-niss-para-cidadaos-estrangeiros-em-portugal" },
      { label: "Portal das Finanças FAQ: obtaining and changing a NIF", url: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00299.aspx" },
      { label: "Portal das Finanças FAQ: fiscal representative and electronic notifications", url: "https://info.portaldasfinancas.gov.pt/pt/destaques/Paginas/FAQs_Representante_Fiscal_do_Nao_Residente_Notif_eletronicas.aspx" },
      { label: "gov.pt: non-residents exempt from appointing a fiscal representative", url: "https://www2.gov.pt/pt-PT/noticias/nao-residentes-dispensados-de-nomear-representante-fiscal-em-portugal" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "niss",
    title: "NISS: your social security number",
    pt: "Número de Identificação de Segurança Social",
    category: "social",
    keywords: ["social security", "segurança social", "NISS na hora", "employer registration"],
    summary: "The number that connects you to Segurança Social: needed to work legally, to receive any benefit and to get the Portuguese European Health Insurance Card.",
    who: "Anyone who will work (employed or freelance), receive a pension or benefit in Portugal, or wants the Portuguese EHIC.",
    why: "Without a NISS your employer cannot declare you, your contributions do not count towards sickness, unemployment and pension rights, and Segurança Social Direta stays closed to you.",
    where: "Online, through the NISS request form for foreign citizens on seg-social.pt, or in person at a Social Security office (Loja da Segurança Social) or Loja do Cidadão. Employers can request it for a new hire.",
    cost: "Free.",
    time: "Online requests are often answered within days (“NISS na Hora”). In person it can be immediate.",
    needs: "A NIF and an ID document. Usually also proof of why you need it (work contract, freelance activity, residence).",
    steps: [
      "If you are starting a job, ask your employer first. Employers can request the NISS for a new worker and must register you with Social Security before your first day. You only need to give them your ID, NIF and address.",
      "Otherwise open the online request on the Segurança Social website (section “Sou Cidadão”, request for NISS by foreign citizens) and fill in the form.",
      "Upload your ID (passport or residence document), your NIF document and the proof of your situation: signed work contract, proof that you opened a freelance activity at Finanças, or, for other cases, your residence document.",
      "You receive the NISS by email or post. Keep the document: the NISS also appears on the Segurança Social Direta portal once you have access.",
      "Request your **Segurança Social Direta** password straight away (see the [Social Security guide](#/guide/seguranca-social)). It arrives by post."
    ],
    documents: [
      "Passport or residence document (residence permit, CRUE, Withdrawal Agreement card).",
      "NIF document.",
      "Proof of your situation: employment contract, declaration of start of activity from Finanças, or residence document for non-working cases.",
      "Address in Portugal."
    ],
    tips: [
      "EU citizens who worked in another EU country: your contribution periods there count towards Portuguese benefits (EU coordination rules). Bring or request a U1 form from your previous country if you might need unemployment benefit.",
      "If you are posted to Portugal by an employer in another EU/EEA country, you may stay in your home social security system with an **A1 certificate** and not need to contribute here. Ask your employer before requesting a NISS."
    ],
    pitfalls: [
      "Starting work before the employer has registered you. If they “forget”, you are the one without rights. Check Segurança Social Direta after your first month.",
      "Confusing the NISS with the NIF and the SNS number: three different numbers from three different bodies."
    ],
    related: ["seguranca-social", "ehic", "work-employment", "self-employed"],
    sources: [
      { label: "gov.pt: Pedir o Número de Identificação da Segurança Social (NISS)", url: "https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss-" },
      { label: "gov.pt: How to request the NIF and NISS for foreign citizens", url: "https://www2.gov.pt/migrantes-viver-e-trabalhar-em-portugal/migrantes-impostos-e-seguranca-social-em-portugal/como-pedir-o-nif-e-o-niss-para-cidadaos-estrangeiros-em-portugal" },
      { label: "Segurança Social (official site)", url: "https://www.seg-social.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "sns-utente",
    title: "SNS user number: registering for public healthcare",
    pt: "Número de utente do Serviço Nacional de Saúde",
    category: "health",
    keywords: ["health centre", "centro de saúde", "utente", "family doctor", "RNU"],
    summary: "Your number in the national health service. Issued at your local health centre; it gets you a family doctor, prescriptions, referrals and the SNS 24 app.",
    who: "Everyone living in Portugal. Foreign residents get it at the health centre; a provisional number exists for people here less than 90 days.",
    why: "It is your identity across every public hospital and health centre, and the SNS is where most residents get their care. Without it you pay private rates for everything.",
    where: "The health centre (centro de saúde, USF or UCSP) that covers your address. Ask the Junta de Freguesia or SNS 24 which one it is.",
    cost: "Free.",
    time: "Usually issued on the spot. Assignment of a family doctor can take longer, depending on the area.",
    needs: "A NIF and a residence document or proof of address.",
    steps: [
      "Find your health centre: the one serving your street. SNS 24 (808 24 24 24) or the Junta de Freguesia will tell you.",
      "Go in person with your **NIF** and either your **residence document** (residence permit, residence visa, CRUE or Withdrawal Agreement card) or, if you do not have one yet, the Junta de Freguesia’s **atestado de residência** stating you have lived in Portugal for more than 90 days.",
      "Ask for the número de utente and, in the same visit, to be assigned a **médico de família** (family doctor). If none is available you go on a waiting list and can still be seen by the centre’s doctors.",
      "Add your NISS if you have one: it links your health record to Social Security, which matters for sick leave and the European Health Insurance Card.",
      "Install the **SNS 24 app** and log in with Chave Móvel Digital (or the SNS 24 registration) to see appointments, prescriptions and your vaccination record."
    ],
    documents: [
      "NIF.",
      "Residence document, residence visa, or atestado de residência proving more than 90 days in Portugal.",
      "Passport or ID card.",
      "Optional but useful: NISS, and your vaccination record from home."
    ],
    sections: [
      {
        title: "Here less than 90 days, or still without papers?",
        body: [
          "Call SNS 24 on 808 24 24 24 and ask about a **provisional user number**. Emergency and urgent care is never refused, and the official migrant health guide confirms that people without a residence permit can register with the Junta’s proof of 90 days of residence.",
          "Having a number does not by itself mean the SNS pays for everything: coverage follows your residence status. For most registered residents, care in the SNS is free apart from the limited user fees described in the [healthcare guide](#/guide/sns-healthcare)."
        ]
      }
    ],
    tips: [
      "Children need their own number. Register them at the same visit with their passport, NIF and vaccination record.",
      "EU pensioners and some cross-border workers register with an **S1 form** from their home country, which makes that country pay for their SNS care. Ask your home institution before you leave."
    ],
    pitfalls: [
      "Going to a health centre that does not cover your address: they will send you to the right one.",
      "Assuming private insurance replaces registration. Even with insurance, register: emergencies and prescriptions run through the SNS."
    ],
    related: ["sns-healthcare", "atestado-residencia", "ehic", "nif"],
    sources: [
      { label: "gov.pt: Pedir o número de utente do SNS", url: "https://www2.gov.pt/pt/servicos/pedir-o-numero-de-utente-do-sns" },
      { label: "gov.pt: Migrants, health care in Portugal", url: "https://www.gov.pt/guias/migrantes-cuidados-de-saude-em-portugal" },
      { label: "SNS 24", url: "https://www.sns24.gov.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "cmd",
    title: "Chave Móvel Digital: one login for everything",
    pt: "Chave Móvel Digital (CMD)",
    category: "identity",
    keywords: ["digital key", "autenticação.gov", "login", "id.gov.pt", "digital signature", "government app"],
    summary: "A free government login tied to your phone number and a PIN. It opens the Portal das Finanças, Segurança Social Direta, SNS 24, the AIMA portal, IMT Online and dozens of other services, and lets you sign documents digitally.",
    who: "Any resident with a NIF and a residence document (residence permit, CRUE or Withdrawal Agreement card), or a passport for some services.",
    why: "Most people find out about it years late. With the CMD you request certificates, change your address, check your tax status, book appointments and sign contracts from your phone instead of queueing at a counter, and you never wait for a posted password again.",
    where: "Online at autenticacao.gov.pt using your Portal das Finanças login, or in person at a Loja do Cidadão, Espaço Cidadão, some Câmaras Municipais and Portuguese consulates.",
    cost: "Free.",
    time: "About ten minutes online; on the spot in person.",
    needs: "NIF, a mobile phone number, an email address, and your residence document (or passport).",
    steps: [
      "Check what you have. Foreign citizens can associate the CMD with a **residence permit** (non-EU), a **residence certificate or card** (EU citizens and their family) or a **passport**. A NIF is required for the residence-based versions.",
      "**Online route:** on [autenticacao.gov.pt](https://www.autenticacao.gov.pt/cmd-pedido-chave) choose to activate with your Portal das Finanças credentials. Log in with your NIF and password, enter your mobile number and email, confirm the codes you receive, and choose a PIN of 4 to 8 digits.",
      "**In-person route:** go to a Loja do Cidadão or Espaço Cidadão with your residence document (or passport) and NIF. The clerk activates it, and you set the PIN there. Booking online on gov.pt avoids the queue.",
      "Install the **Autenticação.gov** app (optional but convenient): it replaces SMS codes with a push notification, and lets you sign PDFs.",
      "Test it: log in to Segurança Social Direta or SNS 24 using “Chave Móvel Digital”. From now on, choose that option everywhere instead of separate passwords.",
      "Install **id.gov.pt** to carry digital versions of your Portuguese documents on your phone."
    ],
    documents: [
      "Residence permit, EU residence certificate/card, or passport.",
      "NIF.",
      "Your phone (any mobile number works, Portuguese or foreign) and access to your email."
    ],
    sections: [
      {
        title: "What it unlocks",
        body: ["A non-exhaustive list of services that accept the CMD:"],
        list: [
          "Portal das Finanças: tax return, e-Fatura, address change, certificates, IUC payment.",
          "Segurança Social Direta: contributions, the European Health Insurance Card, benefits, freelancer declarations.",
          "SNS 24: appointments, prescriptions, vaccination record, sick-leave certificates.",
          "AIMA portal: residence permit renewals and status.",
          "IMT Online: driving licence registration and exchange, address change.",
          "gov.pt: certificates (criminal record, civil registry), appointment booking, the digital signature of documents.",
          "Many banks and utilities accept it for identity checks."
        ]
      }
    ],
    tips: [
      "The CMD’s validity follows the document it is linked to. When your residence permit is renewed, re-activate or update the CMD.",
      "Lost your phone? You can change the number online with the old PIN or in person.",
      "The digital signature made with the CMD has the same legal value as a handwritten one in Portugal, and is accepted for most contracts and public forms."
    ],
    pitfalls: [
      "Trying to activate with a card reader: that option is for the Portuguese citizen card only. Foreigners use the Finanças credentials or go in person.",
      "Not having Portal das Finanças access yet: get that password first, or go in person.",
      "Letting a “helper” activate it on their phone number. The CMD is your identity; the phone number must be yours."
    ],
    related: ["portal-financas", "seguranca-social", "sns-healthcare", "nif"],
    sources: [
      { label: "gov.pt: Ativar a Chave Móvel Digital", url: "https://www.gov.pt/servicos/ativar-a-chave-movel-digital" },
      { label: "Autenticação.gov: request the Chave Móvel Digital", url: "https://www.autenticacao.gov.pt/cmd-pedido-chave" },
      { label: "Autenticação.gov: about the Chave Móvel Digital", url: "https://www.autenticacao.gov.pt/a-chave-movel-digital" },
      { label: "IRN: Chave Móvel Digital for foreigners", url: "https://irn.justica.gov.pt/Noticias-do-IRN/Chave-movel-digital-para-estrangeiros" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "atestado-residencia",
    title: "Proof of address from the Junta de Freguesia",
    pt: "Atestado de residência",
    category: "identity",
    keywords: ["proof of address", "junta", "parish council", "morada", "change of address", "atestado"],
    summary: "A certificate from your parish council confirming where you live. It unlocks the SNS number, school places, driving licence exchange and more, and it is the one document that proves “I have lived here for over 90 days”.",
    who: "Anyone who needs to prove their Portuguese address, especially newcomers without a rental contract in their name or without a residence document yet.",
    why: "Most Portuguese services want an address document. Foreigners often have nothing in their name in the first months, and the atestado fills that gap. The Junta can also confirm how long you have lived there.",
    where: "The Junta de Freguesia (parish council) for your address. Some Lojas do Cidadão host Junta desks.",
    cost: "A small fee set by each Junta, typically a few euros. Some purposes (school, health) are free in many parishes.",
    time: "Often on the spot; sometimes a few days.",
    needs: "ID, NIF and something showing your address, or two witnesses.",
    steps: [
      "Find your Junta de Freguesia (search your street on gov.pt or ask a neighbour; the address is on any municipal bill).",
      "Bring your passport or residence document, your NIF and proof of address: a registered rental contract, a utility bill, a landlord declaration or a bank statement. If you have none, many Juntas accept **two witnesses** registered in the parish who confirm you live there.",
      "Say what the certificate is for (“para o centro de saúde”, “para a escola”, “para o IMT”): the wording and the fee can differ.",
      "Collect the atestado. Take a photo; you will need it more than once.",
      "Then update your address everywhere: see below."
    ],
    documents: [
      "Passport or residence document.",
      "NIF.",
      "Rental contract, utility bill, landlord declaration or bank statement with your address; or two witnesses from the parish."
    ],
    sections: [
      {
        title: "Keep your address updated everywhere",
        body: ["Every body keeps its own address record, and letters go to whatever they have. When you move:"],
        list: [
          "**Finanças** first: on the Portal das Finanças (with CMD) or at a tax office with proof. Your tax address decides where assessments and fines go.",
          "**Social Security** on Segurança Social Direta.",
          "**SNS**: at your health centre (you may change health centre).",
          "**AIMA**: residence permit holders must communicate an address change; check the AIMA portal for the current procedure.",
          "**IMT**: driving licence holders must update their address within 60 days (free, on IMT Online).",
          "Bank, employer, insurance, utilities, and your own country’s consulate."
        ]
      }
    ],
    tips: [
      "Ask the landlord to register the rental contract at Finanças and issue electronic rent receipts: the receipts are accepted as proof of address almost everywhere and give you a tax deduction.",
      "The Junta also handles voter registration for EU citizens and is often the friendliest place to ask “where do I go for…”."
    ],
    pitfalls: [
      "Using an address you will leave within weeks. Every later change costs time.",
      "Assuming the Junta can certify something it cannot: it certifies residence, not income or civil status."
    ],
    related: ["sns-utente", "housing-renting", "nif", "driving-licence"],
    sources: [
      { label: "gov.pt (services portal)", url: "https://www.gov.pt/" },
      { label: "Portal das Finanças (change of address)", url: "https://www.portaldasfinancas.gov.pt/" },
      { label: "IMT (address updates for driving licence holders)", url: "https://www.imt-ip.pt/" }
    ],
    lastVerified: "2026-09-16"
  },
  {
    id: "documents-prep",
    title: "Documents to bring, apostilles and translations",
    pt: "Apostila de Haia e tradução certificada",
    category: "identity",
    keywords: ["apostille", "legalisation", "certified translation", "birth certificate", "criminal record", "diploma", "degree recognition", "DGES"],
    summary: "Foreign documents are only accepted in Portugal once they carry a Hague apostille (or consular legalisation) and, usually, a certified translation. Get them before you move: it is slow and expensive from here.",
    who: "Everyone moving to Portugal, and especially anyone who will apply for a residence permit, family reunification, school places, degree recognition or citizenship.",
    why: "Visa, residence, marriage, school and nationality applications all require foreign civil documents. Each apostille means dealing with your home country’s authorities, which is far easier while you are still there.",
    where: "The apostille is issued by the competent authority in the country that issued the document (a ministry, court or notary, depending on the country). Translations are done by a certified translator, a notary, a lawyer or a Portuguese consulate.",
    cost: "Varies by country; apostilles are typically €10 to €50 each, translations charged per page.",
    time: "Days to weeks per document, longer from abroad.",
    steps: [
      "List the documents you will need in the first two years (see the list below) and get **recent originals**: many Portuguese services reject civil certificates older than 6 months (birth or marriage certificates in particular) or criminal-record certificates older than 3 months.",
      "Get a **Hague apostille** on each public document if your country is in the Apostille Convention. If it is not, the document needs consular legalisation instead: ask the Portuguese consulate in your country.",
      "Have documents that are not in Portuguese translated by a certified translator, and have the translation certified (in Portugal: by a notary, lawyer, solicitor, or the consulate). Some services accept English or Spanish originals; ask before paying for translations.",
      "For degrees, decide whether you need **recognition**. DGES handles recognition of foreign higher-education degrees; some professions (health, engineering, law, teaching) also require registration with a professional order.",
      "Scan everything and keep the scans in two places. Bring the originals in your hand luggage."
    ],
    documents: [
      "Passport valid well beyond your planned residence permit; national ID card for EU citizens.",
      "Birth certificate (full/long form) for you and each family member.",
      "Marriage certificate or proof of partnership, and divorce decrees if relevant.",
      "Criminal-record certificate from every country you lived in over the last years (visas and citizenship ask for it).",
      "Diplomas, degree certificates and transcripts.",
      "Driving licence, plus a certificate of authenticity from the issuing authority if your licence is from outside the EU.",
      "Vaccination records for children (needed for school), and medical records or prescriptions for ongoing treatment.",
      "Proof of income or pension, employment contract or letter, recent bank statements (visa applications).",
      "From your previous country’s tax and social security bodies: confirmation of leaving tax residence, and EU forms such as U1 (unemployment periods), S1 (pensioner healthcare) or A1 (posted worker) where relevant.",
      "A power of attorney if someone will get your NIF or handle paperwork for you."
    ],
    tips: [
      "Order two apostilled copies of birth and marriage certificates: one will be kept by some service.",
      "Portuguese criminal-record certificates for later applications are requested online on gov.pt with the Chave Móvel Digital.",
      "Deregister properly where you come from: tax residence, municipal registration, health insurance. Overlapping residences cause double-tax headaches."
    ],
    pitfalls: [
      "Translating first, apostilling second: the apostille must be on the original before translation, and some translations must be apostilled too.",
      "Assuming an EU document needs nothing: EU civil certificates come with a multilingual standard form (Regulation 2016/1191) that removes the apostille and translation, but you have to request that form from the issuing office."
    ],
    related: ["residence-non-eu", "citizenship", "schools-children", "nif"],
    sources: [
      { label: "Hague Conference: Apostille Convention", url: "https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille" },
      { label: "Your Europe: public documents and the EU multilingual standard forms", url: "https://europa.eu/youreurope/citizens/family/couple/marriage/index_en.htm" },
      { label: "DGES: recognition of foreign degrees", url: "https://www.dges.gov.pt/" },
      { label: "Portal dos Vistos (documents required per visa type)", url: "https://vistos.mne.gov.pt/" }
    ],
    lastVerified: "2026-09-16"
  }
]);
