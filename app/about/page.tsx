import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="h-14" aria-hidden="true" />
      <About />
      <Footer />
    </main>
  )
}
