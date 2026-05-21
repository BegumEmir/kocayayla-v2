import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [kurumusalAcik, setKurumsalAcik] = useState(false)
  const [medyaAcik, setMedyaAcik] = useState(false)
  const [menuAcik, setMenuAcik] = useState(false)

  return (
    <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / İsim */}
        <Link to="/" className="text-white font-semibold text-sm md:text-base">
          S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi
        </Link>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white">
          <Link to="/" className="hover:text-green-300 transition-colors">Ana Sayfa</Link>

          {/* Kurumsal Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-green-300 transition-colors"
              onClick={() => { setKurumsalAcik(!kurumusalAcik); setMedyaAcik(false) }}
            >
              Kurumsal <span className="text-xs">▼</span>
            </button>
            {kurumusalAcik && (
              <div className="absolute top-8 left-0 bg-white rounded-xl shadow-lg py-2 w-48 z-50">
                {[
                  { to: '/hakkimizda', label: 'Hakkımızda' },
                  { to: '/baskanlar', label: 'Başkanlar' },
                  { to: '/kurullar', label: 'Yönetim Kurulu' },
                  { to: '/kurullar', label: 'Denetim Kurulu' },
                  { to: '/ortaklarimiz', label: 'Ortaklarımız' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                    onClick={() => setKurumsalAcik(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/faaliyetler" className="hover:text-green-300 transition-colors">Faaliyetler</Link>

          {/* Medya Odası Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-green-300 transition-colors"
              onClick={() => { setMedyaAcik(!medyaAcik); setKurumsalAcik(false) }}
            >
              Medya Odası <span className="text-xs">▼</span>
            </button>
            {medyaAcik && (
              <div className="absolute top-8 left-0 bg-white rounded-xl shadow-lg py-2 w-44 z-50">
                {[
                  { to: '/haberler', label: 'Haberlerimiz' },
                  { to: '/duyurular', label: 'Duyurularımız' },
                  { to: '/galeri', label: 'Galeri' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                    onClick={() => setMedyaAcik(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/iletisim" className="hover:text-green-300 transition-colors">İletişim</Link>
        </div>

        {/* Mobil Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuAcik(!menuAcik)}
        >
          {menuAcik ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobil Menü */}
      {menuAcik && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-white text-sm" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
          <Link to="/" onClick={() => setMenuAcik(false)}>Ana Sayfa</Link>
          <Link to="/hakkimizda" onClick={() => setMenuAcik(false)}>Hakkımızda</Link>
          <Link to="/baskanlar" onClick={() => setMenuAcik(false)}>Başkanlar</Link>
          <Link to="/kurullar" onClick={() => setMenuAcik(false)}>Yönetim Kurulu</Link>
          <Link to="/kurullar" onClick={() => setMenuAcik(false)}>Denetim Kurulu</Link>
          <Link to="/ortaklarimiz" onClick={() => setMenuAcik(false)}>Ortaklarımız</Link>
          <Link to="/faaliyetler" onClick={() => setMenuAcik(false)}>Faaliyetler</Link>
          <Link to="/haberler" onClick={() => setMenuAcik(false)}>Haberlerimiz</Link>
          <Link to="/duyurular" onClick={() => setMenuAcik(false)}>Duyurularımız</Link>
          <Link to="/galeri" onClick={() => setMenuAcik(false)}>Galeri</Link>
          <Link to="/iletisim" onClick={() => setMenuAcik(false)}>İletişim</Link>
        </div>
      )}
    </nav>
  )
}