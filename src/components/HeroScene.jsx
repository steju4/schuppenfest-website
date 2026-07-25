/**
 * Titelbild als Inline-SVG: Sonnenuntergang über dem Menninger Schuppen,
 * flankiert von Palmen – das Fest und die Mallorca Party in einem Bild.
 * Kein Bild-Asset, kein zusätzlicher Request, skaliert verlustfrei.
 */
export default function HeroScene({ className }) {
  return (
    <svg viewBox="0 0 400 250" className={className} aria-hidden>
      <defs>
        <radialGradient id="heroSun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffe3b0" stopOpacity="0.98" />
          <stop offset="0.45" stopColor="#ff9a4d" stopOpacity="0.9" />
          <stop offset="0.8" stopColor="#de1f68" stopOpacity="0.55" />
          <stop offset="1" stopColor="#de1f68" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroHorizon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb27a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffcf9c" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffb27a" stopOpacity="0" />
        </linearGradient>
        <clipPath id="heroSunClip">
          <circle cx="200" cy="150" r="82" />
        </clipPath>

        {/* Palme, wird zweimal verwendet (rechts gespiegelt) */}
        <g id="heroPalm">
          <path
            d="M100 208c-4-24-8-40-15-57"
            fill="none"
            stroke="#160e26"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <g
            fill="none"
            stroke="#160e26"
            strokeWidth="4.4"
            strokeLinecap="round"
          >
            <path d="M85 151c-13-11-27-11-37-2" />
            <path d="M85 151c-11-17-25-23-39-21" />
            <path d="M85 151c2-18-3-33-13-43" />
            <path d="M85 151c12-16 26-20 38-16" />
            <path d="M85 151c14-8 28-6 38 2" />
          </g>
        </g>
      </defs>

      {/* Sonne */}
      <circle cx="200" cy="150" r="82" fill="url(#heroSun)" />

      {/* Retro-Streifen in der Sonne */}
      <g clipPath="url(#heroSunClip)" fill="#160e26" opacity="0.4">
        <rect x="110" y="152" width="180" height="4" />
        <rect x="110" y="164" width="180" height="6" />
        <rect x="110" y="179" width="180" height="8" />
        <rect x="110" y="197" width="180" height="11" />
      </g>

      {/* Horizont */}
      <rect x="40" y="207" width="320" height="2.5" fill="url(#heroHorizon)" />

      {/* Schuppen mit erleuchtetem Tor */}
      <path
        d="M166 208v-36l34-23 34 23v36Z"
        fill="#160e26"
        stroke="#160e26"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M191 208v-19h18v19Z" fill="#ffc978" opacity="0.92" />

      {/* Palmen */}
      <use href="#heroPalm" />
      <use href="#heroPalm" transform="translate(400 0) scale(-1 1)" />
    </svg>
  )
}
