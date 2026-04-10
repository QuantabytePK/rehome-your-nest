import { motion } from "framer-motion";
import { CheckCircle2, Camera, MessageSquare, Truck, CreditCard, Shield, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  { icon: Camera, title: "Free Home Visit", desc: "Professional photography and measurements at your home — completely free." },
  { icon: MessageSquare, title: "We Manage Enquiries", desc: "We handle all buyer enquiries and offers on your behalf." },
  { icon: Truck, title: "Dismantle & Deliver", desc: "Our in-house Which? Trusted Trader team dismantles and delivers." },
  { icon: CreditCard, title: "FCA Approved Payments", desc: "Secure, regulated payments through our FCA-approved system." },
  { icon: Shield, title: "After-Sale Support", desc: "Full seller and buyer support continues after the sale." },
];

const categories = [
  { title: "Kitchen", desc: "Sell your used or ex-display kitchen for up to 50% of its original value." },
  { title: "Bathroom", desc: "Bathroom suites, vanity units, baths, and accessories." },
  { title: "Appliances", desc: "Premium appliances from brands like Miele, Gaggenau, and Quooker." },
  { title: "Furniture", desc: "Wardrobes, dressers, tables, sideboards, and more." },
];

const SomethingToSell = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Selling with Rehome
          </h1>
          <p className="text-muted-foreground text-lg">
            The UK's award-winning resale service for premium home interiors. No sale, no fee.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Award className="w-8 h-8 text-accent" />
            <span className="text-sm text-muted-foreground">Marie Claire Sustainability Award Winner 2023</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* How it works */}
    <section className="container py-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Our Comprehensive Resale Service</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* What can you sell */}
    <section className="bg-secondary/30 py-16">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">What Would You Like to Sell?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
              <button className="mt-4 text-sm font-medium text-primary hover:underline">Get started →</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container py-16 text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Sell?</h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Get in touch today for a free, no-obligation consultation about selling your home interiors.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Contact Us
        </a>
        <a href="tel:01515419420" className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary/50 transition-colors">
          Call 0151 541 9420
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default SomethingToSell;
