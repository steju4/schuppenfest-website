/**
 * Logo von DJ Hasamohr – lag zum Fest 2026 im public-Ordner.
 * Fehlt die Datei, verschwindet das Bild einfach (kein Platzhalter).
 */
import { useState } from 'react'

const SRC = '/dj-hasamohr.png'

export default function DjLogo() {
  const [missing, setMissing] = useState(false)
  if (missing) return null

  return (
    <img
      src={SRC}
      alt="Logo DJ Hasamohr"
      width="760"
      height="553"
      loading="lazy"
      onError={() => setMissing(true)}
      className="mx-auto h-auto w-full max-w-[13rem]"
    />
  )
}
