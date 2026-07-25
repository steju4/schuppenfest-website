import { useState } from 'react'
import { TRAVEL, VENUE } from '../data/festival.js'
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
        className="h-56 w-full border-0 sm:h-72"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-56 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand-100 via-sand-50 to-lagoon-400/10 transition sm:h-72"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-ink/5">
        <PinIcon className="size-6 text-berry-500" />
      </span>
      <span className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-sand-50 transition group-hover:bg-berry-500">
        Karte laden
      </span>
      <span className="px-8 text-center text-[0.7rem] leading-relaxed text-ink-soft">
        Beim Laden der Karte werden Daten an Google Maps übertragen.
      </span>
    </button>
  )
}

export default function Location() {
  return (
    <section id="anfahrt" className="px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lagoon-600">
          So findest du uns
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Anfahrt
        </h2>

        {/* Adresse */}
        <div className="card mt-6 overflow-hidden">
          <div className="flex items-start gap-3.5 p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-berry-500/10">
              <PinIcon className="size-5 text-berry-500" />
            </span>
            <address className="text-sm not-italic leading-relaxed">
              <span className="block text-base font-extrabold tracking-tight text-ink">
                {VENUE.name}
              </span>
              <span className="block font-semibold text-ink">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink ring-1 ring-ink/10 transition hover:bg-sand-100 active:scale-[0.98]"
            >
              In Google Maps öffnen
              <ExternalIcon className="size-4 text-ink-soft" />
            </a>
          </div>
        </div>

        {/* Biberbahn */}
        <div className="card mt-4 p-5">
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

          <p className="mt-3.5 flex items-start gap-2.5 rounded-2xl bg-sand-100/80 p-3.5 text-[0.8rem] font-medium leading-relaxed text-ink-soft">
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
        </div>
      </div>
    </section>
  )
}
