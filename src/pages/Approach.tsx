import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageSquare, Lightbulb, Puzzle, Compass, ArrowRight,
  CheckCircle2, Sparkles, HeartHandshake
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import mascotRocket from "@/assets/mascot-rocket.svg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Approach = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/15">
      <div className="container-narrow mx-auto text-center">
        <motion.div {...fadeUp}>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Our approach
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            A new way to talk about{" "}
            <span className="text-primary">money.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Money is a serious topic. But that doesn't mean learning about it has to be serious. 
            We make it simple, relatable, and — dare we say — fun.
          </p>
          <img
            src={mascotRocket}
            alt="Coin mascot on a rocket"
            className="w-40 mx-auto animate-float drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>

    {/* Tone */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="Our tone"
          title="We talk about money like a friend — not a banker."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageSquare,
              title: "Accessible",
              desc: "No financial jargon. No complicated charts. Just clear, simple language anyone can understand.",
              color: "bg-secondary text-secondary-foreground",
            },
            {
              icon: HeartHandshake,
              title: "No judgment",
              desc: "There are no stupid questions about money. We create a safe space where curiosity is celebrated.",
              color: "bg-accent/50 text-accent-foreground",
            },
            {
              icon: Sparkles,
              title: "Real-life language",
              desc: "We talk about pocket money, subscriptions, and online shopping — not stocks and bonds.",
              color: "bg-primary/10 text-primary",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl p-8 bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What makes it different */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="What makes us different"
          title="We don't teach. We facilitate discovery."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Puzzle,
              title: "Interactive workshops",
              desc: "Students don't sit and listen — they participate. Through group activities, games, and discussions, they discover concepts themselves.",
            },
            {
              icon: Lightbulb,
              title: "Real-life examples",
              desc: "We use situations teenagers actually face: managing pocket money, understanding subscriptions, or resisting impulse buys.",
            },
            {
              icon: Compass,
              title: "Focus on behavior",
              desc: "We don't just teach facts about money. We help young people understand why they make certain choices — and how to make better ones.",
            },
            {
              icon: CheckCircle2,
              title: "No theory overload",
              desc: "We skip the economics textbook. Everything we cover is practical, actionable, and relevant to their daily lives.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Ambition */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div {...fadeUp} className="bg-foreground rounded-3xl p-8 md:p-12 text-center">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Our ambition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            We're not trying to create financial experts.
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Our goal is much simpler — and more powerful. We want to create awareness. 
            We want teenagers to pause before they spend, to ask questions, and to understand 
            that every financial decision matters. Even the small ones.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {["Awareness", "Better decisions", "Healthy habits"].map((text, i) => (
              <div key={i} className="bg-background/10 rounded-xl p-4">
                <p className="text-background font-semibold text-sm">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent/15">
      <div className="container-narrow mx-auto text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to bring this to your school?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We'd love to work with you. Let's give the next generation the tools they deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Learn about us <ArrowRight size={18} />
            </Link>
            <Link
              to="/"
              className="border-2 border-foreground/20 text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Approach;
