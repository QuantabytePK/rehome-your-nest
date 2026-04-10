import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-10 h-10 text-gold mx-auto mb-6 opacity-50" />
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-primary-foreground font-display leading-relaxed mb-8">
            "We are so pleased with our purchase from Rehome. Excellent quality kitchen at a fraction of the cost. Exceptional customer service all the way! I have no hesitation in recommending Rehome."
          </blockquote>
          <p className="text-gold font-medium">Michelle A.</p>
          <p className="text-primary-foreground/50 text-sm">Rehome Customer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
