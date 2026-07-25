import { DAYS, PARTY } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import Reveal from './Reveal.jsx'
import { specialArt } from './SpecialArt.jsx'
import { ClockIcon, PersonIcon, TicketIcon } from './icons.jsx'

const saturday = DAYS.find((day) => day.theme === 'party')

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

function Fact({ icon: Icon, label, value, hint }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 p-3.5 backdrop-blur-sm">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sunset-400/20">
        <Icon className="size-4.5 text-sunset-300" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-sand-200/60">
          {label}
        </p>
        <p className="text-[0.9rem] font-bold leading-snug text-sand-50">
          {value}
          {hint && <span className="font-medium text-sand-200/70"> · {hint}</span>}
        </p>
      </div>
    </div>
  )
}

export default function PartyNight() {
  return (
    <section
      id="mallorca"
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

        {/* Fakten */}
        <Reveal delay={80} className="mt-6 grid gap-2.5">
          <Fact icon={ClockIcon} label="Einlass" value={PARTY.doorsOpen} />
          <Fact
            icon={TicketIcon}
            label="Eintritt"
            value={PARTY.admissionFree}
            hint={`danach ${PARTY.admissionPaid}`}
          />
        </Reveal>

        {/* DJ */}
        <Reveal delay={140} className="mt-4">
          <div className="rounded-3xl bg-sand-50 p-6 text-center shadow-xl shadow-night/30">
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
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/12 bg-white/8 px-2 py-4 text-center backdrop-blur-sm"
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
  )
}
