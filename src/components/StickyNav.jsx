import { useEffect, useState } from 'react'
import { DAYS, EVENT } from '../data/festival.js'
import { PinIcon } from './icons.jsx'

/**
 * Quick-Access-Leiste: erscheint nach dem Hero und bietet Sprungmarken zu
 * den drei Festtagen sowie zur Anfahrt. Der Tag, der gerade im Blick ist,
 * wird hervorgehoben.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [activeDay, setActiveDay] = useState(null)

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

  // Aktiven Tag mitverfolgen. Der Mallorca-Block gehört zum Samstag.
  useEffect(() => {
    const sectionDay = new Map()
    DAYS.forEach((day) => sectionDay.set(day.id, day.id))
    sectionDay.set('mallorca', 'samstag')

    const sections = [...sectionDay.keys()]
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (inView) setActiveDay(sectionDay.get(inView.target.id))
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
        className="mx-auto flex max-w-lg items-center gap-2 px-4 py-2"
      >
        <a
          href="#top"
          tabIndex={visible ? 0 : -1}
          className="mr-auto min-w-0 leading-tight"
        >
          <span className="display block truncate text-[0.95rem] text-ink">
            {EVENT.title.replace('Menninger ', '')}
          </span>
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
            {EVENT.dateRangeShort}
          </span>
        </a>

        <ul className="flex items-center gap-1">
          {DAYS.map((day) => {
            const isActive = activeDay === day.id
            return (
              <li key={day.id}>
                <a
                  href={`#${day.id}`}
                  tabIndex={visible ? 0 : -1}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex size-9 items-center justify-center rounded-full text-[0.78rem] font-bold transition ${
                    isActive
                      ? 'bg-ink text-sand-50'
                      : 'bg-ink/6 text-ink-soft hover:bg-ink/12'
                  }`}
                >
                  {day.weekdayShort}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#anfahrt"
          tabIndex={visible ? 0 : -1}
          aria-label="Zur Anfahrt"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-berry-500 text-white transition hover:bg-berry-600"
        >
          <PinIcon className="size-4" />
        </a>
      </nav>
    </div>
  )
}
