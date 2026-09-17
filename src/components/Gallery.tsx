interface GalleryCell {
  label: string
  sublabel: string
  tag?: 'Before' | 'After'
  gradient: string
  span?: 'wide' | 'tall' | 'normal'
}

const CELLS: GalleryCell[] = [
  {
    label: 'Metallic garage floor',
    sublabel: 'Bedford, bronze and teal metallic epoxy',
    tag: 'After',
    gradient:
      'radial-gradient(ellipse at 35% 65%, rgba(232,195,71,0.5) 0%, rgba(20,184,166,0.25) 50%, rgba(8,10,15,0.9) 100%)',
    span: 'wide',
  },
  {
    label: 'Garage floor, before',
    sublabel: 'Cracked, pitted concrete prior to preparation',
    tag: 'Before',
    gradient: 'linear-gradient(135deg, rgba(71,85,105,0.5) 0%, rgba(30,41,59,0.8) 100%)',
  },
  {
    label: 'Garage floor, after',
    sublabel: 'Solid colour with anti-slip broadcast',
    tag: 'After',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.55) 0%, rgba(15,29,74,0.85) 100%)',
  },
  {
    label: 'Residential kitchen',
    sublabel: 'Luton, seamless dove-grey solid colour',
    tag: 'After',
    gradient:
      'linear-gradient(135deg, rgba(148,163,184,0.45) 0%, rgba(71,85,105,0.65) 100%)',
    span: 'tall',
  },
  {
    label: 'Commercial workshop floor',
    sublabel: 'Dunstable, high-build grey flake system',
    tag: 'After',
    gradient:
      'radial-gradient(ellipse at 40% 60%, rgba(100,116,139,0.6) 0%, rgba(30,41,59,0.85) 100%)',
  },
  {
    label: 'Patio, after',
    sublabel: 'Leighton Buzzard, UV-stable outdoor system',
    tag: 'After',
    gradient:
      'radial-gradient(ellipse at 55% 45%, rgba(20,184,166,0.45) 0%, rgba(13,148,136,0.30) 50%, rgba(8,10,15,0.85) 100%)',
  },
]

const TAG_STYLES: Record<string, string> = {
  Before: 'bg-slate-700/90 text-slate-200',
  After: 'bg-gold-700/90 text-charcoal-950',
}

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Project gallery</p>
          <h2 id="gallery-heading" className="section-title text-4xl sm:text-5xl mb-5">
            Our work, up close.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every job below is a real project, completed in Bedfordshire and the surrounding area.
            Before-and-after pairs show the transformation.
          </p>
          {/* TODO: Replace gradient cells below with real project photos */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {CELLS.map((cell, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-md group ${
                cell.span === 'wide' ? 'sm:col-span-2' : ''
              } ${cell.span === 'tall' ? 'sm:row-span-2' : ''}`}
              style={{
                background: cell.gradient,
                border: '1px solid rgba(201,146,42,0.14)',
              }}
              aria-label={cell.label}
            >
              {/* Reflection sheen */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
                }}
              />
              {/* Placeholder watermark */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity"
              >
                <p className="font-heading font-bold text-4xl text-white tracking-widest rotate-[-15deg] select-none">
                  PHOTO
                </p>
              </div>
              {/* Caption */}
              <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-charcoal-950/90 to-transparent">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-white text-sm font-medium font-heading leading-tight">
                      {cell.label}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">{cell.sublabel}</p>
                  </div>
                  {cell.tag && (
                    <span
                      className={`flex-shrink-0 text-xs font-heading font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${TAG_STYLES[cell.tag]}`}
                    >
                      {cell.tag}
                    </span>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>


      </div>
    </section>
  )
}
