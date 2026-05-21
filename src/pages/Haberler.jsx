import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanityClient'

export default function Haberler() {
  const [haberler, setHaberler] = useState([])

  useEffect(() => {
    client.fetch('*[_type == "haber"] | order(tarih desc)').then(setHaberler)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Haberlerimiz
      </h1>

      {haberler.length === 0 ? (
        <p className="text-gray-400">Henüz haber yok.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {haberler.map((h) => (
            <div key={h._id} className="bg-white rounded-2xl shadow-sm p-6 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
              <h2 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                {h.baslik}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                {new Date(h.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-gray-600 text-sm mb-4">{h.ozet}</p>
              <Link
                to={`/haberler/${h.slug?.current}`}
                className="text-sm font-medium underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Haberi Görüntüle →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}