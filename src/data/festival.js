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
 * Farbwelt je Festtag. Jede Kachel eines Tages trägt diese Farbe voll,
 * darum sind die Werte hier ganze Flächen und keine Tönungen.
 */
export const THEMES = {
  party: {
    label: 'Samstagabend',
    fill: 'bg-punch-500',
    fillSoft: 'bg-punch-400',
    on: 'text-ink',
    text: 'text-punch-500',
    ring: 'ring-punch-500',
    dot: 'bg-punch-500',
  },
  brass: {
    label: 'Ganztags',
    fill: 'bg-sun-500',
    fillSoft: 'bg-sun-400',
    on: 'text-ink',
    text: 'text-sun-600',
    ring: 'ring-sun-500',
    dot: 'bg-sun-500',
  },
  lagoon: {
    label: 'Ausklang',
    fill: 'bg-jade-500',
    fillSoft: 'bg-jade-400',
    on: 'text-ink',
    text: 'text-jade-600',
    ring: 'ring-jade-500',
    dot: 'bg-jade-500',
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
      tint: 'punch',
      title: '3-Liter-Säulen',
      note: 'Für die ganze Runde',
    },
    {
      icon: 'stein',
      tint: 'sun',
      title: 'Mischen & Bier',
      note: 'Im Masskrug',
    },
    // Non-breaking hyphen: bricht nach „Special“ statt mitten im Wort.
    {
      icon: 'shirt',
      tint: 'jade',
      title: 'Special T‑Shirts',
      note: 'Nur am Fest',
    },
  ],
}

/** Sprungmarken der schwebenden Leiste, in der Reihenfolge der Seite. */
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
    color: 'punch',
    title: 'Eintritt',
    text: 'Am Samstag ist der Eintritt bis 20:30 Uhr frei, danach kostet er 7 €.',
  },
  {
    icon: 'person',
    color: 'sky',
    title: 'Unter 18 Jahren',
    text: 'Zur Malle-Party am Samstag ist der Einlass unter 18 Jahren nur mit Party-Pass möglich.',
  },
  {
    icon: 'plate',
    color: 'sun',
    title: 'Bewirtung',
    text: 'Am Sonntag gibt es Mittagstisch, Kaffee & Kuchen und Abendessen, am Montag Wurstsalat.',
  },
  {
    icon: 'barn',
    color: 'jade',
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
