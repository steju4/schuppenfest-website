import { THANKS } from '../data/festival.js'
import Reveal from './Reveal.jsx'
import { HeartIcon } from './icons.jsx'

/** Rückblick: der Dank fürs Fest 2026 – bewusst nach dem Termin. */
export default function Danke() {
  return (
    <section
      id="danke"
      className="relative overflow-hidden bg-sand-50 px-5 py-16 text-ink"
    >
      <div
        aria-hidden
        className="dots pointer-events-none absolute inset-0 text-ink/[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 size-[22rem] rounded-full bg-berry-500/[0.07] blur-[80px]"
      />

      <Reveal className="relative mx-auto max-w-lg">
        <p className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-ink-soft">
          <HeartIcon className="size-4 text-berry-500" />
          Menninger Schuppenfest {THANKS.year}
        </p>

        <h2
          className="display animate-sheen mt-3 w-fit bg-gradient-to-r from-berry-500 via-sunset-500 to-berry-500 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(3rem, 16vw, 4.5rem)' }}
        >
          {THANKS.headline}
        </h2>

        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink">
          {THANKS.lead}
        </p>
        <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-soft">
          {THANKS.text}
        </p>

        <p className="mt-6 inline-block border-t-2 border-berry-500/25 pt-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-soft/75">
          {THANKS.dateRange}
        </p>
      </Reveal>
    </section>
  )
}
