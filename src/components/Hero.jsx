import { NEXT, ORGANIZER, PAST } from '../data/festival.js'
import { ArrowDownIcon, BarnIcon } from './icons.jsx'

/**
 * Einstieg: grosses Dankeschön für das Fest 2026.
 * Der Hinweis auf 2027 sitzt bewusst schon hier, damit man ihn auch
 * sieht, ohne zu scrollen.
 */
export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-sand-50"
    >
      {/* Ruhige Farbschleier statt Illustration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-soft via-night to-night" />
        <div className="animate-drift absolute -right-40 -top-40 size-[34rem] rounded-full bg-berry-500/22 blur-[110px]" />
        <div className="animate-drift-slow absolute -bottom-52 -left-32 size-[32rem] rounded-full bg-sunset-500/14 blur-[110px]" />
        <div className="animate-drift absolute -left-24 top-1/3 size-[22rem] rounded-full bg-lagoon-500/12 blur-[100px]" />
        <div className="grain absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative mx-auto w-full max-w-lg px-5 pt-7">
        <p className="animate-rise flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand-200/70">
          <BarnIcon className="size-4 text-sunset-300" />
          {ORGANIZER.name}
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-10">
        <p
          className="animate-rise text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sand-200/60"
          style={{ animationDelay: '80ms' }}
        >
          Menninger Schuppenfest {PAST.year}
        </p>

        {/* Zwei Ebenen, weil sich sonst die beiden Animationen
            (Einblenden aussen, Farbverlauf innen) gegenseitig ersetzen.
            clamp(): „Danke“ soll gross sein, aber auf 320px nicht überlaufen. */}
        <div className="animate-rise mt-3" style={{ animationDelay: '140ms' }}>
          <h1
            className="display animate-sheen bg-gradient-to-r from-sunset-300 via-berry-400 to-sunset-400 bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(4.5rem, 27vw, 8.5rem)' }}
          >
            {PAST.headline}
          </h1>
        </div>

        <p
          className="animate-rise display mt-5 w-fit rounded-lg bg-sand-50 px-3 py-1.5 text-base text-night sm:text-lg"
          style={{ animationDelay: '220ms' }}
        >
          {PAST.dateRange}
        </p>

        <p
          className="animate-rise mt-5 max-w-sm text-[0.98rem] leading-relaxed text-sand-200/85"
          style={{ animationDelay: '300ms' }}
        >
          {PAST.lead}
        </p>

        <div
          className="animate-rise mt-8 flex flex-col gap-2.5 min-[380px]:flex-row"
          style={{ animationDelay: '380ms' }}
        >
          <a
            href="#danke"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sand-50 px-5 py-3.5 text-sm font-bold text-night transition hover:bg-white active:scale-[0.98]"
          >
            Rückblick
            <ArrowDownIcon className="animate-nudge size-4" />
          </a>
          <a
            href="#save-the-date"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-sand-50 transition hover:bg-white/10 active:scale-[0.98]"
          >
            Save the Date {NEXT.year}
          </a>
        </div>
      </div>
    </header>
  )
}
