"use client";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

type Props = {
  className?: string;
};

export function DesktopNav({ className }: Props) {
  return (
    <motion.nav
      className={cn("hidden md:flex items-center gap-8", className)}
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
          <BrandLogo variant="text" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <div className="hover:scale-105 transition-transform duration-300">
                <NavigationMenuLink asChild>
                  <Link
                    href="/#features"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      L'événement
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="hover:scale-105 transition-transform duration-300">
                <NavigationMenuLink asChild>
                  <Link
                    href="/#features"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      Programme
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="hover:scale-105 transition-transform duration-300">
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      Billetterie
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="hover:scale-105 transition-transform duration-300">
                <NavigationMenuLink asChild>
                  <Link
                    href="/terms-and-conditions"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      Contact
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>
    </motion.nav>
  );
}
