import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

export default function Kurullar() {
  const [yonetim, setYonetim] = useState([])
  const [denetim, setDenetim] = useState([])

  useEffect(() => {
    client.fetch('*[_type == "yonetimKurulu"] | order(sira asc)').then(setYonetim)
    client.fetch('*[_type == "denetimKurulu"] | order(sira asc)').then(setDenetim)
  }, [])

  const gorselUrl = (ref) =>
    `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`

  const KurulKarti = ({ uye }) => (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      {uye.foto ? (
        <img
          src={gorselUrl(uye.foto.asset._ref)}
          alt={uye.ad}
          className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-4"
        />
      ) : (
        <div
          className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {uye.ad?.charAt(0)}
        </div>
      )}
      <h3 className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{uye.ad}</h3>
      <p className="text-sm text-gray-500 mt-1">{uye.gorev}</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Yönetim Kurulu */}
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>
        Yönetim Kurulu
      </h1>
      <p className="text-gray-500 mb-8">Kooperatifimizin yönetim kurulu üyeleri</p>

      {yonetim.length === 0 ? (
        <p className="text-gray-400 mb-12">Henüz bilgi girilmemiş.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {yonetim.map((u) => <KurulKarti key={u._id} uye={u} />)}
        </div>
      )}

      {/* Ayırıcı */}
      <div className="border-t border-gray-200 mb-16" />

      {/* Denetim Kurulu */}
      <h2 id="denetim-kurulu" className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>
        Denetim Kurulu
      </h2>
      <p className="text-gray-500 mb-8">Kooperatifimizin denetim kurulu üyeleri</p>

      {denetim.length === 0 ? (
        <p className="text-gray-400">Henüz bilgi girilmemiş.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {denetim.map((u) => <KurulKarti key={u._id} uye={u} />)}
        </div>
      )}

    </div>
  )
}