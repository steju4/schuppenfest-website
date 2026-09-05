import { useEffect, useState } from 'react'
import { DAYS, EVENT, THEMES } from '../data/festival.js'
import useToday from '../lib/useToday.js'

const START = new Date(EVENT.startsAt).getTime()
const END = new Date(EVENT.endsAt).getTime()

function phase() {
  const now = Date.now()
  if (now >= END) return { over: true }
  if (now >= START) return { running: true }

  const diff = START - now
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  }
}

function Unit({ value, label }) {
  return (
    <div className="flex min-w-[3.6rem] flex-col items-center rounded-xl border border-white/12 bg-white/8 px-3 py-2">
      <span className="display text-2xl leading-none text-sand-50">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-sand-200/60">
        {label}
      </span>
    </div>
  )
}

/** Was heute läuft – während des Fests wertvoller als ein Countdown. */
function TodayPanel({ day }) {
  const theme = THEMES[day.theme]

  return (
    <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
      <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-sunset-300">
        <span className="size-1.5 animate-pulse rounded-full bg-sunset-400" />
        Heute · {day.weekday}
      </p>
      <p className="display mt-2 text-2xl text-sand-50">{day.title}</p>

      <ul className="mt-3 space-y-1.5">
        {day.items.slice(0, 3).map((item) => (
          <li
            key={item.time + item.title}
            className="flex gap-2.5 text-[0.8rem] leading-snug"
          >
            <span
              className={`shrink-0 font-bold ${theme.chipLabel}`}
              style={{ minWidth: '5.5rem' }}
            >
              {item.time}
            </span>
            <span className="text-sand-200/85">{item.title}</span>
          </li>
        ))}
      </ul>

      <a
        href={`#${day.id}`}
        className="mt-3 inline-block text-[0.78rem] font-bold text-sunset-300 underline decoration-sunset-300/40 decoration-2 underline-offset-4"
      >
        Ganzes Tagesprogramm
      </a>
    </div>
  )
}

/**
 * Zeigt vor dem Fest den Countdown und während des Fests den heutigen Tag.
 */
export default function FestStatus() {
  const [time, setTime] = useState(phase)
  const today = useToday()

  useEffect(() => {
    const id = setInterval(() => setTime(phase()), 30_000)
    return () => clearInterval(id)
  }, [])

  if (time.over) return null

  if (time.running) {
    const day = DAYS.find((entry) => entry.date === today)
    if (day) return <TodayPanel day={day} />

    return (
      <p className="inline-flex items-center gap-2 rounded-full border border-sunset-300/30 bg-sunset-500/15 px-4 py-2 text-sm font-bold text-sunset-300">
        <span className="size-2 animate-pulse rounded-full bg-sunset-400" />
        Das Schuppenfest läuft gerade!
      </p>
    )
  }

  return (
    <div>
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-sand-200/55">
        Noch bis zum Festbeginn
      </p>
      <div className="mt-2 flex gap-2">
        <Unit value={time.days} label="Tage" />
        <Unit value={time.hours} label="Std" />
        <Unit value={time.minutes} label="Min" />
      </div>
    </div>
  )
}
