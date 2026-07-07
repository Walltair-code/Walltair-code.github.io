import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/portfolio";
import { caseStudies } from "@/data/portfolio";
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
              <p className="section-label mb-6">Independent Consultant</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 leading-[0.92] tracking-tight">
                Anton
                <br />
                <span className="italic">Waller</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Product design, operations, engineering, and product development.
                I help teams turn ambitious ideas into disciplined, shippable products.
              </p>
              <p className="text-base text-muted-foreground/80 mb-10 leading-relaxed max-w-md">
                Former operator turned advisor. I work with founders and leadership teams
                to clarify strategy, build strong product practices, and ship work that matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
                >
                  <Link to="/work">
                    View Work
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
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

      {/* Selected Work Preview */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-full">
          <div className="flex items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-3">Selected Work</p>
              <h2 className="text-4xl md:text-5xl text-foreground">
                Recent Engagements
              </h2>
            </motion.div>
            <Link
              to="/work"
              className="hidden md:flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.slice(0, 4).map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Link to="/work" className="group block">
                  <div className="image-reveal aspect-[4/3] mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                        {study.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                    {study.description}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Button
              asChild
              variant="outline"
              className="rounded-none px-8 py-5 text-sm tracking-[0.15em] uppercase"
            >
              <Link to="/work">View All Work</Link>
            </Button>
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
                Strategy, execution, and the messy middle in between.
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
                  title: "Product Strategy",
                  description: "Clarify what to build, for whom, and why. From discovery to roadmap, I help teams find focus."
                },
                {
                  title: "Design & Engineering Operations",
                  description: "Build the rituals, systems, and workflows that let creative teams do their best work at scale."
                },
                {
                  title: "Product Development",
                  description: "Turn strategy into shipped product. I embed with teams to accelerate delivery without sacrificing craft."
                },
                {
                  title: "Leadership Coaching",
                  description: "Support product leaders and founders in making better decisions, faster — and building teams that last."
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
            <p className="section-label text-background/40 mb-8">Client Perspective</p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] mb-10">
              "[Your Name] brought clarity to chaos. In weeks, we went from a scattered roadmap
              to a focused product strategy the whole team could rally behind."
            </blockquote>
            <div className="text-sm tracking-[0.1em] uppercase text-background/60">
              <span className="text-background">Founder & CEO</span>
              <span className="mx-3">·</span>
              <span>Series A SaaS Company</span>
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
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
              I take on a limited number of engagements each quarter. If you're building
              something meaningful and need an experienced product partner, let's talk.
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