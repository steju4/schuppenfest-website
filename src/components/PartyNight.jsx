import { DAYS, PARTY } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import Reveal from './Reveal.jsx'
import { specialArt } from './SpecialArt.jsx'
import { PersonIcon } from './icons.jsx'

const saturday = DAYS.find((day) => day.theme === 'party')

/** Die Specials tragen die tropischen Töne des Party-Flyers. */
const TINTS = {
  coral: 'bg-coral-500/20 ring-coral-400/45',
  gold: 'bg-gold-500/20 ring-gold-400/45',
  teal: 'bg-teal-500/20 ring-teal-400/45',
}

export default function PartyNight() {
  return (
    <section
      id="malle"
      className="relative overflow-hidden bg-ink px-6 py-16 text-paper sm:py-24"
    >
      {/* Tropische Lichtstimmung – der eine laute Moment der Seite */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 size-[26rem] rounded-full bg-coral-500/35 blur-[90px]" />
        <div className="absolute -right-20 top-1/3 size-[22rem] rounded-full bg-teal-500/25 blur-[90px]" />
        <div className="absolute bottom-0 left-1/3 size-[20rem] rounded-full bg-gold-500/20 blur-[90px]" />
        <div className="grain absolute inset-0 opacity-[0.08]" />
      </div>

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <p className="eyebrow text-coral-400">
            {PARTY.kicker} · {saturday.dateLabel}
          </p>
          <h2 className="serif mt-3 text-[3.4rem] italic leading-[0.9] sm:text-[5rem]">
            Malle-
            <span className="block not-italic text-gold-400">Party</span>
          </h2>
          <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-paper/75">
            {PARTY.lead}
          </p>
        </Reveal>

        {/* Einlass und Eintritt als Ticket */}
        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-3xl bg-paper text-ink">
            <div className="grid grid-cols-2 divide-x divide-dashed divide-ink/20">
              <div className="px-4 py-5 text-center">
                <p className="eyebrow text-ink-faint">
                  {PARTY.ticket.doorsLabel}
                </p>
                <p className="serif mt-2 text-3xl">{PARTY.ticket.doorsValue}</p>
              </div>
              <div className="px-4 py-5 text-center">
                <p className="eyebrow text-ink-faint">
                  {PARTY.ticket.freeLabel}
                </p>
                <p className="serif mt-2 text-3xl italic text-coral-500">
                  {PARTY.ticket.freeValue}
                </p>
              </div>
            </div>
            <p className="border-t border-dashed border-ink/20 bg-paper-deep px-4 py-3 text-center text-[0.82rem] font-bold text-ink-soft">
              Danach {PARTY.admissionPaid} Eintritt
            </p>
          </div>
        </Reveal>

        {/* DJ */}
        <Reveal delay={140} className="mt-4">
          {/* Weisse Fläche, weil das Logo eine weisse Sticker-Kontur trägt */}
          <div className="rounded-3xl bg-white p-7 text-center">
            <p className="eyebrow text-ink-faint">An den Turntables</p>
            <div className="mt-5">
              <DjLogo />
            </div>
          </div>
        </Reveal>

        {/* Specials */}
        <Reveal delay={80} className="mt-10">
          <h3 className="serif text-center text-4xl italic text-gold-400">
            Specials
          </h3>
          <ul className="mt-5 grid grid-cols-3 gap-3">
            {PARTY.specials.map((special) => {
              const Art = specialArt[special.icon]
              return (
                <li
                  key={special.title}
                  className={`flex flex-col items-center gap-2.5 rounded-2xl px-2 py-5 text-center ring-1 ${TINTS[special.tint]}`}
                >
                  <Art className="size-14" />
                  <span className="text-[0.8rem] font-bold leading-tight">
                    {special.title}
                  </span>
                  <span className="text-[0.68rem] leading-tight text-paper/55">
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
          className="mt-6 flex items-center gap-3 rounded-2xl bg-paper/10 p-4 ring-1 ring-paper/15"
        >
          <PersonIcon className="size-5 shrink-0 text-gold-400" />
          <p className="text-[0.85rem] font-semibold leading-relaxed">
            {PARTY.partyPass}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
