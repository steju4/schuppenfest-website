import { useState } from 'react'
import { NEXT, VENUE } from '../data/festival.js'
import { downloadIcs } from '../lib/calendar.js'
import { CalendarIcon, CheckIcon, ShareIcon } from './icons.jsx'

/**
 * Termin 2027 merken und Seite weitersagen.
 * `variant="dark"` für dunkle Abschnitte, `"light"` für helle.
 * `solidFirst` hebt „Termin merken“ als Hauptaktion hervor.
 */
export default function QuickActions({ variant = 'dark', solidFirst = false }) {
  const [shared, setShared] = useState(false)
  const [saved, setSaved] = useState(false)

  const dark = variant === 'dark'
  const style = dark
    ? 'border-white/20 text-sand-50 hover:bg-white/10'
    : 'border-ink/12 text-ink hover:bg-sand-100'
  const primary = solidFirst
    ? 'border-transparent bg-sand-50 text-night hover:bg-white'
    : style

  async function share() {
    const data = {
      title: `Menninger Schuppenfest ${NEXT.year}`,
      text: `Save the Date: Menninger Schuppenfest ${NEXT.dateRange}, ${VENUE.name}.`,
      url: window.location.href,
    }

    // Auf dem Handy das native Teilen-Menü, sonst Link in die Zwischenablage
    if (navigator.share) {
      try {
        await navigator.share(data)
        return
      } catch {
        // Nutzer hat abgebrochen – kein Fehlerfall
        return
      }
    }

    try {
      await navigator.clipboard.writeText(data.url)
      setShared(true)
      setTimeout(() => setShared(false), 2200)
    } catch {
      // Zwischenablage nicht verfügbar (z. B. ohne HTTPS) – still ignorieren
    }
  }

  function saveDate() {
    downloadIcs()
    setSaved(true)
    setTimeout(() => setSaved(false), 2200)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={saveDate}
        className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-5 py-3 text-[0.85rem] font-bold transition active:scale-[0.98] ${primary}`}
      >
        {/* Lichtreflex, der alle paar Sekunden über die Hauptaktion wandert */}
        {solidFirst ? (
          <span
            aria-hidden
            className="animate-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-berry-500/25 to-transparent"
          />
        ) : null}
        {saved ? (
          <CheckIcon className="relative size-4" />
        ) : (
          <CalendarIcon className="relative size-4" />
        )}
        <span className="relative">
          {saved ? 'Termin gespeichert' : 'Termin merken'}
        </span>
      </button>

      <button
        type="button"
        onClick={share}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[0.85rem] font-bold transition active:scale-[0.98] ${style}`}
      >
        {shared ? (
          <CheckIcon className="size-4" />
        ) : (
          <ShareIcon className="size-4" />
        )}
        {shared ? 'Link kopiert' : 'Teilen'}
      </button>
    </div>
  )
}
