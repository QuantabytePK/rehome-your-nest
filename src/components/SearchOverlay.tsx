import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!open) return;
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const results = query.trim().length >= 2
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-[70] pt-4 px-4 md:pt-20"
          >
            <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search kitchens, bathrooms, appliances..."
                  className="flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground"
                />
                <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim().length < 2 ? (
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground text-sm">Type at least 2 characters to search</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {["Neptune", "Tom Howley", "Miele", "Shaker", "Modern"].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-foreground font-medium">No results for "{query}"</p>
                    <p className="text-muted-foreground text-sm mt-1">Try a different search term</p>
                  </div>
                ) : (
                  <div className="p-2">
                    <p className="px-3 py-2 text-xs text-muted-foreground">{results.length} result{results.length !== 1 ? "s" : ""}</p>
                    {results.map((product) => {
                      const savings = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                      return (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-12 rounded-lg object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
                            <p className="font-display text-sm font-semibold text-foreground truncate">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.location} · {product.condition}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-bold text-foreground text-sm">£{product.price.toLocaleString()}</p>
                            <p className="text-xs text-secondary font-medium">-{savings}%</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
