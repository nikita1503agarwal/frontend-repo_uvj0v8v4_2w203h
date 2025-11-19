function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-xl transition overflow-hidden">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100">
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-slate-400">No image</div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-slate-900 font-medium tracking-tight">{item.name}</h3>
          <span className="text-slate-900 font-semibold">${item.price?.toFixed(2)}</span>
        </div>
        {item.description && (
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.description}</p>
        )}
        {item.notes?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.notes.slice(0,3).map((n, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{n}</span>
            ))}
          </div>
        )}
        <button className="mt-4 w-full rounded-full bg-slate-900 text-white py-2 text-sm hover:bg-slate-800 transition">Add to bag</button>
      </div>
    </div>
  )
}

export default ProductCard