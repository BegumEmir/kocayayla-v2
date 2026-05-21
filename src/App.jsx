import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimizda from './pages/Hakkimizda'
import Baskanlar from './pages/Baskanlar'
import Ortaklarimiz from './pages/Ortaklarimiz'
import Haberler from './pages/Haberler'
import HaberDetay from './pages/HaberDetay'
import Duyurular from './pages/Duyurular'
import Galeri from './pages/Galeri'
import Faaliyetler from './pages/Faaliyetler'
import Iletisim from './pages/Iletisim'
import Kurullar from './pages/Kurullar'

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/baskanlar" element={<Baskanlar />} />
          <Route path="/ortaklarimiz" element={<Ortaklarimiz />} />
          <Route path="/haberler" element={<Haberler />} />
          <Route path="/haberler/:slug" element={<HaberDetay />} />
          <Route path="/duyurular" element={<Duyurular />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/faaliyetler" element={<Faaliyetler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/kurullar" element={<Kurullar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App