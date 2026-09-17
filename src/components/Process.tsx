interface Step {
  number: string
  title: string
  body: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Free consultation and quote',
    body: 'We visit, assess your floor and discuss your requirements in detail. There is no sales pressure and no obligation. We will tell you exactly what is needed and why.',
  },
  {
    number: '02',
    title: 'Diamond grinding and surface prep',
    body: 'The single most important step. Diamond grinding opens the concrete pores and removes the surface laitance, giving the coating a mechanical bond it cannot lose.',
  },
  {
    number: '03',
    title: 'Crack and defect repairs',
    body: 'Any cracks, holes, trip hazards or damaged areas are filled, levelled and cured before a drop of coating is applied. No shortcuts.',
  },
  {
    number: '04',
    title: 'Primer and basecoat application',
    body: 'The primer and basecoat are applied in controlled conditions for a uniform, void-free foundation. Your chosen colour or metallic pigment is mixed here.',
  },
  {
    number: '05',
    title: 'Topcoat and finish layer',
    body: 'The protective topcoat is applied and levelled to seal the system. Anti-slip broadcast, decorative flakes or a mirror-gloss clear coat, finished to your specification.',
  },
  {
    number: '06',
    title: 'Handover and aftercare',
    body: 'We clean up completely. Cure times are confirmed, you receive written aftercare guidance, and the floor is handed back to you looking exactly as agreed.',
  },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-charcoal-800 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">How it works</p>
          <h2 id="process-heading" className="section-title text-4xl sm:text-5xl mb-5">
            A proper process.<br />No corners cut.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The longevity of an epoxy floor depends almost entirely on preparation. We treat every
            step with the same care, whether it is a single garage or a commercial unit.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line: desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-0 right-0 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent 4%, rgba(201,146,42,0.25) 20%, rgba(201,146,42,0.25) 80%, transparent 96%)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {STEPS.map((step) => (
              <article key={step.number} className="relative flex flex-col gap-5">
                {/* Step number bubble */}
                <div className="step-number self-start lg:self-center" aria-hidden="true">
                  <span className="font-heading font-bold text-lg text-charcoal-950">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg lg:text-xl mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                </div>

                {/* Connector arrow: mobile */}
                <div
                  aria-hidden="true"
                  className="sm:hidden h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(201,146,42,0.3), transparent)',
                  }}
                />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 bg-charcoal-700 border border-gold-800/30 rounded-sm px-6 py-4"
            role="note"
          >
            <div
              className="w-1 h-10 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(to bottom, #c9922a, #e8c347)' }}
              aria-hidden="true"
            />
            <p className="text-slate-300 text-sm leading-relaxed text-left max-w-lg">
              We work tidily and systematically. Preparation areas are screened and dust controlled
              throughout. Most residential jobs are complete within one to two days, with minimal
              disruption to your home or business.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
