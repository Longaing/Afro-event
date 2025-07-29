"use client";

import { DesktopNav } from "@/components/hero/desktop-nav";
import { MobileNav } from "@/components/hero/mobile-nav";
import { motion } from "motion/react";



export function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <MobileNav className="flex md:hidden" />
      <DesktopNav className="hidden md:flex" />
    </motion.div>
  );
}
