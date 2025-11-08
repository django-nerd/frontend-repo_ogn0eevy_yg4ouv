import { Shield, CreditCard, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, tokenization, and granular access controls out of the box.'
  },
  {
    icon: CreditCard,
    title: 'Card issuing',
    desc: 'Create virtual and physical cards with spending controls and real-time notifications.'
  },
  {
    icon: Zap,
    title: 'Real-time ledgers',
    desc: 'Instant balances and event streaming so your UI is always up to date.'
  },
  {
    icon: Globe,
    title: 'Global payouts',
    desc: 'Move money across 180+ countries with transparent FX and compliance built-in.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to launch</h2>
          <p className="mt-4 text-gray-600">Modular products that scale with you—start with cards and grow into global payments and financial operations.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 bg-gradient-to-b from-white to-gray-50">
              <div className="h-12 w-12 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
