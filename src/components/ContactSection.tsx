import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [contactBy, setContactBy] = useState<"email" | "phone">("email");

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Have a question? Complete the form or reach out directly — our friendly team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Call us</p>
                  <a href="tel:01515419420" className="text-muted-foreground hover:text-secondary transition-colors">0151 541 9420</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email us</p>
                  <a href="mailto:info@rehome.co.uk" className="text-muted-foreground hover:text-secondary transition-colors">info@rehome.co.uk</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Opening hours</p>
                  <div className="text-muted-foreground text-sm space-y-1 mt-1">
                    <p>Mon – Fri: 9:00am – 5:30pm</p>
                    <p>Saturday: 9:30am – 1:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input id="lastName" placeholder="Smith" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" placeholder="+44 7700 000000" required />
            </div>
            <div className="space-y-2">
              <Label>Contact me by *</Label>
              <div className="flex gap-4">
                {(["email", "phone"] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setContactBy(method)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                      contactBy === method
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-card text-muted-foreground border-border hover:border-secondary/50"
                    }`}
                  >
                    {method === "email" ? "Email" : "Phone"}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="refNumber">Product reference (optional)</Label>
              <Input id="refNumber" placeholder="e.g. RH-12345" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help? *</Label>
              <Textarea id="message" placeholder="Tell us about your enquiry..." rows={4} required />
            </div>
            <Button variant="gold" size="lg" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
