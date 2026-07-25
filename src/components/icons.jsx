/**
 * Inline-SVG-Icons – bewusst ohne Icon-Library, damit kein zusätzliches
 * Bundle geladen wird. Alle Icons erben Farbe über `currentColor`.
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
      <path d="M3.5 9.5V7.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2a2.5 2.5 0 0 0 0 5v2a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-2a2.5 2.5 0 0 0 0-5Z" />
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
      <path d="M9.75 17.5V6.5l11 -2v11" />
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

export function HeadphonesIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13.5" width="4.5" height="7" rx="2.25" />
      <rect x="17" y="13.5" width="4.5" height="7" rx="2.25" />
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

/* --- Specials --------------------------------------------------------- */

/** 3-Liter-Säule: Bierturm mit Zapfhahn und Standfuß */
export function TowerIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V15H9Z" />
      <path d="M9 8h6" />
      <path d="M15 12h1.5a1 1 0 0 1 1 1v1.25" />
      <path d="M11 15v4.5M13 15v4.5" />
      <path d="M8.5 19.5h7" />
    </svg>
  )
}

/** Masskrug mit Trinkhalm – steht für „Mischen & Bier im Masskrug“ */
export function SteinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 7h8v12a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 19Z" />
      <path d="M6 10.5h8" />
      <path d="M14 9.5h2.5A1.5 1.5 0 0 1 18 11v3.5a1.5 1.5 0 0 1-1.5 1.5H14" />
      <path d="M10.5 7 13.5 3" />
    </svg>
  )
}

/** T-Shirt */
export function ShirtIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5 5 5.5 3.5 10l3 1v9.5h11V11l3-1L19 5.5l-4-2" />
      <path d="M9 3.5a3 3 0 0 0 6 0" />
    </svg>
  )
}

export const specialIcons = {
  tower: TowerIcon,
  stein: SteinIcon,
  shirt: ShirtIcon,
}
