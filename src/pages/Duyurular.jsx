import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import { Helmet } from 'react-helmet-async'

export default function Duyurular() {
  const [duyurular, setDuyurular] = useState([])
  const [acik, setAcik] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "duyuru"] | order(tarih desc)').then(setDuyurular)
  }, [])

  return (
    <>
    <Helmet>
      <title>Duyurular | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi</title>
      <meta name="description" content="Kocayayla Kooperatifi duyuruları ve güncel bildirimler." />
    </Helmet>
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Duyurularımız
      </h1>

      {duyurular.length === 0 ? (
        <p className="text-gray-400">Henüz duyuru yok.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {duyurular.map((d) => (
            <div key={d._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => setAcik(acik === d._id ? null : d._id)}
              >
                <div>
                  <p className="font-semibold" style={{ color: 'var(--color-primary-dark)' }}>{d.baslik}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(d.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <span style={{ color: 'var(--color-primary)' }}>{acik === d._id ? '▲' : '▼'}</span>
              </button>
              {acik === d._id && (
                <div className="px-6 pb-5 text-gray-600 text-sm border-t border-gray-100 pt-3">
                  {d.icerik}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}