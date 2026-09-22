import { Analytics } from '@vercel/analytics/react'
import Danke from './components/Danke.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'
import SaveTheDate from './components/SaveTheDate.jsx'

export default function App() {
  return (
    <>
      <Danke />
      <Marquee />
      <main>
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
