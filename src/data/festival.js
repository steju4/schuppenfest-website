/**
 * Zentrale Inhalte zum Menninger Schuppenfest.
 * Alle Texte, Zeiten und Programmpunkte werden ausschliesslich hier gepflegt –
 * die Komponenten lesen nur daraus.
 */

export const EVENT = {
  title: 'Menninger Schuppenfest',
  year: '2026',
  dateRange: '19. – 21. September 2026',
  dateRangeShort: '19.–21.09.2026',
  claim: 'Drei Tage feiern im Menninger Schuppen',
  closing: 'Die Musikkapelle Menningen freut sich auf Euch!',
  /** Beginn und Ende des Fests – Basis für Countdown und „Heute“-Markierung. */
  startsAt: '2026-09-19T20:00:00+02:00',
  endsAt: '2026-09-21T23:59:00+02:00',
  organizer: {
    name: 'Musikkapelle Menningen e.V.',
    url: 'https://www.mk-menningen.de/',
  },
}

export const VENUE = {
  name: 'Menninger Schuppen',
  street: 'Felsenäcker',
  city: '88605 Meßkirch-Menningen',
  region: 'Landkreis Sigmaringen',
  // Felsenäcker, Menningen (Quelle: OpenStreetMap)
  lat: 48.0113,
  lng: 9.1569,
}

/**
 * Programm je Festtag.
 * `theme` steuert die Farbidentität des Tages (siehe THEMES unten).
 *
 * Programmpunkte haben `time`, `title` und optional:
 *  - `kind`: 'music' (Standard) | 'food' | 'party' – steuert Icon und Farbe
 *  - `ensemble`: ausgeschriebener Name der Kapelle
 *  - `note`: einfacher Zusatzhinweis
 */
export const DAYS = [
  {
    id: 'samstag',
    theme: 'party',
    weekday: 'Samstag',
    weekdayShort: 'Sa',
    dayNumber: '19',
    monthLabel: '09.2026',
    dateLabel: '19.09.2026',
    date: '2026-09-19',
    title: 'Malle-Party',
    shortTitle: 'Malle-Party',
    subtitle: 'mit DJ Hasamohr',
    items: [
      {
        time: 'ab 20 Uhr',
        title: 'Einlass & Party-Start',
        kind: 'party',
        note: 'Malle-Party mit DJ Hasamohr',
      },
      {
        time: 'bis 20:30 Uhr',
        title: 'Eintritt frei',
        kind: 'party',
        note: 'danach 7 € Eintritt',
      },
    ],
  },
  {
    id: 'sonntag',
    theme: 'brass',
    weekday: 'Sonntag',
    weekdayShort: 'So',
    dayNumber: '20',
    monthLabel: '09.2026',
    dateLabel: '20.09.2026',
    date: '2026-09-20',
    title: 'Festsonntag',
    shortTitle: 'Festsonntag',
    subtitle: 'Blasmusik und Bewirtung von mittags bis abends',
    items: [
      {
        time: 'ab 11:30 Uhr',
        title: 'Frühschoppen mit dem MV Emmingen',
        ensemble: 'Musikverein Emmingen',
      },
      {
        time: 'mittags',
        title: 'Reichhaltiger Mittagstisch',
        kind: 'food',
        note: 'Warme Küche für den großen Hunger',
      },
      {
        time: 'ab 14:30 Uhr',
        title: 'Unterhaltung mit dem MV Heudorf/Scheer',
        ensemble: 'Musikverein Heudorf/Scheer',
      },
      {
        time: 'nachmittags',
        title: 'Kaffee & Kuchen',
        kind: 'food',
        note: 'Große Auswahl an selbstgebackenen Kuchen',
      },
      {
        time: 'ab 17:30 Uhr',
        title: 'Blasmusik mit der MK Buchheim',
        ensemble: 'Musikkapelle Eintracht Buchheim',
      },
      {
        time: 'abends',
        title: 'Abendessen',
        kind: 'food',
        note: 'Auch am Abend wird durchgehend bewirtet',
      },
    ],
  },
  {
    id: 'montag',
    theme: 'lagoon',
    weekday: 'Montag',
    weekdayShort: 'Mo',
    dayNumber: '21',
    monthLabel: '09.2026',
    dateLabel: '21.09.2026',
    date: '2026-09-21',
    title: 'Feierabendhock',
    shortTitle: 'Feierabend\u00ADhock',
    subtitle: 'Gemütlicher Festausklang',
    items: [
      {
        time: 'ab 18:00 Uhr',
        title: 'Feierabendhock mit der Jugendkapelle Meßkirch',
        ensemble: 'Jugendkapelle Meßkirch',
      },
      {
        time: 'ab 18:00 Uhr',
        title: 'Wurstsalat',
        kind: 'food',
        note: 'Der Klassiker zum Feierabend',
      },
      {
        time: 'ab 19:00 Uhr',
        title: 'Festausklang mit der MK Sentenhart',
        ensemble: 'Musikkapelle Sentenhart',
      },
    ],
  },
]

/**
 * Farbwelt je Festtag – Navy, Rostrot und Waldgrün stammen von den
 * Schildern des gedruckten A4-Flyers.
 */
export const THEMES = {
  party: {
    label: 'Samstagabend',
    panel: 'bg-navy-600',
    panelDeep: 'bg-navy-700',
    gradient: 'from-navy-600 to-navy-700',
    numeral: 'text-navy-400/25',
    accent: 'text-navy-400',
    onPaper: 'text-navy-600',
    dot: 'bg-navy-400',
    dockActive: 'bg-navy-600',
  },
  brass: {
    label: 'Ganztags',
    panel: 'bg-rust-600',
    panelDeep: 'bg-rust-700',
    gradient: 'from-rust-600 to-rust-700',
    numeral: 'text-rust-400/25',
    accent: 'text-rust-400',
    onPaper: 'text-rust-600',
    dot: 'bg-rust-400',
    dockActive: 'bg-rust-600',
  },
  lagoon: {
    label: 'Ausklang',
    panel: 'bg-forest-600',
    panelDeep: 'bg-forest-700',
    gradient: 'from-forest-600 to-forest-700',
    numeral: 'text-forest-400/25',
    accent: 'text-forest-400',
    onPaper: 'text-forest-600',
    dot: 'bg-forest-400',
    dockActive: 'bg-forest-600',
  },
}

/** Der Samstagabend hat einen eigenen Flyer – und einen eigenen Block. */
export const PARTY = {
  id: 'malle',
  title: 'Malle-Party',
  kicker: 'Samstagabend',
  lead: 'Party-Hits, kühle Getränke und Urlaubsstimmung im Menninger Schuppen.',
  doorsOpen: 'ab 20 Uhr',
  admissionFree: 'frei bis 20:30 Uhr',
  admissionPaid: '7 €',
  /** Kurzform für die Ticket-Karte, Wortlaut wie auf dem Flyer. */
  ticket: {
    doorsLabel: 'Einlass ab',
    doorsValue: '20 Uhr',
    freeLabel: 'Eintritt frei',
    freeValue: 'bis 20:30 Uhr',
  },
  partyPass: 'Einlass unter 18 Jahren nur mit Party-Pass',
  dj: {
    name: 'DJ Hasamohr',
    // Schreibweise wie auf Flyer und Logo („usm Ländle“, nicht „vom Ländle“)
    tagline: 'Der Party DJ usm Ländle',
    logo: '/dj-hasamohr.png',
  },
  specials: [
    {
      icon: 'tower',
      tint: 'coral',
      title: '3-Liter-Säulen',
      note: 'Für die ganze Runde',
    },
    {
      icon: 'stein',
      tint: 'gold',
      title: 'Mischen & Bier',
      note: 'Im Masskrug',
    },
    // Non-breaking hyphen: bricht nach „Special“ statt mitten im Wort.
    {
      icon: 'shirt',
      tint: 'teal',
      title: 'Special T‑Shirts',
      note: 'Nur am Fest',
    },
  ],
}

/**
 * Sprungmarken der schwebenden Leiste am unteren Rand,
 * in der Reihenfolge der Seite.
 */
export const NAV = [
  { id: 'samstag', label: 'Sa', theme: 'party' },
  { id: 'sonntag', label: 'So', theme: 'brass' },
  { id: 'montag', label: 'Mo', theme: 'lagoon' },
  { id: 'malle', label: 'Malle', theme: 'party', wide: true },
]

/** Kompakter Infoblock „Gut zu wissen“. */
export const FACTS = [
  {
    icon: 'ticket',
    color: 'coral',
    title: 'Eintritt',
    text: 'Am Samstag ist der Eintritt bis 20:30 Uhr frei, danach kostet er 7 €.',
  },
  {
    icon: 'person',
    color: 'gold',
    title: 'Unter 18 Jahren',
    text: 'Zur Malle-Party am Samstag ist der Einlass unter 18 Jahren nur mit Party-Pass möglich.',
  },
  {
    icon: 'plate',
    color: 'rust',
    title: 'Bewirtung',
    text: 'Am Sonntag gibt es Mittagstisch, Kaffee & Kuchen und Abendessen, am Montag Wurstsalat.',
  },
  {
    icon: 'barn',
    color: 'forest',
    title: 'Bei jedem Wetter',
    text: 'Gefeiert wird im Menninger Schuppen – das Fest findet also auch bei Regen statt.',
  },
]

export const TRAVEL = {
  biberbahn: {
    title: 'Mit der Biberbahn',
    text: 'Am Festsonntag mit der Biberbahn bis zum Halt Menningen-Leitishofen – von dort ist es nur ein kurzer Fußweg zum Schuppen.',
    hint: 'Die Biberbahn fährt 2026 nur an Sonntagen und einzelnen Feiertagen – am Samstag und Montag also nicht.',
    linkLabel: 'Fahrplan auf biberbahn.de',
    linkUrl: 'https://www.biberbahn.de/#fahrplan',
  },
}
