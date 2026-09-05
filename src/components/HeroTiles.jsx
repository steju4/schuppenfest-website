import { EVENT, VENUE } from '../data/festival.js'
import FestStatus from './FestStatus.jsx'
import QuickActions from './QuickActions.jsx'
import Tile from './Tile.jsx'
import { ArrowDownIcon, PinIcon } from './icons.jsx'

/** Kopfbereich: Titelkachel, Countdown, Ort, Aktionen. */
export default function HeroTiles() {
  return (
    <>
      {/* Titel */}
      <Tile
        as="header"
        id="top"
        className="col-span-2 bg-ink px-5 pb-6 pt-5 text-bone sm:col-span-4 sm:px-8 sm:pb-10 sm:pt-8"
      >
        <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-punch-500/25 blur-[70px]"
        />

        <div className="relative flex items-center gap-2.5">
          <img
            src="/wappen-menningen.png"
            alt=""
            width="320"
            height="380"
            className="h-7 w-auto"
          />
          <p className="label text-bone/55">{EVENT.organizer.name}</p>
        </div>

        <h1 className="display relative mt-7 text-[clamp(2.3rem,10.4vw,6rem)] uppercase">
          <span className="block">Menninger</span>
          <span className="block text-punch-500">Schuppenfest</span>
        </h1>

        <p className="relative mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="display rounded-full bg-bone px-3.5 py-1.5 text-lg uppercase text-ink sm:text-xl">
            {EVENT.dateRange}
          </span>
        </p>
      </Tile>

      {/* Countdown */}
      <Tile
        delay={60}
        className="col-span-1 flex flex-col justify-center bg-punch-500 p-5 text-ink sm:col-span-2 sm:p-7"
      >
        <FestStatus />
      </Tile>

      {/* Ort */}
      <Tile
        delay={110}
        className="col-span-1 flex flex-col justify-between bg-bone-dim p-5 sm:col-span-2 sm:p-7"
      >
        <div>
          <p className="label text-mute">Wo</p>
          <p className="display mt-2 text-[1.35rem] uppercase sm:text-3xl">
            {VENUE.name}
          </p>
          <p className="mt-1.5 text-[0.82rem] leading-snug text-mute">
            {VENUE.street}
            <span className="block">{VENUE.city}</span>
          </p>
        </div>
        <a
          href="#anfahrt"
          className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[0.75rem] font-bold text-bone transition hover:bg-ink-2"
        >
          <PinIcon className="size-3.5" />
          Anfahrt
        </a>
      </Tile>

      {/* Aktionen */}
      <Tile
        delay={150}
        className="col-span-2 flex flex-wrap items-center justify-between gap-4 bg-bone-dim px-5 py-4 sm:col-span-4 sm:px-7"
      >
        <a
          href="#programm"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-bone transition hover:bg-ink-2 active:scale-[0.98]"
        >
          Zum Programm
          <ArrowDownIcon className="animate-nudge size-4" />
        </a>
        <QuickActions />
      </Tile>
    </>
  )
}
