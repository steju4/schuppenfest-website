import { NEXT } from '../data/festival.js'

/**
 * Laufband als Trenner zwischen Dank und Termin.
 * Der Inhalt steht zweimal nebeneinander, damit die Schleife nahtlos ist;
 * das zweite Exemplar ist für Screenreader ausgeblendet.
 */
export default function Marquee() {
  const words = [
    'Danke',
    'Save the Date',
    NEXT.dateRangeShort,
    'Im Menninger Schuppen',
  ]

  const strip = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-6 pr-6"
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="flex items-center gap-6">
          <span className="display whitespace-nowrap text-[1.15rem] text-white sm:text-2xl">
            {word}
          </span>
          <span aria-hidden className="text-white/50">
            ◆
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-sunset-500 via-berry-500 to-berry-600 py-2.5">
      <div className="animate-marquee flex w-max">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  )
}
