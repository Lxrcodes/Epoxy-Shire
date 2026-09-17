interface Finish {
  title: string
  description: string
  use: string
  gradient: string
  accentColor: string
}

const FINISHES: Finish[] = [
  {
    title: 'Metallic Epoxy',
    description:
      'A flowing, three-dimensional shimmer effect. Each floor is completely unique, with pigments blended on-site to create liquid-metal movement across the surface. Stunning in showrooms, studios and statement interiors.',
    use: 'Showrooms, studios, statement interiors, garages',
    gradient:
      'radial-gradient(ellipse at 40% 55%, rgba(232,195,71,0.65) 0%, rgba(201,146,42,0.4) 30%, rgba(20,184,166,0.25) 62%, rgba(8,10,15,0.95) 100%)',
    accentColor: 'rgba(232,195,71,0.7)',
  },
  {
    title: 'Flake and Chip',
    description:
      'Decorative vinyl flakes broadcast into the basecoat create a professional, practical finish with excellent grip underfoot. The most popular choice for garages and workshop floors: robust, easy to clean and hard to scuff.',
    use: 'Garages, workshops, commercial entries, utility rooms',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(148,163,184,0.55) 0%, rgba(100,116,139,0.40) 40%, rgba(51,65,85,0.7) 100%)',
    accentColor: 'rgba(148,163,184,0.6)',
  },
  {
    title: 'Quartz System',
    description:
      'Broadcast quartz aggregate creates a robust, textured surface with outstanding slip resistance. Ideal for commercial kitchens, pool surrounds, wet rooms and anywhere traction is non-negotiable.',
    use: 'Commercial kitchens, pool surrounds, wet rooms, steps',
    gradient:
      'radial-gradient(ellipse at 45% 45%, rgba(203,213,225,0.60) 0%, rgba(148,163,184,0.45) 40%, rgba(71,85,105,0.75) 100%)',
    accentColor: 'rgba(203,213,225,0.65)',
  },
  {
    title: 'Solid Colour',
    description:
      'Clean, seamless and bold. Choose from hundreds of RAL or BS colours for a refined, contemporary look. Simple, lasting, and adaptable to any setting from contemporary kitchens to industrial workshops.',
    use: 'Any room, garages, commercial spaces, basements',
    gradient:
      'linear-gradient(135deg, rgba(37,99,235,0.60) 0%, rgba(30,58,138,0.78) 50%, rgba(15,29,74,0.92) 100%)',
    accentColor: 'rgba(37,99,235,0.7)',
  },
  {
    title: 'Polyaspartic Topcoat',
    description:
      'An ultra-fast-curing, UV-stable clear topcoat that delivers maximum scratch and chemical resistance. Applied over any basecoat system, with floors ready to walk on within hours. A must for commercial use.',
    use: 'Top coat for any system, commercial floors, fast-turnaround projects',
    gradient:
      'linear-gradient(135deg, rgba(20,184,166,0.45) 0%, rgba(13,148,136,0.60) 40%, rgba(8,10,15,0.90) 100%)',
    accentColor: 'rgba(20,184,166,0.6)',
  },
]

export default function Finishes() {
  return (
    <section id="finishes" aria-labelledby="finishes-heading" className="bg-charcoal-800 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Finishes</p>
          <h2 id="finishes-heading" className="section-title text-4xl sm:text-5xl mb-5">
            Every look. Every setting.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Five distinct finish families, each suited to different environments and
            aesthetics. We will help you choose the right one.
          </p>
        </div>

        {/* Finishes list */}
        <div className="flex flex-col gap-6">
          {FINISHES.map((finish, index) => (
            <article
              key={finish.title}
              className="glass-card rounded-md overflow-hidden"
              aria-label={`Finish: ${finish.title}`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/* Image placeholder */}
                <div
                  className="lg:w-2/5 flex-shrink-0 relative overflow-hidden"
                  style={{
                    minHeight: '260px',
                    background: finish.gradient,
                  }}
                  aria-hidden="true"
                >
                  {/* Subtle reflection lines */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(160deg, transparent, transparent 28px, rgba(255,255,255,0.03) 28px, rgba(255,255,255,0.03) 29px)',
                    }}
                  />
                  {/* TODO: Replace gradient background with a real photo of this finish */}
                </div>

                {/* Text */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-gold-600 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
                    0{index + 1}
                  </p>
                  <h3 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-4">
                    {finish.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {finish.description}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-gold-700 text-xs font-heading uppercase tracking-wide flex-shrink-0 mt-0.5">
                      Ideal for:
                    </span>
                    <span className="text-slate-400 text-xs">{finish.use}</span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
