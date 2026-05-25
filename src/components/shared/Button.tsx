"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "relative inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-200 cursor-pointer select-none",
        variant === "primary" &&
          "bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.08)]",
        variant === "outline" &&
          "border border-white/20 text-white/80 hover:border-white/50 hover:text-white bg-transparent",
        className
      )}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
