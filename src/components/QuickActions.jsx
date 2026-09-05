import { useState } from 'react'
import { EVENT, VENUE } from '../data/festival.js'
import { downloadIcs } from '../lib/calendar.js'
import { CalendarIcon, CheckIcon, ShareIcon } from './icons.jsx'

/** Termin merken und Seite weitersagen. */
export default function QuickActions() {
  const [shared, setShared] = useState(false)
  const [saved, setSaved] = useState(false)

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
      } catch {
        // Nutzer hat abgebrochen – kein Fehlerfall
      }
      return
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

  const style =
    'inline-flex items-center gap-2 text-[0.82rem] font-bold text-ink-soft underline decoration-ink/20 decoration-2 underline-offset-[6px] transition hover:text-ink hover:decoration-coral-500'

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      <button type="button" onClick={saveDate} className={style}>
        {saved ? (
          <CheckIcon className="size-4 text-coral-500" />
        ) : (
          <CalendarIcon className="size-4" />
        )}
        {saved ? 'Termin gespeichert' : 'Termin merken'}
      </button>

      <button type="button" onClick={share} className={style}>
        {shared ? (
          <CheckIcon className="size-4 text-coral-500" />
        ) : (
          <ShareIcon className="size-4" />
        )}
        {shared ? 'Link kopiert' : 'Teilen'}
      </button>
    </div>
  )
}
