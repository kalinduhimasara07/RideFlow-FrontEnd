import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import PopularRoutes from './Components/PopularRoutes'
import Features from './Components/Features'
import Departures from './Components/Departures'
import Testimonials from './Components/Testimonials'
import CTABanner from './Components/CTABanner'
import Footer from './Components/Footer'
import ImageCarousel from './Components/ImageCarousel'

export default function App() {
  return (
    <div className="min-h-screen bg-navy font-dm">
      <ImageCarousel />
      <Navbar />
      <Hero />
      <PopularRoutes />
      <Features />
      <Departures />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}
