import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful navy kitchen with gold hardware and marble countertops"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(216, 28%, 12%, 0.82), hsla(216, 28%, 18%, 0.45))" }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            Sustainable luxury interiors
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Renovate{" "}
            <span className="text-gold-gradient">Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-light max-w-lg leading-relaxed">
            Buy quality kitchens, bathrooms & appliances, or sell pre-loved. Up to 80% off high street prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/kitchens">
                Shop Kitchens
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/something-to-sell">Sell with Rehome</Link>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-primary-foreground/60 text-sm"
          >
            As seen on BBC One <span className="text-gold font-medium">Dragons' Den</span> →
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
