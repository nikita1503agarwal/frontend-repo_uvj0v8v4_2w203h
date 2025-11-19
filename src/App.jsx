import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
      </main>
      <Footer />
    </div>
  )
}

export default App