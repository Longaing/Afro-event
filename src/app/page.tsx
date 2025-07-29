"use client";

import { FAQs } from "@/components/faqs/faqs";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Showcase } from "@/components/showcase/showcase";
import { useRedirectWarning } from "@/lib/redirect";
import { Program } from "../components/features/program";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { motion } from "motion/react";
import { Header } from "@/components/layout/header";

export default function Home() {
  useRedirectWarning();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header fixe avec logo */}
      <Header />

      {/* Section Hero avec vidéo en arrière-plan */}
      <div className="relative min-h-screen">
        {/* Vidéo d'arrière-plan seulement pour la section Hero */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/backgroundV.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          {/* Overlay pour assurer la lisibilité du contenu */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 pt-24">
          <ParallaxSection speed={0.3}>
            <Hero />
          </ParallaxSection>
        </div>
      </div>

      {/* Reste du contenu sans vidéo */}
      <RevealOnScroll effect="slide-up" delay={0.2}>
        <Showcase />
      </RevealOnScroll>

      <ParallaxSection speed={0.2} direction="down">
        <Program />
      </ParallaxSection>

      <RevealOnScroll effect="fade" delay={0.1}>
        <FAQs />
      </RevealOnScroll>

      <Footer />
    </motion.div>
  );
}
