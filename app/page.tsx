import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import VideoSection from '@/components/VideoSection'
import ImpactSection from '@/components/ImpactSection'
import TimelineSection from '@/components/TimelineSection'
import PressSection from '@/components/PressSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="h-14" aria-hidden="true" />

      <HeroSlider />
      <VideoSection />

      <div className="h-px bg-gray-100 mx-4" aria-hidden="true" />

      <ImpactSection />

      <div className="h-px bg-gray-100 mx-4" aria-hidden="true" />

      <TimelineSection />
      <PressSection />
      <Footer />
    </main>
  )
}
