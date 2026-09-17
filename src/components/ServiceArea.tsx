import { MapPin } from 'lucide-react'

const PRIMARY_TOWNS = [
  'Bedford',
  'Luton',
  'Dunstable',
  'Leighton Buzzard',
  'Biggleswade',
  'Flitwick',
  'Ampthill',
  'Sandy',
  'Shefford',
  'Stotfold',
  'Kempston',
  'St Neots',
]

const NEARBY_AREAS = [
  'Milton Keynes area',
  'Northampton area',
  'Hertfordshire border',
  'Cambridgeshire border',
]

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="service-area-heading" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text */}
          <div>
            <p className="section-label mb-4">Coverage</p>
            <h2 id="service-area-heading" className="section-title text-4xl sm:text-5xl mb-6">
              Bedfordshire and<br />
              <span className="gold-text">the surrounding area.</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              We are based in Bedfordshire and work across the county and into neighbouring counties.
              If you are unsure whether we cover your location, get in touch. We are happy to travel
              for the right project.
            </p>

            {/* Primary towns */}
            <div className="mb-8">
              <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Areas we regularly cover
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRIMARY_TOWNS.map((town) => (
                  <li key={town} className="flex items-center gap-2 text-slate-300 text-sm">
                    <MapPin size={12} className="text-gold-700 flex-shrink-0" aria-hidden="true" />
                    {town}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby areas */}
            <div className="mb-8">
              <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                And parts of
              </p>
              <ul className="flex flex-wrap gap-2">
                {NEARBY_AREAS.map((area) => (
                  <li
                    key={area}
                    className="text-xs font-medium text-slate-400 bg-charcoal-700 border border-charcoal-600 px-3 py-1.5 rounded-sm"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="btn-primary">
              Check if we cover your area
            </a>
          </div>

          {/* Map placeholder */}
          <div>
            <div
              className="rounded-md overflow-hidden"
              style={{ border: '1px solid rgba(201,146,42,0.18)' }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Bedfordshire,+England,+UK&t=&z=9&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Epoxy Shire service area: Bedfordshire and surrounding area"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
