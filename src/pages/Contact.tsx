import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Users, Heart, School } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Please accept the contact agreement",
        description: "You need to agree before we can process your request.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 via-background to-accent/20">
        <div className="container-narrow mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-accent/50 text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Get in <span className="text-primary">touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              We would love to hear from you, whether you are a parent, a teacher or part of an institution.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Questions, workshop requests or just curious? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <SectionHeading title="Send us a message" />

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border"
            {...fadeUp}
          >
            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input id="firstName" name="firstName" placeholder="Jane" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input id="lastName" name="lastName" placeholder="Doe" required className="rounded-xl" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email address *</Label>
              <Input id="email" name="email" type="email" placeholder="jane@example.com" required className="rounded-xl" />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>Your role</Label>
              <Select name="role">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="institution">School or institution</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select name="subject">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="What is this about?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="question">General question</SelectItem>
                  <SelectItem value="workshop">Organize a workshop</SelectItem>
                  <SelectItem value="partnership">Partnership inquiry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help…"
                required
                className="rounded-xl min-h-[140px]"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                I agree to be contacted regarding my request
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 h-12 text-base font-semibold"
            >
              {loading ? "Sending…" : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </Button>

            {/* Reassurance */}
            <div className="text-center space-y-1 pt-2">
              <p className="text-muted-foreground text-sm">We usually reply within a few days.</p>
              <p className="text-muted-foreground text-xs">Your information will only be used to respond to your request.</p>
            </div>
          </motion.form>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
