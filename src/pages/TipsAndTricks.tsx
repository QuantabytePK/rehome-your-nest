import { motion } from "framer-motion";
import { Lightbulb, Ruler, Palette, Wrench, Leaf, PoundSterling } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tips = [
  {
    icon: Ruler,
    title: "Measure Twice, Buy Once",
    category: "Planning",
    content: "Before purchasing any pre-owned kitchen or bathroom, get exact measurements of your space. Note positions of plumbing, electrics, and any structural elements. Our team can help with a free home survey.",
  },
  {
    icon: Palette,
    title: "Mixing Old & New",
    category: "Design",
    content: "Don't be afraid to combine pre-owned cabinetry with new worktops or handles. A fresh worktop on quality second-hand units can create a completely bespoke look at a fraction of the cost.",
  },
  {
    icon: Wrench,
    title: "Choosing the Right Installer",
    category: "Installation",
    content: "Always use a qualified, insured fitter. Ask for references and check reviews. Our Which? Trusted Trader network can connect you with vetted professionals in your area.",
  },
  {
    icon: Leaf,
    title: "The Sustainability Advantage",
    category: "Eco Living",
    content: "Quality kitchens contain around 500kg of materials. By buying pre-owned, you're keeping all of that out of landfill. It's the single biggest eco-friendly choice you can make for your home.",
  },
  {
    icon: PoundSterling,
    title: "Smart Budget Planning",
    category: "Finance",
    content: "A pre-owned kitchen typically costs 50-80% less than new. Use your savings to invest in premium worktops, high-end appliances, or professional installation for a truly luxury result.",
  },
  {
    icon: Lightbulb,
    title: "Spot Quality When You See It",
    category: "Buying Guide",
    content: "Look for solid wood doors, dovetail drawer joints, and soft-close hinges — these are signs of premium quality that will last another 20+ years. Avoid chipboard carcasses where possible.",
  },
  {
    icon: Ruler,
    title: "Adapting Units to Fit",
    category: "Installation",
    content: "Most kitchen units can be trimmed, extended with fillers, or reconfigured. A skilled fitter can adapt pre-owned units to fit almost any space — even non-standard layouts.",
  },
  {
    icon: Palette,
    title: "Refresh Without Replacing",
    category: "Design",
    content: "New handles, a lick of paint on feature walls, or updated lighting can completely transform the look of your pre-owned kitchen. Small changes make a huge impact.",
  },
  {
    icon: PoundSterling,
    title: "Maximise Your Sale Price",
    category: "Selling",
    content: "Clean everything thoroughly, take well-lit photos, and list all components including appliances. Complete kitchens with appliances sell faster and for higher prices.",
  },
];

const TipsAndTricks = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
        >
          Tips & Tricks
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Expert advice to help you buy, sell, and install pre-owned interiors with confidence.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, i) => (
          <motion.article
            key={tip.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <tip.icon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {tip.category}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{tip.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{tip.content}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="bg-muted py-16 text-center">
      <div className="container">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Need More Advice?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Our team is always happy to help with planning, measuring, and choosing the right items.
        </p>
        <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-block">
          Get In Touch
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default TipsAndTricks;
