import { DAYS, PARTY } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import Reveal from './Reveal.jsx'
import { specialArt } from './SpecialArt.jsx'
import SectionEdge from './SectionEdge.jsx'
import { PersonIcon } from './icons.jsx'

const saturday = DAYS.find((day) => day.theme === 'party')

/** Leicht unterschiedliche Tönung je Special-Kachel. */
const TINTS = {
  sunset: 'border-sunset-300/25 bg-sunset-500/12',
  brass: 'border-brass-400/25 bg-brass-400/12',
  lagoon: 'border-lagoon-400/25 bg-lagoon-500/12',
}

/** Dezente Palmwedel-Silhouette für die Ecken. */
function PalmFrond({ className }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <path d="M10 110C30 70 60 40 108 14" />
        <path d="M108 14c-22-4-40 4-52 20M108 14c-4 22-16 36-34 44M108 14c-30 6-50 22-62 44M108 14c6 20 2 38-10 52M108 14c-16-8-34-6-48 6" />
      </g>
    </svg>
  )
}

/** Einlass und Eintritt als Ticket – das Thema des Abends in einem Block. */
function Ticket() {
  return (
    <div className="overflow-hidden rounded-3xl bg-sand-50 text-ink shadow-xl shadow-night/30">
      <div className="grid grid-cols-2 divide-x divide-dashed divide-ink/15">
        <div className="px-3 py-4 text-center">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-soft">
            {PARTY.ticket.doorsLabel}
          </p>
          <p className="display mt-1.5 text-[1.6rem] text-ink">
            {PARTY.ticket.doorsValue}
          </p>
        </div>
        <div className="px-3 py-4 text-center">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-soft">
            {PARTY.ticket.freeLabel}
          </p>
          <p className="display mt-1.5 text-[1.6rem] text-berry-500">
            {PARTY.ticket.freeValue}
          </p>
        </div>
      </div>
      <p className="border-t border-dashed border-ink/15 bg-sand-100 px-4 py-2.5 text-center text-[0.8rem] font-bold text-ink-soft">
        Danach {PARTY.admissionPaid} Eintritt
      </p>
    </div>
  )
}

export default function PartyNight() {
  return (
    <div className="relative">
      <SectionEdge />
      <SectionEdge flip />
      <section
        id="malle"
        className="relative overflow-hidden bg-night-soft py-14 text-sand-50 sm:py-20"
      >
      {/* Tropische Lichtstimmung */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 size-[30rem] rounded-full bg-berry-500/40 blur-[80px]" />
        <div className="absolute -right-1/4 bottom-0 size-[28rem] rounded-full bg-sunset-500/30 blur-[80px]" />
        <div className="grain absolute inset-0 opacity-[0.07]" />
        <PalmFrond className="absolute -bottom-10 -right-10 size-56 text-sunset-300/20" />
      </div>

      <div className="relative mx-auto max-w-lg px-5">
        <Reveal>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sunset-300">
            {PARTY.kicker} · {saturday.dateLabel}
          </p>
          <h2 className="display mt-2 text-[2.9rem] text-sand-50 sm:text-6xl">
            {PARTY.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-sand-200/85">
            {PARTY.lead}
          </p>
        </Reveal>

        {/* Einlass und Eintritt */}
        <Reveal delay={80} className="mt-6">
          <Ticket />
        </Reveal>

        {/* DJ */}
        <Reveal delay={140} className="mt-4">
          {/* Weisse Karte: das Logo trägt eine weisse Sticker-Kontur,
              die nur auf Weiss so wirkt wie gestaltet. */}
          <div className="rounded-3xl bg-white p-6 text-center shadow-xl shadow-night/30">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
              An den Turntables
            </p>
            {/* Name und Claim stecken bereits in der Sperrmarke */}
            <div className="mt-4">
              <DjLogo />
            </div>
          </div>
        </Reveal>

        {/* Specials */}
        <Reveal delay={80} className="mt-8">
          <h3 className="display text-center text-2xl text-sunset-300">
            Specials
          </h3>
          <ul className="mt-4 grid grid-cols-3 gap-2.5">
            {PARTY.specials.map((special) => {
              const Art = specialArt[special.icon]
              return (
                <li
                  key={special.title}
                  className={`flex flex-col items-center gap-2 rounded-2xl border px-2 py-4 text-center backdrop-blur-sm ${TINTS[special.tint]}`}
                >
                  <Art className="size-12" />
                  <span className="text-[0.78rem] font-bold leading-tight text-sand-50">
                    {special.title}
                  </span>
                  <span className="text-[0.66rem] leading-tight text-sand-200/65">
                    {special.note}
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Party-Pass */}
        <Reveal
          delay={60}
          className="mt-6 flex items-center gap-3 rounded-2xl border border-sunset-300/25 bg-sunset-500/10 p-4"
        >
          <PersonIcon className="size-5 shrink-0 text-sunset-300" />
          <p className="text-[0.82rem] font-semibold leading-relaxed text-sand-100">
            {PARTY.partyPass}
          </p>
        </Reveal>
        </div>
      </section>
    </div>
  )
}
