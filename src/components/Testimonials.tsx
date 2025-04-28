import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "GoGetWell.ai has transformed how our practice handles patient data. The AI-assisted diagnoses have improved our accuracy and saved us countless hours.",
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    organization: "Metropolitan Health Center",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    quote: "As a busy physician, I need tools that save time without compromising care quality. GoGetWell.ai delivers exactly that with its intuitive interface and powerful AI capabilities.",
    name: "Dr. Michael Chen",
    title: "Primary Care Physician",
    organization: "Westside Medical Group",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    quote: "The predictive analytics feature helped us identify a critical health issue in a patient before it became an emergency. This platform isn't just convenient—it's saving lives.",
    name: "Dr. Emily Patel",
    title: "Pediatric Specialist",
    organization: "Children's Wellness Clinic",
    image: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from doctors and medical professionals who have transformed
            their practice with GoGetWell.ai.
          </p>
        </div>

        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="testimonial-card">
            <div className="absolute top-6 right-6">
              <Quote size={36} className="text-primary/20" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"></div>
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow-md relative z-10"
                />
              </div>

              <div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">{testimonials[activeIndex].name}</span>
                  <span className="text-sm text-gray-600">{testimonials[activeIndex].title}</span>
                  <span className="text-sm font-medium text-primary">{testimonials[activeIndex].organization}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;