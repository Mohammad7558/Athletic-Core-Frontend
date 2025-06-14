import React from 'react';
import { motion } from 'framer-motion';

// Sponsor data with Heroicons SVG (replace with actual sponsor data)
const sponsors = [
  {
    name: 'SportFit',
    description: 'Premier provider of high-performance athletic gear, empowering athletes to excel.',
    website: 'https://sportfit.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  },
  {
    name: 'PowerPulse',
    description: 'Innovative sports nutrition for peak performance and optimal recovery.',
    website: 'https://powerpulse.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  },
  {
    name: 'AthletePro',
    description: 'Elite training programs and coaching for professional athletes and teams.',
    website: 'https://athletepro.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    name: 'PeakPulse',
    description: 'Cutting-edge sports tech for real-time performance tracking and analytics.',
    website: 'https://peakpulse.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
  },
  {
    name: 'FitCore',
    description: 'Comprehensive fitness solutions, from equipment to wellness programs.',
    website: 'https://fitcore.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="M6.5 6.5 17.5 17.5"/><path d="M21 21l-1-1"/><path d="M3 3l1 1"/><path d="M18 22l4-4"/><path d="M2 6l4-4"/></svg>`,
  },
  {
    name: 'EnduraMax',
    description: 'Trusted endurance supplements and recovery aids for athletes.',
    website: 'https://enduramax.com',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 13H7l2-4 1.5 3H15l-2 4"/></svg>`,
  },
];

const SponsorsPartners = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.4, 0, 0.2, 1], 
        staggerChildren: 0.1 
      } 
    },
  };

  // Animation for individual sponsor items
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] 
      } 
    },
  };

  // Animation for the section title with blur effect
  const titleVariants = {
    hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)', 
      transition: { 
        duration: 1, 
        ease: [0.4, 0, 0.2, 1],
        filter: { duration: 1.2 } // Slightly longer for blur
      } 
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title with Blur Animation on Scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Sponsors & Partners
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            We are proud to partner with industry leaders dedicated to advancing athletic performance and innovation.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)', 
                transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } 
              }}
              className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Heroicon SVG */}
              <div 
                className="w-12 h-12 mx-auto mb-3 text-gray-700"
                dangerouslySetInnerHTML={{ __html: sponsor.svgIcon }}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{sponsor.name}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{sponsor.description}</p>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                Visit Website
              </a>
              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-blue-50 opacity-0"
                whileHover={{ opacity: 0.15, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsPartners;