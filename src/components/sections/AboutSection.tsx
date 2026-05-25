"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionTitle number="01" title="About" />

      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Text */}
        <motion.div
          className="md:col-span-3 space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p
            className="text-white/60 leading-relaxed text-base text-justify"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I'm{" "}
            <span className="text-white font-medium">Mohssine Ennaqqach</span>,
            a 23-year-old engineering student currently in my 4th year at ENIAD
            Berkane, specializing in Artificial Intelligence. I hold a licence
            degree in Software Engineering, which gave me a strong foundation in
            developing robust applications and understanding software design
            principles.
          </p>
          <p
            className="text-white/60 leading-relaxed text-base text-justify"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            My passion lies in AI, machine learning, and backend development. I
            love turning complex models into scalable, production-ready
            solutions, and exploring the latest frameworks and tools in the AI
            ecosystem. Throughout my studies, I’ve worked on projects such as
            stock management systems, e-commerce platforms, and a car rental
            website, strengthening both my technical and problem-solving skills.
          </p>
          <p
            className="text-white/60 leading-relaxed text-base text-justify"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Outside of coding, I enjoy reading research papers, contributing to
            open-source projects, and staying up-to-date with the latest AI
            advancements. I believe that great software comes from a balance of
            technical rigor and creative thinking.
          </p>

          <div className="pt-4">
            <a
              href="https://en-naqqach.github.io/CV/cv_mohssine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="primary">
                <Download size={14} />
                Download CV
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats sidebar */}
        <motion.div
          className="md:col-span-2 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { label: "Years of coding", value: "4+" },
            { label: "AI projects built", value: "1" },
            { label: "Technologies", value: "20+" },
            { label: "Internships", value: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/[0.07] rounded-xl p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
            >
              <p
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-white/35 leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
