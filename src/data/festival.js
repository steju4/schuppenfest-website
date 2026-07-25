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
 * Pro Programmpunkt: `time`, `title` und optional
 *  - `ensemble`: ausgeschriebener Name der Kapelle (mit Noten-Icon)
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
        note: 'Mallorca Party mit DJ Hasamohr',
      },
      {
        time: 'bis 20:30 Uhr',
        title: 'Eintritt frei',
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
    title: 'Frühschoppen',
    shortTitle: 'Frühschoppen',
    subtitle: 'Blasmusik von mittags bis abends',
    items: [
      {
        time: 'ab 11:30 Uhr',
        title: 'Frühschoppen mit dem MV Emmingen',
        ensemble: 'Musikverein Emmingen',
      },
      {
        time: 'ab 14:30 Uhr',
        title: 'Unterhaltung mit dem MV Heudorf/Scheer',
        ensemble: 'Musikverein Heudorf/Scheer',
      },
      {
        time: 'ab 17:30 Uhr',
        title: 'Unterhaltung mit der MK Buchheim',
        ensemble: 'Musikkapelle Eintracht Buchheim',
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
    shortTitle: 'Feierabend',
    subtitle: 'Gemütlicher Festausklang',
    items: [
      {
        time: 'ab 17:30 Uhr',
        title: 'Feierabendhock mit der Jugendkapelle Meßkirch',
        ensemble: 'Jugendkapelle Meßkirch',
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
    accentBg: 'bg-berry-500',
    softBg: 'bg-berry-500/8',
    ring: 'ring-berry-500/20',
    gradient: 'from-sunset-400 to-berry-500',
    dot: 'bg-berry-500',
  },
  brass: {
    label: 'Blasmusik',
    accentText: 'text-brass-600',
    accentBg: 'bg-brass-500',
    softBg: 'bg-brass-400/10',
    ring: 'ring-brass-500/20',
    gradient: 'from-brass-400 to-sunset-500',
    dot: 'bg-brass-500',
  },
  lagoon: {
    label: 'Ausklang',
    accentText: 'text-lagoon-600',
    accentBg: 'bg-lagoon-500',
    softBg: 'bg-lagoon-500/8',
    ring: 'ring-lagoon-500/20',
    gradient: 'from-lagoon-400 to-lagoon-600',
    dot: 'bg-lagoon-500',
  },
}

/** Der Samstagabend hat einen eigenen Flyer – und einen eigenen Block. */
export const PARTY = {
  title: 'Mallorca Party',
  kicker: 'Samstagabend',
  lead: 'Palmen, Party-Hits und Sangria-Stimmung im Menninger Schuppen.',
  doorsOpen: 'ab 20 Uhr',
  admissionFree: 'frei bis 20:30 Uhr',
  admissionPaid: '7 €',
  partyPass: 'Einlass unter 18 Jahren nur mit Party-Pass',
  dj: {
    name: 'DJ Hasamohr',
    // Schreibweise wie auf Flyer und Logo („usm Ländle“, nicht „vom Ländle“)
    tagline: 'Der Party DJ usm Ländle',
    /** Echtes Logo hier ablegen – sonst greift die SVG-Sperrmarke. */
    logo: '/dj-hasamohr.png',
  },
  specials: [
    { icon: 'tower', title: '3-Liter-Säulen', note: 'Für die ganze Runde' },
    { icon: 'stein', title: 'Mischen & Bier', note: 'Im Masskrug' },
    // Non-breaking hyphen: bricht nach „Special“ statt mitten im Wort.
    { icon: 'shirt', title: 'Special T‑Shirts', note: 'Nur am Fest' },
  ],
}

export const TRAVEL = {
  biberbahn: {
    title: 'Mit der Biberbahn',
    text: 'Am Festsonntag mit der Biberbahn bis zum Halt Menningen-Leitishofen – von dort ist es nur ein kurzer Fußweg zum Schuppen.',
    hint: 'Die Biberbahn fährt 2026 nur an Sonntagen und einzelnen Feiertagen – am Samstag und Montag also nicht.',
    linkLabel: 'Fahrplan auf biberbahn.de',
    linkUrl: 'https://www.biberbahn.de/#fahrplan',
  },
}
