function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} AER Fragrances. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-600 text-sm">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="/test" className="hover:text-slate-900">System status</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer