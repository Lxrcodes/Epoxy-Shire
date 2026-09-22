import { Shield, Droplets, Sparkles, Zap, Award, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

interface Feature {
  Icon: LucideIcon
  title: string
  body: string
}

const FEATURES: Feature[] = [
  {
    Icon: Shield,
    title: 'Built to last a lifetime',
    body: 'Properly prepared and applied epoxy bonds to concrete at a molecular level. It will not peel, lift or flake. The finish you see on day one is the finish you will still see in a decade.',
  },
  {
    Icon: Droplets,
    title: 'Chemical and stain resistant',
    body: 'Oil, coolant, cleaning chemicals, wine, grease. They wipe up cleanly, they do not soak in. An epoxy floor is essentially impervious to household and workshop spills.',
  },
  {
    Icon: Sparkles,
    title: 'Effortless to clean',
    body: 'Seamless, pore-free surfaces stay clean with a mop and a bucket. No grout lines, no textured joints, no crevices where dirt accumulates.',
  },
  {
    Icon: Zap,
    title: 'Anti-slip options available',
    body: 'Broadcast aggregates and matting topcoats are available across every finish, giving you full slip resistance without sacrificing the quality of the finish.',
  },
  {
    // TODO: Update guarantee body copy once terms and duration are confirmed
    Icon: Award,
    title: 'Long-lasting guarantee',
    body: 'We stand firmly behind our work. Every installation is backed by a workmanship guarantee.',
  },
  {
    Icon: Users,
    title: 'Local and straightforward to deal with',
    body: 'Based right here in Bedfordshire. On time, tidy and honest about what your floor needs. No upselling, no jargon, no vanishing act once the job is done.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Why choose us</p>
          <h2 id="why-us-heading" className="section-title text-4xl sm:text-5xl mb-6">
            Strength you can<br />
            <span className="gold-text">see underfoot.</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70}>
            <article className="glass-card rounded-md p-7 h-full">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(201,146,42,0.1)',
                  border: '1px solid rgba(201,146,42,0.2)',
                }}
                aria-hidden="true"
              >
                <Icon size={20} className="text-gold-500" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
