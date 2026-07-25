import { useState } from 'react'
import { DJ } from '../data/festival.js'
import { HeadphonesIcon } from './icons.jsx'

/**
 * Zeigt das DJ-Logo aus `public/` an.
 *
 * Solange die Datei (siehe DJ.logo in src/data/festival.js) nicht vorhanden
 * ist, wird automatisch ein gestalteter Platzhalter gerendert – die Seite
 * sieht also auch ohne Logo fertig aus. Sobald du das Logo unter
 * `public/dj-hasamohr.png` ablegst, erscheint es ohne Code-Änderung.
 */
export default function DjLogo() {
  const [hasLogo, setHasLogo] = useState(true)

  if (hasLogo) {
    return (
      <img
        src={DJ.logo}
        alt={`Logo ${DJ.name}`}
        width="320"
        height="160"
        loading="lazy"
        onError={() => setHasLogo(false)}
        className="mx-auto h-24 w-auto object-contain sm:h-28"
      />
    )
  }

  return (
    <div className="mx-auto flex h-24 w-full max-w-[16rem] flex-col items-center justify-center rounded-2xl border border-dashed border-berry-400/40 bg-white/60 px-4 sm:h-28">
      <HeadphonesIcon className="size-6 text-berry-500" />
      <p className="mt-1.5 text-lg font-extrabold uppercase leading-none tracking-tight text-ink">
        DJ Hasamohr
      </p>
      <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
        {DJ.tagline}
      </p>
    </div>
  )
}
