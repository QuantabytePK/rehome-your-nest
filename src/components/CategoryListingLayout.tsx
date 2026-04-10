import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, Grid3X3, LayoutList, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface Props {
  title: string;
  description: string;
  products: Product[];
  filters: { label: string; options: string[] }[];
}

const CategoryListingLayout = ({ title, description, products, filters }: Props) => {
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const filteredProducts = useMemo(() => {
    let result = [...products];
    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        result = result.filter((p) => {
          if (key === "Condition") return values.includes(p.condition);
          if (key === "Brand") return values.includes(p.brand);
          if (key === "Type") return values.includes(p.type);
          return true;
        });
      }
    });
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "savings") result.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
    return result;
  }, [products, sortBy, activeFilters]);

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[group] || [];
      return {
        ...prev,
        [group]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-16 md:top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-12 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {Object.values(activeFilters).flat().length > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {Object.values(activeFilters).flat().length}
                </span>
              )}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {filteredProducts.length} results
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border border-border rounded px-2 py-1 text-foreground"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="savings">Biggest Savings</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-64 shrink-0 hidden md:block"
            >
              {filters.map((filter) => (
                <div key={filter.label} className="mb-6">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-3">{filter.label}</h3>
                  <div className="space-y-2">
                    {filter.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={(activeFilters[filter.label] || []).includes(opt)}
                          onChange={() => toggleFilter(filter.label, opt)}
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              {Object.values(activeFilters).flat().length > 0 && (
                <button
                  onClick={() => setActiveFilters({})}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </motion.aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products match your filters.</p>
                <button onClick={() => setActiveFilters({})} className="text-primary hover:underline mt-2 text-sm">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryListingLayout;
