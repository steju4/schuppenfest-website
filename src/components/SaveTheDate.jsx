import { useEffect, useState } from 'react'
import { NEXT, NEXT_DAYS, THEMES, VENUE } from '../data/festival.js'
import QuickActions from './QuickActions.jsx'
import Reveal from './Reveal.jsx'
import { PinIcon } from './icons.jsx'

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

export default function SaveTheDate() {
  const days = useDaysUntil(NEXT.startsAt)

  return (
    <section
      id="save-the-date"
      className="relative overflow-hidden bg-night px-5 py-16 text-sand-50"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night-soft to-night" />
        <div className="animate-drift absolute -left-36 top-10 size-[26rem] rounded-full bg-berry-500/18 blur-[110px]" />
        <div className="animate-drift-slow absolute -right-32 bottom-0 size-[24rem] rounded-full bg-lagoon-500/16 blur-[110px]" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="relative mx-auto max-w-lg">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-sand-200/80">
            Save the Date
          </p>

          <h2 className="mt-6">
            <span className="display block text-[1.6rem] text-sand-50 sm:text-3xl">
              Menninger Schuppenfest
            </span>
            <span
              className="display animate-sheen block bg-gradient-to-r from-sunset-300 via-berry-400 to-sunset-400 bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(4rem, 24vw, 7.5rem)' }}
            >
              {NEXT.year}
            </span>
          </h2>

          <p className="display mx-auto mt-4 w-fit rounded-lg bg-sand-50 px-3.5 py-1.5 text-lg text-night sm:text-xl">
            {NEXT.dateRange}
          </p>

          <p className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-sand-200/80">
            <PinIcon className="size-4 shrink-0 text-lagoon-400" />
            {VENUE.name}, {VENUE.city}
          </p>
        </Reveal>

        {/* Countdown – eine Zahl, mehr braucht ein Save the Date nicht */}
        <Reveal delay={80} className="mt-8 flex items-center justify-center gap-3">
          <span className="display text-[3.2rem] leading-none text-sand-50 sm:text-6xl">
            {days}
          </span>
          <span className="text-left text-[0.72rem] font-bold uppercase leading-tight tracking-[0.16em] text-sand-200/65">
            Tage
            <br />
            bis dahin
          </span>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-sm text-center text-[0.95rem] leading-relaxed text-sand-200/80">
            {NEXT.lead}
          </p>
        </Reveal>

        {/* Die drei Tage – ohne Zeiten, es ist noch kein Programm */}
        <ul className="mt-9 grid gap-3">
          {NEXT_DAYS.map((day, index) => {
            const theme = THEMES[day.theme]
            return (
              <Reveal
                as="li"
                key={day.id}
                delay={index * 80}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="flex items-stretch">
                  {/* Farbige Datumsspalte */}
                  <div
                    className={`flex w-[5.2rem] shrink-0 flex-col items-center justify-center ${theme.headerBg} px-2 py-4 text-white`}
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

                  <div className="flex-1 px-4 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="display text-xl text-sand-50">{day.title}</h3>
                      {day.open ? (
                        <span className="rounded-full border border-sunset-300/40 bg-sunset-500/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-sunset-300">
                          noch geheim
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-[0.85rem] leading-snug text-sand-200/75">
                      {day.weekday} · {day.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={100} className="mt-8 flex justify-center">
          <QuickActions />
        </Reveal>
      </div>
    </section>
  )
}
