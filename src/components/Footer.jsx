import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white mt-8" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Sol — Kooperatif Bilgisi */}
        <div>
          <h3 className="font-bold text-lg mb-3">Kocayayla Tarımsal Kalkınma Kooperatifi</h3>
          <p className="text-green-200 text-sm mb-4">
            Doğal üretim, dayanışma ve köyümüzün kalkınması için hizmet veriyoruz.
          </p>
          <p className="text-sm text-green-100">📍 Kocayayla Köyü, Çan / Çanakkale</p>
          <p className="text-sm text-green-100 mt-1">☎ 0 (554) 495 74 86</p>
          <p className="text-sm text-green-100 mt-1">✉ kocayaylakooperatifi@gmail.com</p>
        </div>

        {/* Orta — Hızlı Erişim */}
        <div>
          <h3 className="font-bold text-lg mb-3 border-l-4 pl-3" style={{ borderColor: 'var(--color-primary-light)' }}>
            Hızlı Erişim
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-green-200">
            {[
              { to: '/', label: 'Ana Sayfa' },
              { to: '/hakkimizda', label: 'Hakkımızda' },
              { to: '/ortaklarimiz', label: 'Ortaklarımız' },
              { to: '/faaliyetler', label: 'Faaliyetler' },
              { to: '/haberler', label: 'Haberler' },
              { to: '/duyurular', label: 'Duyurular' },
              { to: '/iletisim', label: 'İletişim' },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ — Konum */}
        <div>
          <h3 className="font-bold text-lg mb-3 border-l-4 pl-3" style={{ borderColor: 'var(--color-primary-light)' }}>
            Konum
          </h3>
          <iframe
            title="Konum"
            className="w-full h-40 rounded-xl"
            src="https://maps.google.com/maps?q=Kocayayla+Köyü,+Çan,+Çanakkale&output=embed"
            allowFullScreen
          />
        </div>

      </div>

      {/* Alt bar */}
      <div className="border-t border-green-800 text-center py-4 text-sm text-green-300">
        © {new Date().getFullYear()} Kocayayla Kooperatifi – Tüm Hakları Saklıdır.
      </div>
    </footer>
  )
}