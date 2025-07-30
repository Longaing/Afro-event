"use client";

import { BackgroundBlur } from "@/components/ui/background-blur";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import { motion } from "motion/react";
import { getImagePath } from "@/lib/image-utils";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <div className="mt-16 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Pill>
            <PillAvatarGroup className="hidden sm:flex">
              <PillAvatar src={getImagePath("/avatars/1.jpg")} />
              <PillAvatar src={getImagePath("/avatars/2.jpg")} />
              <PillAvatar src={getImagePath("/avatars/3.jpg")} />
              <PillAvatar src={getImagePath("/avatars/4.jpg")} />
            </PillAvatarGroup>
            <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
              Rejoignez <span className="text-foreground">la plus grande communauté</span> pour les jeunes entrepreneurs de la diaspora a Paris
            </p>
          </Pill>
        </motion.div>
        
        <motion.h1 
          className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Passez de zéro<span className="text-foreground block">A un</span>
        </motion.h1>
        
        <motion.p 
          className="max-w-lg text-center leading-6 tracking-tight sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Un weekend riche où vous pourrez rencontrer des entrepreneurs, des investisseurs et des experts pour vous aider à faire avancer votre entreprise.
        </motion.p>
        
        <motion.span 
          className="text-9xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🤝🏿
        </motion.span>
      </div>
    </div>
  );
}
