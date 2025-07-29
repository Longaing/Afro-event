"use client";

import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { ActivityIcon, SlidersIcon, ZapIcon } from "lucide-react";
import { ProgramCarousel } from "./program-carousel";
import { motion } from "motion/react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  emoji: string;
};

const features = [
  {
    icon: <SlidersIcon size={20} />,
    title: "Jour 1",
    description: "Programme de 10h à 18h",
    image: "/app-image-1.png",
    emoji: "1️⃣"
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Jour 2",
    description: "Programme de 10h à 18h",
    image: "/app-image-1.png",
    emoji: "2️⃣"
  },
  {
    icon: <ActivityIcon size={20} />,
    title: "Jour 3",
    description: "Programme de 10h à 18h",
    image: "/app-image-1.png",
    emoji: "3️⃣"
  },
] satisfies Feature[];

export function Program() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Badge variant="secondary" className="uppercase">
          Programme
        </Badge>
      </motion.div>
      
      <motion.h2 
        className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Découvrez le<div className="text-muted-foreground">programme</div>
      </motion.h2>
      
      <motion.p 
        className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Un programme sur 3 jours construit pour vous aider à faire avancer votre entreprise
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProgramCarousel features={features} className="block lg:hidden" />
        <FeaturesTabs features={features} className="hidden lg:block" />
      </motion.div>
    </div>
  );
}
