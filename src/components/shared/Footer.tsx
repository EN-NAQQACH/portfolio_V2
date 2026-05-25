"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="mt-32 py-8 border-t border-white/[0.05]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-center">
        <p
          className="text-xs text-white/25 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          All rights reserved © Mohssine En-naqqach {year}
        </p>
      </div>
    </motion.footer>
  );
}
