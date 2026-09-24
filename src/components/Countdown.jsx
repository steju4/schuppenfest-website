import { useEffect, useState } from 'react'
import { NEXT } from '../data/festival.js'
import Reveal from './Reveal.jsx'

/** Volle Tage bis zum Festbeginn – nie negativ. */
function daysUntil(iso) {
  const diff = new Date(iso).getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / 86_400_000))
}

function useDaysUntil(iso) {
  const [days, setDays] = useState(() => daysUntil(iso))

  useEffect(() => {
    // Stündlich reicht: die Zahl ändert sich nur einmal am Tag
    const id = setInterval(() => setDays(daysUntil(iso)), 60 * 60 * 1000)
    return () => clearInterval(id)
  }, [iso])

  return days
}

/** Schmales Band: der Satz zum Programm und die Tage bis zum Fest. */
export default function Countdown() {
  const days = useDaysUntil(NEXT.startsAt)

  return (
    <section className="relative overflow-hidden bg-night-soft px-5 py-12 text-sand-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift-slow absolute -right-24 -top-24 size-[20rem] rounded-full bg-lagoon-500/18 blur-[90px]" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      <Reveal className="relative mx-auto flex max-w-lg items-center gap-5">
        <p className="shrink-0 text-center">
          <span className="display block text-[3.4rem] leading-none text-sand-50 sm:text-6xl">
            {days}
          </span>
          <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sand-200/60">
            Tage
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
