import { useState } from 'react'
import { TRAVEL, VENUE } from '../data/festival.js'
import Reveal from './Reveal.jsx'
import { ExternalIcon, InfoIcon, PinIcon, TrainIcon } from './icons.jsx'

const coords = `${VENUE.lat},${VENUE.lng}`
const embedUrl = `https://www.google.com/maps?q=${coords}&hl=de&z=16&output=embed`
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`
const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}`

/**
 * Karte wird erst auf Klick eingebettet: spart beim ersten Laden einige
 * hundert Kilobyte und es geht keine Anfrage an Google, bevor der Gast
 * die Karte wirklich sehen will.
 */
function Map() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        title={`Karte: ${VENUE.name}, ${VENUE.street}, ${VENUE.city}`}
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-64 w-full border-0 sm:h-80"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-64 w-full flex-col items-center justify-center gap-3 bg-paper-deep sm:h-80"
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(22,24,28,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(22,24,28,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <span className="relative flex size-14 items-center justify-center rounded-full bg-coral-500 text-white shadow-lg shadow-coral-500/30">
        <PinIcon className="size-7" />
      </span>
      <span className="relative rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition group-hover:bg-coral-500">
        Karte laden
      </span>
      <span className="relative max-w-xs px-6 text-center text-[0.7rem] leading-relaxed text-ink-soft">
        Beim Laden der Karte werden Daten an Google Maps übertragen.
      </span>
    </button>
  )
}

export default function Location() {
  return (
    <section
      id="anfahrt"
      className="relative overflow-hidden bg-paper px-6 py-16 sm:py-20"
    >
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <p className="eyebrow text-ink-faint">So findest du uns</p>
          <h2 className="serif mt-3 text-[2.6rem] text-ink sm:text-[3.4rem]">
            Die <span className="italic text-coral-500">Anfahrt</span>
          </h2>
        </Reveal>

        {/* Adresse als gesetzter Block */}
        <Reveal delay={70} className="mt-8">
          <div className="rule" />
          <address className="flex items-start justify-between gap-6 py-5 not-italic">
            <div>
              <p className="serif text-2xl text-ink">{VENUE.name}</p>
              <p className="mt-1 text-sm font-semibold text-ink">
                {VENUE.street}
              </p>
              <p className="text-sm text-ink-soft">{VENUE.city}</p>
              <p className="text-sm text-ink-soft">{VENUE.region}</p>
            </div>
            <PinIcon className="mt-1 size-6 shrink-0 text-coral-500" />
          </address>
          <div className="rule" />
        </Reveal>

        <Reveal delay={70} className="mt-6 overflow-hidden rounded-3xl ring-1 ring-ink/10">
          <Map />
          <div className="grid gap-2.5 bg-white p-4 sm:grid-cols-2">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-ink/85 active:scale-[0.98]"
            >
              Route starten
              <ExternalIcon className="size-4" />
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink transition hover:bg-paper active:scale-[0.98]"
            >
              In Google Maps öffnen
              <ExternalIcon className="size-4 text-ink-soft" />
            </a>
          </div>
        </Reveal>

        {/* Biberbahn */}
        <Reveal delay={70} className="mt-8">
          <div className="rule" />
          <div className="py-5">
            <div className="flex items-start gap-3.5">
              <TrainIcon className="mt-0.5 size-6 shrink-0 text-forest-500" />
              <div>
                <h3 className="text-[1.05rem] font-extrabold tracking-tight text-ink">
                  {TRAVEL.biberbahn.title}
                </h3>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-soft">
                  {TRAVEL.biberbahn.text}
                </p>
              </div>
            </div>

            <p className="mt-4 flex items-start gap-2.5 rounded-2xl bg-paper-deep p-3.5 text-[0.8rem] leading-relaxed text-ink-soft">
              <InfoIcon className="mt-px size-4 shrink-0 text-forest-500" />
              {TRAVEL.biberbahn.hint}
            </p>

            <a
              href={TRAVEL.biberbahn.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-forest-600 underline decoration-forest-400/50 decoration-2 underline-offset-4 transition hover:decoration-forest-500"
            >
              {TRAVEL.biberbahn.linkLabel}
              <ExternalIcon className="size-3.5" />
            </a>
          </div>
          <div className="rule" />
        </Reveal>
      </div>
    </section>
  )
}
