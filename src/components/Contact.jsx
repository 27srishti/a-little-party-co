import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-32 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Let's Create <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Something Magic</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg font-light max-w-md">
              Ready to start planning? Get in touch with us today and let's make your vision a reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-medium text-white">hello@alittlepartyco.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-xl font-medium text-white">2931 Irving Blvd., Suite 101<br/>Dallas, TX, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Event Type</label>
                <select className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all [&>option]:bg-slate-900">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/20 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} A Little Party Co. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
