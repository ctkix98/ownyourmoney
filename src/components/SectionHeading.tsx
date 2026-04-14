import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ tag, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {tag && (
      <span className="inline-block bg-accent/50 text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
