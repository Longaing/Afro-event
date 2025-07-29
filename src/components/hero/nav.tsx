"use client";

import { DesktopNav } from "@/components/hero/desktop-nav";
import { MobileNav } from "@/components/hero/mobile-nav";
import { motion } from "motion/react";

const navItems = [
  {
    label: "L'événement",
    href: "/#features",
  },
  {
    label: "Programme",
    href: "/#features",
  },
  {
    label: "Billetterie",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/terms-and-conditions",
  },
];

export function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </motion.div>
  );
}
