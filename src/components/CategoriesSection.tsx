import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import kitchenImg from "@/assets/category-kitchen.jpg";
import bathroomImg from "@/assets/category-bathroom.jpg";
import appliancesImg from "@/assets/category-appliances.jpg";
import gardenImg from "@/assets/category-garden.jpg";

const categories = [
  { name: "Kitchens", image: kitchenImg, count: "200+ listings", href: "/kitchens" },
  { name: "Bathrooms", image: bathroomImg, count: "150+ listings", href: "/bathrooms" },
  { name: "Appliances", image: appliancesImg, count: "300+ listings", href: "/appliances" },
  { name: "Home & Garden", image: gardenImg, count: "100+ listings", href: "/home-garden" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            Shop by category
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Discover quality pre-loved and ex-display interiors from top brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={cat.href}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-1">
                    {cat.count}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary-foreground font-display text-xl md:text-2xl font-semibold">
                      {cat.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
