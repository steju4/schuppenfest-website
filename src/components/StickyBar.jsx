import { useEffect, useState } from 'react'
import { HIGHLIGHT, VENUE } from '../data/festival.js'
import { PinIcon } from './icons.jsx'

/**
 * Quick-Access-Leiste mit Datum + Ort.
 * Erscheint, sobald der Hero nach oben aus dem Viewport gescrollt ist.
 */
export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-sand-50/90 backdrop-blur-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold leading-tight text-ink">
            {HIGHLIGHT.day}, {HIGHLIGHT.date}
          </p>
          <p className="truncate text-xs leading-tight text-ink-soft">
            {VENUE.name} · {VENUE.street}
          </p>
        </div>
        <a
          href="#anfahrt"
          tabIndex={visible ? 0 : -1}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-berry-500 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-berry-600"
        >
          <PinIcon className="size-3.5" />
          Anfahrt
        </a>
      </div>
    </div>
  )
}
