import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, User, ShoppingBag, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Kitchens", href: "#" },
  { label: "Bathrooms", href: "#" },
  { label: "Appliances", href: "#" },
  { label: "Home & Garden", href: "#" },
  { label: "Something to Sell", href: "#" },
  { label: "How it works", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Rehome
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
