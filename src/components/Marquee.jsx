import { DAYS, EVENT } from '../data/festival.js'

/** Schmale Laufband-Kachel als Taktgeber zwischen den Blöcken. */
export default function Marquee() {
  const words = [
    EVENT.dateRangeShort,
    ...DAYS.map((day) => day.title),
    'Menninger Schuppen',
    'Eintritt frei bis 20:30',
  ]

  const strip = (hidden) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="flex items-center">
          <span className="display whitespace-nowrap px-4 text-[0.95rem] uppercase">
            {word}
          </span>
          <span aria-hidden className="text-punch-500">
            ●
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="tile col-span-2 bg-ink py-2.5 text-bone sm:col-span-4">
      <div className="animate-marquee flex w-max">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  )
}
