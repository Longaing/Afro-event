"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "text" | "logo";
  className?: string;
}

export function BrandLogo({ variant = "text", className = "" }: BrandLogoProps) {
  if (variant === "text") {
    return (
      <Link href="/" className={`${className}`}>
        <div className="hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo6.svg"
            alt="Founders"
            width={1800}
            height={100}
            className="h-16 w-auto"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={className}>
      <div className="hover:scale-105 transition-transform duration-300">
        <AnimatedLogo />
      </div>
    </Link>
  );
}

function AnimatedLogo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="text-white font-bold text-sm">FW</span>
      </motion.div>
      <Image
        src="/logo6.svg"
        alt="Founders"
        width={1440}
        height={80}
        className="h-10 w-auto"
      />
    </motion.div>
  );
} 