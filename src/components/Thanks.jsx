import { PAST, RECAP, THANKS, THEMES } from '../data/festival.js'
import DjLogo from './DjLogo.jsx'
import Reveal from './Reveal.jsx'
import { DiscIcon, HeartIcon, MusicIcon, PeopleIcon, SparkIcon } from './icons.jsx'

const ICONS = {
  people: PeopleIcon,
  music: MusicIcon,
  disc: DiscIcon,
  heart: HeartIcon,
}

/** Farbe des Icon-Kreises je Dank-Karte. */
const BADGES = {
  berry: 'bg-berry-500/12 text-berry-500',
  brass: 'bg-brass-400/16 text-brass-600',
  sunset: 'bg-sunset-500/14 text-sunset-500',
  lagoon: 'bg-lagoon-500/12 text-lagoon-600',
}

export default function Thanks() {
  return (
    <section id="danke" className="relative overflow-hidden bg-sand-50 px-5 py-16">
      <div
        aria-hidden
        className="dots pointer-events-none absolute inset-0 text-ink/[0.06]"
      />

      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-soft">
            <SparkIcon className="size-4 text-sunset-500" />
            Rückblick {PAST.year}
          </p>
          <h2 className="display mt-3 text-[2.1rem] leading-[0.95] text-ink sm:text-5xl">
            Drei Tage,
            <br />
            die bleiben
          </h2>
        </Reveal>

        {/* Was gelaufen ist – kurz, als farbige Marken */}
        <Reveal delay={80}>
          <ul className="mt-7 grid grid-cols-3 gap-2">
            {RECAP.map((day) => {
              const theme = THEMES[day.theme]
              return (
                <li
                  key={day.title}
                  className={`overflow-hidden rounded-2xl ${theme.headerBg} p-3 text-white`}
                >
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/70">
                    {day.day}
                  </span>
                  <span className="mt-1 block hyphens-auto break-words text-[0.82rem] font-extrabold leading-tight">
                    {day.title}
                  </span>
                  <span className="mt-1 block text-[0.66rem] leading-snug text-white/75">
                    {day.note}
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Der eigentliche Dank */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {THANKS.map((item, index) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal as="li" key={item.title} delay={index * 70} className="card p-5">
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-2xl ${BADGES[item.color]}`}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="display mt-3.5 text-xl text-ink">Danke {item.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </Reveal>
            )
          })}
        </ul>

        {/* Kleiner Gruss an den Samstagabend 2026 */}
        <Reveal delay={60} className="card mt-3 px-5 py-6 text-center">
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
            Samstagabend {PAST.year}
          </p>
          <div className="mt-4">
            <DjLogo />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
