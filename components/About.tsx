'use client'

import { Share2, Mail, Link as LinkIcon } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              <span className="text-[#e8714e]">Ajay Prakash Pathak:</span>
              <br />
              An Introduction
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              <strong>Ajay Prakash Pathak</strong>, a distinguished former senior Indian bureaucrat and public administrator, was born into a family rooted in academic discipline and public values. His early upbringing was closely guided by the traditional Indian value systems, which fostered a strong foundation in community service and administrative excellence. Growing up under the guidance of family elders who prioritized educational integrity, the young Pathak's early years were characterized by a sharp academic focus and an early inclination toward national development.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              His family transitioned to focus on higher technical excellence as he grew, paving the way for his pursuit of professional engineering. He completed his Bachelor of Technology in Civil Engineering from the prestigious <strong>Birla Institute of Technology</strong>, a phase that deeply shaped his analytical and structural approach to public works. Influenced heavily by India's post-independence nation-building narrative and the biographies of prominent reformists, Pathak chose a path of public service, eventually rising to become an Additional Director General (ADG) level officer. His career stands as a reflection of structured training, early philosophical grounding, and a lifelong commitment to national infrastructure and administrative strategy.
            </p>

            <button className="border-2 border-[#e8714e] text-[#e8714e] px-6 py-2 rounded font-medium hover:bg-[#e8714e] hover:text-white transition-colors">
              READ MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-80 rounded-full overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="text-gray-500">Profile Image</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 mb-16">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#e8714e] hover:text-[#d45a34] transition-colors">
            <Share2 className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#e8714e] hover:text-[#d45a34] transition-colors">
            <LinkIcon className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#e8714e] hover:text-[#d45a34] transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Journey Timeline Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 underline decoration-[#e8714e] underline-offset-4">
            Journey
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 top-0" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: 'Early Years',
                  title: 'Academic Foundation',
                  description:
                    'Born into a family rooted in academic discipline and public values, guided by traditional Indian value systems emphasizing community service and administrative excellence.',
                  image: 'Academic Foundation',
                },
                {
                  year: 'Higher Education',
                  title: 'Technical Engineering',
                  description: 'Completed Bachelor of Technology in Civil Engineering from the prestigious Birla Institute of Technology.',
                  image: 'Engineering Studies',
                },
                {
                  year: 'Career Start',
                  title: 'Public Service Entry',
                  description: 'Chose a path of public service influenced by India\'s post-independence nation-building narrative and prominent reformist biographies.',
                  image: 'Service Begins',
                },
                {
                  year: 'Administrative Growth',
                  title: 'Rising Officer',
                  description: 'Progressed through various administrative positions, demonstrating structured training and philosophical grounding in public administration.',
                  image: 'Administrative Role',
                },
                {
                  year: 'Infrastructure Focus',
                  title: 'Public Works Leadership',
                  description: 'Led significant national infrastructure projects, applying analytical and structural approach to public works development.',
                  image: 'Infrastructure',
                },
                {
                  year: 'Senior Level',
                  title: 'ADG Officer Status',
                  description: 'Elevated to Additional Director General (ADG) level officer, recognized for excellence in administration and strategic planning.',
                  image: 'Senior Leadership',
                },
                {
                  year: 'Distinguished Service',
                  title: 'National Impact',
                  description: 'Continued commitment to national infrastructure and administrative strategy as a senior bureaucrat and public administrator.',
                  image: 'National Service',
                },
                {
                  year: 'Legacy',
                  title: 'Administrative Excellence',
                  description: 'A career reflecting structured training, early philosophical grounding, and lifelong dedication to India\'s development and public service.',
                  image: 'Legacy',
                },
              ].map((item, index) => (
                <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:grid-cols-2 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1'}`}>
                  {/* Text Content */}
                  <div className={`${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="mb-4">
                      <span className="inline-block bg-[#e8714e] text-white px-4 py-2 rounded font-bold text-lg">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-full md:w-80 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
                      {item.image}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-[#e8714e] rounded-full border-4 border-white shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
