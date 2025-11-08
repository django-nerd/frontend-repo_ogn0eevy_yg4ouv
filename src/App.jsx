import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="py-12 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} FluentPay, Inc.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
