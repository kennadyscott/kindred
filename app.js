const THERAPISTS = [
  {
    id: 't1', name: 'Dr. Maya Chen', credentials: ['PhD', 'Clinical Psychologist'],
    pronouns: 'she/her', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/women/90.jpg',
    initials: 'MC', gradient: 'linear-gradient(135deg,#8a63a8,#5c3766)',
    meta: ['Video & In-person', '$140–180/session'],
    bestFor: 'I work best with high-achievers who are quietly running on empty.',
    tags: ['Anxiety', 'Life Transitions', 'CBT', 'LGBTQ+ Affirming'],
    mandatoryPromptAnswers: [
      "turning the anxious noise in your head into an actual plan you can follow, even on the days you don't feel like it.",
      "We'll skip the small talk. I want to know what's actually been sitting heavy on you lately, and what you're hoping is different a few months from now."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you want homework between sessions and someone who'll actually follow up on it — I track progress, not just feelings.", photo: null },
      { question: 'I became a therapist because...', answer: "I used to be the person who had it all together on paper and was quietly falling apart. I wanted to be the therapist I needed back then.", photo: null },
      { question: 'My greatest strength is...', answer: "turning insight into an actual plan — understanding your anxiety perfectly doesn't help if we don't practice doing things differently.", photo: null },
      { question: 'How I can help...', answer: "give you a structured, judgment-free space to build habits that actually stick, not just talk about wanting to.", photo: null }
    ],
    modalities: ['CBT'], style: 'direct',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video', 'in-person'], rateMin: 140, insuranceList: ['Aetna', 'BCBS', 'EAP'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Austin', state: 'TX' },
    licenseVerified: true, licenseNumber: 'TX-38291',
    website: 'drmayachen.com',
    stats: { profileViews: 214, hearts: 58, top5: 12, conversationsStarted: 9, weekViews: 31, weekHearts: 8 },
    media: { video: 'https://www.w3schools.com/html/mov_bbb.mp4', office: 'https://picsum.photos/id/42/700/460', outOfOffice: 'https://picsum.photos/id/1043/700/460' },
    persona: {
      inOffice: "Structured but never stiff — we open with a two-minute check-in, then get to work. I keep a visible agenda and we end every session with one concrete thing to try.",
      outOfOffice: "On a trail before 7am most Saturdays. Hiking is where I practice what I preach about quieting an overachieving brain."
    }
  },
  {
    id: 't2', name: 'James Okafor', credentials: ['LMFT'],
    pronouns: 'he/him', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/men/83.jpg',
    initials: 'JO', gradient: 'linear-gradient(135deg,#bf7350,#9c5535)',
    meta: ['Video only', '$110–130/session'],
    selfPayNote: 'Sliding scale available',
    bestFor: "I work best with couples who still want to fight for the relationship, not just survive it.",
    tags: ['Couples', 'Family Conflict', 'EFT'],
    mandatoryPromptAnswers: [
      "learning how to fight for each other again instead of just fighting.",
      "I want to hear both sides before either of you starts defending yours. First sessions are for understanding the pattern, not assigning blame."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you want a therapist who'll gently push back instead of just nodding along — I believe in doing the work between sessions, not just venting in them.", photo: null },
      { question: 'Together we could...', answer: "figure out what you're actually fighting about underneath the dishes and the schedules.", photo: null },
      { question: "I won't shut up about...", answer: "how fast things can shift once you both stop trying to win the argument and start trying to understand it.", photo: null },
      { question: 'How I can help...', answer: "translate what you're each trying to say so the other person can actually hear it.", photo: null }
    ],
    modalities: ['EFT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false }, languages: ['English', 'Spanish'],
    formats: ['video'], rateMin: 110, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Thu 4:00pm', rank: 2 }],
    nextAvailableRank: 3, nextAvailableLabel: 'Next week',
    practiceType: 'generalist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Chicago', state: 'IL' },
    licenseVerified: true, licenseNumber: 'IL-77204',
    website: 'okaforcouples.com',
    stats: { profileViews: 162, hearts: 41, top5: 8, conversationsStarted: 7, weekViews: 22, weekHearts: 5 },
    media: { video: null, office: 'https://picsum.photos/id/48/700/460', outOfOffice: 'https://picsum.photos/id/553/700/460' },
    persona: {
      inOffice: "Two chairs angled toward each other, not toward me. I talk with my hands, I name the elephant in the room early, and nobody leaves mid-fight.",
      outOfOffice: "Long walks with terrible podcasts and great questions. My wife says I interview strangers at parties — she's right."
    }
  },
  {
    id: 't3', name: 'Priya Raman', credentials: ['LPC', 'Trauma Specialist'],
    pronouns: 'she/her', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg',
    initials: 'PR', gradient: 'linear-gradient(135deg,#a68fc9,#7a5fa8)',
    meta: ['In-person, Downtown', '$150/session'],
    selfPayNote: 'Out-of-network',
    bestFor: "I work best with people carrying trauma they've never had the space to fully unpack.",
    tags: ['Trauma', 'EMDR', 'PTSD', 'Grief'],
    mandatoryPromptAnswers: [
      "moving at a pace that actually feels safe, not the pace you think you're supposed to be at.",
      "There's no pressure to tell the whole story right away. We'll go at whatever pace actually feels safe for you."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you want someone patient, who won't rush you toward 'moving on' before you're ready.", photo: null },
      { question: 'My greatest strength is...', answer: "holding space without needing you to have your story fully sorted out before you walk in the door.", photo: null },
      { question: "I won't shut up about...", answer: "how physical trauma responses can be — a lot of our work is as much about your body settling down as it is about talking.", photo: null },
      { question: 'How I can help...', answer: "offer a quiet, steady space with no pressure to perform being okay.", photo: null }
    ],
    modalities: ['EMDR'], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English', 'Hindi'],
    formats: ['in-person'], rateMin: 150, insuranceList: [],
    acceptingOngoing: false, onDemand: true, onDemandSlots: [{ label: 'Wed 1:00pm', rank: 1 }, { label: 'Fri 11:00am', rank: 3 }],
    nextAvailableRank: null, nextAvailableLabel: 'Not accepting new ongoing clients',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Austin', state: 'TX' },
    licenseVerified: true, licenseNumber: 'TX-51830',
    website: '',
    stats: { profileViews: 189, hearts: 47, top5: 10, conversationsStarted: 6, weekViews: 26, weekHearts: 6 },
    media: { video: null, office: 'https://picsum.photos/id/1060/700/460', outOfOffice: 'https://picsum.photos/id/106/700/460' },
    persona: {
      inOffice: "Soft light, a tea kettle, and no clock facing you. We move at your pace — silence is allowed here, and so is not being ready yet.",
      outOfOffice: "Tending an unreasonable number of plants and learning my grandmother's recipes one phone call at a time."
    }
  },
  {
    id: 't4', name: 'Dr. Sam Alvarez', credentials: ['PsyD'],
    pronouns: 'he/him', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    initials: 'SA', gradient: 'linear-gradient(135deg,#d4a24e,#b57e2f)',
    meta: ['Video & In-person', '$160/session'],
    bestFor: "I work best with men who are burnt out and tired of being told to 'just relax.'",
    tags: ['ADHD', 'Burnout', "Men's Issues", 'ACT'],
    mandatoryPromptAnswers: [
      "building a life that actually works with your brain instead of constantly fighting it.",
      "I'll ask a lot of direct questions and probably crack a joke or two. I want to know what's actually going on, not the polished version."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you're tired of being told to 'just relax' and want someone who gets that your brain doesn't work that way.", photo: null },
      { question: 'My greatest strength is...', answer: "helping you stop chasing the trade-off of eliminating anxiety or distraction, and instead build a good life around it.", photo: null },
      { question: "My favorite thing I've learned...", answer: "how much burnout gets misdiagnosed as a focus problem. Sometimes the fix isn't a better system, it's fewer things on your plate.", photo: null },
      { question: 'How I can help...', answer: "bring a direct, sometimes funny conversation instead of a couch-and-tissue-box vibe.", photo: null }
    ],
    modalities: ['ACT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false }, languages: ['English', 'Spanish'],
    formats: ['video', 'in-person'], rateMin: 160, insuranceList: ['Cigna'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Chicago', state: 'IL' },
    licenseVerified: true, licenseNumber: 'IL-42917',
    website: '',
    stats: { profileViews: 143, hearts: 36, top5: 7, conversationsStarted: 5, weekViews: 19, weekHearts: 4 },
    media: { video: null, office: 'https://picsum.photos/id/60/700/460', outOfOffice: 'https://picsum.photos/id/1035/700/460' },
    persona: {
      inOffice: "Whiteboard on the wall, fidget bin on the table. We externalize everything — your brain gets to think out loud here without being graded on it.",
      outOfOffice: "Chasing waterfalls, literally. My camera roll is 90% trails and 10% terrible selfies at the top of them."
    }
  },
  {
    id: 't5', name: 'Dr. Leah Fitzgerald', credentials: ['PhD', 'Perinatal Specialist'],
    pronouns: 'she/her', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    initials: 'LF', gradient: 'linear-gradient(135deg,#6ba4c9,#4278a0)',
    meta: ['Video only', '$135/session'],
    bestFor: 'I work best with new parents who feel like they should be coping better than they are.',
    tags: ['Postpartum', 'Anxiety', 'New Parents'],
    mandatoryPromptAnswers: [
      "feeling like yourself again, not just 'fine' for the baby's sake.",
      "I want to know how you're actually sleeping, eating, and coping — not just how the baby's doing. You matter here too."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you're exhausted, maybe scared to admit how hard this has been, and just want someone to say 'this makes sense.'", photo: null },
      { question: 'My greatest strength is...', answer: "reminding you that postpartum struggles are not a reflection of how much you love your baby — that guilt is common, and it's almost never true.", photo: null },
      { question: 'All I ask is that you...', answer: "let yourself say the unspeakable parts out loud without expecting yourself to flinch first.", photo: null },
      { question: "My favorite thing I've learned...", answer: "how much relief comes from just being told 'this is a normal reaction to an abnormal amount of pressure.' You're not broken.", photo: null }
    ],
    modalities: [], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video'], rateMin: 135, insuranceList: ['United'],
    acceptingOngoing: false, onDemand: false, onDemandSlots: [],
    nextAvailableRank: null, nextAvailableLabel: 'Paused',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Denver', state: 'CO' },
    licenseVerified: true, licenseNumber: 'CO-20348',
    website: 'drleahfitz.com',
    stats: { profileViews: 98, hearts: 22, top5: 4, conversationsStarted: 3, weekViews: 9, weekHearts: 2 },
    media: { video: null, office: 'https://picsum.photos/id/0/700/460', outOfOffice: 'https://picsum.photos/id/429/700/460' },
    persona: {
      inOffice: "Video-first and baby-friendly — nurse, rock, or pause whenever you need. Half my sessions happen during nap windows and that's exactly how it should be.",
      outOfOffice: "Slow breakfasts on weekends. Berries in a mug counts as self-care and I will defend that position professionally."
    }
  },
  {
    id: 't6', name: 'Marcus Webb', credentials: ['LCSW'],
    pronouns: 'he/him', showPronouns: true, useCompanyName: false, companyName: '',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    initials: 'MW', gradient: 'linear-gradient(135deg,#8a9b6e,#647a4a)',
    meta: ['In-person & Video', '$120/session'],
    selfPayNote: 'Sliding scale',
    bestFor: 'I work best with young adults who are ambivalent about change and sick of being lectured.',
    tags: ['Substance Use', 'Young Adults', 'Motivational Interviewing'],
    mandatoryPromptAnswers: [
      "figuring out what you actually want, without anyone else's voice in your head about it.",
      "No lectures, no judgment. I want to understand what role this has been playing in your life before we talk about changing anything."
    ],
    optionalPrompts: [
      { question: "You'll probably click with me if...", answer: "you're sick of being told what to do and want someone who'll actually ask what you want instead.", photo: null },
      { question: 'My greatest strength is...', answer: "sitting with ambivalence instead of rushing you past it — most people who change something big felt torn about it the whole way through.", photo: null },
      { question: 'How I can help...', answer: "have a real conversation, not an intervention. There's no script I'm trying to get you to follow.", photo: null },
      { question: "My favorite thing I've learned...", answer: "that I'm not going to push you toward a decision. My job is to help you hear yourself think.", photo: null }
    ],
    modalities: ['Motivational Interviewing'], style: 'gentle',
    identity: { gender: 'male', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video', 'in-person'], rateMin: 120, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Tue 9:00am', rank: 1 }],
    nextAvailableRank: 4, nextAvailableLabel: 'In 2 weeks',
    practiceType: 'generalist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Austin', state: 'TX' },
    licenseVerified: true, licenseNumber: 'TX-66125',
    website: '',
    stats: { profileViews: 121, hearts: 30, top5: 6, conversationsStarted: 4, weekViews: 15, weekHearts: 3 },
    media: { video: null, office: 'https://picsum.photos/id/180/700/460', outOfOffice: 'https://picsum.photos/id/1036/700/460' },
    persona: {
      inOffice: "Hoodie-friendly. No clipboard between us, no trick questions. If you want to sit on the floor, the floor is honestly where the best sessions happen.",
      outOfOffice: "Winter camping, because apparently I only relax when it's slightly too cold to think."
    }
  }
];

// Identity-affinity data for the seed therapists (ethnicity / gender-sexuality
// affinities / faith backgrounds they work with). Kept as a side map so the
// large therapist literals above stay readable; new signups start empty and
// would fill these from a future profile section.
const THERAPIST_IDENTITY = {
  t1: { ethnicity: 'Asian', affinities: ['LGBTQ+'], faith: ['Secular and Non-Religious'] },
  t2: { ethnicity: 'Black and African American', affinities: [], faith: ['Christian'] },
  t3: { ethnicity: 'South Asian', affinities: ['LGBTQ+'], faith: ['Hindu'] },
  t4: { ethnicity: 'Hispanic and Latino', affinities: [], faith: ['Secular and Non-Religious'] },
  t5: { ethnicity: '', affinities: [], faith: ['Christian'] },
  t6: { ethnicity: '', affinities: ['LGBTQ+', 'Transgender'], faith: ['Secular and Non-Religious'] }
};
// Recurring weekly openings the therapist has for NEW ongoing clients — the
// Home tab is an availability calendar, so this is the core of it. Only
// therapists accepting ongoing clients are seeded with open slots.
const THERAPIST_AVAILABILITY = {
  t1: [{ day: 'Mon', time: '9:00am' }, { day: 'Wed', time: '4:00pm' }, { day: 'Thu', time: '11:00am' }],
  t2: [{ day: 'Tue', time: '10:00am' }, { day: 'Fri', time: '2:00pm' }],
  t4: [{ day: 'Mon', time: '1:00pm' }, { day: 'Wed', time: '9:00am' }, { day: 'Fri', time: '3:00pm' }],
  t6: [{ day: 'Tue', time: '3:00pm' }, { day: 'Thu', time: '5:00pm' }]
};
// The therapist's PRIVATE ideal-client spec — who they're the strongest fit for.
// Never shown to clients. Everything on a therapist's profile above stays their
// "I also work with" tier, so stating an ideal never narrows who can find them.
// mustHaves (max 3) weigh double in scoring; they are not filters.
const THERAPIST_IDEAL = {
  t1: { ageBands: ['25–34', '35–44'], genders: ['Female'], fields: ['Tech', 'Healthcare'],
        needs: ['Anxiety', 'Burnout'], modalities: ['CBT'], payment: 'Either',
        availability: ['Early mornings', 'Evenings'], mustHaves: ['needs', 'modalities'] },
  t3: { ageBands: ['25–34', '35–44'], genders: ['Female'], fields: ['First responder', 'Military & Veteran'],
        needs: ['Trauma'], modalities: ['EMDR'], payment: 'Cash pay',
        availability: [], mustHaves: ['needs', 'modalities', 'fields'] },
  t6: { ageBands: ['18–24', '25–34'], genders: [], fields: ['Student', 'Creative'],
        needs: ['ADHD'], modalities: [], payment: 'Either',
        availability: [], mustHaves: ['needs'] }
};

THERAPISTS.forEach(t => {
  const id = THERAPIST_IDENTITY[t.id] || {};
  t.ethnicity = id.ethnicity || '';
  t.affinities = id.affinities || [];
  t.faith = id.faith || [];
  t.availabilitySlots = THERAPIST_AVAILABILITY[t.id] || [];
  t.idealClient = Object.assign(emptyIdealClient(), THERAPIST_IDEAL[t.id] || {});
});

const NEED_OPTIONS = ['Anxiety', 'Trauma', 'Couples', 'Grief', 'Life Transitions', 'Burnout', 'ADHD', 'Substance Use', 'Postpartum', 'Family Conflict'];
// The full specialty catalog behind "+ Other" — same no-free-text rule as
// languages: picking from a fixed list is what keeps client needs and
// therapist specialties matchable.
const OTHER_SPECIALTIES = [
  'Addiction', 'Adoption', 'Alcohol Use', 'Anger Management', 'Anorexia',
  'Antisocial Personality (ASPD)', 'ARFID', 'Autism', 'Behavioral Issues',
  'Binge Eating Disorder', 'Bipolar Disorder', 'Blended Family', 'Body Image',
  'Borderline Personality (BPD)', 'Bulimia', 'Cancer', 'Career Counseling',
  'Child Anxiety', 'Chronic Illness', 'Chronic Pain', 'Co-Parenting',
  'Codependency', 'Complex PTSD', 'Dementia', 'Depersonalization (DPDR)',
  'Depression', 'Dissociative Disorders (DID)', 'Divorce', 'Domestic Abuse',
  'Driving Anxiety', 'Drug Abuse', 'Dual Diagnosis', 'Eating Disorders',
  'Education and Learning Disabilities', 'Emotional Abuse', 'Emotional Regulation',
  'First Responders', 'Gambling', 'Geriatric', 'Health Anxiety', 'Hoarding',
  'Infertility', 'Infidelity', 'Intellectual Disability', 'Internet Addiction',
  'Life Coaching', 'Marriage Counseling', 'Medical Detox', 'Medical Trauma',
  'Medication Management', "Men's Issues", 'Menopause', 'Miscarriage',
  'Narcissistic Abuse', 'Narcissistic Personality (NPD)', 'Neurodivergence',
  'Obesity', 'Obsessive-Compulsive (OCD)', 'Oppositional Defiance (ODD)',
  'Parenting', 'Personality Disorders', 'Porn Addiction', 'Postpartum Depression',
  'Pregnancy, Prenatal, Postpartum', 'Premarital',
  'Premenstrual Dysphoric Disorder (PMDD)', 'Psychosis', 'Racial Identity',
  'Relationship Anxiety', 'Relationship Issues', 'Schizophrenia', 'Self Esteem',
  'Self-Harming', 'Sex Therapy', 'Sexual Abuse', 'Sexual Addiction',
  'Sleep or Insomnia', 'Social Anxiety', 'Spirituality', 'Sports Performance',
  'Stress', 'Suicidal Ideation', 'Testing and Evaluation', 'Trauma and PTSD',
  'Traumatic Brain Injury (TBI)', 'Veterans', 'Video Game Addiction',
  'Weight Loss', "Women's Issues"
];
const MODALITY_OPTIONS = ['CBT', 'EMDR', 'ACT', 'EFT', 'Motivational Interviewing'];
const US_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'];

const MODALITY_INFO = {
  'CBT': "Cognitive Behavioral Therapy. Focuses on identifying and changing unhelpful thought patterns and behaviors — often structured, with exercises to practice between sessions.",
  'EMDR': "Eye Movement Desensitization and Reprocessing. A structured approach often used for trauma, using guided eye movements or other bilateral stimulation to help the brain reprocess difficult memories.",
  'ACT': "Acceptance and Commitment Therapy. Focuses on accepting difficult thoughts and feelings rather than fighting them, while committing to actions aligned with your values.",
  'EFT': "Emotionally Focused Therapy. Often used with couples and families — focused on identifying emotional patterns and building stronger, safer emotional bonds.",
  'Motivational Interviewing': "A collaborative conversational style that helps you explore and strengthen your own motivation for change — especially useful for ambivalence around habits or behaviors.",
  'ERP': "Exposure and Response Prevention. A structured approach for OCD and anxiety that gently, gradually reduces the power of intrusive thoughts and compulsions.",
  'Somatic': "Body-based therapy that works with physical sensations, not just talk — helpful when stress and trauma live in the body.",
  'IFS': "Internal Family Systems. Works with the different 'parts' of you (the critic, the protector, the wounded) to build inner harmony.",
  'DBT': "Dialectical Behavior Therapy. Teaches concrete skills for managing intense emotions, distress, and relationships.",
  'Couples Therapy': "Focused on the relationship itself — communication patterns, conflict, and connection between partners."
};
// Client "Types of Therapy" step — set up like languages: common ones as
// quick pills, everything else behind a "+ Other" dropdown. Single-select.
const MODALITY_QUICK = ['ERP', 'ACT', 'Motivational Interviewing', 'Somatic', 'EMDR', 'IFS', 'DBT', 'Couples Therapy'];
const OTHER_MODALITIES = [
  'Adlerian', 'AEDP', 'Applied Behavioral Analysis (ABA)', 'Art Therapy',
  'Attachment-based', 'Biofeedback', 'Brainspotting',
  'Clinical Supervision and Licensed Supervisors', 'Coaching',
  'Cognitive Behavioral (CBT)', 'Cognitive Processing (CPT)',
  'Compassion Focused', 'Culturally Sensitive', 'Dance Movement Therapy',
  'Eclectic', 'Emotionally Focused', 'Energy Psychology', 'Existential',
  'Experiential Therapy', 'Expressive Arts', 'Family Systems', 'Family Therapy',
  'Feminist', 'Forensic Psychology', 'Gestalt', 'Gottman Method', 'Humanistic',
  'Hypnotherapy', 'Imago', 'Integrative', 'Interpersonal', 'Intervention',
  'Jungian', 'Ketamine-Assisted', 'Mindfulness-Based (MBCT)', 'Multicultural',
  'Music Therapy', 'Narrative', 'Neuro-Linguistic (NLP)', 'Neurofeedback',
  'Parent-Child Interaction (PCIT)', 'Person-Centered', 'Play Therapy',
  'Positive Psychology', 'Prolonged Exposure Therapy', 'Psychoanalytic',
  'Psychobiological Approach Couple Therapy', 'Psychodynamic',
  'Rational Emotive Behavior (REBT)', 'Reality Therapy', 'Relational',
  'Sandplay', 'Schema Therapy', 'Solution Focused Brief (SFBT)',
  'Strength-Based', 'Structural Family Therapy', 'Transpersonal', 'Trauma Focused'
];

function openModalityInfo(name) {
  const desc = MODALITY_INFO[name];
  if (!desc) return;
  document.getElementById('modality-info-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>${name}</h2>
    <p class="modality-info-text">${desc}</p>
    <button class="primary-btn" style="margin-top:16px;background:var(--coral);color:white;" id="modality-info-close-btn">Got it</button>
  `;
  document.getElementById('modality-info-modal').classList.remove('hidden');
  document.getElementById('modality-info-close-btn').addEventListener('click', () => {
    document.getElementById('modality-info-modal').classList.add('hidden');
  });
}
document.getElementById('modality-info-modal').addEventListener('click', (e) => {
  if (e.target.id === 'modality-info-modal') document.getElementById('modality-info-modal').classList.add('hidden');
});
const INSURANCE_OPTIONS = ['Aetna', 'BCBS', 'Cigna', 'United', 'EAP'];
// Full carrier catalog behind "+ Other" — fixed list, same no-free-text
// rule as languages and specialties.
const OTHER_INSURANCES = [
  '1199SEIU', 'AARP', 'ACI Specialty Benefits', 'Aetna EAP', 'Aetna Medicare',
  'Aetna Student Health', 'All Savers', 'AllOne Health',
  "America's Choice Provider Network (ACPN)", 'AmeriHealth Caritas', 'Anthem',
  'Anthem EAP', 'APS Healthcare', 'Ascension SmartHealth',
  'BHS | Behavioral Health Systems', 'Blue Cross', 'Blue Shield',
  'BlueCross BlueShield', 'Carebridge EAP', 'CareConnect Health Plan',
  'Carelon Behavioral Health', 'CareOregon', 'CCN | Community Care Network',
  'Centivo', 'CHAMPVA', "Children's Health Insurance Program (CHIP)",
  'ChoiceCare Network', 'Cigna and Evernorth', 'Cigna EAP', 'Cigna Medicare',
  'Cofinity | First Health', 'Colorado Access', 'ComPsych', 'Concern',
  'Coventry', 'CuraLinc Healthcare', 'Curative', 'Dayforce',
  'Denver Health Medical Plan', 'ESI Employee Assistance Group',
  'Evernorth EAP', 'First Health', 'Friday Health Plans', 'Golden Rule',
  'Government Employees Health Association (GEHA)', 'Great-West Life',
  'Guardian', 'Health First Colorado', 'Health Net', 'Horizon Healthcare',
  'Humana', 'Humana Dual', 'Humana Medicare', 'Independence Administrators',
  'Kaiser Permanente (OON)', 'Lyra Health', 'Magellan', 'MagnaCare',
  'Managed Health Network (MHN)', 'Medicaid', 'Medicare',
  'MediNcrease Health Plans (MHP)', 'Meritain Health', 'Military OneSource',
  'MINES and Associates', 'Modern Health', 'Molina Healthcare', 'MotivHealth',
  'MultiPlan', 'MultiPlan Private Healthcare Systems (PHCS)', 'Mutual of Omaha',
  'New Directions | Lucet', 'Nippon Life Benefits', 'Northwell Direct',
  'Optum', 'Oscar Health', 'Oxford', 'Partners Direct Health',
  'Provider Network of America (PNOA)', 'PsychCare', 'Reliant',
  'Rocky Mountain Health Plans', 'Sagamore', 'Sana Benefits', 'SelectHealth',
  'Surest', 'TELUS Health', 'TRICARE', 'TriWest', 'Trustmark Benefits',
  'Ulliance', 'United Medical Resources (UMR)', 'UnitedHealthcare / Optum EAP',
  'UnitedHealthcare / Optum Medicaid', 'UnitedHealthcare / Optum Medicare',
  'UnitedHealthcare Student Resources', 'UnitedHealthcare UHC | UBH',
  'VA Community Care Network (CCN)', 'Velocity National Provider Network (VNPN)',
  'WellCare', 'Wellfleet', 'Wellpoint | Amerigroup', 'Workplace Options',
  'Zelis Healthcare'
];
const BUDGET_RANGES = [
  { label: 'Any budget', min: 0, max: Infinity },
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100–$150', min: 100, max: 150 },
  { label: '$150–$200', min: 150, max: 200 },
  { label: '$200+', min: 200, max: Infinity },
  { label: 'Sliding scale', slidingScale: true }
];
const CARE_FOR_OPTIONS = [
  { key: 'myself', label: 'Myself' },
  { key: 'child', label: 'A child' },
  { key: 'couples', label: 'Couples' },
  { key: 'family', label: 'Family' }
];
// When the client can usually meet — captured in intake, shown on the
// shared profile so a matched therapist can see if their open slots line up.
const AVAILABILITY_OPTIONS = ['Anytime', 'Early mornings', 'Lunch', 'Evenings', 'Weekends', 'Other'];

// ===== IDEAL-CLIENT VOCABULARY =====
// A therapist's "ideal client" is matched against what the client tells us about
// THEMSELVES, so both sides must pick from these exact lists — a mismatch here
// would silently break matching (same reason languages are a controlled list).
// These describe the client, not their preferences about a therapist.
const CLIENT_AGE_BANDS = ['18–24', '25–34', '35–44', '45–54', '55–64', '65+'];
const CLIENT_GENDER_OPTIONS = ['Female', 'Male', 'Non-binary', 'Transgender', 'Prefer not to say'];
const CLIENT_FIELD_OPTIONS = ['First responder', 'Healthcare', 'Military & Veteran', 'Education',
  'Tech', 'Finance & Legal', 'Service industry', 'Student', 'Full-time parent', 'Creative', 'Other'];
// What a therapist will accept as payment. 'Either' = no constraint.
const PAYMENT_TYPE_OPTIONS = ['Insurance', 'Cash pay', 'Either'];
// The ideal-fit dimensions a therapist can mark as a "must have" (max 3).
// Must-haves are WEIGHTED HEAVIER — they are never a filter.
const IDEAL_DIMENSIONS = [
  { key: 'ageBands', label: 'Age' },
  { key: 'genders', label: 'Gender' },
  { key: 'fields', label: 'Field of work' },
  { key: 'needs', label: 'What they want to work on' },
  { key: 'modalities', label: 'Modality' }
];
const MAX_MUST_HAVES = 3;
// A client is an "ideal match" when they clear the therapist's practical
// constraints AND score at or above this on the ideal-fit dimensions.
const IDEAL_MATCH_THRESHOLD = 0.8;

// A blank ideal-client spec — every therapist gets one; empty means "no ideal
// stated", which simply means nobody is ever flagged ideal for them.
function emptyIdealClient() {
  return { ageBands: [], genders: [], fields: [], needs: [], modalities: [],
    payment: 'Either', availability: [], mustHaves: [] };
}
// Identity-affinity options (from the client's requested filters). These are
// SOFT preferences — they surface as match reasons when they line up, but
// never hard-filter the pool empty. "No preference" is the default for
// ethnicity; gender/sexuality and faith are optional multi-selects.
const ETHNICITY_OPTIONS = ['Arab and Middle Eastern', 'Asian', 'Black and African American', 'Hispanic and Latino', 'Multiracial', 'Native American', 'Pacific Islander', 'South Asian'];
const GENDER_SEXUALITY_OPTIONS = ['Bisexual', 'Gay', 'Lesbian', 'LGBTQ+', 'Polyamory & ENM', 'Sex-Positive & Kink-Friendly', 'Transgender'];
const FAITH_OPTIONS = ['Buddhist', 'Christian', 'Hindu', 'Jewish', 'Muslim', 'Secular and Non-Religious', 'Sikh', 'The Church of Jesus Christ of Latter-day Saints'];
// Three quick-tap chips cover the most common cases. "Other" opens a real
// dropdown pulled from OTHER_LANGUAGES instead of free text, so language
// names stay consistent between what a therapist selects and what a client
// filters by — a typo in either place would silently break matching.
const LANGUAGE_QUICK_OPTIONS = ['English', 'Spanish', 'Mandarin'];
const OTHER_LANGUAGES = ['American Sign Language', 'Arabic', 'Bengali', 'Burmese', 'Cantonese', 'Czech', 'Dutch', 'French', 'German', 'Greek', 'Haitian Creole', 'Hausa', 'Hebrew', 'Hindi', 'Hmong', 'Hungarian', 'Igbo', 'Indonesian', 'Italian', 'Japanese', 'Khmer', 'Korean', 'Lao', 'Nepali', 'Persian (Farsi)', 'Polish', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 'Sinhala', 'Somali', 'Swahili', 'Swedish', 'Tagalog', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Yoruba'];

function languageChipsHtml(languagesArr, showOther, idPrefix) {
  const custom = languagesArr.filter(l => !LANGUAGE_QUICK_OPTIONS.includes(l));
  let html = `<div class="chip-grid" id="${idPrefix}-languages-grid">`;
  html += LANGUAGE_QUICK_OPTIONS.map(l => `<div class="chip-option ${languagesArr.includes(l) ? 'selected' : ''}" data-language="${l}">${l}</div>`).join('');
  html += custom.map(l => `<div class="chip-option selected" data-remove-custom-language="${l}">${l} ✕</div>`).join('');
  html += `<div class="chip-option" id="${idPrefix}-other-btn">+ Other</div>`;
  html += `</div>`;
  if (showOther) {
    const available = OTHER_LANGUAGES.filter(l => !languagesArr.includes(l));
    html += `<div class="other-language-row">
      <select id="${idPrefix}-other-select">${available.map(l => `<option value="${l}">${l}</option>`).join('')}</select>
      <button id="${idPrefix}-other-add-btn">Add</button>
    </div>`;
  }
  return html;
}

// Same underlying tags as NEED_OPTIONS, just phrased as lived experience
// instead of clinical categories — for clients who don't have a name for
// what's going on yet. Selections still write into intake.needs directly,
// so nothing downstream (matching, therapist tags) has to know which path
// a client took.
// Veteran path only — what a returning client wants different this time.
const PREV_EXPERIENCE_OPTIONS = [
  'More direct feedback', 'More structure and homework', 'Less structure, more space to talk',
  'Someone who challenges me', 'Someone gentler', 'A different approach entirely',
  'Someone who shares my identity', 'Better at handling trauma', 'Nothing — it worked, I moved'
];

const UNSURE_OPTIONS = [
  { label: "My mind won't stop racing, or I feel on edge a lot", tag: 'Anxiety' },
  { label: "Something happened and I can't shake it", tag: 'Trauma' },
  { label: 'Things feel tense or distant with my partner', tag: 'Couples' },
  { label: "I lost someone or something and it's been hard to move through", tag: 'Grief' },
  { label: "Everything in my life feels like it's changing at once", tag: 'Life Transitions' },
  { label: "I'm running on empty, exhausted all the time", tag: 'Burnout' },
  { label: 'I have trouble focusing or finishing things', tag: 'ADHD' },
  { label: 'My drinking or drug use has been on my mind', tag: 'Substance Use' },
  { label: 'Things have felt different since having a baby', tag: 'Postpartum' },
  { label: 'Things are tense with my family', tag: 'Family Conflict' }
];

let intake = {
  knowsNeeds: null, // 'no' = new to therapy (symptom-led) | 'yes' = experienced (knows what they want)
  prevExperience: [],    // veteran path: what they'd change about previous therapy
  prevNotes: '',         // veteran path: free text for their next therapist
  careFor: null,         // 'myself' | 'child' | 'couples' | 'family'
  childAge: '',          // shown only when careFor === 'child'
  needs: [],
  notSure: false,        // "I'm not sure" on the needs step — valid answer, adds no tag filter
  needsOtherOpen: false, // transient UI flag for the "+ Other" specialty panel
  modality: 'open', modalityRequired: false, modalityOtherOpen: false,
  stylePref: null,       // guidance style — optional, no default selection
  genderPref: 'no-preference', genderRequired: false,
  ethnicityPref: 'no-preference', // soft single-select
  lgbtqRequired: false,
  affinities: [],        // gender/sexuality affinity tags — soft multi-select ("anything else")
  faith: [],             // faith backgrounds — soft multi-select ("anything else")
  languagePref: 'any', languageRequired: false, languageOtherOpen: false,
  format: 'no-preference',
  availability: [],      // when the client can usually meet — multi-select
  // About the client THEMSELVES (not preferences about a therapist). Used only
  // to see whether they line up with a therapist's private ideal-client spec.
  // All optional — skipping simply means those dimensions never count.
  ageBand: null,         // one of CLIENT_AGE_BANDS
  selfGender: null,      // one of CLIENT_GENDER_OPTIONS — the client's own gender
  field: null,           // one of CLIENT_FIELD_OPTIONS — what they do
  city: '', state: '',
  insurance: 'any',
  hasInsurance: null,        // 'yes' | 'no' — gate question before any carrier picking
  insuranceOtherOpen: false, // transient UI flag for the "+ Other" carrier dropdown
  noInsurancePref: null,     // 'sliding-scale' | 'therapist-first' when hasInsurance === 'no'
  budgetRange: 'Any budget', // label into BUDGET_RANGES — a range, not a max
  completed: false
};

let deck = [];
let deckIndex = 0;
let shortlist = [];       // therapists swiped right on but not yet requested
let savedResources = [];  // resource ids the client saved from Explore — part of the shareable profile
let crisisAcknowledged = false; // per-session: client confirmed On-Demand isn't being used for a crisis

const EXPLORE_RESOURCES = [
  { id: 'r1', icon: '🌱', title: 'What to expect in your first session', blurb: 'A gentle walkthrough so the first hour feels less like a mystery.' },
  { id: 'r2', icon: '🫁', title: 'Grounding: the 5-4-3-2-1 exercise', blurb: 'A quick sensory reset for anxious moments, anywhere.' },
  { id: 'r3', icon: '📓', title: 'Journaling prompts for hard weeks', blurb: 'Five prompts for when you can’t find the words on your own.' },
  { id: 'r4', icon: '🌙', title: 'Winding down: sleep and stress', blurb: 'Why racing thoughts get louder at night, and what helps.' },
  { id: 'r5', icon: '🗣️', title: 'How to talk about therapy with family', blurb: 'Scripts for the "so why do you need a therapist?" conversation.' }
];
const MAX_PENDING_REQUESTS = 5; // 5 real shots: pending + matched count, only a decline frees a slot
let matches = [];         // {therapist, status: 'matched' | 'pending' | 'declined' | 'ondemand'}
const chatLog = {};       // therapistId -> [{from: 'me'|'them', text}] — 'me' is always the client, 'them' is always the therapist
let chatRole = 'client';  // which side of the chat screen we're currently rendering as
let chatReturnScreen = 'matches';

const cardStack = document.getElementById('card-stack');
const navBadge = document.getElementById('nav-badge');

// ===================================================================
// COMPATIBILITY LOGIC
// ===================================================================
function isCompatible(t, mode) {
  // Unverified licenses never reach clients — verification is the floor,
  // not a ranking signal.
  if (!t.licenseVerified) return false;
  if (mode === 'ongoing' && !t.acceptingOngoing) return false;
  if (mode === 'ondemand' && (!t.onDemand || t.onDemandBanned || t.onDemandSlots.length === 0)) return false;

  // Generalists don't need a literal tag overlap — that's the whole point
  // of being a generalist. Specialists still have to actually match.
  if (intake.needs.length > 0 && t.practiceType !== 'generalist' && !t.tags.some(tag => intake.needs.includes(tag))) return false;

  if (intake.modality !== 'open' && intake.modalityRequired && !t.modalities.includes(intake.modality)) return false;

  if (intake.genderPref !== 'no-preference' && intake.genderRequired && t.identity.gender !== intake.genderPref) return false;

  if (intake.lgbtqRequired && !t.identity.lgbtqAffirming) return false;

  if (intake.languagePref !== 'any' && intake.languageRequired && !t.languages.includes(intake.languagePref)) return false;

  if (intake.format !== 'no-preference' && !t.formats.includes(intake.format)) return false;

  // State always matters — even online, a therapist has to be licensed
  // where the client lives. City only matters for meeting in person.
  if (intake.state && t.location.state !== intake.state) return false;
  if (intake.format === 'in-person' && intake.city.trim() && t.location.city.trim().toLowerCase() !== intake.city.trim().toLowerCase()) return false;

  if (intake.hasInsurance === 'yes' && intake.insurance !== 'any' && !t.insuranceList.includes(intake.insurance)) return false;

  // No insurance + needs a sliding scale = only show therapists who offer one.
  // "The therapist is more important" deliberately adds no payment filter.
  if (intake.hasInsurance === 'no' && intake.noInsurancePref === 'sliding-scale' && !/sliding/i.test(t.selfPayNote || '')) return false;

  const range = BUDGET_RANGES.find(r => r.label === intake.budgetRange);
  if (range && range.slidingScale && !/sliding/i.test(t.selfPayNote || '')) return false;
  if (range && !range.slidingScale && range.max != null && t.rateMin > range.max) return false;

  return true;
}

// Which therapist style aligns with each guidance preference. empathy leans
// gentle, challenge leans direct — so the soft "similar style" reason still
// fires with the four new options.
const STYLE_ALIGN = { gentle: 'gentle', empathy: 'gentle', direct: 'direct', challenge: 'direct' };

function getMatchReasons(t) {
  const reasons = [];
  const overlap = t.tags.filter(tag => intake.needs.includes(tag));
  overlap.forEach(tag => reasons.push(tag));
  if (overlap.length === 0 && intake.needs.length > 0 && t.practiceType === 'generalist') {
    reasons.push('Works with a broad range of concerns');
  }
  if (intake.modality !== 'open' && t.modalities.includes(intake.modality)) reasons.push(intake.modality);
  if (intake.format !== 'no-preference' && t.formats.includes(intake.format)) {
    reasons.push(intake.format === 'video' ? 'Video sessions' : 'In-person sessions');
  }
  if (intake.format === 'in-person' && intake.city.trim() && t.location.city.trim().toLowerCase() === intake.city.trim().toLowerCase()) {
    reasons.push(`Located in ${t.location.city}, ${t.location.state}`);
  } else if (intake.state && t.location.state === intake.state) {
    reasons.push(`Licensed in ${intake.state}`);
  }
  if (intake.hasInsurance === 'yes' && intake.insurance !== 'any' && t.insuranceList.includes(intake.insurance)) reasons.push(`Accepts ${intake.insurance}`);
  if (intake.hasInsurance === 'no' && intake.noInsurancePref === 'sliding-scale' && /sliding/i.test(t.selfPayNote || '')) reasons.push('Sliding scale available');
  if (intake.lgbtqRequired && t.identity.lgbtqAffirming) reasons.push('LGBTQ+ Affirming');
  if (intake.genderPref !== 'no-preference' && t.identity.gender === intake.genderPref) {
    reasons.push({ female: 'Female therapist', male: 'Male therapist', nonbinary: 'Nonbinary therapist' }[t.identity.gender] || 'Preferred gender');
  }
  if (intake.languagePref !== 'any' && t.languages.includes(intake.languagePref)) reasons.push(`Speaks ${intake.languagePref}`);
  if (intake.stylePref && STYLE_ALIGN[intake.stylePref] === t.style) reasons.push('Similar style to what you want');
  if (prevExperienceScore(t) >= 0.5) reasons.push('Matches what you wanted different this time');
  if (intake.ethnicityPref !== 'no-preference' && t.ethnicity === intake.ethnicityPref) reasons.push(`${t.ethnicity} therapist`);
  // Soft identity affinities — surface shared ground, don't hard-filter.
  intake.affinities.filter(a => (t.affinities || []).includes(a)).forEach(a => reasons.push(`Affirming: ${a}`));
  intake.faith.filter(f => (t.faith || []).includes(f)).forEach(f => reasons.push(f));
  if ((intake.careFor === 'couples' && t.tags.includes('Couples')) || (intake.careFor === 'family' && t.tags.includes('Family Conflict'))) {
    reasons.push(intake.careFor === 'couples' ? 'Works with couples' : 'Works with families');
  }
  return reasons;
}

function computeDeck() {
  deck = THERAPISTS.filter(t => isCompatible(t, 'ongoing'))
    .sort((a, b) => a.nextAvailableRank - b.nextAvailableRank);
  deckIndex = 0;
}

function computeOnDemandList() {
  return THERAPISTS.filter(t => isCompatible(t, 'ondemand'))
    .sort((a, b) => Math.min(...a.onDemandSlots.map(s => s.rank)) - Math.min(...b.onDemandSlots.map(s => s.rank)));
}

function loosenRequirements() {
  intake.modalityRequired = false;
  intake.genderRequired = false;
  intake.lgbtqRequired = false;
  intake.languageRequired = false;
  computeDeck();
  renderStack();
}

// ===================================================================
// INTAKE QUIZ
// ===================================================================
let intakeStep = 0;
// Keyed step order so inserting or reordering steps never means renumbering a
// pile of `intakeStep === N` checks. The 'needs' step renders either the
// clinical chips or the plain-language list depending on the knows-fork.
const INTAKE_STEPS = ['careFor', 'knows', 'needs', 'who', 'approach', 'experience', 'guidance', 'anythingElse', 'aboutYou', 'logistics'];

// Two genuinely different paths, chosen at the 'knows' step:
//   'no'  — new to therapy. Matched from SYMPTOMS in plain language. We never
//           ask them to name a modality, because that question assumes
//           vocabulary they don't have yet.
//   'yes' — been in therapy before. They get the modality picker AND a question
//           about what they want different this time, which is the most useful
//           matching signal a returning client can give us.
function activeSteps() {
  return INTAKE_STEPS.filter(k => {
    if (k === 'approach' && intake.knowsNeeds === 'no') return false;
    if (k === 'experience' && intake.knowsNeeds !== 'yes') return false;
    return true;
  });
}
const intakeContent = document.getElementById('intake-content');

function renderIntakeStep() {
  const steps = activeSteps();
  const k = steps[intakeStep];
  let html = `<div class="intake-progress">${steps.map((_, i) =>
    `<div class="dot ${i <= intakeStep ? 'done' : ''}"></div>`).join('')}</div>`;

  if (k === 'careFor') {
    html += `
      <h1>I'm looking for therapy for...</h1>
      <div class="intake-sub">This helps us line you up with the right kind of therapist from the start.</div>
      <div class="option-list" id="care-for-list">
        ${CARE_FOR_OPTIONS.map(o => `<div class="option-row ${intake.careFor === o.key ? 'selected' : ''}" data-care-for="${o.key}">${o.label}</div>`).join('')}
      </div>
      ${intake.careFor === 'child' ? `
      <div class="t-form-label">How old is the child?</div>
      <input type="text" class="t-rate-input" id="child-age-input" placeholder="e.g. 8" value="${intake.childAge}">` : ''}`;
  } else if (k === 'knows') {
    html += `
      <h1>Have you been to therapy before?</h1>
      <div class="intake-sub">There's no better answer — it just changes which questions are worth your time.</div>
      <div class="option-list" id="knows-list">
        <div class="path-card-option ${intake.knowsNeeds === 'no' ? 'selected' : ''}" data-knows="no">
          <div class="path-card-title">This is new to me</div>
          <div class="path-card-desc">We'll start with what you've actually been feeling — in plain words, no clinical terms. Kindred works out the rest.</div>
        </div>
        <div class="path-card-option ${intake.knowsNeeds === 'yes' ? 'selected' : ''}" data-knows="yes">
          <div class="path-card-title">I've done this before</div>
          <div class="path-card-desc">We'll skip the basics and ask what you're looking for directly — including the approach you want and what you'd do differently this time.</div>
        </div>
      </div>`;
  } else if (k === 'needs' && intake.knowsNeeds === 'no') {
    html += `
      <h1>What's been going on?</h1>
      <div class="intake-sub">Pick anything that sounds like you. You don't need the right words — we'll translate these into what to look for in a therapist.</div>
      <div class="option-list" id="unsure-list">
        ${UNSURE_OPTIONS.map(o => `<div class="option-row ${intake.needs.includes(o.tag) ? 'selected' : ''}" data-unsure-tag="${o.tag}">${o.label}</div>`).join('')}
      </div>`;
  } else if (k === 'needs') {
    const extraSelected = intake.needs.filter(n => !NEED_OPTIONS.includes(n));
    html += `
      <h1>What brings you to therapy right now?</h1>
      <div class="intake-sub">Pick as many as apply — this is how we find therapists who actually work with what you're dealing with.</div>
      <div class="chip-grid" id="needs-grid">
        ${NEED_OPTIONS.map(n => `<div class="chip-option ${intake.needs.includes(n) ? 'selected' : ''}" data-need="${n}">${n}</div>`).join('')}
        ${extraSelected.map(n => `<div class="chip-option selected" data-need="${n}">${n}</div>`).join('')}
        <div class="chip-option ${intake.notSure ? 'selected' : ''}" id="needs-not-sure-btn">I'm not sure</div>
        <div class="chip-option ${intake.needsOtherOpen ? 'selected' : ''}" id="needs-other-btn">${intake.needsOtherOpen ? 'Done' : '+ Other'}</div>
      </div>
      ${intake.needsOtherOpen ? `
      <div class="specialty-panel" id="specialty-panel">
        ${OTHER_SPECIALTIES.map(s => `
          <label class="specialty-row">
            <input type="checkbox" data-specialty="${s}" ${intake.needs.includes(s) ? 'checked' : ''}>
            <span>${s}</span>
          </label>`).join('')}
      </div>` : ''}`;
  } else if (k === 'who') {
    html += `
      <h1>Who do you want to work with?</h1>
      <div class="intake-sub">Preferences are optional — but we do need to know where you are, since therapists are licensed by state.</div>
      <div class="option-list" id="gender-list">
        <div class="option-row ${intake.genderPref === 'no-preference' ? 'selected' : ''}" data-gender="no-preference">No preference</div>
        <div class="option-row ${intake.genderPref === 'female' ? 'selected' : ''}" data-gender="female">Female therapist</div>
        <div class="option-row ${intake.genderPref === 'male' ? 'selected' : ''}" data-gender="male">Male therapist</div>
        <div class="option-row ${intake.genderPref === 'nonbinary' ? 'selected' : ''}" data-gender="nonbinary">Nonbinary therapist</div>
      </div>
      <div id="gender-must-have" style="${intake.genderPref === 'no-preference' ? 'display:none;' : ''}">
        <div class="must-have-toggle">
          <div class="toggle-label"><strong>Must-have</strong><span>Only show therapists matching this</span></div>
          <div class="switch ${intake.genderRequired ? 'on' : ''}" id="gender-required-switch"></div>
        </div>
      </div>
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>LGBTQ+ affirming</strong><span>Must be explicitly affirming</span></div>
        <div class="switch ${intake.lgbtqRequired ? 'on' : ''}" id="lgbtq-switch"></div>
      </div>
      <div class="t-form-label">Ethnicity</div>
      <div class="chip-grid" id="ethnicity-grid">
        <div class="chip-option ${intake.ethnicityPref === 'no-preference' ? 'selected' : ''}" data-ethnicity="no-preference">No preference</div>
        ${ETHNICITY_OPTIONS.map(e => `<div class="chip-option ${intake.ethnicityPref === e ? 'selected' : ''}" data-ethnicity="${e}">${e}</div>`).join('')}
      </div>
      <div class="t-form-label">Language</div>
      <div class="chip-grid" id="language-grid">
        ${LANGUAGE_QUICK_OPTIONS.map(l => `<div class="chip-option ${intake.languagePref === l ? 'selected' : ''}" data-language="${l}">${l}</div>`).join('')}
        ${(!LANGUAGE_QUICK_OPTIONS.includes(intake.languagePref) && intake.languagePref !== 'any') ? `<div class="chip-option selected" data-language="${intake.languagePref}">${intake.languagePref}</div>` : ''}
        <div class="chip-option" id="language-other-btn">+ Other</div>
      </div>
      ${intake.languageOtherOpen ? `<div class="other-language-row">
        <select id="language-other-select">${OTHER_LANGUAGES.map(l => `<option value="${l}" ${l === intake.languagePref ? 'selected' : ''}>${l}</option>`).join('')}</select>
      </div>` : ''}
      <div id="language-must-have" style="${intake.languagePref === 'any' ? 'display:none;' : ''}">
        <div class="must-have-toggle">
          <div class="toggle-label"><strong>Must-have</strong><span>Only show therapists who speak this language</span></div>
          <div class="switch ${intake.languageRequired ? 'on' : ''}" id="language-required-switch"></div>
        </div>
      </div>
      <div class="t-form-label">How do you want to meet?</div>
      <div class="option-list" id="format-list">
        <div class="option-row ${intake.format === 'no-preference' ? 'selected' : ''}" data-format="no-preference">Either works</div>
        <div class="option-row ${intake.format === 'video' ? 'selected' : ''}" data-format="video">Online (video)</div>
        <div class="option-row ${intake.format === 'in-person' ? 'selected' : ''}" data-format="in-person">In-person</div>
      </div>
      <div class="t-form-label">When can you usually meet?</div>
      <div class="chip-grid" id="availability-grid">
        ${AVAILABILITY_OPTIONS.map(a => `<div class="chip-option ${intake.availability.includes(a) ? 'selected' : ''}" data-availability="${a}">${a}</div>`).join('')}
      </div>
      <div class="t-form-label">Your state</div>
      <select id="intake-state">
        <option value="">Select a state</option>
        ${US_STATES.map(s => `<option value="${s}" ${intake.state === s ? 'selected' : ''}>${s}</option>`).join('')}
      </select>
      <div id="location-fields" style="${intake.format === 'in-person' ? '' : 'display:none;'}">
        <div class="t-form-label">Your city</div>
        <input type="text" class="t-rate-input" id="intake-city" placeholder="e.g. Austin" value="${intake.city}">
      </div>
      <div class="intake-sub" style="margin-top:6px;">${intake.format === 'in-person' ? 'In-person only works with a therapist actually located near you.' : 'Even online, your therapist has to be licensed in your state.'}</div>`;
  } else if (k === 'approach') {
    const modalityExtra = (intake.modality !== 'open' && !MODALITY_QUICK.includes(intake.modality)) ? intake.modality : null;
    html += `
      <h1>Any type of therapy in mind?</h1>
      <div class="intake-sub">Optional — if you're not sure, "Open to anything" is a great answer. Tap the ? to learn what each one is.</div>
      <div class="chip-grid" id="modality-grid">
        <div class="chip-option ${intake.modality === 'open' ? 'selected' : ''}" data-modality="open">Open to anything</div>
        ${MODALITY_QUICK.map(m => `<div class="chip-option ${intake.modality === m ? 'selected' : ''}" data-modality="${m}">${m}${MODALITY_INFO[m] ? ` <span class="info-btn" data-info="${m}">?</span>` : ''}</div>`).join('')}
        ${modalityExtra ? `<div class="chip-option selected" data-modality="${modalityExtra}">${modalityExtra}</div>` : ''}
        <div class="chip-option ${intake.modalityOtherOpen ? 'selected' : ''}" id="modality-other-btn">+ Other</div>
      </div>
      ${intake.modalityOtherOpen ? `<div class="other-language-row">
        <select id="modality-other-select">${OTHER_MODALITIES.map(m => `<option value="${m}" ${m === intake.modality ? 'selected' : ''}>${m}</option>`).join('')}</select>
      </div>` : ''}
      <div id="modality-must-have" style="${intake.modality === 'open' ? 'display:none;' : ''}">
        <div class="must-have-toggle">
          <div class="toggle-label"><strong>Must-have</strong><span>Only show therapists who offer this</span></div>
          <div class="switch ${intake.modalityRequired ? 'on' : ''}" id="modality-required-switch"></div>
        </div>
      </div>`;
  } else if (k === 'experience') {
    html += `
      <h1>What would you change about last time?</h1>
      <div class="intake-sub">You've been here before, so you know what works for you. This is the most useful thing you can tell us — all optional.</div>
      <div class="chip-grid" id="prev-experience-grid">
        ${PREV_EXPERIENCE_OPTIONS.map(o => `<div class="chip-option ${intake.prevExperience.includes(o) ? 'selected' : ''}" data-prev-exp="${o}">${o}</div>`).join('')}
      </div>
      <div class="match-tag-label">Anything they should know?</div>
      <textarea class="intake-textarea" id="prev-notes-input" rows="3" placeholder="e.g. I've done CBT for anxiety and want to go deeper into why it started.">${intake.prevNotes || ''}</textarea>`;
  } else if (k === 'guidance') {
    html += `
      <h1>What kind of guidance do you want?</h1>
      <div class="intake-sub">There's no wrong answer — this just helps us show you therapists whose style tends to match.</div>
      <div class="option-list" id="style-list">
        <div class="option-row ${intake.stylePref === 'gentle' ? 'selected' : ''}" data-style="gentle">Mostly listens and reflects back</div>
        <div class="option-row ${intake.stylePref === 'direct' ? 'selected' : ''}" data-style="direct">Direct — tells me like it is</div>
        <div class="option-row ${intake.stylePref === 'empathy' ? 'selected' : ''}" data-style="empathy">I'm needing more empathy and understanding</div>
        <div class="option-row ${intake.stylePref === 'challenge' ? 'selected' : ''}" data-style="challenge">I'm needing to be challenged and pushed</div>
      </div>`;
  } else if (k === 'anythingElse') {
    html += `
      <h1>Anything else that matters?</h1>
      <div class="intake-sub">All optional — pick anything that would help you feel understood, and we'll surface therapists who share it.</div>
      <div class="t-form-label">Gender &amp; sexuality</div>
      <div class="chip-grid" id="affinities-grid">
        ${GENDER_SEXUALITY_OPTIONS.map(o => `<div class="chip-option ${intake.affinities.includes(o) ? 'selected' : ''}" data-affinity="${o}">${o}</div>`).join('')}
      </div>
      <div class="t-form-label">Faith</div>
      <div class="chip-grid" id="faith-grid">
        ${FAITH_OPTIONS.map(o => `<div class="chip-option ${intake.faith.includes(o) ? 'selected' : ''}" data-faith="${o}">${o}</div>`).join('')}
      </div>`;
  } else if (k === 'aboutYou') {
    html += `
      <h1>A little about you</h1>
      <div class="intake-sub">Some therapists work especially closely with certain groups. This helps us spot those matches for you — all of it is optional, and skipping never limits who you can see.</div>
      <div class="match-tag-label" style="margin-top:0;">Your age</div>
      <div class="chip-grid" id="age-band-grid">
        ${CLIENT_AGE_BANDS.map(a => `<div class="chip-option ${intake.ageBand === a ? 'selected' : ''}" data-age-band="${a}">${a}</div>`).join('')}
      </div>
      <div class="match-tag-label">Your gender</div>
      <div class="chip-grid" id="self-gender-grid">
        ${CLIENT_GENDER_OPTIONS.map(g => `<div class="chip-option ${intake.selfGender === g ? 'selected' : ''}" data-self-gender="${g}">${g}</div>`).join('')}
      </div>
      <div class="match-tag-label">What you do</div>
      <div class="chip-grid" id="field-grid">
        ${CLIENT_FIELD_OPTIONS.map(f => `<div class="chip-option ${intake.field === f ? 'selected' : ''}" data-field="${f}">${f}</div>`).join('')}
      </div>`;
  } else if (k === 'logistics') {
    html += `
      <h1>A few logistics</h1>
      <div class="intake-sub">Last step — how you'll pay for sessions.</div>
      <div class="match-tag-label" style="margin-top:0;">Do you have insurance?</div>
      <div class="option-list" id="has-insurance-list">
        <div class="option-row ${intake.hasInsurance === 'yes' ? 'selected' : ''}" data-has-insurance="yes">Yes</div>
        <div class="option-row ${intake.hasInsurance === 'no' ? 'selected' : ''}" data-has-insurance="no">No</div>
      </div>
      ${intake.hasInsurance === 'yes' ? `
      <div class="match-tag-label">Which insurance?</div>
      <div class="chip-grid" id="insurance-grid">
        ${INSURANCE_OPTIONS.map(i => `<div class="chip-option ${intake.insurance === i ? 'selected' : ''}" data-insurance="${i}">${i}</div>`).join('')}
        ${(!INSURANCE_OPTIONS.includes(intake.insurance) && intake.insurance !== 'any') ? `<div class="chip-option selected" data-insurance="${intake.insurance}">${intake.insurance}</div>` : ''}
        <div class="chip-option" id="insurance-other-btn">+ Other</div>
      </div>
      ${intake.insuranceOtherOpen ? `<div class="other-language-row">
        <select id="insurance-other-select">${OTHER_INSURANCES.map(i => `<option value="${i}" ${i === intake.insurance ? 'selected' : ''}>${i}</option>`).join('')}</select>
      </div>` : ''}` : ''}
      ${intake.hasInsurance === 'no' ? `
      <div class="match-tag-label">No problem — which sounds more like you?</div>
      <div class="option-list" id="no-insurance-list">
        <div class="option-row ${intake.noInsurancePref === 'sliding-scale' ? 'selected' : ''}" data-no-insurance="sliding-scale">I'm in need of a sliding scale</div>
        <div class="option-row ${intake.noInsurancePref === 'therapist-first' ? 'selected' : ''}" data-no-insurance="therapist-first">The therapist is more important to me</div>
      </div>` : ''}
      <div class="match-tag-label">Budget range for session</div>
      <div class="chip-grid" id="budget-range-grid">
        ${BUDGET_RANGES.map(r => `<div class="chip-option ${intake.budgetRange === r.label ? 'selected' : ''}" data-budget-range="${r.label}">${r.label}</div>`).join('')}
      </div>`;
  }

  let canProceed = true;
  if (k === 'careFor') canProceed = intake.careFor !== null && (intake.careFor !== 'child' || intake.childAge.trim() !== '');
  else if (k === 'knows') canProceed = intake.knowsNeeds !== null;
  else if (k === 'needs' && intake.knowsNeeds === 'yes') canProceed = intake.needs.length > 0 || intake.notSure;
  // The "not sure" path never blocks on a minimum selection. On the who step:
  // state is always required (therapists are licensed by state), city only for
  // in-person, and a language must now be chosen — there's no "no preference".
  else if (k === 'who') canProceed = intake.state !== '' && (intake.format !== 'in-person' || intake.city.trim() !== '') && intake.languagePref !== 'any';
  else if (k === 'logistics') canProceed = intake.hasInsurance === 'yes' ? intake.insurance !== 'any'
    : intake.hasInsurance === 'no' ? intake.noInsurancePref !== null
    : false;
  html += `
    <div class="intake-footer">
      ${intakeStep > 0 ? `<button class="btn-back" id="intake-back">Back</button>` : ''}
      <button class="btn-next" id="intake-next" ${canProceed ? '' : 'disabled'}>${intakeStep === activeSteps().length - 1 ? 'See My Matches' : 'Continue'}</button>
    </div>`;

  intakeContent.innerHTML = html;
  attachIntakeHandlers();
}

function attachIntakeHandlers() {
  document.querySelectorAll('#care-for-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.careFor = el.dataset.careFor; renderIntakeStep(); });
  });
  const childAgeInput = document.getElementById('child-age-input');
  if (childAgeInput) childAgeInput.addEventListener('input', () => {
    intake.childAge = childAgeInput.value;
    document.getElementById('intake-next').disabled = intake.childAge.trim() === '';
  });

  document.querySelectorAll('#knows-list [data-knows]').forEach(el => {
    el.addEventListener('click', () => { intake.knowsNeeds = el.dataset.knows; renderIntakeStep(); });
  });

  document.querySelectorAll('#needs-grid .chip-option[data-need]').forEach(el => {
    el.addEventListener('click', () => {
      const need = el.dataset.need;
      const i = intake.needs.indexOf(need);
      if (i === -1) intake.needs.push(need); else intake.needs.splice(i, 1);
      renderIntakeStep();
    });
  });
  const notSureBtn = document.getElementById('needs-not-sure-btn');
  if (notSureBtn) notSureBtn.addEventListener('click', () => { intake.notSure = !intake.notSure; renderIntakeStep(); });
  const needsOtherBtn = document.getElementById('needs-other-btn');
  if (needsOtherBtn) needsOtherBtn.addEventListener('click', () => { intake.needsOtherOpen = !intake.needsOtherOpen; renderIntakeStep(); });
  // Checkbox toggles update state and the Continue button directly, without
  // a full re-render — re-rendering would reset the panel's scroll position
  // on every tick in a ~90-item list.
  document.querySelectorAll('#specialty-panel [data-specialty]').forEach(cb => {
    cb.addEventListener('change', () => {
      const s = cb.dataset.specialty;
      const i = intake.needs.indexOf(s);
      if (cb.checked && i === -1) intake.needs.push(s);
      if (!cb.checked && i !== -1) intake.needs.splice(i, 1);
      document.getElementById('intake-next').disabled = !(intake.needs.length > 0 || intake.notSure);
    });
  });

  document.querySelectorAll('#unsure-list .option-row').forEach(el => {
    el.addEventListener('click', () => {
      const tag = el.dataset.unsureTag;
      const i = intake.needs.indexOf(tag);
      if (i === -1) intake.needs.push(tag); else intake.needs.splice(i, 1);
      renderIntakeStep();
    });
  });

  document.querySelectorAll('#modality-grid .chip-option[data-modality]').forEach(el => {
    el.addEventListener('click', () => {
      intake.modality = el.dataset.modality;
      intake.modalityOtherOpen = false;
      if (intake.modality === 'open') intake.modalityRequired = false;
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#modality-grid .info-btn').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); openModalityInfo(el.dataset.info); });
  });
  const modalityOtherBtn = document.getElementById('modality-other-btn');
  if (modalityOtherBtn) modalityOtherBtn.addEventListener('click', () => { intake.modalityOtherOpen = true; renderIntakeStep(); });
  const modalityOtherSelect = document.getElementById('modality-other-select');
  if (modalityOtherSelect) modalityOtherSelect.addEventListener('change', () => { intake.modality = modalityOtherSelect.value; renderIntakeStep(); });
  const modReqSwitch = document.getElementById('modality-required-switch');
  if (modReqSwitch) modReqSwitch.addEventListener('click', () => { intake.modalityRequired = !intake.modalityRequired; renderIntakeStep(); });

  document.querySelectorAll('#style-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.stylePref = el.dataset.style; renderIntakeStep(); });
  });

  document.querySelectorAll('#gender-list .option-row').forEach(el => {
    el.addEventListener('click', () => {
      intake.genderPref = el.dataset.gender;
      if (intake.genderPref === 'no-preference') intake.genderRequired = false;
      renderIntakeStep();
    });
  });
  const genderReqSwitch = document.getElementById('gender-required-switch');
  if (genderReqSwitch) genderReqSwitch.addEventListener('click', () => { intake.genderRequired = !intake.genderRequired; renderIntakeStep(); });
  const lgbtqSwitch = document.getElementById('lgbtq-switch');
  if (lgbtqSwitch) lgbtqSwitch.addEventListener('click', () => { intake.lgbtqRequired = !intake.lgbtqRequired; renderIntakeStep(); });
  document.querySelectorAll('#ethnicity-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => { intake.ethnicityPref = el.dataset.ethnicity; renderIntakeStep(); });
  });

  document.querySelectorAll('#language-grid [data-language]').forEach(el => {
    el.addEventListener('click', () => {
      intake.languagePref = el.dataset.language;
      intake.languageOtherOpen = false;
      if (intake.languagePref === 'any') intake.languageRequired = false;
      renderIntakeStep();
    });
  });
  const languageOtherBtn = document.getElementById('language-other-btn');
  if (languageOtherBtn) languageOtherBtn.addEventListener('click', () => { intake.languageOtherOpen = true; renderIntakeStep(); });
  const languageOtherSelect = document.getElementById('language-other-select');
  if (languageOtherSelect) languageOtherSelect.addEventListener('change', () => { intake.languagePref = languageOtherSelect.value; renderIntakeStep(); });
  const languageReqSwitch = document.getElementById('language-required-switch');
  if (languageReqSwitch) languageReqSwitch.addEventListener('click', () => { intake.languageRequired = !intake.languageRequired; renderIntakeStep(); });

  document.querySelectorAll('#format-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.format = el.dataset.format; renderIntakeStep(); });
  });
  document.querySelectorAll('#availability-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const a = el.dataset.availability;
      const has = intake.availability.includes(a);
      // "Anytime" is exclusive — it and the specific windows can't coexist.
      if (a === 'Anytime') intake.availability = has ? [] : ['Anytime'];
      else {
        intake.availability = intake.availability.filter(x => x !== 'Anytime');
        if (has) intake.availability = intake.availability.filter(x => x !== a);
        else intake.availability.push(a);
      }
      renderIntakeStep();
    });
  });
  const intakeCityInput = document.getElementById('intake-city');
  if (intakeCityInput) intakeCityInput.addEventListener('input', () => {
    intake.city = intakeCityInput.value;
    document.getElementById('intake-next').disabled = !(intake.city.trim() && intake.state && intake.languagePref !== 'any');
  });
  document.querySelectorAll('#affinities-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const a = el.dataset.affinity;
      const i = intake.affinities.indexOf(a);
      if (i === -1) intake.affinities.push(a); else intake.affinities.splice(i, 1);
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#faith-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const f = el.dataset.faith;
      const i = intake.faith.indexOf(f);
      if (i === -1) intake.faith.push(f); else intake.faith.splice(i, 1);
      renderIntakeStep();
    });
  });
  const intakeStateSelect = document.getElementById('intake-state');
  if (intakeStateSelect) intakeStateSelect.addEventListener('change', () => { intake.state = intakeStateSelect.value; renderIntakeStep(); });
  document.querySelectorAll('#has-insurance-list .option-row').forEach(el => {
    el.addEventListener('click', () => {
      intake.hasInsurance = el.dataset.hasInsurance;
      // switching branches clears the other branch's answer
      if (intake.hasInsurance === 'yes') intake.noInsurancePref = null; else { intake.insurance = 'any'; intake.insuranceOtherOpen = false; }
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#insurance-grid .chip-option[data-insurance]').forEach(el => {
    el.addEventListener('click', () => { intake.insurance = el.dataset.insurance; intake.insuranceOtherOpen = false; renderIntakeStep(); });
  });
  // "About you" — single-select each, and tapping the selected chip clears it
  // again, because every one of these is optional.
  document.querySelectorAll('#prev-experience-grid [data-prev-exp]').forEach(el => {
    el.addEventListener('click', () => {
      const v = el.dataset.prevExp;
      const i = intake.prevExperience.indexOf(v);
      if (i === -1) intake.prevExperience.push(v); else intake.prevExperience.splice(i, 1);
      renderIntakeStep();
    });
  });
  const prevNotes = document.getElementById('prev-notes-input');
  if (prevNotes) prevNotes.addEventListener('input', () => { intake.prevNotes = prevNotes.value; });
  document.querySelectorAll('#age-band-grid .chip-option[data-age-band]').forEach(el => {
    el.addEventListener('click', () => {
      intake.ageBand = intake.ageBand === el.dataset.ageBand ? null : el.dataset.ageBand;
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#self-gender-grid .chip-option[data-self-gender]').forEach(el => {
    el.addEventListener('click', () => {
      intake.selfGender = intake.selfGender === el.dataset.selfGender ? null : el.dataset.selfGender;
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#field-grid .chip-option[data-field]').forEach(el => {
    el.addEventListener('click', () => {
      intake.field = intake.field === el.dataset.field ? null : el.dataset.field;
      renderIntakeStep();
    });
  });
  const insuranceOtherBtn = document.getElementById('insurance-other-btn');
  if (insuranceOtherBtn) insuranceOtherBtn.addEventListener('click', () => { intake.insuranceOtherOpen = true; renderIntakeStep(); });
  const insuranceOtherSelect = document.getElementById('insurance-other-select');
  if (insuranceOtherSelect) insuranceOtherSelect.addEventListener('change', () => { intake.insurance = insuranceOtherSelect.value; renderIntakeStep(); });
  document.querySelectorAll('#no-insurance-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.noInsurancePref = el.dataset.noInsurance; renderIntakeStep(); });
  });
  document.querySelectorAll('#budget-range-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => { intake.budgetRange = el.dataset.budgetRange; renderIntakeStep(); });
  });

  const backBtn = document.getElementById('intake-back');
  if (backBtn) backBtn.addEventListener('click', () => { intakeStep--; renderIntakeStep(); });

  document.getElementById('intake-next').addEventListener('click', () => {
    if (intakeStep < activeSteps().length - 1) {
      intakeStep++;
      renderIntakeStep();
    } else {
      finishIntake();
    }
  });
}

function finishIntake() {
  intake.completed = true;
  computeDeck();
  document.getElementById('bottom-nav').classList.remove('hidden');
  renderStack();
  renderMatches();
  showScreen('discover');
}

function startIntake() {
  intakeStep = 0;
  document.getElementById('bottom-nav').classList.add('hidden');
  renderIntakeStep();
  showScreen('intake');
}

// ===================================================================
// DISCOVER / CARD STACK
// ===================================================================
function renderStack() {
  cardStack.innerHTML = '';

  if (deck.length === 0) {
    cardStack.innerHTML = `<div class="empty-pool">
      No therapists match everything you asked for right now.<br><br>
      Try loosening a must-have requirement to see more options.
      <button class="loosen-btn" id="loosen-btn">Loosen my requirements</button>
    </div>`;
    const btn = document.getElementById('loosen-btn');
    if (btn) btn.addEventListener('click', loosenRequirements);
    return;
  }

  const visible = deck.slice(deckIndex, deckIndex + 3);
  if (visible.length === 0) {
    cardStack.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;color:var(--ink-soft);padding:0 20px;font-size:14px;">
      You've seen everyone in your matched pool for now.<br><br>Check back soon, or check the On-Demand tab for a sooner option.
    </div>`;
    return;
  }
  // Append back-to-front so the current therapist (visible[0]) ends up as
  // lastElementChild — that's what drag/button handlers treat as "the top card".
  const appendOrder = visible.slice().reverse();
  appendOrder.forEach((t, idx) => {
    const depthFromFront = appendOrder.length - 1 - idx; // 0 = current/front card
    const el = buildCard(t);
    el.style.zIndex = 10 + idx;
    el.style.top = `${depthFromFront * 12}px`;
    el.style.left = `${depthFromFront * 8}px`;
    el.style.right = `${depthFromFront * 8}px`;
    el.style.bottom = '0';
    cardStack.appendChild(el);
  });
  const topCard = cardStack.lastElementChild;
  if (topCard) makeDraggable(topCard);
}

function matchTagsHtml(t) {
  const reasons = getMatchReasons(t);
  if (reasons.length === 0) return '';
  return `<div class="match-tag-label">Matched on</div>
    <div class="match-tag-row">${reasons.map(r => `<span class="match-tag">${r}</span>`).join('')}</div>`;
}

function practiceBadgeHtml(t) {
  return t.practiceType === 'generalist' ? `<div class="practice-badge">🌐 General Practice</div>` : '';
}

function displayName(t) {
  return (t.useCompanyName && t.companyName) ? t.companyName : t.name;
}

function avatarHtml(t, sizeClass) {
  return t.photo
    ? `<div class="${sizeClass} photo" style="background-image:url('${t.photo}')"></div>`
    : `<div class="${sizeClass}" style="background:${t.gradient}">${t.initials}</div>`;
}

// A percentage of how directly the client's own stated preferences line up
// with this therapist — never reviews or ratings, and no invented number:
// if the client expressed no preferences at all, this returns null and the
// badge renders without a percent.

// ===== "WHAT WOULD YOU CHANGE?" BOOSTS (experienced-client path) =====
// A returning client telling us what didn't work last time is the strongest
// signal they can give. Like the ideal-client match, these ONLY ever add — a
// therapist is never pushed down for failing to line up, so nobody is filtered
// out of a pool they'd otherwise belong in.
const PREV_EXPERIENCE_SIGNALS = {
  'More direct feedback':            { style: 'direct' },
  'Someone who challenges me':       { style: 'direct' },
  'More structure and homework':     { style: 'direct', modalities: ['CBT', 'DBT', 'ERP', 'ACT'] },
  'Less structure, more space to talk': { style: 'gentle', modalities: ['IFS', 'Psychodynamic', 'Person-Centered'] },
  'Someone gentler':                 { style: 'gentle' },
  'Better at handling trauma':       { tags: ['Trauma', 'PTSD'], modalities: ['EMDR', 'Somatic', 'IFS'] },
  'Someone who shares my identity':  { identity: true }
  // 'A different approach entirely' and 'Nothing — it worked, I moved' carry no
  // directional signal, so they intentionally score nothing.
};

// 0..1 — how well a therapist answers what this client wants done differently.
function prevExperienceScore(t) {
  const picks = (intake.prevExperience || []).filter(p => PREV_EXPERIENCE_SIGNALS[p]);
  if (!picks.length) return 0;
  let earned = 0;
  picks.forEach(p => {
    const sig = PREV_EXPERIENCE_SIGNALS[p];
    let hit = false;
    if (sig.style && t.style === sig.style) hit = true;
    if (!hit && sig.modalities && (t.modalities || []).some(m => sig.modalities.includes(m))) hit = true;
    if (!hit && sig.tags && (t.tags || []).some(x => sig.tags.includes(x))) hit = true;
    if (!hit && sig.identity) {
      // "shares my identity" amplifies whatever identity preferences they set
      const idHits = [
        intake.genderPref !== 'no-preference' && (t.identity || {}).gender === intake.genderPref,
        intake.ethnicityPref !== 'no-preference' && t.ethnicity === intake.ethnicityPref,
        (intake.affinities || []).some(a => (t.affinities || []).includes(a)),
        (intake.faith || []).some(f => (t.faith || []).includes(f))
      ];
      if (idHits.some(Boolean)) hit = true;
    }
    if (hit) earned++;
  });
  return earned / picks.length;
}

// ===== IDEAL-CLIENT MATCHING =====
// A therapist privately describes the client they're the strongest fit for. This
// is NEVER shown to a client and NEVER filters anyone out of anything — a client
// who isn't a "unicorn" still matches normally on the regular criteria. All it
// does is (a) nudge ranking up and (b) earn a sparkle on the THERAPIST's own
// request list so they can spot the clients they're best suited to.
function idealMatchResult(t) {
  const blank = { stated: false, isIdeal: false, score: 0, reasons: [] };
  const ic = t.idealClient;
  if (!ic) return blank;

  const dims = IDEAL_DIMENSIONS.filter(d => (ic[d.key] || []).length > 0);
  const hasPractical = ic.payment !== 'Either' || (ic.availability || []).length > 0;
  if (!dims.length && !hasPractical) return blank;      // no ideal stated

  // PRACTICAL CONSTRAINTS ARE FILTERS (for the ideal flag only). If they can't
  // realistically work together, it isn't an ideal match however well they fit.
  if (ic.payment === 'Cash pay' && intake.hasInsurance === 'yes') return { ...blank, stated: true };
  if (ic.payment === 'Insurance' && intake.hasInsurance === 'no') return { ...blank, stated: true };
  const icAvail = ic.availability || [];
  if (icAvail.length && intake.availability.length &&
      !intake.availability.includes('Anytime') && !icAvail.includes('Anytime') &&
      !icAvail.some(a => intake.availability.includes(a))) return { ...blank, stated: true };

  // IDEAL FIT IS A BOOST. Must-haves simply weigh double — never a gate.
  const clientValue = {
    ageBands:  intake.ageBand ? [intake.ageBand] : [],
    genders:   intake.selfGender ? [intake.selfGender] : [],
    fields:    intake.field ? [intake.field] : [],
    needs:     intake.needs || [],
    modalities: (intake.modality && intake.modality !== 'open') ? [intake.modality] : []
  };
  let earned = 0, possible = 0;
  const reasons = [];
  dims.forEach(d => {
    const weight = (ic.mustHaves || []).includes(d.key) ? 2 : 1;
    possible += weight;
    if ((clientValue[d.key] || []).some(v => ic[d.key].includes(v))) {
      earned += weight;
      reasons.push(d.label);
    }
  });
  const score = possible ? earned / possible : 0;
  return { stated: true, isIdeal: possible > 0 && score >= IDEAL_MATCH_THRESHOLD, score, reasons };
}

function matchPercent(t) {
  let earned = 0, possible = 0;
  if (intake.needs.length) {
    possible += 40;
    const overlap = t.tags.filter(tag => intake.needs.includes(tag)).length;
    if (overlap) earned += Math.min(40, 24 + overlap * 8);
    else if (t.practiceType === 'generalist') earned += 22;
  }
  const prefs = [
    [intake.modality !== 'open', t.modalities.includes(intake.modality)],
    [!!intake.stylePref, STYLE_ALIGN[intake.stylePref] === t.style],
    [intake.genderPref !== 'no-preference', t.identity.gender === intake.genderPref],
    [intake.ethnicityPref !== 'no-preference', t.ethnicity === intake.ethnicityPref],
    [intake.lgbtqRequired, t.identity.lgbtqAffirming],
    [intake.affinities.length > 0, intake.affinities.some(a => (t.affinities || []).includes(a))],
    [intake.faith.length > 0, intake.faith.some(f => (t.faith || []).includes(f))],
    [intake.languagePref !== 'any', t.languages.includes(intake.languagePref)],
    [intake.format !== 'no-preference', t.formats.includes(intake.format)],
    [intake.hasInsurance === 'yes' && intake.insurance !== 'any', t.insuranceList.includes(intake.insurance)]
  ];
  prefs.forEach(([applies, ok]) => { if (applies) { possible += 10; if (ok) earned += 10; } });
  if (!possible) return null;
  // Lining up with a therapist's private ideal only ever ADDS — it can't push a
  // score down, so a client is never penalised for not being their unicorn.
  const idealBoost = Math.round(idealMatchResult(t).score * 6);
  const prevBoost = Math.round(prevExperienceScore(t) * 5);
  return Math.min(98, Math.round(62 + (earned / possible) * 36) + idealBoost + prevBoost);
}

function matchBadgeHtml(t) {
  const pct = matchPercent(t);
  return `<div class="match-pct-badge">${pct !== null ? `${pct}% ` : ''}Kindred Match</div>`;
}

const LEAF_SVG = `<svg width="11" height="11" viewBox="0 0 11 11"><path d="M1.5 9.5C1.5 4.5 4.5 1.5 9.5 1.5C9.5 6.5 6.5 9.5 1.5 9.5Z" fill="currentColor"/></svg>`;

function traitChipsHtml(t) {
  const styleTraits = {
    direct: ['Direct', 'Goal-oriented'],
    gentle: ['Warm', 'Patient'],
    balanced: ['Warm', 'Collaborative']
  }[t.style] || [];
  const traits = [...styleTraits];
  if (t.identity.lgbtqAffirming) traits.push('LGBTQ+ Affirming');
  if (!traits.length) return '';
  return `<div class="trait-chip-row">${traits.map((tr, i) => `<span class="trait-chip tc-${i % 3}">${LEAF_SVG} ${tr}</span>`).join('')}</div>`;
}

function credentialsLabel(t) {
  const filled = t.credentials.filter(Boolean);
  return filled.length ? filled.join(' • ') : 'Licensed Therapist';
}

function insuranceDisplayLabel(t, opts = {}) {
  if (!opts.preview && intake.hasInsurance === 'yes' && intake.insurance !== 'any') return `Accepts ${intake.insurance}`;
  if (t.insuranceList.length) return `Accepts ${t.insuranceList.join(', ')}`;
  return t.selfPayNote || 'Self-pay';
}

// True when this therapist is one of the client's active Top 5 (requested,
// pending or matched) — drives the star badge the SME liked.
function isInTop5(t) {
  return matches.some(m => m.therapist.id === t.id && (m.status === 'pending' || m.status === 'matched'));
}

// Hinge-style compact fact row for the detail view — icon + short label,
// wrapping, instead of stacked meta lines.
function detailFactsHtml(t, opts = {}) {
  const fmtIcon = t.formats.length === 2 ? '🎥' : t.formats.includes('video') ? '🎥' : '🏠';
  const facts = [
    ['📍', `${t.location.city}, ${t.location.state}`],
    [fmtIcon, t.meta[0]],
    ['💵', (t.meta[1] || '').replace('/session', '')],
    ['🛡️', insuranceDisplayLabel(t, opts)]
  ];
  if (t.website) facts.push(['🌐', `<a class="website-link" href="https://${t.website}" target="_blank" rel="noopener">${t.website}</a>`]);
  return `<div class="detail-facts">${facts.filter(f => f[1]).map(([ic, txt]) => `<span class="fact"><span class="fact-ic">${ic}</span>${txt}</span>`).join('')}</div>`;
}

// Only surfaced when it's actually the reason this therapist is showing up —
// a client who didn't ask for a specific language shouldn't see one at all.
function languageBadgeHtml(t) {
  if (intake.languagePref === 'any' || intake.languagePref === 'English') return '';
  if (!t.languages.includes(intake.languagePref)) return '';
  return `<div class="language-badge">🗣️ I speak ${intake.languagePref}</div>`;
}

function tagHtml(tag) {
  return MODALITY_INFO[tag]
    ? `<span class="tag tag-clickable" data-info="${tag}">${tag} <span class="info-icon">?</span></span>`
    : `<span class="tag">${tag}</span>`;
}

function promptCardHtml(q, a) {
  return `
    <div class="prompt-block">
      <div class="prompt-q">${q}</div>
      <div class="prompt-a">${a || "I'm still writing this one — check back soon."}</div>
    </div>`;
}

function feedPhotoHtml(src, caption) {
  return `
    <figure class="feed-media">
      <img class="prompt-photo" src="${src}" alt="" loading="lazy">
      ${caption ? `<figcaption class="feed-caption">${caption}</figcaption>` : ''}
    </figure>`;
}

// The Hinge-style scrollable profile: prompts and media interleaved so the
// person comes through, not just the credentials. Same feed on the swipe
// card (scroll down) and the full detail view.
function profileFeedHtml(t) {
  const firstName = displayName(t).replace(/^Dr\.?\s*/i, '').split(' ')[0];
  const blocks = [];
  if (t.media && t.media.video) {
    blocks.push(`
      <div class="feed-media feed-video">
        <video src="${t.media.video}" controls preload="metadata" playsinline></video>
        <div class="feed-caption">A quick hello from ${firstName}</div>
      </div>`);
  }
  blocks.push(promptCardHtml(MANDATORY_PROMPTS[0], t.mandatoryPromptAnswers && t.mandatoryPromptAnswers[0]));
  if (t.media && t.media.office) blocks.push(feedPhotoHtml(t.media.office, 'My office — where we meet'));
  blocks.push(promptCardHtml(MANDATORY_PROMPTS[1], t.mandatoryPromptAnswers && t.mandatoryPromptAnswers[1]));
  if (t.persona && t.persona.inOffice) blocks.push(promptCardHtml('Who I am in the office...', t.persona.inOffice));
  if (t.media && t.media.outOfOffice) blocks.push(feedPhotoHtml(t.media.outOfOffice, 'Out of office'));
  if (t.persona && t.persona.outOfOffice) blocks.push(promptCardHtml('Who I am out of the office...', t.persona.outOfOffice));
  (t.optionalPrompts || []).forEach(p => {
    blocks.push(promptCardHtml(p.question, p.answer));
    if (p.photo) blocks.push(feedPhotoHtml(p.photo));
  });
  return blocks.join('');
}

function whyYouMatchHtml(t) {
  const reasons = getMatchReasons(t);
  if (!reasons.length) return '';
  return `
    <div class="why-match-label">Why you match</div>
    <ul class="why-match-list">${reasons.map(r => `<li>${r}</li>`).join('')}</ul>
  `;
}

function capabilityRowHtml(t) {
  const acceptingLabel = t.acceptingOngoing ? 'Accepting new clients' : 'Not accepting new clients';
  return `
    <div class="capability-row">
      <div class="capability-item"><span class="cap-icon">🎥</span>${t.meta[0]}</div>
      <div class="capability-item"><span class="cap-icon">🌿</span>${acceptingLabel}</div>
      <div class="capability-item"><span class="cap-icon">🕐</span>${t.nextAvailableLabel}</div>
    </div>
  `;
}

function buildCard(t) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="card-photo" style="background:${t.gradient}">
      ${t.photo ? `<img class="card-photo-img" src="${t.photo}" alt="">` : `<div class="initials">${t.initials}</div>`}
      <div class="stamp like">Like</div>
      <div class="stamp pass">Pass</div>
      ${matchBadgeHtml(t)}
      ${languageBadgeHtml(t)}
    </div>
    <div class="card-body">
      <div class="card-name-row"><h2 class="serif-name">${displayName(t)}</h2>${isInTop5(t) ? `<span class="top5-chip" title="In your Top 5">★</span>` : ''}${t.licenseVerified ? `<span class="verified-chip" title="License verified via Stripe Identity">✓ Verified</span>` : ''}</div>
      ${(t.showPronouns && t.pronouns) ? `<div class="pronouns-label">${t.pronouns}</div>` : ''}
      <div class="card-subtitle">${[credentialsLabel(t), ...t.tags.slice(0, 2)].join(' • ')}</div>
      ${traitChipsHtml(t)}
      ${t.bestFor ? `<div class="quote-block">${t.bestFor}</div>` : ''}
      ${whyYouMatchHtml(t)}
      ${capabilityRowHtml(t)}
      <div class="feed-divider">Keep scrolling — get to know ${displayName(t).replace(/^Dr\.?\s*/i, '').split(' ')[0]}</div>
      ${profileFeedHtml(t)}
    </div>
  `;
  card.querySelectorAll('[data-info]').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); openModalityInfo(el.dataset.info); });
  });
  card.addEventListener('click', (e) => {
    if (card.dataset.dragged === 'true') { card.dataset.dragged = 'false'; return; }
    openDetail(t);
  });
  return card;
}

function makeDraggable(card) {
  let startX = 0, startY = 0, curX = 0, curY = 0, dragging = false;

  const likeStamp = card.querySelector('.stamp.like');
  const passStamp = card.querySelector('.stamp.pass');

  function down(x, y) {
    dragging = true;
    startX = x; startY = y;
    card.classList.add('dragging');
  }
  function move(x, y) {
    if (!dragging) return;
    curX = x - startX;
    curY = y - startY;
    if (Math.abs(curX) > 6) card.dataset.dragged = 'true';
    const rotate = curX / 14;
    card.style.transform = `translate(${curX}px, ${curY}px) rotate(${rotate}deg)`;
    const progress = Math.min(Math.abs(curX) / 100, 1);
    if (curX > 0) { likeStamp.style.opacity = progress; passStamp.style.opacity = 0; }
    else { passStamp.style.opacity = progress; likeStamp.style.opacity = 0; }
  }
  function up() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('dragging');
    if (curX > 110) { resolveSwipe(card, 'like'); }
    else if (curX < -110) { resolveSwipe(card, 'pass'); }
    else {
      card.style.transform = '';
      likeStamp.style.opacity = 0;
      passStamp.style.opacity = 0;
    }
    curX = 0; curY = 0;
  }

  card.addEventListener('mousedown', (e) => down(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', up);

  card.addEventListener('touchstart', (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchmove', (e) => { const t = e.touches[0]; move(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchend', up);

  card._forceSwipe = (dir) => resolveSwipe(card, dir);
}

function resolveSwipe(card, dir) {
  const t = deck[deckIndex];
  const flyX = dir === 'like' ? 600 : -600;
  card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  card.style.transform = `translate(${flyX}px, ${curYOf(card)}px) rotate(${dir === 'like' ? 25 : -25}deg)`;
  card.style.opacity = '0';
  deckIndex++;
  setTimeout(() => {
    renderStack();
    if (dir === 'like') handleLike(t);
  }, 220);
}

function curYOf(card) {
  const m = card.style.transform.match(/translate\([^,]+,\s*(-?\d+(?:\.\d+)?)px\)/);
  return m ? m[1] : 0;
}

function handleLike(t) {
  t.stats.hearts++;
  // Swiping right only shortlists — it sends no signal to the therapist yet.
  // A client picks from the shortlist which ones to actually request,
  // capped at MAX_PENDING_REQUESTS, so a therapist's inbox reflects real
  // intent instead of every impulsive right-swipe.
  if (!shortlist.find(s => s.id === t.id) && !matches.find(m => m.therapist.id === t.id)) {
    shortlist.push(t);
  }
  showToast('Added to your shortlist');
  renderShortlist();
}

function sendMatchRequest(therapistId) {
  if (activeRequestCount() >= MAX_PENDING_REQUESTS) return;
  openRequestIntake(therapistId);
}

function activeRequestCount() {
  // Counts against the cap of 5 "real shots": pending asks AND accepted
  // matches both use up a slot permanently. Only a decline frees one —
  // an acceptance is a real outcome, not something to churn through.
  return matches.filter(m => m.status === 'pending' || m.status === 'matched').length;
}

// ===== REQUEST MATCH — BRIEF INTAKE MESSAGE =====
const requestIntakeModal = document.getElementById('request-intake-modal');
const requestIntakeSheet = document.getElementById('request-intake-sheet');

function openRequestIntake(therapistId) {
  const t = shortlist.find(s => s.id === therapistId);
  if (!t) return;
  requestIntakeSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>A quick note for ${displayName(t)}</h2>
    <div class="intake-sub">This becomes your opening message — keep it short and honest.</div>
    <div class="t-form-label">What brings you to therapy?</div>
    <textarea class="intake-textarea" id="intro-message" rows="3" placeholder="A sentence or two is plenty..."></textarea>
    <div class="t-form-label">How often are you hoping to meet?</div>
    <div class="freq-row">
      <div class="freq-chip-grid" id="freq-count-grid">
        <div class="chip-option selected" data-freq-count="1">1x</div>
        <div class="chip-option" data-freq-count="2">2x</div>
      </div>
      <span class="freq-per">per</span>
      <div class="freq-chip-grid" id="freq-period-grid">
        <div class="chip-option selected" data-freq-period="week">Week</div>
        <div class="chip-option" data-freq-period="month">Month</div>
      </div>
    </div>
    <button class="primary-btn" style="margin-top:16px;background:var(--coral);color:white;" id="submit-request-btn" disabled>Send Match Request</button>
  `;
  requestIntakeModal.classList.remove('hidden');

  let freqCount = 1;
  let freqPeriod = 'week';
  document.querySelectorAll('#freq-count-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#freq-count-grid .chip-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      freqCount = Number(el.dataset.freqCount);
    });
  });
  document.querySelectorAll('#freq-period-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#freq-period-grid .chip-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      freqPeriod = el.dataset.freqPeriod;
    });
  });

  const introInput = document.getElementById('intro-message');
  const submitBtn = document.getElementById('submit-request-btn');
  introInput.addEventListener('input', () => { submitBtn.disabled = introInput.value.trim().length === 0; });
  submitBtn.addEventListener('click', () => {
    const msg = introInput.value.trim();
    if (!msg) return;
    requestIntakeModal.classList.add('hidden');
    confirmMatchRequest(therapistId, msg, `${freqCount}x per ${freqPeriod}`);
  });
}
requestIntakeModal.addEventListener('click', (e) => { if (e.target === requestIntakeModal) requestIntakeModal.classList.add('hidden'); });

function confirmMatchRequest(therapistId, introMessage, desiredFrequency) {
  if (activeRequestCount() >= MAX_PENDING_REQUESTS) return;
  const idx = shortlist.findIndex(s => s.id === therapistId);
  if (idx === -1) return;
  const t = shortlist[idx];
  shortlist.splice(idx, 1);
  matches.push({
    therapist: t, status: 'pending', needsSnapshot: intake.needs.slice(), introMessage, desiredFrequency,
    profileShared: false,
    portal: { goals: [], homework: [], resources: [] }
  });
  t.stats.conversationsStarted++;
  chatLog[therapistId] = [{ from: 'me', text: introMessage }];
  showToast('Match request sent — waiting for them to respond.');
  updateNavBadge();
  renderShortlist();
  renderMatches();
}

function declineRequest(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'pending');
  if (!m) return;
  chatLog[therapistId] = chatLog[therapistId] || [];
  m.status = 'declined';
  chatLog[therapistId].push({ from: 'them', text: `Thank you for sharing this with me. I don't think I'm the right fit for what you're looking for right now, but I hope you find someone who is.` });
  renderRequests();
}

function confirmAcceptWithSchedule(therapistId, scheduledDay, scheduledTimeRaw) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'pending');
  if (!m) return;
  const scheduledTime = formatTime12h(scheduledTimeRaw);
  chatLog[therapistId] = chatLog[therapistId] || [];
  m.status = 'matched';
  m.newlyMatched = true;
  m.scheduledDay = scheduledDay;
  m.scheduledTime = scheduledTime;
  chatLog[therapistId].push({ from: 'them', text: `Great — I'd love to move forward. I've got you scheduled for ${scheduledDay}s at ${scheduledTime}, and I'll follow up here to confirm.` });
  renderRequests();
}

function checkForNewMatches() {
  const newly = matches.find(m => m.newlyMatched);
  if (newly) {
    newly.newlyMatched = false;
    showMatchModal(newly.therapist);
  }
  updateNavBadge();
  renderMatches();
}

// ===== SHARE A THERAPIST =====
// Word of mouth is how most people actually find a therapist. This shares the
// THERAPIST's public profile — never anything about the client doing the
// sharing. The link deep-links straight to that therapist (see the #therapist=
// handler at the bottom of this file).
function shareTherapist(t) {
  const url = `${location.origin}${location.pathname}#therapist=${t.id}`;
  const text = `I found ${displayName(t)} on Kindred${t.bestFor ? ` — “${t.bestFor}”` : ''}`;
  if (navigator.share) {
    navigator.share({ title: `${displayName(t)} on Kindred`, text, url })
      .then(() => showToast('Shared — thank you for passing it on.'))
      .catch(() => {}); // dismissing the share sheet isn't an error
    return;
  }
  const fallback = `${text}\n${url}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fallback)
      .then(() => showToast('Link copied — paste it to whoever needs it.'))
      .catch(() => showToast('Copy this: ' + url));
  } else {
    showToast('Copy this: ' + url);
  }
}

function showToast(message) {
  const toast = document.getElementById('waitlist-toast');
  if (message) toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

function updateNavBadge() {
  const matchedCount = matches.filter(m => m.status === 'matched').length;
  if (matchedCount > 0) {
    navBadge.textContent = matchedCount;
    navBadge.classList.remove('hidden');
  }
}

// ===== DETAIL MODAL =====
const detailModal = document.getElementById('detail-modal');
const detailSheet = document.getElementById('detail-sheet');

function openDetail(t, opts = {}) {
  const preview = opts.preview === true;
  if (!preview) t.stats.profileViews++;
  detailSheet.innerHTML = `
    <div class="sheet-close"></div>
    ${preview ? `<div class="preview-banner">👀 This is what clients see when they view your profile</div>` : ''}
    <div class="card-photo detail-photo" style="background:${t.gradient};">
      ${t.photo ? `<img class="card-photo-img" src="${t.photo}" alt="">` : `<div class="initials">${t.initials}</div>`}
      ${preview ? '' : matchBadgeHtml(t)}
      ${preview ? '' : languageBadgeHtml(t)}
    </div>
    <div class="card-name-row" style="margin-top:14px;"><h2>${displayName(t)}</h2><span class="creds">${credentialsLabel(t)}</span></div>
    ${t.pronouns ? `<div class="pronouns-label">${t.pronouns}</div>` : ''}
    <div class="detail-badge-row">
      ${(!preview && isInTop5(t)) ? `<span class="top5-chip">★ In your Top 5</span>` : ''}
      ${t.licenseVerified ? `<span class="verified-chip">✓ License verified via Stripe Identity</span>` : ''}
    </div>
    ${detailFactsHtml(t, { preview })}
    ${t.bestFor ? `<div class="best-for">${t.bestFor}</div>` : ''}
    <div class="section-title">Specialties</div>
    <div class="tag-row">${t.tags.map(tagHtml).join('')}</div>
    ${practiceBadgeHtml(t)}
    ${preview ? '' : matchTagsHtml(t)}
    <div class="section-title">Get to know them</div>
    ${profileFeedHtml(t)}
    ${preview
      ? `<button class="primary-btn" style="margin-top:20px;background:white;border:1.5px solid var(--coral);color:var(--coral-dark);" id="detail-close-btn">Close Preview</button>`
      : `<button class="primary-btn" style="margin-top:20px;background:var(--coral);color:white;" id="detail-like-btn">Add to Shortlist</button>
         <button class="primary-btn share-therapist-btn" id="detail-share-btn">↗ Share this therapist with someone</button>`}
  `;
  detailModal.classList.remove('hidden');
  detailSheet.querySelectorAll('[data-info]').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); openModalityInfo(el.dataset.info); });
  });
  if (preview) {
    document.getElementById('detail-close-btn').addEventListener('click', () => detailModal.classList.add('hidden'));
  } else {
    document.getElementById('detail-like-btn').addEventListener('click', () => {
      detailModal.classList.add('hidden');
      const topCard = cardStack.lastElementChild;
      if (topCard && topCard.dataset.id === t.id && topCard._forceSwipe) topCard._forceSwipe('like');
    });
    document.getElementById('detail-share-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      shareTherapist(t);
    });
  }
}
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.classList.add('hidden'); });

// ===== MATCH MODAL =====
const matchModal = document.getElementById('match-modal');
function showMatchModal(t) {
  document.getElementById('match-name').textContent = displayName(t);
  const avatar = document.getElementById('match-avatar');
  if (t.photo) {
    avatar.classList.add('photo');
    avatar.style.background = `url('${t.photo}') center top / cover`;
    avatar.textContent = '';
  } else {
    avatar.classList.remove('photo');
    avatar.style.background = t.gradient;
    avatar.textContent = t.initials;
  }
  matchModal.classList.remove('hidden');
  matchModal.dataset.tid = t.id;
}
document.getElementById('match-keep-swiping').addEventListener('click', () => matchModal.classList.add('hidden'));
document.getElementById('match-message-btn').addEventListener('click', () => {
  const tid = matchModal.dataset.tid;
  matchModal.classList.add('hidden');
  const m = matches.find(m => m.therapist.id === tid);
  if (m) openChat(m.therapist);
});

// ===== MATCHES LIST =====
const matchesList = document.getElementById('matches-list');
const shortlistList = document.getElementById('shortlist-list');

function renderShortlist() {
  const atCap = activeRequestCount() >= MAX_PENDING_REQUESTS;
  if (shortlist.length === 0) {
    shortlistList.innerHTML = `<p class="empty-state">Nothing saved yet — swipe right on someone in Discover to add them here.</p>`;
    return;
  }
  shortlistList.innerHTML = shortlist.slice().reverse().map(t => `
    <div class="match-row shortlist-row">
      ${avatarHtml(t, 'avatar-md')}
      <div><div class="chat-name">${displayName(t)}</div><div class="last-msg">Saved — not yet requested</div></div>
      <button class="shortlist-request-btn" data-tid="${t.id}" ${atCap ? 'disabled' : ''}>${atCap ? 'Limit reached' : 'Request Match'}</button>
    </div>
  `).join('');
  shortlistList.querySelectorAll('.shortlist-request-btn').forEach(btn => {
    btn.addEventListener('click', () => sendMatchRequest(btn.dataset.tid));
  });
}

function renderMatches() {
  if (matches.length === 0) {
    matchesList.innerHTML = `<p class="empty-state">No requests sent yet — head to your Short List to pick your Top 5.</p>`;
    return;
  }
  let html = `<div class="request-cap-banner">${activeRequestCount()} of ${MAX_PENDING_REQUESTS} Top 5 slots used</div>`;
  html += matches.slice().reverse().map(m => {
    const t = m.therapist;
    const log = chatLog[t.id] || [];
    const last = log[log.length - 1];
    if (m.status === 'pending') {
      return `<div class="match-row" data-id="${t.id}">
        ${avatarHtml(t, 'avatar-md')}
        <div><div class="chat-name"><span class="top5-star">★</span>${displayName(t)}</div><div class="last-msg">${last ? last.text : 'Waiting on their response…'}</div></div>
        <span class="pending-tag">Requested</span>
      </div>`;
    }
    if (m.status === 'ondemand') {
      if (m.paymentStatus === 'authorized') {
        return `<div class="match-row pending" data-id="${t.id}">
          ${avatarHtml(t, 'avatar-md')}
          <div><div class="chat-name">${displayName(t)}</div><div class="last-msg">Awaiting their confirmation — $${m.amountPaid} authorized, not yet charged</div></div>
          <button class="cancel-session-btn" data-release-ondemand="${t.id}">Cancel</button>
        </div>`;
      }
      if (m.paymentStatus !== 'paid') {
        return `<div class="match-row pending" data-id="${t.id}" style="opacity:0.5;">
          ${avatarHtml(t, 'avatar-md')}
          <div><div class="chat-name">${displayName(t)}</div><div class="last-msg">${refundStatusLabel(m.paymentStatus)}</div></div>
        </div>`;
      }
      return `<div class="match-row pending" data-id="${t.id}">
        ${avatarHtml(t, 'avatar-md')}
        <div>
          <div class="chat-name">${displayName(t)}</div>
          <div class="last-msg">One-time session confirmed — ${m.slotLabel} · $${m.amountPaid} paid</div>
          <button class="noshow-link" data-noshow-ondemand="${t.id}">Therapist didn't show?</button>
        </div>
        <button class="cancel-session-btn" data-cancel-ondemand="${t.id}">Cancel</button>
      </div>`;
    }
    if (m.status === 'declined') {
      return `<div class="match-row pending" data-id="${t.id}" style="opacity:0.5;">
        ${avatarHtml(t, 'avatar-md')}
        <div><div class="chat-name">${displayName(t)}</div><div class="last-msg">Not a fit on their end right now</div></div>
      </div>`;
    }
    return `<div class="match-row" data-id="${t.id}">
      ${avatarHtml(t, 'avatar-md')}
      <div><div class="chat-name"><span class="top5-star">★</span>${displayName(t)}</div><div class="last-msg">${last ? last.text : 'Say hello!'}</div></div>
    </div>`;
  }).join('');

  matchesList.innerHTML = html;

  // Pending and matched rows both open the same chat — messaging is available
  // before a therapist accepts, not gated behind it. Declined/on-demand rows
  // are closed threads, so they stay non-interactive.
  matchesList.querySelectorAll('.match-row:not(.pending)').forEach(row => {
    row.addEventListener('click', () => {
      const m = matches.find(m => m.therapist.id === row.dataset.id);
      if (m) openChat(m.therapist, 'client');
    });
  });
  matchesList.querySelectorAll('[data-cancel-ondemand]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); requestCancelOndemand(btn.dataset.cancelOndemand); });
  });
  // Cancelling while still authorized just releases the hold — the
  // cancellation tiers only exist once a payment has actually processed.
  matchesList.querySelectorAll('[data-release-ondemand]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const m = matches.find(m => m.therapist.id === btn.dataset.releaseOndemand && m.status === 'ondemand' && m.paymentStatus === 'authorized');
      if (!m) return;
      m.paymentStatus = 'released';
      showToast('Request cancelled — the hold was released, you were not charged.');
      renderMatches();
    });
  });
  matchesList.querySelectorAll('[data-noshow-ondemand]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); reportNoShow(btn.dataset.noshowOndemand); });
  });
}

// ===== CHAT SCREEN =====
// Messaging works before a therapist accepts, not after — chatRole tracks
// which side of the conversation we're currently viewing/sending as, since
// this prototype simulates both the client and the therapist in one session.
function openChat(t, role) {
  chatRole = role || 'client';
  const av = document.getElementById('chat-avatar');
  const statusEl = document.querySelector('#screen-chat .chat-status');
  if (chatRole === 'therapist') {
    document.getElementById('chat-name').textContent = 'Prospective Client';
    av.classList.remove('photo');
    av.style.backgroundImage = '';
    av.style.background = 'linear-gradient(135deg,#9a9088,#6b6560)';
    av.textContent = '?';
    statusEl.textContent = `Replying as ${displayName(t)}`;
  } else {
    document.getElementById('chat-name').textContent = displayName(t);
    if (t.photo) {
      av.classList.add('photo');
      av.style.background = `url('${t.photo}') center top / cover`;
      av.textContent = '';
    } else {
      av.classList.remove('photo');
      av.style.background = t.gradient;
      av.textContent = t.initials;
    }
    statusEl.textContent = 'Usually replies within a day';
  }
  // The between-sessions portal only exists for an established (matched)
  // client-therapist pair, and only the client views it from chat — the
  // therapist manages it from their Home schedule.
  const m = matches.find(m => m.therapist.id === t.id && m.status === 'matched');
  document.getElementById('between-sessions-btn').classList.toggle('hidden', !(chatRole === 'client' && m));
  document.getElementById('between-sessions-btn').dataset.tid = t.id;
  document.getElementById('chat-input').dataset.tid = t.id;
  renderChatMessages(t.id);
  showScreen('chat');
}

// ===== LICENSE VERIFICATION (simulated Stripe Identity) =====
// Prototype stand-in for a real Stripe Identity verification session —
// the real flow would redirect to Stripe, run the document/registry check,
// and return a verified webhook. Here: a themed sheet with a short delay.
function openStripeVerification(licenseNumber, onVerified) {
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <div class="stripe-sheet-brand">stripe <span>| Identity</span></div>
    <h2>Verify your professional license</h2>
    <div class="intake-sub">Kindred uses Stripe Identity to confirm your license against state registries. This takes about a minute in the real flow.</div>
    <div class="pref-item" style="margin-top:14px;">
      <div class="pref-label">License number</div>
      <div class="pref-value">${licenseNumber}</div>
    </div>
    <div id="stripe-verify-status"></div>
    <button class="primary-btn stripe-primary-btn" id="stripe-start-btn">Start verification</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('stripe-start-btn').addEventListener('click', () => {
    const status = document.getElementById('stripe-verify-status');
    const btn = document.getElementById('stripe-start-btn');
    btn.disabled = true;
    btn.textContent = 'Verifying…';
    status.innerHTML = `<div class="portal-note" style="margin-bottom:10px;">Checking ${licenseNumber} against the state licensing registry…</div>`;
    setTimeout(() => {
      status.innerHTML = `<div class="license-verified-box" style="margin-bottom:10px;">✓ License ${licenseNumber} verified</div>`;
      btn.textContent = 'Done';
      btn.disabled = false;
      btn.onclick = () => {
        document.getElementById('confirm-modal').classList.add('hidden');
        onVerified();
      };
    }, 1400);
  });
}

// ===== BETWEEN-SESSIONS PORTAL =====
// One portal per matched pair. The therapist fills it (goals / homework /
// resources); the client reads it and can tick homework off. It also holds
// the therapist-facing view of the client's shared profile.
const PORTAL_SECTIONS = [
  { key: 'goals', label: 'Goals', icon: '🎯', placeholder: 'e.g. Practice saying no once this week' },
  { key: 'homework', label: 'Homework', icon: '📝', placeholder: 'e.g. 5-4-3-2-1 grounding, once a day' },
  { key: 'resources', label: 'Resources', icon: '🌿', placeholder: 'e.g. Ch. 2 of "Self-Compassion"' }
];

// The full picture a matched therapist sees when a client shares their
// profile — also what the client previews before deciding to share.
function sharedProfileBodyHtml() {
  const savedList = EXPLORE_RESOURCES.filter(r => savedResources.includes(r.id));
  return `
    <div class="pref-item"><div class="pref-label">Looking for support with</div><div class="pref-value">${needsSummary()}</div></div>
    <div class="pref-item"><div class="pref-label">What kind of guidance they want</div><div class="pref-value">${guidanceSummary()}</div></div>
    <div class="pref-item"><div class="pref-label">Type of therapy in mind</div><div class="pref-value">${modalitySummary()}</div></div>
    <div class="pref-item"><div class="pref-label">Session format</div><div class="pref-value">${formatSummary()}</div></div>
    <div class="pref-item"><div class="pref-label">When they can meet</div><div class="pref-value">${availabilitySummary()}</div></div>
    <div class="pref-item"><div class="pref-label">Identity preferences</div><div class="pref-value">${identitySummary()}</div></div>
    <div class="pref-item"><div class="pref-label">Saved resources</div><div class="pref-value">${savedList.length ? savedList.map(r => `${r.icon} ${r.title}`).join('<br>') : 'None saved yet.'}</div></div>
  `;
}

function clientProfileSummaryHtml(m) {
  if (!m.profileShared) {
    return `<div class="portal-note">This client hasn't shared their profile. They can turn on sharing from their own profile page whenever they're ready.</div>`;
  }
  return sharedProfileBodyHtml();
}

// Client-side preview of exactly what a therapist sees when sharing is on.
// ===== DELETE ACCOUNT (client) =====
// Deleting is permanent and people often reach for it when they just want a
// break. Leading with what they'd lose — the therapists they've saved — gives
// them a real reason to stay without guilt-tripping or hiding the delete.
function openDeleteAccountSheet() {
  const savedCount = matches.filter(m => m.status === 'matched' || m.status === 'pending').length;
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Delete your account?</h2>
    <div class="intake-sub">Before you go — you don't have to delete anything to take a break.</div>

    <div class="keep-card">
      <p><strong>Keep the app downloaded so you can save all your favorite therapists</strong> in case you need them in the future.</p>
      <p class="keep-card-sub">${savedCount ? `You have ${savedCount} therapist${savedCount === 1 ? '' : 's'} saved. Finding someone who fits is the hard part — you won't have to do it twice.` : `Finding someone who fits is the hard part. Keeping your account means you won't have to do it twice.`}</p>
      <p class="keep-card-sub">It's free to keep, and nothing happens while you're away — no emails, no notifications.</p>
    </div>

    <p class="modality-info-text">Deleting is permanent. Your saved therapists, matches, conversations, and preferences are all removed and can't be recovered.</p>

    <button class="primary-btn" style="background:var(--coral);color:white;" id="keep-account-btn">Keep my account</button>
    <button class="edit-prefs-btn" id="logout-instead-btn">Just log me out instead</button>
    <button class="edit-prefs-btn" id="confirm-delete-btn" style="color:#a8443a;">Delete my account</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  const close = () => document.getElementById('confirm-modal').classList.add('hidden');
  document.getElementById('keep-account-btn').addEventListener('click', () => {
    close();
    showToast('Your account is safe — your therapists are still here.');
  });
  document.getElementById('logout-instead-btn').addEventListener('click', () => { close(); logout(); });
  document.getElementById('confirm-delete-btn').addEventListener('click', () => { close(); confirmDeleteAccount(); });
}

// Second, deliberate confirmation — a destructive, irreversible action should
// never be one tap away.
function confirmDeleteAccount() {
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>This can't be undone</h2>
    <div class="intake-sub">Everything you've saved will be permanently deleted.</div>
    <button class="primary-btn" style="background:var(--coral);color:white;" id="delete-cancel-btn">Never mind, keep my account</button>
    <button class="edit-prefs-btn" id="delete-final-btn" style="color:#a8443a;">Yes, delete everything</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  const close = () => document.getElementById('confirm-modal').classList.add('hidden');
  document.getElementById('delete-cancel-btn').addEventListener('click', close);
  document.getElementById('delete-final-btn').addEventListener('click', () => {
    close();
    matches.length = 0;
    savedResources.length = 0;
    showToast('Your account has been deleted.');
    logout();
  });
}

function openSharedProfilePreview() {
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>What your therapist sees</h2>
    <div class="intake-sub">When you turn on sharing for a therapist, this is the snapshot they get — nothing more. You can turn it off anytime.</div>
    ${sharedProfileBodyHtml()}
    <button class="primary-btn" style="margin-top:16px;background:var(--coral);color:white;" id="shared-preview-close">Got it</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('shared-preview-close').addEventListener('click', () => document.getElementById('confirm-modal').classList.add('hidden'));
}

function openTherapistPortal(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'matched');
  if (!m) return;
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Client Portal</h2>
    <div class="intake-sub">What this client sees between sessions — and what they've chosen to share with you.</div>
    <div class="section-title">Their shared profile</div>
    ${clientProfileSummaryHtml(m)}
    ${PORTAL_SECTIONS.map(s => `
      <div class="section-title">${s.icon} ${s.label}</div>
      ${m.portal[s.key].length ? m.portal[s.key].map((item, i) => `
        <div class="portal-item">
          <span class="portal-item-text">${s.key === 'homework' && item.done ? '✅ ' : ''}${s.key === 'homework' ? item.text : item}${s.key === 'homework' && item.done ? ' <em class="portal-done-note">— done</em>' : ''}</span>
          <button class="portal-remove" data-portal-remove="${s.key}:${i}">✕</button>
        </div>
      `).join('') : `<div class="portal-note">Nothing here yet.</div>`}
      <div class="add-slot-row">
        <input type="text" data-portal-input="${s.key}" placeholder="${s.placeholder}">
        <button data-portal-add="${s.key}">Add</button>
      </div>
    `).join('')}
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  sheet.querySelectorAll('[data-portal-add]').forEach(btn => btn.addEventListener('click', () => {
    const key = btn.dataset.portalAdd;
    const input = sheet.querySelector(`[data-portal-input="${key}"]`);
    const text = input.value.trim();
    if (!text) return;
    m.portal[key].push(key === 'homework' ? { text, done: false } : text);
    openTherapistPortal(therapistId);
  }));
  sheet.querySelectorAll('[data-portal-remove]').forEach(btn => btn.addEventListener('click', () => {
    const [key, i] = btn.dataset.portalRemove.split(':');
    m.portal[key].splice(Number(i), 1);
    openTherapistPortal(therapistId);
  }));
}

function openClientPortal(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'matched');
  if (!m) return;
  const sheet = document.getElementById('confirm-sheet');
  const isEmpty = PORTAL_SECTIONS.every(s => m.portal[s.key].length === 0);
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Between Sessions</h2>
    <div class="intake-sub">From ${displayName(m.therapist)} — things to hold onto until you meet again.</div>
    ${isEmpty ? `<div class="portal-note" style="margin-top:14px;">Nothing here yet — after a session, ${displayName(m.therapist)} can leave goals, homework, and resources for you here.</div>` : PORTAL_SECTIONS.map(s => `
      <div class="section-title">${s.icon} ${s.label}</div>
      ${m.portal[s.key].length ? m.portal[s.key].map((item, i) => s.key === 'homework' ? `
        <label class="portal-item portal-checkable">
          <input type="checkbox" data-homework-toggle="${i}" ${item.done ? 'checked' : ''}>
          <span class="portal-item-text ${item.done ? 'portal-item-done' : ''}">${item.text}</span>
        </label>
      ` : `
        <div class="portal-item"><span class="portal-item-text">${item}</span></div>
      `).join('') : `<div class="portal-note">Nothing here yet.</div>`}
    `).join('')}
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  sheet.querySelectorAll('[data-homework-toggle]').forEach(cb => cb.addEventListener('change', () => {
    m.portal.homework[Number(cb.dataset.homeworkToggle)].done = cb.checked;
    openClientPortal(therapistId);
  }));
}

document.getElementById('between-sessions-btn').addEventListener('click', (e) => {
  openClientPortal(e.currentTarget.dataset.tid);
});

function renderChatMessages(tid) {
  const container = document.getElementById('chat-messages');
  const log = chatLog[tid] || [];
  container.innerHTML = log.map(m => {
    const isMine = chatRole === 'therapist' ? m.from === 'them' : m.from === 'me';
    return `<div class="msg ${isMine ? 'me' : 'them'}">${m.text}</div>`;
  }).join('');
  container.scrollTop = container.scrollHeight;
}

document.getElementById('chat-send').addEventListener('click', sendChatMessage);
document.getElementById('chat-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  const tid = input.dataset.tid;
  if (!text || !tid) return;
  chatLog[tid] = chatLog[tid] || [];
  const from = chatRole === 'therapist' ? 'them' : 'me';
  chatLog[tid].push({ from, text });
  input.value = '';
  renderChatMessages(tid);
  renderMatches();

  // Only simulate an auto-reply when the client is sending — this stands in
  // for "the therapist responded on their own time" without requiring the
  // person testing this prototype to switch views for every message. When
  // actually replying as the therapist, no canned reply is injected.
  if (chatRole === 'client') {
    setTimeout(() => {
      chatLog[tid].push({ from: 'them', text: "Thanks for sharing that. I'd love to talk through it more — want to grab a free 15-minute intro call this week?" });
      renderChatMessages(tid);
      renderMatches();
    }, 900);
  } else {
    renderRequests();
  }
}

document.getElementById('chat-back').addEventListener('click', () => {
  if (chatRole === 'therapist') showTScreen('t-requests');
  else showScreen('matches');
});

// ===== ON-DEMAND SCREEN =====
const ondemandList = document.getElementById('ondemand-list');
let clientAgreedToOnDemandPolicy = false;

function renderOndemandPolicyGate() {
  ondemandList.innerHTML = `
    <div class="policy-gate">
      <div class="t-form-label">Before you use On-Demand</div>
      <p class="modality-info-text">Requesting a slot authorizes your card, but <strong>you're only charged when the therapist accepts</strong>. If they decline or don't respond, the hold is released. Once a session is confirmed and your plans change:</p>
      <ul class="policy-list">
        <li>48+ hours before your session: full refund</li>
        <li>24–48 hours before: 50% refund</li>
        <li>Less than 24 hours before: no refund</li>
        <li>If the therapist doesn't show: full refund, always — and they lose On-Demand access</li>
      </ul>
      <button class="primary-btn" style="background:var(--coral);color:white;" id="agree-ondemand-btn">I Agree &amp; Continue</button>
    </div>
  `;
  document.getElementById('agree-ondemand-btn').addEventListener('click', () => {
    clientAgreedToOnDemandPolicy = true;
    renderOndemand();
  });
}

// On-Demand is confirmed by a human on their own schedule — hours, not
// minutes. That's the wrong tool for a crisis, and we say so before anyone
// books, with real resources up front.
function openCrisisCheck() {
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Before you book — is this a crisis?</h2>
    <p class="modality-info-text">On-Demand sessions are confirmed by the therapist, which can take a few hours. <strong>That's not fast enough if you're in crisis.</strong></p>
    <p class="modality-info-text">If you're in immediate danger, or having thoughts of harming yourself or someone else, please reach out right now:</p>
    <ul class="policy-list">
      <li><strong>Call or text 988</strong> — Suicide &amp; Crisis Lifeline, free, 24/7</li>
      <li><strong>Text HOME to 741741</strong> — Crisis Text Line</li>
      <li><strong>Call 911</strong> or go to your nearest emergency room</li>
    </ul>
    <button class="primary-btn crisis-help-btn" id="crisis-help-btn">I need help right now</button>
    <button class="primary-btn" style="margin-top:8px;background:var(--coral);color:white;" id="crisis-continue-btn">This isn't a crisis — continue</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('crisis-help-btn').addEventListener('click', () => {
    sheet.innerHTML = `
      <div class="sheet-close"></div>
      <h2>You don't have to hold this alone</h2>
      <p class="modality-info-text">Reaching out right now is the strongest move available to you. These are free, confidential, and open 24/7:</p>
      <a class="crisis-resource" href="tel:988">📞 Call 988 — Suicide &amp; Crisis Lifeline</a>
      <a class="crisis-resource" href="sms:988">💬 Text 988</a>
      <a class="crisis-resource" href="sms:741741&body=HOME">💬 Text HOME to 741741 — Crisis Text Line</a>
      <a class="crisis-resource" href="tel:911">🚨 Call 911</a>
      <p class="modality-info-text" style="margin-top:10px;">Kindred will be here when you're through this. On-Demand and matching aren't going anywhere.</p>
    `;
  });
  document.getElementById('crisis-continue-btn').addEventListener('click', () => {
    crisisAcknowledged = true;
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}

function renderOndemand() {
  if (!crisisAcknowledged) openCrisisCheck();
  if (!clientAgreedToOnDemandPolicy) {
    renderOndemandPolicyGate();
    return;
  }
  const list = computeOnDemandList();
  if (list.length === 0) {
    ondemandList.innerHTML = `<p class="empty-state">No one-time slots match your needs this week — check back soon.</p>`;
    return;
  }
  ondemandList.innerHTML = list.map(t => `
    <div class="ondemand-card" data-id="${t.id}">
      <div class="od-header">
        ${avatarHtml(t, 'avatar-md')}
        <div><div class="od-name">${displayName(t)}</div><div class="od-creds">${credentialsLabel(t)}</div></div>
      </div>
      ${matchTagsHtml(t)}
      <div class="slot-row">
        ${t.onDemandSlots.map(s => `<button class="slot-btn" data-tid="${t.id}" data-slot="${s.label}">${s.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
  ondemandList.querySelectorAll('.slot-btn').forEach(btn => {
    btn.addEventListener('click', () => bookOndemand(btn.dataset.tid, btn.dataset.slot, btn));
  });
}

// ===== ON-DEMAND PAYMENT & CANCELLATION =====
// On-demand slots require payment up front. Cancellation policy is measured
// from the actual scheduled session time, not from when it was booked:
// 48+ hours out = full refund, 24-48 hours = half, under 24 hours = none.
function getRefundTier(hoursUntilSession) {
  if (hoursUntilSession >= 48) return { percent: 100, label: 'a full refund' };
  if (hoursUntilSession >= 24) return { percent: 50, label: 'a 50% refund' };
  return { percent: 0, label: 'no refund' };
}

function nextOccurrence(dayAbbrev, timeLabel) {
  const dayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const targetDow = dayIndex[dayAbbrev];
  const match = (timeLabel || '').match(/(\d+):(\d+)(am|pm)/i);
  let hour = 0, minute = 0;
  if (match) {
    hour = parseInt(match[1], 10);
    minute = parseInt(match[2], 10);
    const period = match[3].toLowerCase();
    if (period === 'pm' && hour !== 12) hour += 12;
    if (period === 'am' && hour === 12) hour = 0;
  }
  const now = new Date();
  let daysAhead = (targetDow - now.getDay() + 7) % 7;
  if (daysAhead === 0) {
    const todayAtTime = new Date(now);
    todayAtTime.setHours(hour, minute, 0, 0);
    if (todayAtTime <= now) daysAhead = 7;
  }
  const result = new Date(now);
  result.setDate(now.getDate() + daysAhead);
  result.setHours(hour, minute, 0, 0);
  return result;
}

function refundStatusLabel(status) {
  if (status === 'refunded') return 'full refund issued';
  if (status === 'partially-refunded') return '50% refund issued';
  if (status === 'declined-by-therapist') return 'they declined — hold released, no charge';
  if (status === 'noshow-refunded') return 'no-show — full refund issued';
  if (status === 'released') return 'cancelled — hold released, no charge';
  if (status === 'cancelled-no-refund') return 'no refund per policy';
  return '';
}

function bookOndemand(tid, slotLabel, btnEl) {
  const t = THERAPISTS.find(t => t.id === tid);
  openPaymentConfirm(t, slotLabel, btnEl);
}

function openPaymentConfirm(t, slotLabel, btnEl) {
  const amount = t.rateMin;
  document.getElementById('confirm-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>Request this session</h2>
    <div class="intake-sub">One-time session with ${displayName(t)} — ${slotLabel}</div>
    <div class="payment-amount">$${amount}</div>
    <p class="modality-info-text">Your card is <strong>authorized now but only charged when ${displayName(t)} accepts</strong> the session. If they decline or don't respond, the hold is released and you pay nothing.</p>
    <div class="t-form-label">Cancellation policy (after acceptance)</div>
    <ul class="policy-list">
      <li>48+ hours before your session: full refund</li>
      <li>24–48 hours before: 50% refund</li>
      <li>Less than 24 hours before: no refund</li>
      <li>Therapist no-show: full refund, always</li>
    </ul>
    <button class="primary-btn" style="margin-top:12px;background:var(--coral);color:white;" id="confirm-pay-btn">Authorize $${amount} &amp; Request</button>
    <button class="text-btn" id="confirm-pay-cancel" style="color:var(--ink-soft);">Cancel</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('confirm-pay-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    finalizeOndemandBooking(t, slotLabel, btnEl, amount);
  });
  document.getElementById('confirm-pay-cancel').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}
document.getElementById('confirm-modal').addEventListener('click', (e) => {
  if (e.target.id === 'confirm-modal') e.currentTarget.classList.add('hidden');
});

function finalizeOndemandBooking(t, slotLabel, btnEl, amount) {
  const card = btnEl.closest('.ondemand-card');
  card.querySelectorAll('.slot-btn').forEach(b => { b.disabled = true; b.classList.add('booked'); });
  btnEl.textContent = `Requested: ${slotLabel}`;
  const [day, ...timeParts] = slotLabel.split(' ');
  const sessionDateTime = nextOccurrence(day, timeParts.join(' '));
  // Payment is a hold, not a charge — it only processes when the therapist
  // accepts. Declines and no-responses cost the client nothing.
  matches.push({
    therapist: t, status: 'ondemand', slotLabel,
    amountPaid: amount, paymentStatus: 'authorized',
    sessionDateTime: sessionDateTime.toISOString()
  });
  showToast(`Request sent — $${amount} authorized, charged only if ${displayName(t)} accepts.`);
  renderMatches();
}

// Therapist accepts an on-demand request: this is the moment the payment
// actually processes.
function acceptOndemandBooking(m) {
  m.paymentStatus = 'paid';
  chatLog[m.therapist.id] = chatLog[m.therapist.id] || [{ from: 'them', text: `Looking forward to our session ${m.slotLabel}! Feel free to message me anything beforehand.` }];
  showToast(`Session accepted — client's $${m.amountPaid} payment processed.`);
  renderRequests();
}

function declineOndemandBooking(m) {
  m.paymentStatus = 'declined-by-therapist';
  showToast('Request declined — the payment hold was released.');
  renderRequests();
}

// A reported no-show refunds the client in full and permanently suspends
// the therapist's On-Demand access — honoring confirmed sessions is the
// deal they agreed to when they turned On-Demand on.
function reportNoShow(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'ondemand' && m.paymentStatus === 'paid');
  if (!m) return;
  document.getElementById('confirm-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>Report a no-show</h2>
    <div class="intake-sub">Your session with ${displayName(m.therapist)} was ${m.slotLabel}.</div>
    <p class="modality-info-text">If ${displayName(m.therapist)} didn't join your session, you'll receive a <strong>full refund of $${m.amountPaid}</strong> — the cancellation tiers never apply to a therapist no-show. Their On-Demand access is also suspended.</p>
    <button class="primary-btn" style="margin-top:12px;background:var(--coral);color:white;" id="confirm-noshow-btn">They didn't show — refund me</button>
    <button class="text-btn" id="confirm-noshow-back" style="color:var(--ink-soft);">Never Mind</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('confirm-noshow-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    m.paymentStatus = 'noshow-refunded';
    m.refundAmount = m.amountPaid;
    m.therapist.onDemandBanned = true;
    m.therapist.onDemand = false;
    showToast(`$${m.amountPaid} refunded in full. ${displayName(m.therapist)}'s On-Demand access is suspended.`);
    renderMatches();
  });
  document.getElementById('confirm-noshow-back').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}

function requestCancelOndemand(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'ondemand' && m.paymentStatus === 'paid');
  if (!m) return;
  const hoursUntil = (new Date(m.sessionDateTime) - new Date()) / 3600000;
  const tier = getRefundTier(hoursUntil);
  document.getElementById('confirm-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>Cancel this session?</h2>
    <div class="intake-sub">Your session with ${displayName(m.therapist)} is ${m.slotLabel}.</div>
    <p class="modality-info-text">Based on our cancellation policy, you'll receive <strong>${tier.label}</strong> (${tier.percent}% of $${m.amountPaid}).</p>
    <button class="primary-btn" style="margin-top:12px;background:var(--coral);color:white;" id="confirm-cancel-btn">Confirm Cancellation</button>
    <button class="text-btn" id="confirm-cancel-back" style="color:var(--ink-soft);">Never Mind</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('confirm-cancel-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    finalizeCancellation(m, tier);
  });
  document.getElementById('confirm-cancel-back').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}

function finalizeCancellation(m, tier) {
  m.paymentStatus = tier.percent === 100 ? 'refunded' : tier.percent === 50 ? 'partially-refunded' : 'cancelled-no-refund';
  m.refundAmount = Math.round(m.amountPaid * (tier.percent / 100));
  showToast(tier.percent > 0 ? `Cancelled — $${m.refundAmount} refunded.` : 'Cancelled — no refund per policy.');
  renderMatches();
}

// A therapist must explicitly agree to the payment/cancellation terms before
// they can turn On-Demand on for themselves — same policy the client agrees
// to, but framed from the side that keeps the non-refunded portion.
function openTherapistOnDemandAgreement(onAgree) {
  document.getElementById('confirm-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>On-Demand Payment Policy</h2>
    <p class="modality-info-text">Clients authorize payment when they request a slot, and the charge processes when you accept. If a client cancels a confirmed session:</p>
    <ul class="policy-list">
      <li>48+ hours before the session: they get a full refund</li>
      <li>24–48 hours before: they get a 50% refund — you keep the other 50%</li>
      <li>Less than 24 hours before: no refund — you keep the full amount</li>
    </ul>
    <p class="modality-info-text"><strong>Showing up is the deal:</strong> if you miss a confirmed session, the client is refunded in full and your On-Demand access is permanently suspended.</p>
    <p class="modality-info-text">By continuing, you agree to these terms and to honor confirmed sessions.</p>
    <button class="primary-btn" style="margin-top:12px;background:var(--coral);color:white;" id="agree-td-ondemand-btn">I Agree</button>
    <button class="text-btn" id="decline-td-ondemand-btn" style="color:var(--ink-soft);">Not Now</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('agree-td-ondemand-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    onAgree();
  });
  document.getElementById('decline-td-ondemand-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}

// ===== NAV / SCREENS =====
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('#bottom-nav .nav-btn').forEach(b => b.classList.remove('active'));
  if (name === 'profile') renderProfileScreen();
  if (name === 'explore') renderExploreResources();
  if (name === 'ondemand') renderOndemand();
  if (name === 'shortlist') renderShortlist();
  if (name === 'matches') renderMatches();
  const target = document.getElementById(`screen-${name}`);
  if (target) target.classList.remove('hidden');
  const navBtn = document.querySelector(`#bottom-nav .nav-btn[data-screen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
}

document.querySelectorAll('#bottom-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showScreen(btn.dataset.screen));
});

// ===== ACCOUNT TYPE / LOGIN / LOGOUT =====
// Two separate account types share the same underlying data (THERAPISTS,
// matches, shortlist) — logging in as one side or the other just changes
// which screens you see, not which data exists. That's what makes the
// client's requests actually visible to the right therapist's inbox.
let accountType = null; // 'client' | 'therapist'

document.getElementById('choose-client-btn').addEventListener('click', () => {
  accountType = 'client';
  openLogin();
});
document.getElementById('choose-therapist-btn').addEventListener('click', () => {
  accountType = 'therapist';
  openLogin();
});

function openLogin() {
  document.getElementById('login-title').textContent = accountType === 'client' ? 'Client Login' : 'Therapist Login';
  showScreen('login');
}

document.getElementById('login-back').addEventListener('click', () => {
  accountType = null;
  showScreen('account-type');
});

// "Log In" and "Create an Account" are two equally visible buttons rather
// than one button behind a toggle — burying account creation behind a small
// mode-switch link meant people testing the therapist flow never found it
// and always landed on the existing-profile picker instead.
document.getElementById('login-submit-btn').addEventListener('click', () => {
  if (accountType === 'client') {
    // Clients don't land straight in the deck — they pick which side of
    // Kindred they want first: the matching app or the explore/site side.
    openExperienceModal();
  } else {
    // No real per-account passwords in this prototype, so "Log In" just
    // takes you into whichever therapist account is currently active —
    // the same account you were in before you logged out, defaulting to
    // the first seeded profile the very first time. Real accounts wouldn't
    // make you pick from a roster of other people's profiles.
    showTherapistView();
  }
});

document.getElementById('login-create-btn').addEventListener('click', () => {
  if (accountType === 'client') {
    startIntake();
  } else {
    startTherapistSignup();
  }
});

// ===== EXPERIENCE SWITCHING (matching app <-> explore/website) =====
const experienceModal = document.getElementById('experience-modal');

function openExperienceModal() {
  experienceModal.classList.remove('hidden');
}

function enterMatchingExperience() {
  experienceModal.classList.add('hidden');
  if (intake.completed) {
    finishIntake();
    checkForNewMatches();
  } else {
    startIntake();
  }
}

function showExploreScreen() {
  experienceModal.classList.add('hidden');
  document.getElementById('therapist-nav').classList.add('hidden');
  // The Kindred tab in the bottom nav only makes sense once the client has
  // a working matching experience to tab back to — before intake, Explore
  // is a full-screen page whose only exit is "Match with a Therapist".
  document.getElementById('bottom-nav').classList.toggle('hidden', !intake.completed);
  showScreen('explore');
}

function renderExploreResources() {
  const list = document.getElementById('explore-resources-list');
  list.innerHTML = EXPLORE_RESOURCES.map(r => {
    const saved = savedResources.includes(r.id);
    return `
      <div class="resource-card">
        <span class="resource-icon">${r.icon}</span>
        <div class="resource-text">
          <div class="resource-title">${r.title}</div>
          <div class="resource-blurb">${r.blurb}</div>
        </div>
        <button class="resource-save-btn ${saved ? 'saved' : ''}" data-resource="${r.id}">${saved ? '✓ Saved' : 'Save'}</button>
      </div>`;
  }).join('');
  list.querySelectorAll('[data-resource]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.resource;
      const i = savedResources.indexOf(id);
      if (i === -1) savedResources.push(id); else savedResources.splice(i, 1);
      renderExploreResources();
    });
  });
}

document.getElementById('exp-match-btn').addEventListener('click', enterMatchingExperience);
document.getElementById('exp-explore-btn').addEventListener('click', showExploreScreen);
document.getElementById('explore-to-match-btn').addEventListener('click', enterMatchingExperience);
document.getElementById('explore-cta-btn').addEventListener('click', enterMatchingExperience);

// ===== THERAPIST SIGNUP — brand-new profile from scratch =====
const MANDATORY_PROMPTS = [
  'I look forward to helping you with...',
  'What can you expect in session with me?'
];
const OPTIONAL_PROMPTS = [
  "You'll probably click with me if...",
  'Together we could...',
  'I geek out on...',
  "We're the same type of weird if...",
  "I won't shut up about...",
  "Out of session, you'll find me...",
  'All I ask is that you...',
  'I became a therapist because...',
  'My greatest strength is...',
  "My favorite thing I've learned...",
  'I wish I could tell the younger version of myself...',
  'How I can help...'
];
const MAX_OPTIONAL_PROMPTS = 4;
const NEW_THERAPIST_GRADIENTS = [
  'linear-gradient(135deg,#c97b9e,#a3557a)',
  'linear-gradient(135deg,#7ba7c9,#4f7ea3)',
  'linear-gradient(135deg,#c9a15a,#a37a35)',
  'linear-gradient(135deg,#8fae7d,#5f7f4c)',
  'linear-gradient(135deg,#b08cc9,#82599e)'
];

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function formatTime12h(hhmm) {
  if (!hhmm) return '';
  const [h, m] = hhmm.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')}${period}`;
}

function timeSortKey(t12h) {
  const match = (t12h || '').match(/(\d+):(\d+)(am|pm)/);
  if (!match) return 0;
  let h = parseInt(match[1], 10);
  const min = parseInt(match[2], 10);
  if (match[3] === 'pm' && h !== 12) h += 12;
  if (match[3] === 'am' && h === 12) h = 0;
  return h * 60 + min;
}

let signupStep = 0;
const TOTAL_SIGNUP_STEPS = 6;
let newTherapistDraft = null;
const signupContent = document.getElementById('therapist-signup-content');

function startTherapistSignup() {
  signupStep = 0;
  newTherapistDraft = {
    name: '', credentials: ['', '', ''],
    licenseNumber: '', licenseVerified: false,
    website: '',
    pronouns: '', showPronouns: true, useCompanyName: false, companyName: '',
    practiceType: 'specialist',
    bestFor: '',
    tags: [], modalities: [],
    style: 'balanced', gender: 'female', lgbtqAffirming: false, languages: [], showOtherLanguage: false,
    formats: [], insuranceList: [], selfPayNote: '', rateMin: 130,
    city: '', state: '',
    mandatoryPromptAnswers: ['', ''],
    selectedOptionalPrompts: [], optionalPromptAnswers: {}, optionalPromptPhotos: {},
    acceptingOngoing: true, onDemand: false, onDemandSlots: [], agreedToOnDemandPolicy: false
  };
  renderSignupStep();
  showScreen('therapist-signup');
}

function renderSignupStep() {
  const d = newTherapistDraft;
  let html = `<div class="intake-progress">${Array.from({ length: TOTAL_SIGNUP_STEPS }).map((_, i) =>
    `<div class="dot ${i <= signupStep ? 'done' : ''}"></div>`).join('')}</div>`;

  if (signupStep === 0) {
    html += `
      <h1>Let's set up your profile</h1>
      <div class="intake-sub">This is what clients see first — you can edit all of it later.</div>
      <div class="t-form-label">Full name</div>
      <input type="text" class="t-rate-input" id="ts-name" placeholder="e.g. Dr. Jordan Reyes" value="${d.name}">
      <div class="t-form-label">Pronouns (optional)</div>
      <input type="text" class="t-rate-input" id="ts-pronouns" placeholder="e.g. she/her" value="${d.pronouns}">
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>Show pronouns on my swipe card</strong><span>Always visible on your full profile either way</span></div>
        <div class="switch ${d.showPronouns ? 'on' : ''}" id="ts-show-pronouns-switch"></div>
      </div>
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>List under a practice or company name</strong><span>Shows instead of your personal name to clients</span></div>
        <div class="switch ${d.useCompanyName ? 'on' : ''}" id="ts-use-company-switch"></div>
      </div>
      <div id="ts-company-name-field" style="${d.useCompanyName ? '' : 'display:none;'}">
        <div class="t-form-label">Company / practice name</div>
        <input type="text" class="t-rate-input" id="ts-company-name" placeholder="e.g. Bluebird Counseling" value="${d.companyName}">
      </div>
      <div class="t-form-label">Credentials (up to 3)</div>
      <input type="text" class="t-rate-input" id="ts-cred-0" placeholder="e.g. LPC" value="${d.credentials[0]}">
      <input type="text" class="t-rate-input" id="ts-cred-1" placeholder="e.g. PhD" value="${d.credentials[1]}">
      <input type="text" class="t-rate-input" id="ts-cred-2" placeholder="e.g. Certified Gottman Therapist" value="${d.credentials[2]}">
      <div class="t-form-label">License verification</div>
      ${d.licenseVerified
        ? `<div class="license-verified-box">✓ License ${d.licenseNumber} verified via Stripe Identity</div>`
        : `<input type="text" class="t-rate-input" id="ts-license-number" placeholder="License number, e.g. TX-38291" value="${d.licenseNumber}">
           <button type="button" class="stripe-verify-btn" id="ts-verify-license-btn">Verify with <strong>Stripe</strong> Identity</button>
           <div class="intake-sub" style="margin-top:6px;">Your profile can't go live until your license is verified. Clients only ever see verified therapists.</div>`}`;
  } else if (signupStep === 1) {
    html += `
      <h1>What do you specialize in?</h1>
      <div class="intake-sub">Some therapists are deep in a few areas, others work well across the board — both are valuable, we just want to show you to the right clients.</div>
      <div class="option-list" id="ts-practice-type-list">
        <div class="option-row ${d.practiceType === 'specialist' ? 'selected' : ''}" data-practice="specialist">I have a few core specialties</div>
        <div class="option-row ${d.practiceType === 'generalist' ? 'selected' : ''}" data-practice="generalist">I work with a broad range of concerns</div>
      </div>
      <div class="t-form-label">${d.practiceType === 'generalist' ? 'Optional — pick any specialties you especially enjoy' : "Specialties / needs you work with"}</div>
      <div class="chip-grid" id="ts-tags-grid">
        ${NEED_OPTIONS.map(n => `<div class="chip-option ${d.tags.includes(n) ? 'selected' : ''}" data-tag="${n}">${n}</div>`).join('')}
      </div>
      <div class="t-form-label">Modalities you're certified in</div>
      <div class="chip-grid" id="ts-modalities-grid">
        ${MODALITY_OPTIONS.map(m => `<div class="chip-option ${d.modalities.includes(m) ? 'selected' : ''}" data-modality="${m}">${m}</div>`).join('')}
      </div>
      <div class="t-form-label">In one line, who do you work best with?</div>
      <input type="text" class="t-rate-input" id="ts-bestfor" placeholder="e.g. I work best with new parents navigating postpartum anxiety" value="${d.bestFor}">`;
  } else if (signupStep === 2) {
    html += `
      <h1>How would you describe yourself?</h1>
      <div class="intake-sub">This helps clients who care about style find a fit — there's no wrong answer.</div>
      <div class="option-list" id="ts-style-list">
        <div class="option-row ${d.style === 'gentle' ? 'selected' : ''}" data-style="gentle">Mostly listens and reflects back</div>
        <div class="option-row ${d.style === 'balanced' ? 'selected' : ''}" data-style="balanced">A mix of both</div>
        <div class="option-row ${d.style === 'direct' ? 'selected' : ''}" data-style="direct">Direct — tells it like it is</div>
      </div>
      <div class="t-form-label">Gender</div>
      <div class="option-list" id="ts-gender-list">
        <div class="option-row ${d.gender === 'female' ? 'selected' : ''}" data-gender="female">Female</div>
        <div class="option-row ${d.gender === 'male' ? 'selected' : ''}" data-gender="male">Male</div>
        <div class="option-row ${d.gender === 'nonbinary' ? 'selected' : ''}" data-gender="nonbinary">Nonbinary</div>
      </div>
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>LGBTQ+ affirming</strong><span>Shown to clients who require this</span></div>
        <div class="switch ${d.lgbtqAffirming ? 'on' : ''}" id="ts-lgbtq-switch"></div>
      </div>
      <div class="t-form-label">Languages you speak</div>
      ${languageChipsHtml(d.languages, d.showOtherLanguage, 'ts')}`;
  } else if (signupStep === 3) {
    html += `
      <h1>Logistics</h1>
      <div class="intake-sub">So clients only see you if they can actually work with you.</div>
      <div class="t-form-label">Session format</div>
      <div class="chip-grid" id="ts-format-grid">
        <div class="chip-option ${d.formats.includes('video') ? 'selected' : ''}" data-format="video">Video</div>
        <div class="chip-option ${d.formats.includes('in-person') ? 'selected' : ''}" data-format="in-person">In-person</div>
      </div>
      <div class="t-form-label">City</div>
      <input type="text" class="t-rate-input" id="ts-city" placeholder="e.g. Austin" value="${d.city}">
      <div class="t-form-label">State</div>
      <select id="ts-state">
        <option value="">Select a state</option>
        ${US_STATES.map(s => `<option value="${s}" ${d.state === s ? 'selected' : ''}>${s}</option>`).join('')}
      </select>
      <div class="intake-sub" style="margin-top:6px;">Clients looking for in-person sessions only see therapists located in their city/state.</div>
      <div class="t-form-label">Insurance accepted</div>
      <div class="chip-grid" id="ts-insurance-grid">
        ${INSURANCE_OPTIONS.map(i => `<div class="chip-option ${d.insuranceList.includes(i) ? 'selected' : ''}" data-insurance="${i}">${i}</div>`).join('')}
      </div>
      <div class="t-form-label">If you don't take insurance, what should clients know? (optional)</div>
      <input type="text" class="t-rate-input" id="ts-selfpaynote" placeholder="e.g. Sliding scale available" value="${d.selfPayNote}">
      <div class="t-form-label">Your rate per session</div>
      <div class="budget-slider-row">
        <input type="range" id="ts-rate-slider" min="80" max="250" step="10" value="${d.rateMin}">
        <div class="budget-value" id="ts-rate-value">$${d.rateMin}</div>
      </div>`;
  } else if (signupStep === 4) {
    html += `
      <h1>In your words</h1>
      <div class="intake-sub">These two are required — answer in your own voice. Clients will scroll through all of them before reaching out.</div>
      ${MANDATORY_PROMPTS.map((q, i) => `
        <div class="t-form-label">${q}</div>
        <textarea class="intake-textarea" data-mandatory-prompt-index="${i}" rows="2" placeholder="Finish the sentence in your own voice...">${d.mandatoryPromptAnswers[i]}</textarea>
      `).join('')}
      <div class="t-form-label" style="margin-top:20px;">Pick up to ${MAX_OPTIONAL_PROMPTS} more to round out your profile</div>
      <div class="chip-grid" id="ts-optional-prompts-grid">
        ${OPTIONAL_PROMPTS.map(q => `<div class="chip-option ${d.selectedOptionalPrompts.includes(q) ? 'selected' : ''} ${(!d.selectedOptionalPrompts.includes(q) && d.selectedOptionalPrompts.length >= MAX_OPTIONAL_PROMPTS) ? 'chip-disabled' : ''}" data-optional-prompt="${q}">${q}</div>`).join('')}
      </div>
      ${d.selectedOptionalPrompts.map(q => `
        <div class="t-form-label">${q}</div>
        <textarea class="intake-textarea" data-optional-prompt-answer="${q}" rows="2" placeholder="Finish the sentence in your own voice...">${d.optionalPromptAnswers[q] || ''}</textarea>
        <div class="prompt-photo-row">
          ${d.optionalPromptPhotos[q] ? `<img class="prompt-photo-thumb" src="${d.optionalPromptPhotos[q]}">` : ''}
          <input type="file" accept="image/*" data-optional-prompt-photo="${q}">
        </div>
        <button type="button" class="text-btn" data-remove-optional-prompt="${q}">Remove this prompt</button>
      `).join('')}`;
  } else if (signupStep === 5) {
    html += `
      <h1>Availability</h1>
      <div class="intake-sub">You can change this anytime from your profile.</div>
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>Accepting ongoing clients</strong><span>Shown in Discover for new long-term matches</span></div>
        <div class="switch ${d.acceptingOngoing ? 'on' : ''}" id="ts-ongoing-switch"></div>
      </div>
      <div class="must-have-toggle">
        <div class="toggle-label"><strong>Offering on-demand this week</strong><span>Shown in On-Demand for one-time sessions</span></div>
        <div class="switch ${d.onDemand ? 'on' : ''}" id="ts-ondemand-switch"></div>
      </div>
      <div id="ts-slots-section" style="${d.onDemand ? '' : 'display:none;'}">
        <div class="t-form-label">Open slots this week</div>
        <div class="slot-row" id="ts-slots-list">
          ${d.onDemandSlots.map((s, i) => `<span class="slot-btn booked" style="cursor:pointer;" data-remove-slot="${i}">${s.label} ✕</span>`).join('')}
        </div>
        <div class="add-slot-row">
          <input type="text" id="ts-new-slot-input" placeholder="e.g. Mon 3:00pm">
          <button id="ts-add-slot-btn">Add</button>
        </div>
      </div>`;
  }

  let canProceed = true;
  if (signupStep === 0) canProceed = d.name.trim().length > 0 && d.licenseVerified;
  else if (signupStep === 3) canProceed = d.city.trim() !== '' && d.state !== '';
  else if (signupStep === 4) canProceed = d.mandatoryPromptAnswers.every(a => a.trim().length > 0);
  html += `
    <div class="intake-footer">
      ${signupStep > 0 ? `<button class="btn-back" id="ts-back">Back</button>` : ''}
      <button class="btn-next" id="ts-next" ${canProceed ? '' : 'disabled'}>${signupStep === TOTAL_SIGNUP_STEPS - 1 ? 'Create Profile' : 'Continue'}</button>
    </div>`;

  signupContent.innerHTML = html;
  attachSignupHandlers();
}

function attachSignupHandlers() {
  const d = newTherapistDraft;

  const nameInput = document.getElementById('ts-name');
  if (nameInput) nameInput.addEventListener('input', () => {
    d.name = nameInput.value;
    document.getElementById('ts-next').disabled = !(d.name.trim().length > 0 && d.licenseVerified);
  });
  const licenseInput = document.getElementById('ts-license-number');
  if (licenseInput) licenseInput.addEventListener('input', () => { d.licenseNumber = licenseInput.value; });
  const verifyBtn = document.getElementById('ts-verify-license-btn');
  if (verifyBtn) verifyBtn.addEventListener('click', () => {
    if (!d.licenseNumber.trim()) { showToast('Enter your license number first.'); return; }
    openStripeVerification(d.licenseNumber.trim(), () => {
      d.licenseVerified = true;
      renderSignupStep();
    });
  });
  const pronounsInput = document.getElementById('ts-pronouns');
  if (pronounsInput) pronounsInput.addEventListener('input', () => { d.pronouns = pronounsInput.value; });
  const showPronounsSwitch = document.getElementById('ts-show-pronouns-switch');
  if (showPronounsSwitch) showPronounsSwitch.addEventListener('click', () => { d.showPronouns = !d.showPronouns; renderSignupStep(); });
  const useCompanySwitch = document.getElementById('ts-use-company-switch');
  if (useCompanySwitch) useCompanySwitch.addEventListener('click', () => { d.useCompanyName = !d.useCompanyName; renderSignupStep(); });
  const companyNameInput = document.getElementById('ts-company-name');
  if (companyNameInput) companyNameInput.addEventListener('input', () => { d.companyName = companyNameInput.value; });
  [0, 1, 2].forEach(i => {
    const credInput = document.getElementById(`ts-cred-${i}`);
    if (credInput) credInput.addEventListener('input', () => { d.credentials[i] = credInput.value; });
  });

  document.querySelectorAll('#ts-practice-type-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.practiceType = el.dataset.practice; renderSignupStep(); });
  });

  document.querySelectorAll('#ts-tags-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const tag = el.dataset.tag;
      const i = d.tags.indexOf(tag);
      if (i === -1) d.tags.push(tag); else d.tags.splice(i, 1);
      renderSignupStep();
    });
  });
  document.querySelectorAll('#ts-modalities-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const m = el.dataset.modality;
      const i = d.modalities.indexOf(m);
      if (i === -1) d.modalities.push(m); else d.modalities.splice(i, 1);
      renderSignupStep();
    });
  });
  const bestForInput = document.getElementById('ts-bestfor');
  if (bestForInput) bestForInput.addEventListener('input', () => { d.bestFor = bestForInput.value; });

  document.querySelectorAll('#ts-style-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.style = el.dataset.style; renderSignupStep(); });
  });
  document.querySelectorAll('#ts-gender-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.gender = el.dataset.gender; renderSignupStep(); });
  });
  const lgbtqSwitch = document.getElementById('ts-lgbtq-switch');
  if (lgbtqSwitch) lgbtqSwitch.addEventListener('click', () => { d.lgbtqAffirming = !d.lgbtqAffirming; renderSignupStep(); });

  document.querySelectorAll('#ts-languages-grid [data-language]').forEach(el => {
    el.addEventListener('click', () => {
      const l = el.dataset.language;
      const i = d.languages.indexOf(l);
      if (i === -1) d.languages.push(l); else d.languages.splice(i, 1);
      renderSignupStep();
    });
  });
  document.querySelectorAll('#ts-languages-grid [data-remove-custom-language]').forEach(el => {
    el.addEventListener('click', () => {
      d.languages = d.languages.filter(l => l !== el.dataset.removeCustomLanguage);
      renderSignupStep();
    });
  });
  const tsOtherBtn = document.getElementById('ts-other-btn');
  if (tsOtherBtn) tsOtherBtn.addEventListener('click', () => { d.showOtherLanguage = true; renderSignupStep(); });
  const tsOtherAddBtn = document.getElementById('ts-other-add-btn');
  if (tsOtherAddBtn) tsOtherAddBtn.addEventListener('click', () => {
    const val = document.getElementById('ts-other-select').value;
    if (val && !d.languages.includes(val)) d.languages.push(val);
    renderSignupStep();
  });

  document.querySelectorAll('#ts-format-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const f = el.dataset.format;
      const i = d.formats.indexOf(f);
      if (i === -1) d.formats.push(f); else d.formats.splice(i, 1);
      renderSignupStep();
    });
  });
  const tsCityInput = document.getElementById('ts-city');
  if (tsCityInput) tsCityInput.addEventListener('input', () => {
    d.city = tsCityInput.value;
    document.getElementById('ts-next').disabled = !(d.city.trim() && d.state);
  });
  const tsStateSelect = document.getElementById('ts-state');
  if (tsStateSelect) tsStateSelect.addEventListener('change', () => { d.state = tsStateSelect.value; renderSignupStep(); });
  document.querySelectorAll('#ts-insurance-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const ins = el.dataset.insurance;
      const i = d.insuranceList.indexOf(ins);
      if (i === -1) d.insuranceList.push(ins); else d.insuranceList.splice(i, 1);
      renderSignupStep();
    });
  });
  const selfPayNoteInput = document.getElementById('ts-selfpaynote');
  if (selfPayNoteInput) selfPayNoteInput.addEventListener('input', () => { d.selfPayNote = selfPayNoteInput.value; });
  const rateSlider = document.getElementById('ts-rate-slider');
  if (rateSlider) {
    rateSlider.addEventListener('input', () => {
      d.rateMin = Number(rateSlider.value);
      document.getElementById('ts-rate-value').textContent = `$${d.rateMin}`;
    });
  }

  document.querySelectorAll('textarea[data-mandatory-prompt-index]').forEach(el => {
    el.addEventListener('input', () => {
      d.mandatoryPromptAnswers[Number(el.dataset.mandatoryPromptIndex)] = el.value;
      document.getElementById('ts-next').disabled = !d.mandatoryPromptAnswers.every(a => a.trim().length > 0);
    });
  });
  document.querySelectorAll('#ts-optional-prompts-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const q = el.dataset.optionalPrompt;
      const i = d.selectedOptionalPrompts.indexOf(q);
      if (i !== -1) {
        d.selectedOptionalPrompts.splice(i, 1);
      } else if (d.selectedOptionalPrompts.length < MAX_OPTIONAL_PROMPTS) {
        d.selectedOptionalPrompts.push(q);
      }
      renderSignupStep();
    });
  });
  document.querySelectorAll('textarea[data-optional-prompt-answer]').forEach(el => {
    el.addEventListener('input', () => { d.optionalPromptAnswers[el.dataset.optionalPromptAnswer] = el.value; });
  });
  document.querySelectorAll('input[data-optional-prompt-photo]').forEach(el => {
    el.addEventListener('change', () => {
      const file = el.files[0];
      if (!file) return;
      const q = el.dataset.optionalPromptPhoto;
      const reader = new FileReader();
      reader.onload = () => { d.optionalPromptPhotos[q] = reader.result; renderSignupStep(); };
      reader.readAsDataURL(file);
    });
  });
  document.querySelectorAll('[data-remove-optional-prompt]').forEach(el => {
    el.addEventListener('click', () => {
      const q = el.dataset.removeOptionalPrompt;
      d.selectedOptionalPrompts = d.selectedOptionalPrompts.filter(p => p !== q);
      delete d.optionalPromptAnswers[q];
      delete d.optionalPromptPhotos[q];
      renderSignupStep();
    });
  });

  const ongoingSwitch = document.getElementById('ts-ongoing-switch');
  if (ongoingSwitch) ongoingSwitch.addEventListener('click', () => { d.acceptingOngoing = !d.acceptingOngoing; renderSignupStep(); });
  const ondemandSwitch = document.getElementById('ts-ondemand-switch');
  if (ondemandSwitch) ondemandSwitch.addEventListener('click', () => {
    if (!d.onDemand && !d.agreedToOnDemandPolicy) {
      openTherapistOnDemandAgreement(() => { d.agreedToOnDemandPolicy = true; d.onDemand = true; renderSignupStep(); });
    } else {
      d.onDemand = !d.onDemand;
      renderSignupStep();
    }
  });
  const addSlotBtn = document.getElementById('ts-add-slot-btn');
  if (addSlotBtn) addSlotBtn.addEventListener('click', () => {
    const input = document.getElementById('ts-new-slot-input');
    const label = input.value.trim();
    if (!label) return;
    const rank = d.onDemandSlots.length ? Math.max(...d.onDemandSlots.map(s => s.rank)) + 1 : 1;
    d.onDemandSlots.push({ label, rank });
    renderSignupStep();
  });
  document.querySelectorAll('#ts-slots-list [data-remove-slot]').forEach(el => {
    el.addEventListener('click', () => { d.onDemandSlots.splice(Number(el.dataset.removeSlot), 1); renderSignupStep(); });
  });

  const backBtn = document.getElementById('ts-back');
  if (backBtn) backBtn.addEventListener('click', () => { signupStep--; renderSignupStep(); });

  document.getElementById('ts-next').addEventListener('click', () => {
    if (signupStep < TOTAL_SIGNUP_STEPS - 1) {
      signupStep++;
      renderSignupStep();
    } else {
      finishTherapistSignup();
    }
  });
}

function buildTherapistMeta(d) {
  const formatLabel = d.formats.length === 2 ? 'Video & In-person'
    : d.formats.includes('video') ? 'Video only'
    : d.formats.includes('in-person') ? 'In-person only'
    : 'Format not set';
  return [formatLabel, `$${d.rateMin}/session`];
}

function finishTherapistSignup() {
  const d = newTherapistDraft;
  const id = 't' + Date.now();
  const nameWords = d.name.replace(/^Dr\.?\s*/i, '').split(' ').filter(Boolean);
  const initials = nameWords.map(w => w[0]).join('').slice(0, 2).toUpperCase() || '??';
  const gradient = NEW_THERAPIST_GRADIENTS[THERAPISTS.length % NEW_THERAPIST_GRADIENTS.length];

  const trimmedCredentials = d.credentials.map(c => c.trim()).filter(Boolean);
  THERAPISTS.push({
    id, name: d.name.trim(),
    credentials: trimmedCredentials.length ? trimmedCredentials : ['Licensed Therapist'],
    licenseVerified: d.licenseVerified, licenseNumber: d.licenseNumber.trim(),
    website: d.website.trim(),
    stats: { profileViews: 0, hearts: 0, top5: 0, conversationsStarted: 0, weekViews: 0, weekHearts: 0 },
    media: { video: null, office: null, outOfOffice: null },
    persona: { inOffice: '', outOfOffice: '' },
    ethnicity: '', affinities: [], faith: [], availabilitySlots: [],
    idealClient: emptyIdealClient(), // filled in later from the profile tab
    pronouns: d.pronouns.trim(), showPronouns: d.showPronouns,
    useCompanyName: d.useCompanyName, companyName: d.companyName.trim(),
    photo: null,
    initials, gradient,
    meta: buildTherapistMeta(d),
    bestFor: d.bestFor.trim(), selfPayNote: d.selfPayNote.trim(),
    tags: d.tags, practiceType: d.practiceType, externalAppointments: [],
    mandatoryPromptAnswers: d.mandatoryPromptAnswers.map(a => a.trim()),
    optionalPrompts: d.selectedOptionalPrompts.map(q => ({
      question: q,
      answer: (d.optionalPromptAnswers[q] || '').trim(),
      photo: d.optionalPromptPhotos[q] || null
    })),
    modalities: d.modalities, style: d.style,
    identity: { gender: d.gender, lgbtqAffirming: d.lgbtqAffirming }, languages: d.languages,
    formats: d.formats, rateMin: d.rateMin, insuranceList: d.insuranceList,
    location: { city: d.city.trim(), state: d.state },
    acceptingOngoing: d.acceptingOngoing, onDemand: d.onDemand, onDemandSlots: d.onDemandSlots,
    agreedToOnDemandPolicy: d.agreedToOnDemandPolicy,
    nextAvailableRank: d.acceptingOngoing ? 1 : null,
    nextAvailableLabel: d.acceptingOngoing ? 'This week' : 'Not accepting new ongoing clients'
  });

  currentTherapistId = id;
  showTherapistView();
}

function logout() {
  accountType = null;
  therapistWelcomeShown = false;
  document.getElementById('bottom-nav').classList.add('hidden');
  document.getElementById('therapist-nav').classList.add('hidden');
  showScreen('account-type');
}

// ===== THERAPIST VIEW =====
let currentTherapistId = THERAPISTS[0].id;
let profileShowOtherLanguage = false; // transient UI flag for the profile editor's "+Other" language picker — not real therapist data

let therapistWelcomeShown = false; // once per login, reset on logout

function showTherapistView() {
  document.getElementById('bottom-nav').classList.add('hidden');
  document.getElementById('therapist-nav').classList.remove('hidden');
  showTScreen('t-insights');
  if (!therapistWelcomeShown) {
    therapistWelcomeShown = true;
    openTherapistWelcome();
  }
}

// Login greeting with the week's numbers — the dashboard's headline stats,
// served before the therapist even asks.
function openTherapistWelcome() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  if (!t) return;
  const hearts = t.stats.weekHearts;
  const matchCount = matches.filter(m => m.therapist.id === t.id && (m.status === 'pending' || m.status === 'matched')).length;
  const firstName = t.name.replace(/^Dr\.?\s*/i, '').split(' ')[0];
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2 class="welcome-stats-title">Welcome back, ${firstName}</h2>
    <div class="welcome-stats-line">💜 You got <strong>${hearts} heart${hearts === 1 ? '' : 's'}</strong> and <strong>${matchCount} match${matchCount === 1 ? '' : 'es'}</strong> this week.</div>
    <button class="primary-btn" style="margin-top:16px;background:var(--coral);color:white;" id="welcome-insights-btn">See My Insights</button>
    <button class="text-btn" id="welcome-close-btn" style="color:var(--ink-soft);">Continue to Home</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  document.getElementById('welcome-insights-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    showTScreen('t-insights');
  });
  document.getElementById('welcome-close-btn').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
  });
}

function showTScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('#therapist-nav .nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.remove('hidden');
  const navBtn = document.querySelector(`#therapist-nav .nav-btn[data-tscreen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (name === 't-home') renderTherapistHome();
  if (name === 't-requests') renderRequests();
  if (name === 't-insights') renderTherapistInsights();
  if (name === 't-profile') renderTherapistProfile();
  if (name === 't-settings') renderTherapistSettings();
}

// ===== THERAPIST INSIGHTS DASHBOARD =====
function renderTherapistInsights() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  const container = document.getElementById('t-insights-content');
  // "Top 5" = how many clients are using one of their 5 match-request slots
  // on this therapist right now (pending or matched), on top of the seeded
  // historical baseline.
  const liveTop5 = matches.filter(m => m.therapist.id === t.id && (m.status === 'pending' || m.status === 'matched')).length;
  const tiles = [
    { label: 'Profile views', value: t.stats.profileViews, delta: `+${t.stats.weekViews} this week` },
    { label: 'Hearts', value: t.stats.hearts, delta: `+${t.stats.weekHearts} this week` },
    { label: "In clients' Top 5", value: t.stats.top5 + liveTop5, delta: 'active request slots' },
    { label: 'Conversations started', value: t.stats.conversationsStarted, delta: 'all time' }
  ];
  container.innerHTML = `
    <div class="intake-sub" style="margin-bottom:14px;">How clients are finding and responding to your profile.</div>
    <div class="stat-grid">
      ${tiles.map(s => `
        <div class="stat-tile">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
          <div class="stat-delta">${s.delta}</div>
        </div>
      `).join('')}
    </div>
    <div class="pref-item" style="margin-top:16px;">
      <div class="pref-label">Your website</div>
      <div class="pref-value" style="margin-bottom:8px;">${t.website ? `Shown on your profile as <strong>🌐 ${t.website}</strong>` : 'Add your practice website — it appears on your full profile for clients.'}</div>
      <div class="add-slot-row">
        <input type="text" id="t-website-input" placeholder="e.g. yourpractice.com" value="${t.website || ''}">
        <button id="t-website-save-btn">Save</button>
      </div>
    </div>
    <div class="portal-note" style="margin-top:12px;">Counts reflect this demo session plus seeded history — real analytics arrive with the production backend.</div>
  `;
  document.getElementById('t-website-save-btn').addEventListener('click', () => {
    t.website = document.getElementById('t-website-input').value.trim().replace(/^https?:\/\//, '');
    showToast(t.website ? 'Website saved — now on your profile.' : 'Website removed.');
    renderTherapistInsights();
  });
}

document.querySelectorAll('#therapist-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showTScreen(btn.dataset.tscreen));
});
document.getElementById('therapist-logout-0').addEventListener('click', logout);
document.getElementById('therapist-logout-1').addEventListener('click', logout);
document.getElementById('therapist-logout-2').addEventListener('click', logout);
document.getElementById('therapist-logout-3').addEventListener('click', logout);
document.getElementById('therapist-logout-4').addEventListener('click', logout);

function updateTNavBadge() {
  const badge = document.getElementById('t-nav-badge');
  const count = matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'pending').length;
  if (count > 0) { badge.textContent = count; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}

// ===== THERAPIST HOME — combined weekly schedule =====
// Pulls together three sources into one view: on-demand one-time bookings
// (already have a real slot), ongoing matches with a recurring time set
// during accept, and appointments the therapist adds manually for anything
// booked outside Kindred — so this is their real full week, not just what
// happened on the platform.
// The Home tab is an AVAILABILITY calendar, not a scheduling calendar: it
// answers "what spaces do I have open?" for new ongoing clients and for
// one-time on-demand sessions. Filled slots show as Booked; the therapist
// manages their openings here.
function renderTherapistHome() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  document.getElementById('t-home-title').textContent = 'On Demand';
  const list = document.getElementById('t-home-list');

  const ongoingBookings = matches.filter(m => m.therapist.id === t.id && m.status === 'matched' && m.scheduledDay);
  const odBooked = matches.filter(m => m.therapist.id === t.id && m.status === 'ondemand' && m.paymentStatus === 'paid');
  const sortedAvail = [...t.availabilitySlots]
    .map((s, i) => ({ ...s, i }))
    .sort((a, b) => DAYS_OF_WEEK.indexOf(a.day) - DAYS_OF_WEEK.indexOf(b.day) || timeSortKey(a.time) - timeSortKey(b.time));
  const openOngoing = sortedAvail.filter(s => !ongoingBookings.some(m => m.scheduledDay === s.day && m.scheduledTime === s.time)).length;

  let html = onDemandToggleHtml(t);

  // ===== Ongoing availability =====
  html += `<div class="avail-section-title">🌱 Open for new ongoing clients</div>`;
  if (!t.acceptingOngoing) {
    html += `<p class="portal-note">You're not accepting new ongoing clients right now. Turn that on in your Profile to open weekly slots.</p>`;
  } else {
    html += `<div class="avail-sub">${openOngoing} open weekly ${openOngoing === 1 ? 'slot' : 'slots'} · recurring times a new client can book</div>`;
    if (sortedAvail.length === 0) {
      html += `<p class="portal-note">No open weekly slots yet — add the recurring times you could take a new client.</p>`;
    } else {
      html += sortedAvail.map(s => {
        const filledBy = ongoingBookings.find(m => m.scheduledDay === s.day && m.scheduledTime === s.time);
        return `<div class="avail-slot ${filledBy ? 'filled' : 'open'}">
          <div class="avail-when"><span class="avail-day">${s.day}</span><span class="avail-time">${s.time}</span></div>
          <span class="avail-status ${filledBy ? 'booked' : ''}">${filledBy ? 'Booked' : 'Open'}</span>
          ${filledBy ? '' : `<button class="appt-remove" data-remove-avail="${s.i}">✕</button>`}
        </div>`;
      }).join('');
    }
    html += `
      <div class="schedule-row">
        <select id="avail-day">${DAYS_OF_WEEK.map(d => `<option value="${d}">${d}</option>`).join('')}</select>
        <input type="time" id="avail-time" value="10:00">
      </div>
      <button class="message-btn-full" id="add-avail-btn">+ Add open slot</button>`;
  }

  // ===== On-demand availability =====
  html += `<div class="avail-section-title" style="margin-top:22px;">⚡ On-demand this week</div>`;
  if (t.onDemandBanned) {
    html += `<p class="portal-note">On-demand access is suspended after a reported no-show. Ongoing matching is unaffected.</p>`;
  } else if (!t.onDemand) {
    html += `<p class="portal-note">On-demand is off. Turn it on in your Profile to offer one-time sessions.</p>`;
  } else {
    if (t.onDemandSlots.length === 0) {
      html += `<p class="portal-note">No on-demand openings this week — add a one-time slot below.</p>`;
    } else {
      html += t.onDemandSlots.map((s, i) => {
        const booked = odBooked.find(m => m.slotLabel === s.label);
        return `<div class="avail-slot ${booked ? 'filled' : 'open'}">
          <div class="avail-when"><span class="avail-day">${s.label}</span></div>
          <span class="avail-status ${booked ? 'booked' : ''}">${booked ? 'Booked' : 'Open'}</span>
          ${booked ? '' : `<button class="appt-remove" data-remove-od="${i}">✕</button>`}
        </div>`;
      }).join('');
    }
    html += `
      <div class="add-slot-row">
        <input type="text" id="new-od-slot" placeholder="e.g. Thu 4:00pm">
        <button id="add-od-btn">Add</button>
      </div>`;
  }

  list.innerHTML = html;

  list.querySelectorAll('[data-remove-avail]').forEach(btn => {
    btn.addEventListener('click', () => { t.availabilitySlots.splice(Number(btn.dataset.removeAvail), 1); renderTherapistHome(); });
  });
  bindOnDemandToggle(t);
  const addAvailBtn = document.getElementById('add-avail-btn');
  if (addAvailBtn) addAvailBtn.addEventListener('click', () => {
    const day = document.getElementById('avail-day').value;
    const time = formatTime12h(document.getElementById('avail-time').value);
    if (t.availabilitySlots.some(s => s.day === day && s.time === time)) { showToast('That slot is already open.'); return; }
    t.availabilitySlots.push({ day, time });
    renderTherapistHome();
  });
  list.querySelectorAll('[data-remove-od]').forEach(btn => {
    btn.addEventListener('click', () => { t.onDemandSlots.splice(Number(btn.dataset.removeOd), 1); renderTherapistHome(); });
  });
  const addOdBtn = document.getElementById('add-od-btn');
  if (addOdBtn) addOdBtn.addEventListener('click', () => {
    const label = document.getElementById('new-od-slot').value.trim();
    if (!label) return;
    const rank = t.onDemandSlots.length ? Math.max(...t.onDemandSlots.map(s => s.rank)) + 1 : 1;
    t.onDemandSlots.push({ label, rank });
    renderTherapistHome();
  });
}

function renderRequests() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  document.getElementById('t-requests-title').textContent = 'Inquiries';
  const list = document.getElementById('requests-list');
  const myRequests = matches.filter(m => m.therapist.id === currentTherapistId && m.status !== 'ondemand');
  const myBookings = matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'ondemand');

  const pendingCount = myRequests.filter(m => m.status === 'pending').length;

  let html = '';
  if (pendingCount) {
    html += `<div class="hello-banner">✨ ${pendingCount === 1 ? 'A tiny hello has arrived!' : `${pendingCount} tiny hellos have arrived!`}</div>`;
  }
  if (myRequests.length === 0) {
    html += `<p class="empty-state">No hellos yet. When someone reaches out to you, they'll land right here.</p>`;
  } else {
    html += myRequests.slice().reverse().map(m => {
      if (m.status === 'pending') {
        // Private to the therapist: flags the clients they said they're the
        // strongest fit for. Clients never see this, and not having it changes
        // nothing about whether they can reach this therapist.
        const ideal = idealMatchResult(t);
        return `<div class="request-card${ideal.isIdeal ? ' ideal-match' : ''}">
          ${ideal.isIdeal ? `<div class="ideal-flag" title="Matches the ideal client you described — only you can see this">✦ Ideal match${ideal.reasons.length ? ` · ${ideal.reasons.join(' · ')}` : ''}</div>` : ''}
          <div class="request-need">Looking for support with: <strong>${m.needsSnapshot.length ? m.needsSnapshot.join(', ') : 'general support'}</strong></div>
          ${m.desiredFrequency ? `<div class="request-need">Hoping to meet: <strong>${m.desiredFrequency}</strong></div>` : ''}
          ${m.introMessage ? `<div class="request-intro">&ldquo;${m.introMessage}&rdquo;</div>` : ''}
          <button class="message-btn-full" data-action="message">💬 Message before deciding</button>
          ${m._showScheduleForm ? `
            <div class="t-form-label">Set a recurring time for this client</div>
            <div class="schedule-row">
              <select id="schedule-day">${DAYS_OF_WEEK.map(d => `<option value="${d}">${d}</option>`).join('')}</select>
              <input type="time" id="schedule-time" value="10:00">
            </div>
            <button class="message-btn-full" data-action="confirm-schedule">Confirm Schedule</button>
          ` : `
            <div class="request-actions">
              <button class="decline-btn" data-decision="decline">Decline</button>
              <button class="accept-btn" data-decision="accept">Accept</button>
            </div>
          `}
        </div>`;
      }
      if (m.status === 'matched') {
        return `<div class="request-card resolved">
          <span class="resolved-tag matched">✓ Accepted</span> — now chatting
          ${m.scheduledDay ? `<div class="request-need" style="margin-top:6px;">Recurring: <strong>${m.scheduledDay}s at ${m.scheduledTime}</strong></div>` : ''}
          <button class="message-btn-full" data-action="message" style="margin-top:10px;">💬 Message</button>
        </div>`;
      }
      return `<div class="request-card resolved"><span class="resolved-tag declined">Declined</span></div>`;
    }).join('');
  }
  myBookings.forEach((m, i) => {
    if (m.paymentStatus === 'authorized') {
      html += `<div class="request-card">
        <div class="request-need">On-Demand request — <strong>${m.slotLabel}</strong> · $${m.amountPaid} authorized</div>
        <div class="request-intro">The client's card is on hold — it's only charged if you accept. Accepting commits you to showing up: a reported no-show refunds them in full and suspends your On-Demand access.</div>
        <div class="decision-row">
          <button class="decline-btn" data-od-decline="${i}">Decline</button>
          <button class="accept-btn" data-od-accept="${i}">Accept — process $${m.amountPaid}</button>
        </div>
      </div>`;
    } else if (m.paymentStatus === 'paid') {
      html += `<div class="confirmed-session">One-time session confirmed — ${m.slotLabel} · $${m.amountPaid} paid</div>`;
    } else if (m.paymentStatus === 'noshow-refunded') {
      html += `<div class="confirmed-session cancelled">No-show reported — ${m.slotLabel} · $${m.amountPaid} refunded to the client · your On-Demand access is suspended</div>`;
    } else {
      html += `<div class="confirmed-session cancelled">${m.slotLabel} — ${refundStatusLabel(m.paymentStatus)}</div>`;
    }
  });

  list.innerHTML = html;
  list.querySelectorAll('[data-od-accept]').forEach(btn => {
    btn.addEventListener('click', () => acceptOndemandBooking(myBookings[Number(btn.dataset.odAccept)]));
  });
  list.querySelectorAll('[data-od-decline]').forEach(btn => {
    btn.addEventListener('click', () => declineOndemandBooking(myBookings[Number(btn.dataset.odDecline)]));
  });
  list.querySelectorAll('[data-decision="decline"]').forEach(btn => {
    btn.addEventListener('click', () => declineRequest(currentTherapistId));
  });
  list.querySelectorAll('[data-decision="accept"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = matches.find(m => m.therapist.id === currentTherapistId && m.status === 'pending');
      if (m) { m._showScheduleForm = true; renderRequests(); }
    });
  });
  list.querySelectorAll('[data-action="confirm-schedule"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const day = document.getElementById('schedule-day').value;
      const time = document.getElementById('schedule-time').value;
      confirmAcceptWithSchedule(currentTherapistId, day, time);
    });
  });
  list.querySelectorAll('[data-action="message"]').forEach(btn => {
    btn.addEventListener('click', () => openChat(t, 'therapist'));
  });
  updateTNavBadge();
}

let tSpecOtherOpen = false, tModOtherOpen = false; // transient "+ Other" panels

function renderTherapistProfile() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  const container = document.getElementById('t-profile-content');
  container.innerHTML = `
    <div class="t-form-name">${t.name} <span class="t-form-creds">${credentialsLabel(t)}</span></div>
    <button class="primary-btn" style="background:white;border:1.5px solid var(--coral);color:var(--coral-dark);margin-bottom:20px;" id="preview-profile-btn">👀 Preview My Profile as a Client</button>

    <div class="ideal-section">
      <div class="ideal-section-head">
        <h3>✦ Your ideal client</h3>
        <span class="ideal-private">Private — only you see this</span>
      </div>
      <p class="ideal-section-sub">Describe who you're the strongest fit for. When a client lines up, they're flagged <strong>✦ Ideal match</strong> on your requests. This never limits who can find you — everything below this section is your "I also work with" profile, and that's what clients see.</p>

      <div class="t-form-label">Ages</div>
      <div class="chip-grid">${CLIENT_AGE_BANDS.map(a => `<div class="chip-option ${t.idealClient.ageBands.includes(a) ? 'selected' : ''}" data-ideal="ageBands" data-val="${a}">${a}</div>`).join('')}</div>

      <div class="t-form-label">Gender</div>
      <div class="chip-grid">${CLIENT_GENDER_OPTIONS.map(g => `<div class="chip-option ${t.idealClient.genders.includes(g) ? 'selected' : ''}" data-ideal="genders" data-val="${g}">${g}</div>`).join('')}</div>

      <div class="t-form-label">Field of work</div>
      <div class="chip-grid">${CLIENT_FIELD_OPTIONS.map(f => `<div class="chip-option ${t.idealClient.fields.includes(f) ? 'selected' : ''}" data-ideal="fields" data-val="${f}">${f}</div>`).join('')}</div>

      <div class="t-form-label">What they want to work on</div>
      <div class="chip-grid">${NEED_OPTIONS.map(n => `<div class="chip-option ${t.idealClient.needs.includes(n) ? 'selected' : ''}" data-ideal="needs" data-val="${n}">${n}</div>`).join('')}</div>

      <div class="t-form-label">Modality</div>
      <div class="chip-grid">${MODALITY_OPTIONS.map(m => `<div class="chip-option ${t.idealClient.modalities.includes(m) ? 'selected' : ''}" data-ideal="modalities" data-val="${m}">${m}</div>`).join('')}</div>

      <div class="t-form-label">Payment <span class="ideal-hard">practical — must line up</span></div>
      <div class="chip-grid">${PAYMENT_TYPE_OPTIONS.map(p => `<div class="chip-option ${t.idealClient.payment === p ? 'selected' : ''}" data-ideal-pay="${p}">${p}</div>`).join('')}</div>

      <div class="t-form-label">When you'd see them <span class="ideal-hard">practical — must line up</span></div>
      <div class="chip-grid">${AVAILABILITY_OPTIONS.map(a => `<div class="chip-option ${t.idealClient.availability.includes(a) ? 'selected' : ''}" data-ideal="availability" data-val="${a}">${a}</div>`).join('')}</div>

      <div class="t-form-label">Must-haves <span class="ideal-hint">pick up to ${MAX_MUST_HAVES} — these count double, but still never filter anyone out</span></div>
      <div class="chip-grid">${IDEAL_DIMENSIONS.map(d => {
        const on = t.idealClient.mustHaves.includes(d.key);
        const full = t.idealClient.mustHaves.length >= MAX_MUST_HAVES && !on;
        return `<div class="chip-option ${on ? 'selected' : ''}${full ? ' chip-disabled' : ''}" data-ideal-must="${d.key}">${d.label}</div>`;
      }).join('')}</div>
    </div>

    <div class="t-form-label">Pronouns (optional)</div>
    <input type="text" class="t-rate-input" id="t-pronouns-input" placeholder="e.g. she/her" value="${t.pronouns || ''}">
    <div class="must-have-toggle">
      <div class="toggle-label"><strong>Show pronouns on my swipe card</strong><span>Always visible on your full profile either way</span></div>
      <div class="switch ${t.showPronouns ? 'on' : ''}" id="t-show-pronouns-switch"></div>
    </div>
    <div class="must-have-toggle">
      <div class="toggle-label"><strong>List under a practice or company name</strong><span>Shows instead of your personal name to clients</span></div>
      <div class="switch ${t.useCompanyName ? 'on' : ''}" id="t-use-company-switch"></div>
    </div>
    <div id="t-company-name-field" style="${t.useCompanyName ? '' : 'display:none;'}">
      <div class="t-form-label">Company / practice name</div>
      <input type="text" class="t-rate-input" id="t-company-name-input" placeholder="e.g. Bluebird Counseling" value="${t.companyName || ''}">
    </div>
    <div class="t-form-label">Credentials (up to 3)</div>
    <input type="text" class="t-rate-input" id="t-cred-0-input" placeholder="e.g. LPC" value="${t.credentials[0] || ''}">
    <input type="text" class="t-rate-input" id="t-cred-1-input" placeholder="e.g. PhD" value="${t.credentials[1] || ''}">
    <input type="text" class="t-rate-input" id="t-cred-2-input" placeholder="e.g. Certified Gottman Therapist" value="${t.credentials[2] || ''}">

    <div class="t-form-label">Practice type</div>
    <div class="chip-grid">
      <div class="chip-option ${t.practiceType === 'specialist' ? 'selected' : ''}" data-set-practice="specialist">A few core specialties</div>
      <div class="chip-option ${t.practiceType === 'generalist' ? 'selected' : ''}" data-set-practice="generalist">Broad range of concerns</div>
    </div>

    <div class="everyone-section-head">
      <h3>Everyone I work with</h3>
      <span class="everyone-public">Public — this is what clients see</span>
    </div>
    <p class="everyone-sub">The full range you're able to take on. Being broad here doesn't dilute your ideal matches — it just means more of the right people can find you.</p>

    <div class="t-form-label">Specialties / needs you work with <span class="ideal-hint">${t.tags.length} selected</span></div>
    <div class="chip-grid">${NEED_OPTIONS.map(n => `<div class="chip-option ${t.tags.includes(n) ? 'selected' : ''}" data-toggle-tag="${n}">${n}</div>`).join('')}
      ${t.tags.filter(x => !NEED_OPTIONS.includes(x)).map(x => `<div class="chip-option selected" data-toggle-tag="${x}">${x}</div>`).join('')}
      <div class="chip-option" id="t-spec-other-btn">+ Other</div>
    </div>
    ${tSpecOtherOpen ? `<div class="other-language-row">
      <select id="t-spec-other-select">
        <option value="">Choose a specialty…</option>
        ${OTHER_SPECIALTIES.filter(x => !t.tags.includes(x)).map(x => `<option value="${x}">${x}</option>`).join('')}
      </select>
    </div>` : ''}

    <div class="t-form-label">Modalities you offer</div>
    <div class="chip-grid">${MODALITY_OPTIONS.map(m => `<div class="chip-option ${t.modalities.includes(m) ? 'selected' : ''}" data-toggle-modality="${m}">${m}</div>`).join('')}
      ${t.modalities.filter(x => !MODALITY_OPTIONS.includes(x)).map(x => `<div class="chip-option selected" data-toggle-modality="${x}">${x}</div>`).join('')}
      <div class="chip-option" id="t-mod-other-btn">+ Other</div>
    </div>
    ${tModOtherOpen ? `<div class="other-language-row">
      <select id="t-mod-other-select">
        <option value="">Choose a modality…</option>
        ${OTHER_MODALITIES.filter(x => !t.modalities.includes(x)).map(x => `<option value="${x}">${x}</option>`).join('')}
      </select>
    </div>` : ''}

    <div class="t-form-label">In one line, who do you work best with?</div>
    <input type="text" class="t-rate-input" id="t-bestfor-input" placeholder="e.g. I work best with new parents navigating postpartum anxiety" value="${t.bestFor || ''}">

    <div class="t-form-label" style="margin-top:20px;">Photos & video</div>
    <div class="intake-sub">These build the "get to know you" feed clients scroll through — the more of you they see, the stronger the match.</div>

    <div class="media-row">
      <div class="media-thumb">${t.photo ? `<img src="${t.photo}">` : '<span>—</span>'}</div>
      <div class="media-row-text"><strong>Lead photo</strong><span>Personal or professional — whichever feels most like you</span></div>
      <input type="file" accept="image/*" data-media-upload="photo">
    </div>
    <div class="media-row">
      <div class="media-thumb">${t.media.video ? '🎬' : '<span>—</span>'}</div>
      <div class="media-row-text"><strong>Quick video</strong><span>A 15–30s hello — clients hear your voice before they reach out</span></div>
      <input type="file" accept="video/*" data-media-upload="video">
    </div>
    <div class="media-row">
      <div class="media-thumb">${t.media.office ? `<img src="${t.media.office}">` : '<span>—</span>'}</div>
      <div class="media-row-text"><strong>Office space</strong><span>Optional — where sessions happen</span></div>
      <input type="file" accept="image/*" data-media-upload="office">
    </div>
    <div class="media-row">
      <div class="media-thumb">${t.media.outOfOffice ? `<img src="${t.media.outOfOffice}">` : '<span>—</span>'}</div>
      <div class="media-row-text"><strong>Out of office</strong><span>A glimpse of your life outside sessions</span></div>
      <input type="file" accept="image/*" data-media-upload="outOfOffice">
    </div>

    <div class="t-form-label">Who I am in the office...</div>
    <textarea class="intake-textarea" id="t-persona-in" rows="2" placeholder="What sessions with you actually feel like">${t.persona.inOffice || ''}</textarea>
    <div class="t-form-label">Who I am out of the office...</div>
    <textarea class="intake-textarea" id="t-persona-out" rows="2" placeholder="The human behind the license">${t.persona.outOfOffice || ''}</textarea>

    <div class="t-form-label">Gender</div>
    <div class="chip-grid">
      <div class="chip-option ${t.identity.gender === 'female' ? 'selected' : ''}" data-set-gender="female">Female</div>
      <div class="chip-option ${t.identity.gender === 'male' ? 'selected' : ''}" data-set-gender="male">Male</div>
      <div class="chip-option ${t.identity.gender === 'nonbinary' ? 'selected' : ''}" data-set-gender="nonbinary">Nonbinary</div>
    </div>

    <div class="must-have-toggle">
      <div class="toggle-label"><strong>LGBTQ+ affirming</strong><span>Shown to clients who require this</span></div>
      <div class="switch ${t.identity.lgbtqAffirming ? 'on' : ''}" id="t-lgbtq-switch"></div>
    </div>

    <div class="t-form-label">Languages you speak</div>
    ${languageChipsHtml(t.languages, profileShowOtherLanguage, 'tp')}

    <div class="t-form-label">Session format</div>
    <div class="chip-grid">
      <div class="chip-option ${t.formats.includes('video') ? 'selected' : ''}" data-toggle-format="video">Video</div>
      <div class="chip-option ${t.formats.includes('in-person') ? 'selected' : ''}" data-toggle-format="in-person">In-person</div>
    </div>

    <div class="t-form-label">City</div>
    <input type="text" class="t-rate-input" id="t-city-input" placeholder="e.g. Austin" value="${t.location.city}">
    <div class="t-form-label">State</div>
    <select id="t-state-input">
      <option value="">Select a state</option>
      ${US_STATES.map(s => `<option value="${s}" ${t.location.state === s ? 'selected' : ''}>${s}</option>`).join('')}
    </select>
    <div class="intake-sub" style="margin-top:6px;">Clients looking for in-person sessions only see therapists located in their city/state.</div>

    <div class="t-form-label">Insurance accepted</div>
    <div class="chip-grid">${INSURANCE_OPTIONS.map(i => `<div class="chip-option ${t.insuranceList.includes(i) ? 'selected' : ''}" data-toggle-insurance="${i}">${i}</div>`).join('')}</div>

    <div class="t-form-label">If you don't take insurance, what should clients know? (optional)</div>
    <input type="text" class="t-rate-input" id="t-selfpaynote-input" placeholder="e.g. Sliding scale available" value="${t.selfPayNote || ''}">

    <div class="t-form-label">Rate (per session, $)</div>
    <input type="number" class="t-rate-input" id="t-rate-input" value="${t.rateMin}">

    <div class="t-form-label" style="margin-top:20px;">In your words</div>
    ${MANDATORY_PROMPTS.map((q, i) => `
      <div class="t-form-label">${q}</div>
      <textarea class="intake-textarea" data-edit-mandatory-prompt-index="${i}" rows="2">${t.mandatoryPromptAnswers[i] || ''}</textarea>
    `).join('')}
    <div class="t-form-label" style="margin-top:12px;">Pick up to ${MAX_OPTIONAL_PROMPTS} more (${t.optionalPrompts.length}/${MAX_OPTIONAL_PROMPTS} selected)</div>
    <div class="chip-grid">
      ${OPTIONAL_PROMPTS.map(q => {
        const selected = t.optionalPrompts.some(p => p.question === q);
        const disabled = !selected && t.optionalPrompts.length >= MAX_OPTIONAL_PROMPTS;
        return `<div class="chip-option ${selected ? 'selected' : ''} ${disabled ? 'chip-disabled' : ''}" data-toggle-optional-prompt="${q}">${q}</div>`;
      }).join('')}
    </div>
    ${t.optionalPrompts.length > 1 ? `<p class="reorder-hint">Use ↑ ↓ to set the order clients see these in.</p>` : ''}
    ${t.optionalPrompts.map((p, i) => `
      <div class="prompt-edit-head">
        <div class="t-form-label" style="margin:0;">${i + 1}. ${p.question}</div>
        <div class="reorder-btns">
          <button type="button" class="reorder-btn" data-move-prompt="${i}" data-dir="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move up">↑</button>
          <button type="button" class="reorder-btn" data-move-prompt="${i}" data-dir="1" ${i === t.optionalPrompts.length - 1 ? 'disabled' : ''} aria-label="Move down">↓</button>
        </div>
      </div>
      <textarea class="intake-textarea" data-edit-optional-prompt-answer="${i}" rows="2">${p.answer || ''}</textarea>
      <div class="prompt-photo-row">
        ${p.photo ? `<img class="prompt-photo-thumb" src="${p.photo}">` : ''}
        <input type="file" accept="image/*" data-edit-optional-prompt-photo="${i}">
      </div>
      <button type="button" class="text-btn" data-remove-edit-optional-prompt="${i}">Remove this prompt</button>
    `).join('')}

    <div class="must-have-toggle" style="margin-top:20px;">
      <div class="toggle-label"><strong>Accepting ongoing clients</strong><span>Shown in Discover for new long-term matches</span></div>
      <div class="switch ${t.acceptingOngoing ? 'on' : ''}" id="t-ongoing-switch"></div>
    </div>

  `;
  attachTherapistProfileHandlers(t);
}

function attachTherapistProfileHandlers(t) {
  document.getElementById('preview-profile-btn').addEventListener('click', () => openDetail(t, { preview: true }));
  const tPronounsInput = document.getElementById('t-pronouns-input');
  if (tPronounsInput) tPronounsInput.addEventListener('input', () => { t.pronouns = tPronounsInput.value; });
  const tShowPronounsSwitch = document.getElementById('t-show-pronouns-switch');
  if (tShowPronounsSwitch) tShowPronounsSwitch.addEventListener('click', () => { t.showPronouns = !t.showPronouns; renderTherapistProfile(); });
  const tUseCompanySwitch = document.getElementById('t-use-company-switch');
  if (tUseCompanySwitch) tUseCompanySwitch.addEventListener('click', () => { t.useCompanyName = !t.useCompanyName; renderTherapistProfile(); });
  const tCompanyNameInput = document.getElementById('t-company-name-input');
  if (tCompanyNameInput) tCompanyNameInput.addEventListener('input', () => { t.companyName = tCompanyNameInput.value; });
  [0, 1, 2].forEach(i => {
    const credInput = document.getElementById(`t-cred-${i}-input`);
    if (credInput) credInput.addEventListener('input', () => {
      t.credentials[i] = credInput.value;
    });
  });
  document.querySelectorAll('[data-set-practice]').forEach(el => el.addEventListener('click', () => {
    t.practiceType = el.dataset.setPractice;
    renderTherapistProfile();
  }));
  document.querySelectorAll('[data-toggle-tag]').forEach(el => el.addEventListener('click', () => {
    const tag = el.dataset.toggleTag;
    const i = t.tags.indexOf(tag);
    if (i === -1) t.tags.push(tag); else t.tags.splice(i, 1);
    renderTherapistProfile();
  }));
  const specOtherBtn = document.getElementById('t-spec-other-btn');
  if (specOtherBtn) specOtherBtn.addEventListener('click', () => { tSpecOtherOpen = true; renderTherapistProfile(); });
  const specOtherSel = document.getElementById('t-spec-other-select');
  if (specOtherSel) specOtherSel.addEventListener('change', () => {
    if (specOtherSel.value) t.tags.push(specOtherSel.value);
    tSpecOtherOpen = false; renderTherapistProfile();
  });
  const modOtherBtn = document.getElementById('t-mod-other-btn');
  if (modOtherBtn) modOtherBtn.addEventListener('click', () => { tModOtherOpen = true; renderTherapistProfile(); });
  const modOtherSel = document.getElementById('t-mod-other-select');
  if (modOtherSel) modOtherSel.addEventListener('change', () => {
    if (modOtherSel.value) t.modalities.push(modOtherSel.value);
    tModOtherOpen = false; renderTherapistProfile();
  });
  document.querySelectorAll('[data-toggle-modality]').forEach(el => el.addEventListener('click', () => {
    const m = el.dataset.toggleModality;
    const i = t.modalities.indexOf(m);
    if (i === -1) t.modalities.push(m); else t.modalities.splice(i, 1);
    renderTherapistProfile();
  }));
  // ----- ideal-client spec (private) -----
  document.querySelectorAll('[data-ideal]').forEach(el => el.addEventListener('click', () => {
    const list = t.idealClient[el.dataset.ideal];
    const v = el.dataset.val;
    const i = list.indexOf(v);
    if (i === -1) list.push(v); else list.splice(i, 1);
    renderTherapistProfile();
  }));
  document.querySelectorAll('[data-ideal-pay]').forEach(el => el.addEventListener('click', () => {
    t.idealClient.payment = el.dataset.idealPay;
    renderTherapistProfile();
  }));
  document.querySelectorAll('[data-ideal-must]').forEach(el => el.addEventListener('click', () => {
    const k = el.dataset.idealMust;
    const mh = t.idealClient.mustHaves;
    const i = mh.indexOf(k);
    if (i !== -1) mh.splice(i, 1);
    else if (mh.length < MAX_MUST_HAVES) mh.push(k);
    renderTherapistProfile();
  }));
  const tBestForInput = document.getElementById('t-bestfor-input');
  if (tBestForInput) tBestForInput.addEventListener('input', () => { t.bestFor = tBestForInput.value; });
  document.querySelectorAll('[data-media-upload]').forEach(el => el.addEventListener('change', () => {
    const file = el.files[0];
    if (!file) return;
    const slot = el.dataset.mediaUpload;
    if (slot === 'video') {
      // Object URLs keep large video files out of memory-hungry data URLs.
      t.media.video = URL.createObjectURL(file);
      renderTherapistProfile();
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        if (slot === 'photo') t.photo = reader.result; else t.media[slot] = reader.result;
        renderTherapistProfile();
      };
      reader.readAsDataURL(file);
    }
  }));
  const personaIn = document.getElementById('t-persona-in');
  if (personaIn) personaIn.addEventListener('input', () => { t.persona.inOffice = personaIn.value; });
  const personaOut = document.getElementById('t-persona-out');
  if (personaOut) personaOut.addEventListener('input', () => { t.persona.outOfOffice = personaOut.value; });
  document.querySelectorAll('[data-set-gender]').forEach(el => el.addEventListener('click', () => {
    t.identity.gender = el.dataset.setGender;
    renderTherapistProfile();
  }));
  document.getElementById('t-lgbtq-switch').addEventListener('click', () => { t.identity.lgbtqAffirming = !t.identity.lgbtqAffirming; renderTherapistProfile(); });
  document.querySelectorAll('#tp-languages-grid [data-language]').forEach(el => el.addEventListener('click', () => {
    const l = el.dataset.language;
    const i = t.languages.indexOf(l);
    if (i === -1) t.languages.push(l); else t.languages.splice(i, 1);
    renderTherapistProfile();
  }));
  document.querySelectorAll('#tp-languages-grid [data-remove-custom-language]').forEach(el => el.addEventListener('click', () => {
    t.languages = t.languages.filter(l => l !== el.dataset.removeCustomLanguage);
    renderTherapistProfile();
  }));
  const tpOtherBtn = document.getElementById('tp-other-btn');
  if (tpOtherBtn) tpOtherBtn.addEventListener('click', () => { profileShowOtherLanguage = true; renderTherapistProfile(); });
  const tpOtherAddBtn = document.getElementById('tp-other-add-btn');
  if (tpOtherAddBtn) tpOtherAddBtn.addEventListener('click', () => {
    const val = document.getElementById('tp-other-select').value;
    if (val && !t.languages.includes(val)) t.languages.push(val);
    renderTherapistProfile();
  });
  document.querySelectorAll('[data-toggle-format]').forEach(el => el.addEventListener('click', () => {
    const f = el.dataset.toggleFormat;
    const i = t.formats.indexOf(f);
    if (i === -1) t.formats.push(f); else t.formats.splice(i, 1);
    renderTherapistProfile();
  }));
  const tCityInput = document.getElementById('t-city-input');
  if (tCityInput) tCityInput.addEventListener('input', () => { t.location.city = tCityInput.value; });
  const tStateInput = document.getElementById('t-state-input');
  if (tStateInput) tStateInput.addEventListener('change', () => { t.location.state = tStateInput.value; });
  document.querySelectorAll('[data-toggle-insurance]').forEach(el => el.addEventListener('click', () => {
    const ins = el.dataset.toggleInsurance;
    const i = t.insuranceList.indexOf(ins);
    if (i === -1) t.insuranceList.push(ins); else t.insuranceList.splice(i, 1);
    renderTherapistProfile();
  }));
  const tSelfPayNoteInput = document.getElementById('t-selfpaynote-input');
  if (tSelfPayNoteInput) tSelfPayNoteInput.addEventListener('input', () => { t.selfPayNote = tSelfPayNoteInput.value; });
  document.getElementById('t-rate-input').addEventListener('change', (e) => { t.rateMin = Number(e.target.value) || 0; });
  document.querySelectorAll('textarea[data-edit-mandatory-prompt-index]').forEach(el => {
    el.addEventListener('input', () => { t.mandatoryPromptAnswers[Number(el.dataset.editMandatoryPromptIndex)] = el.value; });
  });
  document.querySelectorAll('[data-toggle-optional-prompt]').forEach(el => el.addEventListener('click', () => {
    const q = el.dataset.toggleOptionalPrompt;
    const i = t.optionalPrompts.findIndex(p => p.question === q);
    if (i !== -1) {
      t.optionalPrompts.splice(i, 1);
    } else if (t.optionalPrompts.length < MAX_OPTIONAL_PROMPTS) {
      t.optionalPrompts.push({ question: q, answer: '', photo: null });
    }
    renderTherapistProfile();
  }));
  document.querySelectorAll('textarea[data-edit-optional-prompt-answer]').forEach(el => {
    el.addEventListener('input', () => { t.optionalPrompts[Number(el.dataset.editOptionalPromptAnswer)].answer = el.value; });
  });
  document.querySelectorAll('input[data-edit-optional-prompt-photo]').forEach(el => {
    el.addEventListener('change', () => {
      const file = el.files[0];
      if (!file) return;
      const idx = Number(el.dataset.editOptionalPromptPhoto);
      const reader = new FileReader();
      reader.onload = () => { t.optionalPrompts[idx].photo = reader.result; renderTherapistProfile(); };
      reader.readAsDataURL(file);
    });
  });
  document.querySelectorAll('[data-move-prompt]').forEach(el => el.addEventListener('click', () => {
    const i = Number(el.dataset.movePrompt), j = i + Number(el.dataset.dir);
    if (j < 0 || j >= t.optionalPrompts.length) return;
    [t.optionalPrompts[i], t.optionalPrompts[j]] = [t.optionalPrompts[j], t.optionalPrompts[i]];
    renderTherapistProfile();
  }));
  document.querySelectorAll('[data-remove-edit-optional-prompt]').forEach(el => el.addEventListener('click', () => {
    t.optionalPrompts.splice(Number(el.dataset.removeEditOptionalPrompt), 1);
    renderTherapistProfile();
  }));
  document.getElementById('t-ongoing-switch').addEventListener('click', () => { t.acceptingOngoing = !t.acceptingOngoing; renderTherapistProfile(); });
}

// ===== ON-DEMAND CONTROLS =====
// These live on the On Demand tab (not Profile): turning it on, and the open
// slots for this week. Kept as their own html/bind pair so the tab owns them.
// The On Demand tab owns the on/off switch. Slot management already lives on
// that screen, so this is just the toggle that gates it.
function onDemandToggleHtml(t) {
  if (t.onDemandBanned) return `
    <div class="must-have-toggle" style="opacity:0.75;">
      <div class="toggle-label"><strong>On-Demand suspended</strong><span>A confirmed session was reported as a no-show. On-Demand access doesn't come back — ongoing matching is unaffected.</span></div>
    </div>`;
  return `
    <div class="must-have-toggle">
      <div class="toggle-label"><strong>Offering On-Demand this week</strong><span>${t.onDemand ? 'Clients can book a one-time session in the times below' : 'Turn on to take one-time sessions this week'}</span></div>
      <div class="switch ${t.onDemand ? 'on' : ''}" id="t-ondemand-switch"></div>
    </div>`;
}

function bindOnDemandToggle(t) {
  const odSwitch = document.getElementById('t-ondemand-switch');
  if (!odSwitch) return;
  odSwitch.addEventListener('click', () => {
    if (!t.onDemand && !t.agreedToOnDemandPolicy) {
      openTherapistOnDemandAgreement(() => { t.agreedToOnDemandPolicy = true; t.onDemand = true; renderTherapistHome(); });
    } else {
      t.onDemand = !t.onDemand;
      renderTherapistHome();
    }
  });
}

document.getElementById('btn-like').addEventListener('click', () => {
  const top = cardStack.lastElementChild;
  if (top && top._forceSwipe) top._forceSwipe('like');
});
document.getElementById('btn-pass').addEventListener('click', () => {
  const top = cardStack.lastElementChild;
  if (top && top._forceSwipe) top._forceSwipe('pass');
});
document.getElementById('btn-info').addEventListener('click', () => {
  const t = deck[deckIndex];
  if (t) openDetail(t);
});

// ===== PROFILE =====
function careForSummary() {
  if (!intake.careFor) return '';
  return { myself: 'For myself', child: `For a child${intake.childAge ? ` (age ${intake.childAge})` : ''}`, couples: 'For couples', family: 'For family' }[intake.careFor];
}
function needsSummary() {
  const base = intake.needs.length ? intake.needs.join(', ') : (intake.notSure ? 'Still figuring it out' : 'Not specified');
  const cf = careForSummary();
  return cf ? `${cf} · ${base}` : base;
}
function formatSummary() {
  const where = intake.state ? (intake.format === 'in-person' && intake.city.trim() ? ` · ${intake.city.trim()}, ${intake.state}` : ` · ${intake.state}`) : '';
  if (intake.format === 'no-preference') return `Either works${where}`;
  return (intake.format === 'video' ? 'Online (video) preferred' : 'In-person preferred') + where;
}
function availabilitySummary() {
  return intake.availability.length ? intake.availability.join(', ') : 'Not specified';
}
function guidanceSummary() {
  return { gentle: 'Mostly listens and reflects back', direct: 'Direct — tells me like it is', empathy: 'More empathy and understanding', challenge: 'To be challenged and pushed' }[intake.stylePref] || 'Open to any style';
}
function insuranceSummary() {
  if (intake.hasInsurance === 'no') {
    return intake.noInsurancePref === 'sliding-scale' ? 'No insurance — needs a sliding scale' : 'No insurance — therapist fit comes first';
  }
  return intake.insurance === 'any' ? 'Not specified yet' : intake.insurance;
}
function budgetSummary() {
  if (intake.budgetRange === 'Any budget') return 'Any budget';
  if (intake.budgetRange === 'Sliding scale') return 'Sliding scale';
  return `${intake.budgetRange}/session`;
}
function identitySummary() {
  const parts = [];
  if (intake.genderPref !== 'no-preference') parts.push(`${intake.genderPref}${intake.genderRequired ? ' (must-have)' : ' (preferred)'}`);
  if (intake.ethnicityPref !== 'no-preference') parts.push(intake.ethnicityPref);
  if (intake.lgbtqRequired) parts.push('LGBTQ+ affirming required');
  if (intake.languagePref !== 'any') parts.push(`Speaks ${intake.languagePref}${intake.languageRequired ? ' (must-have)' : ' (preferred)'}`);
  if (intake.affinities.length) parts.push(...intake.affinities);
  if (intake.faith.length) parts.push(...intake.faith);
  return parts.length ? parts.join(', ') : 'No preference specified';
}
function modalitySummary() {
  if (intake.modality === 'open') return 'Open to any approach';
  return `${intake.modality}${intake.modalityRequired ? ' (must-have)' : ' (preferred)'}`;
}

function renderProfileScreen() {
  let screen = document.getElementById('screen-profile');
  if (!screen) {
    screen = document.createElement('section');
    screen.className = 'screen';
    screen.id = 'screen-profile';
    document.querySelector('.phone').insertBefore(screen, document.querySelector('.bottom-nav'));
  }
  const savedList = EXPLORE_RESOURCES.filter(r => savedResources.includes(r.id));
  const matchedMatches = matches.filter(m => m.status === 'matched');
  screen.innerHTML = `
    <header class="top-bar"><div class="logo">Your Preferences</div></header>
    <div class="profile-content">
      <div class="pref-item"><div class="pref-label">Looking for support with</div><div class="pref-value">${needsSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Approach</div><div class="pref-value">${modalitySummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Session format</div><div class="pref-value">${formatSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">When you can meet</div><div class="pref-value">${availabilitySummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Insurance</div><div class="pref-value">${insuranceSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Budget</div><div class="pref-value">${budgetSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Identity preferences</div><div class="pref-value">${identitySummary()}</div></div>

      <div class="pref-item">
        <div class="pref-label">Saved resources</div>
        <div class="pref-value">${savedList.length ? savedList.map(r => `${r.icon} ${r.title}`).join('<br>') : 'Nothing saved yet — browse the Kindred tab to find resources.'}</div>
      </div>

      <div class="pref-item">
        <div class="pref-label">Share your profile</div>
        <div class="pref-value" style="margin-bottom:6px;">Give a matched therapist a picture of what you're working with — your questionnaire answers and saved resources. You choose per therapist, and you can turn it off anytime.</div>
        <button class="edit-prefs-btn" id="preview-shared-btn" style="margin:2px 0 4px;background:white;border:1.5px solid var(--coral);color:var(--coral-dark);">👀 Preview what your therapist sees</button>
        ${matchedMatches.length ? matchedMatches.map(m => `
          <div class="must-have-toggle" style="margin-top:8px;">
            <div class="toggle-label"><strong>${displayName(m.therapist)}</strong><span>${m.profileShared ? 'Can see your profile' : 'Cannot see your profile'}</span></div>
            <div class="switch ${m.profileShared ? 'on' : ''}" data-share-toggle="${m.therapist.id}"></div>
          </div>
        `).join('') : `<div class="pref-value" style="color:var(--ink-soft);">Once you match with a therapist, you can share your profile with them here.</div>`}
      </div>

      <button class="edit-prefs-btn" id="edit-prefs-btn">Edit My Preferences</button>
      <button class="edit-prefs-btn" id="client-logout-btn" style="color:var(--ink-soft);">Log Out</button>
      <button class="edit-prefs-btn" id="delete-account-btn" style="color:var(--ink-soft);">Delete My Account</button>
    </div>
  `;
  document.getElementById('edit-prefs-btn').addEventListener('click', startIntake);
  document.getElementById('client-logout-btn').addEventListener('click', logout);
  document.getElementById('delete-account-btn').addEventListener('click', openDeleteAccountSheet);
  document.getElementById('preview-shared-btn').addEventListener('click', openSharedProfilePreview);
  screen.querySelectorAll('[data-share-toggle]').forEach(el => el.addEventListener('click', () => {
    const m = matches.find(m => m.therapist.id === el.dataset.shareToggle && m.status === 'matched');
    if (!m) return;
    m.profileShared = !m.profileShared;
    showToast(m.profileShared ? `Profile shared with ${displayName(m.therapist)}.` : `Profile no longer shared with ${displayName(m.therapist)}.`);
    renderProfileScreen();
  }));
}

showScreen('account-type');

// ===== SHARED-THERAPIST DEEP LINK =====
// A link someone was sent (…#therapist=t3) opens straight to that therapist's
// profile. If they land on the login screen first the hash stays in the URL, so
// it still opens once they're in — nothing is lost.
function openSharedTherapistFromHash() {
  const m = location.hash.match(/therapist=([\w-]+)/);
  if (!m || accountType !== 'client') return;
  const t = THERAPISTS.find(x => x.id === m[1]);
  if (t) openDetail(t);
}
window.addEventListener('hashchange', openSharedTherapistFromHash);
window.addEventListener('load', openSharedTherapistFromHash);

// ===== THERAPIST SETTINGS =====
// Account-level preferences, kept deliberately separate from the Profile tab
// (which is about how clients see you). Nothing here affects matching.
let therapistSettings = {
  notifyNewInquiry: true,
  notifyMessages: true,
  notifyWeeklySummary: true,
  notifyProductNews: false,
  showInSearch: true,
  hideFromCurrentClients: false
};

function renderTherapistSettings() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  const s = therapistSettings;
  const row = (key, title, sub) => `
    <div class="must-have-toggle">
      <div class="toggle-label"><strong>${title}</strong><span>${sub}</span></div>
      <div class="switch ${s[key] ? 'on' : ''}" data-setting="${key}"></div>
    </div>`;

  document.getElementById('t-settings-content').innerHTML = `
    <div class="t-form-name">${t.name}</div>
    <p class="portal-note" style="margin-top:4px;">Signed in as ${t.name}${t.licenseNumber ? ` · license ${t.licenseNumber}` : ''}</p>

    <div class="settings-group-title">Notifications</div>
    ${row('notifyNewInquiry', 'New inquiries', 'When a client reaches out to you')}
    ${row('notifyMessages', 'Messages', 'Replies in an existing conversation')}
    ${row('notifyWeeklySummary', 'Weekly summary', 'Your profile views, hearts, and inquiries')}
    ${row('notifyProductNews', 'Product news', "What's new on Kindred — occasional, never spammy")}

    <div class="settings-group-title">Privacy</div>
    ${row('showInSearch', 'Appear in matching', 'Turning this off hides you from new matches without deleting anything')}
    ${row('hideFromCurrentClients', 'Hide my profile from current clients', "They keep their conversation with you, but won't see your public card")}
    <p class="portal-note">Your ideal-client settings are always private and never shown to clients.</p>

    <div class="settings-group-title">Account</div>
    <button class="edit-prefs-btn" id="t-settings-profile-btn">Edit my profile</button>
    <button class="edit-prefs-btn" id="t-settings-logout-btn" style="color:var(--ink-soft);">Log Out</button>
    <button class="edit-prefs-btn" id="t-settings-delete-btn" style="color:#a8443a;">Delete My Account</button>
  `;

  document.querySelectorAll('#t-settings-content [data-setting]').forEach(el => {
    el.addEventListener('click', () => {
      const k = el.dataset.setting;
      therapistSettings[k] = !therapistSettings[k];
      renderTherapistSettings();
    });
  });
  document.getElementById('t-settings-profile-btn').addEventListener('click', () => showTScreen('t-profile'));
  document.getElementById('t-settings-logout-btn').addEventListener('click', logout);
  document.getElementById('t-settings-delete-btn').addEventListener('click', openTherapistDeleteSheet);
}

// Same principle as the client's delete flow: lead with what they'd lose, keep
// the exit available, and require a second deliberate confirmation.
function openTherapistDeleteSheet() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  const sheet = document.getElementById('confirm-sheet');
  sheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Delete your account?</h2>
    <div class="intake-sub">You don't have to delete to step back from new clients.</div>
    <div class="keep-card">
      <p><strong>Pausing keeps your profile, your conversations, and your reviews.</strong> Turn off "Appear in matching" in Settings and you stop receiving new inquiries — nothing else changes.</p>
      <p class="keep-card-sub">Deleting removes your profile, your ${t.stats.profileViews} profile views, saved conversations, and match history permanently.</p>
    </div>
    <button class="primary-btn" style="background:var(--coral);color:white;" id="t-keep-btn">Keep my account</button>
    <button class="edit-prefs-btn" id="t-pause-btn">Pause new matches instead</button>
    <button class="edit-prefs-btn" id="t-delete-final" style="color:#a8443a;">Delete my account</button>
  `;
  document.getElementById('confirm-modal').classList.remove('hidden');
  const close = () => document.getElementById('confirm-modal').classList.add('hidden');
  document.getElementById('t-keep-btn').addEventListener('click', close);
  document.getElementById('t-pause-btn').addEventListener('click', () => {
    therapistSettings.showInSearch = false;
    close();
    showToast("You're paused — no new inquiries until you turn it back on.");
    renderTherapistSettings();
  });
  document.getElementById('t-delete-final').addEventListener('click', () => {
    close();
    showToast('Your account has been deleted.');
    logout();
  });
}

// ===== THERAPIST SEARCH =====
// Deliberately separate from matching: this is for someone who already knows
// what (or who) they're looking for — a name a friend gave them, or a modality
// like "EMDR". Results are the full roster, not filtered to their intake, so a
// client can look someone up specifically or find a therapist to pass along.
let searchState = { q: '', state: '', gender: '', format: '' };

function searchableText(t) {
  return [
    t.name, displayName(t), t.companyName,
    (t.credentials || []).join(' '),
    (t.tags || []).join(' '),
    (t.modalities || []).join(' '),
    (t.languages || []).join(' '),
    t.bestFor,
    t.location ? `${t.location.city} ${t.location.state}` : ''
  ].filter(Boolean).join(' ').toLowerCase();
}

function searchResults() {
  const q = searchState.q.trim().toLowerCase();
  return THERAPISTS.filter(t => {
    if (q && !searchableText(t).includes(q)) return false;
    if (searchState.state && (t.location || {}).state !== searchState.state) return false;
    if (searchState.gender && (t.identity || {}).gender !== searchState.gender) return false;
    if (searchState.format && !(t.formats || []).includes(searchState.format)) return false;
    return true;
  });
}

function renderSearch() {
  const filters = document.getElementById('search-filters');
  const results = document.getElementById('search-results');

  const states = [...new Set(THERAPISTS.map(t => (t.location || {}).state).filter(Boolean))].sort();
  const chip = (group, val, label) => {
    const on = searchState[group] === val;
    return `<div class="chip-option ${on ? 'selected' : ''}" data-sfilter="${group}" data-sval="${val}">${label}</div>`;
  };

  filters.innerHTML = `
    <div class="search-filter-label">Location</div>
    <div class="chip-grid">
      ${chip('state', '', 'Anywhere')}
      ${states.map(s => chip('state', s, s)).join('')}
    </div>
    <div class="search-filter-label">Therapist gender</div>
    <div class="chip-grid">
      ${chip('gender', '', 'Any')}
      ${chip('gender', 'female', 'Female')}
      ${chip('gender', 'male', 'Male')}
      ${chip('gender', 'non-binary', 'Non-binary')}
    </div>
    <div class="search-filter-label">Session format</div>
    <div class="chip-grid">
      ${chip('format', '', 'Either')}
      ${chip('format', 'video', 'Online')}
      ${chip('format', 'in-person', 'In person')}
    </div>`;

  const found = searchResults();
  const activeFilters = ['state', 'gender', 'format'].filter(k => searchState[k]).length;
  results.innerHTML = found.length
    ? `<div class="search-count">${found.length} therapist${found.length === 1 ? '' : 's'}${searchState.q ? ` for “${searchState.q}”` : ''}</div>` +
      found.map(t => `
        <div class="search-row" data-search-open="${t.id}">
          <div class="search-avatar" style="background:${t.gradient}">${t.photo ? `<img src="${t.photo}" alt="">` : t.initials}</div>
          <div class="search-row-body">
            <div class="search-row-name">${displayName(t)} <span class="creds">${credentialsLabel(t)}</span></div>
            <div class="search-row-meta">${[(t.location || {}).state, (t.formats || []).includes('in-person') ? 'In person' : null, (t.formats || []).includes('video') ? 'Online' : null].filter(Boolean).join(' · ')}</div>
            <div class="search-row-tags">${(t.tags || []).slice(0, 3).join(' · ')}</div>
          </div>
        </div>`).join('')
    : `<p class="empty-state">No therapists match${searchState.q ? ` “${searchState.q}”` : ''}${activeFilters ? ' with those filters' : ''}. Try a broader term — a specialty like “anxiety”, or a modality like “EMDR”.</p>`;

  filters.querySelectorAll('[data-sfilter]').forEach(el => el.addEventListener('click', () => {
    searchState[el.dataset.sfilter] = el.dataset.sval;
    renderSearch();
  }));
  results.querySelectorAll('[data-search-open]').forEach(el => el.addEventListener('click', () => {
    const t = THERAPISTS.find(x => x.id === el.dataset.searchOpen);
    if (t) openDetail(t); // their profile — which carries the Share button
  }));
}

document.getElementById('open-search-btn').addEventListener('click', () => {
  showScreen('search');
  renderSearch();
  document.getElementById('search-input').focus();
});
document.getElementById('close-search-btn').addEventListener('click', () => showScreen('discover'));
document.getElementById('search-input').addEventListener('input', (e) => {
  searchState.q = e.target.value;
  renderSearch();
});
