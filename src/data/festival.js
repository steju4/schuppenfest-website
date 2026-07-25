/**
 * Zentrale Inhalte zum Menninger Schuppenfest.
 * Alle Texte, Zeiten und Programmpunkte werden ausschliesslich hier gepflegt –
 * die Komponenten lesen nur daraus.
 */

export const EVENT = {
  title: 'Menninger Schuppenfest',
  subtitle: 'Mallorca Party',
  dateRange: '19. – 21. September 2026',
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

/** Kurzinfos für Hero und Sticky-Bar – das Wichtigste auf einen Blick. */
export const HIGHLIGHT = {
  day: 'Samstag',
  date: '19.09.2026',
  doorsOpen: 'ab 20 Uhr',
  admissionFree: 'frei bis 20:30 Uhr',
  admissionPaid: '7 €',
}

export const DJ = {
  name: 'DJ Hasamohr',
  tagline: 'Der Party DJ vom Ländle',
  /** Logo in public/ ablegen – die Komponente zeigt sonst den Platzhalter. */
  logo: '/dj-hasamohr.png',
}

export const SPECIALS = [
  { icon: 'tower', title: '3-Liter-Säulen', note: 'Für die ganze Runde' },
  { icon: 'stein', title: 'Mischen & Bier', note: 'Im Masskrug' },
  // Non-breaking hyphen: bricht sauber nach „Special“ statt mitten im Wort.
  { icon: 'shirt', title: 'Special T‑Shirts', note: 'Nur am Fest' },
]

export const NOTICES = {
  partyPass: 'Einlass unter 18 Jahren nur mit Party-Pass.',
}

/**
 * Programm je Festtag.
 * Pro Programmpunkt: `time`, `title` und optional
 *  - `ensemble`: ausgeschriebener Name der Kapelle (wird mit Noten-Icon gezeigt)
 *  - `note`: einfacher Zusatzhinweis ohne Icon
 */
export const DAYS = [
  {
    id: 'samstag',
    tab: 'Sa 19.09.',
    weekday: 'Samstag',
    date: '19.09.2026',
    headline: 'Mallorca Party',
    lead: 'Mit DJ Hasamohr im Menninger Schuppen.',
    items: [
      {
        time: 'ab 20 Uhr',
        title: 'Einlass',
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
    tab: 'So 20.09.',
    weekday: 'Sonntag',
    date: '20.09.2026',
    headline: 'Frühschoppen & Blasmusik',
    lead: 'Drei Kapellen von mittags bis abends.',
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
    tab: 'Mo 21.09.',
    weekday: 'Montag',
    date: '21.09.2026',
    headline: 'Feierabendhock & Festausklang',
    lead: 'Gemütlicher Abschluss zum Feierabend.',
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

export const TRAVEL = {
  biberbahn: {
    title: 'Mit der Biberbahn',
    text: 'Am Festsonntag mit der Biberbahn bis zum Halt Menningen-Leitishofen – von dort ist es nur ein kurzer Fußweg zum Schuppen.',
    hint: 'Die Biberbahn fährt 2026 nur an Sonntagen und einzelnen Feiertagen – am Samstag und Montag also nicht.',
    linkLabel: 'Fahrplan auf biberbahn.de',
    linkUrl: 'https://www.biberbahn.de/#fahrplan',
  },
}
