import { EVENT, VENUE } from '../data/festival.js'
import FestStatus from './FestStatus.jsx'
import QuickActions from './QuickActions.jsx'
import { ArrowDownIcon, PinIcon } from './icons.jsx'

/**
 * Titelbereich als Papierseite: helle Fläche, grosse Serifenschrift,
 * eine einzige kräftige Farbe als Akzent.
 */
export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grain absolute inset-0 opacity-[0.05]" />
        <div className="absolute -right-32 -top-24 size-[26rem] rounded-full bg-coral-400/12 blur-[90px]" />
        <div className="absolute -left-28 bottom-1/4 size-[22rem] rounded-full bg-teal-400/10 blur-[90px]" />
      </div>

      {/* Kopfzeile */}
      <div className="relative mx-auto flex w-full max-w-xl items-center gap-3 px-6 pt-6">
        <img
          src="/wappen-menningen.png"
          alt=""
          width="320"
          height="380"
          className="h-8 w-auto"
        />
        <p className="eyebrow text-ink-soft">{EVENT.organizer.name}</p>
      </div>

      <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-10">
        {/* Titel */}
        <h1 className="serif text-[3.4rem] text-ink sm:text-[5rem]">
          <span className="block">Menninger</span>
          <span className="block italic text-coral-500">Schuppenfest</span>
        </h1>

        {/* Datumszeile mit Haarlinien */}
        <div className="mt-7">
          <div className="rule" />
          <p className="flex items-baseline justify-between gap-4 py-3">
            <span className="serif text-2xl text-ink sm:text-3xl">
              19 <span className="text-ink-faint">—</span> 21
            </span>
            <span className="eyebrow text-ink-soft">September 2026</span>
          </p>
          <div className="rule" />
          <p className="flex items-start gap-2.5 py-3 text-sm text-ink-soft">
            <PinIcon className="mt-0.5 size-4 shrink-0 text-coral-500" />
            <span>
              <span className="font-semibold text-ink">{VENUE.name}</span>
              {', '}
              {VENUE.street}
              <span className="block">{VENUE.city}</span>
            </span>
          </p>
          <div className="rule" />
        </div>

        <div className="mt-6">
          <FestStatus />
        </div>

        {/* Aktionen */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          <a
            href="#programm"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper transition hover:bg-ink/85 active:scale-[0.98]"
          >
            Programm ansehen
            <ArrowDownIcon className="size-4" />
          </a>
          <a
            href="#anfahrt"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-ink/5 active:scale-[0.98]"
          >
            <PinIcon className="size-4 text-coral-500" />
            Anfahrt
          </a>
        </div>

        <div className="mt-3">
          <QuickActions />
        </div>
      </div>
    </header>
  )
}
