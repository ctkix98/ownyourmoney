import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb, Users, GraduationCap, ShieldCheck, ArrowRight,
  Smartphone, CreditCard, TrendingUp, MessageCircle, PiggyBank,
  Target, AlertTriangle, BookOpen, Heart, School, UserCheck
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import mascotRocket from "@/assets/mascot-rocket.jpg";
import mascotHappy from "@/assets/mascot-happy.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-accent/20 overflow-hidden">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🚀 Financial education for teens
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Money is something you{" "}
              <span className="text-primary">learn.</span>
              <br />
              And it can start{" "}
              <span className="relative inline-block">
                <span className="relative z-10">early.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/60 -z-0 rounded-sm" />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Helping young people understand money in a simple, practical way — 
              through interactive workshops, real-life examples, and open conversations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/approach"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Explore resources <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-foreground/20 text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Bring a workshop to your school
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/50 rounded-full blur-2xl" />
              <img
                src={mascotRocket}
                alt="Coin mascot on a rocket"
                className="relative z-10 w-72 md:w-96 animate-float drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Problem */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="The challenge"
          title="The world has changed. Education hasn't kept up."
          subtitle="Financial education is mostly left to parents — but the landscape of money has changed dramatically."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Smartphone, title: "Digital payments", desc: "Cash is disappearing. Young people tap, swipe, and subscribe — often without understanding what they spend." },
            { icon: CreditCard, title: "Subscriptions & traps", desc: "Free trials, in-app purchases, buy-now-pay-later. The traps are designed to be invisible." },
            { icon: TrendingUp, title: "Social media influence", desc: "Influencers promote spending. Teens feel pressure to buy without the tools to question it." },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...stagger}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="section-padding bg-secondary/20">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <SectionHeading
              tag="Our workshops"
              title="Learning by doing, not by listening."
              subtitle="Our workshops are interactive, fun, and based on real-life situations teenagers actually face."
              center={false}
            />
            <div className="space-y-5">
              {[
                { icon: MessageCircle, text: "No boring lectures — open discussions and group activities" },
                { icon: Lightbulb, text: "Real-life scenarios: budgeting pocket money, spotting scams" },
                { icon: Users, text: "Participation-first: every student is involved" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={mascotHappy}
              alt="Happy coin mascot"
              className="w-52 md:w-64 animate-bounce-gentle drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Learning Outcomes */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="What they learn"
          title="Skills for life, not just for class."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: PiggyBank, title: "Managing money", desc: "How to track what comes in and what goes out", color: "bg-primary/10 text-primary" },
            { icon: Target, title: "Smart spending", desc: "The difference between needs, wants, and traps", color: "bg-secondary text-secondary-foreground" },
            { icon: AlertTriangle, title: "Avoiding traps", desc: "Recognizing scams, hidden fees, and pressure tactics", color: "bg-accent/50 text-accent-foreground" },
            { icon: BookOpen, title: "Budgeting basics", desc: "Creating a simple plan for their money", color: "bg-primary/10 text-primary" },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...stagger}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={26} />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Audience */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <SectionHeading
          tag="Who it's for"
          title="For everyone who cares about the next generation."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Parents",
              desc: "Get tools and resources to continue the conversation about money at home. No expertise needed.",
              bg: "gradient-rose",
            },
            {
              icon: School,
              title: "Schools & institutions",
              desc: "Bring interactive workshops to your classrooms. We handle everything — you just open the door.",
              bg: "gradient-blue",
            },
            {
              icon: UserCheck,
              title: "Young people",
              desc: "Learn about money in a way that actually makes sense. No jargon, no judgment — just real life.",
              bg: "gradient-yellow",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...stagger}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`${item.bg} p-6 flex items-center justify-center`}>
                <item.icon size={36} className="text-primary-foreground drop-shadow" />
              </div>
              <div className="bg-card p-6 border border-t-0 border-border rounded-b-2xl">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reassurance */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
            <ShieldCheck size={32} className="text-secondary-foreground" />
          </div>
          <motion.div {...fadeUp}>
            <h3 className="text-2xl font-bold mb-3">Built on trust, grounded in real life.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is practical and based on behavioral understanding — not abstract theory. 
              We use real-life scenarios that teenagers recognize, so the lessons stick. 
              Everything we do is non-commercial, transparent, and designed with educators and parents in mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-foreground">
      <div className="container-narrow mx-auto text-center">
        <motion.div {...fadeUp}>
          <GraduationCap size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to make a difference?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a parent, teacher, or institution — there's a way to get involved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Organize a workshop
            </Link>
            <Link
              to="/approach"
              className="border-2 border-background/30 text-background px-7 py-3.5 rounded-full font-semibold hover:border-background transition-colors"
            >
              Access parent resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
