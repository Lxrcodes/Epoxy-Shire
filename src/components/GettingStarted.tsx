import { MessageSquare, ClipboardList, Sparkles, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '1',
    Icon: MessageSquare,
    title: 'Get your free quote',
    body: 'Call us or fill in the form below. We respond the same day, no obligation, no pressure.',
  },
  {
    number: '2',
    Icon: ClipboardList,
    title: 'We visit and plan',
    body: 'A free site visit, honest advice on the right system and a fixed price before any work starts.',
  },
  {
    number: '3',
    Icon: Sparkles,
    title: 'Enjoy your new floor',
    body: 'We prep, coat and hand back a floor built to last. Tidy, professional and done properly.',
  },
] as const

export default function GettingStarted() {
  return (
    <section
      id="getting-started"
      aria-labelledby="getting-started-heading"
      className="py-20 lg:py-28"
      style={{
        background: 'linear-gradient(135deg, #080a0f 0%, #0d1020 60%, #080a0f 100%)',
        borderTop: '1px solid rgba(201,146,42,0.15)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-14">
          <p className="section-label mb-4">Getting started</p>
          <h2
            id="getting-started-heading"
            className="section-title text-4xl sm:text-5xl mb-4"
          >
            Three simple steps.
          </h2>
          <p className="text-slate-300 text-lg">
            Hiring us is as straightforward as the floors we install.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 mb-14">
          {STEPS.map(({ number, Icon, title, body }, i) => (
            <Reveal key={number} delay={i * 120}>
              <div className="flex flex-col items-center text-center gap-5">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #c9922a 0%, #e8c347 100%)',
                      boxShadow: '0 0 28px rgba(201,146,42,0.3)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={24} className="text-charcoal-950" />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-heading font-bold text-white border-2 border-charcoal-950"
                    style={{ background: '#172859' }}
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary text-sm px-10 py-4">
            Get your free quote
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}
