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

        {/* Heading + brand story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <p className="section-label mb-4">Why choose us</p>
            <h2 id="why-us-heading" className="section-title text-4xl sm:text-5xl mb-6">
              Strength you can<br />
              <span className="gold-text">see underfoot.</span>
            </h2>
            <a href="#contact" className="btn-primary mt-2">
              Get a free quote
            </a>
          </div>

          {/* Brand story panel */}
          <div
            className="rounded-md p-8 lg:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(201,146,42,0.08) 0%, rgba(13,16,32,0.97) 60%)',
              border: '1px solid rgba(201,146,42,0.2)',
            }}
          >
            {/* Decorative horse-brand element */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                background: 'radial-gradient(circle, #e8c347 0%, transparent 70%)',
              }}
            />
            <p
              className="font-heading font-semibold text-gold-600 text-xs uppercase tracking-[0.2em] mb-4"
              aria-hidden="true"
            >
              The Epoxy Shire story
            </p>
            <blockquote className="text-slate-200 text-base lg:text-lg leading-relaxed font-sans">
              The shire horse was the breed that built Britain. Bred for strength, dependability and
              a full day's honest work. That is exactly what we expect of every floor we install.
            </blockquote>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              An epoxy floor earns its keep. You get a space that works harder, looks better and
              lasts longer. We choose the materials and methods that make that possible. No
              shortcuts, no cheap systems, no filler passes.
            </p>
            <div
              aria-hidden="true"
              className="mt-6 h-px w-full"
              style={{
                background: 'linear-gradient(to right, rgba(201,146,42,0.5), transparent)',
              }}
            />
            <p className="text-gold-700 text-sm font-heading font-medium mt-4 italic">
              Epoxy Shire. Bedfordshire's premium resin floor specialists.
            </p>
          </div>
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
