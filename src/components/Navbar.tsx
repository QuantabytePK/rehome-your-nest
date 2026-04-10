import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, User, ShoppingBag, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Kitchens", href: "/kitchens" },
  { label: "Bathrooms", href: "/bathrooms" },
  { label: "Appliances", href: "/appliances" },
  { label: "Home & Garden", href: "/home-garden" },
  { label: "Something to Sell", href: "/something-to-sell" },
  { label: "How it works", href: "/how-it-works" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Rehome
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/contact" className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5" />
          </Link>
          <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <Link to="/wishlist" className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </Link>
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden bg-card"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-3 border-t border-border">
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                <Link to="/wishlist" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Wishlist</Link>
                <Link to="/cart" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Basket</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
