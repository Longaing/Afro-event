"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  effect?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function RevealOnScroll({ 
  children, 
  className = "", 
  effect = "fade", 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getInitialState = () => {
    switch (effect) {
      case "fade":
        return { opacity: 0 };
      case "slide-up":
        return { opacity: 0, y: 50 };
      case "slide-left":
        return { opacity: 0, x: 50 };
      case "slide-right":
        return { opacity: 0, x: -50 };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      case "rotate":
        return { opacity: 0, rotate: -10 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    switch (effect) {
      case "fade":
        return { opacity: 1 };
      case "slide-up":
        return { opacity: 1, y: 0 };
      case "slide-left":
        return { opacity: 1, x: 0 };
      case "slide-right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "rotate":
        return { opacity: 1, rotate: 0 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  effect?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
}

export function StaggerReveal({ 
  children, 
  className = "", 
  staggerDelay = 0.1,
  effect = "fade"
}: StaggerRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <RevealOnScroll
          key={index}
          effect={effect}
          delay={index * staggerDelay}
        >
          {child}
        </RevealOnScroll>
      ))}
    </div>
  );
} 