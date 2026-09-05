import Dock from './components/Dock.jsx'
import Facts from './components/Facts.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import PartyNight from './components/PartyNight.jsx'
import Programm from './components/Programm.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <main>
        {/* Erst das ganze Fest (drei Tage), dann der Samstagabend im Detail */}
        <Programm />
        <PartyNight />
        <Facts />
        <Location />
      </main>
      <Footer />
      <Dock />
    </>
  )
}
