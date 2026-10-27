/* ============================================================
   SINGLE SOURCE OF TRUTH for event content.
   Edit this file to change dates, schedule, fees, rules, links.
   ============================================================ */
(function (MI) {
  MI.event = {
    title: 'Mission: Impossible',
    tagline: 'Make the impossible work',
    date: '2026-10-09',          // YYYY-MM-DD
    tz: '+05:30',                // IST
    start: '09:30',              // event window (24h)
    end: '13:30',
    dateLabel: '9 October 2026',
    dateLong: '9th October 2026',
    timeLabel: '9:30 AM – 1:30 PM',
    venue: 'SSN College of Engineering',
    squadLabel: '3–4',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe2w_my1qFhgysbs3-5dtREk-wR5czb2x2A1uGgfeG68eLWfg/viewform?usp=header',
    contact: { name: 'Harini Narasimhan', phone: '+91 80720 01636', tel: '+918072001636' },

    fees: [ // per head
      { label: 'CIS members', amount: '₹25' },
      { label: 'Non-CIS', amount: '₹35' }
    ],
    prizes: [
      { rank: 1, label: '1st place', amount: '₹1,000' },
      { rank: 2, label: '2nd place', amount: '₹750' },
      { rank: 3, label: '3rd place', amount: '₹500' }
    ],

    /* Running order. type: setup | prep | pitch | build | demo
       round: 1 | 2 | null (setup). short = letter shown on narrow setup blocks. */
    schedule: [
      { id: 'arrival',  label: 'Arrival',  short: 'A', type: 'setup', round: null, s: '09:30', e: '09:40', desc: '' },
      { id: 'briefing', label: 'Briefing', short: 'B', type: 'setup', round: null, s: '09:40', e: '09:50', desc: '' },
      { id: 'prep',     label: 'Prep',     type: 'prep',  round: 1, s: '09:50', e: '10:50', desc: 'Ideate and build your pitch' },
      { id: 'pitches',  label: 'Pitches',  type: 'pitch', round: 1, s: '10:50', e: '11:35', desc: 'About 3 min per squad plus questions from other teams' },
      { id: 'build',    label: 'Build',    type: 'build', round: 2, s: '11:35', e: '13:00', desc: 'Turn the pitch into a working prototype' },
      { id: 'demos',    label: 'Demos',    type: 'demo',  round: 2, s: '13:00', e: '13:20', desc: 'Final demos to the judges' },
      { id: 'debrief',  label: 'Debrief',  short: 'D', type: 'setup', round: null, s: '13:20', e: '13:30', desc: '' }
    ],

    leaks: [
      { label: 'Round 1 · Scenario leak 01', text: 'How would you pitch Light Mode UI to a vampire?', note: 'Best pitch gets an exclusive bypass code.' },
      { label: 'Round 1 · Scenario leak 02', text: 'Pitching Neuralink Brain-Computer Interfaces to Indian parents who blame your headache on your 5G phone.', note: 'Best pitch gets an exclusive bypass code.' }
    ],

    rules: [
      { n: 1, t: 'Core Principles & Operational Mandate', r: [
        ['1.1', 'Total Plausible Deniability', 'The Impossible Missions Force (IMF) operates beyond the scope of conventional diplomacy and jurisdiction. IMF agents possess no diplomatic immunity, legal defense, or official recognition. Disavowal is immediate, automatic, and absolute upon operational compromise.'],
        ['1.2', 'The Doctrine of Minimal Footprint', 'Operations must leave zero forensic, legal, or digital footprint. Infiltration, extraction, and asset recovery must occur without attribution to the IMF or its sponsoring government.'],
        ['1.3', 'Absolute Mission Supremacy', 'The Impossible Missions Force (IMF) operates beyond the scope of conventional diplomacy and jurisdiction. IMF agents possess no diplomatic immunity, legal defense, or official recognition. Disavowal is immediate, automatic, and absolute upon operational compromise.']
      ] },
      { n: 2, t: 'Briefing & Command Structure', r: [
        ['2.1', 'Briefing Transmission and Verification', 'Mission briefings are delivered via secure, encrypted dead-drops disguised as everyday physical items (e.g., optical discs, phonograph records, modified smart displays). Access requires retinal, vocal, or cryptographic verification.'],
        ['2.2', 'The Five-Second Self-Destruct Rule', 'Every transmission hardware module must self-destruct within exactly five (5) seconds of playback completion. Destruction must completely incinerate internal memory boards and physical storage via pyrotechnic or thermite degradation.'],
        ['2.3', 'Operational Hierarchy', 'The Secretary: Authorizes mission scope, resources, and operational deployment. Field Team Leader (Lead Agent): Possesses absolute operational discretion on the ground. Field Support: Specialists in systems penetration, logistics, and munitions operate under the direct authority of the Lead Agent.']
      ] },
      { n: 3, t: 'Disguise, Subterfuge & Infiltration', r: [
        ['3.1', 'Hyper-Realistic Mask Fabrication', '3D-scanned latex/silicone mask fabrication must only be deployed after full ocular, facial, and behavioral profile modeling of the target. Voice modification patches must be calibrated using a minimum of 60 seconds of uncompressed audio samples from the subject before field activation.'],
        ['3.2', 'Persona Preservation', 'Agents assuming a target’s identity must match physical posture, vocabulary, gait, and vital baselines. Breaking character in proximity to hostile assets without a secondary diversion plan constitutes grounds for immediate abort.'],
        ['3.3', 'Environmental Infiltration', 'When standard entry points are inaccessible, ingress through HVAC shafts, high-altitude low-opening (HALO) parachute insertions, or exterior structural rappelling via pneumatic/electro-adhesive gloves is authorized.']
      ] },
      { n: 4, t: 'Technical & Physical Security Countermeasures', r: [
        ['4.1', 'Vault & Server Clean-Room Standards', 'When infiltrating ultra-secure facilities (e.g., sound-, thermal-, and pressure-sensitive vaults): Temperature Regulation: The operative must maintain body surface temperature within 1°C of ambient room settings. Pressure & Acoustic Limits: Operatives must not contact the floor plane. Floor pressure variances exceeding 0.1 grams or acoustic spikes above ambient decibel floors result in automated facility lockdown. Suspension Protocol: Rappelling wires must utilize high-tensile braided synthetic cord anchored to load-bearing structural joints.'],
        ['4.2', 'Digital Intrusions & Air-Gap Exploitation', 'Systems isolated from external networks must be physically patched via dedicated local transceivers, spoofed terminal keypads, or direct optical fiber bridging.'],
        ['4.3', 'Hardware Scuttling', 'Any tool, terminal, mask printer, or drone left behind must be sanitized remotely or detonated via integrated micro-charges.']
      ] },
      { n: 5, t: 'Combat, Extraction & Hostage Engagement', r: [
        ['5.1', 'Proportional Engagement', 'Lethal force is authorized only to protect life or halt mass-casualty events. Civilian avoidance is mandatory.'],
        ['5.2', 'Ghost Protocol', 'If the IMF is disavowed, formal command terminates. Operatives fall back to hidden caches and continue the mission independently.'],
        ['5.3', 'Rogue Operatives', 'Traitors, syndicate brokers, and black-market arms dealers are marked for immediate capture or neutralization.']
      ] },
      { n: 6, t: 'Mission Closure', r: [
        ['6.1', 'Safehouse Sanitization', '72-hour operational limit per site. Complete cryptographic data purge and chemical trace wipe required.'],
        ['6.2', 'Asset Securement', 'Recovered weapons, keys, and cores must be locked in biometric cases and delivered directly to verified handlers.'],
        ['6.3', 'Radio Silence', 'Absolute non-contact protocol remains active until authorized by central IMF recovery teams.']
      ] }
    ]
  };
})((window.MI = window.MI || {}));
