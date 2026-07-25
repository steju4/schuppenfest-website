/**
 * Illustrationen für die Specials – bewusst flächig und farbig gezeichnet,
 * damit sie neben den feinen Linien-Icons als Hingucker funktionieren.
 * Alles Inline-SVG: keine Bilddateien, kein zusätzlicher Request.
 */

const DARK = '#2b2138'

function BeerGradient({ id }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#f0a01a" />
      <stop offset="0.4" stopColor="#ffce55" />
      <stop offset="1" stopColor="#dd8709" />
    </linearGradient>
  )
}

/** 3-Liter-Säule: Bierturm mit Zapfhahn auf schwerem Standfuss */
export function TowerArt({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <BeerGradient id="towerBeer" />
      </defs>

      {/* Deckel */}
      <rect x="18.5" y="3" width="27" height="6" rx="3" fill={DARK} />

      {/* Glaszylinder */}
      <rect x="21" y="9" width="22" height="31" rx="2.5" fill="#fff8ea" />
      {/* Bier */}
      <path
        d="M21 18h22v19.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 21 37.5Z"
        fill="url(#towerBeer)"
      />
      {/* Schaum */}
      <rect x="21" y="11.5" width="22" height="6.5" fill="#fffdf8" />
      <path
        d="M21 18c1.9 0 1.9-2 3.7-2s1.9 2 3.7 2 1.9-2 3.7-2 1.8 2 3.6 2 1.9-2 3.7-2 1.8 2 3.6 2v-1.5H21Z"
        fill="#fffdf8"
      />
      {/* Glanzlicht */}
      <rect
        x="24.5"
        y="21"
        width="3.2"
        height="15"
        rx="1.6"
        fill="#fff"
        opacity="0.55"
      />
      <rect
        x="21"
        y="9"
        width="22"
        height="31"
        rx="2.5"
        fill="none"
        stroke={DARK}
        strokeWidth="2.6"
      />

      {/* Standfuss */}
      <path d="M19.5 40h25l-4.5 11h-16Z" fill={DARK} />
      <rect x="20" y="51" width="24" height="6" rx="2.5" fill={DARK} />

      {/* Zapfhahn */}
      <path
        d="M44 43.5h4.5a2 2 0 0 1 2 2V49"
        fill="none"
        stroke={DARK}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="48.5" cy="39.5" r="2.6" fill={DARK} />
    </svg>
  )
}

/** Masskrug mit Trinkhalm – „Mischen & Bier im Masskrug“ */
export function SteinArt({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <BeerGradient id="steinBeer" />
      </defs>

      {/* Trinkhalm */}
      <path
        d="M31 22 45 8"
        stroke="#de1f68"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      {/* Limettenscheibe */}
      <circle cx="47.5" cy="7" r="5" fill="#6cb33f" />
      <circle cx="47.5" cy="7" r="3" fill="#b6e08a" />

      {/* Griff */}
      <path
        d="M40 29h5a7.5 7.5 0 0 1 0 15h-5"
        fill="none"
        stroke={DARK}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />

      {/* Krug */}
      <path
        d="M14 22h26v29a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4Z"
        fill="url(#steinBeer)"
      />
      {/* Schaumkrone */}
      <path
        d="M14 22v-3.2c0-2.3 2-4 4.2-3.5.8-2.3 3.4-3.4 5.5-2.2 1.4-1.9 4.1-2 5.7-.3 2.4-.6 4.8.9 5.2 3.3 2.4.3 4 2.6 3.6 5l-.2.9Z"
        fill="#fffdf8"
      />
      <rect x="14" y="21" width="26" height="3" fill="#fffdf8" />
      {/* Glanzlicht */}
      <rect
        x="18.5"
        y="27"
        width="3.2"
        height="20"
        rx="1.6"
        fill="#fff"
        opacity="0.5"
      />
      <path
        d="M14 22h26v29a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4Z"
        fill="none"
        stroke={DARK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** T-Shirt mit Sonnenuntergangs-Print – wie auf dem Flyer */
export function ShirtArt({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="shirtSun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="0.5" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#e42a6f" />
        </linearGradient>
        <clipPath id="shirtPrint">
          <circle cx="32" cy="34" r="12" />
        </clipPath>
      </defs>

      {/* Shirt */}
      <path
        d="M24 8 12 14 8 26.5l7.5 2.5V55a2.5 2.5 0 0 0 2.5 2.5h28A2.5 2.5 0 0 0 48.5 55V29l7.5-2.5L52 14 40 8l-8 4.5Z"
        fill="#fdf6ea"
        stroke={DARK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* Kragen */}
      <path
        d="M24 8c0 4.4 3.6 8 8 8s8-3.6 8-8"
        fill="none"
        stroke={DARK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      {/* Print: Retro-Sonne über dem Meer, mit Palme */}
      <g clipPath="url(#shirtPrint)">
        <circle cx="32" cy="34" r="12" fill="url(#shirtSun)" />
        {/* Streifen quer durch die Sonne */}
        <rect x="20" y="34.5" width="24" height="1.5" fill="#fdf6ea" />
        <rect x="20" y="37.5" width="24" height="1.8" fill="#fdf6ea" />
        {/* Meer */}
        <rect x="20" y="41" width="24" height="6" fill="#1b8ba3" />
        {/* Palme */}
        <path
          d="M25.5 45c-.4-4.6.3-7.8 1.8-10.2"
          stroke="#22403a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M27.3 34.8c-2.3-1.4-4.6-.9-6.1 1M27.3 34.8c2.6-.9 4.8.2 5.8 2.3M27.3 34.8c-.8-2.3.2-4.3 2.3-5.2"
          stroke="#22403a"
          strokeWidth="1.9"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

export const specialArt = {
  tower: TowerArt,
  stein: SteinArt,
  shirt: ShirtArt,
}
