import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '../config/site'

interface CtaBandProps {
  headline: string
  subhead: string
  showGuarantee?: boolean
}

export default function CtaBand({ headline, subhead, showGuarantee = false }: CtaBandProps) {
  return (
    <section
      aria-label={headline}
      style={{
        background: 'linear-gradient(135deg, #0e1b47 0%, #101929 40%, #080a0f 100%)',
        borderTop: '1px solid rgba(201,146,42,0.18)',
        borderBottom: '1px solid rgba(201,146,42,0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-2">
              {headline}
            </h2>
            <p className="text-slate-300 text-base">{subhead}</p>
            {showGuarantee && (
              <p className="mt-2.5 text-xs text-gold-600 font-medium">
                {SITE.guaranteeShort}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <a href="#contact" className="btn-primary text-sm px-8 py-4">
              Get a free quote
              <ArrowRight size={17} />
            </a>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-2 text-slate-300 hover:text-gold-400 text-sm font-medium transition-colors"
              aria-label={`Call ${SITE.phoneDisplay}`}
            >
              <Phone size={15} className="text-gold-600" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
