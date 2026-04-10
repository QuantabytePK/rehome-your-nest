import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const savings = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2 py-1 text-xs font-medium rounded bg-accent text-accent-foreground">
              {product.condition}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded bg-primary text-primary-foreground">
              Save {savings}%
            </span>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
          <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">{product.location}</p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-bold text-foreground">
              £{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
