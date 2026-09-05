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
        className="h-60 w-full border-0 sm:h-72"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-60 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand-100 via-sand-50 to-lagoon-400/12 sm:h-72"
    >
      {/* angedeutetes Kartenraster */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(29,19,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,19,48,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <span className="relative flex size-12 items-center justify-center rounded-full bg-berry-500 text-white shadow-lg shadow-berry-500/30">
        <PinIcon className="size-6" />
      </span>
      <span className="relative rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-sand-50 transition group-hover:bg-berry-500">
        Karte laden
      </span>
      <span className="relative px-10 text-center text-[0.68rem] leading-relaxed text-ink-soft">
        Beim Laden der Karte werden Daten an Google Maps übertragen.
      </span>
    </button>
  )
}

export default function Location() {
  return (
    <section id="anfahrt" className="relative overflow-hidden px-5 py-14 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dots absolute inset-0 text-ink/[0.045]" />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-100/70 via-transparent to-sand-100/50" />
      </div>
      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
            So findest du uns
          </p>
          <h2 className="display mt-2 text-[2.4rem] text-ink sm:text-5xl">
            Anfahrt
          </h2>
        </Reveal>

        {/* Adresse und Karte */}
        <Reveal delay={70} className="card mt-7 overflow-hidden">
          <div className="flex items-start gap-3.5 p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-berry-500/10">
              <PinIcon className="size-5 text-berry-500" />
            </span>
            <address className="text-sm not-italic leading-relaxed">
              <span className="display block text-xl text-ink">
                {VENUE.name}
              </span>
              <span className="mt-1 block font-semibold text-ink">
                {VENUE.street}
              </span>
              <span className="block text-ink-soft">{VENUE.city}</span>
              <span className="block text-ink-soft">{VENUE.region}</span>
            </address>
          </div>

          <Map />

          <div className="grid gap-2.5 p-4 sm:grid-cols-2">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-berry-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-berry-600 active:scale-[0.98]"
            >
              Route starten
              <ExternalIcon className="size-4" />
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sand-100 px-5 py-3 text-sm font-bold text-ink transition hover:bg-sand-200 active:scale-[0.98]"
            >
              In Google Maps öffnen
              <ExternalIcon className="size-4 text-ink-soft" />
            </a>
          </div>
        </Reveal>

        {/* Biberbahn */}
        <Reveal delay={70} className="card mt-4 p-5">
          <div className="flex items-start gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lagoon-500/12">
              <TrainIcon className="size-5 text-lagoon-600" />
            </span>
            <div>
              <h3 className="text-base font-extrabold tracking-tight text-ink">
                {TRAVEL.biberbahn.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {TRAVEL.biberbahn.text}
              </p>
            </div>
          </div>

          <p className="mt-3.5 flex items-start gap-2.5 rounded-2xl bg-sand-100 p-3.5 text-[0.8rem] font-medium leading-relaxed text-ink-soft">
            <InfoIcon className="mt-px size-4 shrink-0 text-lagoon-600" />
            {TRAVEL.biberbahn.hint}
          </p>

          <a
            href={TRAVEL.biberbahn.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-lagoon-600 underline decoration-lagoon-400/40 decoration-2 underline-offset-4 transition hover:decoration-lagoon-500"
          >
            {TRAVEL.biberbahn.linkLabel}
            <ExternalIcon className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
