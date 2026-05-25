"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="font-mono-custom text-xs tracking-widest text-white/30 uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {number}
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="section-line" />
    </motion.div>
  );
}
