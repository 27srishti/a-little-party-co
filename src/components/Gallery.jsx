import React from "react";
import { motion } from "framer-motion";

const images = [
  
  "https://i.pinimg.com/736x/13/f9/ba/13f9ba94dd5c1e26ef2bffeda36b1ff2.jpg",
  "https://scontent.fblr20-1.fna.fbcdn.net/v/t51.82787-15/526311464_18309343702245745_9000953277342742648_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iE6Vpion8RUQ7kNvwFMWdsU&_nc_oc=AdkZ2kj0YDo3KvBLMzGDg5kCMlDcVADis4VH6CEamwGyrAg7s26w5f8O2SyZcjr6zt8XNJR7whs61boevtuEDVlg&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=yYUjiBq1Ez5oTkr32O6MLA&oh=00_Afjg3hAErFD_3ITZK6L-lLwRvroCgOnbHWZhLUB0Wa6XXQ&oe=692DB8F4",
  "https://scontent.fblr20-2.fna.fbcdn.net/v/t51.82787-15/525673235_18309343714245745_3784695632882870087_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2MJ__bQISm0Q7kNvwHWs9jU&_nc_oc=Adl2BRWRmp04zIC2Akz_H2hPOmAI4KAdsTiciBQD8krE-sVGKWB11-Uyn6AQavLGAg2mqrvOl7izOj0ZeA80ficz&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=fI81__7neUB_JHRGl2OWCw&oh=00_AfjQRbe3Zovf1Nq-o869iFRYoRIKNMoAYbUTZ4i236lIzg&oe=692DD831",
  "https://scontent.fblr20-2.fna.fbcdn.net/v/t51.75761-15/495912905_18299489119245745_5714514099264222352_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1lJkazVpSycQ7kNvwHPM576&_nc_oc=AdkEXh8p15WfuY7cfNLU0lJdaBwieWSeYB3PZvXbru9h88SVDBhmmaWoKALu4PzIUe364iHanAkm3-p0LnydRXbY&_nc_zt=23&se=-1&_nc_ht=scontent.fblr20-2.fna&_nc_gid=HWA71YnUwkMDJpYp01HcPw&oh=00_AfhN7tTgVjnsGv81Ri-3j6v2t_BbR4eH8FHe-j2I5k-hwg&oe=692DB343",
  "https://i.pinimg.com/736x/c3/08/17/c30817eec5700473c0da10ea3558ea29.jpg",
  "https://i.pinimg.com/736x/fc/a2/12/fca2126b5b5031f82fdc4b378ed07923.jpg",
  "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/473732775_1698168424092147_9099971606658512250_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=cIoZY9on_OAQ7kNvwHA-xki&_nc_oc=Adn7hegxjIktT_qF4X7V799WJ5F8BBaCNq2wg8sXeGS1prsUrb5GNm1o2f7JhOv-uBM07am5mn2M3Y-fOi3cY7Rb&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=doUeyQudsLNplCn_tCD7Xg&oh=00_Afj92yHm2IE7JAVK1xtRtysRTQcWlB-2T06STuj10lwFbA&oe=692D9E24",
  "https://i.pinimg.com/736x/74/5d/04/745d0431c422782ead270ed5c600850e.jpg",

  "https://scontent.fblr20-2.fna.fbcdn.net/v/t1.6435-9/52849928_397729944136008_8948911162645282816_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=50nnPIu7MOgQ7kNvwHxL9_1&_nc_oc=Adlzv2Av0ZgO30lud-NdkvP_VAj0v_KBfksBs7fSflQl48qy6OrbtYo7TN7rNqzLaWBI0AWWaqCF1iV8IWQD1NgU&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=6nZ5mSZPthTybagsEf9pzg&oh=00_AfjyFHWBef1e48o3jOTUfLpzPhs_0cRbB2pf7ioMlbCR6A&oe=694F58E8",
  "https://i.pinimg.com/736x/d0/cd/e3/d0cde3e736209b44b888adbd676c32f9.jpg",
  "https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/473623351_1698160007426322_4664915146252853_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=od7tn3qGBaAQ7kNvwFvpwQR&_nc_oc=AdmtGxO2jMIThW043bgQfgAJbhmvEBbj4QwxPR1uvs00ZEnYVi2UuSHh4TNts1VTbHn0jv2t_fHvJ7TmcdH-QVj-&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=AvfMjxOxlfSLphH5Vn96UQ&oh=00_Afgi7W5NDjcBcVJkAroDbzWzPEQwlLTSpEYwTYJ-FLWJiw&oe=692DB87E",
  "https://i.pinimg.com/736x/16/f3/bc/16f3bc12486dbe7973688609ce4af922.jpg",
  "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/473590348_1698149894094000_3908603129177227525_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=eF4prjH-yQIQ7kNvwF2BR6l&_nc_oc=AdkV0bIgzJe9px1zufDE8x8nmGVmSbOA0ls34rKq5YFxka4xCpSZVhRZdDoCb8QCiBv_Kix0KTcsTLZEhwXJgqW8&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=0AJUsl714fQ9UD_6HN-t-A&oh=00_Afg_PVETdl5KVuW-JLznM5erIY_lOaxwRwtegxUveB1LIg&oe=692DADE0",
   "https://lh3.googleusercontent.com/p/AF1QipMcW3RP13MMNjkuE17TgyPDjCBz2DJGpLEBxEUT=s680-w680-h510-rw",
  "https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-9/36803904_278334112742259_7706725080687968256_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=_NdxV1TwGN0Q7kNvwETv2B2&_nc_oc=AdkxroQ81ZCjTIUz6YXo2DgIJuFr8Zvq8_dD20HkhxuH7IjOlngVjdlwW5yNMtM5QyciUei5Cr4-WjtnF10uV4DF&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=6rlrJxqPHXETm0gtaFql6g&oh=00_AfiAMVALB9wnrl8DgULEN1_OEw5aF7a3NDAWJFyuTX7h9A&oe=694F5291",
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
