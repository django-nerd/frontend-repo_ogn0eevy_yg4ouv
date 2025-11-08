export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_50%)]" />
          <div className="relative px-8 py-14 md:px-12 md:py-16 text-white">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Start issuing in days, not months</h3>
              <p className="mt-3 text-white/90">Use our sandbox to prototype quickly, then go live with bank partners in your region. Compliance and risk handled for you.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 hover:bg-white/90">
                Create free account
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-white hover:bg-white/20">
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
