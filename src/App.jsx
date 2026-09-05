import Facts from './components/Facts.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import PartyNight from './components/PartyNight.jsx'
import Programm from './components/Programm.jsx'
import StickyNav from './components/StickyNav.jsx'

export default function App() {
  return (
    <>
      <StickyNav />
      <Hero />
      <main>
        {/* Erst das ganze Fest (drei Tage), dann der Samstagabend im Detail */}
        <Programm />
        <PartyNight />
        <Facts />
        <Location />
      </main>
      <Footer />
    </>
  )
}
