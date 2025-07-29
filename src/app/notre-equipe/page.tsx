import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";

export default function NotreEquipe() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 py-24 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary drop-shadow-lg tracking-tight animate-fade-in">
          Notre équipe
        </h1>
        
        {/* Section Fondateur */}
        <section className="w-full max-w-6xl mb-16">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 uppercase text-lg px-6 py-2">
              Fondateur
            </Badge>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 shadow-xl overflow-hidden border-4 border-primary rounded-full">
              <Image
                src="/equipe/yann.jpg"
                alt="Yann Darius OYONO"
                fill
                className="object-cover object-center rounded-full"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
            <span className="text-3xl md:text-4xl font-bold text-primary mb-2">Yann Darius OYONO</span>
            <span className="text-lg md:text-xl font-medium text-accent mb-4 bg-primary/10 px-6 py-2 rounded-full">Fondateur</span>
            <p className="max-w-3xl text-center text-lg md:text-xl text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-8 py-6 shadow-md">
              Je suis Yann Darius OYONO, ingénieur en agronomie et agro-industrie, passionné par l&apos;innovation et l&apos;entrepreneuriat.<br />
              J&apos;ai fondé Founders pour créer un espace unique de connexion, d&apos;inspiration et de collaboration entre jeunes leaders afro.<br />
              Mon ambition&nbsp;: rassembler des talents, favoriser l&apos;émergence de projets ambitieux et bâtir une communauté solidaire tournée vers l&apos;avenir.
            </p>
          </div>
        </section>

        {/* Section Direction */}
        <section className="w-full max-w-6xl mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 uppercase text-base px-4 py-1">
              Direction
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Jémuel TAGNE */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/70 rounded-full">
                <Image
                  src="/equipe/jemuel.jpg"
                  alt="Jémuel TAGNE"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Jémuel TAGNE</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Chef de projet / Responsable logistique</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je m&apos;appelle Jémuel TAGNE, chef de projet et responsable travaux, passionné par l&apos;organisation d&apos;événements et la gestion logistique.<br />
                En tant que responsable logistique pour Founders, j&apos;assure la coordination, la planification et le bon déroulement de chaque étape de l&apos;événement.<br />
                Mon objectif&nbsp;: garantir une expérience fluide, conviviale et professionnelle à tous les participants, pour que chaque édition soit un succès mémorable.
              </p>
            </div>

            {/* Romane BAHA */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/60 rounded-full">
                <Image
                  src="/equipe/romane.jpg"
                  alt="Romane BAHA"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Romane BAHA</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Cheffe de projets marketing & communication</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je suis Romane BAHA, étudiante en fin d&apos;études en Management des projets, passionnée par le marketing et la communication.<br />
                En tant que cheffe de projets marketing et communication pour Founders, j&apos;imagine et mets en œuvre des stratégies innovantes pour valoriser l&apos;événement et engager la communauté.<br />
                Mon objectif&nbsp;: faire rayonner Founders, inspirer et fédérer les jeunes talents autour de valeurs fortes et d&apos;une vision commune.
              </p>
            </div>
          </div>
        </section>

        {/* Section Partenariats & Business */}
        <section className="w-full max-w-6xl mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 uppercase text-base px-4 py-1">
              Partenariats & Business
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ludivine */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/40 rounded-full">
                <Image
                  src="/equipe/ludivine.jpg"
                  alt="Baha Audrey Ludivine"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Baha Audrey Ludivine</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Cheffe de projet R&D – Partenariats & Financement</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je suis Baha Audrey Ludivine, cheffe de projet R&D, passionnée par l&apos;innovation et le développement de projets à impact.<br />
                En charge des partenariats et du financement pour Founders, j&apos;ai à cœur de tisser des liens solides avec nos partenaires et de garantir les ressources nécessaires à la réussite de l&apos;événement.<br />
                C&apos;est moi qui ai eu le plaisir de vous contacter pour la plupart d&apos;entre vous&nbsp;!<br />
                Mon ambition&nbsp;: faire de Founders un rendez-vous incontournable, ouvert à toutes les opportunités et porteur d&apos;avenir pour notre communauté.
              </p>
            </div>

            {/* Anaïs */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/30 rounded-full">
                <Image
                  src="/equipe/anaïs.jpg"
                  alt="Anaïs"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Anaïs</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Commerciale IT & Partenariats</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je suis Anaïs, commerciale spécialisée en IT et solutions logicielles, actuellement en poste chez un éditeur de logiciels à Paris.<br />
                Au sein de l&apos;équipe Founders, je mets à profit mon expertise pour développer de nouveaux partenariats et piloter les négociations tarifaires et contractuelles.<br />
                Mon objectif&nbsp;: ouvrir de nouvelles opportunités, sécuriser des collaborations solides et contribuer activement au rayonnement de l&apos;événement.
              </p>
            </div>
          </div>
        </section>

        {/* Section Expertise technique */}
        <section className="w-full max-w-6xl mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 uppercase text-base px-4 py-1">
              Expertise technique
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guy Arnaud Longaing */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/50 rounded-full">
                <Image
                  src="/equipe/guy.jpeg"
                  alt="Guy Arnaud Longaing"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Guy Arnaud Longaing</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Ingénieur IT & Développement Web</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je suis Guy Arnaud Keuni, ingénieur en informatique et réseaux télécommunications, passionné par les technologies web et l&apos;innovation digitale.<br />
                Au sein de l&apos;équipe Founders, je m&apos;occupe de la création et du développement du site web de notre événement, en m&apos;assurant d&apos;une expérience utilisateur optimale et d&apos;une plateforme moderne.<br />
                Mon objectif&nbsp;: créer une interface intuitive, performante et esthétique qui reflète l&apos;excellence et l&apos;ambition de Founders, tout en facilitant l&apos;engagement de notre communauté.
              </p>
            </div>

            {/* Landry */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 shadow-xl overflow-hidden border-2 border-primary/20 rounded-full">
                <Image
                  src="/equipe/landry.jpg"
                  alt="Landry"
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">Landry</span>
              <span className="text-base font-medium text-accent mb-3 bg-primary/10 px-4 py-1 rounded-full">Ingénieur IA & Product Engineer</span>
              <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed bg-white/60 rounded-xl px-6 py-4 shadow">
                Je suis Landry, ingénieur en intelligence artificielle et passionné par l&apos;innovation technologique.<br />
                Au sein de Founders, j&apos;ai pour mission d&apos;apporter une vision tech moderne et de contribuer à la création d&apos;une expérience unique pour tous les participants.<br />
                Mon objectif&nbsp;: mettre la technologie au service de la communauté, faciliter les échanges, et aider chaque talent à révéler son potentiel.<br />
                Ensemble, faisons de Founders un événement inspirant, porteur d&apos;opportunités et de synergies pour la nouvelle génération de leaders afro.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Animations CSS à ajouter dans globals.css :
// .animate-fade-in { animation: fadeIn 1s both; }
// .animate-fade-in-up { animation: fadeInUp 1s both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } } 