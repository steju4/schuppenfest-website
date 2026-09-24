import { Analytics } from '@vercel/analytics/react'
import Countdown from './components/Countdown.jsx'
import Danke from './components/Danke.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'

export default function App() {
  return (
    <>
      {/* Erst der Termin 2027, dann der Dank fürs Fest 2026 */}
      <Hero />
      <Marquee />
      <main>
        <Countdown />
        <Danke />
      </main>
      <Footer />
      {/* Vercel Web Analytics: zählt Besuche und Seitenaufrufe.
          Die Seite ist mit Vite gebaut, deshalb der /react-Einstiegspunkt –
          der /next-Pfad aus der Vercel-Anleitung passt hier nicht. */}
      <Analytics />
    </>
  )
}
