import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Handshake, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import mascotStanding from "@/assets/mascot-standing.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-br from-accent/20 via-background to-secondary/20">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div className="lg:col-span-3" {...fadeUp}>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              About us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              We believe every teenager deserves to{" "}
              <span className="text-primary">understand money.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gère ta thune is a non-profit association born from a simple observation: 
              most young people finish school without ever learning how money works. 
              We're here to change that.
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={mascotStanding} alt="Coin mascot" className="w-40 md:w-52 animate-bounce-gentle drop-shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why we exist */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="Why we exist"
          title="Financial education shouldn't be optional."
          subtitle="In a world of digital payments, subscriptions, and online shopping, understanding money isn't a luxury — it's a necessity."
        />
        <motion.div {...fadeUp} className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Heart size={20} className="text-primary" /> The problem
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li>• Most schools don't teach personal finance</li>
                <li>• Parents often feel unequipped to explain money</li>
                <li>• Young people face financial decisions earlier than ever</li>
                <li>• Bad habits formed at 14 can last a lifetime</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Target size={20} className="text-primary" /> Our response
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li>• Interactive workshops directly in schools</li>
                <li>• Resources parents can use at home</li>
                <li>• A practical, no-jargon approach</li>
                <li>• Focus on real-life skills, not theory</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="Our mission"
          title="Give teenagers the tools to understand money."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Educate",
              desc: "Provide clear, accessible financial education that makes sense to a 14-year-old.",
            },
            {
              icon: Users,
              title: "Engage",
              desc: "Create interactive experiences where every student participates and learns through doing.",
            },
            {
              icon: Target,
              title: "Empower",
              desc: "Build awareness and confidence so young people can make better decisions about money.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto mb-5">
                <item.icon size={26} className="text-accent-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Method */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="Our method"
          title="Interactive, practical, engaging."
          subtitle="We don't do PowerPoint presentations and lectures. Our workshops are designed to feel like a conversation, not a class."
        />
        <motion.div {...fadeUp} className="space-y-6">
          {[
            "We use role-play, group discussions, and real-life case studies",
            "Students work together to solve challenges they'll actually face",
            "Every session is adapted to the age group and their reality",
            "We keep it fun — because learning about money shouldn't be boring",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 bg-muted/50 rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary font-bold text-sm">{i + 1}</span>
              </div>
              <p className="text-foreground/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Parents */}
    <section className="section-padding bg-accent/15">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <SectionHeading
              tag="For parents"
              title="The conversation continues at home."
              center={false}
            />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Workshops are just the start. We provide parents with simple tools and conversation 
              starters so they can continue building financial awareness at home — no expertise required.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You don't need to be a financial expert. You just need to be willing to talk 
              about money openly and honestly with your teenager.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h4 className="font-bold mb-4">What parents get:</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span> Practical guides to talk about money
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span> Activity ideas for the whole family
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span> Tips to set healthy money habits
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span> Support without judgment
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Partners */}
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.div {...fadeUp}>
          <Handshake size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Supported by partners who share our values.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We work with schools, institutions, and organizations who believe in equipping the next generation 
            with essential life skills. Our content remains independent, neutral, and always educational.
          </p>
          <Link
            to="/approach"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Discover our approach <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
