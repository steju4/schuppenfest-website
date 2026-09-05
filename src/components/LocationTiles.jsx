import { useState } from 'react'
import { TRAVEL, VENUE } from '../data/festival.js'
import Tile from './Tile.jsx'
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
      className="group relative flex h-56 w-full flex-col items-center justify-center gap-3 bg-bone-dim sm:h-72"
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,16,18,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,16,18,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <span className="relative flex size-12 items-center justify-center rounded-full bg-punch-500 text-ink">
        <PinIcon className="size-6" />
      </span>
      <span className="relative rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-bone transition group-hover:bg-punch-500 group-hover:text-ink">
        Karte laden
      </span>
      <span className="relative max-w-[16rem] px-4 text-center text-[0.68rem] leading-relaxed text-mute">
        Beim Laden der Karte werden Daten an Google Maps übertragen.
      </span>
    </button>
  )
}

export default function LocationTiles() {
  return (
    <>
      <Tile
        as="section"
        id="anfahrt"
        className="col-span-2 scroll-mt-4 bg-ink px-5 py-6 text-bone sm:col-span-4 sm:px-8 sm:py-8"
      >
        <p className="label text-bone/50">So findest du uns</p>
        <h2 className="display mt-2 text-[2.2rem] uppercase sm:text-5xl">
          Anfahrt
        </h2>
        <address className="mt-5 not-italic">
          <p className="display text-[1.4rem] uppercase sm:text-2xl">
            {VENUE.name}
          </p>
          <p className="mt-1.5 text-sm text-bone/65">
            {VENUE.street}
            <span className="block">{VENUE.city}</span>
            <span className="block">{VENUE.region}</span>
          </p>
        </address>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href={routeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-punch-500 px-5 py-3 text-sm font-bold text-ink transition hover:bg-punch-400 active:scale-[0.98]"
          >
            Route starten
            <ExternalIcon className="size-4" />
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-5 py-3 text-sm font-bold text-bone transition hover:bg-bone/10 active:scale-[0.98]"
          >
            In Google Maps öffnen
            <ExternalIcon className="size-4" />
          </a>
        </div>
      </Tile>

      {/* Karte */}
      <Tile delay={60} className="col-span-2 sm:col-span-2">
        <Map />
      </Tile>

      {/* Biberbahn */}
      <Tile delay={90} className="col-span-2 bg-jade-400 p-5 text-ink sm:col-span-2 sm:p-6">
        <TrainIcon className="size-6" />
        <h3 className="display mt-3 text-[1.3rem] uppercase">
          {TRAVEL.biberbahn.title}
        </h3>
        <p className="mt-2 text-[0.82rem] leading-snug text-ink/75">
          {TRAVEL.biberbahn.text}
        </p>
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-ink/10 p-3 text-[0.75rem] leading-snug">
          <InfoIcon className="mt-px size-4 shrink-0" />
          {TRAVEL.biberbahn.hint}
        </p>
        <a
          href={TRAVEL.biberbahn.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-bold underline decoration-ink/40 decoration-2 underline-offset-4"
        >
          {TRAVEL.biberbahn.linkLabel}
          <ExternalIcon className="size-3.5" />
        </a>
      </Tile>
    </>
  )
}
