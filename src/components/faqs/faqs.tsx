"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

const faqItems = [
  {
    value: "branding",
    question: "Est ce que je peux participer si je n'ai pas d'entreprise?",
    answer: "Oui, vous pouvez participer même si vous n'avez pas d'entreprise."
  },
  {
    value: "skills",
    question: "Est ce que je dois participer aux 3 jours?",
    answer: "Non, vous pouvez participer à un jour ou à deux jours ou à trois jours."
  },
  {
    value: "devices",
    question: "Ou se loger pret de l'evenement?",
    answer: "Vous pouvez vous loger dans un hôtel près de l'événement. Nous vous aiderons à trouver un hôtel."
  },
  {
    value: "notifcations",
    question: "Qui sont les organisateurs?",
    answer: "Nous sommes des jeunes entrepreneurs qui avons créé cet événement pour vous aider à faire avancer votre entreprise."
  }
];

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <motion.div 
        className="flex w-full flex-col gap-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          FAQ
          <br />
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Réponses aux questions fréquemment posées.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Accordion type="single" collapsible defaultValue="branding" className="grid w-full gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
            >
              <AccordionItemFAQs value={item.value}>
                <AccordionTriggerFAQs>{item.question}</AccordionTriggerFAQs>
                <AccordionContentFAQs>
                  <p>{item.answer}</p>
                </AccordionContentFAQs>
              </AccordionItemFAQs>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
