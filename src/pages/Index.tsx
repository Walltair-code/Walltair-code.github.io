import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import mePhoto from "@/assets/Me.jpeg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* Hero Section — Split Screen */}
      <section ref={heroRef} className="relative min-h-[100svh] -mt-16 md:-mt-20 overflow-hidden">
        <div className="absolute inset-0 grid lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="relative h-[50svh] lg:h-auto overflow-hidden"
          >
            <img
              src={mePhoto}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:hidden" />
          </motion.div>

          {/* Right: Content */}
          <div className="relative flex items-center bg-background px-8 lg:px-16 xl:px-24 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="max-w-xl"
            >
              <p className="section-label mb-6">Founder, WALLTAIR AB</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 leading-[0.92] tracking-tight">
                Anton
                <br />
                <span className="italic">Waller</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                M.Sc. Mechanical Engineer specializing in product development (2026),
                and founder of WALLTAIR — a technical consultancy focused on product
                development, process improvement, and project management.
              </p>
              <p className="text-base text-muted-foreground/80 mb-10 leading-relaxed max-w-md">
                Currently building WALLTAIR from the ground up. I'm looking to partner
                with companies that value hands-on technical expertise and am actively
                taking on new consulting engagements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
                >
                  <a href="#background">
                    My Background
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase"
                >
                  <Link to="/contact">Get in Touch</Link>
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
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">Scroll</span>
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
            <p className="section-label mb-3">Background</p>
            <h2 className="text-4xl md:text-5xl text-foreground max-w-2xl">
              From the shop floor to the drawing board.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                period: "2018 – 2021",
                place: "Volvo Cars",
                role: "Maintenance Technician",
                description:
                  "Maintained and improved paint-shop robotics, building a hands-on foundation in industrial systems and process reliability before starting my engineering studies.",
              },
              {
                period: "2024",
                place: "Boat Production Company, Gothenburg",
                role: "Internship & Summer Role",
                description:
                  "Took ownership of improving aftermarket sales, managed customer and supplier relationships across Europe, and led the implementation of a new software system the company chose to keep on permanently.",
              },
              {
                period: "2026",
                place: "Polestar — Mission Zero House",
                role: "Master's Thesis",
                description:
                  "Developed a new method for carbon-free metal production as part of Polestar's Mission Zero House initiative. The results were well received and have since been presented at several follow-up meetings.",
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
              <p className="section-label mb-4">How I Help</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                Technical consulting, grounded in hands-on experience.
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
                  title: "Product Development",
                  description: "Turn ideas into working products — from concept and prototyping through to manufacturing-ready design."
                },
                {
                  title: "Process Improvement",
                  description: "Identify inefficiencies and build better systems, on the shop floor or in the workflow — grounded in real industrial experience."
                },
                {
                  title: "Project Management",
                  description: "Drive cross-functional initiatives from kickoff to delivery, keeping stakeholders and suppliers aligned along the way."
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
            <p className="section-label text-background/40 mb-8">Where WALLTAIR Is Now</p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] mb-10">
              "WALLTAIR is just getting started — and that's exactly the point.
              I'm looking for companies willing to take a chance on a driven,
              technically grounded partner who's ready to prove it."
            </blockquote>
            <div className="text-sm tracking-[0.1em] uppercase text-background/60">
              <span className="text-background">Anton Waller</span>
              <span className="mx-3">·</span>
              <span>Founder, WALLTAIR AB</span>
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
            <p className="section-label mb-6">Start a Conversation</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05]">
              Open to new consulting engagements.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
              WALLTAIR AB is currently taking on new clients. If you're looking for hands-on
              support in product development, process improvement, or project management,
              I'd welcome a short conversation — in person or online.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
            >
              <Link to="/contact">
                Get in Touch
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