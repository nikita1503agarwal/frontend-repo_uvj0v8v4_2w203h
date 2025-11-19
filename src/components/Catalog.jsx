import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Catalog() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/perfumes`)
      if (!res.ok) throw new Error('Failed to fetch products')
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const seed = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
      if (!res.ok) throw new Error('Failed to seed products')
      await load()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section id="catalog" className="py-20 bg-[#f6f3ff]">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Featured Perfumes</h2>
            <p className="text-slate-600 mt-2">A refined selection, crafted for a minimalist palette.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={load} className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-white">Refresh</button>
            <button onClick={seed} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Seed demo data</button>
          </div>
        </div>

        {loading && (
          <div className="text-slate-500">Loading products…</div>
        )}
        {error && (
          <div className="text-red-600">{error}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id || item._id} item={item} />
          ))}
        </div>

        <div className="mt-6 md:hidden flex gap-3">
          <button onClick={load} className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-white">Refresh</button>
          <button onClick={seed} className="flex-1 rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Seed demo data</button>
        </div>
      </div>
    </section>
  )
}

export default Catalog