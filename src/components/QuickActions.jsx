import { useState } from 'react'
import { EVENT, VENUE } from '../data/festival.js'
import { downloadIcs } from '../lib/calendar.js'
import { CalendarIcon, CheckIcon, ShareIcon } from './icons.jsx'

/**
 * Termin merken und Seite weitersagen.
 * `variant="dark"` für den dunklen Hero, `"light"` für helle Abschnitte.
 */
export default function QuickActions({ variant = 'dark' }) {
  const [shared, setShared] = useState(false)
  const [saved, setSaved] = useState(false)

  const dark = variant === 'dark'
  const style = dark
    ? 'border-white/20 text-sand-50 hover:bg-white/10'
    : 'border-ink/12 text-ink hover:bg-sand-100'

  async function share() {
    const data = {
      title: `${EVENT.title} ${EVENT.year}`,
      text: `${EVENT.claim} – ${EVENT.dateRange}, ${VENUE.name}.`,
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
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8rem] font-bold transition active:scale-[0.98] ${style}`}
      >
        {saved ? (
          <CheckIcon className="size-4" />
        ) : (
          <CalendarIcon className="size-4" />
        )}
        {saved ? 'Termin gespeichert' : 'Termin merken'}
      </button>

      <button
        type="button"
        onClick={share}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8rem] font-bold transition active:scale-[0.98] ${style}`}
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
