import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Athlete",
      content: "This platform completely transformed my training routine. The personalized plans and tracking features helped me achieve my personal best in just 3 months!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Fitness Coach",
      content: "I recommend this to all my clients. The analytics dashboard provides insights I can't get anywhere else, making it easier to tailor programs for each individual.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Weekend Warrior",
      content: "As someone who balances a full-time job with fitness goals, this has been a game-changer. The mobile app keeps me on track even during busy weeks.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Community Says
        </motion.h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
                />
                <div>
                  <p className="text-gray-600 italic mb-4 text-lg">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                    <p className="text-indigo-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 transition"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 transition"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;