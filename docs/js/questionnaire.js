/* Questionnaire definition. Each question: id, title, help, type ('single' | 'multi'), options, optional showIf(answers). */
window.SPT = window.SPT || {};

SPT.questions = [
  {
    id: 'stage',
    title: 'Where are you in your move to Portugal?',
    options: [
      { value: 'planning', label: 'Still planning the move', desc: 'I live abroad and I am preparing.' },
      { value: 'arrived', label: 'Just arrived (less than 3 months ago)' },
      { value: 'settled', label: 'Living here between 3 months and 5 years' },
      { value: 'longterm', label: 'Living here for 5 years or more', desc: 'I suspect I missed a few things along the way.' }
    ]
  },
  {
    id: 'citizenship',
    title: 'Which passport will you use in Portugal?',
    help: 'This decides your residency route. If you hold more than one passport, pick the one you will register with.',
    options: [
      { value: 'eu', label: 'EU, EEA, Switzerland or Andorra', desc: 'EEA = Iceland, Liechtenstein, Norway.' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'cplp', label: 'A Portuguese-speaking (CPLP) country', desc: 'Brazil, Angola, Cabo Verde, Guinea-Bissau, Equatorial Guinea, Mozambique, São Tomé and Príncipe, Timor-Leste.' },
      { value: 'other', label: 'Any other country' }
    ]
  },
  {
    id: 'ukBefore2021',
    showIf: a => a.citizenship === 'uk',
    title: 'Were you legally living in Portugal before 1 January 2021?',
    help: 'UK nationals who were resident before the end of the Brexit transition period keep protected rights under the Withdrawal Agreement.',
    options: [
      { value: 'yes', label: 'Yes, I was already resident' },
      { value: 'no', label: 'No, I arrived later (or I am still planning)' }
    ]
  },
  {
    id: 'activity',
    title: 'What will you mainly do in Portugal?',
    options: [
      { value: 'employee', label: 'Work for a Portuguese employer' },
      { value: 'self', label: 'Freelance or run my own business here' },
      { value: 'remote', label: 'Work remotely for an employer or clients abroad' },
      { value: 'retired', label: 'Retire, or live on savings, pension or passive income' },
      { value: 'student', label: 'Study' },
      { value: 'seeking', label: 'Look for work' },
      { value: 'other', label: 'Something else, or not sure yet' }
    ]
  },
  {
    id: 'household',
    type: 'multi',
    title: 'Who is moving with you?',
    help: 'Select all that apply, or continue if you are on your own.',
    options: [
      { value: 'partner', label: 'Partner or spouse' },
      { value: 'children', label: 'Children' },
      { value: 'nonEuFamily', label: 'A family member who is not an EU citizen', desc: 'They may need their own residence card.' }
    ]
  },
  {
    id: 'have',
    type: 'multi',
    title: 'Which of these do you already have?',
    help: 'The plan will skip what you have already done.',
    options: [
      { value: 'nif', label: 'NIF (tax number)' },
      { value: 'niss', label: 'NISS (social security number)' },
      { value: 'sns', label: 'SNS user number (número de utente)' },
      { value: 'residence', label: 'A residence document', desc: 'EU registration certificate (CRUE), residence permit, or Withdrawal Agreement card.' },
      { value: 'atestado', label: 'Proof of address from the Junta de Freguesia' },
      { value: 'bank', label: 'A Portuguese bank account' },
      { value: 'financas', label: 'Login for the Portal das Finanças' },
      { value: 'ssdireta', label: 'Login for Segurança Social Direta' },
      { value: 'cmd', label: 'Chave Móvel Digital (CMD)' },
      { value: 'driving', label: 'Driving licence registered or exchanged with IMT' },
      { value: 'ehic', label: 'A Portuguese European Health Insurance Card (CESD)' }
    ]
  },
  {
    id: 'driving',
    title: 'Do you have a driving licence?',
    options: [
      { value: 'eu', label: 'Yes, issued in the EU or EEA' },
      { value: 'noneu', label: 'Yes, issued outside the EU or EEA' },
      { value: 'none', label: 'No, or I will not drive' }
    ]
  },
  {
    id: 'portuguese',
    title: 'How is your Portuguese?',
    options: [
      { value: 'none', label: 'Starting from zero' },
      { value: 'basic', label: 'I get by (roughly A1 to A2)' },
      { value: 'good', label: 'Comfortable (B1 or better)' }
    ]
  },
  {
    id: 'goals',
    type: 'multi',
    title: 'Does anything else apply to you?',
    help: 'Select all that apply. This unlocks extra steps.',
    options: [
      { value: 'home', label: 'I need to rent or buy a home' },
      { value: 'car', label: 'I plan to bring or buy a car' },
      { value: 'travel', label: 'I travel around Europe often' },
      { value: 'citizenship', label: 'I want Portuguese citizenship one day' },
      { value: 'business', label: 'I want to start a business' },
      { value: 'study', label: 'I need a degree or diploma recognised' },
      { value: 'under35', label: 'I am 35 or younger', desc: 'A youth tax break (IRS Jovem) may apply.' }
    ]
  }
];

/* Human-readable labels for the plan header. */
SPT.answerLabel = function (qid, value) {
  const q = SPT.questions.find(x => x.id === qid);
  if (!q) return value;
  const o = q.options.find(x => x.value === value);
  return o ? o.label : value;
};
