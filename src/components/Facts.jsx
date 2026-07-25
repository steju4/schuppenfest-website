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

/** Jede Kachel bekommt einen eigenen, gedämpften Akzent. */
const COLORS = {
  berry: 'bg-berry-500/10 text-berry-500',
  sunset: 'bg-sunset-500/12 text-sunset-500',
  brass: 'bg-brass-400/15 text-brass-600',
  lagoon: 'bg-lagoon-500/10 text-lagoon-600',
}

export default function Facts() {
  return (
    <section id="infos" className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-lg">
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
                className="card flex gap-3.5 p-4"
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full ${COLORS[fact.color]}`}
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
