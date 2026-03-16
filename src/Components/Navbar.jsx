import { useState } from 'react'

const NAV_LINKS = ['Routes', 'Schedules', 'Offers', 'Track Bus']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-syne text-2xl font-extrabold tracking-tight">
          Ride<span className="text-brand">Flow</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-muted text-sm font-medium hover:text-white transition-colors duration-200 no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block text-sm text-muted hover:text-white transition-colors">
            Log in
          </button>
          <button className="bg-brand hover:bg-brand-light text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5">
            Sign Up
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden text-white ml-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-white/[0.06] pt-3">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="text-muted text-sm font-medium hover:text-white transition-colors no-underline">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
