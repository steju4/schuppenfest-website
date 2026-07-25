/**
 * Linien-Icons für Bedienelemente und Fakten.
 * Bewusst ohne Icon-Library, damit kein zusätzliches Bundle geladen wird.
 * Farbe erben alle über `currentColor`.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function TicketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9.5V7.5A1.5 1.5 0 0 1 5 6h14a1.5 1.5 0 0 1 1.5 1.5v2a2.5 2.5 0 0 0 0 5v2A1.5 1.5 0 0 1 19 18H5a1.5 1.5 0 0 1-1.5-1.5v-2a2.5 2.5 0 0 0 0-5Z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function MusicIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="17.5" r="2.75" />
      <circle cx="18" cy="15.5" r="2.75" />
      <path d="M9.75 17.5V6.5l11-2v11" />
    </svg>
  )
}

export function TrainIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.5" width="14" height="12.5" rx="3" />
      <path d="M5 10h14" />
      <path d="M9.5 13.2h0.01M14.5 13.2h0.01" strokeWidth="2.25" />
      <path d="M8 16l-2 4.5M16 16l2 4.5" />
    </svg>
  )
}

export function InfoIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <path d="M12 7.75h0.01" strokeWidth="2.25" />
    </svg>
  )
}

export function ArrowDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14" />
      <path d="M6 13.5 12 19.5l6-6" />
    </svg>
  )
}

export function ExternalIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4.5h5.5V10" />
      <path d="M19.5 4.5 11 13" />
      <path d="M18 14.5v3.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V7.5A1.5 1.5 0 0 1 6 6h3.5" />
    </svg>
  )
}

export function PersonIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.75" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </svg>
  )
}

/** Schuppen – Motiv vom Festflyer */
export function BarnIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 10.5 12 4.5l8.5 6v9.5h-17Z" />
      <path d="M9 20V14h6v6" />
      <path d="M12 4.5V2" />
    </svg>
  )
}

export function PlateIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3v7.5a2.5 2.5 0 0 1-5 0V3" />
      <path d="M4.5 3v18" />
      <path d="M17 21v-8" />
      <path d="M17 13c2.2 0 3.5-1.8 3.5-5S19.2 3 17 3s-3.5 1.8-3.5 5 1.3 5 3.5 5Z" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="M8 14h3" />
    </svg>
  )
}

export function ShareIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v11" />
      <path d="M8 7.5 12 3.5l4 4" />
      <path d="M5.5 12.5V19a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-6.5" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

/** Plattenspieler – für die Party-Programmpunkte */
export function DiscIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.25" />
    </svg>
  )
}
