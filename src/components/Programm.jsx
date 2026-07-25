import { DAYS, EVENT, THEMES } from '../data/festival.js'
import Reveal from './Reveal.jsx'
import { ArrowDownIcon, DiscIcon, MusicIcon, PlateIcon } from './icons.jsx'

/** Icon und Bezeichnung je Art von Programmpunkt. */
const KINDS = {
  music: { icon: MusicIcon, label: 'Musik' },
  food: { icon: PlateIcon, label: 'Bewirtung' },
  party: { icon: DiscIcon, label: 'Party' },
}

function Item({ item, theme, isLast }) {
  const kind = KINDS[item.kind ?? 'music']
  const Icon = kind.icon
  const detail = item.ensemble ?? item.note
  const isFood = item.kind === 'food'

  return (
    <li className="flex gap-3.5">
      {/* Zeitachse */}
      <div aria-hidden className="flex flex-col items-center pt-1.5">
        <span
          className={`size-2.5 shrink-0 rounded-full ${
            isFood ? 'bg-ink/20' : theme.dot
          }`}
        />
        {!isLast && <span className="w-px flex-1 bg-ink/10" />}
      </div>

      <div className={isLast ? '' : 'pb-5'}>
        <p
          className={`text-[0.7rem] font-bold uppercase tracking-[0.1em] ${
            isFood ? 'text-ink-soft' : theme.accentText
          }`}
        >
          {item.time}
        </p>
        <p className="mt-0.5 text-[0.95rem] font-bold leading-snug text-ink">
          {item.title}
        </p>
        {detail && (
          <p className="mt-1 flex items-start gap-1.5 text-xs leading-snug text-ink-soft">
            <Icon className="mt-px size-3.5 shrink-0 text-ink-soft/60" />
            {detail}
          </p>
        )}
      </div>
    </li>
  )
}

function DayCard({ day, index }) {
  const theme = THEMES[day.theme]
  const hasFood = day.items.some((item) => item.kind === 'food')

  return (
    <Reveal
      as="article"
      id={day.id}
      delay={index * 90}
      className="card overflow-hidden scroll-mt-24"
    >
      {/* Kopf mit Datum und Tagesthema */}
      <div className={`flex items-center gap-4 px-5 py-4 ${theme.softBg}`}>
        <div className="shrink-0 text-center leading-none">
          <span
            className={`block text-[0.66rem] font-bold uppercase tracking-[0.16em] ${theme.accentText}`}
          >
            {day.weekdayShort}
          </span>
          <span
            className={`display mt-1 block text-[2.6rem] ${theme.accentText}`}
          >
            {day.dayNumber}
          </span>
          <span className="mt-1 block text-[0.6rem] font-semibold text-ink-soft">
            {day.monthLabel}
          </span>
        </div>

        <span aria-hidden className="h-16 w-px shrink-0 bg-ink/10" />

        <div className="min-w-0">
          <h3 className="display text-[1.6rem] text-ink">{day.title}</h3>
          <p className="mt-1 text-[0.8rem] font-medium leading-snug text-ink-soft">
            {day.subtitle}
          </p>
          {hasFood && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[0.65rem] font-bold text-ink-soft">
              <PlateIcon className="size-3" />
              Bewirtung
            </p>
          )}
        </div>
      </div>

      {/* Programmpunkte */}
      <ol className="px-5 py-5">
        {day.items.map((item, itemIndex) => (
          <Item
            key={item.time + item.title}
            item={item}
            theme={theme}
            isLast={itemIndex === day.items.length - 1}
          />
        ))}
      </ol>

      {/* Der Samstagabend hat einen eigenen Block weiter unten */}
      {day.theme === 'party' && (
        <a
          href="#mallorca"
          className="flex items-center justify-between gap-2 border-t border-ink/8 px-5 py-3.5 text-sm font-bold text-berry-500 transition hover:bg-berry-500/6"
        >
          Alle Infos zur Mallorca Party
          <ArrowDownIcon className="size-4" />
        </a>
      )}
    </Reveal>
  )
}

export default function Programm() {
  return (
    <section id="programm" className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
            {EVENT.claim}
          </p>
          <h2 className="display mt-2 text-[2.4rem] text-ink sm:text-5xl">
            Das Programm
          </h2>
        </Reveal>

        <div className="mt-7 flex flex-col gap-4">
          {DAYS.map((day, index) => (
            <DayCard key={day.id} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
