import { EVENT, VENUE } from '../data/festival.js'
import { ExternalIcon, MusicIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-5 pb-10 pt-14 text-sand-50">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-berry-500/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-64 rounded-full bg-sunset-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-xl text-center">
        <MusicIcon className="mx-auto size-7 text-sunset-400" />

        <p className="mt-5 text-2xl font-extrabold leading-tight tracking-tight">
          Wir freuen uns auf Euch!
        </p>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-sand-200/80">
          {EVENT.dateRange} · {VENUE.name}, {VENUE.street},{' '}
          {VENUE.city}
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-sand-200/20" />

        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sand-200/60">
          Veranstalter
        </p>
        <a
          href={EVENT.organizer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1.5 text-base font-bold transition hover:text-sunset-400"
        >
          {EVENT.organizer.name}
          <ExternalIcon className="size-3.5" />
        </a>

        <p className="mt-8 text-xs text-sand-200/50">
          Änderungen im Programm vorbehalten.
        </p>
      </div>
    </footer>
  )
}
