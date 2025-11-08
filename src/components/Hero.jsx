import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            New: Instant card issuing API
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Build modern fintech experiences in minutes
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl">
            Issue virtual and physical cards, move money globally, and launch new financial products with a single, secure platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-black/90">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white/80 px-5 py-3 text-gray-900 hover:bg-white">
              View features
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-gray-600">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=1" alt="avatar" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=2" alt="avatar" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=3" alt="avatar" />
            </div>
            <p><span className="font-semibold">5,000+</span> teams build with FluentPay</p>
          </div>
        </div>

        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}
