import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { Helmet } from 'react-helmet-async'

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source).width(600).url()

export default function Haberler() {
  const [haberler, setHaberler] = useState([])

  useEffect(() => {
    client
      .fetch('*[_type == "haber"] | order(tarih desc) { _id, baslik, tarih, ozet, kapakGorseli, medya, slug }')
      .then(setHaberler)
  }, [])

  return (
    <>
    <Helmet>
      <title>Haberler | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi</title>
      <meta name="description" content="Kocayayla Kooperatifi'nden son haberler ve gelişmeler." />
    </Helmet>
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Haberlerimiz
      </h1>

      {haberler.length === 0 ? (
        <p className="text-gray-400">Henüz haber yok.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {haberler.map((h) => {
            const kapak = h.kapakGorseli ?? h.medya?.find((m) => m._type === 'image')
            const videoVar = !kapak && h.medya?.some((m) => m._type === 'file')

            return (
              <Link
                key={h._id}
                to={`/haberler/${h.slug?.current}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {kapak ? (
                  <img
                    src={urlFor(kapak)}
                    alt={h.baslik}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-48 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-primary-dark)' }}
                  >
                    {videoVar ? (
                      <span className="text-white text-4xl opacity-80">▶</span>
                    ) : (
                      <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-24 opacity-40"
                      />
                    )}
                  </div>
                )}

                <div className="p-5">
                  <h2 className="text-base font-semibold mb-1 leading-snug" style={{ color: 'var(--color-primary-dark)' }}>
                    {h.baslik}
                  </h2>
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(h.tarih).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">{h.ozet}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
    </>
  )
}