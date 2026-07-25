import { DJ, HIGHLIGHT, NOTICES, SPECIALS, VENUE } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import { ClockIcon, InfoIcon, TicketIcon, specialIcons } from './icons.jsx'

function KeyFact({ icon: Icon, label, value, hint }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3.5 ring-1 ring-ink/5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-berry-500/10">
        <Icon className="size-4.5 text-berry-500" />
      </span>
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
          {label}
        </p>
        <p className="text-sm font-bold leading-snug text-ink">
          {value}
          {hint && (
            <span className="font-medium text-ink-soft"> · {hint}</span>
          )}
        </p>
      </div>
    </div>
  )
}

export default function PartyHighlight() {
  return (
    <section id="mallorca-party" className="px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lagoon-600">
          Samstag, {HIGHLIGHT.date}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Mallorca Party
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          Sonne, Sangria-Stimmung und die besten Party-Hits – im{' '}
          {VENUE.name}.
        </p>

        <div className="mt-6 grid gap-2.5">
          <KeyFact
            icon={ClockIcon}
            label="Einlass"
            value={HIGHLIGHT.doorsOpen}
          />
          <KeyFact
            icon={TicketIcon}
            label="Eintritt"
            value={HIGHLIGHT.admissionFree}
            hint={`danach ${HIGHLIGHT.admissionPaid}`}
          />
        </div>

        {/* DJ */}
        <div className="card mt-6 p-6 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            An den Turntables
          </p>
          <div className="mt-4">
            <DjLogo />
          </div>
          <p className="mt-4 text-lg font-extrabold tracking-tight text-ink">
            {DJ.name}
          </p>
          <p className="text-sm font-medium text-ink-soft">„{DJ.tagline}“</p>
        </div>

        {/* Specials */}
        <div className="mt-6">
          <h3 className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-berry-500">
            Specials
          </h3>
          <ul className="mt-3 grid grid-cols-3 gap-2.5">
            {SPECIALS.map((special) => {
              const Icon = specialIcons[special.icon]
              return (
                <li
                  key={special.title}
                  className="card flex flex-col items-center gap-2 px-2.5 py-4 text-center"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-sunset-400/20 to-berry-400/20">
                    <Icon className="size-5.5 text-berry-600" />
                  </span>
                  <span className="text-[0.8rem] font-bold leading-tight text-ink">
                    {special.title}
                  </span>
                  <span className="text-[0.68rem] leading-tight text-ink-soft">
                    {special.note}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Hinweis Party-Pass */}
        <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-lagoon-500/8 p-3.5 text-[0.8rem] font-medium leading-relaxed text-lagoon-600 ring-1 ring-lagoon-500/15">
          <InfoIcon className="mt-px size-4 shrink-0" />
          {NOTICES.partyPass}
        </p>
      </div>
    </section>
  )
}
