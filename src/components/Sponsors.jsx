import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/cd79748e-d096-4c92-9033-d29db6501bd8/bubbly-q-dallas.jpg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/f587a084-c529-4b3e-82fa-47915454f54b/central+track.png?format=300w",
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/f0eda317-1cb5-4193-81ad-f4761ea1d9fc/d-online-logo.jpg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/a5cac08f-41eb-4ece-b297-06034e8cb621/dallasites101.jpg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/2289bf38-77e1-46e7-bc71-9b2b87e44a0c/FITISH.jpg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/64b596ef7f7a6c3fe21b4935/3a0a25ea-8fcf-4d83-b857-5f815931f707/giant-noise-logo.png?format=300w"
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium mb-12 tracking-[0.2em] uppercase text-xs">
    party partners
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {sponsors.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center group"
            >
              <img 
                src={logo} 
                alt={`Sponsor ${index}`} 
                className="h-8 md:h-10 object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter brightness-200 invert" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
