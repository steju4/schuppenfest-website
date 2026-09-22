import { NEXT, ORGANIZER, VENUE } from '../data/festival.js'

/** Sonderzeichen nach RFC 5545 maskieren. */
function escape(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

/**
 * Zeilen auf 75 Oktette umbrechen – sonst lehnen manche Kalender-Apps
 * die Datei ab. Fortsetzungszeilen beginnen mit einem Leerzeichen.
 */
function fold(line) {
  const chunks = []
  let rest = line
  while (rest.length > 73) {
    chunks.push(rest.slice(0, 73))
    rest = rest.slice(73)
  }
  chunks.push(rest)
  return chunks.join('\r\n ')
}

/**
 * Ganztägiger Termin über die drei Festtage 2027.
 *
 * Bewusst ohne Uhrzeiten: es gibt noch kein Programm, und ein erfundenes
 * Ende im Kalender der Gäste wäre schlechter als keins.
 */
export function buildIcs() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Musikkapelle Menningen e.V.//Schuppenfest 2027//DE',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:schuppenfest-${NEXT.year}@mk-menningen.de`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    `DTSTART;VALUE=DATE:${NEXT.icsStart}`,
    `DTEND;VALUE=DATE:${NEXT.icsEnd}`,
    fold(`SUMMARY:${escape(`Menninger Schuppenfest ${NEXT.year}`)}`),
    fold(`LOCATION:${escape(`${VENUE.name}, ${VENUE.street}, ${VENUE.city}`)}`),
    fold(
      `DESCRIPTION:${escape(
        `${NEXT.dateRange}\n\nSamstag: Partyabend\nSonntag: Festsonntag mit Blasmusik und Bewirtung\nMontag: Feierabendhock\n\nDas genaue Programm folgt.\n\nVeranstalter: ${ORGANIZER.name}`,
      )}`,
    ),
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.join('\r\n')
}

/** Löst den Download der .ics-Datei aus. */
export function downloadIcs() {
  const blob = new Blob([buildIcs()], {
    type: 'text/calendar;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `menninger-schuppenfest-${NEXT.year}.ics`
  document.body.appendChild(link)
  link.click()
  link.remove()
  // Aufräumen, sobald der Browser den Download übernommen hat
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
