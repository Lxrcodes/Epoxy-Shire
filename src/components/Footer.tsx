import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '../config/site'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Finishes', href: '#finishes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

const SERVICE_TOWNS = [
  'Bedford',
  'Luton',
  'Dunstable',
  'Leighton Buzzard',
  'Biggleswade',
  'Flitwick',
  'Ampthill',
  'Sandy',
] as const

const YEAR = new Date().getFullYear()

export default function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-charcoal-950" aria-label="Site footer">
      {/* Gold top rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,146,42,0.5) 30%, rgba(201,146,42,0.5) 70%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" aria-label="Epoxy Shire: back to top" className="inline-block mb-5 rounded-sm">
              {logoError ? (
                <span className="font-heading font-bold text-2xl">
                  <span className="gold-text">Epoxy</span>
                  <span className="text-white"> Shire</span>
                </span>
              ) : (
                <img
                  src="./epoxy-shire-logo.jpg"
                  alt="Epoxy Shire"
                  className="h-10 w-auto"
                  onError={() => setLogoError(true)}
                />
              )}
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Premium resin floor coatings for homes, garages and commercial spaces across
              Bedfordshire. Built to last, installed with care.
            </p>
            {/* TODO: Add accreditation logos or trade body badge here once qualified */}
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-gold-400 text-sm transition-colors"
                  aria-label={`Call ${SITE.phoneDisplay}`}
                >
                  <Phone size={13} className="text-gold-700 flex-shrink-0" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  <Mail size={13} className="text-gold-700 flex-shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={13} className="text-gold-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                Bedfordshire and surrounding area
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Service area
            </p>
            <ul className="grid grid-cols-2 gap-1.5">
              {SERVICE_TOWNS.map((town) => (
                <li key={town} className="text-slate-400 text-sm">
                  {town}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-xs mt-3">
              And parts of Northants, Cambs and Herts.
            </p>
          </div>

        </div>

        {/* Bottom rule */}
        <div
          className="h-px w-full mb-7"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(201,146,42,0.2) 50%, transparent)',
          }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>
            &copy; {YEAR} Epoxy Shire. All rights reserved. Registered in England and Wales.
          </p>
          <p className="text-center">
            Built with care and the strength of a shire horse.
          </p>
        </div>

      </div>
    </footer>
  )
}
