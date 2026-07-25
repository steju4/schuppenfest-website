import { useRef, useState } from 'react'
import { DAYS } from '../data/festival.js'
import { MusicIcon } from './icons.jsx'

export default function Programm() {
  const [activeId, setActiveId] = useState(DAYS[0].id)
  const tabRefs = useRef({})

  const activeIndex = DAYS.findIndex((day) => day.id === activeId)
  const activeDay = DAYS[activeIndex]

  /** Pfeiltasten-Navigation zwischen den Tagen. */
  function handleKeyDown(event) {
    const offset =
      event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!offset) return

    event.preventDefault()
    const next = DAYS[(activeIndex + offset + DAYS.length) % DAYS.length]
    setActiveId(next.id)
    tabRefs.current[next.id]?.focus()
  }

  return (
    <section id="programm" className="px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lagoon-600">
          Drei Tage Programm
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Zeitplan
        </h2>

        {/* Tag-Auswahl */}
        <div
          role="tablist"
          aria-label="Festtage"
          onKeyDown={handleKeyDown}
          className="mt-6 grid grid-cols-3 gap-1 rounded-2xl bg-white/70 p-1 ring-1 ring-ink/5"
        >
          {DAYS.map((day) => {
            const isActive = day.id === activeId
            return (
              <button
                key={day.id}
                ref={(node) => {
                  tabRefs.current[day.id] = node
                }}
                role="tab"
                type="button"
                id={`tab-${day.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${day.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(day.id)}
                className={`rounded-xl px-2 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? 'bg-ink text-sand-50 shadow-sm'
                    : 'text-ink-soft hover:bg-sand-100'
                }`}
              >
                {day.tab}
              </button>
            )
          })}
        </div>

        {/* Programm des gewählten Tages */}
        <div
          role="tabpanel"
          id={`panel-${activeDay.id}`}
          aria-labelledby={`tab-${activeDay.id}`}
          tabIndex={0}
          className="card mt-4 p-5 sm:p-6"
        >
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-berry-500">
            {activeDay.weekday}, {activeDay.date}
          </p>
          <h3 className="mt-1.5 text-xl font-extrabold leading-tight tracking-tight text-ink">
            {activeDay.headline}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{activeDay.lead}</p>

          <ol className="mt-5 space-y-0">
            {activeDay.items.map((item, index) => {
              const isLast = index === activeDay.items.length - 1
              return (
                <li key={item.time + item.title} className="flex gap-3.5">
                  {/* Zeitachse */}
                  <div
                    aria-hidden
                    className="flex flex-col items-center pt-1.5"
                  >
                    <span className="size-2.5 shrink-0 rounded-full bg-gradient-to-br from-sunset-400 to-berry-500" />
                    {!isLast && (
                      <span className="w-px flex-1 bg-gradient-to-b from-berry-400/40 to-berry-400/10" />
                    )}
                  </div>

                  <div className={isLast ? 'pb-0' : 'pb-5'}>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-berry-500">
                      {item.time}
                    </p>
                    <p className="mt-0.5 text-[0.95rem] font-bold leading-snug text-ink">
                      {item.title}
                    </p>
                    {item.ensemble && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-soft">
                        <MusicIcon className="size-3.5 shrink-0 text-lagoon-500" />
                        {item.ensemble}
                      </p>
                    )}
                    {item.note && (
                      <p className="mt-1 text-xs text-ink-soft">{item.note}</p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
