import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import { Helmet } from 'react-helmet-async'

export default function DenetimKurulu() {
  const [uyeler, setUyeler] = useState([])

  useEffect(() => {
    client.fetch('*[_type == "denetimKurulu"] | order(sira asc)').then(setUyeler)
  }, [])

  return (
      <>
    <Helmet>
      <title>Denetim Kurulu | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi</title>
      <meta name="description" content="Kocayayla Kooperatifi denetim kurulu üyeleri ve görevleri." />
    </Helmet>
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Denetim Kurulu
      </h1>

      {uyeler.length === 0 ? (
        <p className="text-gray-400">Henüz bilgi girilmemiş.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {uyeler.map((u) => (
            <div key={u._id} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              {u.foto ? (
                <img
                  src={`https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${u.foto.asset._ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`}
                  alt={u.ad}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: 'var(--color-primary)' }}>
                  {u.ad?.charAt(0)}
                </div>
              )}
              <h3 className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{u.ad}</h3>
              <p className="text-sm text-gray-500 mt-1">{u.gorev}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}