import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

const eskiBaskanlar = [
  { ad: 'Hasan Ünlü' },
  { ad: 'Metin Kızıltepe' },
  { ad: 'Vayit Tüzgen', merhum: true },
  { ad: 'Osman Deniz' },
  { ad: 'Ömer Zözer' },
]

export default function Baskanlar() {
  const [baskan, setBaskan] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "baskan"][0]').then(setBaskan)
  }, [])

  const gorselUrl = (ref) =>
    `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10" style={{ color: 'var(--color-primary-dark)' }}>
        Kooperatif Başkanlarımız
      </h1>

      {/* Mevcut Başkan */}
      {baskan && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
            Mevcut Başkanımız
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row gap-8 items-start">
            {baskan.foto && (
              <img
                src={gorselUrl(baskan.foto.asset._ref)}
                alt={baskan.ad}
                className="w-48 h-56 rounded-xl object-cover object-top flex-shrink-0"
              />
            )}
            <div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                {baskan.ad}
              </h3>
              <p className="font-medium mb-1" style={{ color: 'var(--color-primary)' }}>
                Kooperatif Başkanı
              </p>
              {baskan.donem && (
                <p className="text-sm text-gray-400 mb-4">Görev Dönemi: {baskan.donem}</p>
              )}
              {baskan.mesaj && (
                <p className="text-gray-600 leading-relaxed">{baskan.mesaj}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Görev Yapmış Başkanlar */}
      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
          Görev Yapmış Başkanlarımız
        </h2>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex flex-col divide-y divide-gray-100">
            {eskiBaskanlar.map((b) => (
              <div key={b.ad} className="py-3 flex items-center gap-2">
                <span className="font-medium text-gray-700">{b.ad}</span>
                {b.merhum && (
                  <span className="text-xs text-gray-400 italic">(Merhum)</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}