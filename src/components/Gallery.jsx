import React from "react";
import { motion } from "framer-motion";

const images = [
  
  "https://i.pinimg.com/736x/13/f9/ba/13f9ba94dd5c1e26ef2bffeda36b1ff2.jpg",

  "https://i.pinimg.com/736x/c3/08/17/c30817eec5700473c0da10ea3558ea29.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipMqakzn-2BTH_w3VWucLo8thVbXGZnTBy5-BIv7=s1360-w1360-h1020-rw",
  "https://i.pinimg.com/736x/fc/a2/12/fca2126b5b5031f82fdc4b378ed07923.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipPpPbaj3Wf_sfZ6ULDTqKlPs9225CwmLkYYZciA=s1360-w1360-h1020-rw",
  "https://i.pinimg.com/736x/74/5d/04/745d0431c422782ead270ed5c600850e.jpg",

  "https://i.pinimg.com/736x/d0/cd/e3/d0cde3e736209b44b888adbd676c32f9.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipNuLShuiqHYLiJHI6ZA-bGbqEybqpYaKCDd0-0i=s1360-w1360-h1020-rw",
  "https://i.pinimg.com/736x/16/f3/bc/16f3bc12486dbe7973688609ce4af922.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipOxA1_V7QEuFDhcoRcNzzpgTyzChv1cgPYJvE-w=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzWSb3a4iWoci68Uy5Jfphn4jVRiUYA7P0jm2L1UuEf_vCXGprI77_wy-07q3v4e1IMtqkq6mMRPZyCfU5FvvkEZjuiSthie2O5ddRXe5O9HSi3-vGr3X_06KISGz1q3kJPKEZy=s1360-w1360-h1020-rw",
   "https://lh3.googleusercontent.com/p/AF1QipMcW3RP13MMNjkuE17TgyPDjCBz2DJGpLEBxEUT=s680-w680-h510-rw",
  "https://i.pinimg.com/736x/04/b8/cb/04b8cb7554b011c2afe2f750e884221f.jpg",];

const Gallery = () => {
  // Split images into two groups
  const midpoint = Math.ceil(images.length / 2);
  const leftMovingImages = images.slice(0, midpoint);
  const rightMovingImages = images.slice(midpoint);

  // Duplicate images for seamless infinite scroll
  const duplicatedLeftImages = [
    ...leftMovingImages,
    ...leftMovingImages,
    ...leftMovingImages,
  ];
  const duplicatedRightImages = [
    ...rightMovingImages,
    ...rightMovingImages,
    ...rightMovingImages,
  ];

  return (
    <section id="gallery" className="py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Captured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Moments
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            A glimpse into the magical events we've had the honor of creating.
          </motion.p>
        </div>
      </div>

      {/* First Row - Moving Right to Left */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLeftImages.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <p className="text-purple-400 font-medium mb-1 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Event Type
                </p>
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Magical Celebration
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Moving Left to Right */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedRightImages.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <p className="text-purple-400 font-medium mb-1 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Event Type
                </p>
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Magical Celebration
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 tracking-wide uppercase text-sm">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
