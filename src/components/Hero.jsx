import { DAYS, EVENT, THEMES, VENUE } from '../data/festival.js'
import useToday from '../lib/useToday.js'
import FestStatus from './FestStatus.jsx'
import QuickActions from './QuickActions.jsx'
import { ArrowDownIcon, BarnIcon, PinIcon } from './icons.jsx'

export default function Hero() {
  const today = useToday()

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-sand-50"
    >
      {/* Ruhiger Farbverlauf statt Illustration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-soft via-night to-night" />
        <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-berry-500/18 blur-[110px]" />
        <div className="absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-lagoon-500/12 blur-[110px]" />
        <div className="grain absolute inset-0 opacity-[0.05]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-sand-50" />
      </div>

      {/* Veranstalter */}
      <div className="relative mx-auto w-full max-w-lg px-5 pt-7">
        <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand-200/70">
          <BarnIcon className="size-4 text-sunset-300" />
          {EVENT.organizer.name}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-10">
        {/* Titel */}
        <h1>
          <span className="display block text-[2.9rem] text-sand-50 sm:text-6xl">
            Menninger
          </span>
          <span className="display block bg-gradient-to-r from-sunset-300 to-berry-400 bg-clip-text text-[3.3rem] text-transparent sm:text-7xl">
            Schuppenfest
          </span>
        </h1>

        {/* Datum und Ort */}
        <p className="display mt-5 w-fit rounded-lg bg-sand-50 px-3 py-1.5 text-lg text-night sm:text-xl">
          {EVENT.dateRange}
        </p>
        <p className="mt-3 flex items-start gap-2 text-sm font-medium text-sand-200/85">
          <PinIcon className="mt-0.5 size-4 shrink-0 text-lagoon-400" />
          <span>
            {VENUE.name}, {VENUE.street}
            <span className="block text-sand-200/60">{VENUE.city}</span>
          </span>
        </p>

        <div className="mt-7">
          <FestStatus />
        </div>

        {/* Drei Tage auf einen Blick */}
        <ul className="mt-7 grid grid-cols-3 gap-2">
          {DAYS.map((day) => {
            const theme = THEMES[day.theme]
            const isToday = day.date === today
            return (
              <li key={day.id}>
                <a
                  href={`#${day.id}`}
                  className={`flex h-full flex-col gap-1 rounded-2xl border p-3 transition ${theme.chip} ${
                    isToday ? 'ring-2 ring-sunset-300/60' : ''
                  }`}
                >
                  <span
                    className={`text-[0.62rem] font-bold uppercase tracking-[0.14em] ${theme.chipLabel}`}
                  >
                    {day.weekdayShort} {day.dayNumber}.09.
                  </span>
                  {/* Trennung mit Bindestrich, sonst passt „Feierabendhock“
                      nicht in die schmale Spalte */}
                  <span className="hyphens-auto break-words text-[0.78rem] font-bold leading-tight text-sand-50">
                    {day.shortTitle}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Aktionen */}
        <div className="mt-6 flex gap-2.5">
          <a
            href="#programm"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sand-50 px-5 py-3.5 text-sm font-bold text-night transition hover:bg-white active:scale-[0.98]"
          >
            Programm
            <ArrowDownIcon className="size-4" />
          </a>
          <a
            href="#anfahrt"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-sand-50 transition hover:bg-white/10 active:scale-[0.98]"
          >
            <PinIcon className="size-4 text-lagoon-400" />
            Anfahrt
          </a>
        </div>

        <div className="mt-3">
          <QuickActions variant="dark" />
        </div>
      </div>
    </header>
  )
}
