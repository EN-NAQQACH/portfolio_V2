"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Java", icon: "☕" },
      { name: "C/C++", icon: "⚙️" },
      { name: "SQL", icon: "🗃️" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Framer Motion", icon: "🎬" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "📦" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "scikit-learn", icon: "📊" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📝" },
      { name: "Linux", icon: "🐧" },
      { name: "Postman", icon: "📮" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "SQLite", icon: "💾" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <SectionTitle number="04" title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (catIndex % 3) * 0.1 }}
            whileHover={{ y: -3 }}
            className="group border border-white/[0.07] rounded-xl p-6 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Category title */}
            <h3
              className="text-white font-bold text-base mb-4 pb-3 border-b border-white/[0.06]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  whileHover={{ scale: 1.04 }}
                >
                  <span className="text-sm">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
