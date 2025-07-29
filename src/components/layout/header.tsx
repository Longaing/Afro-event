"use client";

import { motion } from "motion/react";
import { BrandLogo } from "@/components/ui/brand-logo";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
}

const navItems = [
  {
    label: "L'événement",
    href: "/#features",
  },
  {
    label: "Programme",
    href: "/#features",
    hasDropdown: true,
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

// Hook personnalisé pour gérer le scroll
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50; // Seuil plus bas pour une réactivité plus rapide
      
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setScrollDirection('down');
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { scrollDirection, isVisible };
}

export function Header({ className = "" }: HeaderProps) {
  const { isVisible } = useScrollDirection();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: isVisible ? 0 : -100,
        transition: { 
          duration: isVisible ? 0.5 : 0.3, 
          ease: "easeInOut" 
        }
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <BrandLogo variant="text" />
            </div>
          </motion.div>

          {/* Navigation centrale */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                <div className="hover:scale-105 transition-transform duration-300">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-[#800020] hover:text-[#A00030] transition-colors duration-300"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.nav>

          {/* Bouton CTA à droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <Link
                href="/pricing"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Acheter votre billet</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Menu mobile (hamburger) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:hidden"
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="p-2 hover:text-[#A00030] transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
} 