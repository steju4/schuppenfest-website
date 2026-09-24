/**
 * Zentrale Inhalte der Seite.
 * Das Fest 2026 ist vorbei – die Seite sagt Danke und nennt den Termin 2027.
 * Bewusst knapp: kein Programm, keine Zeiten, keine Preise.
 */

/** Kanonische Adresse – steht so auch in robots.txt, sitemap.xml und index.html. */
export const SITE = {
  url: 'https://schuppenfest.vercel.app',
}

export const ORGANIZER = {
  name: 'Musikkapelle Menningen e.V.',
  url: 'https://www.mk-menningen.de/',
}

export const VENUE = {
  name: 'Menninger Schuppen',
  street: 'Felsenäcker',
  city: '88605 Meßkirch-Menningen',
}

/** Der Dank fürs Fest 2026. */
export const THANKS = {
  year: '2026',
  dateRange: '19. – 21. September 2026',
  headline: 'Danke',
  chip: 'Danke für 2026',
  lead: 'Drei Tage Menninger Schuppenfest sind vorbei – und sie waren großartig.',
  text: 'Danke an alle Gäste, Helfer und Musiker. Ihr habt das Fest gemacht.',
}

/** Das nächste Fest. */
export const NEXT = {
  year: '2027',
  dateRange: '18. – 20. September 2027',
  dateRangeShort: '18.–20.09.2027',
  /** Ohne Jahr – im Hero steht das Jahr schon gross darüber. */
  dateRangeNoYear: '18. – 20. September',
  /** Beginn für den Countdown: Samstagabend, wie gewohnt. */
  startsAt: '2027-09-18T20:00:00+02:00',
  /** Ganztägiger Kalendereintrag, DTEND ist exklusiv. */
  icsStart: '20270918',
  icsEnd: '20270921',
  lead: 'Gleicher Ort, gleiches Wochenende im September. Das Programm folgt – der Termin steht.',
  closing: 'Bis September 2027 im Menninger Schuppen.',
}

/** Die drei Tage 2027 – nur der Titel, mehr ist ein Save the Date nicht. */
export const NEXT_DAYS = [
  {
    id: 'samstag',
    theme: 'party',
    weekday: 'Samstag',
    weekdayShort: 'Sa',
    dayNumber: '18',
    title: 'Partyabend',
  },
  {
    id: 'sonntag',
    theme: 'brass',
    weekday: 'Sonntag',
    weekdayShort: 'So',
    dayNumber: '19',
    title: 'Festsonntag',
  },
  {
    id: 'montag',
    theme: 'lagoon',
    weekday: 'Montag',
    weekdayShort: 'Mo',
    dayNumber: '20',
    title: 'Feierabend\u00ADhock',
  },
]

/** Farbwelt je Tag. */
export const THEMES = {
  party: 'bg-gradient-to-br from-berry-600 to-berry-700',
  brass: 'bg-gradient-to-br from-brass-600 to-brass-700',
  lagoon: 'bg-gradient-to-br from-lagoon-600 to-lagoon-700',
}
