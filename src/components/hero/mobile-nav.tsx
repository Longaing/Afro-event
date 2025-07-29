"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

type Props = {
  className?: string;
};

export function MobileNav({ className }: Props) {
  return (
    <motion.nav
      className={cn("md:hidden", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <div className="hover:scale-105 transition-transform duration-300">
          <BrandLogo variant="logo" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <div className="hover:scale-105 transition-transform duration-300">
          <Drawer>
            <DrawerTrigger asChild>
              <motion.button
                className="p-2 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-6 space-y-4">
                <Link href="/#features" className="block py-2 text-lg font-medium hover:text-primary transition-colors">
                  L&apos;événement
                </Link>
                <Link href="/#features" className="block py-2 text-lg font-medium hover:text-primary transition-colors">
                  Programme
                </Link>
                <Link href="/pricing" className="block py-2 text-lg font-medium hover:text-primary transition-colors">
                  Billetterie
                </Link>
                <Link href="/terms-and-conditions" className="block py-2 text-lg font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </motion.div>
    </motion.nav>
  );
}
