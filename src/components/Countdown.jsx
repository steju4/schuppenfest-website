import { useEffect, useRef, useState } from 'react'
import { NEXT } from '../data/festival.js'
import Reveal from './Reveal.jsx'

/**
 * Kalendertage bis zum ersten Festtag – so, wie man sie im Kalender abzählt,
 * und nie negativ.
 *
 * Gerechnet wird von Mitternacht zu Mitternacht: Ein Vergleich mit einer
 * Uhrzeit im Ziel würde angefangene Tage mitzählen und läge einen Tag zu
 * hoch. `Math.round` fängt die Zeitumstellung ab, bei der ein Tag 23 oder
 * 25 Stunden hat.
 */
function daysUntil(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  const target = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.max(0, Math.round((target - today) / 86_400_000))
}

function useDaysUntil(isoDate) {
  const [days, setDays] = useState(() => daysUntil(isoDate))

  useEffect(() => {
    // Stündlich reicht: die Zahl ändert sich nur einmal am Tag
    const id = setInterval(() => setDays(daysUntil(isoDate)), 60 * 60 * 1000)
    return () => clearInterval(id)
  }, [isoDate])

  return days
}

/**
 * Zählt beim Hereinscrollen einmal auf den Zielwert hoch.
 * Bei `prefers-reduced-motion` steht die Zahl sofort da.
 */
function useCountUp(target, ref) {
  const [value, setValue] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || done.current) {
      setValue(target)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return
        done.current = true
        observer.disconnect()

        const duration = 1100
        const start = performance.now()
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration)
          // sanft auslaufend, damit die letzten Zahlen lesbar sind
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(target * eased))
          if (t < 1) frame = requestAnimationFrame(step)
        }
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, ref])

  return value
}

/** Schmales Band: Tage bis zum Fest und der Satz zum Programm. */
export default function Countdown() {
  const days = useDaysUntil(NEXT.startsOn)
  const ref = useRef(null)
  const shown = useCountUp(days, ref)

  return (
    <section className="relative overflow-hidden bg-night-soft px-5 py-12 text-sand-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift-slow absolute -right-24 -top-24 size-[20rem] rounded-full bg-lagoon-500/18 blur-[90px]" />
        <div className="animate-drift absolute -left-28 -bottom-10 size-[18rem] rounded-full bg-berry-500/14 blur-[90px]" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      <Reveal className="relative mx-auto flex max-w-lg items-center gap-5">
        <p ref={ref} className="shrink-0 text-center">
          {/* tabular-nums: die Breite springt beim Hochzählen nicht */}
          <span className="display block text-[3.4rem] leading-none tabular-nums text-sand-50 sm:text-6xl">
            {shown}
          </span>
          <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sand-200/60">
            {days === 1 ? 'Tag' : 'Tage'}
          </span>
        </p>
        <span aria-hidden className="h-16 w-px shrink-0 bg-sand-200/20" />
        <p className="text-[0.95rem] leading-relaxed text-sand-200/85">
          {NEXT.lead}
        </p>
      </Reveal>
    </section>
  )
}
