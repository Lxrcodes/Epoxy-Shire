export default function BrandStory() {
  return (
    <section
      aria-label="The Epoxy Shire story"
      className="relative bg-charcoal-950 py-16 lg:py-20"
    >
      {/* Horse background — mobile only */}
      <img
        src="/shire%20horse.jpeg"
        alt=""
        aria-hidden="true"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />
      <div aria-hidden="true" className="md:hidden absolute inset-0 bg-charcoal-950/65" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

          {/* Story card */}
          <div
            className="rounded-md p-8 lg:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(201,146,42,0.12) 0%, rgba(13,16,32,0.85) 60%)',
              border: '1px solid rgba(201,146,42,0.2)',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{ background: 'radial-gradient(circle, #e8c347 0%, transparent 70%)' }}
            />
            <p className="font-heading font-semibold text-gold-600 text-xs uppercase tracking-[0.2em] mb-4">
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
              style={{ background: 'linear-gradient(to right, rgba(201,146,42,0.5), transparent)' }}
            />
            <p className="text-gold-700 text-sm font-heading font-medium mt-4 italic">
              Epoxy Shire. Bedfordshire's premium resin floor specialists.
            </p>
          </div>

          {/* Horse image — desktop only */}
          <div className="hidden md:block aspect-square overflow-hidden rounded-md" style={{ border: '1px solid rgba(201,146,42,0.2)' }}>
            <img
              src="/shire%20horse.jpeg"
              alt="Shire horse"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
