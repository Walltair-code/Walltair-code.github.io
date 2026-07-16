import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Layout } from "@/components/Layout"

const Contact = () => {
  return (
    <Layout>
      <div className="container-narrow py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <p className="section-label mb-6">Kontakt</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05]">
            Nyfiken på ett samarbete?
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
            WALLTAIR AB tar just nu emot nya kunder. Söker du praktiskt stöd inom
            produktutveckling, processförbättring eller projektledning? Då tar jag
            gärna ett kort samtal — fysiskt eller digitalt.
          </p>
          <a
            href="mailto:anton.waller@walltair.se"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl text-foreground border-b border-foreground/20 hover:border-foreground transition-colors pb-1"
          >
            anton.waller@walltair.se
            <ArrowUpRight className="w-6 h-6" />
          </a>
          <div className="mt-12 text-sm tracking-[0.1em] uppercase text-muted-foreground">
            <span>WALLTAIR AB</span>
            <span className="mx-3">·</span>
            <a href="https://walltair.se" className="hover:text-foreground transition-colors">
              walltair.se
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Contact