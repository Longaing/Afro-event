"use client";

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Star
} from "lucide-react";

export function Showcase() {
  const cards = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communauté de 500+ Entrepreneurs",
      subtitle: "Événement créé par les jeunes pour les jeunes",
      description: "Rejoignez une communauté exclusive de jeunes entrepreneurs de la diaspora africaine. Connectez-vous avec des pairs qui partagent vos défis et vos ambitions.",
      stats: [
        { label: "Participants", value: "500+" },
        { label: "Pays", value: "15+" },
        { label: "Secteurs", value: "25+" }
      ],
      features: [
        "Networking ciblé par secteur",
        "Groupes de discussion thématiques",
        "Mentorat peer-to-peer"
      ],
      //badge: "Communauté",
      delay: 0.1
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Programme Immersif sur 3 Jours",
      subtitle: "Moment de networking et d'activités pour te lancer",
      description: "Un programme intensif conçu pour accélérer votre croissance entrepreneuriale avec des ateliers pratiques, des pitchs et des sessions de mentoring.",
      stats: [
        { label: "Ateliers", value: "12+" },
        { label: "Intervenants", value: "30+" },
        { label: "Heures", value: "24h" }
      ],
      features: [
        "Workshops pratiques par secteur",
        "Sessions de pitch coaching",
        "Simulations d'investissement"
      ],
      //badge: "Programme",
      delay: 0.2
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Opportunités Business Réelles",
      subtitle: "Créer des opportunités qui vont propulser ton business",
      description: "Découvrez des opportunités concrètes : partenariats, investissements, mentorat et accès à des marchés internationaux pour votre entreprise.",
      stats: [
        { label: "Investisseurs", value: "20+" },
        { label: "Partenariats", value: "50+" },
        { label: "Succès", value: "85%" }
      ],
      features: [
        "Pitch devant investisseurs",
        "B2B meetings organisés",
        "Accès aux marchés africains"
      ],
      //badge: "Opportunités",
      delay: 0.3
    }
  ];

  return (
    <div id="showcase" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header de la section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Badge variant="secondary" className="mb-4 uppercase">
          Pourquoi Founders ?
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          L&apos;événement qui transforme vos ambitions en réalité
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Plus qu&apos;un simple événement, Founders est une plateforme de transformation 
          pour les entrepreneurs de la diaspora africaine en Europe.
        </p>
      </motion.div>

      {/* Cartes principales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: card.delay, 
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20">
              <CardContent className="p-8">
                {/* Header de la carte */}
                <div className="text-center mb-6">
                                     <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                     <div className="text-primary">
                       {card.icon}
                     </div>
                   </div>
                                     <CardTitle className="text-lg font-bold mb-2">
                     {card.title}
                   </CardTitle>
                   <CardDescription className="text-base font-medium text-muted-foreground">
                     {card.subtitle}
                   </CardDescription>
                </div>

                {/* Description */}
                                 <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                   {card.description}
                 </p>

                {/* Statistiques */}
                                 <div className="grid grid-cols-3 gap-4 mb-6">
                   {card.stats.map((stat, statIndex) => (
                     <div key={statIndex} className="text-center">
                       <div className="text-xl font-bold text-primary">
                         {stat.value}
                       </div>
                                               <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                     </div>
                   ))}
                 </div>

                {/* Features */}
                                 <div className="space-y-2 mb-6">
                   {card.features.map((feature, featureIndex) => (
                     <div key={featureIndex} className="flex items-center gap-2 text-base">
                       <Star className="h-5 w-5 text-primary" />
                       <span className="text-muted-foreground">{feature}</span>
                     </div>
                   ))}
                 </div>

                {/* CTA */}
                <Button className="w-full" variant="outline">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Section statistiques globales */}
      <motion.div
        className="bg-secondary/30 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            L&apos;impact de Founders
          </h3>
          <p className="text-muted-foreground">
            Des chiffres qui parlent d&apos;eux-mêmes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1500+", label: "Entrepreneurs formés", icon: <Users className="h-6 w-6" /> },
            { value: "€2.5M+", label: "Investissements levés", icon: <TrendingUp className="h-6 w-6" /> },
            { value: "200+", label: "Entreprises créées", icon: <Lightbulb className="h-6 w-6" /> },
            { value: "95%", label: "Taux de satisfaction", icon: <Star className="h-6 w-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
