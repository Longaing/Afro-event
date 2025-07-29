"use client";

import { FooterBlur } from "@/components/footer/footer-blur";
import { LinkedInIcon, XIcon } from "@/components/footer/icons";
import Link from "next/link";
import { motion } from "motion/react";

const links = [
  {
    title: "Entrepreneurs",
    links: [
      {
        label: "Inscription",
        href: "#",
        title: "Inscription",
      },
      {
        label: "Programme",
        href: "#",
        title: "See our features",
      },
      {
        label: "Billetterie",
        href: "#",
        title: "Billetterie",
      },
    ],
  },
  {
    title: "Investisseurs",
    links: [
      {
        label: "Investisseurs",
        href: "#",
        title: "Investisseurs",
      },
      {
        label: "Sponsors",
        href: "#",
        title: "Sponsors",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
        title: "Read our Refund Policy",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Follow us on Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Connect with us on LinkedIn",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <motion.div 
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {links.map((link, sectionIndex) => (
          <motion.div 
            key={link.title} 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: sectionIndex * 0.1, 
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: sectionIndex * 0.1 + index * 0.05, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={link.href}
                    title={link.title}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </footer>
  );
}
