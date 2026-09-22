import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import SaveTheDate from './components/SaveTheDate.jsx'
import Thanks from './components/Thanks.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <Marquee variant="thanks" />
      <main>
        {/* Erst der Dank fürs Fest 2026, dann der Termin für 2027 */}
        <Thanks />
        <Marquee variant="save" />
        <SaveTheDate />
      </main>
      <Footer />
      {/* Vercel Web Analytics: zählt Besuche und Seitenaufrufe.
          Die Seite ist mit Vite gebaut, deshalb der /react-Einstiegspunkt –
          der /next-Pfad aus der Vercel-Anleitung passt hier nicht. */}
      <Analytics />
    </>
  )
}
