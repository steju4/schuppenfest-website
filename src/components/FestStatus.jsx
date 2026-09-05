import { useEffect, useRef, useState } from 'react'
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

/** Zählt beim ersten Anzeigen von 0 auf den Wert hoch. */
function useCountUp(target) {
  const [shown, setShown] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    if (done.current) {
      setShown(target)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      done.current = true
      setShown(target)
      return
    }

    const duration = 800
    const start = performance.now()
    let frame

    function step(now) {
      const t = Math.min(1, (now - start) / duration)
      setShown(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(step)
      else done.current = true
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return shown
}

function Unit({ value, label }) {
  const shown = useCountUp(value)

  return (
    <div className="flex items-baseline gap-1.5">
      <span className="serif text-4xl tabular-nums text-ink sm:text-5xl">
        {String(shown).padStart(2, '0')}
      </span>
      <span className="eyebrow text-ink-faint">{label}</span>
    </div>
  )
}

/** Was heute läuft – während des Fests wertvoller als ein Countdown. */
function TodayPanel({ day }) {
  const theme = THEMES[day.theme]

  return (
    <div className={`rounded-2xl px-5 py-4 text-paper ${theme.panel}`}>
      <p className="eyebrow flex items-center gap-2 text-paper/70">
        <span className="size-1.5 animate-pulse rounded-full bg-paper" />
        Heute · {day.weekday}
      </p>
      <p className="serif mt-2 text-3xl italic">{day.title}</p>

      <ul className="mt-3 space-y-1.5">
        {day.items.slice(0, 3).map((item) => (
          <li key={item.time + item.title} className="flex gap-3 text-[0.82rem]">
            <span className="w-24 shrink-0 font-semibold text-paper/60">
              {item.time}
            </span>
            <span className="text-paper/95">{item.title}</span>
          </li>
        ))}
      </ul>

      <a
        href={`#${day.id}`}
        className="mt-3 inline-block text-[0.78rem] font-bold underline decoration-paper/40 decoration-2 underline-offset-4"
      >
        Ganzes Tagesprogramm
      </a>
    </div>
  )
}

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
      <p className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-4 py-2 text-sm font-bold text-white">
        <span className="size-2 animate-pulse rounded-full bg-white" />
        Das Schuppenfest läuft gerade!
      </p>
    )
  }

  return (
    <div>
      <p className="eyebrow text-ink-faint">Noch bis zum Festbeginn</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <Unit value={time.days} label="Tage" />
        <Unit value={time.hours} label="Std" />
        <Unit value={time.minutes} label="Min" />
      </div>
    </div>
  )
}
