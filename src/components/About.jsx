import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://instasize.com/api/image/42ef914419cb4a46cbafb72c339fe9662dde8f84bcb8e5060d59a2b143d1f78e.png"
                alt="A Little Party Co Team"
                className="w-full h-auto object-cover  hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-purple-500/30 rounded-[2rem] z-0" />
            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-pink-500/30 rounded-[2rem] z-0" />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-slate-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hidden md:block max-w-xs z-20">
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 font-serif">
                10+
              </p>
              <p className="text-gray-300 font-medium">
                Years of creating magical experiences
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif leading-tight">
              Redefining How <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Dallas Celebrates
              </span>
            </h2>
            <div className="space-y-6  text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Born as a creative collaboration between longtime friends, daniell glass & taisia fredrickson, a little party co has become the go-to for custom decor & event design. </p>
              <p>
               From two friends with a shared love for  event design, our party co + studio has grown to include artists from a range of backgrounds. from craft-based and technical designers to fabricators, venues and planners, our partners share a passion for creative collaborations, accessible design & offbeat custom events. 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
              {[
                "Site & Venue Specific",
                "Unexpected Color Pairings",
                "Creative Collaborations",
                "Brand Identity Focus",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="text-white font-semibold text-lg hover:text-purple-400 transition-colors flex items-center gap-2 group">
              Learn More About Us
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
