import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Bride",
    content: "A Little Party Co transformed our wedding venue into a fairytale. The attention to detail was absolutely incredible!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Corporate Event Manager",
    content: "Professional, creative, and easy to work with. They understood our brand identity perfectly and delivered an amazing activation.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Birthday Host",
    content: "The balloon installation was the talk of the party! I can't thank Daniell and Taisia enough for their creativity.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Love</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Don't just take our word for it. Here's what our clients have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300 relative group"
            >
              <Quote className="w-12 h-12 text-purple-500/20 absolute top-8 right-8 group-hover:text-purple-500/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-white text-lg font-serif">{testimonial.name}</p>
                <p className="text-sm text-purple-400 font-medium uppercase tracking-wide">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
