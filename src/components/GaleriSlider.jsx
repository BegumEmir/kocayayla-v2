import { useState } from 'react'

export default function GaleriSlider({ galeri }) {
  const [baslangic, setBaslangic] = useState(0)

  const gorseller = galeri.filter(g => g.gorsel?.asset?._ref).slice(0, 6)

  const gorunur = window.innerWidth < 640 ? 1 : 3

  const onceki = () => setBaslangic(prev => Math.max(0, prev - 1))
  const sonraki = () => setBaslangic(prev => Math.min(gorseller.length - gorunur, prev + 1))

  if (gorseller.length === 0) return <p className="text-gray-400">Henüz görsel yok.</p>

  return (
    <div className="relative">
      <div className={`grid gap-4 ${gorunur === 1 ? 'grid-cols-1' : 'grid-cols-3'}`}>
        {gorseller.slice(baslangic, baslangic + gorunur).map((g) => (
          <img
            key={g._id}
            src={`https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${g.gorsel.asset._ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`}
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
        ))}
      </div>

      {baslangic > 0 && (
        <button
          onClick={onceki}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition"
          style={{ color: 'var(--color-primary)' }}
        >
          ‹
        </button>
      )}
      {baslangic + gorunur < gorseller.length && (
        <button
          onClick={sonraki}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition"
          style={{ color: 'var(--color-primary)' }}
        >
          ›
        </button>
      )}
    </div>
  )
}