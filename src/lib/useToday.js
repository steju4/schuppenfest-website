import { useEffect, useState } from 'react'

/** Lokales Datum als ISO-Tag (YYYY-MM-DD) – nicht UTC, sonst kippt es abends. */
function isoToday() {
  const now = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

/**
 * Gibt den heutigen Tag zurück und aktualisiert sich minütlich, damit eine
 * über Mitternacht geöffnete Seite während des Fests weiterspringt.
 */
export default function useToday() {
  const [today, setToday] = useState(isoToday)

  useEffect(() => {
    const id = setInterval(() => setToday(isoToday()), 60_000)
    return () => clearInterval(id)
  }, [])

  return today
}
