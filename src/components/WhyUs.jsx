import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Palette, Star } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Blank Slate Approach",
      description:
        "Every project starts fresh, tailored to your unique vision and venue.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Unexpected Pairings",
      description:
        "Bold color combinations and textures that make your event unforgettable.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Attention to Detail",
      description:
        "That special 'zhuzh' that transforms small moments into big memories.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Site Specific Design",
      description:
        "Custom creations perfectly suited to your space and occasion.",
    },
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-600/20 to-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                A Little Party?
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-8"
            >
              <p className="text-xl text-gray-300">
                Founded in{" "}
                <span className="text-white font-medium">
                  2018 in Dallas, Texas
                </span>
                . We continue to redefine how Dallas celebrates.
              </p>

              <p>
                We approach every project as a{" "}
                <span className="text-white font-medium">blank slate</span>.
                Whether a custom banner for a friend's birthday or a ceiling
                installation for your new business, each design is site and
                venue specific, tailored to your unique needs.
              </p>

              <p>
                With a love of{" "}
                <span className="text-white font-medium">
                  unexpected color pairings, textures, and attention to detail
                </span>
                , we love adding that special party co{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  'zhuzh'
                </span>{" "}
                that turns small moments into big memories.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-white font-semibold text-lg hover:text-purple-400 transition-colors"
            >
              Learn More About Our Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
