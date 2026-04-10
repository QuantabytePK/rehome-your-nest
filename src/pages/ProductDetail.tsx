import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Share2, MapPin, ShieldCheck, Truck, ArrowLeft, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const savings = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/${product.category}`} className="hover:text-foreground capitalize">{product.category.replace("-", " & ")}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <section className="container pb-12">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent text-accent-foreground">{product.condition}</span>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">Save {savings}%</span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">£{product.price.toLocaleString()}</span>
              <span className="text-lg text-muted-foreground line-through">£{product.originalPrice.toLocaleString()}</span>
              <span className="text-sm font-semibold text-primary">Save £{(product.originalPrice - product.price).toLocaleString()}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{product.location}</span>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((f) => (
                  <span key={f} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{f}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <button className="flex-1 min-w-[180px] px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Enquire Now
              </button>
              <button className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <a href="tel:01515419420" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              Or call us: 0151 541 9420
            </a>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Quality Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-5 h-5 text-primary" />
                Delivery Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/30 py-12">
          <div className="container">
            <h2 className="font-display text-xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
