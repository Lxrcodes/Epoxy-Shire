interface GalleryCell {
  label: string
  sublabel: string
  src: string
  objectPosition?: string
  aspectRatio?: string
}

const CELLS: GalleryCell[] = [
  {
    label: 'Kitchen floor',
    sublabel: 'Metallic swirl epoxy over old ceramic tile',
    src: '/image1.jpeg',
  },
  {
    label: 'Commercial warehouse',
    sublabel: 'Full-broadcast flake system over bare concrete',
    src: '/image2.jpeg',
  },
  {
    label: 'Large garage',
    sublabel: 'Metallic marble epoxy over cracked concrete slab',
    src: '/image3.jpeg',
  },
  {
    label: 'Garage floor',
    sublabel: 'Deep blue metallic over stained, cracked slab',
    src: '/image4.jpeg',
  },
]

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
            Each photo shows the before-and-after transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {CELLS.map((cell, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-md group"
              style={{ aspectRatio: cell.aspectRatio ?? '9/16' }}
              aria-label={cell.label}
            >
              <img
                src={cell.src}
                alt={cell.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: cell.objectPosition ?? 'center' }}
                loading="eager"
              />
              {/* Before & After badge */}
              <span
                className="absolute top-3 left-3 text-xs font-heading font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-gold-700/90 text-charcoal-950"
              >
                Before &amp; After
              </span>
              {/* Caption */}
              <figcaption className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-white text-sm font-medium font-heading leading-tight">
                  {cell.label}
                </p>
                <p className="text-slate-200 text-xs mt-0.5">{cell.sublabel}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
