import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Tilt from "react-parallax-tilt";

// Assets
import coffeeImage from "../assets/coffee-shop.jpeg";
import coffeeVideo from "../assets/coffee-shop.mp4";
import blogImage from "../assets/blog-site.jpeg";
import blogVideo from "../assets/blog-site.mp4";
import hospitalImage from "../assets/child-hospital.jpeg";
import hospitalVideo from "../assets/child-hospital.mp4";
import jobImage from "../assets/job-portal.jpeg";
import jobVideo from "../assets/job-portal.mp4";

const projects = [
  {
    title: "Coffee Shop",
    image: coffeeImage,
    video: coffeeVideo,
    description:
      "A modern, responsive coffee shop website with stylish UI and smooth product showcase, perfect for local cafés and modern businesses.",
  },
  {
    title: "Blog Site",
    image: blogImage,
    video: blogVideo,
    description:
      "Full-stack blog site featuring category filters, admin panel, and clean design. Built using PostgreSQL, Node.js, and React.",
  },
  {
    title: "Child Hospital Website",
    image: hospitalImage,
    video: hospitalVideo,
    description:
      "An informative child healthcare platform with appointment booking, doctor listing, and resourceful content, designed for hospitals.",
  },
  {
    title: "Job Portal",
    image: jobImage,
    video: jobVideo,
    description:
      "Feature-rich job portal for job-seekers and recruiters. Includes resume upload, secure login, admin dashboard, and filtering options.",
  },
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
  id="projects"
  className="relative min-h-screen px-6 pt-24 pb-16 overflow-x-hidden bg-gradient-to-b from-black via-violet-900 to-black lg:px-24"
>

      <div className="z-10 max-w-6xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-purple-300 to-pink-500 bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-2 mb-12 text-center text-white/60">
          Explore my highlighted full-stack projects with live demos and GitHub links.
        </p>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={500}
                className="cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.03]"
              >
                <div
                  onClick={() => {
                    setActiveProject(project);
                    setShowVideo(false);
                  }}
                  className="p-5 text-white transition-all duration-700 shadow-xl bg-white/10 backdrop-blur-xl rounded-2xl hover:shadow-purple-500/40"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 rounded-xl"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-center text-purple-100">
                    {project.description.slice(0, 90)}...
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-sm italic text-center text-white/60">
          Browse all repositories on{" "}
          <a
            href="https://github.com/Harsh-Nainuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 underline hover:text-purple-100"
          >
            GitHub
          </a>{" "}
          – more coming soon.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md bg-black/90 px-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-5xl p-8 shadow-2xl bg-white/10 backdrop-blur-2xl rounded-3xl text-white max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute text-white top-4 right-4 hover:text-red-400"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                {!showVideo ? (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="rounded-xl w-full lg:w-1/2 object-contain max-h-[75vh]"
                  />
                ) : (
                  <video
                    src={activeProject.video}
                    controls
                    autoPlay
                    className="rounded-xl w-full lg:w-1/2 object-contain max-h-[75vh]"
                  />
                )}

                <div className="flex flex-col w-full gap-4 lg:w-1/2">
                  <h3 className="text-3xl font-bold text-purple-200">
                    {activeProject.title}
                  </h3>
                  <p className="text-purple-100">{activeProject.description}</p>

                  {!showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="px-6 py-2 mt-4 font-semibold text-black transition-all bg-white rounded-xl hover:bg-violet-300"
                    >
                      ▶ Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
