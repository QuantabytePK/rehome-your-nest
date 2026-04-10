import { motion } from "framer-motion";
import { Recycle, Award, Truck, CreditCard } from "lucide-react";

const values = [
  {
    icon: Recycle,
    title: "Sustainable by design",
    description: "Every purchase extends the life of quality interiors, reducing waste and your carbon footprint.",
  },
  {
    icon: Award,
    title: "Expert quality checked",
    description: "Our specialist team inspects every item to ensure it meets our high standards before listing.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    description: "Professional delivery and installation services available across the UK.",
  },
  {
    icon: CreditCard,
    title: "Finance available",
    description: "FCA approved finance options to help you spread the cost of your dream interior.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why choose Rehome?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Quality interiors are built to last. We give them a second life at a fraction of the price.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
                <val.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
