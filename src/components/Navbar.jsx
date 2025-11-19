import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl tracking-widest font-semibold text-slate-900">AER</a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#catalog" className="hover:text-slate-900">Shop</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur border-t border-slate-200">
          <div className="px-6 py-4 flex flex-col gap-3 text-slate-700">
            <a href="#catalog" className="hover:text-slate-900">Shop</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar