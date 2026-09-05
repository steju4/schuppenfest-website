import Dock from './components/Dock.jsx'
import FactTiles from './components/FactTiles.jsx'
import FooterTiles from './components/FooterTiles.jsx'
import HeroTiles from './components/HeroTiles.jsx'
import LocationTiles from './components/LocationTiles.jsx'
import Marquee from './components/Marquee.jsx'
import PartyTiles from './components/PartyTiles.jsx'
import ProgrammTiles from './components/ProgrammTiles.jsx'

/**
 * Die ganze Seite ist ein einziges Kachelraster.
 * Jede Komponente liefert nur ihre Kacheln hinein – dadurch laufen die
 * Bereiche ineinander, statt als getrennte Abschnitte übereinanderzuliegen.
 */
export default function App() {
  return (
    <>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2.5 px-2.5 py-2.5 pb-24 sm:grid-cols-4 sm:gap-3 sm:px-3 sm:py-3 sm:pb-28">
        <HeroTiles />
        <Marquee />
        <ProgrammTiles />
        <PartyTiles />
        <FactTiles />
        <LocationTiles />
        <FooterTiles />
      </div>
      <Dock />
    </>
  )
}
