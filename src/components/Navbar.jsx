import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 shadow-sm" />
            <span className="font-semibold tracking-tight">FluentPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black/90"
            >
              Sign in
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4 border-t border-black/5 pt-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black/90"
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
