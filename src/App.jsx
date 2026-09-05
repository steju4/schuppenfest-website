import { Analytics } from '@vercel/analytics/react'
import Facts from './components/Facts.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import Marquee from './components/Marquee.jsx'
import PartyNight from './components/PartyNight.jsx'
import Programm from './components/Programm.jsx'
import StickyNav from './components/StickyNav.jsx'

export default function App() {
  return (
    <>
      <StickyNav />
      <Hero />
      <Marquee />
      <main>
        {/* Erst das ganze Fest (drei Tage), dann der Samstagabend im Detail */}
        <Programm />
        <PartyNight />
        <Facts />
        <Location />
      </main>
      <Marquee variant="calm" />
      <Footer />
      {/* Vercel Web Analytics: zählt Besuche und Seitenaufrufe.
          Die Seite ist mit Vite gebaut, deshalb der /react-Einstiegspunkt –
          der /next-Pfad aus der Vercel-Anleitung passt hier nicht. */}
      <Analytics />
    </>
  )
}
