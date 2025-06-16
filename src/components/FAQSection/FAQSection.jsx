import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What's included in the premium event package?",
      answer: "Our premium package offers dedicated event managers, luxury venue sourcing, elite vendor coordination, detailed timeline creation, full-day event supervision, and a comprehensive post-event analysis with actionable insights."
    },
    {
      question: "How do you manage last-minute changes?",
      answer: "Our team ensures flexibility with buffer resources, backup vendors, and 24/7 availability during your event. We use real-time communication tools to address emergencies swiftly and seamlessly."
    },
    {
      question: "What sets your service apart from others?",
      answer: "We blend data-driven precision with creative artistry, providing real-time budget tracking, 3D event visualizations, and a 98% client retention rate backed by our satisfaction guarantee."
    },
    {
      question: "Can you customize events for unique themes?",
      answer: "Absolutely. Our team specializes in crafting bespoke events tailored to your vision, incorporating unique themes, custom decor, and immersive experiences that reflect your style."
    }
  ];

  const benefits = [
    { title: "Elite Expertise", description: "Work with top-tier planners with over a decade of experience." },
    { title: "Seamless Execution", description: "Enjoy stress-free events with our meticulous coordination." },
    { title: "Luxury Vendors", description: "Access our exclusive network of premium vendors." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const blurRevealVariants = {
    hidden: { filter: 'blur(8px)', opacity: 0, y: 30 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-gray-100 py-32 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blurRevealVariants}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Your Event Questions, Answered
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Discover how our premium event planning services deliver unparalleled experiences.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blurRevealVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={blurRevealVariants}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'ring-2 ring-black' : 'hover:shadow-md'}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold pr-4 group-hover:text-black transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-black"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        filter: 'blur(0px)',
                        transition: {
                          height: { duration: 0.35, ease: 'easeOut' },
                          opacity: { duration: 0.25, delay: 0.1 },
                          filter: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        filter: 'blur(4px)',
                        transition: {
                          height: { duration: 0.25 },
                          opacity: { duration: 0.15 },
                          filter: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 text-gray-700 border-t border-gray-200 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blurRevealVariants}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            Plan Your Dream Event
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
