import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wishlist = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="container py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
        <Heart className="w-8 h-8 text-muted-foreground" />
      </div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Your Wishlist is Empty</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Save your favourite items here so you never miss out on the perfect piece for your home.
      </p>
      <Link to="/kitchens" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
        Start Browsing <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
    <Footer />
  </div>
);

export default Wishlist;
