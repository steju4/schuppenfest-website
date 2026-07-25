import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import PartyHighlight from './components/PartyHighlight.jsx'
import Programm from './components/Programm.jsx'
import StickyBar from './components/StickyBar.jsx'

export default function App() {
  return (
    <>
      <StickyBar />
      <Hero />
      <main>
        <PartyHighlight />
        <Programm />
        <Location />
      </main>
      <Footer />
    </>
  )
}
