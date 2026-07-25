import { DAYS, EVENT, VENUE } from '../data/festival.js'
import HeroScene from './HeroScene.jsx'
import { ArrowDownIcon, BarnIcon, PinIcon } from './icons.jsx'

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-sand-50"
    >
      {/* Sonnenuntergangs-Licht als Farbverlauf – kein Bild, kein Request */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 size-[38rem] rounded-full bg-berry-500/35 blur-[90px]" />
        <div className="absolute -right-1/3 top-0 size-[32rem] rounded-full bg-sunset-500/30 blur-[90px]" />
        <div className="absolute -bottom-1/4 left-1/4 size-[30rem] rounded-full bg-lagoon-500/25 blur-[90px]" />
        <div className="grain absolute inset-0 opacity-[0.07]" />
        {/* Weicher Übergang in den hellen Seitenbereich */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-sand-50" />
      </div>

      {/* Titelbild: Sonnenuntergang, Schuppen, Palmen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[7%] flex justify-center"
      >
        <HeroScene className="w-[122%] max-w-[32rem] sm:max-w-[38rem]" />
      </div>

      {/* Veranstalter sitzt oben, der Titelblock unten – wie auf einem Plakat */}
      <div className="relative mx-auto w-full max-w-lg px-5 pt-7">
        <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand-200/75">
          <BarnIcon className="size-4 text-sunset-300" />
          {EVENT.organizer.name}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-end px-5 pb-12 pt-8">
        {/* Titel */}
        <h1>
          <span className="display block text-[2.9rem] text-sand-50 sm:text-6xl">
            Menninger
          </span>
          <span className="display block bg-gradient-to-r from-sunset-300 via-sunset-400 to-berry-400 bg-clip-text text-[3.3rem] text-transparent sm:text-7xl">
            Schuppenfest
          </span>
        </h1>

        {/* Datum + Ort */}
        <div className="mt-5 flex flex-col gap-2.5">
          <p className="display inline-flex w-fit items-center rounded-lg bg-sand-50 px-3 py-1.5 text-lg text-night sm:text-xl">
            {EVENT.dateRange}
          </p>
          <p className="flex items-start gap-2 text-sm font-medium text-sand-200/85">
            <PinIcon className="mt-0.5 size-4 shrink-0 text-lagoon-400" />
            <span>
              {VENUE.name}, {VENUE.street}
              <span className="block text-sand-200/60">{VENUE.city}</span>
            </span>
          </p>
        </div>

        {/* Drei Tage auf einen Blick */}
        <ul className="mt-7 grid grid-cols-3 gap-2">
          {DAYS.map((day) => (
            <li key={day.id}>
              <a
                href={`#${day.id}`}
                className="flex h-full flex-col gap-1 rounded-2xl border border-white/12 bg-white/8 p-3 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/12"
              >
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-sand-200/60">
                  {day.weekdayShort} {day.dayNumber}.09.
                </span>
                <span className="text-[0.8rem] font-bold leading-tight text-sand-50">
                  {day.shortTitle}
                </span>
              </a>
            </li>
          ))}
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
      </div>
    </header>
  )
}
