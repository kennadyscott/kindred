const THERAPISTS = [
  {
    id: 't1', name: 'Dr. Maya Chen', creds: 'PhD, Clinical Psychologist',
    initials: 'MC', gradient: 'linear-gradient(135deg,#4a9d96,#2e7d76)',
    meta: ['Video & In-person', '$140–180/session'],
    bestFor: 'I work best with high-achievers who are quietly running on empty.',
    tags: ['Anxiety', 'Life Transitions', 'CBT', 'LGBTQ+ Affirming'],
    promptAnswers: [
      "We'll skip the small talk. I want to know what's actually been sitting heavy on you lately, and what you're hoping is different a few months from now.",
      "you want homework between sessions and someone who'll actually follow up on it — I track progress, not just feelings.",
      "Insight without action doesn't change anything. We can understand your anxiety perfectly and still be stuck if we don't practice doing things differently.",
      "a working meeting with someone who's genuinely rooting for you — structured, but never clinical or cold.",
      "how much CBT is just noticing your own thoughts in real time. It sounds simple. It's not easy, but it works."
    ],
    modalities: ['CBT'], style: 'direct',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video', 'in-person'], rateMin: 140, insuranceList: ['Aetna', 'BCBS'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Austin', state: 'TX' }
  },
  {
    id: 't2', name: 'James Okafor', creds: 'LMFT',
    initials: 'JO', gradient: 'linear-gradient(135deg,#e8836b,#c85a41)',
    meta: ['Video only', '$110–130/session'],
    selfPayNote: 'Sliding scale available',
    bestFor: "I work best with couples who still want to fight for the relationship, not just survive it.",
    tags: ['Couples', 'Family Conflict', 'EFT'],
    promptAnswers: [
      "I want to hear both sides before either of you starts defending yours. First sessions are for understanding the pattern, not assigning blame.",
      "you want a therapist who'll gently push back instead of just nodding along — I believe in doing the work between sessions, not just venting in them.",
      "Most fights aren't about the dishes. They're about whether you feel like you matter to each other. We go straight to that.",
      "less refereeing and more translating — helping you actually hear what the other person is trying to say.",
      "how fast things can shift once you both stop trying to win the argument and start trying to understand it."
    ],
    modalities: ['EFT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false }, languages: ['English', 'Spanish'],
    formats: ['video'], rateMin: 110, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Thu 4:00pm', rank: 2 }],
    nextAvailableRank: 3, nextAvailableLabel: 'Next week',
    practiceType: 'generalist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Chicago', state: 'IL' }
  },
  {
    id: 't3', name: 'Priya Raman', creds: 'LPC, Trauma Specialist',
    initials: 'PR', gradient: 'linear-gradient(135deg,#a68fc9,#7a5fa8)',
    meta: ['In-person, Downtown', '$150/session'],
    selfPayNote: 'Out-of-network',
    bestFor: "I work best with people carrying trauma they've never had the space to fully unpack.",
    tags: ['Trauma', 'EMDR', 'PTSD', 'Grief'],
    promptAnswers: [
      "There's no pressure to tell the whole story right away. We'll go at whatever pace actually feels safe for you.",
      "you want someone patient, who won't rush you toward 'moving on' before you're ready.",
      "Healing isn't linear, and you don't have to have your story fully sorted out before you walk in the door. We can figure out the shape of it together.",
      "a quiet, steady space — no pressure to perform being okay.",
      "how physical trauma responses can be. A lot of our work is as much about your body settling down as it is about talking."
    ],
    modalities: ['EMDR'], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English', 'Hindi'],
    formats: ['in-person'], rateMin: 150, insuranceList: [],
    acceptingOngoing: false, onDemand: true, onDemandSlots: [{ label: 'Wed 1:00pm', rank: 1 }, { label: 'Fri 11:00am', rank: 3 }],
    nextAvailableRank: null, nextAvailableLabel: 'Not accepting new ongoing clients',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Austin', state: 'TX' }
  },
  {
    id: 't4', name: 'Dr. Sam Alvarez', creds: 'PsyD',
    initials: 'SA', gradient: 'linear-gradient(135deg,#d4a24e,#b57e2f)',
    meta: ['Video & In-person', '$160/session'],
    bestFor: "I work best with men who are burnt out and tired of being told to 'just relax.'",
    tags: ['ADHD', 'Burnout', "Men's Issues", 'ACT'],
    promptAnswers: [
      "I'll ask a lot of direct questions and probably crack a joke or two. I want to know what's actually going on, not the polished version.",
      "you're tired of being told to 'just relax' and want someone who gets that your brain doesn't work that way.",
      "You don't have to eliminate anxiety or distraction to build a good life around it. Chasing that trade-off usually backfires.",
      "less of a couch-and-tissue-box vibe and more like a direct, sometimes funny conversation with someone who's genuinely in your corner.",
      "how much burnout gets misdiagnosed as a focus problem. Sometimes the fix isn't a better system, it's fewer things on your plate."
    ],
    modalities: ['ACT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false }, languages: ['English', 'Spanish'],
    formats: ['video', 'in-person'], rateMin: 160, insuranceList: ['Cigna'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Chicago', state: 'IL' }
  },
  {
    id: 't5', name: 'Dr. Leah Fitzgerald', creds: 'PhD, Perinatal Specialist',
    initials: 'LF', gradient: 'linear-gradient(135deg,#6ba4c9,#4278a0)',
    meta: ['Video only', '$135/session'],
    bestFor: 'I work best with new parents who feel like they should be coping better than they are.',
    tags: ['Postpartum', 'Anxiety', 'New Parents'],
    promptAnswers: [
      "I want to know how you're actually sleeping, eating, and coping — not just how the baby's doing. You matter here too.",
      "you're exhausted, maybe scared to admit how hard this has been, and just want someone to say 'this makes sense.'",
      "Postpartum struggles are not a reflection of how much you love your baby. That guilt is common, and it's almost never true.",
      "permission to say the unspeakable parts out loud without anyone flinching.",
      "is how much relief comes from just being told 'this is a normal reaction to an abnormal amount of pressure.' You're not broken."
    ],
    modalities: [], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video'], rateMin: 135, insuranceList: ['United'],
    acceptingOngoing: false, onDemand: false, onDemandSlots: [],
    nextAvailableRank: null, nextAvailableLabel: 'Paused',
    practiceType: 'specialist', externalAppointments: [], agreedToOnDemandPolicy: false,
    location: { city: 'Denver', state: 'CO' }
  },
  {
    id: 't6', name: 'Marcus Webb', creds: 'LCSW',
    initials: 'MW', gradient: 'linear-gradient(135deg,#8a9b6e,#647a4a)',
    meta: ['In-person & Video', '$120/session'],
    selfPayNote: 'Sliding scale',
    bestFor: 'I work best with young adults who are ambivalent about change and sick of being lectured.',
    tags: ['Substance Use', 'Young Adults', 'Motivational Interviewing'],
    promptAnswers: [
      "No lectures, no judgment. I want to understand what role this has been playing in your life before we talk about changing anything.",
      "you're sick of being told what to do and want someone who'll actually ask what you want instead.",
      "Ambivalence isn't a character flaw. Most people who change something big felt torn about it the whole way through.",
      "a real conversation, not an intervention. There's no script I'm trying to get you to follow.",
      "that I'm not going to push you toward a decision. My job is to help you hear yourself think."
    ],
    modalities: ['Motivational Interviewing'], style: 'gentle',
    identity: { gender: 'male', lgbtqAffirming: true }, languages: ['English'],
    formats: ['video', 'in-person'], rateMin: 120, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Tue 9:00am', rank: 1 }],
    nextAvailableRank: 4, nextAvailableLabel: 'In 2 weeks',
    practiceType: 'generalist', externalAppointments: [], agreedToOnDemandPolicy: true,
    location: { city: 'Austin', state: 'TX' }
  }
];

const NEED_OPTIONS = ['Anxiety', 'Trauma', 'Couples', 'Grief', 'Life Transitions', 'Burnout', 'ADHD', 'Substance Use', 'Postpartum', 'Family Conflict'];
const MODALITY_OPTIONS = ['CBT', 'EMDR', 'ACT', 'EFT', 'Motivational Interviewing'];
const US_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'];

// Physical proximity isn't a soft preference the way gender or language are —
// two locations either match or they don't, so this is a plain equality
// check used as a hard filter, not a must-have toggle.
function locationsMatch(a, b) {
  if (!a || !b || !a.city || !a.state || !b.city || !b.state) return false;
  return a.state === b.state && a.city.trim().toLowerCase() === b.city.trim().toLowerCase();
}
const MODALITY_INFO = {
  'CBT': "Cognitive Behavioral Therapy. Focuses on identifying and changing unhelpful thought patterns and behaviors — often structured, with exercises to practice between sessions.",
  'EMDR': "Eye Movement Desensitization and Reprocessing. A structured approach often used for trauma, using guided eye movements or other bilateral stimulation to help the brain reprocess difficult memories.",
  'ACT': "Acceptance and Commitment Therapy. Focuses on accepting difficult thoughts and feelings rather than fighting them, while committing to actions aligned with your values.",
  'EFT': "Emotionally Focused Therapy. Often used with couples and families — focused on identifying emotional patterns and building stronger, safer emotional bonds.",
  'Motivational Interviewing': "A collaborative conversational style that helps you explore and strengthen your own motivation for change — especially useful for ambivalence around habits or behaviors."
};

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
const INSURANCE_OPTIONS = ['Aetna', 'BCBS', 'Cigna', 'United', 'any'];
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
  knowsNeeds: null, // 'yes' | 'no' — which onboarding path the client took
  needs: [],
  modality: 'open', modalityRequired: false,
  stylePref: 'balanced',
  genderPref: 'no-preference', genderRequired: false,
  lgbtqRequired: false,
  languagePref: 'any', languageRequired: false, languageOtherOpen: false,
  format: 'no-preference',
  city: '', state: '',
  insurance: 'any',
  budgetMax: 300, // slider defaults to the top of the range so no one is filtered out until the client actually narrows it
  completed: false
};

let deck = [];
let deckIndex = 0;
let shortlist = [];       // therapists swiped right on but not yet requested
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
  if (mode === 'ongoing' && !t.acceptingOngoing) return false;
  if (mode === 'ondemand' && (!t.onDemand || t.onDemandSlots.length === 0)) return false;

  // Generalists don't need a literal tag overlap — that's the whole point
  // of being a generalist. Specialists still have to actually match.
  if (intake.needs.length > 0 && t.practiceType !== 'generalist' && !t.tags.some(tag => intake.needs.includes(tag))) return false;

  if (intake.modality !== 'open' && intake.modalityRequired && !t.modalities.includes(intake.modality)) return false;

  if (intake.genderPref !== 'no-preference' && intake.genderRequired && t.identity.gender !== intake.genderPref) return false;

  if (intake.lgbtqRequired && !t.identity.lgbtqAffirming) return false;

  if (intake.languagePref !== 'any' && intake.languageRequired && !t.languages.includes(intake.languagePref)) return false;

  if (intake.format !== 'no-preference' && !t.formats.includes(intake.format)) return false;

  if (intake.format === 'in-person' && !locationsMatch(t.location, { city: intake.city, state: intake.state })) return false;

  if (intake.insurance !== 'any' && !t.insuranceList.includes(intake.insurance)) return false;

  if (intake.budgetMax && t.rateMin > intake.budgetMax) return false;

  return true;
}

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
  if (intake.format === 'in-person' && locationsMatch(t.location, { city: intake.city, state: intake.state })) {
    reasons.push(`Located in ${t.location.city}, ${t.location.state}`);
  }
  if (intake.insurance !== 'any' && t.insuranceList.includes(intake.insurance)) reasons.push(`Accepts ${intake.insurance}`);
  if (intake.lgbtqRequired && t.identity.lgbtqAffirming) reasons.push('LGBTQ+ Affirming');
  if (intake.genderPref !== 'no-preference' && t.identity.gender === intake.genderPref) {
    reasons.push(t.identity.gender === 'female' ? 'Female therapist' : 'Male therapist');
  }
  if (intake.languagePref !== 'any' && t.languages.includes(intake.languagePref)) reasons.push(`Speaks ${intake.languagePref}`);
  if (intake.stylePref !== 'balanced' && t.style === intake.stylePref) reasons.push('Similar style to what you want');
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
const TOTAL_STEPS = 6;
const intakeContent = document.getElementById('intake-content');

function renderIntakeStep() {
  let html = `<div class="intake-progress">${Array.from({ length: TOTAL_STEPS }).map((_, i) =>
    `<div class="dot ${i <= intakeStep ? 'done' : ''}"></div>`).join('')}</div>`;

  if (intakeStep === 0) {
    html += `
      <h1>Do you know what brings you to therapy?</h1>
      <div class="intake-sub">Either answer is completely fine — we'll get you to the right therapists either way.</div>
      <div class="option-list" id="knows-list">
        <div class="option-row ${intake.knowsNeeds === 'yes' ? 'selected' : ''}" data-knows="yes">Yes, I know what I need help with</div>
        <div class="option-row ${intake.knowsNeeds === 'no' ? 'selected' : ''}" data-knows="no">Not really — help me figure it out</div>
      </div>`;
  } else if (intakeStep === 1 && intake.knowsNeeds === 'no') {
    html += `
      <h1>What's been going on?</h1>
      <div class="intake-sub">Pick anything that resonates — you don't need the right words for it, and it's okay if nothing quite fits.</div>
      <div class="option-list" id="unsure-list">
        ${UNSURE_OPTIONS.map(o => `<div class="option-row ${intake.needs.includes(o.tag) ? 'selected' : ''}" data-unsure-tag="${o.tag}">${o.label}</div>`).join('')}
      </div>`;
  } else if (intakeStep === 1) {
    html += `
      <h1>What brings you to therapy right now?</h1>
      <div class="intake-sub">Pick as many as apply — this is how we find therapists who actually work with what you're dealing with.</div>
      <div class="chip-grid" id="needs-grid">
        ${NEED_OPTIONS.map(n => `<div class="chip-option ${intake.needs.includes(n) ? 'selected' : ''}" data-need="${n}">${n}</div>`).join('')}
      </div>`;
  } else if (intakeStep === 2) {
    html += `
      <h1>Looking for a specific approach?</h1>
      <div class="intake-sub">If you're not sure, that's completely fine — most people aren't.</div>
      <div class="option-list" id="modality-list">
        <div class="option-row ${intake.modality === 'open' ? 'selected' : ''}" data-modality="open">Not sure / open to anything</div>
        ${MODALITY_OPTIONS.map(m => `<div class="option-row ${intake.modality === m ? 'selected' : ''}" data-modality="${m}">${m} <span class="info-btn" data-info="${m}">?</span></div>`).join('')}
      </div>
      <div id="modality-must-have" style="${intake.modality === 'open' ? 'display:none;' : ''}">
        <div class="must-have-toggle">
          <div class="toggle-label"><strong>Must-have</strong><span>Only show therapists who offer this</span></div>
          <div class="switch ${intake.modalityRequired ? 'on' : ''}" id="modality-required-switch"></div>
        </div>
      </div>`;
  } else if (intakeStep === 3) {
    html += `
      <h1>What kind of guidance do you want?</h1>
      <div class="intake-sub">There's no wrong answer — this just helps us show you therapists whose style tends to match.</div>
      <div class="option-list" id="style-list">
        <div class="option-row ${intake.stylePref === 'gentle' ? 'selected' : ''}" data-style="gentle">Mostly listens and reflects back</div>
        <div class="option-row ${intake.stylePref === 'balanced' ? 'selected' : ''}" data-style="balanced">A mix of both</div>
        <div class="option-row ${intake.stylePref === 'direct' ? 'selected' : ''}" data-style="direct">Direct — tells me like it is</div>
      </div>`;
  } else if (intakeStep === 4) {
    html += `
      <h1>Any preferences on who you work with?</h1>
      <div class="intake-sub">Totally optional — skip anything that doesn't matter to you.</div>
      <div class="option-list" id="gender-list">
        <div class="option-row ${intake.genderPref === 'no-preference' ? 'selected' : ''}" data-gender="no-preference">No preference</div>
        <div class="option-row ${intake.genderPref === 'female' ? 'selected' : ''}" data-gender="female">Female therapist</div>
        <div class="option-row ${intake.genderPref === 'male' ? 'selected' : ''}" data-gender="male">Male therapist</div>
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
      <div class="t-form-label">Language</div>
      <div class="chip-grid" id="language-grid">
        <div class="chip-option ${intake.languagePref === 'any' ? 'selected' : ''}" data-language="any">No preference</div>
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
      </div>`;
  } else if (intakeStep === 5) {
    html += `
      <h1>A few logistics</h1>
      <div class="intake-sub">So we only show you therapists you can actually see.</div>
      <div class="match-tag-label" style="margin-top:0;">Session format</div>
      <div class="option-list" id="format-list">
        <div class="option-row ${intake.format === 'no-preference' ? 'selected' : ''}" data-format="no-preference">No preference</div>
        <div class="option-row ${intake.format === 'video' ? 'selected' : ''}" data-format="video">Video</div>
        <div class="option-row ${intake.format === 'in-person' ? 'selected' : ''}" data-format="in-person">In-person</div>
      </div>
      <div id="location-fields" style="${intake.format === 'in-person' ? '' : 'display:none;'}">
        <div class="t-form-label">Your city</div>
        <input type="text" class="t-rate-input" id="intake-city" placeholder="e.g. Austin" value="${intake.city}">
        <div class="t-form-label">Your state</div>
        <select id="intake-state">
          <option value="">Select a state</option>
          ${US_STATES.map(s => `<option value="${s}" ${intake.state === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        <div class="intake-sub" style="margin-top:6px;">In-person only works if we can find a therapist actually located near you.</div>
      </div>
      <div class="match-tag-label">Insurance</div>
      <div class="chip-grid" id="insurance-grid">
        ${INSURANCE_OPTIONS.map(i => `<div class="chip-option ${intake.insurance === i ? 'selected' : ''}" data-insurance="${i}">${i === 'any' ? 'Self-pay / any' : i}</div>`).join('')}
      </div>
      <div class="match-tag-label">Max budget per session</div>
      <div class="budget-slider-row">
        <input type="range" id="budget-slider" min="100" max="300" step="10" value="${intake.budgetMax}">
        <div class="budget-value" id="budget-value">$${intake.budgetMax}</div>
      </div>`;
  }

  let canProceed = true;
  if (intakeStep === 0) canProceed = intake.knowsNeeds !== null;
  else if (intakeStep === 1 && intake.knowsNeeds === 'yes') canProceed = intake.needs.length > 0;
  // The "not sure" path never blocks on a minimum selection — someone who
  // doesn't know what's going on yet shouldn't be stuck because none of the
  // options quite fit.
  else if (intakeStep === 5 && intake.format === 'in-person') canProceed = intake.city.trim() !== '' && intake.state !== '';
  html += `
    <div class="intake-footer">
      ${intakeStep > 0 ? `<button class="btn-back" id="intake-back">Back</button>` : ''}
      <button class="btn-next" id="intake-next" ${canProceed ? '' : 'disabled'}>${intakeStep === TOTAL_STEPS - 1 ? 'See My Matches' : 'Continue'}</button>
    </div>`;

  intakeContent.innerHTML = html;
  attachIntakeHandlers();
}

function attachIntakeHandlers() {
  document.querySelectorAll('#knows-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.knowsNeeds = el.dataset.knows; renderIntakeStep(); });
  });

  document.querySelectorAll('#needs-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const need = el.dataset.need;
      const i = intake.needs.indexOf(need);
      if (i === -1) intake.needs.push(need); else intake.needs.splice(i, 1);
      renderIntakeStep();
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

  document.querySelectorAll('#modality-list .option-row').forEach(el => {
    el.addEventListener('click', () => {
      intake.modality = el.dataset.modality;
      if (intake.modality === 'open') intake.modalityRequired = false;
      renderIntakeStep();
    });
  });
  document.querySelectorAll('#modality-list .info-btn').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); openModalityInfo(el.dataset.info); });
  });
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
  const intakeCityInput = document.getElementById('intake-city');
  if (intakeCityInput) intakeCityInput.addEventListener('input', () => {
    intake.city = intakeCityInput.value;
    document.getElementById('intake-next').disabled = !(intake.city.trim() && intake.state);
  });
  const intakeStateSelect = document.getElementById('intake-state');
  if (intakeStateSelect) intakeStateSelect.addEventListener('change', () => { intake.state = intakeStateSelect.value; renderIntakeStep(); });
  document.querySelectorAll('#insurance-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => { intake.insurance = el.dataset.insurance; renderIntakeStep(); });
  });
  const budgetSlider = document.getElementById('budget-slider');
  if (budgetSlider) {
    budgetSlider.addEventListener('input', () => {
      intake.budgetMax = Number(budgetSlider.value);
      document.getElementById('budget-value').textContent = `$${intake.budgetMax}`;
    });
  }

  const backBtn = document.getElementById('intake-back');
  if (backBtn) backBtn.addEventListener('click', () => { intakeStep--; renderIntakeStep(); });

  document.getElementById('intake-next').addEventListener('click', () => {
    if (intakeStep < TOTAL_STEPS - 1) {
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

function insuranceDisplayLabel(t, opts = {}) {
  if (!opts.preview && intake.insurance !== 'any') return `Accepts ${intake.insurance}`;
  if (t.insuranceList.length) return `Accepts ${t.insuranceList.join(', ')}`;
  return t.selfPayNote || 'Self-pay';
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

function promptBlocksHtml(t) {
  return THERAPIST_PROMPT_OPTIONS.map((q, i) => `
    <div class="prompt-block">
      <div class="prompt-q">${q}</div>
      <div class="prompt-a">${t.promptAnswers[i] || "I'm still writing this one — check back soon."}</div>
    </div>
  `).join('');
}

function buildCard(t) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="card-photo" style="background:${t.gradient}">
      <div class="initials">${t.initials}</div>
      <div class="stamp like">Like</div>
      <div class="stamp pass">Pass</div>
      ${languageBadgeHtml(t)}
    </div>
    <div class="card-body">
      <div class="card-name-row"><h2>${t.name}</h2><span class="creds">${t.creds}</span></div>
      <div class="card-meta"><span>📍 ${t.location.city}, ${t.location.state}</span></div>
      <div class="card-meta">${t.meta.map(m => `<span>${m}</span>`).join('')}</div>
      <div class="card-meta"><span>${insuranceDisplayLabel(t)}</span></div>
      <div class="card-meta"><span>Next available: ${t.nextAvailableLabel}</span></div>
      ${t.bestFor ? `<div class="best-for">${t.bestFor}</div>` : ''}
      <div class="tag-row">${t.tags.map(tagHtml).join('')}</div>
      ${practiceBadgeHtml(t)}
      ${matchTagsHtml(t)}
      ${promptBlocksHtml(t)}
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
    <h2>A quick note for ${t.name}</h2>
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
  matches.push({ therapist: t, status: 'pending', needsSnapshot: intake.needs.slice(), introMessage, desiredFrequency });
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
  detailSheet.innerHTML = `
    <div class="sheet-close"></div>
    ${preview ? `<div class="preview-banner">👀 This is what clients see when they view your profile</div>` : ''}
    <div class="card-photo detail-photo" style="background:${t.gradient};">
      <div class="initials">${t.initials}</div>
      ${preview ? '' : languageBadgeHtml(t)}
    </div>
    <div class="card-name-row" style="margin-top:14px;"><h2>${t.name}</h2><span class="creds">${t.creds}</span></div>
    <div class="section-title">Details</div>
    <div class="card-meta"><span>📍 ${t.location.city}, ${t.location.state}</span></div>
    <div class="card-meta">${t.meta.map(m => `<span>${m}</span>`).join('')}</div>
    <div class="card-meta"><span>${insuranceDisplayLabel(t, { preview })}</span></div>
    ${t.bestFor ? `<div class="best-for">${t.bestFor}</div>` : ''}
    <div class="section-title">Specialties</div>
    <div class="tag-row">${t.tags.map(tagHtml).join('')}</div>
    ${practiceBadgeHtml(t)}
    ${preview ? '' : matchTagsHtml(t)}
    <div class="section-title">In their words</div>
    ${promptBlocksHtml(t)}
    ${preview
      ? `<button class="primary-btn" style="margin-top:20px;background:white;border:1.5px solid var(--coral);color:var(--coral-dark);" id="detail-close-btn">Close Preview</button>`
      : `<button class="primary-btn" style="margin-top:20px;background:var(--coral);color:white;" id="detail-like-btn">Add to Shortlist</button>`}
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
  }
}
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.classList.add('hidden'); });

// ===== MATCH MODAL =====
const matchModal = document.getElementById('match-modal');
function showMatchModal(t) {
  const nameParts = t.name.replace(/^Dr\.\s*/, '').split(' ');
  document.getElementById('match-name').textContent = nameParts[0];
  const avatar = document.getElementById('match-avatar');
  avatar.style.background = t.gradient;
  avatar.textContent = t.initials;
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
      <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
      <div><div class="chat-name">${t.name}</div><div class="last-msg">Saved — not yet requested</div></div>
      <button class="shortlist-request-btn" data-tid="${t.id}" ${atCap ? 'disabled' : ''}>${atCap ? 'Limit reached' : 'Request Match'}</button>
    </div>
  `).join('');
  shortlistList.querySelectorAll('.shortlist-request-btn').forEach(btn => {
    btn.addEventListener('click', () => sendMatchRequest(btn.dataset.tid));
  });
}

function renderMatches() {
  if (matches.length === 0) {
    matchesList.innerHTML = `<p class="empty-state">No requests sent yet — head to your Short List to reach out to someone.</p>`;
    return;
  }
  let html = `<div class="request-cap-banner">${activeRequestCount()} of ${MAX_PENDING_REQUESTS} match requests used</div>`;
  html += matches.slice().reverse().map(m => {
    const t = m.therapist;
    const log = chatLog[t.id] || [];
    const last = log[log.length - 1];
    if (m.status === 'pending') {
      return `<div class="match-row" data-id="${t.id}">
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div><div class="chat-name">${t.name}</div><div class="last-msg">${last ? last.text : 'Waiting on their response…'}</div></div>
        <span class="pending-tag">Requested</span>
      </div>`;
    }
    if (m.status === 'ondemand') {
      if (m.paymentStatus !== 'paid') {
        return `<div class="match-row pending" data-id="${t.id}" style="opacity:0.5;">
          <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
          <div><div class="chat-name">${t.name}</div><div class="last-msg">Cancelled — ${refundStatusLabel(m.paymentStatus)}</div></div>
        </div>`;
      }
      return `<div class="match-row pending" data-id="${t.id}">
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div><div class="chat-name">${t.name}</div><div class="last-msg">One-time session booked — ${m.slotLabel} · $${m.amountPaid} paid</div></div>
        <button class="cancel-session-btn" data-cancel-ondemand="${t.id}">Cancel</button>
      </div>`;
    }
    if (m.status === 'declined') {
      return `<div class="match-row pending" data-id="${t.id}" style="opacity:0.5;">
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div><div class="chat-name">${t.name}</div><div class="last-msg">Not a fit on their end right now</div></div>
      </div>`;
    }
    return `<div class="match-row" data-id="${t.id}">
      <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
      <div><div class="chat-name">${t.name}</div><div class="last-msg">${last ? last.text : 'Say hello!'}</div></div>
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
    av.style.background = 'linear-gradient(135deg,#9a9088,#6b6560)';
    av.textContent = '?';
    statusEl.textContent = `Replying as ${t.name}`;
  } else {
    document.getElementById('chat-name').textContent = t.name;
    av.style.background = t.gradient;
    av.textContent = t.initials;
    statusEl.textContent = 'Usually replies within a day';
  }
  document.getElementById('chat-input').dataset.tid = t.id;
  renderChatMessages(t.id);
  showScreen('chat');
}

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
      <p class="modality-info-text">On-Demand sessions require payment up front to confirm your slot. If your plans change:</p>
      <ul class="policy-list">
        <li>48+ hours before your session: full refund</li>
        <li>24–48 hours before: 50% refund</li>
        <li>Less than 24 hours before: no refund</li>
      </ul>
      <button class="primary-btn" style="background:var(--coral);color:white;" id="agree-ondemand-btn">I Agree &amp; Continue</button>
    </div>
  `;
  document.getElementById('agree-ondemand-btn').addEventListener('click', () => {
    clientAgreedToOnDemandPolicy = true;
    renderOndemand();
  });
}

function renderOndemand() {
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
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div><div class="od-name">${t.name}</div><div class="od-creds">${t.creds}</div></div>
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
    <h2>Confirm &amp; Pay</h2>
    <div class="intake-sub">One-time session with ${t.name} — ${slotLabel}</div>
    <div class="payment-amount">$${amount}</div>
    <div class="t-form-label">Cancellation policy</div>
    <ul class="policy-list">
      <li>48+ hours before your session: full refund</li>
      <li>24–48 hours before: 50% refund</li>
      <li>Less than 24 hours before: no refund</li>
    </ul>
    <button class="primary-btn" style="margin-top:12px;background:var(--coral);color:white;" id="confirm-pay-btn">Confirm &amp; Pay $${amount}</button>
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
  btnEl.textContent = `Booked: ${slotLabel}`;
  const [day, ...timeParts] = slotLabel.split(' ');
  const sessionDateTime = nextOccurrence(day, timeParts.join(' '));
  matches.push({
    therapist: t, status: 'ondemand', slotLabel,
    amountPaid: amount, paymentStatus: 'paid',
    sessionDateTime: sessionDateTime.toISOString()
  });
  chatLog[t.id] = chatLog[t.id] || [{ from: 'them', text: `Looking forward to our session ${slotLabel}! Feel free to message me anything beforehand.` }];
  showToast(`Payment confirmed — $${amount} charged.`);
  renderMatches();
}

function requestCancelOndemand(therapistId) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'ondemand' && m.paymentStatus === 'paid');
  if (!m) return;
  const hoursUntil = (new Date(m.sessionDateTime) - new Date()) / 3600000;
  const tier = getRefundTier(hoursUntil);
  document.getElementById('confirm-sheet').innerHTML = `
    <div class="sheet-close"></div>
    <h2>Cancel this session?</h2>
    <div class="intake-sub">Your session with ${m.therapist.name} is ${m.slotLabel}.</div>
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
    <p class="modality-info-text">Clients pay up front to confirm an On-Demand slot with you. If a client cancels:</p>
    <ul class="policy-list">
      <li>48+ hours before the session: they get a full refund</li>
      <li>24–48 hours before: they get a 50% refund — you keep the other 50%</li>
      <li>Less than 24 hours before: no refund — you keep the full amount</li>
    </ul>
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
    if (intake.completed) {
      finishIntake();
      checkForNewMatches();
    } else {
      startIntake();
    }
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

// ===== THERAPIST SIGNUP — brand-new profile from scratch =====
const THERAPIST_PROMPT_OPTIONS = [
  'My approach to our first session',
  "You'll probably click with me if",
  'A belief I hold as a therapist',
  'Session with me feels like',
  "What most people don't expect"
];
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
    name: '', creds: '',
    practiceType: 'specialist',
    bestFor: '',
    tags: [], modalities: [],
    style: 'balanced', gender: 'female', lgbtqAffirming: false, languages: [], showOtherLanguage: false,
    formats: [], insuranceList: [], selfPayNote: '', rateMin: 130,
    city: '', state: '',
    promptAnswers: THERAPIST_PROMPT_OPTIONS.map(() => ''),
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
      <div class="t-form-label">Credentials</div>
      <input type="text" class="t-rate-input" id="ts-creds" placeholder="e.g. LPC, PhD, LMFT" value="${d.creds}">`;
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
        ${['Aetna', 'BCBS', 'Cigna', 'United'].map(i => `<div class="chip-option ${d.insuranceList.includes(i) ? 'selected' : ''}" data-insurance="${i}">${i}</div>`).join('')}
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
      <div class="intake-sub">These are the first things clients read about you — answer as many as you can in your own voice. They'll scroll through all of them before reaching out.</div>
      ${THERAPIST_PROMPT_OPTIONS.map((q, i) => `
        <div class="t-form-label">${q}</div>
        <textarea class="intake-textarea" data-prompt-index="${i}" rows="2" placeholder="Finish the sentence in your own voice...">${d.promptAnswers[i]}</textarea>
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
  if (signupStep === 0) canProceed = d.name.trim().length > 0;
  else if (signupStep === 3) canProceed = d.city.trim() !== '' && d.state !== '';
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
    document.getElementById('ts-next').disabled = d.name.trim().length === 0;
  });
  const credsInput = document.getElementById('ts-creds');
  if (credsInput) credsInput.addEventListener('input', () => { d.creds = credsInput.value; });

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

  document.querySelectorAll('textarea[data-prompt-index]').forEach(el => {
    el.addEventListener('input', () => { d.promptAnswers[Number(el.dataset.promptIndex)] = el.value; });
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

  THERAPISTS.push({
    id, name: d.name.trim(), creds: d.creds.trim() || 'Licensed Therapist',
    initials, gradient,
    meta: buildTherapistMeta(d),
    bestFor: d.bestFor.trim(), selfPayNote: d.selfPayNote.trim(),
    tags: d.tags, practiceType: d.practiceType, externalAppointments: [],
    promptAnswers: d.promptAnswers.map(a => a.trim()),
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
  document.getElementById('bottom-nav').classList.add('hidden');
  document.getElementById('therapist-nav').classList.add('hidden');
  showScreen('account-type');
}

// ===== THERAPIST VIEW =====
let currentTherapistId = THERAPISTS[0].id;
let profileShowOtherLanguage = false; // transient UI flag for the profile editor's "+Other" language picker — not real therapist data

function showTherapistView() {
  document.getElementById('bottom-nav').classList.add('hidden');
  document.getElementById('therapist-nav').classList.remove('hidden');
  showTScreen('t-home');
}

function showTScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('#therapist-nav .nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.remove('hidden');
  const navBtn = document.querySelector(`#therapist-nav .nav-btn[data-tscreen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (name === 't-home') renderTherapistHome();
  if (name === 't-requests') renderRequests();
  if (name === 't-profile') renderTherapistProfile();
}

document.querySelectorAll('#therapist-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showTScreen(btn.dataset.tscreen));
});
document.getElementById('therapist-logout-0').addEventListener('click', logout);
document.getElementById('therapist-logout-1').addEventListener('click', logout);
document.getElementById('therapist-logout-2').addEventListener('click', logout);

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
function renderTherapistHome() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  document.getElementById('t-home-title').textContent = `This Week — ${t.name}`;
  const list = document.getElementById('t-home-list');

  const items = [];
  matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'ondemand' && m.paymentStatus === 'paid').forEach(m => {
    const [day, ...timeParts] = m.slotLabel.split(' ');
    items.push({ day, time: timeParts.join(' '), label: 'One-time session' });
  });
  matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'matched' && m.scheduledDay).forEach(m => {
    items.push({ day: m.scheduledDay, time: m.scheduledTime, label: 'Ongoing client' });
  });
  t.externalAppointments.forEach((a, i) => {
    items.push({ day: a.day, time: a.time, label: a.label, external: true, index: i });
  });
  items.sort((a, b) => DAYS_OF_WEEK.indexOf(a.day) - DAYS_OF_WEEK.indexOf(b.day) || timeSortKey(a.time) - timeSortKey(b.time));

  let html = `<div class="request-cap-banner">${items.length} appointment${items.length === 1 ? '' : 's'} this week</div>`;
  if (items.length === 0) {
    html += `<p class="empty-state">Nothing on the calendar yet.</p>`;
  } else {
    html += items.map(it => `
      <div class="appt-card">
        <div class="appt-day">${it.day}</div>
        <div class="appt-details"><div class="appt-label">${it.label}</div><div class="appt-time">${it.time}</div></div>
        ${it.external ? `<button class="appt-remove" data-remove-external="${it.index}">✕</button>` : ''}
      </div>
    `).join('');
  }

  html += `
    <div class="t-form-label" style="margin-top:20px;">Add an appointment booked elsewhere</div>
    <input type="text" class="t-rate-input" id="external-appt-label" placeholder="e.g. John D. — phone consult">
    <div class="schedule-row">
      <select id="external-appt-day">${DAYS_OF_WEEK.map(d => `<option value="${d}">${d}</option>`).join('')}</select>
      <input type="time" id="external-appt-time" value="10:00">
    </div>
    <button class="message-btn-full" id="add-external-appt-btn">+ Add Appointment</button>
  `;

  list.innerHTML = html;

  list.querySelectorAll('[data-remove-external]').forEach(btn => {
    btn.addEventListener('click', () => {
      t.externalAppointments.splice(Number(btn.dataset.removeExternal), 1);
      renderTherapistHome();
    });
  });
  document.getElementById('add-external-appt-btn').addEventListener('click', () => {
    const label = document.getElementById('external-appt-label').value.trim();
    if (!label) return;
    const day = document.getElementById('external-appt-day').value;
    const time = formatTime12h(document.getElementById('external-appt-time').value);
    t.externalAppointments.push({ label, day, time });
    renderTherapistHome();
  });
}

function renderRequests() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  document.getElementById('t-requests-title').textContent = `Requests — ${t.name}`;
  const list = document.getElementById('requests-list');
  const myRequests = matches.filter(m => m.therapist.id === currentTherapistId && m.status !== 'ondemand');
  const myBookings = matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'ondemand');

  let html = '';
  if (myRequests.length === 0) {
    html += `<p class="empty-state">No ongoing-client requests yet for ${t.name}.</p>`;
  } else {
    html += myRequests.slice().reverse().map(m => {
      if (m.status === 'pending') {
        return `<div class="request-card">
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
  myBookings.forEach(m => {
    if (m.paymentStatus === 'paid') {
      html += `<div class="confirmed-session">One-time session confirmed — ${m.slotLabel} · $${m.amountPaid} paid</div>`;
    } else {
      html += `<div class="confirmed-session cancelled">Cancelled — ${m.slotLabel} (${refundStatusLabel(m.paymentStatus)})</div>`;
    }
  });

  list.innerHTML = html;
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

function renderTherapistProfile() {
  const t = THERAPISTS.find(t => t.id === currentTherapistId);
  const container = document.getElementById('t-profile-content');
  container.innerHTML = `
    <div class="t-form-name">${t.name} <span class="t-form-creds">${t.creds}</span></div>
    <button class="primary-btn" style="background:white;border:1.5px solid var(--coral);color:var(--coral-dark);margin-bottom:20px;" id="preview-profile-btn">👀 Preview My Profile as a Client</button>

    <div class="t-form-label">Practice type</div>
    <div class="chip-grid">
      <div class="chip-option ${t.practiceType === 'specialist' ? 'selected' : ''}" data-set-practice="specialist">A few core specialties</div>
      <div class="chip-option ${t.practiceType === 'generalist' ? 'selected' : ''}" data-set-practice="generalist">Broad range of concerns</div>
    </div>

    <div class="t-form-label">Specialties / needs you work with</div>
    <div class="chip-grid">${NEED_OPTIONS.map(n => `<div class="chip-option ${t.tags.includes(n) ? 'selected' : ''}" data-toggle-tag="${n}">${n}</div>`).join('')}</div>

    <div class="t-form-label">Modalities you offer</div>
    <div class="chip-grid">${MODALITY_OPTIONS.map(m => `<div class="chip-option ${t.modalities.includes(m) ? 'selected' : ''}" data-toggle-modality="${m}">${m}</div>`).join('')}</div>

    <div class="t-form-label">In one line, who do you work best with?</div>
    <input type="text" class="t-rate-input" id="t-bestfor-input" placeholder="e.g. I work best with new parents navigating postpartum anxiety" value="${t.bestFor || ''}">

    <div class="t-form-label">Gender</div>
    <div class="chip-grid">
      <div class="chip-option ${t.identity.gender === 'female' ? 'selected' : ''}" data-set-gender="female">Female</div>
      <div class="chip-option ${t.identity.gender === 'male' ? 'selected' : ''}" data-set-gender="male">Male</div>
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
    <div class="chip-grid">${['Aetna', 'BCBS', 'Cigna', 'United'].map(i => `<div class="chip-option ${t.insuranceList.includes(i) ? 'selected' : ''}" data-toggle-insurance="${i}">${i}</div>`).join('')}</div>

    <div class="t-form-label">If you don't take insurance, what should clients know? (optional)</div>
    <input type="text" class="t-rate-input" id="t-selfpaynote-input" placeholder="e.g. Sliding scale available" value="${t.selfPayNote || ''}">

    <div class="t-form-label">Rate (per session, $)</div>
    <input type="number" class="t-rate-input" id="t-rate-input" value="${t.rateMin}">

    <div class="t-form-label" style="margin-top:20px;">In your words</div>
    ${THERAPIST_PROMPT_OPTIONS.map((q, i) => `
      <div class="t-form-label">${q}</div>
      <textarea class="intake-textarea" data-edit-prompt-index="${i}" rows="2">${t.promptAnswers[i] || ''}</textarea>
    `).join('')}

    <div class="must-have-toggle" style="margin-top:20px;">
      <div class="toggle-label"><strong>Accepting ongoing clients</strong><span>Shown in Discover for new long-term matches</span></div>
      <div class="switch ${t.acceptingOngoing ? 'on' : ''}" id="t-ongoing-switch"></div>
    </div>

    <div class="must-have-toggle">
      <div class="toggle-label"><strong>Offering on-demand this week</strong><span>Shown in On-Demand for one-time sessions</span></div>
      <div class="switch ${t.onDemand ? 'on' : ''}" id="t-ondemand-switch"></div>
    </div>

    <div id="t-slots-section" style="${t.onDemand ? '' : 'display:none;'}">
      <div class="t-form-label">Open slots this week</div>
      <div class="slot-row" id="t-slots-list">
        ${t.onDemandSlots.map((s, i) => `<span class="slot-btn booked" style="cursor:pointer;" data-remove-slot="${i}">${s.label} ✕</span>`).join('')}
      </div>
      <div class="add-slot-row">
        <input type="text" id="new-slot-input" placeholder="e.g. Mon 3:00pm">
        <button id="add-slot-btn">Add</button>
      </div>
    </div>
  `;
  attachTherapistProfileHandlers(t);
}

function attachTherapistProfileHandlers(t) {
  document.getElementById('preview-profile-btn').addEventListener('click', () => openDetail(t, { preview: true }));
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
  document.querySelectorAll('[data-toggle-modality]').forEach(el => el.addEventListener('click', () => {
    const m = el.dataset.toggleModality;
    const i = t.modalities.indexOf(m);
    if (i === -1) t.modalities.push(m); else t.modalities.splice(i, 1);
    renderTherapistProfile();
  }));
  const tBestForInput = document.getElementById('t-bestfor-input');
  if (tBestForInput) tBestForInput.addEventListener('input', () => { t.bestFor = tBestForInput.value; });
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
  document.querySelectorAll('textarea[data-edit-prompt-index]').forEach(el => {
    el.addEventListener('input', () => { t.promptAnswers[Number(el.dataset.editPromptIndex)] = el.value; });
  });
  document.getElementById('t-ongoing-switch').addEventListener('click', () => { t.acceptingOngoing = !t.acceptingOngoing; renderTherapistProfile(); });
  document.getElementById('t-ondemand-switch').addEventListener('click', () => {
    if (!t.onDemand && !t.agreedToOnDemandPolicy) {
      openTherapistOnDemandAgreement(() => { t.agreedToOnDemandPolicy = true; t.onDemand = true; renderTherapistProfile(); });
    } else {
      t.onDemand = !t.onDemand;
      renderTherapistProfile();
    }
  });
  const addBtn = document.getElementById('add-slot-btn');
  if (addBtn) addBtn.addEventListener('click', () => {
    const input = document.getElementById('new-slot-input');
    const label = input.value.trim();
    if (!label) return;
    const rank = t.onDemandSlots.length ? Math.max(...t.onDemandSlots.map(s => s.rank)) + 1 : 1;
    t.onDemandSlots.push({ label, rank });
    renderTherapistProfile();
  });
  document.querySelectorAll('[data-remove-slot]').forEach(el => el.addEventListener('click', () => {
    t.onDemandSlots.splice(Number(el.dataset.removeSlot), 1);
    renderTherapistProfile();
  }));
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
function needsSummary() {
  return intake.needs.length ? intake.needs.join(', ') : 'Not specified';
}
function formatSummary() {
  if (intake.format === 'no-preference') return 'No preference';
  return intake.format === 'video' ? 'Video preferred' : 'In-person preferred';
}
function insuranceSummary() {
  return intake.insurance === 'any' ? 'Self-pay / any' : intake.insurance;
}
function budgetSummary() {
  return intake.budgetMax >= 300 ? 'Up to $300/session (no real limit)' : `Up to $${intake.budgetMax}/session`;
}
function identitySummary() {
  const parts = [];
  if (intake.genderPref !== 'no-preference') parts.push(`${intake.genderPref}${intake.genderRequired ? ' (must-have)' : ' (preferred)'}`);
  if (intake.lgbtqRequired) parts.push('LGBTQ+ affirming required');
  if (intake.languagePref !== 'any') parts.push(`Speaks ${intake.languagePref}${intake.languageRequired ? ' (must-have)' : ' (preferred)'}`);
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
  screen.innerHTML = `
    <header class="top-bar"><div class="logo">Your Preferences</div></header>
    <div class="profile-content">
      <div class="pref-item"><div class="pref-label">Looking for support with</div><div class="pref-value">${needsSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Approach</div><div class="pref-value">${modalitySummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Session format</div><div class="pref-value">${formatSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Insurance</div><div class="pref-value">${insuranceSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Budget</div><div class="pref-value">${budgetSummary()}</div></div>
      <div class="pref-item"><div class="pref-label">Identity preferences</div><div class="pref-value">${identitySummary()}</div></div>
      <button class="edit-prefs-btn" id="edit-prefs-btn">Edit My Preferences</button>
      <button class="edit-prefs-btn" id="client-logout-btn" style="color:var(--ink-soft);">Log Out</button>
    </div>
  `;
  document.getElementById('edit-prefs-btn').addEventListener('click', startIntake);
  document.getElementById('client-logout-btn').addEventListener('click', logout);
}

showScreen('account-type');
