import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import mePhoto from "@/assets/Me.png";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* Hero Section — Split Screen */}
      <section ref={heroRef} className="relative min-h-[100svh] -mt-16 md:-mt-20 lg:overflow-hidden">
        <div className="grid lg:absolute lg:inset-0 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="relative h-[50svh] lg:h-auto overflow-hidden"
          >
            <img
              src={mePhoto}
              alt="Porträttfoto"
              className="w-full h-full object-cover object-[50%_15%] lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:hidden" />
          </motion.div>

          {/* Right: Content */}
          <div className="relative flex items-center bg-background px-8 lg:px-16 xl:px-24 py-16 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="max-w-xl"
            >
              <p className="section-label mb-6">Grundare, WALLTAIR AB</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 leading-[0.92] tracking-tight">
                Anton
                <br />
                <span className="italic">Waller</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Civilingenjör inom produktframtagning och grundare av WALLTAIR —
                ett konsultbolag inom teknisk konsulting med fokus på
                produktutveckling, processförbättring och projektledning.
              </p>
              <p className="text-base text-muted-foreground/80 mb-10 leading-relaxed max-w-md">
                WALLTAIR befinner sig i en spännande uppstartsfas. Jag letar efter
                företag som värdesätter praktisk, teknisk kompetens — och tar just
                nu emot nya konsultuppdrag.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
                >
                  <a href="#background">
                    Min bakgrund
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase"
                >
                  <Link to="/contact">Kontakta mig</Link>
                </Button>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">Scrolla</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="py-24 md:py-32 bg-linen scroll-mt-20">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="section-label mb-3">Bakgrund</p>
            <h2 className="text-4xl md:text-5xl text-foreground max-w-2xl">
              Från verkstadsgolvet till ritbordet.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                period: "2018 – 2021",
                place: "Volvo Cars, Göteborg",
                role: "Underhållstekniker",
                description:
                  "Jobbade med förbättring och underhåll av målerirobotar — en praktisk grund i industriella system och processtillförlitlighet innan ingenjörsstudierna tog vid.",
              },
              {
                period: "2024",
                place: "Humphree, Göteborg",
                role: "Praktik & sommarjobb",
                description:
                  "Fick eget ansvar för att förbättra eftermarknadsförsäljningen, höll i kund- och leverantörskontakt med aktörer runt om i Europa, och tog fram en interaktiv reservdelskatalog som företaget senare valde att behålla permanent.",
              },
              {
                period: "2026",
                place: "Polestar — Mission Zero House",
                role: "Examensarbete",
                description:
                  "Tog fram en ny metod för koldioxidfri metallframställning inom ramen för Polestars initiativ Mission Zero House. Arbetet togs emot väl och har sedan dess presenterats vid flera uppföljande möten.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.place}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-12 border-t border-border py-10"
              >
                <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-2xl md:text-3xl text-foreground mb-1">
                    {item.place}
                  </h3>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                    {item.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 md:py-32">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-4">Vad Jag Erbjuder</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                Teknisk konsulting, grundad i praktisk erfarenhet.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-10"
            >
              {[
                {
                  title: "Produktutveckling",
                  description: "Förvandlar idéer till fungerande produkter — från koncept och prototyp till tillverkningsklar design."
                },
                {
                  title: "Processförbättring",
                  description: "Identifierar ineffektivitet och bygger bättre system, på verkstadsgolvet eller i arbetsflödet — grundat i verklig industriell erfarenhet."
                },
                {
                  title: "Projektledning",
                  description: "Driver tvärfunktionella initiativ från start till leverans, och håller intressenter och leverantörer samordnade längs vägen."
                }
              ].map((service, index) => (
                <div key={index} className="border-t border-border pt-8">
                  <h3 className="text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <p className="section-label text-background/40 mb-8">Var WALLTAIR Står Idag</p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] mb-10">
              "WALLTAIR har precis dragit igång — och det är precis poängen.
              Jag söker företag som vågar satsa på en driven, tekniskt kunnig
              partner som är redo att bevisa sitt värde."
            </blockquote>
            <div className="text-sm tracking-[0.1em] uppercase text-background/60">
              <span className="text-background">Anton Waller</span>
              <span className="mx-3">·</span>
              <span>Grundare, WALLTAIR AB</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <p className="section-label mb-6">Hör Av Dig</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05]">
              Öppen för nya konsultuppdrag.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
              WALLTAIR AB tar just nu emot nya kunder. Söker du praktiskt stöd inom
              produktutveckling, processförbättring eller projektledning? Då tar jag
              gärna ett kort samtal — fysiskt eller digitalt.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
            >
              <Link to="/contact">
                Kontakta mig
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;