import { NEXT, NEXT_DAYS, ORGANIZER, THANKS, THEMES, VENUE } from '../data/festival.js'
import QuickActions from './QuickActions.jsx'
import { ArrowDownIcon, BarnIcon, HeartIcon, PinIcon } from './icons.jsx'

/**
 * Erster Bildschirm: der Termin 2027 mit den drei Tagen – plus ein kurzer
 * Gruss zum Fest 2026, der nach unten zum ganzen Dank führt.
 * Wer den QR-Code vom Flyer scannt, soll alles Wesentliche sehen, ohne zu
 * scrollen.
 */
export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-sand-50">
      {/* Farbschleier und Raster – ruhig, aber nicht leer */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-soft via-night to-night" />
        <div className="animate-drift absolute -right-40 -top-44 size-[34rem] rounded-full bg-berry-500/25 blur-[110px]" />
        <div className="animate-drift-slow absolute -bottom-52 -left-36 size-[32rem] rounded-full bg-sunset-500/16 blur-[110px]" />
        <div className="dots absolute inset-0 text-white/[0.05]" />
        <div className="grain absolute inset-0 opacity-[0.05]" />
      </div>

      {/* Die drei Tagesfarben als Band ganz oben */}
      <div
        aria-hidden
        className="relative h-1.5 w-full shrink-0 bg-gradient-to-r from-berry-500 via-brass-500 to-lagoon-500"
      />

      <div className="relative mx-auto w-full max-w-lg px-5 pt-6">
        <p className="animate-rise flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-sand-200/70 sm:justify-center">
          <BarnIcon className="size-4 text-sunset-300" />
          {ORGANIZER.name}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-8 sm:items-center sm:text-center">
        {/* Kurzer Dank fürs Fest 2026 – der ganze Text steht weiter unten */}
        <a
          href="#danke"
          className="animate-rise group flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-3 pr-2.5 text-[0.72rem] font-bold text-sand-200/85 transition hover:border-white/30 hover:text-sand-50"
          style={{ animationDelay: '60ms' }}
        >
          <HeartIcon className="size-3.5 text-berry-400" />
          {THANKS.chip}
          <ArrowDownIcon className="size-3.5 text-sand-200/50 transition group-hover:text-sand-50" />
        </a>

        <h1 className="mt-6">
          <span
            className="animate-rise display block text-sand-50"
            style={{ fontSize: 'clamp(1.15rem, 5.4vw, 1.9rem)', animationDelay: '120ms' }}
          >
            Menninger Schuppenfest
          </span>
          {/* Zwei Ebenen, weil sich sonst die beiden Animationen
              (Einblenden aussen, Farbverlauf innen) gegenseitig ersetzen. */}
          <span className="animate-rise block" style={{ animationDelay: '180ms' }}>
            <span
              className="display animate-sheen block bg-gradient-to-r from-sunset-300 via-berry-400 to-sunset-400 bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(4.2rem, 26vw, 8rem)' }}
            >
              {NEXT.year}
            </span>
          </span>
        </h1>

        {/* Das Datum – leicht gekippt, damit es wie aufgeklebt wirkt */}
        <p
          className="animate-rise display mt-4 w-fit -rotate-[1.5deg] rounded-xl bg-sand-50 px-4 py-2 text-night shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)]"
          style={{ fontSize: 'clamp(1.4rem, 6.4vw, 2rem)', animationDelay: '240ms' }}
        >
          {NEXT.dateRangeNoYear}
        </p>

        {/* Die drei Tage als Datumskacheln in den Tagesfarben */}
        <ul
          className="animate-rise mt-7 grid w-full grid-cols-3 gap-2"
          style={{ animationDelay: '300ms' }}
        >
          {NEXT_DAYS.map((day) => (
            <li
              key={day.id}
              className={`overflow-hidden rounded-2xl ${THEMES[day.theme]} px-1.5 pb-2.5 pt-3 text-center text-white shadow-[0_12px_28px_-16px_rgba(0,0,0,0.9)]`}
            >
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/75">
                {day.weekdayShort}
              </span>
              <span className="display mt-0.5 block text-[2.4rem] leading-none">
                {day.dayNumber}
              </span>
              <span className="mt-1.5 block hyphens-auto break-words text-[0.66rem] font-bold leading-tight">
                {day.title}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="animate-rise mt-6 flex items-start gap-2 text-left text-[0.85rem] font-medium text-sand-200/80"
          style={{ animationDelay: '360ms' }}
        >
          <PinIcon className="mt-0.5 size-4 shrink-0 text-lagoon-400" />
          <span>
            {VENUE.name}, {VENUE.street}
            <span className="block text-sand-200/55">{VENUE.city}</span>
          </span>
        </p>

        <div className="animate-rise mt-6" style={{ animationDelay: '420ms' }}>
          <QuickActions solidFirst />
        </div>
      </div>

      {/* Hinweis, dass unter dem ersten Bildschirm noch etwas kommt */}
      <a
        href="#danke"
        aria-label="Weiter zum Dank für 2026"
        className="animate-rise relative mx-auto mb-7 flex size-10 items-center justify-center rounded-full border border-white/15 text-sand-200/60 transition hover:border-white/35 hover:text-sand-50"
        style={{ animationDelay: '520ms' }}
      >
        <ArrowDownIcon className="animate-nudge size-4" />
      </a>
    </header>
  )
}
