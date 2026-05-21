import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client } from '../sanityClient'

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

        {haber.gorsel && (
          <img
            src={`https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${haber.gorsel.asset._ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`}
            alt={haber.baslik}
            className="w-full rounded-xl mb-6 object-cover max-h-80"
          />
        )}

        {/* Direkt Video */}
        {haber.video?.asset?._ref && (
        <video
            src={`https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${haber.video.asset._ref.replace('file-', '').replace(/-(\w+)$/, '.$1')}`}
            className="w-full rounded-xl mb-6"
            controls
        />
        )}

        {/* YouTube */}
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