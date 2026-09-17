import { useState, useEffect } from 'react'
import { Phone, Menu, X, ArrowRight } from 'lucide-react'
import { SITE } from '../config/site'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Finishes', href: '#finishes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-9 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-950 backdrop-blur-md border-b border-gold-800/30 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center flex-shrink-0 rounded-sm"
            aria-label="Epoxy Shire: home"
          >
            {logoError ? (
              <span className="font-heading font-bold text-2xl tracking-wide">
                <span className="gold-text">Epoxy</span>
                <span className="text-white"> Shire</span>
              </span>
            ) : (
              <img
                src="./epoxy-shire-logo.jpg"
                alt="Epoxy Shire"
                className="h-12 w-auto"
                onError={() => setLogoError(true)}
              />
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate-300 hover:text-gold-400 font-sans text-sm font-medium px-4 py-2 rounded-sm transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-2 text-slate-300 hover:text-gold-400 text-sm font-medium transition-colors"
              aria-label={`Call Epoxy Shire on ${SITE.phoneDisplay}`}
            >
              <Phone size={14} className="text-gold-600" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <a href="#contact" className="btn-primary text-xs px-5 py-3">
              Free quote
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-1 text-slate-300 hover:text-gold-400 rounded-sm transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-charcoal-900/98 backdrop-blur-lg border-b border-gold-900/25`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-200 hover:text-gold-400 font-sans text-base font-medium px-2 py-4 border-b border-charcoal-700 last:border-0 transition-colors"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-5 pb-2 flex flex-col gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-3 text-slate-300 px-2 py-2"
              aria-label={`Call ${SITE.phoneDisplay}`}
            >
              <Phone size={16} className="text-gold-600" />
              <span className="text-sm">{SITE.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              className="btn-primary w-full text-sm"
              onClick={closeMobile}
            >
              Get a free quote
              <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
