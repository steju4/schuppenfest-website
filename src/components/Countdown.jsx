import { useEffect, useState } from 'react'
import { EVENT } from '../data/festival.js'

const START = new Date(EVENT.startsAt).getTime()
/** Das Fest endet am Montagabend – bis dahin läuft es. */
const END = new Date('2026-09-21T23:59:00+02:00').getTime()

function remaining() {
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

/** Zählt die Zeit bis zum Festbeginn herunter. */
export default function Countdown() {
  const [time, setTime] = useState(remaining)

  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 30_000)
    return () => clearInterval(id)
  }, [])

  if (time.over) return null

  if (time.running) {
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
