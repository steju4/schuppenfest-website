import { useEffect, useRef, useState } from 'react'
import { DAYS, EVENT } from '../data/festival.js'
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
    <div>
      <span className="display block text-[clamp(1.7rem,7.6vw,3.75rem)] tabular-nums">
        {String(shown).padStart(2, '0')}
      </span>
      <span className="label text-ink/55">{label}</span>
    </div>
  )
}

/** Vor dem Fest der Countdown, während des Fests der heutige Tag. */
export default function FestStatus() {
  const [time, setTime] = useState(phase)
  const today = useToday()

  useEffect(() => {
    const id = setInterval(() => setTime(phase()), 30_000)
    return () => clearInterval(id)
  }, [])

  if (time.over) {
    return (
      <p className="display text-2xl uppercase">
        Bis zum nächsten Mal!
      </p>
    )
  }

  if (time.running) {
    const day = DAYS.find((entry) => entry.date === today)

    return (
      <div>
        <p className="label flex items-center gap-2 text-ink/60">
          <span className="size-1.5 animate-pulse rounded-full bg-ink" />
          Heute
        </p>
        <p className="display mt-2 text-[clamp(1.4rem,6vw,2.25rem)] uppercase leading-[0.9]">
          {day ? day.title : 'Das Fest läuft'}
        </p>
        {day && (
          <a
            href={`#${day.id}`}
            className="mt-3 inline-block text-[0.78rem] font-bold underline decoration-ink/40 decoration-2 underline-offset-4"
          >
            Tagesprogramm
          </a>
        )}
      </div>
    )
  }

  return (
    <div>
      <p className="label text-ink/60">Noch</p>
      <div className="mt-2 flex gap-3 sm:gap-7">
        <Unit value={time.days} label="Tage" />
        <Unit value={time.hours} label="Std" />
        <Unit value={time.minutes} label="Min" />
      </div>
    </div>
  )
}
