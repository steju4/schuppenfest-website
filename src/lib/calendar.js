import { DAYS, EVENT, VENUE } from '../data/festival.js'

/** Sonderzeichen nach RFC 5545 maskieren. */
function escape(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
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

/** Programm als Fliesstext für die Termin-Beschreibung. */
function programmeText() {
  return DAYS.map((day) => {
    const items = day.items
      .map((item) => `  ${item.time}: ${item.title}`)
      .join('\n')
    return `${day.weekday}, ${day.dateLabel} – ${day.title}\n${items}`
  }).join('\n\n')
}

/**
 * Ganztägiger Termin über alle drei Festtage.
 *
 * Bewusst ohne Uhrzeiten: für Sonntag und Montag ist kein Ende bekannt,
 * und ein erfundenes Ende im Kalender der Gäste wäre schlechter als keins.
 * DTEND ist bei ganztägigen Terminen exklusiv, daher der 22.09.
 */
export function buildIcs() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Musikkapelle Menningen e.V.//Schuppenfest 2026//DE',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:schuppenfest-2026@mk-menningen.de',
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    'DTSTART;VALUE=DATE:20260919',
    'DTEND;VALUE=DATE:20260922',
    fold(`SUMMARY:${escape(`${EVENT.title} ${EVENT.year}`)}`),
    fold(
      `LOCATION:${escape(`${VENUE.name}, ${VENUE.street}, ${VENUE.city}`)}`,
    ),
    fold(
      `DESCRIPTION:${escape(
        `${EVENT.claim}\n\n${programmeText()}\n\nVeranstalter: ${EVENT.organizer.name}`,
      )}`,
    ),
    `GEO:${VENUE.lat};${VENUE.lng}`,
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
  link.download = 'menninger-schuppenfest-2026.ics'
  document.body.appendChild(link)
  link.click()
  link.remove()
  // Aufräumen, sobald der Browser den Download übernommen hat
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
