export default function Iletisim() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        İletişim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>
            İletişim Bilgileri
          </h2>
          <div className="flex flex-col gap-4 text-gray-600">
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">Adres</p>
              <p>Kocayayla Köyü, Çan / Çanakkale</p>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">Telefon</p>
              <a href="tel:05544957486" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                0 (554) 495 74 86
              </a>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">E-posta</p>
              <a href="mailto:kocayaylakooperatifi@gmail.com" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                kocayaylakooperatifi@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 overflow-hidden">
          <iframe
            title="Konum"
            className="w-full h-full min-h-64 rounded-xl"
            src="https://maps.google.com/maps?q=Kocayayla+Köyü,+Çan,+Çanakkale&output=embed"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}