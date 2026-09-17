import { Phone, ArrowRight } from 'lucide-react'
import { SITE } from '../config/site'

export default function MobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 flex"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="complementary"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 text-white font-heading font-semibold text-sm uppercase tracking-wider py-4 transition-colors"
        style={{ background: '#1e3a8a' }}
        aria-label={`Call us on ${SITE.phoneDisplay}`}
      >
        <Phone size={17} aria-hidden="true" />
        Call now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-heading font-semibold text-sm uppercase tracking-wider py-4 transition-colors"
        aria-label="Get a free quote"
      >
        Free quote
        <ArrowRight size={17} aria-hidden="true" />
      </a>
    </div>
  )
}
