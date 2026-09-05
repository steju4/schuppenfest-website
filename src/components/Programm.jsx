import { DAYS, EVENT, THEMES } from '../data/festival.js'
import useParallax from '../lib/useParallax.js'
import useToday from '../lib/useToday.js'
import Reveal from './Reveal.jsx'
import { ArrowDownIcon, DiscIcon, PlateIcon } from './icons.jsx'

/**
 * Ein Festtag als vollflächige Farbtafel.
 * Die grosse Datumsziffer liegt als Grafik im Hintergrund und wandert
 * beim Scrollen leicht mit.
 */
function DayPanel({ day, isToday }) {
  const theme = THEMES[day.theme]
  const [ref, offset] = useParallax(48)

  return (
    <section
      id={day.id}
      ref={ref}
      className={`relative overflow-hidden px-6 py-16 text-paper sm:py-20 ${theme.panel}`}
    >
      {/* Riesige Datumsziffer als Hintergrundgrafik */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 select-none"
        style={{ transform: `translateY(calc(-50% + ${offset}px))` }}
      >
        <span className={`serif text-[17rem] leading-none sm:text-[22rem] ${theme.numeral}`}>
          {day.dayNumber}
        </span>
      </div>
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-paper/60">
            <span>
              {day.weekday} · {day.dateLabel}
            </span>
            {isToday && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-ink">
                <span className="size-1.5 animate-pulse rounded-full bg-coral-500" />
                Heute
              </span>
            )}
          </p>

          <h3 className="serif mt-3 text-[2.8rem] italic sm:text-6xl">
            {day.title}
          </h3>
          <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-paper/75">
            {day.subtitle}
          </p>
        </Reveal>

        {/* Programm als gesetzte Liste mit Haarlinien */}
        <Reveal delay={90} as="ol" className="mt-8 border-t border-paper/20">
          {day.items.map((item) => {
            const isFood = item.kind === 'food'
            const Icon = isFood ? PlateIcon : DiscIcon
            const detail = item.ensemble ?? item.note

            return (
              <li
                key={item.time + item.title}
                className="grid grid-cols-[5.5rem_1fr] gap-x-4 border-b border-paper/20 py-4 sm:grid-cols-[7rem_1fr]"
              >
                <span
                  className={`pt-0.5 text-[0.78rem] font-semibold ${
                    isFood ? 'text-paper/50' : 'text-paper/85'
                  }`}
                >
                  {item.time}
                </span>
                <div>
                  <p
                    className={`text-[1.02rem] leading-snug ${
                      isFood ? 'font-medium text-paper/85' : 'font-bold text-paper'
                    }`}
                  >
                    {item.title}
                  </p>
                  {detail && (
                    <p className="mt-1 flex items-start gap-1.5 text-[0.8rem] text-paper/55">
                      {isFood && <Icon className="mt-px size-3.5 shrink-0" />}
                      {detail}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </Reveal>

        {/* Wegweiser zum Party-Abschnitt */}
        {day.theme === 'party' && (
          <Reveal delay={60}>
            <a
              href="#malle"
              className="mt-7 flex items-center gap-4 rounded-2xl bg-paper px-5 py-4 text-ink transition hover:bg-white active:scale-[0.99]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                <DiscIcon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-extrabold leading-tight">
                  Alles zur Malle-Party
                </span>
                <span className="mt-0.5 block text-[0.78rem] text-ink-soft">
                  DJ Hasamohr, Specials und Eintritt
                </span>
              </span>
              <ArrowDownIcon className="animate-nudge size-5 shrink-0 text-coral-500" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default function Programm() {
  const today = useToday()

  return (
    <div id="programm">
      {/* Überschrift auf Papier, danach die drei Farbtafeln */}
      <div className="relative overflow-hidden bg-paper px-6 py-16 sm:py-20">
        <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
        <Reveal className="relative mx-auto max-w-xl">
          <p className="eyebrow text-ink-faint">{EVENT.claim}</p>
          <h2 className="serif mt-3 text-[3rem] text-ink sm:text-[4rem]">
            Drei Tage,
            <span className="block italic text-coral-500">drei Abende.</span>
          </h2>
        </Reveal>
      </div>

      {DAYS.map((day) => (
        <DayPanel key={day.id} day={day} isToday={day.date === today} />
      ))}
    </div>
  )
}
