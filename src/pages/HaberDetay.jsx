import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client } from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source).width(900).url()

function MediaSlider({ medya, baslik, videoUrl }) {
  const [aktif, setAktif] = useState(0)

  if (!medya?.length) return null

  const onceki = () => setAktif((prev) => (prev === 0 ? medya.length - 1 : prev - 1))
  const sonraki = () => setAktif((prev) => (prev === medya.length - 1 ? 0 : prev + 1))
  const item = medya[aktif]

  return (
    <div className="mb-6">
      {/* Ana görüntü alanı */}
      <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
        {item._type === 'image' ? (
          <img
            src={urlFor(item)}
            alt={`${baslik} - ${aktif + 1}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            key={aktif}
            src={videoUrl(item.asset._ref)}
            className="w-full h-full"
            controls
          />
        )}

        {/* Ok butonları */}
        {medya.length > 1 && (
          <>
            <button
              onClick={onceki}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition"
            >
              ‹
            </button>
            <button
              onClick={sonraki}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition"
            >
              ›
            </button>
          </>
        )}

        {/* Sayaç */}
        {medya.length > 1 && (
          <span className="absolute bottom-2 right-3 text-white text-xs bg-black/50 px-2 py-0.5 rounded-full">
            {aktif + 1} / {medya.length}
          </span>
        )}
      </div>

      {/* Küçük önizlemeler */}
      {medya.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
          {medya.map((m, i) => (
            <button
              key={i}
              onClick={() => setAktif(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                i === aktif ? 'border-green-700' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              {m._type === 'image' ? (
                <img
                  src={builder.image(m).width(120).url()}
                  alt={`${i + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xl">
                  ▶
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function HaberDetay() {
  const { slug } = useParams()
  const [haber, setHaber] = useState(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "haber" && slug.current == $slug][0]`, { slug })
      .then(setHaber)
  }, [slug])

  if (!haber) return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-400">Yükleniyor...</div>
  )

  const videoUrl = (ref) =>
    `https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${ref.replace('file-', '').replace(/-(\w+)$/, '.$1')}`

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/haberler" className="text-sm mb-6 inline-block" style={{ color: 'var(--color-primary)' }}>
        ← Tüm Haberler
      </Link>

      <div className="bg-white rounded-2xl shadow-sm p-10">
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>
          {haber.baslik}
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(haber.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <MediaSlider medya={haber.medya} baslik={haber.baslik} videoUrl={videoUrl} />

        {haber.youtubeLink && (
          <iframe
            className="w-full rounded-xl aspect-video mb-6"
            src={haber.youtubeLink.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}
            allowFullScreen
            title="Video"
          />
        )}

        {haber.ozet && (
          <p className="text-gray-700 font-medium mb-4 border-l-4 pl-4 italic" style={{ borderColor: 'var(--color-primary)' }}>
            {haber.ozet}
          </p>
        )}

        {haber.icerik && (
          <div className="text-gray-600 leading-relaxed">
            {haber.icerik.map((block, i) =>
              block._type === 'block' ? (
                <p key={i} className="mb-4">
                  {block.children?.map((child) => child.text).join('')}
                </p>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  )
}