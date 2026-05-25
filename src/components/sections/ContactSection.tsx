"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/mohssine-en-naqqach",
    href: "https://linkedin.com/in/mohssine-en-naqqach",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mohssineennaqqach0@gmail.com",
    href: "mailto:mohssineennaqqach0@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 645039244",
    href: "tel:+212645039244",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <SectionTitle number="05" title="Contact" />

      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3
            className="text-4xl md:text-6xl font-extrabold text-white/90 mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Mohssine
            <br />
            En-naqqach
          </h3>
          <p
            className="text-white/30 text-sm tracking-[0.25em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            AI Developer / Machine Learning / Backend
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex flex-col items-center gap-3 p-6 border border-white/[0.07] rounded-xl bg-white/[0.01] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.05] transition-all duration-300">
                  <Icon
                    size={16}
                    className="text-white/50 group-hover:text-white/80 transition-colors"
                  />
                </div>
                <div>
                  <p
                    className="text-xs text-white/25 uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="text-white/60 text-sm group-hover:text-white/90 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Large decorative text */}
        <motion.div
          className="mt-24 select-none pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p
            className="text-[clamp(3rem,12vw,3rem)] font-extrabold text-white/[0.03] tracking-tight leading-none text-center break-words"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's Build Together
          </p>
        </motion.div>
      </div>
    </section>
  );
}
