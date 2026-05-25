"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const projects = [
  {
    name: "Stock-Management System",
    description:
      "I developed a Stock-Management System to track inventory, manage stock in/out, and generate/export invoices through an intuitive user interface, streamlining business operations.",
    technologies: ["Reactjs", "phpmyadmin", "Tailwindcss", "domPDF", "php", "Bootstrap"],
    github: "https://github.com/EN-NAQQACH/Stock-Management",
  },
  {
    name: "RentalCars",
    description:
      "I developed a Car Rental Management System to handle vehicle management (add, update, delete), check vehicle availability, manage clients and reservations, and integrate a real-time chat system for seamless communication.",
    technologies: ["Reactjs", "MongoDB", "JWT", "PUSHER", "Tailwindcss", "php", "Bootstrap"],
    github: "https://github.com/EN-NAQQACH/RentalCars-Website-client-side",
  },
  {
    name: "journal-intime-flutter",
    description:
      "I developed a personal journal app using Flutter and Dart, allowing users to create, edit, and manage daily entries. The app features a clean, intuitive interface, supports data storage locallyal thoughts and activities.",
    technologies: ["Dart"],
    github: "https://github.com/EN-NAQQACH/journal-intime-flutter",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionTitle number="03" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col border border-white/10 bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03]"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Project name */}
            <h3
              className="text-white font-bold text-lg mb-2 group-hover:text-white/80 transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p
              className="text-white/40 text-sm leading-relaxed flex-1 mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] tracking-wider text-white/40 border border-white/10 rounded-full uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.05]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
