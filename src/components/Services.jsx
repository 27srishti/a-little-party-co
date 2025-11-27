import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  PartyPopper,
  Lightbulb,
  Disc,
  Palette,
  Flower2,
} from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Event Styling",
    description:
      "Creating cohesive and stunning visual themes for any occasion.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Party Styling",
    description:
      'Adding that special "zhuzh" to birthdays, anniversaries, and celebrations.',
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Event Concepts",
    description: "Developing unique and creative concepts from scratch.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: "Balloon Decor",
    description: "Eye-catching balloon installations that pop.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Decor",
    description:
      "Bespoke fabrications and design elements tailored to your venue.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Event Design",
    description:
      "Full-scale design services for immersive brand activations and events.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
           From props and custom banners to full-scale immersive activations, no project is too big or too small for a little party co!</motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-7 h-7 text-white",
                    })}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to bring your vision to life?
          </p>
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
