"use client";

import { FeatureDetails } from "@/components/features/feature-details";
import type { Feature } from "@/components/features/program";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  features: Feature[];
  className?: string;
};

export function FeaturesTabs({ features, className }: Props) {
  const [activeTab, setActiveTab] = useState(features[0].title);

  return (
    <Tabs className={cn("w-full max-w-6xl", className)} value={activeTab} onValueChange={setActiveTab}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TabsList className="grid h-auto w-full grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabsTrigger
                value={feature.title}
                className="flex cursor-pointer flex-col items-center justify-start gap-5 px-2 py-6 w-full"
              >
                <FeatureDetails feature={feature} isActive={activeTab === feature.title} />
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {features.map((feature) => (
          <TabsContent key={feature.title} value={feature.title}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl font-bold flex w-full justify-center"
            >
              {feature.emoji}
            </motion.div>
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  );
}
