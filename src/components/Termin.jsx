import { useEffect, useState } from 'react'
import { NEXT, NEXT_DAYS, THEMES } from '../data/festival.js'
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

/** Die drei Tage 2027 – Datum und Titel, mehr steht noch nicht fest. */
export default function Termin() {
  const days = useDaysUntil(NEXT.startsAt)

  return (
    <section
      id="termin"
      className="relative overflow-hidden bg-night px-5 py-14 text-sand-50"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night-soft to-night" />
        <div className="animate-drift absolute -left-36 top-10 size-[26rem] rounded-full bg-berry-500/16 blur-[110px]" />
        <div className="animate-drift-slow absolute -right-32 bottom-0 size-[24rem] rounded-full bg-lagoon-500/16 blur-[110px]" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <h2 className="display text-[1.9rem] text-sand-50 sm:text-4xl">
            Die drei Tage
          </h2>
        </Reveal>

        <ul className="mt-6 grid gap-2.5">
          {NEXT_DAYS.map((day, index) => (
            <Reveal
              as="li"
              key={day.id}
              delay={index * 80}
              className="flex items-stretch overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              {/* Farbige Datumsspalte */}
              <div
                className={`flex w-[5.2rem] shrink-0 flex-col items-center justify-center ${THEMES[day.theme]} px-2 py-4 text-white`}
              >
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/75">
                  {day.weekdayShort}
                </span>
                <span className="display text-[2rem] leading-none">
                  {day.dayNumber}
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/75">
                  Sept.
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center px-4 py-4">
                <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-sand-200/55">
                  {day.weekday}
                </span>
                <h3 className="display mt-0.5 text-xl text-sand-50">{day.title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <p className="mt-7 text-[0.95rem] leading-relaxed text-sand-200/80">
            {NEXT.lead}
          </p>

          {/* Countdown – eine Zeile, mehr braucht ein Save the Date nicht */}
          <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sand-200/55">
            noch {days} Tage
          </p>
        </Reveal>
      </div>
    </section>
  )
}
