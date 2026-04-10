import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="container py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
      </div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Your Basket is Empty</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Browse our collection of premium pre-loved kitchens, bathrooms, and appliances to find your perfect match.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link to="/kitchens" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
          Shop Kitchens <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/bathrooms" className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary/50 transition-colors">
          Shop Bathrooms
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default Cart;
