import { FACTS } from '../data/festival.js'
import QuickActions from './QuickActions.jsx'
import Reveal from './Reveal.jsx'
import { BarnIcon, PersonIcon, PlateIcon, TicketIcon } from './icons.jsx'

const ICONS = {
  ticket: TicketIcon,
  person: PersonIcon,
  plate: PlateIcon,
  barn: BarnIcon,
}

/** Jede Kachel bekommt eine eigene Akzentfarbe. */
const COLORS = {
  berry: { tile: 'bg-berry-500', bar: 'bg-berry-500' },
  sunset: { tile: 'bg-sunset-500', bar: 'bg-sunset-500' },
  brass: { tile: 'bg-brass-500', bar: 'bg-brass-500' },
  lagoon: { tile: 'bg-lagoon-500', bar: 'bg-lagoon-500' },
}

export default function Facts() {
  return (
    <section id="infos" className="relative overflow-hidden px-5 py-14 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dots absolute inset-0 text-ink/[0.045]" />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-100/70 via-transparent to-sand-100/50" />
      </div>
      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
            Das Wichtigste kurz
          </p>
          <h2 className="display mt-2 text-[2.4rem] text-ink sm:text-5xl">
            Gut zu wissen
          </h2>
        </Reveal>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {FACTS.map((fact, index) => {
            const Icon = ICONS[fact.icon]
            return (
              <Reveal
                as="li"
                key={fact.title}
                delay={index * 70}
                className="card relative flex gap-3.5 overflow-hidden p-4 pl-5"
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-1.5 ${COLORS[fact.color].bar}`}
                />
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm ${COLORS[fact.color].tile}`}
                >
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-extrabold tracking-tight text-ink">
                    {fact.title}
                  </h3>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-soft">
                    {fact.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={80} className="mt-6 flex justify-center">
          <QuickActions variant="light" />
        </Reveal>
      </div>
    </section>
  )
}
