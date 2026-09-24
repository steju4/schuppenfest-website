import { NEXT, ORGANIZER, VENUE } from '../data/festival.js'
import QuickActions from './QuickActions.jsx'
import { ArrowDownIcon, BarnIcon, PinIcon } from './icons.jsx'

/**
 * Erster Bildschirm: der Termin 2027.
 * Wer die Seite per QR-Code aufruft, soll Datum und Ort sehen, ohne zu
 * scrollen – alles Weitere kommt darunter.
 */
export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-sand-50">
      {/* Ruhige Farbschleier statt Illustration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-soft via-night to-night" />
        <div className="animate-drift absolute -right-40 -top-40 size-[34rem] rounded-full bg-berry-500/22 blur-[110px]" />
        <div className="animate-drift-slow absolute -bottom-52 -left-32 size-[32rem] rounded-full bg-sunset-500/14 blur-[110px]" />
        <div className="grain absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative mx-auto w-full max-w-lg px-5 pt-7">
        <p className="animate-rise flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand-200/70">
          <BarnIcon className="size-4 text-sunset-300" />
          {ORGANIZER.name}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-9">
        <p
          className="animate-rise w-fit rounded-full border border-white/20 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-sand-200/80"
          style={{ animationDelay: '80ms' }}
        >
          Save the Date
        </p>

        <h1 className="mt-5">
          <span
            className="animate-rise display block text-[1.55rem] text-sand-50 sm:text-3xl"
            style={{ animationDelay: '140ms' }}
          >
            Menninger Schuppenfest
          </span>
          {/* Zwei Ebenen, weil sich sonst die beiden Animationen
              (Einblenden aussen, Farbverlauf innen) gegenseitig ersetzen.
              clamp(): gross, aber auf 320 px nicht überlaufend. */}
          <span
            className="animate-rise block"
            style={{ animationDelay: '200ms' }}
          >
            <span
              className="display animate-sheen block bg-gradient-to-r from-sunset-300 via-berry-400 to-sunset-400 bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(4.5rem, 27vw, 8.5rem)' }}
            >
              {NEXT.year}
            </span>
          </span>
        </h1>

        <p
          className="animate-rise display mt-4 w-fit rounded-xl bg-sand-50 px-4 py-2 text-[1.35rem] text-night sm:text-2xl"
          style={{ animationDelay: '260ms' }}
        >
          {NEXT.dateRange}
        </p>

        <p
          className="animate-rise mt-4 flex items-start gap-2 text-sm font-medium text-sand-200/85"
          style={{ animationDelay: '320ms' }}
        >
          <PinIcon className="mt-0.5 size-4 shrink-0 text-lagoon-400" />
          <span>
            {VENUE.name}, {VENUE.street}
            <span className="block text-sand-200/60">{VENUE.city}</span>
          </span>
        </p>

        <div className="animate-rise mt-7" style={{ animationDelay: '380ms' }}>
          <QuickActions solidFirst />
        </div>

        <a
          href="#termin"
          className="animate-rise mt-9 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sand-200/60 transition hover:text-sand-50"
          style={{ animationDelay: '440ms' }}
        >
          Die drei Tage
          <ArrowDownIcon className="animate-nudge size-4" />
        </a>
      </div>
    </header>
  )
}
