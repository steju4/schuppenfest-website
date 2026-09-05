import { DAYS, EVENT, THEMES, VENUE } from '../data/festival.js'
import Tile from './Tile.jsx'
import { ExternalIcon } from './icons.jsx'

export default function FooterTiles() {
  return (
    <>
      {/* Schlusssatz */}
      <Tile className="col-span-2 bg-punch-500 px-5 py-8 text-ink sm:col-span-4 sm:px-8 sm:py-12">
        <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.08]" />
        <p className="display relative text-[clamp(1.75rem,7.6vw,3.4rem)] uppercase leading-[0.9]">
          Die Musikkapelle
          <span className="block">Menningen freut</span>
          <span className="block">sich auf Euch!</span>
        </p>
      </Tile>

      {/* Die drei Tage nochmal */}
      {DAYS.map((day) => {
        const theme = THEMES[day.theme]
        return (
          <Tile
            key={day.id}
            as="a"
            href={`#${day.id}`}
            className={`col-span-2 block px-4 py-3.5 transition hover:brightness-105 sm:col-span-1 ${theme.fill} ${theme.on}`}
          >
            <span className="label text-ink/60">
              {day.weekdayShort} {day.dayNumber}.09.
            </span>
            <span className="display mt-1 block text-[1.05rem] uppercase leading-tight">
              {day.shortTitle}
            </span>
          </Tile>
        )
      })}

      {/* Veranstalter */}
      <Tile
        as="footer"
        className="col-span-2 flex items-start justify-between gap-5 bg-ink px-5 py-6 text-bone sm:col-span-1 sm:px-6"
      >
        <div>
          <p className="label text-bone/45">Veranstalter</p>
          <a
            href={EVENT.organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1.5 text-[0.88rem] font-bold transition hover:text-punch-400"
          >
            {EVENT.organizer.name}
            <ExternalIcon className="size-3.5" />
          </a>
          <p className="mt-3 text-[0.76rem] leading-snug text-bone/55">
            {VENUE.name}, {VENUE.street}
            <br />
            {VENUE.city}
          </p>
          <p className="mt-4 text-[0.68rem] text-bone/35">
            Änderungen im Programm vorbehalten.
          </p>
        </div>
        <img
          src="/wappen-menningen.png"
          alt="Wappen von Menningen"
          width="320"
          height="380"
          loading="lazy"
          className="h-12 w-auto shrink-0"
        />
      </Tile>
    </>
  )
}
