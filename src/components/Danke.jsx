import { THANKS } from '../data/festival.js'
import Reveal from './Reveal.jsx'

/** Rückblick: der Dank fürs Fest 2026 – bewusst nach dem Termin. */
export default function Danke() {
  return (
    <section
      id="danke"
      className="relative overflow-hidden bg-sand-50 px-5 py-14 text-ink"
    >
      <div
        aria-hidden
        className="dots pointer-events-none absolute inset-0 text-ink/[0.06]"
      />

      <Reveal className="relative mx-auto max-w-lg">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-soft">
          Menninger Schuppenfest {THANKS.year}
        </p>

        <h2 className="display mt-3 bg-gradient-to-r from-berry-500 to-sunset-500 bg-clip-text text-[3.2rem] text-transparent sm:text-6xl">
          {THANKS.headline}
        </h2>

        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink">
          {THANKS.lead}
        </p>
        <p className="mt-2 text-[1.02rem] leading-relaxed text-ink-soft">
          {THANKS.text}
        </p>

        <p className="mt-5 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-ink-soft/70">
          {THANKS.dateRange}
        </p>
      </Reveal>
    </section>
  )
}
