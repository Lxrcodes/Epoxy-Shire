import { Car, Home, Building2, Layers, Sun, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

interface Service {
  Icon: LucideIcon
  title: string
  benefit: string
  description: string
}

const SERVICES: Service[] = [
  {
    Icon: Car,
    title: 'Garage Floors',
    benefit: 'Oil-resistant, showroom-clean, and easy to maintain.',
    description:
      'Transform your garage from a dusty concrete slab into a polished, professional-looking space. Our garage floor systems handle tyre marks, oils and chemicals without a second thought.',
  },
  {
    Icon: Home,
    title: 'Residential Floors',
    benefit: 'Beautiful, durable floors for every room in the house.',
    description:
      'Kitchen, hallway, utility room, basement or studio. We install seamless resin floors that are as comfortable to live with as they are striking to look at.',
  },
  {
    Icon: Building2,
    title: 'Commercial and Industrial',
    benefit: 'Heavy-duty coatings built for demanding environments.',
    description:
      'Warehouses, workshops, showrooms and commercial kitchens. High-build systems that take forklift traffic, chemical spills and constant foot traffic in their stride.',
  },
  {
    Icon: Layers,
    title: 'Concrete Grinding and Polishing',
    benefit: 'Diamond-polished concrete finished to a mirror sheen.',
    description:
      'Reveal the natural beauty of existing concrete with progressive diamond grinding and densification. Low maintenance, long lasting, and genuinely impressive underfoot.',
  },
  {
    Icon: Sun,
    title: 'Patios, Driveways and Outdoor',
    benefit: 'Weatherproof finishes that shrug off the British elements.',
    description:
      'UV-stable, anti-slip outdoor resin systems for patios, driveways and pool surrounds. Designed to handle frost, rain and everything the British climate sends their way.',
  },
  {
    Icon: Wrench,
    title: 'Repairs and Resurfacing',
    benefit: 'Cracked or damaged floors levelled and resurfaced.',
    description:
      'Crumbling concrete or damaged substrates are no obstacle. We grind back, repair and resurface to give problem floors a solid, sealed new base ready for any coating.',
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">What we do</p>
          <h2
            id="services-heading"
            className="section-title text-4xl sm:text-5xl mb-5"
          >
            Floor coating services
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From a single garage to a full commercial fit-out. Every job gets the same
            meticulous preparation and the same premium finish.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ Icon, title, benefit, description }, i) => (
            <Reveal key={title} delay={i * 70}>
            <article
              className="glass-card rounded-md p-7 flex flex-col gap-4 h-full"
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,146,42,0.15) 0%, rgba(201,146,42,0.05) 100%)',
                  border: '1px solid rgba(201,146,42,0.22)',
                }}
                aria-hidden="true"
              >
                <Icon size={22} className="text-gold-500" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-xl mb-1">{title}</h3>
                <p className="text-gold-600 text-sm font-medium mb-3">{benefit}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Not sure which system is right for you? We will advise at the site visit, free of charge.
          </p>
          <a href="#contact" className="btn-primary">
            Book a free consultation
          </a>
        </div>

      </div>
    </section>
  )
}
