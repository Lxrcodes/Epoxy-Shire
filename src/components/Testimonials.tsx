import { Star } from 'lucide-react'
import Reveal from './Reveal'

interface Testimonial {
  quote: string
  name: string
  location: string
  jobType: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Absolutely transformed our garage. The metallic finish looks incredible and the whole process was completely mess-free. They were on time, professional and cleaned up after themselves perfectly. Would not hesitate to recommend.',
    name: '[Customer Name]',
    location: 'Bedford',
    jobType: 'Metallic garage floor',
  },
  {
    quote:
      'Had a full commercial floor done in our workshop. In one day, back to work the next. The crew were knowledgeable and efficient. The finish has held up perfectly to daily forklift use. Genuinely impressed.',
    name: '[Customer Name]',
    location: 'Luton',
    jobType: 'Commercial workshop floor',
  },
  {
    quote:
      'Would not hesitate to use Epoxy Shire again. Turned up when they said, explained everything clearly and the result is stunning. Our kitchen floor looks like something from a magazine.',
    name: '[Customer Name]',
    location: 'Dunstable',
    jobType: 'Residential kitchen floor',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={14} className="text-gold-500 fill-gold-500" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-charcoal-800 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="section-label mb-4">Customer reviews</p>
          <h2 id="testimonials-heading" className="section-title text-4xl sm:text-5xl mb-4">
            What our customers say.
          </h2>
          {/* TODO: Replace placeholder reviews with real customer quotes */}
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
            <figure
              className="glass-card rounded-md p-7 flex flex-col gap-5 h-full"
              aria-label={`Review from ${t.location}`}
            >
              {/* Stars */}
              <StarRating count={5} />

              {/* Quote */}
              <blockquote className="flex-1">
                <div
                  aria-hidden="true"
                  className="font-heading text-5xl text-gold-800 leading-none mb-2 select-none"
                >
                  &ldquo;
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{t.quote}</p>
              </blockquote>

              {/* Attribution */}
              <figcaption className="border-t border-charcoal-600 pt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
                </div>
                <span className="text-xs text-gold-700 font-heading uppercase tracking-wide text-right leading-tight">
                  {t.jobType}
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  )
}
