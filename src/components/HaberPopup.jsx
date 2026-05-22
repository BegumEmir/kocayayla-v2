import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source).width(600).url()

export default function HaberPopup() {
  const [haber, setHaber] = useState(null)
  const [goster, setGoster] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const bugun = new Date().toDateString()
    const kapatildi = localStorage.getItem('haberPopupKapatildi')
    if (kapatildi === bugun) return

    client
      .fetch('*[_type == "haber"] | order(tarih desc) [0] { _id, baslik, ozet, kapakGorseli, medya, slug }')
      .then((sonHaber) => {
        if (sonHaber) {
          setHaber(sonHaber)
          setGoster(true)
        }
      })
  }, [])

  const kapat = () => setGoster(false)

  const bugunGosterme = () => {
    localStorage.setItem('haberPopupKapatildi', new Date().toDateString())
    setGoster(false)
  }

  const habereGit = () => {
    setGoster(false)
    navigate(`/haberler/${haber.slug?.current}`)
  }

  if (!goster || !haber) return null

  const kapak = haber.kapakGorseli ?? haber.medya?.find((m) => m._type === 'image')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">

        {/* Çarpı - sağ üst köşe */}
        <button
          onClick={kapat}
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-gray-500 hover:text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
        >
          ✕
        </button>

        {/* Kapak görseli */}
        {kapak && (
          <img
            src={urlFor(kapak)}
            alt={haber.baslik}
            className="w-full h-36 object-cover"
          />
        )}

        {/* İçerik */}
        <div className="p-5">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            SON HABER
          </span>

          <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: 'var(--color-primary-dark)' }}>
            {haber.baslik}
          </h2>

          {haber.ozet && (
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{haber.ozet}</p>
          )}

          <button
            onClick={habereGit}
            className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition hover:opacity-90 mb-2"
            style={{ backgroundColor: 'var(--color-primary-dark)' }}
          >
            Haberi Oku →
          </button>

          <button
            onClick={bugunGosterme}
            className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 underline transition"
          >
            Bugün bir daha gösterme
          </button>
        </div>
      </div>
    </div>
  )
}