interface Finish {
  title: string
  description: string
  use: string
  src: string
}

const FINISHES: Finish[] = [
  {
    title: 'Metallic Epoxy',
    description:
      'A flowing, three-dimensional shimmer effect. Each floor is completely unique, with pigments blended on-site to create liquid-metal movement across the surface. Stunning in showrooms, studios and statement interiors.',
    use: 'Showrooms, studios, statement interiors, garages',
    src: '/metallic-epoxy.jpg',
  },
  {
    title: 'Flake and Chip',
    description:
      'Decorative vinyl flakes broadcast into the basecoat create a professional, practical finish with excellent grip underfoot. The most popular choice for garages and workshop floors: robust, easy to clean and hard to scuff.',
    use: 'Garages, workshops, commercial entries, utility rooms',
    src: '/flake-and-chip.jpg',
  },
  {
    title: 'Quartz System',
    description:
      'Broadcast quartz aggregate creates a robust, textured surface with outstanding slip resistance. Ideal for commercial kitchens, pool surrounds, wet rooms and anywhere traction is non-negotiable.',
    use: 'Commercial kitchens, pool surrounds, wet rooms, steps',
    src: '/quartz-epoxy.jpeg',
  },
  {
    title: 'Solid Colour',
    description:
      'Clean, seamless and bold. Choose from hundreds of RAL or BS colours for a refined, contemporary look. Simple, lasting, and adaptable to any setting from contemporary kitchens to industrial workshops.',
    use: 'Any room, garages, commercial spaces, basements',
    src: '/solid-epoxy.jpeg',
  },
  {
    title: 'Polyaspartic Topcoat',
    description:
      'An ultra-fast-curing, UV-stable clear topcoat that delivers maximum scratch and chemical resistance. Applied over any basecoat system, with floors ready to walk on within hours. A must for commercial use.',
    use: 'Top coat for any system, commercial floors, fast-turnaround projects',
    src: '/Polyaspartic-topcoat-epoxy.jpg',
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

                {/* Finish photo */}
                <div
                  className="lg:w-2/5 flex-shrink-0 relative overflow-hidden"
                  style={{ minHeight: '260px' }}
                >
                  <img
                    src={finish.src}
                    alt={finish.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
