import { FACTS } from '../data/festival.js'
import Tile from './Tile.jsx'
import { BarnIcon, PersonIcon, PlateIcon, TicketIcon } from './icons.jsx'

const ICONS = {
  ticket: TicketIcon,
  person: PersonIcon,
  plate: PlateIcon,
  barn: BarnIcon,
}

/** Jede Kachel trägt ihre Farbe voll – das ergibt das Mosaik. */
const COLORS = {
  punch: 'bg-punch-400 text-ink',
  sky: 'bg-sky-400 text-ink',
  sun: 'bg-sun-400 text-ink',
  jade: 'bg-jade-400 text-ink',
}

export default function FactTiles() {
  return (
    <>
      <Tile
        id="infos"
        className="col-span-2 scroll-mt-4 bg-bone-dim px-5 py-5 sm:col-span-4 sm:px-8 sm:py-7"
      >
        <p className="label text-mute">Das Wichtigste kurz</p>
        <h2 className="display mt-2 text-[2.2rem] uppercase sm:text-5xl">
          Gut zu wissen
        </h2>
      </Tile>

      {FACTS.map((fact, index) => {
        const Icon = ICONS[fact.icon]
        return (
          <Tile
            key={fact.title}
            delay={index * 60}
            className={`col-span-1 p-5 ${COLORS[fact.color]}`}
          >
            <Icon className="size-6" />
            <h3 className="display mt-3 text-[1.15rem] uppercase leading-tight">
              {fact.title}
            </h3>
            <p className="mt-1.5 text-[0.78rem] leading-snug text-ink/75">
              {fact.text}
            </p>
          </Tile>
        )
      })}
    </>
  )
}
