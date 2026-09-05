import { DAYS, EVENT, THEMES, VENUE } from '../data/festival.js'
import Reveal from './Reveal.jsx'
import { ExternalIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-32 pt-16 text-paper sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 size-[24rem] -translate-x-1/2 rounded-full bg-coral-500/20 blur-[90px]" />
        <div className="grain absolute inset-0 opacity-[0.07]" />
      </div>

      <Reveal className="relative mx-auto max-w-xl">
        <p className="serif text-[2.4rem] leading-[1.05] sm:text-[3.2rem]">
          Die Musikkapelle Menningen
          <span className="block italic text-gold-400">freut sich auf Euch!</span>
        </p>

        {/* Die drei Tage nochmal in ihren Farben */}
        <ul className="mt-9 grid grid-cols-3 gap-2">
          {DAYS.map((day) => {
            const theme = THEMES[day.theme]
            return (
              <li key={day.id}>
                <a
                  href={`#${day.id}`}
                  className={`block rounded-xl px-3 py-2.5 transition hover:brightness-125 ${theme.panel}`}
                >
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-paper/60">
                    {day.weekdayShort} {day.dayNumber}.09.
                  </span>
                  <span className="mt-0.5 block hyphens-auto break-words text-[0.74rem] font-bold">
                    {day.shortTitle}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 border-t border-paper/15 pt-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-paper/50">Veranstalter</p>
              <a
                href={EVENT.organizer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1.5 font-bold transition hover:text-gold-400"
              >
                {EVENT.organizer.name}
                <ExternalIcon className="size-3.5" />
              </a>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                {VENUE.name}, {VENUE.street}
                <br />
                {VENUE.city}
              </p>
            </div>
            <img
              src="/wappen-menningen.png"
              alt="Wappen von Menningen"
              width="320"
              height="380"
              loading="lazy"
              className="h-16 w-auto shrink-0"
            />
          </div>

          <p className="mt-8 text-xs text-paper/40">
            Änderungen im Programm vorbehalten.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
