import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

export default function Galeri() {
  const [icerikler, setIcerikler] = useState([])
  const [secilen, setSecilen] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "galeri"] | order(tarih desc, _createdAt desc)')
      .then((data) => {
        console.log('video olanlar:', data.filter(i => i.video?.asset?._ref))
        setIcerikler(data)
      })
  }, [])

    const gorselUrl = (ref) => {
    const withoutPrefix = ref.replace('image-', '')
    const parts = withoutPrefix.split('-')
    const ext = parts[parts.length - 1]
    const rest = parts.slice(0, -1).join('-')
    const url = `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${rest}.${ext}`
    console.log('url:', url)
    return url
    }

  const videoUrl = (ref) =>
    `https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${ref.replace('file-', '').replace(/-(\w+)$/, '.$1')}`

  const youtubeEmbed = (url) =>
    url.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Galeri
      </h1>

      {icerikler.length === 0 ? (
        <p className="text-gray-400">Henüz içerik yok.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {icerikler.map((item) => {
            console.log('item:', item._id, 'gorsel:', item.gorsel?.asset?._ref, 'video:', item.video?.asset?._ref)
            return (
              <div
                key={item._id}
                className="cursor-pointer rounded-xl overflow-hidden relative group"
                onClick={() => setSecilen(item)}
              >
                {item.gorsel?.asset?._ref && !item.youtubeLink && (
                  <div className="relative">
                    <img
                      src={gorselUrl(item.gorsel.asset._ref)}
                      alt=""
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                    {item.video?.asset?._ref && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-4xl">▶</span>
                      </div>
                    )}
                  </div>
                )}

                {item.video?.asset?._ref && !item.gorsel?.asset?._ref && (
                  <div className="relative w-full h-48 bg-gray-800">
                    <video
                      src={videoUrl(item.video.asset._ref)}
                      className="w-full h-full object-cover"
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <span className="text-white text-4xl">▶</span>
                    </div>
                  </div>
                )}

                {item.youtubeLink && !item.video && (
                  <div className="relative w-full h-48 bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeLink.split('v=')[1]?.split('&')[0] || item.youtubeLink.split('youtu.be/')[1]}/mqdefault.jpg`}
                      alt=""
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl">▶</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {secilen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSecilen(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setSecilen(null)}
            >
              ✕
            </button>

            {secilen.gorsel?.asset?._ref && !secilen.video && !secilen.youtubeLink && (
              <img
                src={gorselUrl(secilen.gorsel.asset._ref)}
                alt=""
                className="w-full rounded-xl"
              />
            )}

            {secilen.video?.asset?._ref && (
              <video
                src={videoUrl(secilen.video.asset._ref)}
                className="w-full rounded-xl"
                controls
                autoPlay
              />
            )}

            {secilen.youtubeLink && !secilen.video && (
              <iframe
                className="w-full rounded-xl aspect-video"
                src={youtubeEmbed(secilen.youtubeLink)}
                allowFullScreen
                title="Video"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}