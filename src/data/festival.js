/**
 * Zentrale Inhalte der Seite.
 * Das Fest 2026 ist vorbei – die Seite dankt dafür und kündigt 2027 an.
 * Alle Texte werden ausschliesslich hier gepflegt.
 */

export const ORGANIZER = {
  name: 'Musikkapelle Menningen e.V.',
  url: 'https://www.mk-menningen.de/',
}

export const VENUE = {
  name: 'Menninger Schuppen',
  street: 'Felsenäcker',
  city: '88605 Meßkirch-Menningen',
}

/** Das Fest, das gerade vorbei ist. */
export const PAST = {
  year: '2026',
  dateRange: '19. – 21. September 2026',
  headline: 'Danke',
  lead: 'Drei Tage Menninger Schuppenfest sind vorbei – und sie waren großartig. Danke an alle, die dabei waren.',
}

/**
 * Wem wir danken. Bewusst konkret statt einem allgemeinen Dankeschön.
 */
export const THANKS = [
  {
    icon: 'people',
    color: 'berry',
    title: 'Euch',
    text: 'Für drei volle Tage, gute Laune und die Stimmung, die ein Fest erst zu einem Fest macht.',
  },
  {
    icon: 'music',
    color: 'brass',
    title: 'Den Kapellen',
    text: 'Für Frühschoppen, Unterhaltung und Festausklang – ohne euch wäre es im Schuppen still geblieben.',
  },
  {
    icon: 'disc',
    color: 'sunset',
    title: 'DJ Hasamohr',
    text: 'Für einen Samstagabend, an dem der Schuppen bis in die Nacht gebebt hat.',
  },
  {
    icon: 'heart',
    color: 'lagoon',
    title: 'Allen Helfern',
    text: 'Fürs Aufbauen, Ausschenken, Kochen, Backen, Spülen und Aufräumen. Ihr habt das getragen.',
  },
]

/** Was 2026 gelaufen ist – kurzer Rückblick. */
export const RECAP = [
  { theme: 'party', day: 'Sa', title: 'Malle-Party', note: 'mit DJ Hasamohr' },
  { theme: 'brass', day: 'So', title: 'Festsonntag', note: 'drei Kapellen, Mittagstisch, Kuchen' },
  { theme: 'lagoon', day: 'Mo', title: 'Feierabend\u00ADhock', note: 'Jugendkapelle und Festausklang' },
]

/** Das nächste Fest. */
export const NEXT = {
  year: '2027',
  dateRange: '18. – 20. September 2027',
  dateRangeShort: '18.–20.09.2027',
  /** Beginn für den Countdown: Samstagabend, wie gewohnt. */
  startsAt: '2027-09-18T20:00:00+02:00',
  /** Ganztägiger Kalendereintrag, DTEND ist exklusiv. */
  icsStart: '20270918',
  icsEnd: '20270921',
  closing: 'Bis September 2027 im Menninger Schuppen.',
  lead: 'Gleicher Ort, gleiches Wochenende im September, gleiche drei Tage. Das Programm kommt später – der Termin steht jetzt schon.',
}

/**
 * Die drei Tage 2027. Bewusst ohne Zeiten: es ist ein Save the Date,
 * kein Programm. `open` markiert, was noch nicht verraten wird.
 */
export const NEXT_DAYS = [
  {
    id: 'samstag',
    theme: 'party',
    weekday: 'Samstag',
    weekdayShort: 'Sa',
    dayNumber: '18',
    title: 'Partyabend',
    note: 'Was genau, verraten wir noch nicht.',
    open: true,
  },
  {
    id: 'sonntag',
    theme: 'brass',
    weekday: 'Sonntag',
    weekdayShort: 'So',
    dayNumber: '19',
    title: 'Festsonntag',
    note: 'Blasmusik und Bewirtung, wie man ihn kennt.',
  },
  {
    id: 'montag',
    theme: 'lagoon',
    weekday: 'Montag',
    weekdayShort: 'Mo',
    dayNumber: '20',
    title: 'Feierabendhock',
    note: 'Gemütlicher Ausklang zum Feierabend.',
  },
]

/** Farbwelt je Tag – unverändert aus der Festseite übernommen. */
export const THEMES = {
  party: {
    accentText: 'text-berry-500',
    chip: 'border-berry-400/35 bg-berry-500/14',
    chipLabel: 'text-berry-400',
    headerBg: 'bg-gradient-to-br from-berry-600 to-berry-700',
    tile: 'bg-berry-500',
  },
  brass: {
    accentText: 'text-brass-600',
    chip: 'border-brass-400/35 bg-brass-400/14',
    chipLabel: 'text-brass-400',
    headerBg: 'bg-gradient-to-br from-brass-600 to-brass-700',
    tile: 'bg-brass-500',
  },
  lagoon: {
    accentText: 'text-lagoon-600',
    chip: 'border-lagoon-400/35 bg-lagoon-500/14',
    chipLabel: 'text-lagoon-400',
    headerBg: 'bg-gradient-to-br from-lagoon-600 to-lagoon-700',
    tile: 'bg-lagoon-500',
  },
}
