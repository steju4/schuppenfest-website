import { EVENT, HIGHLIGHT, VENUE } from '../data/festival.js'
import { ArrowDownIcon, ClockIcon, PinIcon, TicketIcon } from './icons.jsx'

function InfoTile({ icon: Icon, label, children }) {
  return (
    <div className="card flex items-start gap-3 p-3.5 text-left">
      <Icon className="mt-0.5 size-5 shrink-0 text-berry-500" />
      <div className="min-w-0">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">
          {children}
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Dezente Sonnenuntergangs-Stimmung, rein per CSS-Gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sand-100 via-sand-50 to-sand-50" />
        <div className="absolute -top-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-sunset-400/25 blur-3xl" />
        <div className="absolute -right-24 top-24 size-72 rounded-full bg-berry-400/20 blur-3xl" />
        <div className="absolute -left-20 top-72 size-64 rounded-full bg-lagoon-400/15 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-14 text-center sm:py-20">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lagoon-600">
          {EVENT.organizer.name}
        </p>

        <h1 className="mt-4">
          <span className="block text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {EVENT.title}
          </span>
          <span className="text-sunset-gradient mt-1 block text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {EVENT.subtitle}
          </span>
        </h1>

        <div className="mx-auto mt-5 flex w-full max-w-[17rem] flex-col items-center gap-0.5 rounded-3xl bg-ink px-5 py-3 text-sm font-bold text-sand-50 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:rounded-full sm:py-2.5 sm:text-base">
          <span>
            {HIGHLIGHT.day}, {HIGHLIGHT.date}
          </span>
          <span
            aria-hidden
            className="hidden h-4 w-px bg-sand-200/30 sm:block"
          />
          <span className="text-sunset-400">Einlass {HIGHLIGHT.doorsOpen}</span>
        </div>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          <InfoTile icon={TicketIcon} label="Eintritt">
            {HIGHLIGHT.admissionFree}, danach {HIGHLIGHT.admissionPaid}
          </InfoTile>
          <InfoTile icon={PinIcon} label="Ort">
            {VENUE.name}, {VENUE.street}
            <span className="block font-normal text-ink-soft">
              {VENUE.city}
            </span>
          </InfoTile>
        </div>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#programm"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-berry-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-berry-500/25 transition hover:bg-berry-600 active:scale-[0.98]"
          >
            Programm ansehen
            <ArrowDownIcon className="size-4" />
          </a>
          <a
            href="#anfahrt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink ring-1 ring-ink/10 transition hover:bg-sand-100 active:scale-[0.98]"
          >
            <PinIcon className="size-4 text-lagoon-500" />
            Anfahrt
          </a>
        </div>

        <p className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-ink-soft">
          <ClockIcon className="size-4 text-lagoon-500" />
          Drei Tage Fest: {EVENT.dateRange}
        </p>
      </div>
    </header>
  )
}
