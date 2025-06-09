import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen px-4 pt-24 pb-32 overflow-hidden text-white bg-gradient-to-b from-black to-violet-900 lg:px-24"
    >
      {/* Floating ambient particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30 animate-ping top-10 left-10"></div>
        <div className="absolute w-3 h-3 rounded-full bg-violet-400 opacity-20 animate-ping top-1/3 left-2/3"></div>
        <div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30 animate-ping top-2/3 left-1/4"></div>
        <div className="absolute w-2.5 h-2.5 bg-fuchsia-600 rounded-full opacity-40 animate-ping top-[80%] left-[70%]"></div>
      </div>

      {/* Glassmorphic Contact Card */}
      <div className="relative z-10 max-w-3xl p-8 mx-auto mt-10 transition-all duration-300 bg-white border shadow-xl bg-opacity-10 backdrop-blur-lg rounded-3xl border-white/20 hover:shadow-violet-600/30 group">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-3xl font-bold text-center text-white md:text-4xl"
        >
          Let’s Connect
        </motion.h2>

        <form
          action="https://formsubmit.co/nainujiharsh@gmail.com"
          method="POST"
          className="grid gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 text-black transition-all duration-300 bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:shadow-xl"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-black transition-all duration-300 bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:shadow-xl"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 text-black transition-all duration-300 bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:shadow-xl"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 16px #8b5cf6",
            }}
            type="submit"
            className="px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-violet-700 hover:bg-violet-800"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
