import { motion } from "framer-motion";
import { Leaf, Recycle, TreePine, Droplets, Factory, TrendingDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "500kg", label: "Average materials in one kitchen", icon: Factory },
  { value: "1.2M", label: "Kitchens scrapped yearly in the UK", icon: TrendingDown },
  { value: "80%", label: "Of kitchen waste goes to landfill", icon: Recycle },
  { value: "12 tons", label: "CO₂ saved per kitchen rehomed", icon: Leaf },
];

const pillars = [
  {
    icon: Recycle,
    title: "Circular Economy",
    desc: "Every item we rehome extends its life by 15–20 years. Premium interiors are built to last — they deserve more than one home.",
  },
  {
    icon: TreePine,
    title: "Reduced Deforestation",
    desc: "Reusing existing cabinetry means fewer trees felled for new timber. One rehomed kitchen saves the equivalent of 8 mature trees.",
  },
  {
    icon: Droplets,
    title: "Water & Energy",
    desc: "Manufacturing a new kitchen uses thousands of litres of water and significant energy. Buying pre-owned eliminates that footprint entirely.",
  },
  {
    icon: Factory,
    title: "Landfill Diversion",
    desc: "We've diverted hundreds of tonnes of quality materials from landfill. Every purchase you make with us is a vote for a better planet.",
  },
];

const Sustainability = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-[hsl(150,15%,45%)]/10 py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Leaf className="w-12 h-12 text-[hsl(var(--sage))] mx-auto mb-4" />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sustainability at Rehome
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The most sustainable kitchen is the one that already exists. We're on a mission to keep quality interiors out of landfill and in beautiful homes.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 bg-card rounded-xl border border-border"
          >
            <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Four Pillars
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-5 p-6 bg-card rounded-xl border border-border"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-16 text-center">
      <h2 className="font-display text-2xl font-bold text-foreground mb-4">
        Make the Sustainable Choice
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        Every purchase from Rehome helps reduce waste and protect our planet — without compromising on quality or style.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="/kitchens" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Shop Now
        </a>
        <a href="/something-to-sell" className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
          Sell With Us
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default Sustainability;
