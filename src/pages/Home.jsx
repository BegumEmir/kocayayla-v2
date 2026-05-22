import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import GaleriSlider from '../components/GaleriSlider'

export default function Home() {
  const [haberler, setHaberler] = useState([])
  const [duyurular, setDuyurular] = useState([])
  const [galeri, setGaleri] = useState([])
  const [baskan, setBaskan] = useState(null)
  const [ayarlar, setAyarlar] = useState(null)
  const [acikDuyuru, setAcikDuyuru] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "haber"] | order(tarih desc)[0...3]').then(setHaberler)
    client.fetch('*[_type == "duyuru"] | order(tarih desc)').then(setDuyurular)
    client.fetch('*[_type == "galeri" && defined(gorsel)] | order(tarih desc, _createdAt desc)[0...6]').then(setGaleri)
    client.fetch('*[_type == "anaSayfaAyarlari"][0]').then(setBaskan)
    client.fetch('*[_type == "ayarlar"][0]').then(setAyarlar)
  }, [])

  return (
    <div>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="w-48 h-48 object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>
              Kooperatifimize Hoş Geldiniz
            </h1>
            <p className="text-gray-600 mb-2">
              S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi, Çanakkale ili Çan ilçesine bağlı
              Kocayayla Köyü'nde faaliyet gösteren bir tarım kooperatifidir.
            </p>
            <p className="text-gray-600 mb-6">
              Köyümüzün doğal üretim gücünü bir araya getirerek dayanışmayı ve tarımsal kalkınmayı esas alıyoruz.
            </p>
            <div className="flex gap-8 mb-6">
              <div>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  {ayarlar?.ortakSayisi ?? 179}
                </span>
                <p className="text-sm text-gray-500">Ortak</p>
              </div>
              <div>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  {ayarlar?.aktifOrtakSayisi ?? 78}
                </span>
                <p className="text-sm text-gray-500">Aktif Ortak</p>
              </div>
              <div>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  Çan
                </span>
                <p className="text-sm text-gray-500">Çanakkale</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/hakkimizda" className="px-5 py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: 'var(--color-primary)' }}>
                Kurumsal Kimliğimiz
              </a>
              <a href="/faaliyetler" className="px-5 py-2 rounded-lg text-sm font-medium border" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                Faaliyetlerimiz
              </a>
              <a href="/ortaklarimiz" className="px-5 py-2 rounded-lg text-sm font-medium border" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                Ortaklarımız
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALINTI */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <blockquote className="border-l-4 pl-5 py-1 text-gray-700 font-medium italic" style={{ borderColor: 'var(--color-primary)' }}>
          İlçemizin en büyük köylerinden biri olan Kocayayla, aynı zamanda ilçede en yüksek süt üretiminin gerçekleştirildiği yerleşim yeridir.
        </blockquote>
      </section>

      {/* BAŞKANDAN MESAJ */}
      {baskan && (
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                Kooperatif Başkanımızdan Mesaj
              </h2>
              <p className="text-gray-600 mb-4">{baskan.baskanMesajMetin}</p>
              <a href="/baskanlar" className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                Başkanlarımızı Tanıyın →
              </a>
            </div>
            {baskan.youtubeLink && (
              <div className="flex-1">
                <iframe
                  className="w-full rounded-xl aspect-video"
                  src={baskan.youtubeLink.replace('watch?v=', 'embed/')}
                  title="Başkan Mesajı"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* DUYURULAR */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Duyurular</h2>
        <div className="flex flex-col gap-3">
          {duyurular.length === 0 ? (
            <p className="text-gray-400">Henüz duyuru yok.</p>
          ) : (
            duyurular.map((d) => (
              <div key={d._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => setAcikDuyuru(acikDuyuru === d._id ? null : d._id)}
                >
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{d.baslik}</p>
                    <p className="text-sm text-gray-400">{new Date(d.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  </div>
                  <span style={{ color: 'var(--color-primary)' }}>{acikDuyuru === d._id ? '▲' : '▼'}</span>
                </button>
                {acikDuyuru === d._id && (
                  <div className="px-6 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3">
                    {d.icerik}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        <a href="/duyurular" className="inline-block mt-4 text-sm" style={{ color: 'var(--color-primary)' }}>
          Tüm duyurular →
        </a>
      </section>

      {/* GALERİ */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Galeriden Kareler</h2>
          <a href="/galeri" className="text-sm" style={{ color: 'var(--color-primary)' }}>Tüm galeriyi gör →</a>
        </div>
        <GaleriSlider galeri={galeri} />
      </section>

      {/* HABERLER */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Haberler</h2>
        <div className="flex flex-col gap-4">
          {haberler.length === 0 ? (
            <p className="text-gray-400">Henüz haber yok.</p>
          ) : (
            haberler.map((h) => (
              <div key={h._id} className="bg-white rounded-xl shadow-sm p-6 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
                <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--color-primary-dark)' }}>{h.baslik}</h3>
                <p className="text-sm text-gray-400 mb-2">{new Date(h.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="text-gray-600 text-sm mb-3">{h.ozet}</p>
                <a href={`/haberler/${h.slug?.current}`} className="text-sm font-medium underline" style={{ color: 'var(--color-primary)' }}>
                  Haberi Görüntüle →
                </a>
              </div>
            ))
          )}
        </div>
        <a href="/haberler" className="inline-block mt-4 text-sm" style={{ color: 'var(--color-primary)' }}>
          Tüm haberler →
        </a>
      </section>
    </div>
  )
}