import { DAYS, PARTY } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import Tile from './Tile.jsx'
import { specialArt } from './SpecialArt.jsx'
import { PersonIcon } from './icons.jsx'

const saturday = DAYS.find((day) => day.theme === 'party')

const TINTS = {
  punch: 'bg-punch-500/15 ring-punch-500/40',
  sun: 'bg-sun-500/15 ring-sun-500/40',
  jade: 'bg-jade-500/15 ring-jade-500/40',
}

/** Der Samstagabend – der eine dunkle, laute Block der Seite. */
export default function PartyTiles() {
  return (
    <>
      <Tile
        as="section"
        id="malle"
        className="col-span-2 scroll-mt-4 bg-ink px-5 py-7 text-bone sm:col-span-4 sm:px-8 sm:py-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 size-72 rounded-full bg-punch-500/35 blur-[70px]" />
          <div className="absolute -bottom-20 right-0 size-64 rounded-full bg-sun-500/20 blur-[70px]" />
          <div className="grain absolute inset-0 opacity-[0.08]" />
        </div>

        <div className="relative">
          <p className="label text-punch-400">
            {PARTY.kicker} · {saturday.dateLabel}
          </p>
          <h2 className="display mt-3 text-[clamp(2.6rem,12vw,5.5rem)] uppercase leading-[0.85]">
            Malle-
            <span className="block text-punch-500">Party</span>
          </h2>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-bone/70">
            {PARTY.lead}
          </p>
        </div>
      </Tile>

      {/* Einlass */}
      <Tile delay={50} className="col-span-1 bg-bone p-5 sm:col-span-1 sm:p-6">
        <p className="label text-mute">{PARTY.ticket.doorsLabel}</p>
        <p className="display mt-2 text-[1.9rem] uppercase sm:text-4xl">
          {PARTY.ticket.doorsValue}
        </p>
      </Tile>

      {/* Eintritt */}
      <Tile delay={90} className="col-span-1 bg-punch-500 p-5 text-ink sm:col-span-1 sm:p-6">
        <p className="label text-ink/60">{PARTY.ticket.freeLabel}</p>
        <p className="display mt-2 text-[1.9rem] uppercase sm:text-4xl">
          {PARTY.ticket.freeValue}
        </p>
        <p className="mt-2 text-[0.75rem] font-bold text-ink/70">
          danach {PARTY.admissionPaid}
        </p>
      </Tile>

      {/* DJ – weisse Fläche, weil das Logo eine weisse Sticker-Kontur trägt */}
      <Tile delay={120} className="col-span-2 bg-white px-5 py-7 text-center sm:col-span-2">
        <p className="label text-mute">An den Turntables</p>
        <div className="mt-5">
          <DjLogo />
        </div>
      </Tile>

      {/* Specials */}
      <Tile delay={60} className="col-span-2 bg-ink-2 p-5 text-bone sm:col-span-4 sm:p-7">
        <p className="label text-bone/50">Specials</p>
        <ul className="mt-4 grid grid-cols-3 gap-2.5">
          {PARTY.specials.map((special) => {
            const Art = specialArt[special.icon]
            return (
              <li
                key={special.title}
                className={`flex flex-col items-center gap-2 rounded-2xl px-2 py-4 text-center ring-1 ${TINTS[special.tint]}`}
              >
                <Art className="size-12 sm:size-14" />
                <span className="text-[0.76rem] font-bold leading-tight">
                  {special.title}
                </span>
                <span className="text-[0.66rem] leading-tight text-bone/50">
                  {special.note}
                </span>
              </li>
            )
          })}
        </ul>
      </Tile>

      {/* Party-Pass */}
      <Tile
        delay={60}
        className="col-span-2 flex items-center gap-3 bg-sun-500 px-5 py-4 text-ink sm:col-span-4 sm:px-7"
      >
        <PersonIcon className="size-5 shrink-0" />
        <p className="text-[0.85rem] font-bold leading-snug">
          {PARTY.partyPass}
        </p>
      </Tile>
    </>
  )
}
