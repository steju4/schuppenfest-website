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
  /** Beginn des Fests – Basis für den Countdown (Samstag, 20 Uhr). */
  startsAt: '2026-09-19T20:00:00+02:00',
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
    title: 'Mallorca Party',
    shortTitle: 'Mallorca Party',
    subtitle: 'mit DJ Hasamohr',
    items: [
      {
        time: 'ab 20 Uhr',
        title: 'Einlass & Party-Start',
        kind: 'party',
        note: 'Mallorca Party mit DJ Hasamohr',
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
        title: 'Unterhaltung mit der MK Buchheim',
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
    title: 'Feierabendhock',
    shortTitle: 'Feierabend\u00ADhock',
    subtitle: 'Gemütlicher Festausklang',
    items: [
      {
        time: 'ab 17:30 Uhr',
        title: 'Feierabendhock mit der Jugendkapelle Meßkirch',
        ensemble: 'Jugendkapelle Meßkirch',
      },
      {
        time: 'ab 17:30 Uhr',
        title: 'Wurstsalat',
        kind: 'food',
        note: 'Der Klassiker zum Feierabend',
      },
      {
        time: 'ab 18:30 Uhr',
        title: 'Festausklang mit der MK Sentenhart',
        ensemble: 'Musikkapelle Sentenhart',
      },
    ],
  },
]

/** Farb- und Stilklassen je Tages-Theme. */
export const THEMES = {
  party: {
    label: 'Party',
    accentText: 'text-berry-500',
    softBg: 'bg-berry-500/8',
    dot: 'bg-berry-500',
    // Kachel auf dunklem Grund (Hero, Footer)
    chip: 'border-berry-400/35 bg-berry-500/14 hover:border-berry-400/60 hover:bg-berry-500/22',
    chipLabel: 'text-berry-400',
    navActive: 'bg-berry-500 text-white',
  },
  brass: {
    label: 'Blasmusik',
    accentText: 'text-brass-600',
    softBg: 'bg-brass-400/12',
    dot: 'bg-brass-500',
    chip: 'border-brass-400/35 bg-brass-400/14 hover:border-brass-400/60 hover:bg-brass-400/22',
    chipLabel: 'text-brass-400',
    navActive: 'bg-brass-500 text-white',
  },
  lagoon: {
    label: 'Ausklang',
    accentText: 'text-lagoon-600',
    softBg: 'bg-lagoon-500/8',
    dot: 'bg-lagoon-500',
    chip: 'border-lagoon-400/35 bg-lagoon-500/14 hover:border-lagoon-400/60 hover:bg-lagoon-500/22',
    chipLabel: 'text-lagoon-400',
    navActive: 'bg-lagoon-500 text-white',
  },
}

/** Der Samstagabend hat einen eigenen Flyer – und einen eigenen Block. */
export const PARTY = {
  title: 'Mallorca Party',
  kicker: 'Samstagabend',
  lead: 'Party-Hits, kühle Getränke und Urlaubsstimmung im Menninger Schuppen.',
  doorsOpen: 'ab 20 Uhr',
  admissionFree: 'frei bis 20:30 Uhr',
  admissionPaid: '7 €',
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
      tint: 'sunset',
      title: '3-Liter-Säulen',
      note: 'Für die ganze Runde',
    },
    {
      icon: 'stein',
      tint: 'brass',
      title: 'Mischen & Bier',
      note: 'Im Masskrug',
    },
    // Non-breaking hyphen: bricht nach „Special“ statt mitten im Wort.
    {
      icon: 'shirt',
      tint: 'lagoon',
      title: 'Special T‑Shirts',
      note: 'Nur am Fest',
    },
  ],
}

/** Kompakter Infoblock „Gut zu wissen“. */
export const FACTS = [
  {
    icon: 'ticket',
    color: 'berry',
    title: 'Eintritt',
    text: 'Am Samstag ist der Eintritt bis 20:30 Uhr frei, danach kostet er 7 €.',
  },
  {
    icon: 'person',
    color: 'sunset',
    title: 'Unter 18 Jahren',
    text: 'Zur Mallorca Party am Samstag ist der Einlass unter 18 Jahren nur mit Party-Pass möglich.',
  },
  {
    icon: 'plate',
    color: 'brass',
    title: 'Bewirtung',
    text: 'Am Sonntag gibt es Mittagstisch, Kaffee & Kuchen und Abendessen, am Montag Wurstsalat.',
  },
  {
    icon: 'barn',
    color: 'lagoon',
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
