import { useEffect, useState } from 'react'
import { EVENT, NAV, THEMES } from '../data/festival.js'
import { PinIcon } from './icons.jsx'

/**
 * Quick-Access-Leiste: erscheint nach dem Hero und bietet Sprungmarken zu den
 * Abschnitten der Seite. Der Abschnitt, der gerade im Blick ist, wird
 * hervorgehoben – die Malle-Party ist dabei ein eigener Punkt, weil sie ein
 * eigener Abschnitt ist und sonst nirgends angezeigt würde.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [progress, setProgress] = useState(0)

  // Einblenden, sobald der Hero oben aus dem Viewport gescrollt ist
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

  // Aktiven Abschnitt mitverfolgen
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
      { rootMargin: '-25% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lesefortschritt als feiner Balken unter der Leiste
  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-sand-50/92 backdrop-blur-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        aria-label="Schnellzugriff"
        className="mx-auto flex max-w-lg items-center gap-2 px-3 py-2 sm:px-4"
      >
        <a
          href="#top"
          tabIndex={visible ? 0 : -1}
          aria-label="Nach oben"
          className="mr-auto hidden min-w-0 leading-tight sm:block"
        >
          <span className="display block truncate text-[0.95rem] text-ink">
            Schuppenfest
          </span>
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
            {EVENT.dateRangeShort}
          </span>
        </a>

        <ul className="mx-auto flex items-center gap-1 sm:mx-0">
          {NAV.map((entry) => {
            const isActive = activeId === entry.id
            const theme = THEMES[entry.theme]
            return (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  tabIndex={visible ? 0 : -1}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex h-9 items-center justify-center rounded-full text-[0.76rem] font-bold transition ${
                    entry.wide ? 'px-3.5' : 'w-9'
                  } ${
                    isActive
                      ? theme.navActive
                      : 'bg-ink/6 text-ink-soft hover:bg-ink/12'
                  }`}
                >
                  {entry.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#anfahrt"
          tabIndex={visible ? 0 : -1}
          aria-label="Zur Anfahrt"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sand-50 transition hover:bg-ink-soft"
        >
          <PinIcon className="size-4" />
        </a>
      </nav>

      {/* Lesefortschritt */}
      <div
        aria-hidden
        className="h-0.5 origin-left bg-gradient-to-r from-sunset-400 to-berry-500 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
