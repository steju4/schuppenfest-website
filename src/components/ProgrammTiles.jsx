import { DAYS, EVENT, THEMES } from '../data/festival.js'
import useToday from '../lib/useToday.js'
import Tile from './Tile.jsx'
import { ArrowDownIcon, PlateIcon } from './icons.jsx'

/** Ein Festtag als vollflächige Farbkachel. */
function DayTile({ day, isToday, delay }) {
  const theme = THEMES[day.theme]

  return (
    <Tile
      as="section"
      id={day.id}
      delay={delay}
      className={`col-span-2 scroll-mt-4 px-5 py-6 sm:col-span-4 sm:px-8 sm:py-9 ${theme.fill} ${theme.on}`}
    >
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.08]" />

      {/* Riesige Datumsziffer als Fläche im Hintergrund */}
      <span
        aria-hidden
        className="display pointer-events-none absolute -right-3 -top-10 select-none text-[11rem] leading-none text-ink/10 sm:-top-16 sm:text-[16rem]"
      >
        {day.dayNumber}
      </span>

      <div className="relative">
        <p className="label flex flex-wrap items-center gap-x-3 gap-y-1.5 text-ink/60">
          <span>
            {day.weekday} · {day.dateLabel}
          </span>
          {isToday && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-bone">
              <span className="size-1.5 animate-pulse rounded-full bg-bone" />
              Heute
            </span>
          )}
        </p>

        <h3 className="display mt-3 text-[clamp(1.9rem,8.6vw,3.75rem)] uppercase">
          {day.title}
        </h3>
        <p className="mt-2 max-w-sm text-[0.88rem] font-medium leading-snug text-ink/70">
          {day.subtitle}
        </p>

        {/* Programm als Liste mit feinen Trennern */}
        <ol className="mt-6 border-t border-ink/20">
          {day.items.map((item) => {
            const isFood = item.kind === 'food'
            const detail = item.ensemble ?? item.note

            return (
              <li
                key={item.time + item.title}
                className="grid grid-cols-[5.2rem_1fr] gap-x-3 border-b border-ink/20 py-3 sm:grid-cols-[7rem_1fr]"
              >
                <span className="pt-0.5 text-[0.75rem] font-bold text-ink/60">
                  {item.time}
                </span>
                <div>
                  <p
                    className={`text-[0.98rem] leading-snug ${
                      isFood ? 'font-semibold text-ink/80' : 'font-bold'
                    }`}
                  >
                    {isFood && (
                      <PlateIcon className="mr-1.5 inline-block size-3.5 align-[-2px]" />
                    )}
                    {item.title}
                  </p>
                  {detail && (
                    <p className="mt-0.5 text-[0.76rem] text-ink/55">{detail}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ol>

        {day.theme === 'party' && (
          <a
            href="#malle"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-ink px-4 py-2.5 text-[0.8rem] font-bold text-bone transition hover:bg-ink-2 active:scale-[0.98]"
          >
            Alles zur Malle-Party
            <ArrowDownIcon className="animate-nudge size-4" />
          </a>
        )}
      </div>
    </Tile>
  )
}

export default function ProgrammTiles() {
  const today = useToday()

  return (
    <>
      <Tile
        id="programm"
        className="col-span-2 scroll-mt-4 bg-bone-dim px-5 py-5 sm:col-span-4 sm:px-8 sm:py-7"
      >
        <p className="label text-mute">{EVENT.claim}</p>
        <h2 className="display mt-2 text-[2.2rem] uppercase sm:text-5xl">
          Das Programm
        </h2>
      </Tile>

      {DAYS.map((day, index) => (
        <DayTile
          key={day.id}
          day={day}
          delay={index * 60}
          isToday={day.date === today}
        />
      ))}
    </>
  )
}
