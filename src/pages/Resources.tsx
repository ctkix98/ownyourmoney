import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Resources = () => (
  <Layout>
    <section className="section-padding bg-gradient-to-br from-accent/20 via-background to-secondary/20 min-h-[70vh] flex items-center">
      <div className="container-narrow mx-auto text-center">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-accent/40 flex items-center justify-center mx-auto mb-8">
            <BookOpen size={32} className="text-accent-foreground" />
          </div>

          <span className="inline-block bg-accent/50 text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Coming soon
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Resources for <span className="text-primary">parents</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Practical tools to help you talk about money with your child.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
            <p className="text-foreground/80 leading-relaxed mb-4">
              We are currently preparing resources to help you discuss money in a simple 
              and practical way with your child. They will be available soon.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              In the meantime, feel free to reach out if you have any questions or specific needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Resources;
