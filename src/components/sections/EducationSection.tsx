"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";

const education = [
  {
    school:
      "École Nationale de l’Intelligence Artificielle et du Digital Berkane ",
    field: "Engineering — AI",
    date: "2024 — Present",
    description:
      "Pursuing an engineering degree with a specialization in Artificial Intelligence and Data Science. Coursework covers algorithms, statistical learning, deep learning, distributed systems, and software engineering.",
  },
  {
    school: "Ecole Supérieure de Technologie - Essaouira",
    field: "Ingénierie des Systèmes Informatiques et Logiciels (ISIL)",
    date: "2023 — 2024",
    description:
      "At the Bachelor in ISIL program at EST Essaouira, I developed skills in software development, object-oriented programming, system design and modeling, as well as database administration, networks, and system security. ",
  },
  {
    school: "Ecole Supérieure de Technologie - Sidi Bennour",
    field: "Génie Informatique",
    date: "2021 — 2023",
    description:
      "Graduated with honors, gaining a strong foundation in computer science, mathematics, physics, and problem-solving skills.",
  },
  {
    school: "Baccalauréat - Lycée Ibn Hazem Agadir",
    field: "Sciences Physiques et Chimiques",
    date: "2019 — 2020",
    description:
      "Completed multiple Coursera and fast.ai specializations in deep learning, NLP, computer vision, and MLOps. Continuously learning through research papers and hands-on projects.",
  },
];

const experiences = [
  {
    title: "Développeur Web – Site de location de voitures",
    company: "Easly Informatique",
    date: "Avril 2024 - Juin 2024",
    location: "Agadir, Morocco",
    description:
      "Gestion des véhicules incluant l’ajout, la modification et la suppression, mise en place d’un système de vérification de la disponibilité des véhicules, gestion des clients et des réservations, ainsi que l’intégration d’un système de chat en temps réel pour améliorer l’interaction avec les utilisateurs.",
    technologies: ["Python", "PyTorch", "BERT", "FastAPI", "Redis", "Docker"],
  },
  {
    title: "Développeur - Application de suivi et contrôle des stocks",
    company: "Easly Informatique",
    date: "Avril 2023 - Juin 2023",
    location: "Agadir, Morocco",
    description:
      "Gestion des entrées et sorties de stock avec un suivi précis des niveaux disponibles, développement d’une interface utilisateur intuitive facilitant l’utilisation de l’application, mise en place de fonctionnalités de génération et d’export des factures, ainsi que la maintenance continue et le déploiement de l’application.",
    technologies: ["Python", "PyTorch", "BERT", "FastAPI", "Redis", "Docker"],
  },
];

export default function EducationSection() {
  const [active, setActive] = useState<"education" | "experiences">(
    "education",
  );

  return (
    <section id="education" className="py-24">
      <SectionTitle number="02" title="Education & Experiences" />

      {/* Toggle */}
      <motion.div
        className="flex gap-2 mb-12 p-1 border border-white/[0.07] rounded-xl w-fit bg-white/[0.02]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {(["education", "experiences"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-6 py-2.5 rounded-lg text-sm font-medium capitalize transition-all duration-300 cursor-pointer ${
              active === tab
                ? "text-black"
                : "text-white/40 hover:text-white/70"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {active === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="space-y-0"
        >
          {(active === "education" ? education : experiences).map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="py-7 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    {/* Left */}
                    <div className="flex-1">
                      <h3
                        className="text-white font-semibold text-lg group-hover:text-white/80 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {"school" in item ? item.school : item.title}
                      </h3>
                      <p
                        className="text-white/40 text-sm mt-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {"field" in item ? item.field : item.company}
                      </p>
                    </div>
                    {/* Right */}
                    <div className="text-right shrink-0">
                      <span
                        className="text-xs text-white/30 font-mono-custom tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {item.date}
                      </span>
                      {"location" in item && (
                        <p
                          className="text-xs text-white/25 mt-0.5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <p
                    className="text-white/45 text-sm leading-relaxed mt-3 max-w-2xl"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.description}
                  </p>
                  {"technologies" in item && (
                    <div className="flex flex-wrap gap-2 mt-4 max-w-2xl">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs tracking-wider text-white/60 border border-white/10 rounded-full bg-white/[0.03]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {index <
                  (active === "education" ? education : experiences).length -
                    1 && <div className="section-line" />}
              </motion.div>
            ),
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
