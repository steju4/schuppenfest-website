import { useEffect, useState } from 'react'
import { NAV, THEMES } from '../data/festival.js'
import { PinIcon } from './icons.jsx'

/**
 * Schwebende Leiste am unteren Rand: auf dem Handy in Daumenreichweite,
 * statt oben am Rand zu kleben. Zeigt, in welchem Abschnitt man gerade ist –
 * die Malle-Party ist dabei ein eigener Punkt.
 */
export default function Dock() {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState(null)

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

  useEffect(() => {
    const sections = NAV.map((entry) => document.getElementById(entry.id)).filter(
      Boolean,
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (inView) setActiveId(inView.target.id)
      },
      { rootMargin: '-20% 0px -35% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <nav
        aria-label="Schnellzugriff"
        className="flex items-center gap-1 rounded-full bg-ink/95 p-1.5 shadow-2xl shadow-ink/30 ring-1 ring-white/10 backdrop-blur-md"
      >
        {NAV.map((entry) => {
          const isActive = activeId === entry.id
          const theme = THEMES[entry.theme]
          return (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              tabIndex={visible ? 0 : -1}
              aria-current={isActive ? 'true' : undefined}
              className={`flex h-10 items-center justify-center rounded-full text-[0.78rem] font-bold transition ${
                entry.wide ? 'px-4' : 'w-10'
              } ${
                isActive
                  ? `${theme.dockActive} text-paper`
                  : 'text-paper/60 hover:bg-white/10 hover:text-paper'
              }`}
            >
              {entry.label}
            </a>
          )
        })}

        <span aria-hidden className="mx-0.5 h-6 w-px bg-white/15" />

        <a
          href="#anfahrt"
          tabIndex={visible ? 0 : -1}
          aria-label="Zur Anfahrt"
          className={`flex size-10 items-center justify-center rounded-full transition ${
            activeId === 'anfahrt'
              ? 'bg-coral-500 text-white'
              : 'text-paper/60 hover:bg-white/10 hover:text-paper'
          }`}
        >
          <PinIcon className="size-4.5" />
        </a>
      </nav>
    </div>
  )
}
