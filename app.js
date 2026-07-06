const THERAPISTS = [
  {
    id: 't1', name: 'Dr. Maya Chen', creds: 'PhD, Clinical Psychologist',
    initials: 'MC', gradient: 'linear-gradient(135deg,#4a9d96,#2e7d76)',
    meta: ['Video & In-person', '$140–180/session', 'Accepts Aetna, BCBS'],
    tags: ['Anxiety', 'Life Transitions', 'CBT', 'LGBTQ+ Affirming'],
    prompt: { q: 'My approach to our first session', a: "We'll skip the small talk. I want to know what's actually been sitting heavy on you lately, and what you're hoping is different a few months from now." },
    modalities: ['CBT'], style: 'direct',
    identity: { gender: 'female', lgbtqAffirming: true },
    formats: ['video', 'in-person'], rateMin: 140, insuranceList: ['Aetna', 'BCBS'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week'
  },
  {
    id: 't2', name: 'James Okafor', creds: 'LMFT',
    initials: 'JO', gradient: 'linear-gradient(135deg,#e8836b,#c85a41)',
    meta: ['Video only', '$110–130/session', 'Sliding scale available'],
    tags: ['Couples', 'Family Conflict', 'EFT'],
    prompt: { q: "You'll probably click with me if", a: "you want a therapist who'll gently push back instead of just nodding along — I believe in doing the work between sessions, not just venting in them." },
    modalities: ['EFT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false },
    formats: ['video'], rateMin: 110, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Thu 4:00pm', rank: 2 }],
    nextAvailableRank: 3, nextAvailableLabel: 'Next week'
  },
  {
    id: 't3', name: 'Priya Raman', creds: 'LPC, Trauma Specialist',
    initials: 'PR', gradient: 'linear-gradient(135deg,#a68fc9,#7a5fa8)',
    meta: ['In-person, Downtown', '$150/session', 'Out-of-network'],
    tags: ['Trauma', 'EMDR', 'PTSD', 'Grief'],
    prompt: { q: 'A belief I hold as a therapist', a: "Healing isn't linear, and you don't have to have your story fully sorted out before you walk in the door. We can figure out the shape of it together." },
    modalities: ['EMDR'], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true },
    formats: ['in-person'], rateMin: 150, insuranceList: [],
    acceptingOngoing: false, onDemand: true, onDemandSlots: [{ label: 'Wed 1:00pm', rank: 1 }, { label: 'Fri 11:00am', rank: 3 }],
    nextAvailableRank: null, nextAvailableLabel: 'Not accepting new ongoing clients'
  },
  {
    id: 't4', name: 'Dr. Sam Alvarez', creds: 'PsyD',
    initials: 'SA', gradient: 'linear-gradient(135deg,#d4a24e,#b57e2f)',
    meta: ['Video & In-person', '$160/session', 'Accepts Cigna'],
    tags: ['ADHD', 'Burnout', "Men's Issues", 'ACT'],
    prompt: { q: "Session with me feels like", a: "less of a couch-and-tissue-box vibe and more like a direct, sometimes funny conversation with someone who's genuinely in your corner." },
    modalities: ['ACT'], style: 'direct',
    identity: { gender: 'male', lgbtqAffirming: false },
    formats: ['video', 'in-person'], rateMin: 160, insuranceList: ['Cigna'],
    acceptingOngoing: true, onDemand: false, onDemandSlots: [],
    nextAvailableRank: 1, nextAvailableLabel: 'This week'
  },
  {
    id: 't5', name: 'Dr. Leah Fitzgerald', creds: 'PhD, Perinatal Specialist',
    initials: 'LF', gradient: 'linear-gradient(135deg,#6ba4c9,#4278a0)',
    meta: ['Video only', '$135/session', 'Accepts United'],
    tags: ['Postpartum', 'Anxiety', 'New Parents'],
    prompt: { q: "What most people don't expect", a: "is how much relief comes from just being told 'this is a normal reaction to an abnormal amount of pressure.' You're not broken." },
    modalities: [], style: 'gentle',
    identity: { gender: 'female', lgbtqAffirming: true },
    formats: ['video'], rateMin: 135, insuranceList: ['United'],
    acceptingOngoing: false, onDemand: false, onDemandSlots: [],
    nextAvailableRank: null, nextAvailableLabel: 'Paused'
  },
  {
    id: 't6', name: 'Marcus Webb', creds: 'LCSW',
    initials: 'MW', gradient: 'linear-gradient(135deg,#8a9b6e,#647a4a)',
    meta: ['In-person & Video', '$120/session', 'Sliding scale'],
    tags: ['Substance Use', 'Young Adults', 'Motivational Interviewing'],
    prompt: { q: 'My approach to our first session', a: "No lectures, no judgment. I want to understand what role this has been playing in your life before we talk about changing anything." },
    modalities: ['Motivational Interviewing'], style: 'gentle',
    identity: { gender: 'male', lgbtqAffirming: true },
    formats: ['video', 'in-person'], rateMin: 120, insuranceList: [],
    acceptingOngoing: true, onDemand: true, onDemandSlots: [{ label: 'Tue 9:00am', rank: 1 }],
    nextAvailableRank: 4, nextAvailableLabel: 'In 2 weeks'
  }
];

const NEED_OPTIONS = ['Anxiety', 'Trauma', 'Couples', 'Grief', 'Life Transitions', 'Burnout', 'ADHD', 'Substance Use', 'Postpartum', 'Family Conflict'];
const MODALITY_OPTIONS = ['CBT', 'EMDR', 'ACT', 'EFT', 'Motivational Interviewing'];
const INSURANCE_OPTIONS = ['Aetna', 'BCBS', 'Cigna', 'United', 'any'];

let intake = {
  needs: [],
  modality: 'open', modalityRequired: false,
  stylePref: 'balanced',
  genderPref: 'no-preference', genderRequired: false,
  lgbtqRequired: false,
  format: 'no-preference',
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

  if (intake.needs.length > 0 && !t.tags.some(tag => intake.needs.includes(tag))) return false;

  if (intake.modality !== 'open' && intake.modalityRequired && !t.modalities.includes(intake.modality)) return false;

  if (intake.genderPref !== 'no-preference' && intake.genderRequired && t.identity.gender !== intake.genderPref) return false;

  if (intake.lgbtqRequired && !t.identity.lgbtqAffirming) return false;

  if (intake.format !== 'no-preference' && !t.formats.includes(intake.format)) return false;

  if (intake.insurance !== 'any' && !t.insuranceList.includes(intake.insurance)) return false;

  if (intake.budgetMax && t.rateMin > intake.budgetMax) return false;

  return true;
}

function getMatchReasons(t) {
  const reasons = [];
  const overlap = t.tags.filter(tag => intake.needs.includes(tag));
  overlap.forEach(tag => reasons.push(tag));
  if (intake.modality !== 'open' && t.modalities.includes(intake.modality)) reasons.push(intake.modality);
  if (intake.format !== 'no-preference' && t.formats.includes(intake.format)) {
    reasons.push(intake.format === 'video' ? 'Video sessions' : 'In-person sessions');
  }
  if (intake.insurance !== 'any' && t.insuranceList.includes(intake.insurance)) reasons.push(`Accepts ${intake.insurance}`);
  if (intake.lgbtqRequired && t.identity.lgbtqAffirming) reasons.push('LGBTQ+ Affirming');
  if (intake.genderPref !== 'no-preference' && t.identity.gender === intake.genderPref) {
    reasons.push(t.identity.gender === 'female' ? 'Female therapist' : 'Male therapist');
  }
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
  computeDeck();
  renderStack();
}

// ===================================================================
// INTAKE QUIZ
// ===================================================================
let intakeStep = 0;
const TOTAL_STEPS = 5;
const intakeContent = document.getElementById('intake-content');

function renderIntakeStep() {
  let html = `<div class="intake-progress">${Array.from({ length: TOTAL_STEPS }).map((_, i) =>
    `<div class="dot ${i <= intakeStep ? 'done' : ''}"></div>`).join('')}</div>`;

  if (intakeStep === 0) {
    html += `
      <h1>What brings you to therapy right now?</h1>
      <div class="intake-sub">Pick as many as apply — this is how we find therapists who actually work with what you're dealing with.</div>
      <div class="chip-grid" id="needs-grid">
        ${NEED_OPTIONS.map(n => `<div class="chip-option ${intake.needs.includes(n) ? 'selected' : ''}" data-need="${n}">${n}</div>`).join('')}
      </div>`;
  } else if (intakeStep === 1) {
    html += `
      <h1>Looking for a specific approach?</h1>
      <div class="intake-sub">If you're not sure, that's completely fine — most people aren't.</div>
      <div class="option-list" id="modality-list">
        <div class="option-row ${intake.modality === 'open' ? 'selected' : ''}" data-modality="open">Not sure / open to anything</div>
        ${MODALITY_OPTIONS.map(m => `<div class="option-row ${intake.modality === m ? 'selected' : ''}" data-modality="${m}">${m}</div>`).join('')}
      </div>
      <div id="modality-must-have" style="${intake.modality === 'open' ? 'display:none;' : ''}">
        <div class="must-have-toggle">
          <div class="toggle-label"><strong>Must-have</strong><span>Only show therapists who offer this</span></div>
          <div class="switch ${intake.modalityRequired ? 'on' : ''}" id="modality-required-switch"></div>
        </div>
      </div>`;
  } else if (intakeStep === 2) {
    html += `
      <h1>What kind of guidance do you want?</h1>
      <div class="intake-sub">There's no wrong answer — this just helps us show you therapists whose style tends to match.</div>
      <div class="option-list" id="style-list">
        <div class="option-row ${intake.stylePref === 'gentle' ? 'selected' : ''}" data-style="gentle">Mostly listens and reflects back</div>
        <div class="option-row ${intake.stylePref === 'balanced' ? 'selected' : ''}" data-style="balanced">A mix of both</div>
        <div class="option-row ${intake.stylePref === 'direct' ? 'selected' : ''}" data-style="direct">Direct — tells me like it is</div>
      </div>`;
  } else if (intakeStep === 3) {
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
      </div>`;
  } else if (intakeStep === 4) {
    html += `
      <h1>A few logistics</h1>
      <div class="intake-sub">So we only show you therapists you can actually see.</div>
      <div class="match-tag-label" style="margin-top:0;">Session format</div>
      <div class="option-list" id="format-list">
        <div class="option-row ${intake.format === 'no-preference' ? 'selected' : ''}" data-format="no-preference">No preference</div>
        <div class="option-row ${intake.format === 'video' ? 'selected' : ''}" data-format="video">Video</div>
        <div class="option-row ${intake.format === 'in-person' ? 'selected' : ''}" data-format="in-person">In-person</div>
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

  const canProceed = intakeStep !== 0 || intake.needs.length > 0;
  html += `
    <div class="intake-footer">
      ${intakeStep > 0 ? `<button class="btn-back" id="intake-back">Back</button>` : ''}
      <button class="btn-next" id="intake-next" ${canProceed ? '' : 'disabled'}>${intakeStep === TOTAL_STEPS - 1 ? 'See My Matches' : 'Continue'}</button>
    </div>`;

  intakeContent.innerHTML = html;
  attachIntakeHandlers();
}

function attachIntakeHandlers() {
  document.querySelectorAll('#needs-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const need = el.dataset.need;
      const i = intake.needs.indexOf(need);
      if (i === -1) intake.needs.push(need); else intake.needs.splice(i, 1);
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

  document.querySelectorAll('#format-list .option-row').forEach(el => {
    el.addEventListener('click', () => { intake.format = el.dataset.format; renderIntakeStep(); });
  });
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

function buildCard(t) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="card-photo" style="background:${t.gradient}">
      <div class="initials">${t.initials}</div>
      <div class="stamp like">Like</div>
      <div class="stamp pass">Pass</div>
    </div>
    <div class="card-body">
      <div class="card-name-row"><h2>${t.name}</h2><span class="creds">${t.creds}</span></div>
      <div class="card-meta">${t.meta.map(m => `<span>${m}</span>`).join('')}</div>
      <div class="card-meta"><span>Next available: ${t.nextAvailableLabel}</span></div>
      <div class="tag-row">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      ${matchTagsHtml(t)}
      <div class="prompt-block">
        <div class="prompt-q">${t.prompt.q}</div>
        <div class="prompt-a">${t.prompt.a}</div>
      </div>
    </div>
  `;
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

function respondToRequest(therapistId, decision) {
  const m = matches.find(m => m.therapist.id === therapistId && m.status === 'pending');
  if (!m) return;
  chatLog[therapistId] = chatLog[therapistId] || [];
  if (decision === 'accept') {
    m.status = 'matched';
    m.newlyMatched = true;
    chatLog[therapistId].push({ from: 'them', text: `Great — I'd love to move forward and get you set up on my regular schedule. I'll follow up here about a recurring time.` });
  } else {
    m.status = 'declined';
    chatLog[therapistId].push({ from: 'them', text: `Thank you for sharing this with me. I don't think I'm the right fit for what you're looking for right now, but I hope you find someone who is.` });
  }
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

function openDetail(t) {
  detailSheet.innerHTML = `
    <div class="sheet-close"></div>
    <div class="card-photo" style="background:${t.gradient};height:160px;border-radius:16px;margin-bottom:14px;">
      <div class="initials">${t.initials}</div>
    </div>
    <div class="card-name-row"><h2>${t.name}</h2></div>
    <div class="card-meta" style="margin-top:4px;">${t.creds}</div>
    <div class="section-title">Details</div>
    <div class="card-meta">${t.meta.map(m => `<span>${m}</span>`).join('')}</div>
    <div class="section-title">Specialties</div>
    <div class="tag-row">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    ${matchTagsHtml(t)}
    <div class="section-title">In their words</div>
    <div class="prompt-block">
      <div class="prompt-q">${t.prompt.q}</div>
      <div class="prompt-a">${t.prompt.a}</div>
    </div>
    <button class="primary-btn" style="margin-top:20px;background:var(--coral);color:white;" id="detail-like-btn">Add to Shortlist</button>
  `;
  detailModal.classList.remove('hidden');
  document.getElementById('detail-like-btn').addEventListener('click', () => {
    detailModal.classList.add('hidden');
    const topCard = cardStack.lastElementChild;
    if (topCard && topCard.dataset.id === t.id && topCard._forceSwipe) topCard._forceSwipe('like');
  });
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
      return `<div class="match-row pending" data-id="${t.id}">
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div><div class="chat-name">${t.name}</div><div class="last-msg">One-time session booked — ${m.slotLabel}</div></div>
        <span class="pending-tag">Booked</span>
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
function renderOndemand() {
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

function bookOndemand(tid, slotLabel, btnEl) {
  const t = THERAPISTS.find(t => t.id === tid);
  const card = btnEl.closest('.ondemand-card');
  card.querySelectorAll('.slot-btn').forEach(b => { b.disabled = true; b.classList.add('booked'); });
  btnEl.textContent = `Booked: ${slotLabel}`;
  matches.push({ therapist: t, status: 'ondemand', slotLabel });
  chatLog[t.id] = chatLog[t.id] || [{ from: 'them', text: `Looking forward to our session ${slotLabel}! Feel free to message me anything beforehand.` }];
  renderMatches();
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

let loginCreatingAccount = false;
document.getElementById('login-toggle-mode').addEventListener('click', () => {
  loginCreatingAccount = !loginCreatingAccount;
  document.getElementById('login-submit-btn').textContent = loginCreatingAccount ? 'Create Account' : 'Log In';
  document.getElementById('login-toggle-mode').textContent = loginCreatingAccount ? 'Already have an account? Log in' : 'New here? Create an account';
});

document.getElementById('login-submit-btn').addEventListener('click', () => {
  if (accountType === 'client') {
    if (intake.completed) {
      finishIntake();
      checkForNewMatches();
    } else {
      startIntake();
    }
  } else if (loginCreatingAccount) {
    startTherapistSignup();
  } else {
    renderTherapistSelect();
    showScreen('therapist-select');
  }
});

// ===== THERAPIST PROFILE SELECT (stands in for "which account is mine" —
// this prototype has no real per-therapist passwords, so logging in as a
// therapist means picking which seeded profile you're managing) =====
document.getElementById('therapist-select-back').addEventListener('click', () => showScreen('account-type'));

function renderTherapistSelect() {
  const list = document.getElementById('therapist-select-list');
  list.innerHTML = THERAPISTS.map(t => `
    <div class="match-row" data-tid="${t.id}">
      <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
      <div><div class="chat-name">${t.name}</div><div class="last-msg">${t.creds}</div></div>
    </div>
  `).join('');
  list.querySelectorAll('.match-row').forEach(row => {
    row.addEventListener('click', () => {
      currentTherapistId = row.dataset.tid;
      showTherapistView();
    });
  });
}

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

let signupStep = 0;
const TOTAL_SIGNUP_STEPS = 6;
let newTherapistDraft = null;
const signupContent = document.getElementById('therapist-signup-content');

function startTherapistSignup() {
  signupStep = 0;
  newTherapistDraft = {
    name: '', creds: '',
    tags: [], modalities: [],
    style: 'balanced', gender: 'female', lgbtqAffirming: false,
    formats: [], insuranceList: [], rateMin: 130,
    promptQ: THERAPIST_PROMPT_OPTIONS[0], promptA: '',
    acceptingOngoing: true, onDemand: false, onDemandSlots: []
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
      <div class="intake-sub">Pick everything that applies — this is how clients with matching needs find you.</div>
      <div class="chip-grid" id="ts-tags-grid">
        ${NEED_OPTIONS.map(n => `<div class="chip-option ${d.tags.includes(n) ? 'selected' : ''}" data-tag="${n}">${n}</div>`).join('')}
      </div>
      <div class="t-form-label">Modalities you're certified in</div>
      <div class="chip-grid" id="ts-modalities-grid">
        ${MODALITY_OPTIONS.map(m => `<div class="chip-option ${d.modalities.includes(m) ? 'selected' : ''}" data-modality="${m}">${m}</div>`).join('')}
      </div>`;
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
      </div>`;
  } else if (signupStep === 3) {
    html += `
      <h1>Logistics</h1>
      <div class="intake-sub">So clients only see you if they can actually work with you.</div>
      <div class="t-form-label">Session format</div>
      <div class="chip-grid" id="ts-format-grid">
        <div class="chip-option ${d.formats.includes('video') ? 'selected' : ''}" data-format="video">Video</div>
        <div class="chip-option ${d.formats.includes('in-person') ? 'selected' : ''}" data-format="in-person">In-person</div>
      </div>
      <div class="t-form-label">Insurance accepted</div>
      <div class="chip-grid" id="ts-insurance-grid">
        ${['Aetna', 'BCBS', 'Cigna', 'United'].map(i => `<div class="chip-option ${d.insuranceList.includes(i) ? 'selected' : ''}" data-insurance="${i}">${i}</div>`).join('')}
      </div>
      <div class="t-form-label">Your rate per session</div>
      <div class="budget-slider-row">
        <input type="range" id="ts-rate-slider" min="80" max="250" step="10" value="${d.rateMin}">
        <div class="budget-value" id="ts-rate-value">$${d.rateMin}</div>
      </div>`;
  } else if (signupStep === 4) {
    html += `
      <h1>In your words</h1>
      <div class="intake-sub">This becomes the quote clients see on your card — it matters more than your credentials.</div>
      <div class="option-list" id="ts-prompt-list">
        ${THERAPIST_PROMPT_OPTIONS.map(q => `<div class="option-row ${d.promptQ === q ? 'selected' : ''}" data-prompt="${q}">${q}</div>`).join('')}
      </div>
      <textarea class="intake-textarea" id="ts-prompt-answer" rows="3" placeholder="Finish the sentence in your own voice...">${d.promptA}</textarea>`;
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

  const canProceed = signupStep !== 0 || d.name.trim().length > 0;
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

  document.querySelectorAll('#ts-style-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.style = el.dataset.style; renderSignupStep(); });
  });
  document.querySelectorAll('#ts-gender-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.gender = el.dataset.gender; renderSignupStep(); });
  });
  const lgbtqSwitch = document.getElementById('ts-lgbtq-switch');
  if (lgbtqSwitch) lgbtqSwitch.addEventListener('click', () => { d.lgbtqAffirming = !d.lgbtqAffirming; renderSignupStep(); });

  document.querySelectorAll('#ts-format-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const f = el.dataset.format;
      const i = d.formats.indexOf(f);
      if (i === -1) d.formats.push(f); else d.formats.splice(i, 1);
      renderSignupStep();
    });
  });
  document.querySelectorAll('#ts-insurance-grid .chip-option').forEach(el => {
    el.addEventListener('click', () => {
      const ins = el.dataset.insurance;
      const i = d.insuranceList.indexOf(ins);
      if (i === -1) d.insuranceList.push(ins); else d.insuranceList.splice(i, 1);
      renderSignupStep();
    });
  });
  const rateSlider = document.getElementById('ts-rate-slider');
  if (rateSlider) {
    rateSlider.addEventListener('input', () => {
      d.rateMin = Number(rateSlider.value);
      document.getElementById('ts-rate-value').textContent = `$${d.rateMin}`;
    });
  }

  document.querySelectorAll('#ts-prompt-list .option-row').forEach(el => {
    el.addEventListener('click', () => { d.promptQ = el.dataset.prompt; renderSignupStep(); });
  });
  const promptAnswer = document.getElementById('ts-prompt-answer');
  if (promptAnswer) promptAnswer.addEventListener('input', () => { d.promptA = promptAnswer.value; });

  const ongoingSwitch = document.getElementById('ts-ongoing-switch');
  if (ongoingSwitch) ongoingSwitch.addEventListener('click', () => { d.acceptingOngoing = !d.acceptingOngoing; renderSignupStep(); });
  const ondemandSwitch = document.getElementById('ts-ondemand-switch');
  if (ondemandSwitch) ondemandSwitch.addEventListener('click', () => { d.onDemand = !d.onDemand; renderSignupStep(); });
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
  const insuranceLabel = d.insuranceList.length ? `Accepts ${d.insuranceList.join(', ')}` : 'Self-pay / out-of-network';
  return [formatLabel, `$${d.rateMin}/session`, insuranceLabel];
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
    tags: d.tags,
    prompt: { q: d.promptQ, a: d.promptA.trim() || "I'm still writing this one — check back soon." },
    modalities: d.modalities, style: d.style,
    identity: { gender: d.gender, lgbtqAffirming: d.lgbtqAffirming },
    formats: d.formats, rateMin: d.rateMin, insuranceList: d.insuranceList,
    acceptingOngoing: d.acceptingOngoing, onDemand: d.onDemand, onDemandSlots: d.onDemandSlots,
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

function showTherapistView() {
  document.getElementById('bottom-nav').classList.add('hidden');
  document.getElementById('therapist-nav').classList.remove('hidden');
  showTScreen('t-requests');
}

function showTScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('#therapist-nav .nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.remove('hidden');
  const navBtn = document.querySelector(`#therapist-nav .nav-btn[data-tscreen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (name === 't-requests') renderRequests();
  if (name === 't-profile') renderTherapistProfile();
}

document.querySelectorAll('#therapist-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showTScreen(btn.dataset.tscreen));
});
document.getElementById('therapist-logout-1').addEventListener('click', logout);
document.getElementById('therapist-logout-2').addEventListener('click', logout);

function updateTNavBadge() {
  const badge = document.getElementById('t-nav-badge');
  const count = matches.filter(m => m.therapist.id === currentTherapistId && m.status === 'pending').length;
  if (count > 0) { badge.textContent = count; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
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
          <div class="request-actions">
            <button class="decline-btn" data-decision="decline">Decline</button>
            <button class="accept-btn" data-decision="accept">Accept</button>
          </div>
        </div>`;
      }
      if (m.status === 'matched') {
        return `<div class="request-card resolved">
          <span class="resolved-tag matched">✓ Accepted</span> — now chatting
          <button class="message-btn-full" data-action="message" style="margin-top:10px;">💬 Message</button>
        </div>`;
      }
      return `<div class="request-card resolved"><span class="resolved-tag declined">Declined</span></div>`;
    }).join('');
  }
  myBookings.forEach(m => {
    html += `<div class="confirmed-session">One-time session confirmed — ${m.slotLabel}</div>`;
  });

  list.innerHTML = html;
  list.querySelectorAll('[data-decision]').forEach(btn => {
    btn.addEventListener('click', () => respondToRequest(currentTherapistId, btn.dataset.decision));
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

    <div class="t-form-label">Specialties / needs you work with</div>
    <div class="chip-grid">${NEED_OPTIONS.map(n => `<div class="chip-option ${t.tags.includes(n) ? 'selected' : ''}" data-toggle-tag="${n}">${n}</div>`).join('')}</div>

    <div class="t-form-label">Modalities you offer</div>
    <div class="chip-grid">${MODALITY_OPTIONS.map(m => `<div class="chip-option ${t.modalities.includes(m) ? 'selected' : ''}" data-toggle-modality="${m}">${m}</div>`).join('')}</div>

    <div class="t-form-label">Gender</div>
    <div class="chip-grid">
      <div class="chip-option ${t.identity.gender === 'female' ? 'selected' : ''}" data-set-gender="female">Female</div>
      <div class="chip-option ${t.identity.gender === 'male' ? 'selected' : ''}" data-set-gender="male">Male</div>
    </div>

    <div class="must-have-toggle">
      <div class="toggle-label"><strong>LGBTQ+ affirming</strong><span>Shown to clients who require this</span></div>
      <div class="switch ${t.identity.lgbtqAffirming ? 'on' : ''}" id="t-lgbtq-switch"></div>
    </div>

    <div class="t-form-label">Session format</div>
    <div class="chip-grid">
      <div class="chip-option ${t.formats.includes('video') ? 'selected' : ''}" data-toggle-format="video">Video</div>
      <div class="chip-option ${t.formats.includes('in-person') ? 'selected' : ''}" data-toggle-format="in-person">In-person</div>
    </div>

    <div class="t-form-label">Insurance accepted</div>
    <div class="chip-grid">${['Aetna', 'BCBS', 'Cigna', 'United'].map(i => `<div class="chip-option ${t.insuranceList.includes(i) ? 'selected' : ''}" data-toggle-insurance="${i}">${i}</div>`).join('')}</div>

    <div class="t-form-label">Rate (per session, $)</div>
    <input type="number" class="t-rate-input" id="t-rate-input" value="${t.rateMin}">

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
  document.querySelectorAll('[data-set-gender]').forEach(el => el.addEventListener('click', () => {
    t.identity.gender = el.dataset.setGender;
    renderTherapistProfile();
  }));
  document.getElementById('t-lgbtq-switch').addEventListener('click', () => { t.identity.lgbtqAffirming = !t.identity.lgbtqAffirming; renderTherapistProfile(); });
  document.querySelectorAll('[data-toggle-format]').forEach(el => el.addEventListener('click', () => {
    const f = el.dataset.toggleFormat;
    const i = t.formats.indexOf(f);
    if (i === -1) t.formats.push(f); else t.formats.splice(i, 1);
    renderTherapistProfile();
  }));
  document.querySelectorAll('[data-toggle-insurance]').forEach(el => el.addEventListener('click', () => {
    const ins = el.dataset.toggleInsurance;
    const i = t.insuranceList.indexOf(ins);
    if (i === -1) t.insuranceList.push(ins); else t.insuranceList.splice(i, 1);
    renderTherapistProfile();
  }));
  document.getElementById('t-rate-input').addEventListener('change', (e) => { t.rateMin = Number(e.target.value) || 0; });
  document.getElementById('t-ongoing-switch').addEventListener('click', () => { t.acceptingOngoing = !t.acceptingOngoing; renderTherapistProfile(); });
  document.getElementById('t-ondemand-switch').addEventListener('click', () => { t.onDemand = !t.onDemand; renderTherapistProfile(); });
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
