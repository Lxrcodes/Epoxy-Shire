import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import MobileBar from './components/MobileBar'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Services from './components/Services'
import Finishes from './components/Finishes'
import Gallery from './components/Gallery'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import GettingStarted from './components/GettingStarted'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CtaBand from './components/CtaBand'

export default function App() {
  return (
    <div className="bg-charcoal-900 text-slate-200 font-sans overflow-x-hidden pb-16 md:pb-0">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Services />
        <CtaBand
          headline="Ready to transform your floor?"
          subhead="From a single garage to a full commercial fit-out. Free quotes, no obligation."
          showGuarantee
        />
        <Finishes />
        <CtaBand
          headline="Not sure which finish suits you?"
          subhead="We advise at the site visit, free of charge. No upselling, just honest guidance."
        />
        <Gallery />
        <CtaBand
          headline="Want a floor like these?"
          subhead="Every project is unique. Tell us what you need and we will tell you what is possible."
        />
        <Process />
        <WhyUs />
        <CtaBand
          headline="Built to last, installed with care."
          subhead="Call us or fill in the form. We respond the same day."
          showGuarantee
        />
        <Testimonials />
        <ServiceArea />
        <CtaBand
          headline="Covering Bedfordshire and beyond."
          subhead="Based in Bedfordshire, happy to travel for the right project. Get in touch to check."
        />
        <GettingStarted />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}
