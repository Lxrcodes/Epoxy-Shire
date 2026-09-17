import { useState } from 'react'
import { Phone, Mail, MessageCircle, Plus, Minus } from 'lucide-react'
import { SITE } from '../config/site'

interface FormState {
  name: string
  phone: string
  email: string
  floorType: string
  area: string
  message: string
}

interface FaqItem {
  question: string
  answer: string
}

const FLOOR_TYPES = [
  'Garage floor',
  'Residential interior floor',
  'Commercial or industrial floor',
  'Patio or driveway',
  'Concrete grinding and polishing',
  'Repairs and resurfacing',
  'Not sure, please advise me',
] as const

const FAQS: FaqItem[] = [
  {
    question: 'How long does it take?',
    answer:
      'Most residential garage and room floors take one to two days, including cure time. Larger commercial floors vary by area and specification. We will give you a realistic, honest timeline at the quote stage.',
  },
  {
    question: 'Is an epoxy floor slippery?',
    answer:
      'A standard gloss epoxy can be smooth underfoot when wet. We always recommend an anti-slip aggregate or a matting topcoat for kitchens, bathrooms, outdoor areas and any commercial floor. This is available across all finish types at minimal extra cost.',
  },
  {
    question: 'Can you coat over existing concrete?',
    answer:
      'Yes, in most cases. Provided the concrete is structurally sound and dry, we can grind, prepare and coat over it. We check moisture levels, condition and suitability during the site visit and will advise honestly if there are any issues.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Prices vary by floor size, substrate condition and the system chosen. As a general guide, budget from around £30 to £60 per square metre for a quality professionally installed epoxy system. Metallic and specialist finishes sit at the higher end. Contact us for an accurate, no-obligation quote.',
  },
  {
    question: 'How long before I can use the floor?',
    answer:
      'Light foot traffic is typically possible after 24 hours. Vehicle traffic and heavy loads are safe after 48 to 72 hours, depending on the system. Polyaspartic systems cure significantly faster. We will confirm exact cure times for your chosen product in writing.',
  },
]

const EMPTY_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  floorType: '',
  area: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace this mailto fallback with a real form handler.
    // Options: Netlify Forms, Formspree, EmailJS, or a serverless function.
    const subject = encodeURIComponent(
      `Floor Coating Quote: ${form.floorType || 'General enquiry'}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Floor type: ${form.floorType}`,
        `Approximate area: ${form.area} m²`,
        '',
        `Message:`,
        form.message,
      ].join('\n')
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-charcoal-800 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="section-label mb-4">Get in touch</p>
          <h2 id="contact-heading" className="section-title text-4xl sm:text-5xl mb-5">
            Ready for a better floor?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Get in touch for a free, no-obligation site visit and quote. We typically respond the
            same day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Quote form: takes 3/5 width on desktop */}
          <div className="lg:col-span-3">
            <div
              className="rounded-md p-7 sm:p-9"
              style={{
                background: 'linear-gradient(135deg, rgba(13,16,32,0.98) 0%, rgba(19,26,46,0.95) 100%)',
                border: '1px solid rgba(201,146,42,0.15)',
              }}
            >
              <h3 className="font-heading font-semibold text-white text-xl mb-1">
                Request a free quote
              </h3>
              {/* TODO: Wire up to Netlify Forms, Formspree or similar before launch — currently opens email client */}

              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'linear-gradient(135deg, #c9922a, #e8c347)' }}
                    aria-hidden="true"
                  >
                    <span className="text-charcoal-950 font-bold text-lg">✓</span>
                  </div>
                  <p className="font-heading font-semibold text-white text-lg mb-2">
                    Thanks. Your email client should have opened.
                  </p>
                  <p className="text-slate-400 text-sm">
                    If it did not open, email us directly at{' '}
                    <a href={`mailto:${SITE.email}`} className="text-gold-500 hover:text-gold-400">
                      {SITE.email}
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-slate-400 hover:text-gold-400 text-sm underline transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Quote request form">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Full name <span className="text-gold-600" aria-label="required">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input-field"
                        placeholder="Your name"
                        value={form.name}
                        onChange={update('name')}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Phone number <span className="text-gold-600" aria-label="required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="input-field"
                        placeholder="07XXX XXXXXX"
                        value={form.phone}
                        onChange={update('phone')}
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input-field"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={update('email')}
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="floorType" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Floor type <span className="text-gold-600" aria-label="required">*</span>
                      </label>
                      <select
                        id="floorType"
                        className="input-field"
                        value={form.floorType}
                        onChange={update('floorType')}
                        required
                      >
                        <option value="">Select type</option>
                        {FLOOR_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="area" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Approximate area (m²)
                      </label>
                      <input
                        id="area"
                        type="number"
                        min="1"
                        className="input-field"
                        placeholder="e.g. 25"
                        value={form.area}
                        onChange={update('area')}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Tell us more
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Condition of the floor, preferred finish, timing, any questions..."
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-sm py-4">
                    Send my quote request
                  </button>

                  <p className="text-slate-600 text-xs text-center mt-4">
                    By submitting you agree to us contacting you about your enquiry. We do not sell or share your details.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact details + FAQ: takes 2/5 width on desktop */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Contact methods */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-5">
                Prefer to call or message?
              </h3>
              <div className="flex flex-col gap-4">

                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-4 glass-card rounded-sm p-4 group"
                  aria-label={`Call us on ${SITE.phoneDisplay}`}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.2)' }}
                  >
                    <Phone size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">
                      {SITE.phoneDisplay}
                    </p>
                    <p className="text-slate-400 text-xs">Mon to Sat, 8am to 6pm</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 glass-card rounded-sm p-4 group"
                  aria-label="Email us"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.2)' }}
                  >
                    <Mail size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">
                      {SITE.email}
                    </p>
                    <p className="text-slate-400 text-xs">We reply same day</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20an%20epoxy%20floor%20coating.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-sm p-4 group transition-all duration-200"
                  style={{
                    background: 'rgba(37,211,102,0.08)',
                    border: '1px solid rgba(37,211,102,0.2)',
                  }}
                  aria-label="Message us on WhatsApp"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.25)' }}
                  >
                    <MessageCircle size={18} style={{ color: '#25d366' }} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium" style={{ color: '#25d366' }}>
                      WhatsApp us
                    </p>
                    <p className="text-slate-400 text-xs">Quick and easy. Tap to open.</p>
                  </div>
                </a>

              </div>
            </div>

            {/* FAQ accordion */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-5">
                Common questions
              </h3>
              <div className="flex flex-col divide-y divide-charcoal-600">
                {FAQS.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-3 py-4 text-left group"
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="text-slate-200 text-sm font-medium group-hover:text-gold-400 transition-colors">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 text-gold-700 group-hover:text-gold-500 transition-colors">
                        {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? 'max-h-60 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-slate-400 text-sm leading-relaxed pr-6">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
