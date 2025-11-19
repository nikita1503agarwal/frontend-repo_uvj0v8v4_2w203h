import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#efe9ff]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#efe9ff] via-[#efe9ff]/30 to-transparent" />

      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900">THE FRAGRANCE OF CREATIVITY</h1>
          <p className="mt-4 max-w-xl text-slate-700">Minimal, modern perfume crafted with precision. Discover a curated line that blends clarity and character.</p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm hover:bg-slate-800 transition">Shop now</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm border border-slate-200 hover:bg-slate-50 transition">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;