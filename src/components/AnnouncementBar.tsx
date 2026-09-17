import { Phone } from 'lucide-react'
import { SITE } from '../config/site'

const TICKER =
  `${SITE.guaranteeShort}   ·   Free, no-obligation site visits   ·   Diamond grinding on every installation   ·   Serving Bedfordshire and beyond   ·   `

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 inset-x-0 z-50 h-9 flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #0e1b47 0%, #101929 50%, #0e1b47 100%)',
        borderBottom: '1px solid rgba(201, 146, 42, 0.18)',
      }}
      role="banner"
      aria-label="Trust signals"
    >
      {/* Marquee — hidden from assistive tech, decorative */}
      <div className="flex-1 min-w-0 overflow-hidden" aria-hidden="true">
        <div className="marquee-track inline-block whitespace-nowrap text-xs text-slate-300 font-sans">
          <span className="inline-block">{TICKER}</span>
          <span className="inline-block">{TICKER}</span>
        </div>
      </div>

      {/* Phone link — always visible */}
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex-shrink-0 flex items-center gap-1.5 pl-3 pr-4 h-full text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors"
        style={{ borderLeft: '1px solid rgba(201, 146, 42, 0.18)' }}
        aria-label={`Call us on ${SITE.phoneDisplay}`}
      >
        <Phone size={11} aria-hidden="true" />
        <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
        <span className="sm:hidden" aria-hidden="true">Call</span>
      </a>
    </div>
  )
}
