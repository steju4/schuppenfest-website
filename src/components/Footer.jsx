import { NEXT, ORGANIZER, VENUE } from '../data/festival.js'
import Reveal from './Reveal.jsx'
import { BarnIcon, ExternalIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night px-5 pb-10 pt-16 text-sand-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-berry-500/22 blur-[80px]" />
        <div className="absolute -bottom-24 right-0 size-64 rounded-full bg-sunset-500/18 blur-[80px]" />
        <div className="grain absolute inset-0 opacity-[0.07]" />
      </div>

      <Reveal className="relative mx-auto max-w-lg text-center">
        <BarnIcon className="mx-auto size-8 text-sunset-300" />

        <p className="display mt-5 text-[2rem] leading-[1.05] text-sand-50 sm:text-4xl">
          {NEXT.closing}
        </p>

        <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-sand-200/75">
          {VENUE.name}, {VENUE.street}
          <br />
          {VENUE.city}
        </p>

        <div className="mx-auto mt-8 h-px w-20 bg-sand-200/20" />

        {/* Menninger Wappen – vom Festflyer übernommen */}
        <img
          src="/wappen-menningen.png"
          alt="Wappen von Menningen"
          width="320"
          height="380"
          loading="lazy"
          className="mx-auto mt-6 h-12 w-auto"
        />

        <p className="mt-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-sand-200/55">
          Veranstalter
        </p>
        <a
          href={ORGANIZER.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1.5 text-base font-bold transition hover:text-sunset-300"
        >
          {ORGANIZER.name}
          <ExternalIcon className="size-3.5" />
        </a>

        <p className="mt-8 text-xs text-sand-200/45">
          Termin {NEXT.dateRangeShort} – Programm und Änderungen folgen.
        </p>
      </Reveal>
    </footer>
  )
}
