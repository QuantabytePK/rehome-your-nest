import { motion } from "framer-motion";
import { Search, Heart, CreditCard, Truck, ShieldCheck, Recycle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const buyingSteps = [
  { icon: Search, title: "Browse & Discover", desc: "Explore our curated collection of ex-display and approved used kitchens, bathrooms, appliances, and furniture." },
  { icon: Heart, title: "Save & Compare", desc: "Add items to your wishlist, set up alerts for new arrivals, and compare options at your leisure." },
  { icon: CreditCard, title: "Secure Payment", desc: "Pay securely through our FCA-approved payment system with finance options available." },
  { icon: Truck, title: "Delivery & Installation", desc: "Our Which? Trusted Trader team handles professional dismantling, delivery, and optional installation." },
];

const sellingSteps = [
  { icon: Search, title: "Submit Your Item", desc: "Tell us about your kitchen, bathroom, or furniture — we'll arrange a free home visit." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Our experts photograph, measure, and assess your item to get the best price." },
  { icon: Recycle, title: "We Sell It", desc: "We market it, manage enquiries, handle offers, and complete the sale — you don't lift a finger." },
  { icon: CreditCard, title: "Get Paid", desc: "Receive your payment securely once the sale completes. No sale, no fee." },
];

const HowItWorks = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          How Rehome Works
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you're buying premium interiors at a fraction of the price, or selling items you no longer need — we make it simple.
        </p>
      </div>
    </section>

    {/* Buying */}
    <section className="container py-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Buying with Rehome</h2>
      <p className="text-muted-foreground mb-10">Save up to 80% on premium home interiors in four easy steps.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {buyingSteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">Step {i + 1}</div>
            <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Selling */}
    <section className="bg-secondary/30 py-16">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Selling with Rehome</h2>
        <p className="text-muted-foreground mb-10">Our comprehensive resale service handles everything — no sale, no fee.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellingSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-xs font-bold text-accent mb-2">Step {i + 1}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ CTA */}
    <section className="container py-16 text-center">
      <h2 className="font-display text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Contact Us
        </a>
        <a href="/something-to-sell" className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary/50 transition-colors">
          Sell With Us
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default HowItWorks;
