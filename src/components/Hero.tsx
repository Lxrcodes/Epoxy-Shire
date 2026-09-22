import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react'
import { SITE } from '../config/site'

// TODO: Update 'Fully trained and certified' and the guarantee text once qualified/terms are set (src/config/site.ts)
const TRUST_ITEMS = [
  'Free, no-obligation quotes',
  'Fully trained and certified',
  SITE.guaranteeShort,
  'Tidy, professional finish. Every time.',
]

const FLOOR_LINES = Array.from({ length: 14 }, (_, i) => i)

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero: Epoxy Shire premium resin floor coatings"
      className="relative flex flex-col min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 18% 82%, rgba(232, 195, 71, 0.15) 0%, transparent 48%),
          radial-gradient(ellipse at 82% 12%, rgba(20, 184, 166, 0.10) 0%, transparent 48%),
          linear-gradient(172deg, rgba(5,6,8,0.82) 0%, rgba(7,9,14,0.70) 40%, rgba(5,6,8,0.82) 100%),
          url('/metallic-epoxy.jpg') center/cover no-repeat
        `,
      }}
    >
      {/* Reflective floor line texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: 0.06 }}
      >
        {FLOOR_LINES.map((i) => (
          <div
            key={i}
            className="absolute inset-x-0 h-px"
            style={{
              top: `${(i / FLOOR_LINES.length) * 100}%`,
              background:
                'linear-gradient(to right, transparent, rgba(232,195,71,0.6) 30%, rgba(20,184,166,0.4) 70%, transparent)',
              transform: `perspective(600px) rotateX(${60 + i * 0.8}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-12 lg:pt-0 lg:pb-0">
          <div className="flex items-center min-h-[88vh]">

            {/* Text */}
            <div>
              <p className="section-label mb-5">
                Premium Resin Floor Coatings
              </p>

              <h1 className="font-heading font-bold text-5xl sm:text-6xl xl:text-[72px] leading-[0.95] mb-7">
                <span className="gold-text">Showroom</span>
                <br />
                <span className="text-white">quality floors,</span>
                <br />
                <span className="text-slate-300">built to last.</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-3">
                Professional epoxy and polyaspartic floor coatings for homes, garages and
                commercial spaces across Bedfordshire and the surrounding area.
              </p>
              <p className="text-slate-400 text-sm italic mb-10">
                Like the shire horse, our floors are chosen for strength and built to work hard for a lifetime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-sm px-8 py-4">
                  Get a free quote
                  <ArrowRight size={17} />
                </a>
                <a href="#gallery" className="btn-outline text-sm px-8 py-4">
                  See our work
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="hidden lg:flex absolute bottom-36 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gold-800 hover:text-gold-600 transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={20} />
      </a>

      {/* Trust strip */}
      <div
        className="border-t border-gold-900/25 bg-charcoal-950/70 backdrop-blur-sm"
        aria-label="Trust signals"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((text) => (
              <li key={text} className="flex items-start gap-2.5">
                <CheckCircle
                  size={15}
                  className="text-gold-600 flex-shrink-0 mt-[3px]"
                  aria-hidden="true"
                />
                <span className="text-white text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
