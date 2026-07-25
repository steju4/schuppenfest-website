import { useState } from 'react'
import { PARTY } from '../data/festival.js'

/**
 * Nachgebaute Sperrmarke von DJ Hasamohr: Kopfhörerbügel mit orangen
 * Hörmuscheln, „DJ“ im Bügel, darunter der Name und der Claim.
 *
 * Sie ist eine SVG-Annäherung an das Original (Farben und Aufbau stimmen,
 * die Schrift ist Anton statt der Original-Poster-Type). Sobald die echte
 * Logodatei unter `public/dj-hasamohr.png` liegt, wird automatisch sie
 * angezeigt – ohne Code-Änderung. Anderer Name oder Format? Dann nur
 * `PARTY.dj.logo` in src/data/festival.js anpassen.
 */
function LogoMark({ light }) {
  const dark = light ? '#f4efe6' : '#26443c'

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 240 132"
        className="h-auto w-full max-w-[15rem]"
        role="img"
        aria-label={`${PARTY.dj.name} – ${PARTY.dj.tagline}`}
      >
        {/* Kopfhörerbügel */}
        <path
          d="M92 48V40a28 28 0 0 1 56 0v8"
          fill="none"
          stroke={dark}
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Hörmuscheln */}
        <rect x="84" y="38" width="16" height="26" rx="8" fill="#f0a93f" />
        <rect x="140" y="38" width="16" height="26" rx="8" fill="#f0a93f" />

        {/* DJ – sitzt im Bügel */}
        <text
          x="120"
          y="62"
          textAnchor="middle"
          fill={dark}
          style={{ font: '38px Anton, sans-serif', letterSpacing: '0.02em' }}
        >
          DJ
        </text>

        {/* HASAMOHR */}
        <text
          x="120"
          y="102"
          textAnchor="middle"
          fill="#f0a93f"
          style={{ font: '42px Anton, sans-serif', letterSpacing: '0.005em' }}
        >
          HASAMOHR
        </text>

        {/* Claim */}
        <text
          x="120"
          y="122"
          textAnchor="middle"
          fill={dark}
          style={{
            font: '600 11.5px Outfit, sans-serif',
            letterSpacing: '0.09em',
          }}
        >
          DER PARTY DJ USM LÄNDLE
        </text>
      </svg>
    </div>
  )
}

export default function DjLogo({ light = false }) {
  const [hasFile, setHasFile] = useState(true)

  if (hasFile) {
    return (
      <img
        src={PARTY.dj.logo}
        alt={`Logo ${PARTY.dj.name}`}
        width="760"
        height="553"
        loading="lazy"
        onError={() => setHasFile(false)}
        className="mx-auto h-auto w-full max-w-[15rem]"
      />
    )
  }

  return <LogoMark light={light} />
}
